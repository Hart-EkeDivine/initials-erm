import {
  LayoutDashboard,
  Settings,
  ClipboardList,
  FileText,
  Wrench,
  ShieldCheck,
  History,
} from "lucide-react";

export const sidebarGroups = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "RISK PROCESS",
    items: [
      {
        label: "Configuration",
        href: "/configuration",
        icon: Settings,
        status: "success",
      },
      {
        label: "Assessments",
        href: "/assessments",
        icon: ClipboardList,
      },
      {
        label: "Risk Register",
        href: "/risk-register",
        icon: FileText,
        badge: 8,
      },
      {
        label: "Treatment Queue",
        href: "/treatment-queue",
        icon: Wrench,
        badge: 3,
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        label: "Audit Trail",
        href: "/audit-trail",
        icon: ShieldCheck,
      },
      {
        label: "Change Log",
        href: "/change-log",
        icon: History,
      },
    ],
  },
];