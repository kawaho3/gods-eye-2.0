# gods-eye-2.0 roadmap issue drafts

56 individual GitHub issue drafts, with 16 Free and 40 Premium.

Each link opens a prefilled GitHub issue form. GitHub prompts for sign-in when needed and requires submission for each issue. Draft text is included below each link.

Existing features are framed as verification or follow-up work. New features have their own implementation scope and acceptance criteria.

## Core globe and feeds

### 01. [Free] Verify keyless Esri/OSM globe startup

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20Esri%2FOSM%20globe%20startup&body=%23%23%20Scope%0A%0AKeep%20the%20existing%20keyless%20globe%20usable%20on%20a%20clean%20install.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20With%20no%20keys%20configured%2C%20Esri%20imagery%20loads%20over%20keyless%20terrain%0A-%20%5B%20%5D%20When%20Esri%20is%20unavailable%2C%20OSM%20fallback%20works%20and%20the%20UI%20explains%20the%20switch.%0A-%20%5B%20%5D%20The%20UI%20distinguishes%20keyless%20imagery%20and%20terrain%20from%20credentialed%20photorealistic%203D%20buildings.%0A)

#### Scope

Keep the existing keyless globe usable on a clean install.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] With no keys configured, Esri imagery loads over keyless terrain
- [ ] When Esri is unavailable, OSM fallback works and the UI explains the switch.
- [ ] The UI distinguishes keyless imagery and terrain from credentialed photorealistic 3D buildings.

### 02. [Free] Verify keyless live flights

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20live%20flights&body=%23%23%20Scope%0A%0AMaintain%20the%20free%20live%20aircraft%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20The%20layer%20renders%20fresh%20positions%20without%20a%20key%0A-%20%5B%20%5D%20Stale%20or%20unavailable%20data%20is%20clearly%20displayed%20and%20recovers%20when%20the%20feed%20returns.%0A)

#### Scope

Maintain the free live aircraft layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] The layer renders fresh positions without a key
- [ ] Stale or unavailable data is clearly displayed and recovers when the feed returns.

### 03. [Free] Verify keyless live satellites

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20live%20satellites&body=%23%23%20Scope%0A%0AMaintain%20the%20free%20satellite%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20A%20keyless%20install%20loads%20and%20renders%20the%20satellite%20catalog%0A-%20%5B%20%5D%20The%20UI%20shows%20catalog%20freshness%20and%20handles%20a%20provider%20outage.%0A)

#### Scope

Maintain the free satellite layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A keyless install loads and renders the satellite catalog
- [ ] The UI shows catalog freshness and handles a provider outage.

### 04. [Free] Verify keyless live weather

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20live%20weather&body=%23%23%20Scope%0A%0AKeep%20weather%20overlays%20available%20without%20a%20paid%20API%20configuration.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20A%20clean%20install%20can%20display%20the%20supported%20keyless%20weather%20layers%0A-%20%5B%20%5D%20Layer%20legends%2C%20update%20timestamps%2C%20and%20unavailable%20states%20are%20visible.%0A)

#### Scope

Keep weather overlays available without a paid API configuration.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A clean install can display the supported keyless weather layers
- [ ] Layer legends, update timestamps, and unavailable states are visible.

### 05. [Free] Verify keyless earthquake feed

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20earthquake%20feed&body=%23%23%20Scope%0A%0AMaintain%20the%20free%20earthquake%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Recent%20events%20show%20location%2C%20magnitude%2C%20and%20time%0A-%20%5B%20%5D%20No-data%20and%20provider-error%20states%20are%20distinguishable.%0A)

#### Scope

Maintain the free earthquake layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Recent events show location, magnitude, and time
- [ ] No-data and provider-error states are distinguishable.

### 06. [Free] Verify keyless public cameras

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20keyless%20public%20cameras&body=%23%23%20Scope%0A%0AMaintain%20the%20public%20camera%20layer%20on%20a%20fresh%20install.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Public%20cameras%20can%20be%20selected%20and%20previewed%20without%20a%20key%0A-%20%5B%20%5D%20The%20UI%20handles%20stale%20images%2C%20offline%20cameras%2C%20and%20unsupported%20playback.%0A)

#### Scope

Maintain the public camera layer on a fresh install.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Public cameras can be selected and previewed without a key
- [ ] The UI handles stale images, offline cameras, and unsupported playback.

### 07. [Free] Verify local KML import

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20local%20KML%20import&body=%23%23%20Scope%0A%0AMaintain%20the%20existing%20import%20from%20the%20user%E2%80%99s%20device.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Supported%20feature%20geometry%20is%20displayed%20with%20names%20and%20layer%20controls%0A-%20%5B%20%5D%20Invalid%20and%20oversized%20files%20produce%20actionable%20errors%0A-%20%5B%20%5D%20The%20original%20file%20stays%20on%20the%20device.%0A)

#### Scope

Maintain the existing import from the user’s device.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Supported feature geometry is displayed with names and layer controls
- [ ] Invalid and oversized files produce actionable errors
- [ ] The original file stays on the device.

