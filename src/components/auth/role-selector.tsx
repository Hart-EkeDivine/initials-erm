"use client";

type Role = "compliance" | "risk-owner" | "staff";

type RoleSelectorProps = {
  selectedRole: Role;
  onSelect: (role: Role) => void;
};

const roles = [
  {
    id: "compliance" as Role,
    icon: "🛡️",
    title: "Compliance\nManager",
    subtitle: "Full system\naccess",
  },
  {
    id: "risk-owner" as Role,
    icon: "👤",
    title: "Risk Owner",
    subtitle: "Treatment\nmodule",
  },
  {
    id: "staff" as Role,
    icon: "📋",
    title: "Staff\nRespondent",
    subtitle: "Questionnaire\nonly",
  },
];

export default function RoleSelector({
  selectedRole,
  onSelect,
}: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {roles.map((role) => {
        const isActive = selectedRole === role.id;

        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            className={`rounded-2xl border px-3 py-4 text-center transition ${
              isActive
                ? "border-[var(--primary)] bg-[rgba(20,216,180,0.08)] shadow-[0_0_0_1px_rgba(20,216,180,0.12)]"
                : "border-white/8 bg-transparent hover:border-white/15 hover:bg-white/5"
            }`}
          >
            <div className="mb-2 text-xl">{role.icon}</div>
            <p className="whitespace-pre-line text-sm font-medium text-white">
              {role.title}
            </p>
            <p className="mt-1 whitespace-pre-line text-[11px] leading-4 text-[var(--muted)]">
              {role.subtitle}
            </p>
          </button>
        );
      })}
    </div>
  );
}