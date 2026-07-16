"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";

export type Column<T> = {
  key: string;
  label: string;
  mono?: boolean;
  align?: "left" | "right" | "center";
  className?: string;
  render?: (row: T) => React.ReactNode;
  sortValue?: (row: T) => string | number;
  hideBelow?: "sm" | "md" | "lg";
};

export type Filter<T> = {
  label: string;
  options: string[];
  test: (row: T, selected: string) => boolean;
};

function getCellValue<T>(row: T, key: string): string | number {
  const value = (row as unknown as Record<string, unknown>)[key];
  return value as string | number;
}

export default function ManifestTable<T extends { id: string }>({
  columns,
  rows,
  searchable,
  filters = [],
  emptyMessage = "No entries match the current filter.",
  caption,
}: {
  columns: Column<T>[];
  rows: T[];
  searchable?: (row: T) => string;
  filters?: Filter<T>[];
  emptyMessage?: string;
  caption?: string;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 } | null>(null);

  const filtered = useMemo(() => {
    let result = rows;
    if (query.trim() && searchable) {
      const q = query.trim().toLowerCase();
      result = result.filter((r) => searchable(r).toLowerCase().includes(q));
    }
    for (const f of filters) {
      const sel = active[f.label];
      if (sel && sel !== "All") {
        result = result.filter((r) => f.test(r, sel));
      }
    }
    if (sort) {
      const col = columns.find((c) => c.key === sort.key);
      if (col) {
        result = [...result].sort((a, b) => {
          const av = col.sortValue ? col.sortValue(a) : getCellValue(a, col.key);
          const bv = col.sortValue ? col.sortValue(b) : getCellValue(b, col.key);
          if (av === bv) return 0;
          return av > bv ? sort.dir : -sort.dir;
        });
      }
    }
    return result;
  }, [rows, query, active, sort, filters, columns, searchable]);

  function toggleSort(key: string) {
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, dir: 1 };
      if (prev.dir === 1) return { key, dir: -1 };
      return null;
    });
  }

  return (
    <div>
      {(searchable || filters.length > 0) && (
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {searchable && (
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search manifest…"
                className="rounded border border-panel-border bg-panel py-2 pl-8 pr-3 text-sm font-mono w-56 focus:outline-none focus:ring-2 focus:ring-signal"
              />
            </div>
          )}
          {filters.map((f) => (
            <select
              key={f.label}
              value={active[f.label] ?? "All"}
              onChange={(e) => setActive((a) => ({ ...a, [f.label]: e.target.value }))}
              className="rounded border border-panel-border bg-panel py-2 px-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-signal"
            >
              <option value="All">{f.label}: All</option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ))}
          <span className="ml-auto font-mono text-xs text-muted">
            {filtered.length} / {rows.length} entries
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-panel-border bg-panel shadow-sm">
        <table className="w-full text-sm">
          <caption className="sr-only">{caption ?? "Data manifest"}</caption>
          <thead>
            <tr className="bg-pine text-mint-2">
              <th className="px-3 py-3 text-left font-mono text-[11px] uppercase tracking-widest w-14">№</th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-3 py-3 font-mono text-[11px] uppercase tracking-widest ${
                    col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                  } ${col.hideBelow === "sm" ? "hidden sm:table-cell" : ""} ${col.hideBelow === "md" ? "hidden md:table-cell" : ""} ${col.hideBelow === "lg" ? "hidden lg:table-cell" : ""}`}
                >
                  <button
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 hover:text-tide-2"
                  >
                    {col.label}
                    <ArrowUpDown size={11} className="opacity-60" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={row.id}
                className="manifest-row border-t border-panel-border even:bg-mint/30 dark:even:bg-pine-2/30 hover:bg-mint hover:dark:bg-pine-2"
              >
                <td className="px-3 py-3 font-mono text-xs text-muted">{String(i + 1).padStart(3, "0")}</td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-3 py-3 align-top ${col.mono ? "font-mono text-xs" : ""} ${
                      col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                    } ${col.className ?? ""} ${col.hideBelow === "sm" ? "hidden sm:table-cell" : ""} ${col.hideBelow === "md" ? "hidden md:table-cell" : ""} ${col.hideBelow === "lg" ? "hidden lg:table-cell" : ""}`}
                  >
                    {col.render ? col.render(row) : (getCellValue(row, col.key) as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-3 py-8 text-center text-muted font-mono text-sm">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
