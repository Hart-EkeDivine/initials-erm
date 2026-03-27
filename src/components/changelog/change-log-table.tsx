type ChangeLogRow = {
  risk: string;
  fieldChanged: string;
  from: string;
  to: string;
  changedBy: string;
  date: string;
  reason: string;
};

type Props = {
  rows: ChangeLogRow[];
};

function getToClass(value: string) {
  if (value === "assigned" || value === "in_treatment" || value === "owner1") {
    return "text-[var(--primary)]";
  }

  if (value === "2" || value === "4") {
    return "text-emerald-400";
  }

  return "text-white";
}

export default function ChangeLogTable({ rows }: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      <div className="overflow-hidden rounded-2xl border border-white/8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-4">Risk</th>
                <th className="px-4 py-4">Field Changed</th>
                <th className="px-4 py-4">From</th>
                <th className="px-4 py-4">To</th>
                <th className="px-4 py-4">Changed By</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Reason</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={`${row.risk}-${row.fieldChanged}-${index}`}
                  className="border-t border-white/8 align-top"
                >
                  <td className="px-4 py-5 text-sm text-[var(--primary)]">
                    {row.risk}
                  </td>

                  <td className="px-4 py-5 text-sm text-white">
                    {row.fieldChanged}
                  </td>

                  <td className="px-4 py-5 text-sm text-[var(--muted)]">
                    {row.from}
                  </td>

                  <td className={`px-4 py-5 text-sm ${getToClass(row.to)}`}>
                    {row.to}
                  </td>

                  <td className="px-4 py-5 text-sm text-white">
                    {row.changedBy}
                  </td>

                  <td className="px-4 py-5 text-sm text-white">
                    {row.date}
                  </td>

                  <td className="max-w-[260px] px-4 py-5 text-sm leading-6 text-[var(--muted)]">
                    {row.reason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}