# Ticket #4471 Triage

Secondary triage and analysis of support ticket #4471: "dates parse mm/dd in eu locales"

## Summary

The original merged ticket contains **427 reports** that the support desk initially classified as a single issue. Our analysis identified **5 distinct problems**:

1. **Wrong Day of Week on Invite** (111 reports) — Invites show incorrect day names
2. **Date Format Parsing Error: DD/MM vs MM/DD** (132 reports) — Locale format swaps causing booking/invite mismatches
3. **Appointment Auto-Moved Without User Action** (34 reports) — Appointments change without user action
4. **Reminder Sent on Wrong Date** (37 reports) — Reminders sent weeks/months off
5. **Other Date/Time Issues** (113 reports) — Miscellaneous issues requiring further triage

## GitHub Issues

Each problem has been filed as a separate issue in this repository:

- [#1: Wrong Day of Week on Invite](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/1) — 111 reports
- [#4: Appointment Auto-Moved Without User Action](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/4) — 34 reports
- [#5: Reminder Sent on Wrong Date](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/5) — 37 reports
- [#6: Other Date/Time Issues (Triage Required)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/6) — 113 reports
- [#7: Date Format Parsing Error (DD/MM vs MM/DD)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/7) — 132 reports

(Issues #2 and #3 were closed and merged into #7)

## Knowledge Base

Full triage analysis and methodology available at: `kb-export/routes/kb/triage/4471-analysis/+page.svx`

## Files

- `kb-export/` — Support knowledge base export with triage analysis page
- `issues.json` — URLs of created GitHub issues
- `README.md` — This file

## Affected Locales

Issues reported across 12 locales:
- en-GB (91), en-US (42), pl-PL (38), it-IT (37), nl-NL (36), fr-FR (32), cs-CZ (27), da-DK (27), pt-PT (27), es-ES (24), de-DE (23), en-IE (23)

## Coverage

- **Categorized into 5 issues**: 314 reports (74%)
- **Unclassified (generic)**: 113 reports (26%)
- **Total**: 427 reports

## Next Steps

1. **Engineers**: Review each issue for root cause analysis
2. **Secondary Triage**: Analyze the 113 "other" reports for additional patterns
3. **Fix Prioritization**: Address high-severity issues first (auto-moved appointments, date format errors)
4. **Integration Testing**: Ensure locale-aware date handling is tested across all systems (booking, invite, reminder, display)
