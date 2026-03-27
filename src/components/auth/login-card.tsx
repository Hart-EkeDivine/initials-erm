"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginForm from "./login-form";
import RoleSelector from "./role-selector";

type Role = "compliance" | "risk-owner" | "staff";

export default function LoginCard() {
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState<Role>("compliance");
  const [email, setEmail] = useState("admin@initials.ng");
  const [password, setPassword] = useState("password");

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-[430px] rounded-3xl border border-white/8 bg-[rgba(20,27,40,0.88)] px-7 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <p className="text-xs tracking-[0.28em] text-[var(--primary)]">
        INITIALS ERM
      </p>

      <h1 className="mt-3 text-[2rem] font-semibold leading-tight text-white">
        Enterprise Risk Management
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
        ISO 27001 · ISO 22301 · NDPR · Financial Services Platform
      </p>

      <div className="mt-7">
        <p className="mb-3 text-[10px] uppercase tracking-[0.26em] text-[var(--muted)]">
          Sign in as
        </p>
        <RoleSelector
          selectedRole={selectedRole}
          onSelect={setSelectedRole}
        />
      </div>

      <div className="mt-6">
        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
        />
      </div>

      <Button
        onPress={handleLogin}
        className="mt-6 h-12 w-full rounded-xl bg-[var(--primary)] text-sm font-semibold text-[#06231d] hover:opacity-95"
      >
        Sign in to platform →
      </Button>

      <p className="mt-4 text-center text-xs text-[var(--muted)]">
        Demo: Select a role above, then click Sign in
      </p>
    </div>
  );
}