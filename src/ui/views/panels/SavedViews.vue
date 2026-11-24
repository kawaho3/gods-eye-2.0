<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { t } from '../../../i18n/index.js';
import UiButton from '../../kit/UiButton.vue';
import UiCloseButton from '../../kit/UiCloseButton.vue';
import UiIcon from '../../kit/UiIcon.vue';
import { vFieldValue } from '../../rail/fieldValue.js';
import { vFocusSafeChildren } from '../../rail/focusSafeChildren.js';
import { useSavedViewsStore, VIEW_NAME_LIMIT } from '../../stores/savedViews.js';

const saved = useSavedViewsStore();
const open = ref(false);
const name = ref('');
const nameField = ref(null);
const saving = ref(false);
let stop;
onMounted(() => { stop = saved.observe(); });
onBeforeUnmount(() => stop?.());

async function save() {
  if (saving.value) return;
  const submitted = name.value;
  saving.value = true;
  try {
    if (await saved.save(submitted) && name.value === submitted) name.value = '';
  } finally {
    saving.value = false;
  }
}

async function rename(row, field) {
  const submitted = field.value;
  await saved.rename(row.id, submitted);
  if (field.value === submitted)
    field.value = saved.views.find((view) => view.id === row.id)?.name ?? row.name;
}

function focusName() {
  nameField.value?.focus();
}
</script>

<template>
  <div class="pp-toggle-group" id="saved-views-group">
    <UiButton class="pp-toggle-btn" :aria-expanded="String(open)" aria-controls="saved-views-body" @click="open = !open">
      <UiIcon class="pp-icon" name="star" :size="null" />
      <span class="pp-label">{{ t('Saved views') }}</span>
    </UiButton>
    <div v-show="open" id="saved-views-body" class="saved-views-body">
      <form @submit.prevent="save">
        <input ref="nameField" v-model="name" class="gev-field" type="text" :maxlength="VIEW_NAME_LIMIT" :aria-label="t('View name')" :placeholder="t('View name')" autocomplete="off" />
        <UiButton type="submit" variant="action" size="compact" :disabled="saving" :label="t('Save current view')"><UiIcon name="add" /></UiButton>
      </form>
      <ul v-focus-safe-children="focusName" :aria-label="t('Saved views')">
        <li v-for="row in saved.views" :key="row.id">
          <input class="gev-field" type="text" v-field-value="row.name" :maxlength="VIEW_NAME_LIMIT" :aria-label="t('Name of {name}', { name: row.name })" autocomplete="off" @change="rename(row, $event.currentTarget)" @keydown.enter.prevent="$event.currentTarget.blur()" />
          <UiButton variant="icon" :label="t('Fly to {name}', { name: row.name })" @click="saved.restore(row.id)"><UiIcon name="my_location" /></UiButton>
          <UiCloseButton glyph="icon" :label="t('Remove {name}', { name: row.name })" :title="t('Remove {name}', { name: row.name })" @click="saved.remove(row.id)" />
        </li>
      </ul>
      <p v-if="saved.notice" role="status">{{ t(saved.notice) }}</p>
    </div>
  </div>
</template>
