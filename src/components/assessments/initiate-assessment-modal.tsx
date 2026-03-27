"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    title: string;
    scope: string;
    respondents: number;
    deadline: string;
  }) => void;
};

export default function InitiateAssessmentModal({
  isOpen,
  onClose,
  onCreate,
}: Props) {
  const [title, setTitle] = useState("");
  const [scope, setScope] = useState("");
  const [respondents, setRespondents] = useState(50);
  const [deadline, setDeadline] = useState("");

  if (!isOpen) return null;

  function handleSubmit() {
    if (!title || !scope || !deadline) return;

    onCreate({
      title,
      scope,
      respondents,
      deadline,
    });

    setTitle("");
    setScope("");
    setRespondents(50);
    setDeadline("");

    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#121c2d] p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Initiate Assessment</h2>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Assessment title"
            className="w-full rounded-lg bg-white/5 p-3 text-sm outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Scope"
            className="w-full rounded-lg bg-white/5 p-3 text-sm outline-none"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
          />

          <input
            type="number"
            className="w-full rounded-lg bg-white/5 p-3 text-sm outline-none"
            value={respondents}
            onChange={(e) => setRespondents(Number(e.target.value))}
          />

          <input
            type="date"
            className="w-full rounded-lg bg-white/5 p-3 text-sm outline-none"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm text-[#06231d]"
          >
            Create Assessment
          </button>
        </div>
      </div>
    </div>
  );
}