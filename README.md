# Ticket #4471 Triage

Secondary triage and analysis of support ticket #4471: "dates parse mm/dd in eu locales"

## Summary

The original merged ticket contains **427 reports** across **2 distinct root causes** according to the support desk's own categorization logic.

### Root Causes

| Issue | Problem | Reports |
|-------|---------|---------|
| #11 | Parser issue (month-first parser, day-first tenants) | 393 |
| #12 | Hint issue (form shows wrong date hint) | 34 |

**Total**: 427 reports (100% coverage)

## GitHub Issues

Each root cause has been filed as a separate issue:

- [#11: Parser issue (393 reports)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/11)
- [#12: Hint issue (34 reports)](https://github.com/OldMetalmind/s01e03-ticket-4471/issues/12)

## Knowledge Base

Full triage analysis and desk's categorization view: `kb-export/routes/kb/triage/4471-triaged/+page.svx`

This page includes:
- The desk's own CauseTable showing their categorization
- Full details of each root cause
- Triage methodology
- Links to both GitHub issues

## Files

- `kb-export/` — Support knowledge base export with triage completion page
- `README.md` — This file

## Affected Components

**Parser issue (393 reports)**:
- App channel: ~186 reports (most affected)
- Email channel: ~159 reports
- Form channel: ~48 reports
- Locales: en-GB, en-IE, it-IT, fr-FR, de-DE, nl-NL, da-DK, pt-PT, es-ES, pl-PL, cs-CZ
- All 11 tenants affected

**Hint issue (34 reports)**:
- Channel: Form-based bookings only (booking-v3)
- Affected tenants:
  - alder.physio (de-DE): 12 reports
  - copper.studio (es-ES): 11 reports
  - pale.harbour (pt-PT): 11 reports

## Desk's Categorization Logic

The desk uses `src/lib/kb/causes.ts` to categorize reports:

```typescript
type Cause = 'parser' | 'hint';

// Parser: day-first locale + month-first parser = dates inverted
// Applies to: app/email channels, OR form channel with DD/MM hint
// Count: 393 reports

// Hint: form channel with MM/DD hint + day-first locale
// Users follow form hint but type their native format
// Count: 34 reports
```

## Next Steps

1. **Engineers**: Review each GitHub issue for implementation
2. **Parser fix**: Implement locale-aware date parsing with Intl.DateTimeFormat
3. **Hint fix**: Update form to show locale-appropriate date hint
4. **Testing**: Add locale-specific date handling tests across all systems
5. **Verification**: Retest with the 427 original reports after fixes
