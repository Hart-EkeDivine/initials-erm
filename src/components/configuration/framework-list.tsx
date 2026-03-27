type Framework = {
  label: string;
  active: boolean;
};

type FrameworkListProps = {
  items: Framework[];
};

export default function FrameworkList({ items }: FrameworkListProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">Active frameworks</h2>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-start gap-3 rounded-xl border px-4 py-4 ${
              item.active
                ? "border-emerald-400/15 bg-emerald-500/10 text-white"
                : "border-white/6 bg-white/[0.02] text-[var(--muted)] opacity-60"
            }`}
          >
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] ${
                item.active
                  ? "bg-[var(--primary)] text-[#06231d]"
                  : "border border-white/10 bg-transparent text-[var(--muted)]"
              }`}
            >
              {item.active ? "✓" : ""}
            </div>

            <p className="text-sm leading-6">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}