### 08. [Free] Verify local GeoJSON import

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20local%20GeoJSON%20import&body=%23%23%20Scope%0A%0AMaintain%20the%20existing%20on-device%20GeoJSON%20import%20as%20a%20separate%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Supported%20geometries%20and%20properties%20display%20correctly%0A-%20%5B%20%5D%20Invalid%20and%20oversized%20files%20produce%20actionable%20errors%0A-%20%5B%20%5D%20Users%20can%20remove%20the%20imported%20layer.%0A)

#### Scope

Maintain the existing on-device GeoJSON import as a separate layer.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Supported geometries and properties display correctly
- [ ] Invalid and oversized files produce actionable errors
- [ ] Users can remove the imported layer.

### 09. [Free] Complete BYOK support for third-party providers

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Complete%20BYOK%20support%20for%20third-party%20providers&body=%23%23%20Scope%0A%0AAudit%20provider-specific%20key%20settings%20and%20fill%20configuration%20gaps.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Each%20configurable%20provider%20has%20documented%20key%20setup%20and%20validation%0A-%20%5B%20%5D%20Keys%20can%20be%20entered%2C%20replaced%2C%20and%20removed%20and%20are%20redacted%20from%20logs%20and%20share%20links.%0A)

#### Scope

Audit provider-specific key settings and fill configuration gaps.

**Tier** — Free

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Each configurable provider has documented key setup and validation
- [ ] Keys can be entered, replaced, and removed and are redacted from logs and share links.

### 10. [Premium] Add a private connector registry

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20a%20private%20connector%20registry&body=%23%23%20Scope%0A%0AProvide%20a%20shared%20lifecycle%20and%20security%20model%20for%20premium%20private%20feeds.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20configure%2C%20test%2C%20enable%2C%20and%20disconnect%20a%20private%20connector%0A-%20%5B%20%5D%20Secrets%20are%20stored%20securely%0A-%20%5B%20%5D%20Connection%20status%20and%20recoverable%20errors%20are%20visible.%0A)

#### Scope

Provide a shared lifecycle and security model for premium private feeds.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Users can configure, test, enable, and disconnect a private connector
- [ ] Secrets are stored securely
- [ ] Connection status and recoverable errors are visible.

### 11. [Premium] Ingest private webhook feeds

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Ingest%20private%20webhook%20feeds&body=%23%23%20Scope%0A%0AReceive%20user-owned%20webhook%20events%20through%20the%20connector%20registry.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Verify%20incoming%20requests%0A-%20%5B%20%5D%20Normalize%20valid%20payloads%20and%20handle%20replay%20or%20duplicate%20deliveries%0A-%20%5B%20%5D%20Reject%20invalid%20input%20with%20a%20clear%20error.%0A)

#### Scope

Receive user-owned webhook events through the connector registry.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Verify incoming requests
- [ ] Normalize valid payloads and handle replay or duplicate deliveries
- [ ] Reject invalid input with a clear error.

### 12. [Premium] Import private CSV feeds

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Import%20private%20CSV%20feeds&body=%23%23%20Scope%0A%0ALoad%20user-owned%20CSV%20data%20into%20time-aware%20layers.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Map%20latitude%2C%20longitude%2C%20and%20optional%20timestamp%20and%20ID%20columns%0A-%20%5B%20%5D%20Preview%20valid%20rows%20and%20report%20invalid%20rows%0A-%20%5B%20%5D%20Re-import%20updates%20the%20selected%20layer%20predictably.%0A)

#### Scope

Load user-owned CSV data into time-aware layers.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Map latitude, longitude, and optional timestamp and ID columns
- [ ] Preview valid rows and report invalid rows
- [ ] Re-import updates the selected layer predictably.

### 13. [Premium] Connect authenticated REST feeds

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Connect%20authenticated%20REST%20feeds&body=%23%23%20Scope%0A%0APoll%20a%20user-owned%20REST%20endpoint%20for%20updates.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Configure%20authentication%2C%20polling%2C%20and%20field%20mapping%0A-%20%5B%20%5D%20Retry%20transient%20failures%20with%20backoff%20and%20stop%20cleanly%20when%20disconnected.%0A)

#### Scope

Poll a user-owned REST endpoint for updates.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure authentication, polling, and field mapping
- [ ] Retry transient failures with backoff and stop cleanly when disconnected.

### 14. [Premium] Connect private MQTT feeds

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Connect%20private%20MQTT%20feeds&body=%23%23%20Scope%0A%0ASubscribe%20to%20telemetry%20from%20a%20user-authorized%20MQTT%20broker.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Configure%20broker%20and%20topic%20with%20encrypted%20transport%20and%20authentication%0A-%20%5B%20%5D%20Normalize%20incoming%20messages%0A-%20%5B%20%5D%20Reconnect%20without%20duplicating%20events%20by%20stable%20ID.%0A)

#### Scope

Subscribe to telemetry from a user-authorized MQTT broker.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure broker and topic with encrypted transport and authentication
- [ ] Normalize incoming messages
- [ ] Reconnect without duplicating events by stable ID.

