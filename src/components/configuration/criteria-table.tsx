type CriteriaRow = {
  classification: string;
  scoreRange: string;
  response: string;
  revenueRisk: string;
  regulatory: string;
  tone: "critical" | "moderate" | "minor";
};

type CriteriaTableProps = {
  rows: CriteriaRow[];
};

const badgeMap = {
  critical: "border-red-400/20 bg-red-500/10 text-red-300",
  moderate: "border-amber-400/20 bg-amber-500/10 text-amber-300",
  minor: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
};

export default function CriteriaTable({ rows }: CriteriaTableProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">
        Risk criteria — appetite and response
      </h2>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-white/8">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-white/[0.03]">
            <tr className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <th className="px-4 py-4">Classification</th>
              <th className="px-4 py-4">Score Range</th>
              <th className="px-4 py-4">Response</th>
              <th className="px-4 py-4">Revenue at Risk</th>
              <th className="px-4 py-4">Regulatory</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.classification} className="border-t border-white/8">
                <td className="px-4 py-5">
                  <span className={`rounded-full border px-3 py-1 text-xs ${badgeMap[row.tone]}`}>
                    • {row.classification}
                  </span>
                </td>
                <td className="px-4 py-5 text-sm text-white">{row.scoreRange}</td>
                <td className="px-4 py-5">
                  <span className={`rounded-full border px-3 py-1 text-xs ${badgeMap[row.tone]}`}>
                    • {row.response}
                  </span>
                </td>
                <td className="px-4 py-5 text-sm text-white">{row.revenueRisk}</td>
                <td className="px-4 py-5 text-sm text-[var(--muted)]">{row.regulatory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}