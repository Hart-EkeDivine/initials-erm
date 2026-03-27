import type { CriteriaRow } from "@/components/configuration/criteria-table";



export const frameworks = [
  {
    label: "ISO 27001 — Information Security",
    active: true,
  },
  {
    label: "ISO 22301 — Business Continuity",
    active: true,
  },
  {
    label: "NDPR / GDPR — Data Privacy",
    active: true,
  },
  {
    label: "ISO 31000 — Risk Management (methodology)",
    active: true,
  },
  {
    label: "PCI-DSS — Payment Card Security (not activated)",
    active: false,
  },
];

export const matrixLegend = [
  { label: "Minor 1–7", className: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300" },
  { label: "Moderate 8–15", className: "border-amber-400/20 bg-amber-500/10 text-amber-300" },
  { label: "Critical 16–25", className: "border-red-400/20 bg-red-500/10 text-red-300" },
];

export const matrixValues = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25],
];

export const criteriaRows: CriteriaRow[] = [
  {
    classification: "Critical",
    scoreRange: "16–25",
    response: "Treat – mandatory",
    revenueRisk: "30–55% of annual revenue",
    regulatory: "CBN sanction risk / Licence review",
    tone: "critical",
  },
  {
    classification: "Moderate",
    scoreRange: "8–15",
    response: "Manage and monitor",
    revenueRisk: "5–30% of annual revenue",
    regulatory: "Regulatory notice · Fine possible",
    tone: "moderate",
  },
  {
    classification: "Minor",
    scoreRange: "1–7",
    response: "Accept",
    revenueRisk: "<5% of annual revenue",
    regulatory: "Minimal regulatory concern",
    tone: "minor",
  },
];

export const methodologyDocument = {
  title: "Risk_Management_Methodology_v3.2.pdf",
  subtitle: "Uploaded 14 Feb 2026 · ISO 31000 / Clause 6 compliant · 24 pages",
};