### 15. [Premium] Connect private WebSocket feeds

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Connect%20private%20WebSocket%20feeds&body=%23%23%20Scope%0A%0AStream%20user-owned%20telemetry%20into%20a%20private%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Configure%20endpoint%20and%20message%20mapping%0A-%20%5B%20%5D%20Handle%20reconnects%2C%20malformed%20data%2C%20and%20repeated%20IDs%0A-%20%5B%20%5D%20Show%20stream%20status.%0A)

#### Scope

Stream user-owned telemetry into a private layer.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Configure endpoint and message mapping
- [ ] Handle reconnects, malformed data, and repeated IDs
- [ ] Show stream status.

### 16. [Premium] Play authorized private RTSP streams

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Play%20authorized%20private%20RTSP%20streams&body=%23%23%20Scope%0A%0AShow%20an%20authorized%20camera%20stream%20inside%20a%20private%20workspace.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20A%20secure%20local%20or%20server%20relay%20plays%20test%20RTSP%20streams%20in%20the%20browser%0A-%20%5B%20%5D%20Credentials%20stay%20out%20of%20the%20client%20and%20logs%0A-%20%5B%20%5D%20Disconnect%20stops%20the%20relay.%0A)

#### Scope

Show an authorized camera stream inside a private workspace.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] A secure local or server relay plays test RTSP streams in the browser
- [ ] Credentials stay out of the client and logs
- [ ] Disconnect stops the relay.

### 17. [Premium] Add private enterprise ArcGIS layers

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20private%20enterprise%20ArcGIS%20layers&body=%23%23%20Scope%0A%0AAllow%20users%20to%20add%20ArcGIS%20services%20they%20are%20authorized%20to%20access.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Load%20a%20protected%20test%20service%20with%20the%20appropriate%20credential%20flow%0A-%20%5B%20%5D%20Expose%20attribution%2C%20visibility%2C%20and%20request%20errors%20without%20disclosing%20credentials.%0A)

#### Scope

Allow users to add ArcGIS services they are authorized to access.

**Tier** — Premium

**Category** — Core globe and feeds

#### Acceptance criteria

- [ ] Load a protected test service with the appropriate credential flow
- [ ] Expose attribution, visibility, and request errors without disclosing credentials.

### 18. [Premium] Add private enterprise WMS layers

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20private%20enterprise%20WMS%20layers&body=%23%23%20Scope%0A%0ARender%20authenticated%20WMS%20imagery%20as%20a%20private%20globe%20layer.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Core%20globe%20and%20feeds%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Read%20service%20capabilities%20and%20allow%20layer%20selection%0A-%20%5B%20%5D%20Honor%20supported%20coordinate%20systems%20and%20attribution%0A-%20%5B%20%5D%20Credentials%20are%20redacted.%0A)

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

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Save%20up%20to%20three%20browser-local%20views&body=%23%23%20Scope%0A%0AStore%20saved%20globe%20views%20in%20browser%20localStorage.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Workspaces%20and%20persistence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Create%2C%20rename%2C%20restore%2C%20and%20delete%20up%20to%20three%20views%0A-%20%5B%20%5D%20Views%20survive%20reload%0A-%20%5B%20%5D%20The%20fourth%20save%20prompts%20the%20user%20to%20free%20a%20slot%20or%20upgrade.%0A)

#### Scope

Store saved globe views in browser localStorage.

**Tier** — Free

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Create, rename, restore, and delete up to three views
- [ ] Views survive reload
- [ ] The fourth save prompts the user to free a slot or upgrade.

### 20. [Premium] Persist unlimited mission workspaces in SQLite

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Persist%20unlimited%20mission%20workspaces%20in%20SQLite&body=%23%23%20Scope%0A%0AStore%20full%20layer%20states%2C%20annotations%2C%20camera%20bookmarks%2C%20and%20entity%20notes%20in%20a%20workspace.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Workspaces%20and%20persistence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20create%20and%20switch%20between%20workspaces%20without%20an%20app-imposed%20count%20limit%0A-%20%5B%20%5D%20All%20workspace%20data%20survives%20restart%0A-%20%5B%20%5D%20Schema%20migrations%20preserve%20existing%20data.%0A)

#### Scope

Store full layer states, annotations, camera bookmarks, and entity notes in a workspace.

**Tier** — Premium

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Users can create and switch between workspaces without an app-imposed count limit
- [ ] All workspace data survives restart
- [ ] Schema migrations preserve existing data.

### 21. [Premium] Add an encrypted provider-key vault

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20an%20encrypted%20provider-key%20vault&body=%23%23%20Scope%0A%0AStore%20workspace%20and%20feed%20credentials%20securely.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Workspaces%20and%20persistence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Keys%20are%20encrypted%20at%20rest%20with%20unlock%20material%20held%20separately%0A-%20%5B%20%5D%20Users%20can%20unlock%2C%20rotate%2C%20and%20remove%20keys%0A-%20%5B%20%5D%20Logs%20and%20workspace%20exports%20exclude%20secrets.%0A)

#### Scope

Store workspace and feed credentials securely.

**Tier** — Premium

