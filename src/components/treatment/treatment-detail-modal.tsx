"use client";

type TreatmentItem = {
  id: string;
  classification: string;
  treatment: string;
  owner: string;
  statement: string;
  score: number;
  controls: number;
  evidence: string;
  deadline: string;
  category: string;
  likelihood: number;
  impact: number;
  explanation: string;
  treatmentPlan: string;
  businessImpact: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: TreatmentItem;
};

export default function TreatmentDetailModal({
  isOpen,
  onClose,
  item,
}: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#121c2d] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/8 px-6 py-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--primary)]">{item.id}</span>

              <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">
                • {item.classification}
              </span>

              <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">
                • {item.treatment}
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                • {item.category}
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold">Treatment Details</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 px-3 py-1 text-sm text-white hover:bg-white/5"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Risk Statement
            </p>
            <p className="mt-2 text-sm leading-7 text-white">{item.statement}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Owner</p>
              <p className="mt-2 text-sm text-white">{item.owner}</p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Deadline</p>
              <p className="mt-2 text-sm text-amber-300">{item.deadline}</p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Score</p>
              <p className="mt-2 text-sm text-red-300">{item.score}</p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Likelihood × Impact</p>
              <p className="mt-2 text-sm text-white">
                {item.likelihood} × {item.impact}
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Controls</p>
              <p className="mt-2 text-sm text-white">{item.controls}</p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs text-[var(--muted)]">Evidence</p>
              <p className="mt-2 text-sm text-white">{item.evidence}</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Explanation
            </p>
            <p className="mt-2 text-sm leading-7 text-white">
              {item.explanation}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Treatment Plan
            </p>
            <p className="mt-2 text-sm leading-7 text-white">
              {item.treatmentPlan}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Business Impact
            </p>
            <p className="mt-2 text-sm leading-7 text-white">
              {item.businessImpact}
            </p>
          </div>
        </div>

        <div className="flex justify-end border-t border-white/8 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}