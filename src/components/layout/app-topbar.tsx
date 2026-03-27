"use client";

import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/configuration": "Configuration Engine",
  "/assessments": "Assessments",
  "/risk-register": "Risk Register",
  "/treatment-queue": "Treatment Queue",
  "/audit-trail": "Audit Trail",
  "/change-log": "Change Log",
};

export default function AppTopbar() {
  const pathname = usePathname();
  const title = titles[pathname] || "INITIALS ERM";

  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-white/5 bg-[var(--bg-topbar)] px-6 lg:px-8">
      <div className="text-sm text-[var(--muted)]">{title}</div>

      <div className="flex items-center gap-3">
        <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300">
          Compliance Manager
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-xs font-semibold text-cyan-300">
          AO
        </div>
      </div>
    </header>
  );
}