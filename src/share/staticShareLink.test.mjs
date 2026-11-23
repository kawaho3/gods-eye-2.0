import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ShareLinkManager } from '../sharelink.js';
import { decodeShareView } from './viewCodec.js';

const nowMs = Date.UTC(2026, 10, 23, 12, 0, 0);

function installBrowserGlobals(t, href) {
  const oldWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const oldNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const clipboardWrites = [];
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: { location: { href } },
  });
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: {
      clipboard: {
        async writeText(text) {
          clipboardWrites.push(text);
        },
      },
    },
  });
  t.after(() => {
    if (oldWindow) Object.defineProperty(globalThis, 'window', oldWindow);
    else delete globalThis.window;
    if (oldNavigator)
      Object.defineProperty(globalThis, 'navigator', oldNavigator);
    else delete globalThis.navigator;
  });
  return clipboardWrites;
}

function cameraDouble() {
  return {
    on: () => () => {},
    pose: () => ({
      lat: 37.7749,
      lon: -122.4194,
      height: 1200,
      heading: 0,
      pitch: -Math.PI / 6,
      roll: 0,
    }),
  };
}

function readSharedView(href) {
  const code = new URL(href).pathname.split('/').at(-1);
  const decoded = decodeShareView(code);
  assert.equal(decoded.ok, true, decoded.reason);
  return decoded.state;
}

test('static share excludes followed aircraft and library data', async (t) => {
  const copied = installBrowserGlobals(
    t,
    'https://example.test/app/index.html?apiKey=secret&lang=fr&session=private',
  );
  const manager = new ShareLinkManager(
    {},
    {
      camera: cameraDouble(),
      worldClock: { isLive: () => true },
    },
  );
  t.after(() => manager.destroy());

  let followCalls = 0;
  manager.setFollowSubjectProvider(() => {
    followCalls += 1;
    return { kind: 'aircraft', id: 'a1b2c3' };
  });
  manager.setLibraryParamsEncoder((params) => params.set('lib', 'ab'));

  const dynamic = manager.buildLink({ nowMs });
  const followed = readSharedView(dynamic);
  assert.equal(followed.view.kind, 'thing');
  assert.deepEqual(followed.view.entity, {
    kind: 'aircraft',
    id: 'a1b2c3',
  });
  assert.deepEqual(followed.library, ['ab']);

  const staticHref = manager.buildLink({ nowMs, staticPlace: true });
  const place = readSharedView(staticHref);
  assert.equal(place.view.kind, 'place');
  assert.equal(place.lat, 37.7749);
  assert.equal(place.lon, -122.4194);
  assert.equal(place.alt, 1200);
  assert.equal(place.pitch, -30);
  assert.deepEqual(place.library, []);
  assert.equal(
    followCalls,
    1,
    'static snapshot never queries followed entity',
  );
  assert.ok(!staticHref.includes('a1b2c3'));
  assert.equal(new URL(staticHref).search, '');
  assert.match(staticHref, /^https:\/\/example\.test\/app\/share\//);

  assert.equal(await manager.copyStaticLink({ nowMs }), true);
  assert.equal(copied.at(-1), staticHref);
  assert.equal(readSharedView(copied.at(-1)).view.kind, 'place');

  assert.equal(await manager.copyLink({ nowMs }), true);
  assert.equal(readSharedView(copied.at(-1)).view.kind, 'thing');
});

test('static share without tracking keeps camera and style', (t) => {
  installBrowserGlobals(t, 'https://example.test/gev/');
  const manager = new ShareLinkManager(
    {},
    { camera: cameraDouble(), worldClock: { isLive: () => true } },
  );
  t.after(() => manager.destroy());
  manager.onStyleChange('normal');
  const state = readSharedView(manager.buildLink({ staticPlace: true, nowMs }));
  assert.equal(state.view.kind, 'place');
  assert.equal(state.style, 'normal');
  assert.equal(state.lat, 37.7749);
  assert.equal(state.lon, -122.4194);
});