**Category** — Workspaces and persistence

#### Acceptance criteria

- [ ] Keys are encrypted at rest with unlock material held separately
- [ ] Users can unlock, rotate, and remove keys
- [ ] Logs and workspace exports exclude secrets.

### 22. [Premium] Add opt-in workspace cloud sync

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20opt-in%20workspace%20cloud%20sync&body=%23%23%20Scope%0A%0ASync%20selected%20mission%20workspaces%20across%20trusted%20devices.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Workspaces%20and%20persistence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Sync%20is%20off%20by%20default%0A-%20%5B%20%5D%20Users%20can%20see%20sync%20state%20and%20recover%20from%20concurrent%20edits%0A-%20%5B%20%5D%20Provider%20keys%20stay%20local%20unless%20explicitly%20supported%20through%20an%20encrypted%20flow.%0A)

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

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20free%20manual%20map%20inspection&body=%23%23%20Scope%0A%0AKeep%20basic%20investigation%20usable%20without%20the%20premium%20alerts%20engine.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20pan%2C%20zoom%2C%20select%2C%20and%20inspect%20supported%20entities%20in%20the%20free%20tier%0A-%20%5B%20%5D%20The%20interface%20does%20not%20require%20alert%20configuration%20for%20manual%20use.%0A)

#### Scope

Keep basic investigation usable without the premium alerts engine.

**Tier** — Free

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Users can pan, zoom, select, and inspect supported entities in the free tier
- [ ] The interface does not require alert configuration for manual use.

### 24. [Premium] Create and evaluate polygon geofences

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Create%20and%20evaluate%20polygon%20geofences&body=%23%23%20Scope%0A%0ADraw%20user-defined%20regions%20and%20evaluate%20incoming%20events%20against%20them.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20draw%2C%20edit%2C%20and%20delete%20valid%20polygons%0A-%20%5B%20%5D%20Entry%20and%20exit%20rules%20are%20tested%20at%20region%20boundaries%0A-%20%5B%20%5D%20Invalid%20polygons%20show%20useful%20feedback.%0A)

#### Scope

Draw user-defined regions and evaluate incoming events against them.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Users can draw, edit, and delete valid polygons
- [ ] Entry and exit rules are tested at region boundaries
- [ ] Invalid polygons show useful feedback.

### 25. [Premium] Add aircraft tail-number watchlists

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20aircraft%20tail-number%20watchlists&body=%23%23%20Scope%0A%0AMatch%20incoming%20public%20aircraft%20observations%20against%20user-defined%20tail%20numbers.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Validate%20and%20normalize%20registrations%0A-%20%5B%20%5D%20Test%20exact%20matching%2C%20unidentified%20observations%2C%20and%20duplicate%20suppression.%0A)

#### Scope

Match incoming public aircraft observations against user-defined tail numbers.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate and normalize registrations
- [ ] Test exact matching, unidentified observations, and duplicate suppression.

### 26. [Premium] Add vessel MMSI watchlists

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20vessel%20MMSI%20watchlists&body=%23%23%20Scope%0A%0AMatch%20public%20vessel%20observations%20against%20user-defined%20MMSI%20values.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Validate%20MMSIs%20and%20test%20exact%20matching%0A-%20%5B%20%5D%20Mark%20stale%20positions%20and%20suppress%20repeated%20notifications.%0A)

#### Scope

Match public vessel observations against user-defined MMSI values.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate MMSIs and test exact matching
- [ ] Mark stale positions and suppress repeated notifications.

### 27. [Premium] Alert on emergency squawks

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Alert%20on%20emergency%20squawks&body=%23%23%20Scope%0A%0ANotify%20users%20about%20configured%20public%20aviation%20emergency%20codes.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Validate%20supported%20codes%20with%20fixtures%0A-%20%5B%20%5D%20Include%20observation%20time%20and%20source%0A-%20%5B%20%5D%20Suppress%20repeats%20until%20the%20observation%20state%20changes.%0A)

#### Scope

Notify users about configured public aviation emergency codes.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Validate supported codes with fixtures
- [ ] Include observation time and source
- [ ] Suppress repeats until the observation state changes.

### 28. [Premium] Alert on GPS interference spikes

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Alert%20on%20GPS%20interference%20spikes&body=%23%23%20Scope%0A%0AFlag%20unusual%20changes%20in%20aggregate%20GNSS%20interference%20feed%20data.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Support%20a%20region%20threshold%20and%20minimum%20duration%0A-%20%5B%20%5D%20Include%20the%20source%20and%20distinguish%20missing%20data%20from%20a%20true%20threshold%20crossing.%0A)

#### Scope

Flag unusual changes in aggregate GNSS interference feed data.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support a region threshold and minimum duration
- [ ] Include the source and distinguish missing data from a true threshold crossing.

### 29. [Premium] Alert on wildfire observations

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Alert%20on%20wildfire%20observations&body=%23%23%20Scope%0A%0ANotify%20users%20when%20wildfire%20observations%20match%20a%20saved%20region.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Support%20confidence%20and%20time%20filters%0A-%20%5B%20%5D%20Include%20observation%20time%20and%20source%0A-%20%5B%20%5D%20Deduplicate%20repeated%20records.%0A)

