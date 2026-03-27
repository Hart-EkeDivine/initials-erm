"use client";

import { Button } from "@heroui/react";
import ActivityTimeline from "@/components/dashboard/activity-timeline";
import CriticalRiskList from "@/components/dashboard/critical-risk-list";
import MetricCard from "@/components/dashboard/metric-card";
import RiskOverviewBars from "@/components/dashboard/risk-overview-bars";
import {
  criticalRisks,
  dashboardStats,
  recentActivity,
  registerOverview,
} from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white">Risk Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Adesanya Microfinance Bank · ISO 27001 · ISO 22301 · NDPR · As of 23 March 2026
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="bordered"
            className="h-12 rounded-xl border-white/10 bg-transparent px-5 text-white"
          >
            + New Assessment
          </Button>

          <Button className="h-12 rounded-xl bg-[var(--primary)] px-5 font-medium text-[#07231d]">
            View All Risks
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <MetricCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            accent={stat.accent}
          />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <CriticalRiskList items={criticalRisks} />
        <RiskOverviewBars items={registerOverview} />
      </div>

      <ActivityTimeline items={recentActivity} />
    </section>
  );
}