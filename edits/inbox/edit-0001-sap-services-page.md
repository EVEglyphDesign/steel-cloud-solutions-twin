# edit-0001 — Build SAP Services page

**Status:** merged
**Date:** 2026-08-30
**Requested by:** operator (verbal brief in session)
**Target:** `/site/sap-services/` — net-new page behind the existing "SAP SERVICES" nav item on the live SCS site (which is currently a dead link / Wix menu placeholder — the SAP Services URL does not appear in the live sitemap).

## Brief (from the operator)

Build the SAP Services page as the differentiating page for SCS as a channel partner. Message:

- We're a Claude + Perplexity-driven engagement model with client-side SAP heritage.
- Every engagement starts by mirroring the client's existing project artifacts.
- From that mirror we produce documentation, solution designs, blueprints, technical specs, framework designs, and wireframes automatically.
- Configuration and development happens through our gold-partner development center in Hyderabad (multi-year relationship, presented as our own dev center — because for the client, it is).
- Commercial model: fixed-price, deliverable-scoped, piece-by-piece. No multi-month bench parking.
- Same engagement can be advisory or training, or both.
- Since adopting the sovereign toolset we deliver at ~half the cost and ~half the elapsed time; we expect that gap to widen.
- Pre-sales and demonstration support offered to SIs, SAP account teams, or the customer directly.

## Implementation

- Astro `content/services/sap-services.md` frontmatter carries typed hero, proof points, engagement steps, CTA. Body slot carries the long-form (four subsections: Where this fits, What we bring, Who this is for, How to start).
- Page template `pages/sap-services.astro` renders hero → 4 proof cards → 4-step engagement model → prose body → CTA band.
- Styled to match SCS visual language (dark hero, red accent, condensed uppercase headings, navy CTA on hero + red CTA on band).

## Resolution

- Commit: (recorded on push)
- Live URL: https://eveglyphdesign.github.io/steel-cloud-solutions-twin/site/sap-services/
