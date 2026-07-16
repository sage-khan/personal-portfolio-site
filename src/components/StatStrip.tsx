export type Stat = { label: string; value: string };

export default function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="border-y border-panel-border bg-pine text-mint-2">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-tide-2/20 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-6 text-center">
            <p className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-tide-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
