type Props = {
  data: {
    title: string;
    status: string;
    dispatched: string;
    deadline: string;
    scope: string;
    responseRate: number;
    responses: string;
    risksIdentified: number;
    nonResponders: number;
  };
};

export default function LatestAssessment({ data }: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">{data.title}</h2>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          • {data.status}
        </span>
      </div>

      {/* grid info */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs text-[var(--muted)]">DISPATCHED</p>
          <p className="mt-1 text-sm text-white">{data.dispatched}</p>
        </div>

        <div>
          <p className="text-xs text-[var(--muted)]">DEADLINE</p>
          <p className="mt-1 text-sm text-white">{data.deadline}</p>
        </div>

        <div>
          <p className="text-xs text-[var(--muted)]">SCOPE</p>
          <p className="mt-1 text-sm text-white">{data.scope}</p>
        </div>
      </div>

      {/* response */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--muted)]">Response rate</span>
          <span className="text-emerald-400 font-medium">
            {data.responseRate}% ({data.responses})
          </span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-white/5">
          <div
            className="h-2 rounded-full bg-emerald-400"
            style={{ width: `${data.responseRate}%` }}
          />
        </div>
      </div>

      {/* stats */}
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div>
          <p className="text-xs text-[var(--muted)]">RISKS IDENTIFIED</p>
          <p className="mt-1 text-lg text-white">{data.risksIdentified}</p>
        </div>

        <div>
          <p className="text-xs text-[var(--muted)]">NON-RESPONDERS</p>
          <p className="mt-1 text-lg text-amber-400">{data.nonResponders}</p>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-6 flex gap-3">
        <button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5">
          View identified risks →
        </button>

        <button className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5">
          Export non-responder report
        </button>
      </div>
    </div>
  );
}