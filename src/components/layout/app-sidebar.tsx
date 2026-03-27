"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarGroups } from "@/config/nav";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[220px] shrink-0 border-r border-white/5 bg-[var(--bg-sidebar)] lg:block">
      <div className="border-b border-white/5 px-4 py-5">
        <h1 className="text-sm tracking-[0.25em] text-[var(--primary)]">
          INITIALS ERM
        </h1>
      </div>

      <div className="space-y-8 px-3 py-6">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-2 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-[rgba(20,216,180,0.12)] text-[var(--primary)]"
                        : "text-[var(--muted)] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.status === "success" && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-[10px] text-emerald-400">
                          ✓
                        </span>
                      )}

                      {item.badge && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 px-1 text-[10px] text-red-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}