"use client";

import { ExternalLink } from "lucide-react";
import ManifestTable, { Column } from "@/components/ManifestTable";
import { Blog } from "@/data/blogs";

type Row = Blog & { id: string };

export default function BlogTable({ rows }: { rows: Row[] }) {
  const allTags = [...new Set(rows.flatMap((r) => r.tags))].sort();

  const columns: Column<Row>[] = [
    {
      key: "title",
      label: "Title",
      className: "min-w-[240px]",
      render: (r) => (
        <div>
          <p className="font-semibold leading-snug">{r.title}</p>
          <p className="mt-1 text-xs text-muted">{r.summary}</p>
        </div>
      ),
    },
    {
      key: "tags",
      label: "Tags",
      hideBelow: "md",
      render: (r) => (
        <div className="flex flex-wrap gap-1">
          {r.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-mint px-2 py-0.5 font-mono text-[10px] uppercase text-ink dark:bg-pine-2 dark:text-mint-2">
              {t}
            </span>
          ))}
        </div>
      ),
    },
    { key: "date", label: "Date", mono: true, hideBelow: "sm", sortValue: (r) => r.date ?? "0000-00-00", render: (r) => r.date ?? "—" },
    {
      key: "url",
      label: "Read",
      align: "center",
      render: (r) =>
        r.url ? (
          <a href={r.url} target="_blank" rel="noreferrer" aria-label={`Read ${r.title}`} className="inline-flex text-signal hover:text-tide">
            <ExternalLink size={16} />
          </a>
        ) : (
          <span className="text-xs text-muted">draft</span>
        ),
    },
  ];

  return (
    <ManifestTable
      columns={columns}
      rows={rows}
      searchable={(r) => `${r.title} ${r.summary} ${r.tags.join(" ")}`}
      filters={[{ label: "Tag", options: allTags, test: (r, sel) => r.tags.includes(sel) }]}
      caption="Blog post manifest"
    />
  );
}
