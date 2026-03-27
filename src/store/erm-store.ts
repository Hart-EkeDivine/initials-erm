"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { deriveRisksFromQuestionnaires } from "@/lib/risk-generation";
import {
  Assessment,
  CreateAssessmentInput,
  Questionnaire,
  QuestionnaireAnswers,
} from "@/types/assessment";
import { GeneratedRisk } from "@/types/risk";
import {
  formatToday,
  generateAssessmentId,
  generateQuestionnaires,
} from "@/lib/assessment-utils";

type ErmStore = {
  assessments: Assessment[];
  questionnaires: Questionnaire[];
  generatedRisks: GeneratedRisk[];

  createAssessment: (data: CreateAssessmentInput) => void;
  simulateResponses: (assessmentId: string) => void;
  processAssessment: (assessmentId: string) => void;
  submitQuestionnaire: (
    questionnaireId: string,
    answers: QuestionnaireAnswers
  ) => void;
  resetAssessment: (assessmentId: string) => void;
  deleteAssessment: (assessmentId: string) => void;
};

export const useErmStore = create<ErmStore>()(
  persist(
    (set, get) => ({
      assessments: [],
      questionnaires: [],
      generatedRisks: [],

      createAssessment: (data) => {
        const id = generateAssessmentId();

        const newAssessment: Assessment = {
          id,
          title: data.title,
          scope: data.scope,
          respondents: data.respondents,
          completedResponses: 0,
          deadline: data.deadline,
          dispatched: formatToday(),
          status: "Active",
          risksIdentified: 0,
        };

        const newQuestionnaires = generateQuestionnaires(id, data.respondents);

        set((state) => ({
          assessments: [newAssessment, ...state.assessments],
          questionnaires: [...newQuestionnaires, ...state.questionnaires],
        }));
      },

      simulateResponses: (assessmentId) => {
        const state = get();

        const assessmentQuestionnaires = state.questionnaires.filter(
          (q) => q.assessmentId === assessmentId
        );

        const targetAssessment = state.assessments.find(
          (a) => a.id === assessmentId
        );
        if (!targetAssessment) return;

        const completedCount = Math.min(
          targetAssessment.respondents,
          Math.max(1, Math.floor(targetAssessment.respondents * 0.78))
        );

        const completedIds = new Set(
          assessmentQuestionnaires.slice(0, completedCount).map((q) => q.id)
        );

        set((current) => ({
          questionnaires: current.questionnaires.map((q) =>
            q.assessmentId === assessmentId
              ? {
                  ...q,
                  status: completedIds.has(q.id) ? "Completed" : "Pending",
                  answers: completedIds.has(q.id)
                    ? {
                        q1: "Access reviews are not always completed on schedule.",
                        q2: "Business continuity fallback drills are irregular.",
                        q3: "There is moderate confidence in current controls.",
                      }
                    : q.answers,
                }
              : q
          ),
          assessments: current.assessments.map((assessment) =>
            assessment.id === assessmentId
              ? {
                  ...assessment,
                  completedResponses: completedCount,
                  status: "Completed",
                }
              : assessment
          ),
        }));
      },

      processAssessment: (assessmentId) => {
        const { assessments, generatedRisks, questionnaires } = get();
        const target = assessments.find((a) => a.id === assessmentId);

        if (!target) return;
        if (target.status === "Processed") return;

        const remainingRisks = generatedRisks.filter(
          (risk) => risk.sourceAssessmentId !== assessmentId
        );

        const relatedQuestionnaires = questionnaires.filter(
          (q) => q.assessmentId === assessmentId
        );

        const newRisks = deriveRisksFromQuestionnaires(
          relatedQuestionnaires,
          assessmentId
        );

        set((state) => ({
          assessments: state.assessments.map((assessment) =>
            assessment.id === assessmentId
              ? {
                  ...assessment,
                  status: "Processed",
                  risksIdentified: newRisks.length,
                }
              : assessment
          ),
          generatedRisks: [...newRisks, ...remainingRisks],
        }));
      },

      submitQuestionnaire: (questionnaireId, answers) => {
        const state = get();
        const target = state.questionnaires.find((q) => q.id === questionnaireId);
        if (!target) return;

        const assessmentId = target.assessmentId;

       const updatedQuestionnaires: Questionnaire[] = state.questionnaires.map((q) =>
  q.id === questionnaireId
    ? {
        ...q,
        status: "Completed" as const,
        answers,
      }
    : q
);

        const completedCount = updatedQuestionnaires.filter(
          (q) => q.assessmentId === assessmentId && q.status === "Completed"
        ).length;

        set({
          questionnaires: updatedQuestionnaires,
          assessments: state.assessments.map((assessment) =>
            assessment.id === assessmentId
              ? {
                  ...assessment,
                  completedResponses: completedCount,
                  status: completedCount > 0 ? "Completed" : assessment.status,
                }
              : assessment
          ),
        });
      },

resetAssessment: (assessmentId) => {
  const state = get();

  set({
    assessments: state.assessments.map((assessment) =>
      assessment.id === assessmentId
        ? {
            ...assessment,
            completedResponses: 0,
            status: "Active",
            risksIdentified: 0,
          }
        : assessment
    ),

    questionnaires: state.questionnaires.map((q) =>
      q.assessmentId === assessmentId
        ? {
            ...q,
            status: "Pending",
            answers: undefined,
          }
        : q
    ),

    generatedRisks: state.generatedRisks.filter(
      (risk) => risk.sourceAssessmentId !== assessmentId
    ),
  });
},

deleteAssessment: (assessmentId) => {
  const state = get();

  set({
    assessments: state.assessments.filter(
      (assessment) => assessment.id !== assessmentId
    ),
    questionnaires: state.questionnaires.filter(
      (q) => q.assessmentId !== assessmentId
    ),
    generatedRisks: state.generatedRisks.filter(
      (risk) => risk.sourceAssessmentId !== assessmentId
    ),
  });
},
    }),
    {
      name: "erm-workflow-storage",
    }
  )
);