#### Scope

Notify users when wildfire observations match a saved region.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support confidence and time filters
- [ ] Include observation time and source
- [ ] Deduplicate repeated records.

### 30. [Premium] Alert on earthquakes

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Alert%20on%20earthquakes&body=%23%23%20Scope%0A%0ANotify%20users%20when%20a%20reported%20earthquake%20matches%20saved%20filters.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Support%20region%20and%20minimum%20magnitude%0A-%20%5B%20%5D%20Include%20event%20time%20and%20source%0A-%20%5B%20%5D%20Define%20how%20later%20event%20revisions%20affect%20notifications.%0A)

#### Scope

Notify users when a reported earthquake matches saved filters.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Support region and minimum magnitude
- [ ] Include event time and source
- [ ] Define how later event revisions affect notifications.

### 31. [Premium] Deliver desktop notifications

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Deliver%20desktop%20notifications&body=%23%23%20Scope%0A%0ASend%20local%20alerts%20for%20matching%20monitor%20rules.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Request%20permission%20explicitly%0A-%20%5B%20%5D%20Show%20a%20timely%20rule%20match%20and%20allow%20alerts%20to%20be%20muted%0A-%20%5B%20%5D%20Permission%20denial%20is%20visible.%0A)

#### Scope

Send local alerts for matching monitor rules.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Request permission explicitly
- [ ] Show a timely rule match and allow alerts to be muted
- [ ] Permission denial is visible.

### 32. [Premium] Deliver Telegram alerts

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Deliver%20Telegram%20alerts&body=%23%23%20Scope%0A%0ASend%20alert%20summaries%20to%20a%20user-configured%20Telegram%20destination.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Provide%20a%20test-send%20flow%0A-%20%5B%20%5D%20Keep%20credentials%20redacted%0A-%20%5B%20%5D%20Handle%20rate%20limits%20and%20expose%20delivery%20status.%0A)

#### Scope

Send alert summaries to a user-configured Telegram destination.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Provide a test-send flow
- [ ] Keep credentials redacted
- [ ] Handle rate limits and expose delivery status.

### 33. [Premium] Deliver Discord alerts

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Deliver%20Discord%20alerts&body=%23%23%20Scope%0A%0ASend%20alert%20summaries%20to%20a%20user-configured%20Discord%20webhook.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Provide%20a%20test-send%20flow%0A-%20%5B%20%5D%20Do%20not%20generate%20unsolicited%20mentions%0A-%20%5B%20%5D%20Keep%20webhook%20credentials%20redacted%20and%20surface%20failures.%0A)

#### Scope

Send alert summaries to a user-configured Discord webhook.

**Tier** — Premium

**Category** — Alerts and geofencing

#### Acceptance criteria

- [ ] Provide a test-send flow
- [ ] Do not generate unsolicited mentions
- [ ] Keep webhook credentials redacted and surface failures.

### 34. [Premium] Deliver signed outbound webhook alerts

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Deliver%20signed%20outbound%20webhook%20alerts&body=%23%23%20Scope%0A%0ANotify%20user-configured%20HTTPS%20endpoints%20when%20rules%20match.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Alerts%20and%20geofencing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Sign%20payloads%20and%20include%20event%20IDs%0A-%20%5B%20%5D%20Use%20bounded%20retries%20and%20show%20delivery%20state%0A-%20%5B%20%5D%20Apply%20safe%20destination%20and%20redirect%20validation.%0A)

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

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20live%20view%20and%20upstream%20time%20scrubbing&body=%23%23%20Scope%0A%0AKeep%20the%20live%20clock%20and%20supported%20provider-backed%20historical%20controls%20available%20in%20the%20free%20tier.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Time%20machine%20and%20DVR%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20scrub%20supported%20layers%20and%20return%20to%20live%0A-%20%5B%20%5D%20The%20UI%20distinguishes%20provider%20history%20from%20local%20recording.%0A)

#### Scope

Keep the live clock and supported provider-backed historical controls available in the free tier.

**Tier** — Free

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Users can scrub supported layers and return to live
- [ ] The UI distinguishes provider history from local recording.

### 36. [Premium] Record bounded-area telemetry in SQLite

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Record%20bounded-area%20telemetry%20in%20SQLite&body=%23%23%20Scope%0A%0ACapture%20configured%20telemetry%20layers%20for%20a%20user-selected%20region%20and%20time%20span.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Time%20machine%20and%20DVR%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Persist%20normalized%20events%20with%20time%2C%20source%2C%20and%20region%0A-%20%5B%20%5D%20Display%20storage%20usage%20and%20enforce%20configurable%20retention%0A-%20%5B%20%5D%20Start%20and%20stop%20recording%20explicitly.%0A)

#### Scope

Capture configured telemetry layers for a user-selected region and time span.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Persist normalized events with time, source, and region
- [ ] Display storage usage and enforce configurable retention
- [ ] Start and stop recording explicitly.

