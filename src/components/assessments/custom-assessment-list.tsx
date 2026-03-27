"use client";

import { useMemo } from "react";
import { useErmStore } from "@/store/erm-store";
import QuestionnaireList from "./questionnaire-list";

function getResponseRate(completed: number, total: number) {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
}

export default function CustomAssessmentList() {
 const assessments = useErmStore((state) => state.assessments);
const simulateResponses = useErmStore((state) => state.simulateResponses);
const processAssessment = useErmStore((state) => state.processAssessment);
const resetAssessment = useErmStore((state) => state.resetAssessment);
const deleteAssessment = useErmStore((state) => state.deleteAssessment);

  const hasAssessments = useMemo(() => assessments.length > 0, [assessments]);

  if (!hasAssessments) {
    return (
      <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
        <h2 className="text-lg font-semibold text-white">Workflow queue</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          No newly initiated assessments yet. Create one to begin the questionnaire
          and risk processing workflow.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      <h2 className="text-lg font-semibold text-white">Workflow queue</h2>

      <div className="mt-5 space-y-5">
        {assessments.map((assessment) => {
          const responseRate = getResponseRate(
            assessment.completedResponses,
            assessment.respondents
          );

          return (
            <div
              key={assessment.id}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-lg font-semibold text-white">
                      {assessment.title}
                    </p>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        assessment.status === "Processed"
                          ? "border-blue-400/20 bg-blue-500/10 text-blue-300"
                          : assessment.status === "Completed"
                          ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                          : "border-amber-400/20 bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      • {assessment.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Scope: {assessment.scope} · Dispatched: {assessment.dispatched} ·
                    Deadline: {assessment.deadline}
                  </p>
                </div>

                <div className="text-sm text-[var(--muted)]">
                  ID: <span className="text-[var(--primary)]">{assessment.id}</span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">Response rate</span>
                  <span className="font-medium text-emerald-400">
                    {responseRate}% ({assessment.completedResponses}/
                    {assessment.respondents})
                  </span>
                </div>

                <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-emerald-400"
                    style={{ width: `${responseRate}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <p className="text-[var(--muted)]">
                  Respondents: <span className="text-white">{assessment.respondents}</span>
                </p>
                <p className="text-[var(--muted)]">
                  Risks identified:{" "}
                  <span className="text-white">{assessment.risksIdentified}</span>
                </p>
              </div>
<div className="mt-5 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={() => simulateResponses(assessment.id)}
    className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
  >
    Simulate responses
  </button>

  <button
    type="button"
    onClick={() => processAssessment(assessment.id)}
    className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[#06231d]"
  >
    Process results
  </button>

  <button
    type="button"
    onClick={() => resetAssessment(assessment.id)}
    className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/15"
  >
    Reset workflow
  </button>

  <button
    type="button"
    onClick={() => {
      const confirmed = window.confirm(
        `Delete assessment "${assessment.title}"? This will remove its questionnaires and generated risks.`
      );
      if (confirmed) {
        deleteAssessment(assessment.id);
      }
    }}
    className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
  >
    Delete assessment
  </button>
</div>
              <QuestionnaireList assessmentId={assessment.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}