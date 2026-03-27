type Row = {
  id: string;
  statement: string;
  category: string;
  score: number;
  ratio: string;
  classification: string;
};

type Props = {
  rows: Row[];
};

function getCategoryClass(category: string) {
  switch (category) {
    case "InfoSec":
      return "border-blue-400/20 bg-blue-500/10 text-blue-300";
    case "BCMS":
      return "border-amber-400/20 bg-amber-500/10 text-amber-300";
    case "Privacy":
      return "border-emerald-400/20 bg-emerald-500/10 text-emerald-300";
    case "Operational":
      return "border-violet-400/20 bg-violet-500/10 text-violet-300";
    case "Regulatory":
      return "border-red-400/20 bg-red-500/10 text-red-300";
    case "Financial":
      return "border-yellow-400/20 bg-yellow-500/10 text-yellow-300";
    default:
      return "border-white/10 bg-white/5 text-white";
  }
}

function getScoreClass(score: number) {
  if (score >= 16) {
    return "bg-red-500/15 text-red-300 border border-red-400/20";
  }
  if (score >= 8) {
    return "bg-amber-500/15 text-amber-300 border border-amber-400/20";
  }
  return "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20";
}

function getClassificationClass(classification: string) {
  switch (classification) {
    case "Critical":
      return "border-red-400/20 bg-red-500/10 text-red-300";
    case "Moderate":
      return "border-amber-400/20 bg-amber-500/10 text-amber-300";
    case "Minor":
      return "border-emerald-400/20 bg-emerald-500/10 text-emerald-300";
    default:
      return "border-white/10 bg-white/5 text-white";
  }
}

export default function RiskRegisterTable({ rows }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-[var(--bg-card)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            <tr>
              <th className="px-4 py-4">Risk ID</th>
              <th className="px-4 py-4">Statement</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Score</th>
              <th className="px-4 py-4"></th>
              <th className="px-4 py-4">Classification</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-white/8">
                <td className="px-4 py-5 text-sm text-[var(--primary)]">
                  {row.id}
                </td>

                <td className="max-w-[320px] px-4 py-5 text-sm text-white">
                  <span className="line-clamp-1">{row.statement}</span>
                </td>

                <td className="px-4 py-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${getCategoryClass(
                      row.category
                    )}`}
                  >
                    • {row.category}
                  </span>
                </td>

                <td className="px-4 py-5">
                  <span
                    className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-medium ${getScoreClass(
                      row.score
                    )}`}
                  >
                    {row.score}
                  </span>
                </td>

                <td className="px-4 py-5 text-sm text-[var(--muted)]">
                  {row.ratio}
                </td>

                <td className="px-4 py-5">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${getClassificationClass(
                      row.classification
                    )}`}
                  >
                    • {row.classification}
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