"use client";

import { Button } from "@heroui/react";
import AssessmentEvidenceTimeline from "@/components/audit/assessment-evidence-timeline";
import AuditStatusTable from "@/components/audit/audit-status-table";
import { assessmentEvidence, auditStatusRows } from "@/data/audit-trail";

export default function AuditTrailPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white">Audit Trail</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            Complete evidence chain for ISO 27001, ISO 22301 and NDPR certification audit.
          </p>
        </div>

        <Button
          variant="bordered"
          className="h-11 self-start rounded-xl border-white/10 bg-transparent px-4 text-white"
        >
          Export all →
        </Button>
      </div>

      <AssessmentEvidenceTimeline
        title={assessmentEvidence.title}
        steps={assessmentEvidence.steps}
      />

      <AuditStatusTable rows={auditStatusRows} />
    </section>
  );
}