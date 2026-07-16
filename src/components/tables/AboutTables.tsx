"use client";

import ManifestTable, { Column } from "@/components/ManifestTable";

type LangRow = { id: string; name: string; level: string };
type SkillRow = { id: string; category: string; items: string };

const langCols: Column<LangRow>[] = [
  { key: "name", label: "Language" },
  { key: "level", label: "Proficiency", mono: true },
];

const skillCols: Column<SkillRow>[] = [
  { key: "category", label: "Category" },
  { key: "items", label: "Skills / Tools" },
];

export function LanguageTable({ rows }: { rows: LangRow[] }) {
  return <ManifestTable columns={langCols} rows={rows} />;
}

export function SkillsTable({ rows }: { rows: SkillRow[] }) {
  return <ManifestTable columns={skillCols} rows={rows} searchable={(r) => `${r.category} ${r.items}`} />;
}
