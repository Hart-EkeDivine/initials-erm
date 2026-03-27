type MetricCardProps = {
  title: string;
  value: string;
  description: string;
  accent?: "danger" | "warning" | "success" | "primary";
};

const accentMap = {
  danger: "text-red-400 border-t-red-400",
  warning: "text-amber-400 border-t-amber-400",
  success: "text-emerald-400 border-t-emerald-400",
  primary: "text-[var(--primary)] border-t-[var(--primary)]",
};

export default function MetricCard({
  title,
  value,
  description,
  accent = "primary",
}: MetricCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/8 border-t-2 bg-[var(--bg-card)] p-5 ${accentMap[accent]}`}
    >
      <p className="text-[10px] tracking-[0.22em] text-[var(--muted)]">{title}</p>
      <h3 className="mt-3 text-4xl font-semibold">{value}</h3>
      <p className="mt-2 max-w-[12rem] text-sm leading-5 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}