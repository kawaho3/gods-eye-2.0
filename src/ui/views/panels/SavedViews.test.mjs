import '../../../testSupport/registerDom.mjs';
import { beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { setImmediate as settle } from 'node:timers/promises';
import { createApp, nextTick } from 'vue';
import { createPinia } from 'pinia';
import { useGlobeActionsStore } from '../../stores/globeActions.js';
import { useSavedViewsStore } from '../../stores/savedViews.js';
import SavedViews from './SavedViews.vue';

beforeEach(() => {
  window.localStorage.clear();
  document.body.replaceChildren();
});

function mount(t, current = 'v=2&lat=10&lon=20') {
  const pinia = createPinia();
  const restored = [];
  useGlobeActionsStore(pinia).connect({
    captureSavedView: () => current,
    restoreSavedView: (hash) => {
      restored.push(hash);
      return true;
    },
  });
  const host = document.body.appendChild(document.createElement('div'));
  const app = createApp(SavedViews).use(pinia);
  app.mount(host);
  const unmount = () => {
    if (host.isConnected) {
      app.unmount();
      host.remove();
    }
  };
  t.after(unmount);
  host.querySelector('button[aria-controls="saved-views-body"]').click();
  return { host, store: useSavedViewsStore(pinia), restored, unmount };
}

async function save(host, name) {
  const input = host.querySelector('form input');
  input.value = name;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  host.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  await nextTick();
}

test('save, rename, remount, restore and remove a named globe view', async (t) => {
  const first = mount(t);
  await save(first.host, '  Valley  ');
  const rowName = first.host.querySelector('li input');
  assert.equal(rowName.value, 'Valley');
  rowName.value = 'North valley';
  rowName.dispatchEvent(new Event('change', { bubbles: true }));
  await settle();
  first.unmount();

  const next = mount(t, 'v=2&lat=50&lon=40');
  await nextTick();
  assert.equal(next.host.querySelector('li input').value, 'North valley');
  next.host.querySelector('[aria-label="Fly to North valley"]').click();
  assert.deepEqual(next.restored, ['v=2&lat=10&lon=20']);
  next.host.querySelector('[aria-label="Remove North valley"]').click();
  await settle();
  assert.equal(next.host.querySelectorAll('li').length, 0);
  assert.equal(window.localStorage.length, 0);
});

test('a fourth save keeps the three views and offers a way to free a slot', async (t) => {
  const { host, store } = mount(t);
  for (const name of ['One', 'Two', 'Three', 'Four']) await save(host, name);
  assert.deepEqual(store.views.map((row) => row.name), ['One', 'Two', 'Three']);
  assert.match(host.querySelector('[role="status"]').textContent, /Delete a saved view/);
  const firstId = store.views[0].id;
  await store.remove(firstId);
  await save(host, 'Four');
  assert.equal(await store.rename(firstId, 'Old tab'), false);
  assert.equal(await store.remove(firstId), false);
  assert.deepEqual(store.views.map((row) => row.name), ['Four', 'Two', 'Three']);
});

test('blocked writes, missing camera and empty names leave storage consistent', async (t) => {
  const { store } = mount(t, null);
  assert.equal(await store.save('  '), false);
  assert.match(store.notice, /Enter a view name/);
  assert.equal(await store.save('Globe'), false);
  assert.match(store.notice, /globe view is unavailable/);
  assert.equal(window.localStorage.length, 0);

  const next = mount(t);
  await save(next.host, 'Keep me');
  const { id } = next.store.views[0];
  const storage = window.localStorage;
  const key = storage.key(0);
  const before = storage.getItem(key);
  const write = t.mock.method(storage, 'setItem', () => {
    throw new DOMException('Storage quota exceeded', 'QuotaExceededError');
  });
  assert.equal(await next.store.rename(id, 'Lost'), false);
  assert.equal(write.mock.callCount(), 1);
  assert.match(next.store.notice, /Browser storage is unavailable/);
  assert.equal(next.store.views[0].name, 'Keep me');
  assert.equal(storage.getItem(key), before);
});
