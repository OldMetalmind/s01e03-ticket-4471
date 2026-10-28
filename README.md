# S01E03 — Ticket #4471 triage

The supplied export contains 427 rows but **412 unique reports**.
The desk's exported logic groups them into two problems:

| Ticket | Problem | Unique reports |
| --- | --- | ---: |
| [#11](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/11) | Shared parser reads month first for day-first tenants | 379 |
| [#12](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/12) | Booking-v3's MM/DD hint contradicts tenant-order parsing | 33 |

These counts supersede earlier drafts, which counted overlapping export rows and used
browser locale instead of tenant configuration. The old issues remain closed for history.

## Engineering update

The course subsequently reported #4471 closed on 5 October:
- Parser: fixed by `fix(dates): parse dd/mm for eu locales`; #11 closed as completed.
- Hint: won't fix because booking-v3 was retired; #12 closed as not planned.

## Deliverables

- **Signed source:** [src/routes/kb/incidents/4471-triage/+page.svx](src/routes/kb/incidents/4471-triage/+page.svx)
- **Rendered HTML:** [rendered/kb/incidents/4471-triage/index.html](rendered/kb/incidents/4471-triage/index.html)
- **Screenshot:** [rendered/4471-triage.png](rendered/4471-triage.png)
- **Export conventions:** [KB-README.md](KB-README.md)

The rendered HTML is the output of the actual Svelte components, not a manually
retyped approximation. Download the rendered directory and serve it to view styling
and interactive assets; GitHub's file viewer displays HTML source rather than running it.

## Build and view

Requires Node.js 24 (the verification script imports TypeScript directly).

```sh
npm ci
npm run check
npm run build
npm run preview
```

Open the URL Vite prints, followed by `/kb/incidents/4471-triage/`.
The build writes the entire static KB to `rendered/`.

The original export's files are preserved under `src/`, including the accepted
decision record. New files supply the report and computed summary.
No dependency was installed outside this S01E03 working folder.

## Counting rules

Use the original `uniqueById`, filter `mergedInto === 4471`, then use
`groupByCause` with the tenant directory. Browser locale, intake tag and subject
are not classification authorities. Five reports the desk read as one-day moves
remain counted under parser, as the exported component shows.

The export is dated 2026-10-04. These figures do not claim to describe the live queue,
and filing a ticket does not mean a fix has shipped or been scheduled.
