# Edit Inbox

How screenshot-driven edits flow through this repo.

## The pipeline

1. You open the deployed site (mirror or rebuild lane), mark up a screenshot with your intended change, and drop it in this thread.
2. I create `edits/inbox/edit-NNNN-<slug>.md` containing:
   - The screenshot
   - Your annotation (what to change, in your words)
   - Target page + component (resolved from the mirror URL index)
   - Status: `open`, `in-progress`, `merged`
3. I make the change in `/site/`, commit with `refs edits/inbox/edit-NNNN`, and update the edit file to `merged` with the commit SHA.
4. The rebuild lane redeploys automatically via GitHub Pages.

## Rules

- Every edit is a commit. Nothing gets changed silently.
- Mirror lane is frozen. Edits go to `/site/` only.
- If an edit would break "recipient wouldn't object" (SCS marketing team seeing it), it gets flagged and gated on your explicit go.
