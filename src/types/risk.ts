export type RiskClassification = "Critical" | "Moderate" | "Minor";

export type GeneratedRisk = {
  id: string;
  statement: string;
  category: string;
  score: number;
  ratio: string;
  classification: RiskClassification;
  sourceAssessmentId: string;
};