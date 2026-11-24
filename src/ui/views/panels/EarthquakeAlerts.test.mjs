import '../../../testSupport/registerDom.mjs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { setImmediate as settle } from 'node:timers/promises';
import { createApp, nextTick } from 'vue';
import EarthquakeAlerts from './EarthquakeAlerts.vue';

function mount(t, permission) {
  const calls = [];
  class FakeNotification {
    static async requestPermission(){ calls.push('permission'); return permission; }
    constructor(title,opts){ calls.push({title, ...opts}); }
  }
  const old=Object.getOwnPropertyDescriptor(window,'Notification');
  Object.defineProperty(window,'Notification',{configurable:true,value:FakeNotification});
  t.after(()=>old ? Object.defineProperty(window,'Notification',old) : delete window.Notification);
  const host=document.createElement('div');
  document.body.append(host);
  const app=createApp(EarthquakeAlerts);
  app.mount(host);
  t.after(()=>{app.unmount();host.remove();});
  const submit=()=>host.querySelector('form').dispatchEvent(new Event('submit',{cancelable:true}));
  return {host,calls,submit};
}

test('permission is requested on explicit start and denial prevents a fetch',async t=>{
  const {host,calls,submit}=mount(t,'denied');
  const fetch=t.mock.method(globalThis,'fetch',()=>{throw Error('unexpected fetch');});
  assert.deepEqual(calls,[]);submit();await settle();
  assert.deepEqual(calls,['permission']);assert.equal(fetch.mock.callCount(),0);
  assert.match(host.querySelector('[role=status]').textContent,/unavailable or blocked/);
});

test('successful polls notify once; mute and stop apply to subsequent deliveries',async t=>{
  const {host,calls,submit}=mount(t,'granted');
  let next;
  const original=setTimeout;
  t.mock.method(globalThis,'setTimeout',(fn,ms,...args)=>{
    if(ms===60_000){ next=fn;return 0; }
    return original(fn,ms,...args);
  });
  const ids=[];
  t.mock.method(globalThis,'fetch',async()=>Response.json({features:ids.map(id=>({id,
    geometry:{type:'Point',coordinates:[10,5]},properties:{time:1,mag:5,place:'Coast'}}))}));
  submit();await settle();await nextTick();
  assert.deepEqual(calls,['permission']);
  ids.push('event1');await next();await next();
  assert.equal(calls.length,2);assert.match(calls[1].body,/1970-01-01T00:00:00.001Z/);
  host.querySelector('button[aria-pressed]').click();ids.push('event2');await next();
  assert.equal(calls.length,2);
  const late=next;[...host.querySelectorAll('button')].find(b=>b.textContent==='Stop').click();
  ids.push('event3');await late();assert.equal(calls.length,2);
});
