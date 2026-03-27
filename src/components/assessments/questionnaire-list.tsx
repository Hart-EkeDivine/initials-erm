"use client";

import { useMemo, useState } from "react";
import { Questionnaire, useErmStore } from "@/store/erm-store";
import RespondentQuestionnaireModal from "./respondent-questionnaire-modal";

type Props = {
  assessmentId: string;
};

export default function QuestionnaireList({ assessmentId }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestionnaire, setSelectedQuestionnaire] =
    useState<Questionnaire | null>(null);

  const questionnaires = useErmStore((state) => state.questionnaires);

  const items = useMemo(
    () => questionnaires.filter((q) => q.assessmentId === assessmentId),
    [questionnaires, assessmentId]
  );

  const completedCount = items.filter((item) => item.status === "Completed").length;
  const pendingCount = items.filter((item) => item.status === "Pending").length;

  if (items.length === 0) return null;

  function handleOpen(questionnaire: Questionnaire) {
    setSelectedQuestionnaire(questionnaire);
    setIsOpen(true);
  }

  return (
    <div className="mt-5 rounded-2xl border border-white/8 bg-[#162233] p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Generated questionnaires</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {completedCount} completed · {pendingCount} pending
          </p>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-4">Respondent</th>
                <th className="px-4 py-4">Department</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-white/8">
                  <td className="px-4 py-4 text-sm text-white">
                    {item.respondentName}
                  </td>
                  <td className="px-4 py-4 text-sm text-[var(--muted)]">
                    {item.department}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        item.status === "Completed"
                          ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                          : "border-amber-400/20 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      • {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() => handleOpen(item)}
                      className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white hover:bg-white/5"
                    >
                      {item.status === "Completed" ? "View response" : "Respond"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RespondentQuestionnaireModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        questionnaire={selectedQuestionnaire}
      />
    </div>
  );
}