# Issue #3 — Local KML and GeoJSON import verification

This document tracks the acceptance checks for [issue #3](https://github.com/kawaho3/gods-eye-2.0/issues/3). The issue covers **local**, session-scoped geospatial file imports; it does not introduce a server upload API or persistent storage. Both formats remain available in the free tier.

## Implementation and ownership

| Concern | Existing implementation / verification |
| --- | --- |
| Format detection, JSON/XML parsing, bounds, safety and size limits | `src/data/geoFileImport.js`, `src/data/geoFileImport.test.mjs` |
| GeoJSON and KML geometry conversion and names | `src/data/geoImportFeatures.js` and `src/data/geoFileImport.test.mjs` |
| File picker, drag and drop, one row per import, hide/show, fly-to and remove | `src/ui/geoFileImport.js`, `src/ui/geoFileImport.test.mjs` |
| Draw-set cleanup and terrain grounding | `src/data/geoImportPins.js`, `src/data/geoFileImport.test.mjs` |
| Actual browser rendering, local-only request policy, input and row actions | `scripts/qa-geo-import.mjs` |

An import's drawing is session-local; the controller does not send file contents to an application backend. Only a bounded, plain-text feature name survives into a rendered item's metadata; arbitrary GeoJSON properties, KML descriptions and remote embedded resources are intentionally not retained. **Do not remove these privacy restrictions while implementing the issue**. If additional properties are required in future, design an explicit safe allowlist and obtain a separate review.

## Regression addressed on this branch

The GeoJSON preflight previously treated missing, primitive or otherwise invalid `Feature.geometry` values as acceptable in some mixed FeatureCollections. A GeoJSON Feature must have a **geometry object of a supported type** or the explicit value `null`. A Feature or FeatureCollection nested in `Feature.geometry` is not a geometry. The branch rejects these cases with the existing actionable `GeoImportError` and preserves legitimate null geometries and nested GeometryCollections.

The regression tests cover malformed geometry, a valid mixed null-and-point collection, allowed GeometryCollection nesting, and early refusal of GeoJSON/KML files larger than 50 MiB **before reading bytes**.

## Run checks on a complete checkout

Use a supported Node version from `package.json`, with project dependencies installed:

```sh
npm ci
node --test src/data/geoFileImport.test.mjs src/ui/geoFileImport.test.mjs
npm run format:check
npm run check:boundaries
```

For real-browser acceptance, run the app on the port the existing QA script expects, then launch the browser gate in another shell:

```sh
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

```sh
QA_BASE_URL=http://127.0.0.1:4173 node scripts/qa-geo-import.mjs
```

The browser gate uses fixture-only files. It checks GeoJSON, KML, KMZ and GPX import; labels; distinct rows/draw sets; rendered geometry; hide/show; removal; unsupported files; and the absence of external requests originating from file content. Browser prerequisites (including Chrome for Puppeteer) must be available; an inability to launch the browser is **not** a passing acceptance run.

## Manual acceptance checklist

- [ ] On a clean, keyless install, import valid named KML and GeoJSON data from the local file picker and via drag-and-drop. Confirm each appears as a separate named layer, with supported point/line/polygon geometry.
- [ ] Hide and show each layer, use Fly to, and remove it. Confirm removal clears both its UI row and its rendered geometry without changing other layers.
- [ ] Import malformed JSON, malformed KML and invalid GeoJSON geometry. Confirm a readable refusal and no partial layer.
- [ ] Choose KML and GeoJSON files larger than 50 MiB. Confirm a size-specific error occurs without reading/drawing their bytes.
- [ ] With browser network requests recorded, import KML with remote links and GeoJSON with arbitrary metadata. Confirm the importer makes no requests for these URLs, keeps no arbitrary script/HTML metadata in draw items and does not upload file bytes.
- [ ] Re-run after a reload. Confirm the previous session-local imports were cleaned up (this is intentional; persistent workspaces are a separate roadmap item).

## Evidence and completion

The pure GeoJSON validation function was checked against 13 isolated scenarios, all passing. **Full Node unit tests, format checks and the real-browser gate have not been run in this environment**, because there is no complete executable repository checkout or usable GitHub network access in the local runtime. This issue should stay open until the full acceptance checks above pass.
