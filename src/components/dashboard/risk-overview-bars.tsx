type OverviewItem = {
  label: string;
  count: number;
  color: string;
  width: string;
};

type RiskOverviewBarsProps = {
  items: OverviewItem[];
};

export default function RiskOverviewBars({ items }: RiskOverviewBarsProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">Risk register overview</h2>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white">{item.label}</span>
              <span className="text-[var(--muted)]">
                {item.count} {item.count > 1 ? "risks" : "risk"}
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-white/5">
              <div
                className={`h-2 rounded-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white transition hover:bg-white/5">
        View full register →
      </button>
    </div>
  );
}