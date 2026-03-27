export const treatmentQueueItems = [
  {
    id: "BC-018",
    classification: "Critical",
    treatment: "Treat",
    owner: "Kemi Okonkwo",
    statement:
      "The organisation may experience prolonged core banking system unavailability during batch processing windows, resulting in major disruption to customer transactions and service delivery.",
    score: 20,
    controls: 2,
    evidence: "0 files",
    deadline: "01 Apr 2026",
    category: "BCMS",
    likelihood: 4,
    impact: 5,
    explanation:
      "This risk relates to business continuity and service resilience. A prolonged outage during batch processing can interrupt transaction completion, delay reconciliations, and damage customer trust.",
    treatmentPlan:
      "Implement redundancy for batch processing infrastructure, document fallback procedures, assign system recovery ownership, and conduct simulation tests before the next quarter.",
    businessImpact:
      "High. This can affect transaction availability, customer confidence, and regulatory service obligations.",
  },
  {
    id: "IS-052",
    classification: "Critical",
    treatment: "Treat",
    owner: "Femi Adeyemi",
    statement:
      "The organisation may experience credential compromise through phishing attacks targeting staff email accounts, enabling unauthorised access to sensitive systems and information.",
    score: 16,
    controls: 2,
    evidence: "2 files",
    deadline: "10 Apr 2026",
    category: "InfoSec",
    likelihood: 4,
    impact: 4,
    explanation:
      "This is an information security risk involving phishing and account compromise. If user credentials are captured, attackers may gain access to internal systems, regulated information, or privileged workflows.",
    treatmentPlan:
      "Roll out phishing awareness training, enforce MFA across all staff accounts, review mailbox security controls, and monitor suspicious login attempts through centralized alerts.",
    businessImpact:
      "High. This can cause data exposure, operational disruption, and compliance issues under NDPR and internal security policies.",
  },
];