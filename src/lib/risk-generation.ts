import { Questionnaire } from "@/types/assessment";
import { GeneratedRisk } from "@/types/risk";

type RiskSeed = {
  key: string;
  statement: string;
  category: string;
  score: number;
  ratio: string;
  classification: "Critical" | "Moderate" | "Minor";
};

function detectThemesFromText(text: string): RiskSeed[] {
  const content = text.toLowerCase();
  const risks: RiskSeed[] = [];

  if (
    content.includes("password") ||
    content.includes("mfa") ||
    content.includes("phishing") ||
    content.includes("login") ||
    content.includes("access")
  ) {
    risks.push({
      key: "infosec-access",
      statement:
        "The organisation may experience unauthorised access due to weak password practices, incomplete MFA adoption, or phishing exposure.",
      category: "InfoSec",
      score: 16,
      ratio: "4x4",
      classification: "Critical",
    });
  }

  if (
    content.includes("downtime") ||
    content.includes("fallback") ||
    content.includes("continuity") ||
    content.includes("batch") ||
    content.includes("outage") ||
    content.includes("disruption")
  ) {
    risks.push({
      key: "bcms-disruption",
      statement:
        "The organisation may suffer service interruption because business continuity fallback procedures and recovery testing are not consistently effective.",
      category: "BCMS",
      score: 12,
      ratio: "3x4",
      classification: "Moderate",
    });
  }

  if (
    content.includes("personal data") ||
    content.includes("privacy") ||
    content.includes("ndpr") ||
    content.includes("data request") ||
    content.includes("consent")
  ) {
    risks.push({
      key: "privacy-handling",
      statement:
        "The organisation may mishandle personal data obligations because privacy response procedures are not consistently documented or followed.",
      category: "Privacy",
      score: 9,
      ratio: "3x3",
      classification: "Moderate",
    });
  }

  if (
    content.includes("approval") ||
    content.includes("transaction") ||
    content.includes("payment") ||
    content.includes("financial")
  ) {
    risks.push({
      key: "financial-control",
      statement:
        "The organisation may experience financial loss due to weak approval controls or gaps in transaction oversight.",
      category: "Financial",
      score: 10,
      ratio: "2x5",
      classification: "Moderate",
    });
  }

  if (
    content.includes("handoff") ||
    content.includes("process") ||
    content.includes("workflow") ||
    content.includes("delay")
  ) {
    risks.push({
      key: "operational-handoff",
      statement:
        "The organisation may face operational breakdown because critical workflow handoffs and process ownership are not consistently managed.",
      category: "Operational",
      score: 8,
      ratio: "2x4",
      classification: "Moderate",
    });
  }

  if (
    content.includes("regulation") ||
    content.includes("compliance") ||
    content.includes("submission") ||
    content.includes("cbn")
  ) {
    risks.push({
      key: "regulatory-filing",
      statement:
        "The organisation may fail to meet regulatory obligations on time due to weak compliance tracking and submission coordination.",
      category: "Regulatory",
      score: 10,
      ratio: "2x5",
      classification: "Moderate",
    });
  }

  return risks;
}

export function deriveRisksFromQuestionnaires(
  questionnaires: Questionnaire[],
  assessmentId: string
): GeneratedRisk[] {
  const allText = questionnaires
    .filter((q) => q.status === "Completed" && q.answers)
    .map((q) => `${q.answers?.q1} ${q.answers?.q2} ${q.answers?.q3}`)
    .join(" ");

  const detected = detectThemesFromText(allText);

  const unique = detected.filter(
    (risk, index, arr) => arr.findIndex((r) => r.key === risk.key) === index
  );

  const timestamp = Date.now();

  if (unique.length === 0) {
    return [
      {
        id: `RG-${timestamp}-fallback`,
        statement:
          "The organisation may experience control weaknesses that are not yet fully analysed because assessment responses indicate broad uncertainty across current processes.",
        category: "Operational",
        score: 8,
        ratio: "2x4",
        classification: "Moderate",
        sourceAssessmentId: assessmentId,
      },
    ];
  }

  return unique.map((risk, index) => ({
    id: `RG-${timestamp}-${index + 1}`,
    statement: risk.statement,
    category: risk.category,
    score: risk.score,
    ratio: risk.ratio,
    classification: risk.classification,
    sourceAssessmentId: assessmentId,
  }));
}