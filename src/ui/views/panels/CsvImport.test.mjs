import '../../../testSupport/registerDom.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { setImmediate as settle } from 'node:timers/promises';
import { createApp, nextTick } from 'vue';
import { createPinia } from 'pinia';
import { useDisplayStore } from '../../stores/display.js';
import CsvImport from './CsvImport.vue';

test('preview, import and reimport through the display controls', async (t) => {
  const pinia = createPinia();
  const display = useDisplayStore(pinia);
  const calls = [];
  display.publishGeoImport({ rows: [], hint: '' });
  display.connect({
    async applyCsvLayer(file, id) {
      calls.push({ file, id });
      display.publishGeoImport({ rows: [{ id: 'import-8', name: file.name }], hint: '' });
      return [{ ok: true, id: 'import-8' }];
    },
  });
  const host = document.body.appendChild(document.createElement('div'));
  const app = createApp(CsvImport).use(pinia);
  app.mount(host);
  t.after(() => { app.unmount(); host.remove(); });
  const picker = host.querySelector('input[type=file]');
  Object.defineProperty(picker, 'files', { configurable: true, value: [{
    name: 'sample.csv', size: 40, text: async () => 'lat,lon,id,private\n1,2,first,secret\nx,0,x,hidden',
  }] });
  picker.dispatchEvent(new Event('change', { bubbles: true }));
  await settle();
  await nextTick();
  assert.match(host.textContent, /Valid rows: 1\. Invalid rows: 1\./);
  assert.match(host.textContent, /Rejected records: 3/);
  assert.doesNotMatch(host.textContent, /secret|hidden/);
  const button = host.querySelector('button');
  button.click();
  await settle();
  await nextTick();
  assert.equal(calls[0].id, null);
  assert.equal(calls[0].file.name, 'sample.geojson');
  assert.match(host.textContent, /CSV layer updated/);
  button.click();
  await settle();
  assert.equal(calls[1].id, 'import-8');
});
