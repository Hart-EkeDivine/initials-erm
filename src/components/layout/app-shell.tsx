"use client";

import { ReactNode } from "react";
import AppSidebar from "./app-sidebar";
import AppTopbar from "./app-topbar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <AppTopbar />
          <main className="flex-1 px-5 py-6 md:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}