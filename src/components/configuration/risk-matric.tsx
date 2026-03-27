type RiskMatrixProps = {
  values: number[][];
};

function getCellStyle(value: number) {
  if (value <= 7) {
    return "bg-[#163b3a] text-emerald-300";
  }
  if (value <= 15) {
    return "bg-[#4d4224] text-amber-300";
  }
  return "bg-[#5a2632] text-red-300";
}

export default function RiskMatrix({ values }: RiskMatrixProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">Risk matrix — 5×5</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        Composite = Likelihood × Impact. Higher score = higher risk.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/8">
        <div className="grid grid-cols-5">
          {values.flat().map((value, index) => (
            <div
              key={`${value}-${index}`}
              className={`flex aspect-square items-center justify-center border border-white/6 text-sm font-medium ${getCellStyle(
                value
              )}`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}