"use client";

import CriteriaTable from "@/components/configuration/criteria-table";
import FrameworkList from "@/components/configuration/framework-list";
import MethodologyCard from "@/components/configuration/methodology-card";
import RiskMatrix from "@/components/configuration/risk-matric";
import {
  criteriaRows,
  frameworks,
  methodologyDocument,
  matrixValues,
} from "@/data/configuration";

export default function ConfigurationPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white">
            Risk Configuration Engine
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
            Foundation settings that power all analysis, evaluation and treatment outputs.
          </p>
        </div>

        <div className="self-start rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-300">
          • Configuration Complete ✓
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-400/15 bg-emerald-500/10 px-5 py-4 text-sm text-white">
        <span className="mr-2 text-emerald-300">✓</span>
        Configuration is complete. All modules are active. Last updated: 14 Feb 2026 by Ayomide Osuntoye.
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <FrameworkList items={frameworks} />
        <RiskMatrix values={matrixValues} />
      </div>

      <CriteriaTable rows={criteriaRows} />

      <MethodologyCard
        title={methodologyDocument.title}
        subtitle={methodologyDocument.subtitle}
      />
    </section>
  );
}