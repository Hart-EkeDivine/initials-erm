type Row = {
  name: string;
  date: string;
  scope: string;
  responseRate: string;
  risks: number;
  status: string;
};

type Props = {
  rows: Row[];
};

export default function AssessmentHistory({ rows }: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      <h2 className="text-lg font-semibold text-white">Assessment history</h2>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/8">
        <table className="w-full text-left">
          <thead className="bg-white/[0.03] text-xs uppercase text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3">Assessment</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Scope</th>
              <th className="px-4 py-3">Response Rate</th>
              <th className="px-4 py-3">Risks Found</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-white/8">
                <td className="px-4 py-4 text-white">{row.name}</td>
                <td className="px-4 py-4 text-[var(--muted)]">{row.date}</td>
                <td className="px-4 py-4 text-[var(--muted)]">{row.scope}</td>
                <td className="px-4 py-4 text-emerald-400 font-medium">
                  {row.responseRate}
                </td>
                <td className="px-4 py-4 text-white">{row.risks}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    • {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}