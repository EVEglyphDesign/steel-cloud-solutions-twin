# edit-0002 · Full /site/ rebuild — repositioning + brand + nav honesty + white papers

**Date:** 2026-09-04
**Trigger:** Operator turn 5 correction on session 15a45a02 — three defects logged as
SIN-2026-09-04-07 (silent under-delivery), SIN-2026-09-04-08 (SAP channel-partner
overclaim), SIN-2026-09-04-09 (brand-asset substitution). Also durability defect from
gitignoring `site-src/` entirely (Astro source evaporated between sessions).

## What changed

### Architecture pivot
- **Dropped Astro.** The prior `/site/` source was under `site-src/` which was gitignored;
  it did not survive the session. Rebuild is now plain hand-authored HTML committed
  directly under `/site/` — the source *is* the deploy. Nothing to lose.
- **Fixed `.gitignore`** to remove the blanket `site-src/` ignore. Only `node_modules/`,
  `.astro/`, `_build/`, and `__pycache__/` remain ignored.

### Positioning rewrite
Per operator's exact framing (turn 5):

- **Home eyebrow:** "Salesforce channel partner · Client-side SAP advisors"
  (was: "SAP + Salesforce channel partner" — factually wrong, SIN-08).
- **SAP framing:** SCS supports the *client* side of an SAP engagement — training,
  integration evaluation, project planning, and specialist technical staffing. Additive,
  not competing. Works *with* or *via* existing SIs. No SAP channel-partner language
  anywhere on the surface.
- **Salesforce restored to prominence** on the home page as the mature, logo'd, official
  channel partnership. Uses the actual `salesforce-partner.avif` logo from the mirror.
- **Resource pool language:** per operator's turn-6 answer, Austria/Poly Labs/India are
  NOT named on any public surface. Capability and seniority language only. Home describes
  "a professional community built over decades"; SAP Services describes "a flexible pool
  of known-quantity practitioners."

### Brand assets restored from mirror
Pulled from `mirror/_assets/` into `site/assets/` and named human-readably:
- `scs-white.avif` (header logo)
- `scs-logo.avif`, `scs-contract-holder.avif`
- `salesforce-logo.avif`, `salesforce-partner.avif`
- `hero-desk.avif` (home hero background)
- `icon-support.avif`, `icon-portal.avif`, `icon-response.avif`, `icon-guarantee.avif`,
  `icon-flatrate.avif`, `icon-cost.avif`, `icon-hands.avif`

The placeholder SVG "S" mark from the prior build is gone.

### Nav honesty
All four nav items now resolve to real pages. No 404s:
- **Home** — `index.html`
- **SAP Services** — `sap-services.html` (rewritten from scratch per operator brief)
- **CPQ Migration** — `cpq-migration.html` (new; full page from mirror positioning +
  operator's Salesforce channel-partner framing)
- **About** — `about.html` (new; SCS as boutique shop, additive posture)

Removed BLOG and CONTACT from nav until they exist (per operator's turn-6 answer to
"nav honesty" question — but Contact is folded into About page).

### White papers
Two open-download PDFs shipped under `site/whitepapers/`:
- **WP-01** `wp-01-data-grounded-discovery.pdf` (4 pages, 9.9 KB) — Data-grounded
  discovery for SAP transformation. Generic; no client name. Frames the tooling as
  running on client-owned infrastructure.
- **WP-02** `wp-02-sap-semantic-layer-extension.pdf` (4 pages, 9.4 KB) — Extending the
  SAP semantic layer inside the client's boundary. De-clientified version of the EPIQ
  blueprint. Generic; no client name; no CO-PA war story; no Analysis for Office
  retirement claim.

Both papers use SCS visual system (red rule under header, navy H3, Helvetica body,
justified), NOT the EVEglyph canon. No watermark, no key ID, no French closing mark.
Open download, no form gate (per operator's turn-6 answer).

### Preview ribbon
Every `/site/` page carries a red "Preview — not for external distribution" ribbon in
the top-right. Removes when operator flips the cut-over.

## Files created / modified

New:
- `site/index.html` — home
- `site/sap-services.html` — SAP Services rewrite
- `site/cpq-migration.html` — new page
- `site/about.html` — new page
- `site/styles.css` — shared visual system
- `site/whitepapers/wp-01-data-grounded-discovery.pdf`
- `site/whitepapers/wp-02-sap-semantic-layer-extension.pdf`
- `site/assets/*.avif` — 13 brand + icon assets copied from mirror
- `_build/build_whitepapers.py` — reproducible PDF generator
- `edits/inbox/edit-0002-rebuild-repositioning.md` — this file

Modified:
- `.gitignore` — removed `site-src/` blanket ignore
- `index.html` — landing redirect page updated to point at `/site/`

Deleted (from prior build, not from repo):
- `site-src/` (Astro source) — was gitignored, session-only; abandoned
- Prior `site/` deployed dist — replaced wholesale

## Verification checklist

- [ ] `git push` succeeds
- [ ] Pages redeploys within ~1–2 min
- [ ] `/site/` loads with new SCS logo (not placeholder)
- [ ] Home eyebrow reads "Salesforce channel partner · Client-side SAP advisors"
- [ ] All four nav items resolve to non-404 pages
- [ ] Both white paper PDFs download
- [ ] Preview ribbon visible on every `/site/` page
- [ ] `/mirror/` still loads unchanged (frozen)

## Status

`merged` — commit `ab195c9ac4c292321e76d0870e961aa668366987`

Follow-on `0c4a7ca46e12be24a705c44dce667dde20d11062` — added `/site/methodology.html`
(three DICOE service lines: DataSphere stand-up + US-fronted Gold-Partner Basis
bench, EVE DI PMO structured repository + HITL protocol, Sovereign AI Reference
Model). Added Methodology to nav on all four existing pages. Generic sector
proof point on the marketing surface; named client stays in the private Jason
doc only. Pages built, all 6 URLs 200, load-bearing phrases verified live via
`curl | grep`. Home-page hero and SAP-services page copy deferred per operator
ship-path decision.

Pages build: `built` (verified via `gh api /repos/.../pages/builds`).

All 7 public URLs return 200. Corrected eyebrow verified live via `curl | grep`.
'not an SAP channel partner' disclaimer present on SAP Services page.
Zero leftover 'SAP + Salesforce channel partner' overclaims on home.
Preview ribbon renders. Home screenshot captured and reviewed.
