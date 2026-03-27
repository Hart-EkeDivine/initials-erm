"use client";

import { useState } from "react";
import TreatmentDetailModal from "./treatment-detail-modal";

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
  item: TreatmentItem;
};

export default function TreatmentCard({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--primary)]">{item.id}</span>

              <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">
                • {item.classification}
              </span>

              <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">
                • {item.treatment}
              </span>
            </div>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white">
              {item.statement}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <p className="text-[var(--muted)]">
                Score: <span className="text-red-300">{item.score}</span>
              </p>
              <p className="text-[var(--muted)]">
                Controls: <span className="text-white">{item.controls}</span>
              </p>
              <p className="text-[var(--muted)]">
                Evidence: <span className="text-white">{item.evidence}</span>
              </p>
              <p className="text-[var(--muted)]">
                Deadline: <span className="text-amber-300">{item.deadline}</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
            <p className="text-sm text-[var(--muted)]">
              Owner: <span className="text-white">{item.owner}</span>
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
            >
              View detail →
            </button>
          </div>
        </div>
      </div>

      <TreatmentDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        item={item}
      />
    </>
  );
}