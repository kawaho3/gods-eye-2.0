# Issue #13 — Static share-link implementation and verification

This branch starts the **free static place-link** portion of [issue #13](https://github.com/kawaho3/gods-eye-2.0/issues/13). The rest of issue #13 — premium wallboards, multi-monitor sync and live team rooms — remains outstanding.

## Current implementation

- `ShareLinkManager.buildLink({ staticPlace: true })` creates a compact `/share/<code>` link from the current camera pose and shareable visual settings.
- `ShareLinkManager.copyStaticLink()` copies the fixed place snapshot; `copyLink({ staticPlace: true })` is also supported.
- The existing `buildLink()` / `copyLink()` continue to include a followed entity by default. The static path explicitly sets `view.kind = 'place'` and does not ask the followed-entity provider for identifiers or last-known position.
- Static links exclude Data Library tokens, which can represent local/private sources. Local imported KML/GeoJSON bytes are never included by the existing share codec.
- All newly generated share links drop the sender's URL **query string** so a `?token=`, `?apiKey=`, `?session=` or other private parameter cannot leak into a recipient's address.
- The shell connects a `shareStatic` action through `useGlobeActionsStore`, without changing the existing `share` action. **A visible button/menu entry still needs to call `shareStatic`** to complete the user-facing acceptance criterion.

## Automated checks

Run on a complete checkout with the Node version required by `package.json`:

```sh
npm ci
node --test src/share/shareLinkPath.test.mjs src/share/staticShareLink.test.mjs
npm run format:check
npm test
npm run build
```

The focused tests check that a tracked aircraft still produces a normal thing link, a static share produces a place link with the camera's settings, local library selection is omitted, clipboard copy works, and sender query parameters are not propagated. Path parsing remains covered by the existing `shareLinkPath.test.mjs`.

## Browser acceptance still needed

- [ ] Add a clearly labeled **Copy static place link** UI action, including when the user is following an entity.
- [ ] In a clean self-hosted browser, open a generated `/share/<code>` URL **directly**, not through in-app navigation, and verify that the camera, style, public layer settings and available controls restore.
- [ ] Repeat while following an aircraft, satellite or vessel; verify the static snapshot does not start following on the recipient's browser.
- [ ] Verify sensitive query parameters, user credentials, private notes and local KML/GeoJSON file bytes never appear in the shared URL.
- [ ] Verify the existing dynamic Follow share still works and that keyless deployments give a clear fallback if a configured map provider is unavailable.

The exact source-level share branch passed four isolated stub-driven checks; five modified/added JS files also passed syntax compilation. **The full unit, formatter, build and browser suites have not run in this environment.** Do not mark issue #13 complete before the browser acceptance and premium features are implemented.
