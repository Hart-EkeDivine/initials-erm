type MethodologyCardProps = {
  title: string;
  subtitle: string;
};

export default function MethodologyCard({
  title,
  subtitle,
}: MethodologyCardProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-lg font-semibold text-white">Methodology document</h2>

      <div className="mt-4 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm text-white">{title}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5">
            View document
          </button>
          <button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5">
            Re-extract with AI
          </button>
        </div>
      </div>
    </div>
  );
}