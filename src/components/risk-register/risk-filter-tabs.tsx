"use client";

type Props = {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
};

export default function RiskFilterTabs({
  filters,
  activeFilter,
  onChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-2 text-sm text-[var(--muted)]">Filter</span>

        {filters.map((filter) => {
          const active = filter === activeFilter;

          return (
            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                active
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[#06231d]"
                  : "border-white/8 bg-transparent text-white hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}