### 37. [Premium] Replay synchronized recorded layers

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Replay%20synchronized%20recorded%20layers&body=%23%23%20Scope%0A%0ASeek%20and%20play%20across%20layers%20using%20a%20shared%20recorded%20clock.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Time%20machine%20and%20DVR%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Forward%20and%20backward%20seeking%20reproduces%20recorded%20state%20at%20the%20selected%20instant%0A-%20%5B%20%5D%20Playback%20speed%20and%20gaps%20are%20visible%0A-%20%5B%20%5D%20Returning%20to%20live%20restores%20live%20polling.%0A)

#### Scope

Seek and play across layers using a shared recorded clock.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Forward and backward seeking reproduces recorded state at the selected instant
- [ ] Playback speed and gaps are visible
- [ ] Returning to live restores live polling.

### 38. [Premium] Export recorded timelapses to MP4 and WebM

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Export%20recorded%20timelapses%20to%20MP4%20and%20WebM&body=%23%23%20Scope%0A%0ARender%20a%20selected%20replay%20range%20to%20a%20downloadable%20video.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Time%20machine%20and%20DVR%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Both%20formats%20play%20with%20the%20expected%20duration%20and%20timestamps%0A-%20%5B%20%5D%20Export%20reports%20progress%2C%20supports%20cancellation%2C%20and%20keeps%20required%20attribution.%0A)

#### Scope

Render a selected replay range to a downloadable video.

**Tier** — Premium

**Category** — Time machine and DVR

#### Acceptance criteria

- [ ] Both formats play with the expected duration and timestamps
- [ ] Export reports progress, supports cancellation, and keeps required attribution.

## AI and voice intelligence

### 39. [Free] Verify BYOK voice control

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20BYOK%20voice%20control&body=%23%23%20Scope%0A%0AKeep%20existing%20voice%20control%20available%20with%20user-provided%20credentials.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20configure%20a%20supported%20provider%20and%20execute%20a%20supported%20voice%20action%0A-%20%5B%20%5D%20Mic%20denial%20and%20invalid%20keys%20show%20actionable%20errors.%0A)

#### Scope

Keep existing voice control available with user-provided credentials.

**Tier** — Free

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Users can configure a supported provider and execute a supported voice action
- [ ] Mic denial and invalid keys show actionable errors.

### 40. [Free] Verify local MCP server connectivity

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20local%20MCP%20server%20connectivity&body=%23%23%20Scope%0A%0AKeep%20the%20local%20MCP%20setup%20documented%20and%20testable%20in%20the%20free%20tier.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20A%20supported%20client%20can%20connect%20and%20discover%20the%20documented%20tools%0A-%20%5B%20%5D%20Setup%20documents%20local%20transport%20and%20verifies%20a%20sample%20read-only%20request.%0A-%20%5B%20%5D%20The%20docs%20identify%20which%20deployment%20modes%20support%20local%20MCP%2C%20including%20the%20current%20Docker%20limitation.%0A)

#### Scope

Keep the local MCP setup documented and testable in the free tier.

**Tier** — Free

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] A supported client can connect and discover the documented tools
- [ ] Setup documents local transport and verifies a sample read-only request.
- [ ] The docs identify which deployment modes support local MCP, including the current Docker limitation.

### 41. [Premium] Connect an offline Ollama model

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Connect%20an%20offline%20Ollama%20model&body=%23%23%20Scope%0A%0ASupport%20a%20locally%20running%20language%20model%20for%20analyst%20queries.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Select%20a%20local%20model%20and%20report%20its%20health%0A-%20%5B%20%5D%20A%20local%20request%20completes%20without%20a%20cloud%20credential%20or%20cloud%20fallback.%0A)

#### Scope

Support a locally running language model for analyst queries.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Select a local model and report its health
- [ ] A local request completes without a cloud credential or cloud fallback.

### 42. [Premium] Add offline Whisper transcription

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20offline%20Whisper%20transcription&body=%23%23%20Scope%0A%0ATranscribe%20microphone%20audio%20locally%20for%20offline%20voice%20input.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Audio%20stays%20on-device%20in%20local%20mode%0A-%20%5B%20%5D%20Users%20can%20select%20a%20model%20and%20language%20and%20cancel%20a%20recording.%0A)

#### Scope

Transcribe microphone audio locally for offline voice input.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Audio stays on-device in local mode
- [ ] Users can select a model and language and cancel a recording.

### 43. [Premium] Add offline Piper speech output

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20offline%20Piper%20speech%20output&body=%23%23%20Scope%0A%0ARead%20analyst%20responses%20with%20a%20local%20speech%20engine.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20select%20an%20installed%20voice%20and%20stop%20playback%0A-%20%5B%20%5D%20Offline%20output%20needs%20no%20cloud%20token.%0A)

#### Scope

Read analyst responses with a local speech engine.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Users can select an installed voice and stop playback
- [ ] Offline output needs no cloud token.

