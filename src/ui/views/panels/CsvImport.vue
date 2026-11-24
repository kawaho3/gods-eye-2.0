<script setup>
import { computed, onBeforeUnmount, ref, shallowRef } from 'vue';
import { t } from '../../../i18n/index.js';
import { readCsvTable, previewCsv } from '../../../data/csvImport.js';
import { MAX_IMPORT_BYTES } from '../../../data/geoImportShared.js';
import { useDisplayStore } from '../../stores/display.js';
import UiButton from '../../kit/UiButton.vue';

const display = useDisplayStore();
const table = shallowRef(null);
const mapping = ref({});
const filename = ref('');
const target = ref('');
const notice = ref('');
const applying = ref(false);
let version = 0;
onBeforeUnmount(() => { version++; });
const rows = computed(() => display.geoImport?.rows ?? []);
const preview = computed(() => table.value ? previewCsv(table.value, mapping.value) : null);
const fields = computed(() => [
  ['lat', t('Latitude column')], ['lon', t('Longitude column')],
  ['time', t('Timestamp column (optional)')], ['id', t('ID column (optional)')],
]);

async function readFile(event) {
  const current = ++version;
  const input = event.target;
  const file = input.files?.[0];
  input.value = '';
  table.value = null;
  notice.value = '';
  if (!file) return;
  try {
    if (file.size > MAX_IMPORT_BYTES) throw new Error();
    const next = readCsvTable(await file.text());
    if (current !== version) return;
    filename.value = file.name;
    mapping.value = next.mapping;
    table.value = next;
  } catch {
    if (current === version) notice.value = t('Check the CSV header, size and row limit.');
  }
}

async function apply() {
  const parsed = preview.value;
  if (applying.value || !parsed?.features.length || !display.geoImport) return;
  const current = version;
  applying.value = true;
  try {
    const data = JSON.stringify({ type: 'FeatureCollection', features: parsed.features });
    const file = new File([data], filename.value.replace(/(?:\.csv)?$/i, '.geojson'), { type: 'application/geo+json' });
    const results = await display.act('applyCsvLayer', file, target.value || null);
    if (current !== version) return;
    const result = results?.[0];
    if (!result?.ok) throw new Error();
    target.value = result.id;
    notice.value = t('CSV layer updated.');
  } catch {
    if (current === version) notice.value = t('That file could not be read.');
  } finally {
    applying.value = false;
  }
}
</script>

<template>
  <details class="csv-import">
    <summary>{{ t('Import local CSV') }}</summary>
    <label>{{ t('Choose files') }} <input type="file" accept=".csv,text/csv" @change="readFile" /></label>
    <template v-if="table">
      <label v-for="[field, label] in fields" :key="field">{{ label }}
        <select v-model="mapping[field]">
          <option value="">{{ t('None') }}</option>
          <option v-for="header in table.headers" :key="header" :value="header">{{ header }}</option>
        </select>
      </label>
      <p v-if="!preview.ready">{{ t('Choose distinct columns for each field.') }}</p>
      <template v-else>
        <p>{{ t('Valid rows: {valid}. Invalid rows: {invalid}.', { valid: preview.features.length, invalid: preview.rejected }) }}</p>
        <p v-if="preview.invalidRows.length">{{ t('Rejected records: {rows}', { rows: preview.invalidRows.join(', ') }) }}</p>
        <ul :aria-label="t('Preview')"><li v-for="(feature, i) in preview.features.slice(0, 5)" :key="i">{{ feature.properties.name }} {{ feature.geometry.coordinates.join(', ') }} {{ feature.properties.timestamp }}</li></ul>
      </template>
      <label>{{ t('Layer') }}
        <select v-model="target"><option value="">{{ t('Create a new layer') }}</option><option v-for="row in rows" :key="row.id" :value="row.id">{{ row.name }}</option></select>
      </label>
      <UiButton :disabled="applying || !preview.features.length || !display.geoImport" @click="apply">{{ t('Import') }}</UiButton>
    </template>
    <p role="status" aria-live="polite">{{ notice }}</p>
  </details>
</template>

<style scoped>
.csv-import label { display: block; margin: .4rem 0; }
.csv-import select, .csv-import input { max-width: 100%; }
.csv-import p, .csv-import li { overflow-wrap: anywhere; }
</style>
