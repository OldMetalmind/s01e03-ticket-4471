<script lang="ts">
  import rows from '#lib/data/reports-4471.json';
  import { uniqueById, groupByCause, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';
  const raw = rows as Report[];
  const reports = uniqueById(raw).filter(r => r.mergedInto === 4471);
  const groups = groupByCause(reports, tenantOf);
  const issues: Record<string, number> = { parser: 11, hint: 12 };
</script>

<p><strong>{reports.length}</strong> unique reports from <strong>{raw.length}</strong>
exported rows; <strong>{raw.length - reports.length}</strong> overlapping rows do not add reports.</p>
<ul>
  {#each groups as group (group.cause)}
    <li><a href={'https://github.com/OldMetalmind/s01e03-ticket-4471/issues/' + issues[group.cause]}>
      {group.cause}: {group.reports.length} reports</a> across {group.tenants} tenants.</li>
  {/each}
</ul>
