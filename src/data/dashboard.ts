export const dashboardStats = [
  {
    title: "CRITICAL RISKS",
    value: "2",
    description: "Require immediate treatment",
    accent: "danger",
  },
  {
    title: "MODERATE RISKS",
    value: "6",
    description: "Manage and monitor",
    accent: "warning",
  },
  {
    title: "MINOR RISKS",
    value: "0",
    description: "Within tolerance",
    accent: "success",
  },
  {
    title: "IN TREATMENT",
    value: "2",
    description: "2 total require treatment",
    accent: "primary",
  },
] as const;

export const criticalRisks = [
  {
    id: "BC-018",
    category: "BCMS",
    categoryColor: "warning",
    statement:
      "The organisation may experience prolonged core banking downtime during batch processing windows.",
    owner: "Kemi Okonkwo",
    classification: "Critical",
  },
  {
    id: "IS-052",
    category: "InfoSec",
    categoryColor: "info",
    statement:
      "The organisation may experience credential compromise through phishing attacks targeting staff email accounts.",
    owner: "Femi Adeyemi",
    classification: "Critical",
  },
];

export const registerOverview = [
  { label: "InfoSec", count: 2, color: "bg-blue-500", width: "70%" },
  { label: "BCMS", count: 2, color: "bg-amber-400", width: "68%" },
  { label: "Privacy", count: 1, color: "bg-emerald-400", width: "38%" },
  { label: "Operational", count: 1, color: "bg-violet-500", width: "40%" },
  { label: "Regulatory", count: 1, color: "bg-red-500", width: "35%" },
  { label: "Financial", count: 1, color: "bg-yellow-500", width: "33%" },
];

export const recentActivity = [
  {
    time: "Today, 09:14",
    title: "Assessment results processed",
    description:
      "AI clustered 47 responses into 8 unique risks. Register updated.",
    color: "bg-emerald-400",
  },
  {
    time: "Yesterday, 16:32",
    title: "Critical risk BC-018 assigned to Kemi Okonkwo",
    description:
      "Treatment deadline set: 1 April 2026. Owner notified via email.",
    color: "bg-red-400",
  },
  {
    time: "3 days ago",
    title: "Score override on FD-004",
    description:
      "Likelihood reduced from 3 to 2. Reason: dual approval controls already in place.",
    color: "bg-amber-400",
  },
  {
    time: "5 days ago",
    title: "Evidence uploaded for IS-041",
    description: "Access_Policy_v2.pdf uploaded by Femi Adeyemi.",
    color: "bg-emerald-400",
  },
];