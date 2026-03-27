"use client";

import { Input } from "@heroui/react";

type LoginFormProps = {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}: LoginFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-xs tracking-[0.18em] text-[var(--muted)]">
          Email address
        </label>
        <Input
          type="email"
          value={email}
          onValueChange={onEmailChange}
          placeholder="admin@initials.ng"
          radius="md"
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-12 border-white/8 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.04)]",
            input: "text-sm text-white placeholder:text-[var(--muted)]",
          }}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs tracking-[0.18em] text-[var(--muted)]">
          Password
        </label>
        <Input
          type="password"
          value={password}
          onValueChange={onPasswordChange}
          placeholder="••••••••"
          radius="md"
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-12 border-white/8 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.04)]",
            input: "text-sm text-white placeholder:text-[var(--muted)]",
          }}
        />
      </div>
    </div>
  );
}