### 44. [Premium] Connect cloud LLMs to the analyst

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Connect%20cloud%20LLMs%20to%20the%20analyst&body=%23%23%20Scope%0A%0AAllow%20explicit%20cloud%20model%20selection%20for%20users%20who%20want%20it.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Use%20the%20configured%20model%20and%20credential%0A-%20%5B%20%5D%20Show%20what%20data%20will%20leave%20the%20workspace%20and%20apply%20redaction%20settings%0A-%20%5B%20%5D%20Cancellation%20and%20provider%20errors%20are%20handled.%0A)

#### Scope

Allow explicit cloud model selection for users who want it.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Use the configured model and credential
- [ ] Show what data will leave the workspace and apply redaction settings
- [ ] Cancellation and provider errors are handled.

### 45. [Premium] Correlate observations across layers

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Correlate%20observations%20across%20layers&body=%23%23%20Scope%0A%0AAnswer%20questions%20across%20selected%20layers%20and%20time%20windows%20using%20recorded%20observations.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Return%20time-stamped%20source%20citations%20and%20distinguish%20observations%20from%20inferred%20relationships%0A-%20%5B%20%5D%20Flag%20data%20gaps%20and%20preserve%20user%20permissions.%0A)

#### Scope

Answer questions across selected layers and time windows using recorded observations.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Return time-stamped source citations and distinguish observations from inferred relationships
- [ ] Flag data gaps and preserve user permissions.

### 46. [Premium] Generate Markdown situation briefs

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Generate%20Markdown%20situation%20briefs&body=%23%23%20Scope%0A%0AExport%20an%20analyst%20result%20as%20a%20portable%20Markdown%20report.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Include%20time%20range%2C%20citations%2C%20source%20timestamps%2C%20and%20stated%20uncertainties%0A-%20%5B%20%5D%20Support%20preview%20and%20export.%0A)

#### Scope

Export an analyst result as a portable Markdown report.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Include time range, citations, source timestamps, and stated uncertainties
- [ ] Support preview and export.

### 47. [Premium] Export situation briefs as PDFs

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Export%20situation%20briefs%20as%20PDFs&body=%23%23%20Scope%0A%0ARender%20the%20same%20brief%20content%20in%20a%20portable%20PDF.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20AI%20and%20voice%20intelligence%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Preserve%20timestamps%2C%20readable%20citations%2C%20and%20pagination%0A-%20%5B%20%5D%20A%20fixture%20export%20works%20offline%20when%20the%20brief%20data%20is%20local.%0A)

#### Scope

Render the same brief content in a portable PDF.

**Tier** — Premium

**Category** — AI and voice intelligence

#### Acceptance criteria

- [ ] Preserve timestamps, readable citations, and pagination
- [ ] A fixture export works offline when the brief data is local.

## Command center and sharing

### 48. [Free] Add an explicit static /share/ link option

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Add%20an%20explicit%20static%20%2Fshare%2F%20link%20option&body=%23%23%20Scope%0A%0ABuild%20on%20the%20existing%20share-link%20codec.%20Offer%20a%20place-only%20snapshot%20that%20can%20be%20opened%20directly%20on%20supported%20self-hosted%20deployments.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Command%20center%20and%20sharing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Users%20can%20copy%20a%20static%20place%20link%20even%20while%20following%20an%20entity%0A-%20%5B%20%5D%20Opening%20%2Fshare%2F%20directly%20from%20a%20fresh%20browser%20restores%20supported%20settings%0A-%20%5B%20%5D%20Credentials%2C%20private%20records%2C%20and%20local%20import%20file%20bytes%20are%20excluded.%0A)

#### Scope

Build on the existing share-link codec. Offer a place-only snapshot that can be opened directly on supported self-hosted deployments.

**Tier** — Free

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Users can copy a static place link even while following an entity
- [ ] Opening /share/ directly from a fresh browser restores supported settings
- [ ] Credentials, private records, and local import file bytes are excluded.

### 49. [Premium] Add unattended wallboard mode

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20unattended%20wallboard%20mode&body=%23%23%20Scope%0A%0ARotate%20the%20camera%20through%20selected%20live%20alerts%20and%20incidents%20in%20a%20display-friendly%20view.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Command%20center%20and%20sharing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Support%20configurable%20dwell%20times%20and%20a%20quiet-state%20fallback%0A-%20%5B%20%5D%20A%20user%20can%20pause%20or%20exit%0A-%20%5B%20%5D%20The%20display%20uses%20read-only%20controls.%0A)

#### Scope

Rotate the camera through selected live alerts and incidents in a display-friendly view.

**Tier** — Premium

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Support configurable dwell times and a quiet-state fallback
- [ ] A user can pause or exit
- [ ] The display uses read-only controls.

### 50. [Premium] Sync multi-monitor cockpit views

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Sync%20multi-monitor%20cockpit%20views&body=%23%23%20Scope%0A%0ASynchronize%20a%20command-center%20session%20across%20selected%20local%20displays.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Command%20center%20and%20sharing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Pair%20windows%20and%20sync%20selected%20view%20state%0A-%20%5B%20%5D%20Avoid%20feedback%20loops%20and%20recover%20from%20a%20monitor%20being%20closed%20or%20disconnected.%0A)

#### Scope

Synchronize a command-center session across selected local displays.

