# Ticket #4471 Triage

Secondary triage and analysis of support ticket #4471: "dates parse mm/dd in eu locales"

## Summary

The original merged ticket contains **427 reports** across **3 technical root causes**. The desk's own categorization framework (in `src/lib/kb/causes.ts`) groups reports by mechanism, not symptoms.

### Root Causes

| Issue | Problem | Reports | Root Cause |
|-------|---------|---------|-----------|
| #8 | Parser issue | 369 | Month-first parser, day-first users |
| #9 | Hint issue | 16 | Form shows wrong date hint for locale |
| #10 | Unplaced | 42 | Timezone, reminders, other issues |

## GitHub Issues

Each root cause has been filed as a separate issue:

- [#8: Parser issue (369 reports)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/8)
- [#9: Hint issue (16 reports)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/9)
- [#10: Unplaced issues (42 reports)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/10)

## Knowledge Base

Full triage analysis using the desk's categorization framework: `kb-export/routes/kb/triage/4471-analysis/+page.svx`

## Desk's Categorization Framework

The desk categorizes using technical root cause, not symptoms:

```typescript
type Cause = 'parser' | 'hint' | 'unplaced';

// Parser: day-first locale + month-first parser = dates inverted
// Hint: form shows MM/DD hint but user is day-first = user confusion
// Unplaced: doesn't fit the pattern, needs investigation
```

Logic in `src/lib/kb/causes.ts`:
- Detect if tenant's locale is day-first (via Intl.DateTimeFormat)
- Check report channel and booking form version
- Categorize based on which mismatch occurred

## Coverage

- **Parser issues**: 369 reports (86%) — Most common, highest impact
- **Hint issues**: 16 reports (4%) — Form-specific, localized
- **Unplaced**: 42 reports (10%) — Requires secondary triage

## Affected Locales

**Day-first locales** (parser and hint issues):
en-GB, en-IE, it-IT, fr-FR, de-DE, nl-NL, da-DK, pt-PT, es-ES, pl-PL, cs-CZ

**Month-first locales** (unplaced issues):
en-US and others

## Key Files

- `kb-export/lib/kb/causes.ts` — Desk's categorization logic (the source of truth)
- `kb-export/lib/data/reports-4471.json` — 427 raw reports
- `kb-export/lib/data/tenants/` — Tenant locale and form configuration
- `kb-export/routes/kb/triage/4471-analysis/+page.svx` — Triage summary page

## Next Steps

1. **Engineers**: Implement locale-aware date parsing using Intl.DateTimeFormat
2. **Form v3 update**: Show locale-appropriate date hints
3. **Unplaced investigation**: Categorize remaining 42 reports
4. **Testing**: Add locale-specific date handling tests
