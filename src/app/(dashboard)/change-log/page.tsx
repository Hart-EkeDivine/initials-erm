import ChangeLogTable from "@/components/changelog/change-log-table";
import { changeLogRows } from "@/data/change-log";

export default function ChangeLogPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold text-white">Change Log</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          Immutable record of all changes across the risk register.
        </p>
      </div>

      <ChangeLogTable rows={changeLogRows} />
    </section>
  );
}