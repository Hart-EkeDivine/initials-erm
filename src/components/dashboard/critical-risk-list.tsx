type RiskItem = {
  id: string;
  category: string;
  categoryColor: "warning" | "info";
  statement: string;
  owner: string;
  classification: string;
};

type CriticalRiskListProps = {
  items: RiskItem[];
};

const categoryClasses = {
  warning: "border-amber-400/20 bg-amber-500/10 text-amber-300",
  info: "border-blue-400/20 bg-blue-500/10 text-blue-300",
};

export default function CriticalRiskList({ items }: CriticalRiskListProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">
        Critical risks requiring action
      </h2>

      <div className="mt-5 space-y-5">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={index !== items.length - 1 ? "border-b border-white/8 pb-5" : ""}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--primary)]">{item.id}</span>

              <span
                className={`rounded-full border px-2 py-1 text-[10px] ${categoryClasses[item.categoryColor]}`}
              >
                • {item.category}
              </span>

              <span className="ml-auto rounded-full border border-red-400/20 bg-red-500/10 px-2 py-1 text-[10px] text-red-300">
                • {item.classification}
              </span>
            </div>

            <p className="mt-3 text-[15px] leading-6 text-white">
              {item.statement}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">{item.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}