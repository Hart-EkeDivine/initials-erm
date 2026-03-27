type ActivityItem = {
  time: string;
  title: string;
  description: string;
  color: string;
};

type ActivityTimelineProps = {
  items: ActivityItem[];
};

export default function ActivityTimeline({ items }: ActivityTimelineProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[var(--bg-card)] p-5">
      <h2 className="text-xl font-semibold text-white">Recent activity</h2>

      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={`${item.time}-${item.title}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className={`mt-1 h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span className="mt-1 h-full w-px bg-white/8" />
            </div>

            <div className="pb-1">
              <p className="text-xs text-[var(--muted)]">{item.time}</p>
              <h3 className="mt-1 text-[17px] font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}