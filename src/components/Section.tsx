import { ReactNode } from "react";

export default function Section({
  entry,
  title,
  kicker,
  description,
  children,
  className = "",
}: {
  entry?: string;
  title: string;
  kicker?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-14 ${className}`}>
      <div className="mb-8 flex items-start gap-4 border-b border-panel-border pb-5">
        {entry && (
          <span className="font-mono text-xs text-signal border border-signal/40 rounded px-2 py-1 mt-1 shrink-0">
            {entry}
          </span>
        )}
        <div>
          {kicker && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-1">{kicker}</p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
          {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
