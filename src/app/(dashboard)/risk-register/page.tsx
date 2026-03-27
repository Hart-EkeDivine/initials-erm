"use client";

import { useMemo, useState } from "react";
import { Button } from "@heroui/react";
import RiskFilterTabs from "@/components/risk-register/risk-filter-tabs";
import RiskRegisterTable from "@/components/risk-register/risk-register-table";
import { riskFilters, riskRegisterRows } from "@/data/risk-register";
import { useErmStore } from "@/store/erm-store";

export default function RiskRegisterPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const generatedRisks = useErmStore((state) => state.generatedRisks);

  const allRows = useMemo(() => {
    return [...generatedRisks, ...riskRegisterRows];
  }, [generatedRisks]);

  const filteredRows = useMemo(() => {
    if (activeFilter === "All") return allRows;

    return allRows.filter((row) => {
      return (
        row.classification === activeFilter || row.category === activeFilter
      );
    });
  }, [activeFilter, allRows]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white">Risk Register</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {allRows.length} risks across all categories · Updated continuously
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="bordered"
            className="h-11 rounded-xl border-white/10 bg-transparent px-4 text-white"
          >
            + Add manually
          </Button>

          <Button
            variant="bordered"
            className="h-11 rounded-xl border-white/10 bg-transparent px-4 text-white"
          >
            Export CSV
          </Button>
        </div>
      </div>

      <RiskFilterTabs
        filters={riskFilters}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />

      <RiskRegisterTable rows={filteredRows} />
    </section>
  );
}