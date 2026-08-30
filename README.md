# steel-cloud-solutions-twin

Byte-faithful public mirror of [steelcloudsolutions.com](https://www.steelcloudsolutions.com) plus an editable rebuild lane. Same twin-repo pattern as `emerson-rush-twin`.

## Lanes

- `/mirror/` — headless-Chromium rendered snapshot of the Wix site as it existed on the capture date. Deploys under `/mirror/` on the Pages site. Frozen once verified; treat as record of truth.
- `/site/` — Astro rebuild with a typed content model. This is what gets edited going forward. Deploys at the site root.
- `/edits/inbox/` — numbered issue files where marked-up screenshots land. Each edit gets a target page/component, an annotation, and the resolution commit.

## Capture

- Date: 2026-08-30
- Source: https://www.steelcloudsolutions.com (Wix)
- URL count: 26 (see `mirror/URL-INDEX.md`)
- Method: headless Chromium, `networkidle` + lazy-scroll, third-party assets pulled to `_assets/`, all absolute URLs rewritten to relative paths

## Verification

Open `mirror/index.html` in a browser (or serve the folder). Compare side-by-side with the live site — the mirror is pixel-identical up to CDN font subsetting.

---
© 2026 EVEglyphDesign. Controlled copy.
*Pour le bien-être du peuple.*
