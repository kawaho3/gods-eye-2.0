# gods-eye-2.0 roadmap

56 roadmap work items, with 16 Free and 40 Premium, organized into 15 GitHub issues.

Each work item links to its published issue. The original scope, tier and acceptance criteria are retained below.

Existing features are framed as verification or follow-up work. New features have their own implementation scope and acceptance criteria.

## Published issues

| Issue | Work | Roadmap drafts |
| --- | --- | --- |
| [#1](https://github.com/kawaho3/gods-eye-2.0/issues/1) | [Free] Verify keyless Esri/OSM globe startup | 01 |
| [#2](https://github.com/kawaho3/gods-eye-2.0/issues/2) | [Free] Verify keyless live feeds and public cameras | 02, 03, 04, 05, 06 |
| [#3](https://github.com/kawaho3/gods-eye-2.0/issues/3) | [Free] Verify local KML and GeoJSON imports | 07, 08 |
| [#4](https://github.com/kawaho3/gods-eye-2.0/issues/4) | Complete provider key setup and encrypted key storage | 09, 21 |
| [#5](https://github.com/kawaho3/gods-eye-2.0/issues/5) | [Premium] Build private connectors for feeds, cameras and enterprise GIS | 10, 11, 12, 13, 14, 15, 16, 17, 18 |
| [#6](https://github.com/kawaho3/gods-eye-2.0/issues/6) | Save browser views and persistent mission workspaces with optional sync | 19, 20, 22 |
| [#7](https://github.com/kawaho3/gods-eye-2.0/issues/7) | Add geofences and aircraft/vessel watchlists to map inspection | 23, 24, 25, 26 |
| [#8](https://github.com/kawaho3/gods-eye-2.0/issues/8) | [Premium] Evaluate emergency and environmental alert conditions | 27, 28, 29, 30 |
| [#9](https://github.com/kawaho3/gods-eye-2.0/issues/9) | [Premium] Deliver alerts to desktop, Telegram, Discord and webhooks | 31, 32, 33, 34 |
| [#10](https://github.com/kawaho3/gods-eye-2.0/issues/10) | Record telemetry, replay synchronized layers and export timelapses | 35, 36, 37, 38 |
| [#11](https://github.com/kawaho3/gods-eye-2.0/issues/11) | Connect BYOK voice, MCP, offline models and cloud LLMs | 39, 40, 41, 42, 43, 44 |
| [#12](https://github.com/kawaho3/gods-eye-2.0/issues/12) | [Premium] Correlate observations and export situation briefs | 45, 46, 47 |
| [#13](https://github.com/kawaho3/gods-eye-2.0/issues/13) | Share views and add wallboards, multi-monitor cockpits and team rooms | 48, 49, 50, 51 |
| [#14](https://github.com/kawaho3/gods-eye-2.0/issues/14) | Verify self-hosting and ship desktop installation, updates and background alerts | 52, 53, 54, 55 |
| [#15](https://github.com/kawaho3/gods-eye-2.0/issues/15) | [Premium] Package offline area caches | 56 |

## Core globe and feeds

### 01. [Free] Verify keyless Esri/OSM globe startup

[Published issue #1](https://github.com/kawaho3/gods-eye-2.0/issues/1)

#### Scope

Keep the existing keyless globe usable on a clean install.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] With no keys configured, Esri imagery loads over keyless terrain
- [ ] When Esri is unavailable, OSM fallback works and the UI explains the switch.
- [ ] The UI distinguishes keyless imagery and terrain from credentialed photorealistic 3D buildings.

### 02. [Free] Verify keyless live flights

[Published issue #2](https://github.com/kawaho3/gods-eye-2.0/issues/2)

#### Scope

Maintain the free live aircraft layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] The layer renders fresh positions without a key
- [ ] Stale or unavailable data is clearly displayed and recovers when the feed returns.

### 03. [Free] Verify keyless live satellites

[Published issue #2](https://github.com/kawaho3/gods-eye-2.0/issues/2)

#### Scope

Maintain the free satellite layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A keyless install loads and renders the satellite catalog
- [ ] The UI shows catalog freshness and handles a provider outage.

### 04. [Free] Verify keyless live weather

[Published issue #2](https://github.com/kawaho3/gods-eye-2.0/issues/2)

#### Scope

Keep weather overlays available without a paid API configuration.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A clean install can display the supported keyless weather layers
- [ ] Layer legends, update timestamps, and unavailable states are visible.

### 05. [Free] Verify keyless earthquake feed

[Published issue #2](https://github.com/kawaho3/gods-eye-2.0/issues/2)

#### Scope

Maintain the free earthquake layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Recent events show location, magnitude, and time
- [ ] No-data and provider-error states are distinguishable.

### 06. [Free] Verify keyless public cameras

[Published issue #2](https://github.com/kawaho3/gods-eye-2.0/issues/2)

#### Scope

Maintain the public camera layer on a fresh install.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Public cameras can be selected and previewed without a key
- [ ] The UI handles stale images, offline cameras, and unsupported playback.

### 07. [Free] Verify local KML import

[Published issue #3](https://github.com/kawaho3/gods-eye-2.0/issues/3)

#### Scope

Maintain the existing import from the user’s device.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Supported feature geometry is displayed with names and layer controls
- [ ] Invalid and oversized files produce actionable errors
- [ ] The original file stays on the device.

### 08. [Free] Verify local GeoJSON import

[Published issue #3](https://github.com/kawaho3/gods-eye-2.0/issues/3)

#### Scope

Maintain the existing on-device GeoJSON import as a separate layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Supported geometries and properties display correctly
- [ ] Invalid and oversized files produce actionable errors
- [ ] Users can remove the imported layer.

### 09. [Free] Complete BYOK support for third-party providers

[Published issue #4](https://github.com/kawaho3/gods-eye-2.0/issues/4)

#### Scope

Audit provider-specific key settings and fill configuration gaps.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Each configurable provider has documented key setup and validation
- [ ] Keys can be entered, replaced, and removed and are redacted from logs and share links.

### 10. [Premium] Add a private connector registry

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Provide a shared lifecycle and security model for premium private feeds.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Users can configure, test, enable, and disconnect a private connector
- [ ] Secrets are stored securely
- [ ] Connection status and recoverable errors are visible.

### 11. [Premium] Ingest private webhook feeds

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Receive user-owned webhook events through the connector registry.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Verify incoming requests
- [ ] Normalize valid payloads and handle replay or duplicate deliveries
- [ ] Reject invalid input with a clear error.

### 12. [Premium] Import private CSV feeds

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Load user-owned CSV data into time-aware layers.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Map latitude, longitude, and optional timestamp and ID columns
- [ ] Preview valid rows and report invalid rows
- [ ] Re-import updates the selected layer predictably.

### 13. [Premium] Connect authenticated REST feeds

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Poll a user-owned REST endpoint for updates.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure authentication, polling, and field mapping
- [ ] Retry transient failures with backoff and stop cleanly when disconnected.

### 14. [Premium] Connect private MQTT feeds

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Subscribe to telemetry from a user-authorized MQTT broker.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure broker and topic with encrypted transport and authentication
- [ ] Normalize incoming messages
- [ ] Reconnect without duplicating events by stable ID.

### 15. [Premium] Connect private WebSocket feeds

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Stream user-owned telemetry into a private layer.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure endpoint and message mapping
- [ ] Handle reconnects, malformed data, and repeated IDs
- [ ] Show stream status.

### 16. [Premium] Play authorized private RTSP streams

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Show an authorized camera stream inside a private workspace.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A secure local or server relay plays test RTSP streams in the browser
- [ ] Credentials stay out of the client and logs
- [ ] Disconnect stops the relay.

### 17. [Premium] Add private enterprise ArcGIS layers

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Allow users to add ArcGIS services they are authorized to access.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Load a protected test service with the appropriate credential flow
- [ ] Expose attribution, visibility, and request errors without disclosing credentials.

### 18. [Premium] Add private enterprise WMS layers

[Published issue #5](https://github.com/kawaho3/gods-eye-2.0/issues/5)

#### Scope

Render authenticated WMS imagery as a private globe layer.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Read service capabilities and allow layer selection
- [ ] Honor supported coordinate systems and attribution
- [ ] Credentials are redacted.

## Workspaces and persistence

### 19. [Free] Save up to three browser-local views

[Published issue #6](https://github.com/kawaho3/gods-eye-2.0/issues/6)

#### Scope

Store saved globe views in browser localStorage.

**Tier** — Free

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Create, rename, restore, and delete up to three views
- [ ] Views survive reload
- [ ] The fourth save prompts the user to free a slot or upgrade.

### 20. [Premium] Persist unlimited mission workspaces in SQLite

[Published issue #6](https://github.com/kawaho3/gods-eye-2.0/issues/6)

#### Scope

Store full layer states, annotations, camera bookmarks, and entity notes in a workspace.

**Tier** — Premium

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Users can create and switch between workspaces without an app-imposed count limit
- [ ] All workspace data survives restart
- [ ] Schema migrations preserve existing data.

### 21. [Premium] Add an encrypted provider-key vault

[Published issue #4](https://github.com/kawaho3/gods-eye-2.0/issues/4)

#### Scope

Store workspace and feed credentials securely.

**Tier** — Premium

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Keys are encrypted at rest with unlock material held separately
- [ ] Users can unlock, rotate, and remove keys
- [ ] Logs and workspace exports exclude secrets.

### 22. [Premium] Add opt-in workspace cloud sync

[Published issue #6](https://github.com/kawaho3/gods-eye-2.0/issues/6)

#### Scope

Sync selected mission workspaces across trusted devices.

**Tier** — Premium

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Sync is off by default
- [ ] Users can see sync state and recover from concurrent edits
- [ ] Provider keys stay local unless explicitly supported through an encrypted flow.

## Alerts and geofencing

### 23. [Free] Verify free manual map inspection

[Published issue #7](https://github.com/kawaho3/gods-eye-2.0/issues/7)

#### Scope

Keep basic investigation usable without the premium alerts engine.

**Tier** — Free

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Users can pan, zoom, select, and inspect supported entities in the free tier
- [ ] The interface does not require alert configuration for manual use.

### 24. [Premium] Create and evaluate polygon geofences

[Published issue #7](https://github.com/kawaho3/gods-eye-2.0/issues/7)

#### Scope

Draw user-defined regions and evaluate incoming events against them.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Users can draw, edit, and delete valid polygons
- [ ] Entry and exit rules are tested at region boundaries
- [ ] Invalid polygons show useful feedback.

### 25. [Premium] Add aircraft tail-number watchlists

[Published issue #7](https://github.com/kawaho3/gods-eye-2.0/issues/7)

#### Scope

Match incoming public aircraft observations against user-defined tail numbers.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate and normalize registrations
- [ ] Test exact matching, unidentified observations, and duplicate suppression.

### 26. [Premium] Add vessel MMSI watchlists

[Published issue #7](https://github.com/kawaho3/gods-eye-2.0/issues/7)

#### Scope

Match public vessel observations against user-defined MMSI values.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate MMSIs and test exact matching
- [ ] Mark stale positions and suppress repeated notifications.

### 27. [Premium] Alert on emergency squawks

[Published issue #8](https://github.com/kawaho3/gods-eye-2.0/issues/8)

#### Scope

Notify users about configured public aviation emergency codes.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate supported codes with fixtures
- [ ] Include observation time and source
- [ ] Suppress repeats until the observation state changes.

### 28. [Premium] Alert on GPS interference spikes

[Published issue #8](https://github.com/kawaho3/gods-eye-2.0/issues/8)

#### Scope

Flag unusual changes in aggregate GNSS interference feed data.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support a region threshold and minimum duration
- [ ] Include the source and distinguish missing data from a true threshold crossing.

### 29. [Premium] Alert on wildfire observations

[Published issue #8](https://github.com/kawaho3/gods-eye-2.0/issues/8)

#### Scope

Notify users when wildfire observations match a saved region.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support confidence and time filters
- [ ] Include observation time and source
- [ ] Deduplicate repeated records.

### 30. [Premium] Alert on earthquakes

[Published issue #8](https://github.com/kawaho3/gods-eye-2.0/issues/8)

#### Scope

Notify users when a reported earthquake matches saved filters.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support region and minimum magnitude
- [ ] Include event time and source
- [ ] Define how later event revisions affect notifications.

### 31. [Premium] Deliver desktop notifications

[Published issue #9](https://github.com/kawaho3/gods-eye-2.0/issues/9)

#### Scope

Send local alerts for matching monitor rules.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Request permission explicitly
- [ ] Show a timely rule match and allow alerts to be muted
- [ ] Permission denial is visible.

### 32. [Premium] Deliver Telegram alerts

[Published issue #9](https://github.com/kawaho3/gods-eye-2.0/issues/9)

#### Scope

Send alert summaries to a user-configured Telegram destination.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Provide a test-send flow
- [ ] Keep credentials redacted
- [ ] Handle rate limits and expose delivery status.

### 33. [Premium] Deliver Discord alerts

[Published issue #9](https://github.com/kawaho3/gods-eye-2.0/issues/9)

#### Scope

Send alert summaries to a user-configured Discord webhook.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Provide a test-send flow
- [ ] Do not generate unsolicited mentions
- [ ] Keep webhook credentials redacted and surface failures.

### 34. [Premium] Deliver signed outbound webhook alerts

[Published issue #9](https://github.com/kawaho3/gods-eye-2.0/issues/9)

#### Scope

Notify user-configured HTTPS endpoints when rules match.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Sign payloads and include event IDs
- [ ] Use bounded retries and show delivery state
- [ ] Apply safe destination and redirect validation.

## Time machine and DVR

### 35. [Free] Verify live view and upstream time scrubbing

[Published issue #10](https://github.com/kawaho3/gods-eye-2.0/issues/10)

#### Scope

Keep the live clock and supported provider-backed historical controls available in the free tier.

**Tier** — Free

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Users can scrub supported layers and return to live
- [ ] The UI distinguishes provider history from local recording.

### 36. [Premium] Record bounded-area telemetry in SQLite

[Published issue #10](https://github.com/kawaho3/gods-eye-2.0/issues/10)

#### Scope

Capture configured telemetry layers for a user-selected region and time span.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Persist normalized events with time, source, and region
- [ ] Display storage usage and enforce configurable retention
- [ ] Start and stop recording explicitly.

### 37. [Premium] Replay synchronized recorded layers

[Published issue #10](https://github.com/kawaho3/gods-eye-2.0/issues/10)

#### Scope

Seek and play across layers using a shared recorded clock.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Forward and backward seeking reproduces recorded state at the selected instant
- [ ] Playback speed and gaps are visible
- [ ] Returning to live restores live polling.

### 38. [Premium] Export recorded timelapses to MP4 and WebM

[Published issue #10](https://github.com/kawaho3/gods-eye-2.0/issues/10)

#### Scope

Render a selected replay range to a downloadable video.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Both formats play with the expected duration and timestamps
- [ ] Export reports progress, supports cancellation, and keeps required attribution.

## AI and voice intelligence

### 39. [Free] Verify BYOK voice control

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Keep existing voice control available with user-provided credentials.

**Tier** — Free

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Users can configure a supported provider and execute a supported voice action
- [ ] Mic denial and invalid keys show actionable errors.

### 40. [Free] Verify local MCP server connectivity

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Keep the local MCP setup documented and testable in the free tier.

**Tier** — Free

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] A supported client can connect and discover the documented tools
- [ ] Setup documents local transport and verifies a sample read-only request.
- [ ] The docs identify which deployment modes support local MCP, including the current Docker limitation.

### 41. [Premium] Connect an offline Ollama model

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Support a locally running language model for analyst queries.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Select a local model and report its health
- [ ] A local request completes without a cloud credential or cloud fallback.

### 42. [Premium] Add offline Whisper transcription

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Transcribe microphone audio locally for offline voice input.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Audio stays on-device in local mode
- [ ] Users can select a model and language and cancel a recording.

### 43. [Premium] Add offline Piper speech output

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Read analyst responses with a local speech engine.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Users can select an installed voice and stop playback
- [ ] Offline output needs no cloud token.

### 44. [Premium] Connect cloud LLMs to the analyst

[Published issue #11](https://github.com/kawaho3/gods-eye-2.0/issues/11)

#### Scope

Allow explicit cloud model selection for users who want it.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Use the configured model and credential
- [ ] Show what data will leave the workspace and apply redaction settings
- [ ] Cancellation and provider errors are handled.

### 45. [Premium] Correlate observations across layers

[Published issue #12](https://github.com/kawaho3/gods-eye-2.0/issues/12)

#### Scope

Answer questions across selected layers and time windows using recorded observations.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Return time-stamped source citations and distinguish observations from inferred relationships
- [ ] Flag data gaps and preserve user permissions.

### 46. [Premium] Generate Markdown situation briefs

[Published issue #12](https://github.com/kawaho3/gods-eye-2.0/issues/12)

#### Scope

Export an analyst result as a portable Markdown report.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Include time range, citations, source timestamps, and stated uncertainties
- [ ] Support preview and export.

### 47. [Premium] Export situation briefs as PDFs

[Published issue #12](https://github.com/kawaho3/gods-eye-2.0/issues/12)

#### Scope

Render the same brief content in a portable PDF.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Preserve timestamps, readable citations, and pagination
- [ ] A fixture export works offline when the brief data is local.

## Command center and sharing

### 48. [Free] Add an explicit static /share/ link option

[Published issue #13](https://github.com/kawaho3/gods-eye-2.0/issues/13)

#### Scope

Build on the existing share-link codec. Offer a place-only snapshot that can be opened directly on supported self-hosted deployments.

**Tier** — Free

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Users can copy a static place link even while following an entity
- [ ] Opening /share/ directly from a fresh browser restores supported settings
- [ ] Credentials, private records, and local import file bytes are excluded.

### 49. [Premium] Add unattended wallboard mode

[Published issue #13](https://github.com/kawaho3/gods-eye-2.0/issues/13)

#### Scope

Rotate the camera through selected live alerts and incidents in a display-friendly view.

**Tier** — Premium

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Support configurable dwell times and a quiet-state fallback
- [ ] A user can pause or exit
- [ ] The display uses read-only controls.

### 50. [Premium] Sync multi-monitor cockpit views

[Published issue #13](https://github.com/kawaho3/gods-eye-2.0/issues/13)

#### Scope

Synchronize a command-center session across selected local displays.

**Tier** — Premium

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Pair windows and sync selected view state
- [ ] Avoid feedback loops and recover from a monitor being closed or disconnected.

### 51. [Premium] Add collaborative team rooms with live pins

[Published issue #13](https://github.com/kawaho3/gods-eye-2.0/issues/13)

#### Scope

Allow authorized teammates to share and edit live map pins.

**Tier** — Premium

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Room membership controls read and write access
- [ ] Pin updates sync in near real time and survive reconnects
- [ ] Conflicting edits have a clear resolution rule.

## Packaging and offline mode

### 52. [Free] Verify Git and Docker self-hosting

[Published issue #14](https://github.com/kawaho3/gods-eye-2.0/issues/14)

#### Scope

Keep both supported deployment paths reproducible from the standalone repo.

**Tier** — Free

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] A clean checkout builds and boots keyless
- [ ] The local Docker image serves the app
- [ ] Docs show startup, storage, and upgrade steps.

### 53. [Premium] Ship one-click desktop installers for Windows and Linux

[Published issue #14](https://github.com/kawaho3/gods-eye-2.0/issues/14)

#### Scope

Package the app with Electron or Tauri after choosing the supported integration.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Signed or verifiable installers launch the app on supported targets
- [ ] User data survives upgrades and uninstall behavior is documented.

### 54. [Premium] Add verified desktop auto-updates

[Published issue #14](https://github.com/kawaho3/gods-eye-2.0/issues/14)

#### Scope

Deliver desktop releases through the supported updater.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Verify update signatures
- [ ] Handle interrupted downloads safely
- [ ] Show current version and update status.

### 55. [Premium] Add a system-tray background alert daemon

[Published issue #14](https://github.com/kawaho3/gods-eye-2.0/issues/14)

#### Scope

Keep opted-in monitoring active when the desktop window closes.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] The tray exposes active rules, pause, and quit
- [ ] Background monitoring follows startup settings and shuts down cleanly.

### 56. [Premium] Package offline area caches

[Published issue #15](https://github.com/kawaho3/gods-eye-2.0/issues/15)

#### Scope

Prepare portable map and data packs for low-connectivity use.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Select a region and supported layers, preview size, and download resumably
- [ ] Honor provider caching and redistribution terms
- [ ] The pack opens offline and shows version and attribution.
