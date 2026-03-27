type Step = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  steps: Step[];
};

export default function AssessmentEvidenceTimeline({ title, steps }: Props) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-6">
      <h2 className="text-lg font-semibold text-white">Assessment evidence</h2>
      <p className="mt-4 text-white">{title}</p>

      <div className="mt-6 space-y-5">
        {steps.map((step, index) => (
          <div key={`${step.title}-${index}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/20" />
              {index !== steps.length - 1 && (
                <span className="mt-1 h-full w-px bg-white/8" />
              )}
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}