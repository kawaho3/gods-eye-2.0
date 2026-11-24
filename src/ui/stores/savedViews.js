import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';
import { msg } from '../../i18n/marker.js';
import { useGlobeActionsStore } from './globeActions.js';

const SLOT_PREFIX = 'gev:saved-view:v1:';
const SLOTS = [0, 1, 2];
export const VIEW_NAME_LIMIT = 80;
const STORAGE_ERROR = msg(
  'Browser storage is unavailable. Check site permissions or free up space.',
);
const GLOBE_ERROR = msg('The globe view is unavailable. Try again.');

function readViews(storage) {
  const rows = [];
  for (const slot of SLOTS) {
    const raw = storage.getItem(SLOT_PREFIX + slot);
    if (!raw) continue;
    try {
      const row = JSON.parse(raw);
      if (
        typeof row?.id === 'string' &&
        row.id &&
        typeof row.name === 'string' &&
        row.name.trim() &&
        typeof row.hash === 'string' &&
        row.hash
      ) {
        rows.push({ slot, id: row.id, name: row.name, hash: row.hash });
      }
    } catch {
      // A damaged slot can be reused without disturbing the other views.
    }
  }
  return rows;
}

/** The user's three globe bookmarks, stored on this browser's origin. */
export const useSavedViewsStore = defineStore('gev-saved-views', () => {
  const globe = useGlobeActionsStore();
  const views = shallowRef([]);
  const notice = ref('');

  function fail(message) {
    notice.value = message;
    return false;
  }

  function refresh() {
    try {
      views.value = readViews(window.localStorage);
      notice.value = '';
      return true;
    } catch {
      return fail(STORAGE_ERROR);
    }
  }

  function observe() {
    refresh();
    const changed = (event) => {
      if (event.key === null || event.key?.startsWith(SLOT_PREFIX)) refresh();
    };
    window.addEventListener('storage', changed);
    return () => window.removeEventListener('storage', changed);
  }

  // Take a fresh inventory under a cross-tab lock when available. Separate
  // slot keys keep edits to different bookmarks independent on HTTP hosts too.
  async function change(edit) {
    const apply = () => {
      const storage = window.localStorage;
      views.value = readViews(storage);
      notice.value = '';
      if (!edit(storage, views.value)) return false;
      views.value = readViews(storage);
      return true;
    };
    try {
      const locks = window.navigator.locks;
      return locks ? await locks.request(SLOT_PREFIX, apply) : apply();
    } catch {
      return fail(STORAGE_ERROR);
    }
  }

  function save(input) {
    return change((storage, rows) => {
      const slot = SLOTS.find((n) => !rows.some((row) => row.slot === n));
      if (slot === undefined)
        return fail(msg('Delete a saved view to make room for another.'));
      const name = input.trim().slice(0, VIEW_NAME_LIMIT);
      if (!name) return fail(msg('Enter a view name.'));
      const hash = globe.act('captureSavedView');
      if (!hash) return fail(GLOBE_ERROR);
      const id = window.crypto.getRandomValues(new Uint32Array(4)).join('-');
      storage.setItem(SLOT_PREFIX + slot, JSON.stringify({ id, name, hash }));
      return true;
    });
  }

  function rename(id, input) {
    return change((storage, rows) => {
      const row = rows.find((entry) => entry.id === id);
      if (!row) return false;
      const name = input.trim().slice(0, VIEW_NAME_LIMIT);
      if (!name) return fail(msg('Enter a view name.'));
      storage.setItem(
        SLOT_PREFIX + row.slot,
        JSON.stringify({ id, name, hash: row.hash }),
      );
      return true;
    });
  }

  function remove(id) {
    return change((storage, rows) => {
      const row = rows.find((entry) => entry.id === id);
      if (!row) return false;
      storage.removeItem(SLOT_PREFIX + row.slot);
      return true;
    });
  }

  function restore(id) {
    if (!refresh()) return false;
    const row = views.value.find((entry) => entry.id === id);
    if (!row) return false;
    return globe.act('restoreSavedView', row.hash) || fail(GLOBE_ERROR);
  }

  return { views, notice, observe, save, rename, restore, remove };
});