**Tier** — Premium

**Category** — Command center and sharing

#### Acceptance criteria

- [ ] Pair windows and sync selected view state
- [ ] Avoid feedback loops and recover from a monitor being closed or disconnected.

### 51. [Premium] Add collaborative team rooms with live pins

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20collaborative%20team%20rooms%20with%20live%20pins&body=%23%23%20Scope%0A%0AAllow%20authorized%20teammates%20to%20share%20and%20edit%20live%20map%20pins.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Command%20center%20and%20sharing%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Room%20membership%20controls%20read%20and%20write%20access%0A-%20%5B%20%5D%20Pin%20updates%20sync%20in%20near%20real%20time%20and%20survive%20reconnects%0A-%20%5B%20%5D%20Conflicting%20edits%20have%20a%20clear%20resolution%20rule.%0A)

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

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BFree%5D%20Verify%20Git%20and%20Docker%20self-hosting&body=%23%23%20Scope%0A%0AKeep%20both%20supported%20deployment%20paths%20reproducible%20from%20the%20standalone%20repo.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Free%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Packaging%20and%20offline%20mode%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20A%20clean%20checkout%20builds%20and%20boots%20keyless%0A-%20%5B%20%5D%20The%20local%20Docker%20image%20serves%20the%20app%0A-%20%5B%20%5D%20Docs%20show%20startup%2C%20storage%2C%20and%20upgrade%20steps.%0A)

#### Scope

Keep both supported deployment paths reproducible from the standalone repo.

**Tier** — Free

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] A clean checkout builds and boots keyless
- [ ] The local Docker image serves the app
- [ ] Docs show startup, storage, and upgrade steps.

### 53. [Premium] Ship one-click desktop installers for Windows and Linux

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Ship%20one-click%20desktop%20installers%20for%20Windows%20and%20Linux&body=%23%23%20Scope%0A%0APackage%20the%20app%20with%20Electron%20or%20Tauri%20after%20choosing%20the%20supported%20integration.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Packaging%20and%20offline%20mode%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Signed%20or%20verifiable%20installers%20launch%20the%20app%20on%20supported%20targets%0A-%20%5B%20%5D%20User%20data%20survives%20upgrades%20and%20uninstall%20behavior%20is%20documented.%0A)

#### Scope

Package the app with Electron or Tauri after choosing the supported integration.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Signed or verifiable installers launch the app on supported targets
- [ ] User data survives upgrades and uninstall behavior is documented.

### 54. [Premium] Add verified desktop auto-updates

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20verified%20desktop%20auto-updates&body=%23%23%20Scope%0A%0ADeliver%20desktop%20releases%20through%20the%20supported%20updater.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Packaging%20and%20offline%20mode%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Verify%20update%20signatures%0A-%20%5B%20%5D%20Handle%20interrupted%20downloads%20safely%0A-%20%5B%20%5D%20Show%20current%20version%20and%20update%20status.%0A)

#### Scope

Deliver desktop releases through the supported updater.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Verify update signatures
- [ ] Handle interrupted downloads safely
- [ ] Show current version and update status.

### 55. [Premium] Add a system-tray background alert daemon

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Add%20a%20system-tray%20background%20alert%20daemon&body=%23%23%20Scope%0A%0AKeep%20opted-in%20monitoring%20active%20when%20the%20desktop%20window%20closes.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Packaging%20and%20offline%20mode%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20The%20tray%20exposes%20active%20rules%2C%20pause%2C%20and%20quit%0A-%20%5B%20%5D%20Background%20monitoring%20follows%20startup%20settings%20and%20shuts%20down%20cleanly.%0A)

#### Scope

Keep opted-in monitoring active when the desktop window closes.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] The tray exposes active rules, pause, and quit
- [ ] Background monitoring follows startup settings and shuts down cleanly.

### 56. [Premium] Package offline area caches

[Open prefilled issue](https://github.com/kawaho3/gods-eye-2.0/issues/new?title=%5BPremium%5D%20Package%20offline%20area%20caches&body=%23%23%20Scope%0A%0APrepare%20portable%20map%20and%20data%20packs%20for%20low-connectivity%20use.%0A%0A%2A%2ATier%2A%2A%20%E2%80%94%20Premium%0A%0A%2A%2ACategory%2A%2A%20%E2%80%94%20Packaging%20and%20offline%20mode%0A%0A%23%23%20Acceptance%20criteria%0A%0A-%20%5B%20%5D%20Select%20a%20region%20and%20supported%20layers%2C%20preview%20size%2C%20and%20download%20resumably%0A-%20%5B%20%5D%20Honor%20provider%20caching%20and%20redistribution%20terms%0A-%20%5B%20%5D%20The%20pack%20opens%20offline%20and%20shows%20version%20and%20attribution.%0A)

#### Scope

Prepare portable map and data packs for low-connectivity use.

**Tier** — Premium

**Category** — Packaging and offline mode

#### Acceptance criteria

- [ ] Select a region and supported layers, preview size, and download resumably
- [ ] Honor provider caching and redistribution terms
- [ ] The pack opens offline and shows version and attribution.
