# Ticket #4471 Triage

Secondary triage and analysis of support ticket #4471: "dates parse mm/dd in eu locales"

## Summary

The original merged ticket contains **427 reports** that the support desk initially classified as a single issue. Our analysis identified **6 distinct problems**:

1. **Wrong Day of Week on Invite** (111 reports) — Invites show incorrect day names
2. **Month and Day Swapped in Locale Format** (53 reports) — DD/MM vs MM/DD parsing errors
3. **Booking Date Mismatch Between UI and Invite** (53 reports) — Inconsistent dates across systems
4. **Appointment Auto-Moved Without User Action** (34 reports) — Appointments change without user action
5. **Reminder Sent on Wrong Date** (37 reports) — Reminders sent weeks/months off
6. **Generic Date/Time Issues** (139 reports) — Miscellaneous issues requiring further triage

## GitHub Issues

Each problem has been filed as a separate issue in this repository:

- [#1: Wrong Day of Week on Invite](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/1) — 111 reports
- [#2: Month and Day Swapped in Locale Format](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/2) — 53 reports
- [#3: Booking Date Mismatch Between UI and Invite](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/3) — 53 reports
- [#4: Appointment Auto-Moved Without User Action](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/4) — 34 reports
- [#5: Reminder Sent on Wrong Date](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/5) — 37 reports
- [#6: Generic Date/Time Issues (Triage Required)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/6) — 139 reports

## Knowledge Base

Full triage analysis and methodology available at: `kb-export/routes/kb/triage/4471-analysis/+page.svx`

## Files

- `kb-export/` — Support knowledge base export with triage analysis page
- `issues.json` — URLs of created GitHub issues
- `README.md` — This file

## Affected Locales

Issues reported across 12 locales:
- en-GB (91), en-US (42), pl-PL (38), it-IT (37), nl-NL (36), fr-FR (32), cs-CZ (27), da-DK (27), pt-PT (27), es-ES (24), de-DE (23), en-IE (23)

## Next Steps

1. **Engineers**: Review each issue for root cause analysis
2. **Secondary Triage**: Analyze the 139 "generic" reports for additional patterns
3. **Fix Prioritization**: Address high-severity issues first (auto-moved appointments, booking mismatches)
4. **Integration Testing**: Ensure locale-aware date handling is tested across all systems
