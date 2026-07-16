"use client";

import { ExternalLink } from "lucide-react";
import ManifestTable, { Column } from "@/components/ManifestTable";
import Badge from "@/components/Badge";
import { Publication } from "@/data/publications";
import { MediaAppearance } from "@/data/media";

export function PublicationsTable({ rows }: { rows: (Publication & { id: string })[] }) {
  const columns: Column<(typeof rows)[number]>[] = [
    {
      key: "title",
      label: "Title",
      className: "min-w-[260px]",
      render: (r) => (
        <div>
          <p className="font-semibold leading-snug">{r.title}</p>
          <p className="mt-1 text-xs text-muted">{r.venue}</p>
          {r.links && (
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
              {r.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-[11px] text-signal hover:text-tide hover:underline">
                  {l.label} <ExternalLink size={10} />
                </a>
              ))}
            </div>
          )}
        </div>
      ),
    },
    { key: "type", label: "Type", render: (r) => <Badge tone="outline">{r.type}</Badge> },
    { key: "date", label: "Date", mono: true, hideBelow: "sm" },
    { key: "abstract", label: "Abstract", className: "min-w-[300px] text-xs", hideBelow: "lg" },
  ];
  return <ManifestTable columns={columns} rows={rows} searchable={(r) => `${r.title} ${r.abstract}`} caption="Publications manifest" />;
}

export function MediaTable({ rows }: { rows: (MediaAppearance & { id: string })[] }) {
  const columns: Column<(typeof rows)[number]>[] = [
    {
      key: "title",
      label: "Title",
      className: "min-w-[240px]",
      render: (r) => (
        <div>
          {r.url ? (
            <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold leading-snug text-signal hover:text-tide hover:underline">
              {r.title} <ExternalLink size={11} className="shrink-0" />
            </a>
          ) : (
            <p className="font-semibold leading-snug">{r.title}</p>
          )}
          {r.articleUrl && (
            <a href={r.articleUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-signal hover:text-tide hover:underline">
              Companion article <ExternalLink size={10} />
            </a>
          )}
        </div>
      ),
    },
    {
      key: "outlet",
      label: "Outlet",
      hideBelow: "sm",
      render: (r) =>
        r.outletUrl ? (
          <a href={r.outletUrl} target="_blank" rel="noreferrer" className="text-signal hover:text-tide hover:underline">
            {r.outlet}
          </a>
        ) : (
          r.outlet
        ),
    },
    { key: "type", label: "Type", render: (r) => <Badge tone="mint">{r.type}</Badge> },
    { key: "date", label: "Date", mono: true, hideBelow: "sm" },
    { key: "summary", label: "Summary", className: "min-w-[260px] text-xs", hideBelow: "lg" },
  ];
  return (
    <ManifestTable
      columns={columns}
      rows={rows}
      searchable={(r) => `${r.title} ${r.outlet} ${r.summary}`}
      filters={[{ label: "Type", options: [...new Set(rows.map((r) => r.type))], test: (r, sel) => r.type === sel }]}
      caption="Media appearance manifest"
    />
  );
}
