<script setup>
import { onBeforeUnmount, ref } from 'vue';
import { t } from '../../../i18n/index.js';
import { createUsgsEarthquakeSource } from '../../../layers/earthquakes/source.js';
import { createQuakeAlerts, quakeRegion } from '../../../data/quakeAlerts.js';
import UiButton from '../../kit/UiButton.vue';

const bbox = ref('-180,-90,180,90');
const magnitude = ref(4);
const active = ref(false);
const muted = ref(false);
const notice = ref('');
const lastMatch = ref('');
const source = createUsgsEarthquakeSource();
let session = null;
let timer;

function stop() {
  session?.abort();
  session = null;
  clearTimeout(timer);
  active.value = false;
  muted.value = false;
  notice.value = '';
}

async function start() {
  if (active.value) return;
  let observe;
  try {
    const bounds = bbox.value.split(',').map((s) => s.trim() === '' ? NaN : Number(s));
    observe = createQuakeAlerts(quakeRegion(bounds, Number(magnitude.value)));
  } catch {
    notice.value = t('Check the bounds and minimum magnitude.');
    return;
  }
  stop();
  lastMatch.value = '';
  const controller = new AbortController();
  session = controller;
  active.value = true;
  try {
    if (!window.Notification || await window.Notification.requestPermission() !== 'granted')
      throw new Error();
  } catch {
    if (session !== controller) return;
    stop();
    notice.value = t('Desktop notifications are unavailable or blocked.');
    return;
  }
  async function poll() {
    if (session !== controller) return;
    let matches;
    try {
      const rows = await source.getSnapshot({signal: AbortSignal.any([controller.signal, AbortSignal.timeout(30_000)])});
      if (session !== controller) return;
      matches = observe(rows);
      notice.value = t('Monitoring USGS while this tab is open.');
    } catch {
      if (session !== controller) return;
      notice.value = t('USGS unavailable. Retrying in one minute.');
    }
    for (const event of matches ?? []) {
      const body = [event.place, new Date(event.time).toISOString()].filter(Boolean).join(' · ');
      lastMatch.value = `USGS M${event.mag} · ${body}`;
      if (!muted.value) {
        try { new window.Notification(`USGS M${event.mag}`, {body, tag:'gev-quake-'+event.usgsId}); }
        catch {
          stop();
          notice.value = t('Desktop notifications are unavailable or blocked.');
          return;
        }
      }
    }
    timer = setTimeout(poll, 60_000);
  }
  await poll();
}

onBeforeUnmount(stop);
</script>

<template>
  <details class="quake-alerts">
    <summary>{{ t('Earthquake alerts') }}</summary>
    <form @submit.prevent="start">
      <label>{{ t('Bounds (west, south, east, north)') }}<input v-model="bbox" class="gev-field" :disabled="active" required></label>
      <label>{{ t('Minimum magnitude') }}<input v-model="magnitude" class="gev-field" type="number" min="2.5" max="10" step="any" :disabled="active" required></label>
      <UiButton v-if="!active" type="submit" variant="action" size="compact">{{ t('Enable desktop alerts') }}</UiButton>
    </form>
    <div v-if="active">
      <UiButton variant="action" size="compact" :pressed="muted" @click="muted = !muted">{{ t('Mute notifications') }}</UiButton>
      <UiButton variant="action" size="compact" @click="stop">{{ t('Stop') }}</UiButton>
    </div>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="lastMatch">{{ lastMatch }}</p>
  </details>
</template>

<style scoped>
.quake-alerts { margin: .45rem 0; font-size: .8rem; }
summary { cursor: pointer; }
form, label { display: grid; gap: .3rem; }
form { padding: .5rem 0; }
input { min-width: 0; }
</style>
