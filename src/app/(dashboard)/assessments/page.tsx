"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

import InitiateAssessmentModal from "@/components/assessments/initiate-assessment-modal";
import LatestAssessment from "@/components/assessments/latest-assessment";
import AssessmentHistory from "@/components/assessments/assessment-history";
import CustomAssessmentList from "@/components/assessments/custom-assessment-list";

import {
  latestAssessment,
  assessmentHistory,
} from "@/data/assessments";

import { useErmStore } from "@/store/erm-store";

export default function AssessmentsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const createAssessment = useErmStore((state) => state.createAssessment);

  function handleCreateAssessment(data: {
    title: string;
    scope: string;
    respondents: number;
    deadline: string;
  }) {
    createAssessment(data);
  }

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold text-white">
            Risk Assessments
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
            Initiate questionnaires, track response rates and process results into
            the risk register.
          </p>
        </div>

        <Button
          className="h-12 rounded-xl bg-[var(--primary)] px-5 font-medium text-[#06231d]"
          onPress={() => setIsOpen(true)}
        >
          + Initiate Assessment
        </Button>
      </div>

      <LatestAssessment data={latestAssessment} />

      <AssessmentHistory rows={assessmentHistory} />

      <CustomAssessmentList />

      <InitiateAssessmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreateAssessment}
      />
    </section>
  );
}