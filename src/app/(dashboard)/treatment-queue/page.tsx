import TreatmentCard from "@/components/treatment/treatment-card";
import { treatmentQueueItems } from "@/data/treatment-queue";

export default function TreatmentQueuePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold text-white">Treatment Queue</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          2 risks requiring active treatment · Sorted by composite score
        </p>
      </div>

      <div className="space-y-5">
        {treatmentQueueItems.map((item) => (
          <TreatmentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}