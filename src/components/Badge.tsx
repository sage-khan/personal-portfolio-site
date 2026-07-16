export default function Badge({
  children,
  tone = "mint",
}: {
  children: React.ReactNode;
  tone?: "mint" | "signal" | "outline";
}) {
  const toneClasses = {
    mint: "bg-mint text-ink dark:bg-pine-2 dark:text-mint-2",
    signal: "bg-signal text-white",
    outline: "border border-panel-border text-muted",
  }[tone];

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${toneClasses}`}>
      {children}
    </span>
  );
}
