import { departments, sampleNames } from "@/data/respondents";
import {
  CreateAssessmentInput,
  Questionnaire,
} from "@/types/assessment";

export function formatToday(): string {
  const now = new Date();
  return now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function generateAssessmentId(): string {
  return `ASM-${Date.now()}`;
}

export function generateRiskId(prefix = "RG"): string {
  return `${prefix}-${Date.now()}`;
}

export function calculateResponseRate(
  completed: number,
  total: number
): number {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
}

export function generateQuestionnaires(
  assessmentId: string,
  total: number
): Questionnaire[] {
  return Array.from({ length: total }, (_, index) => ({
    id: `Q-${assessmentId}-${index + 1}`,
    assessmentId,
    respondentName: sampleNames[index % sampleNames.length],
    department: departments[index % departments.length],
    status: "Pending",
  }));
}

export function normalizeAssessmentInput(
  data: CreateAssessmentInput
): CreateAssessmentInput {
  return {
    title: data.title.trim(),
    scope: data.scope.trim(),
    respondents: Math.max(1, data.respondents),
    deadline: data.deadline,
  };
}