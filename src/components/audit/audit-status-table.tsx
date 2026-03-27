type Row = {
  id: string;
  identified: string;
  analysed: string;
  evaluated: string;
  ownerAssigned: string;
  evidence: string;
  closed: string;
};

type Props = {
  rows: Row[];
};

function getValueClass(value: string) {
  if (value.includes("✓")) return "text-emerald-400";
  if (value.includes("✕")) return "text-red-400";
  return "text-[var(--muted)]";
}

export default function AuditStatusTable({ rows }: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      <h2 className="text-lg font-semibold text-white">Per-risk audit status</h2>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-4">Risk ID</th>
                <th className="px-4 py-4">Identified</th>
                <th className="px-4 py-4">Analysed</th>
                <th className="px-4 py-4">Evaluated</th>
                <th className="px-4 py-4">Owner Assigned</th>
                <th className="px-4 py-4">Evidence</th>
                <th className="px-4 py-4">Closed</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-white/8">
                  <td className="px-4 py-4 text-sm text-[var(--primary)]">{row.id}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.identified)}`}>{row.identified}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.analysed)}`}>{row.analysed}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.evaluated)}`}>{row.evaluated}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.ownerAssigned)}`}>{row.ownerAssigned}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.evidence)}`}>{row.evidence}</td>
                  <td className={`px-4 py-4 text-sm ${getValueClass(row.closed)}`}>{row.closed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}