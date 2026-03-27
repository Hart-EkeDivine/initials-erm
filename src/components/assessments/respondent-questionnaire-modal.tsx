"use client";

import { useState } from "react";
import { useErmStore } from "@/store/erm-store";
import { Questionnaire } from "@/types/assessment";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  questionnaire: Questionnaire | null;
};

export default function RespondentQuestionnaireModal({
  isOpen,
  onClose,
  questionnaire,
}: Props) {
  const submitQuestionnaire = useErmStore((state) => state.submitQuestionnaire);

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  if (!isOpen || !questionnaire) return null;

 function handleSubmit() {
  if (!questionnaire) return;
  if (!q1 || !q2 || !q3) return;

  submitQuestionnaire(questionnaire.id, { q1, q2, q3 });

    setQ1("");
    setQ2("");
    setQ3("");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#121c2d] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/8 px-6 py-5">
          <h2 className="text-xl font-semibold">Respondent Questionnaire</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {questionnaire.respondentName} · {questionnaire.department}
          </p>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div>
            <label className="text-sm font-medium text-white">
              1. What control or process weakness have you observed recently?
            </label>
            <textarea
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none"
              placeholder="Describe the issue..."
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white">
              2. What operational disruption could happen if this issue is not addressed?
            </label>
            <textarea
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none"
              placeholder="Describe the possible disruption..."
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white">
              3. How confident are you in the current controls?
            </label>
            <textarea
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none"
              placeholder="Describe your confidence level..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-white/8 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[#06231d]"
          >
            Submit response
          </button>
        </div>
      </div>
    </div>
  );
}