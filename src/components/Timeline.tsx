export type TimelineItem = {
  id: string;
  title: string;
  org: string;
  meta?: string;
  date: string;
  current?: boolean;
  bullets?: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-panel-border pl-6 sm:pl-8">
      {items.map((item) => (
        <li key={item.id} className="mb-10 last:mb-0">
          <span
            className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-background ${
              item.current ? "bg-signal" : "bg-muted"
            }`}
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <span className="font-mono text-xs uppercase tracking-wide text-signal">
              {item.date}
              {item.current && (
                <span className="ml-2 inline-flex items-center gap-1 text-tide">
                  <span className="h-1.5 w-1.5 rounded-full bg-tide animate-pulse" /> present
                </span>
              )}
            </span>
          </div>
          <p className="text-sm text-muted">
            {item.org}
            {item.meta ? ` · ${item.meta}` : ""}
          </p>
          {item.bullets && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
