"use client";

import { ExternalLink } from "lucide-react";
import ManifestTable, { Column } from "@/components/ManifestTable";
import Badge from "@/components/Badge";
import { Experience, FreelanceEngagement, TeachingRole } from "@/data/experience";
import { Education } from "@/data/education";
import { Certification } from "@/data/certifications";
import { Award } from "@/data/awards";

function OrgLabel({ org, orgUrl }: { org: string; orgUrl?: string }) {
  if (!orgUrl) return <p className="text-xs text-muted">{org}</p>;
  return (
    <a
      href={orgUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs text-signal hover:text-tide hover:underline"
    >
      {org} <ExternalLink size={10} />
    </a>
  );
}

function LinksRow({ links }: { links?: { label: string; url: string }[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] text-signal hover:text-tide hover:underline"
        >
          {l.label} <ExternalLink size={10} />
        </a>
      ))}
    </div>
  );
}

const bulletsCol = <T extends { bullets: string[]; links?: { label: string; url: string }[] }>(): Column<T> => ({
  key: "bullets",
  label: "Highlights",
  className: "min-w-[260px]",
  render: (r) => (
    <>
      <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed">
        {r.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <LinksRow links={r.links} />
    </>
  ),
});

export function EmploymentTable({ rows }: { rows: Experience[] }) {
  const columns: Column<Experience>[] = [
    {
      key: "role",
      label: "Role / Organization",
      render: (r) => (
        <div>
          <p className="font-semibold">{r.role}</p>
          <OrgLabel org={r.org} orgUrl={r.orgUrl} />
        </div>
      ),
    },
    { key: "location", label: "Location", hideBelow: "md" },
    {
      key: "dates",
      label: "Dates",
      mono: true,
      sortValue: (r) => r.start,
      render: (r) => <span>{r.start} – {r.current ? "Present" : r.end}</span>,
    },
    bulletsCol<Experience>(),
  ];
  return (
    <ManifestTable
      columns={columns}
      rows={rows}
      searchable={(r) => `${r.role} ${r.org} ${r.bullets.join(" ")}`}
      filters={[{ label: "Type", options: [...new Set(rows.map((e) => e.type))], test: (r, sel) => r.type === sel }]}
    />
  );
}

export function FreelanceTable({ rows }: { rows: FreelanceEngagement[] }) {
  const columns: Column<FreelanceEngagement>[] = [
    {
      key: "role",
      label: "Engagement / Client",
      render: (r) => (
        <div>
          <p className="font-semibold">{r.role}</p>
          <OrgLabel org={r.org} orgUrl={r.orgUrl} />
        </div>
      ),
    },
    { key: "dates", label: "Dates", mono: true, render: (r) => <span>{r.start} – {r.end}</span> },
    bulletsCol<FreelanceEngagement>(),
  ];
  return <ManifestTable columns={columns} rows={rows} searchable={(r) => `${r.role} ${r.org}`} />;
}

export function TeachingTable({ rows }: { rows: TeachingRole[] }) {
  const columns: Column<TeachingRole>[] = [
    {
      key: "role",
      label: "Role / Institution",
      render: (r) => (
        <div>
          <p className="font-semibold">{r.role}</p>
          <OrgLabel org={r.org} orgUrl={r.orgUrl} />
        </div>
      ),
    },
    { key: "location", label: "Location", hideBelow: "md" },
    { key: "dates", label: "Dates", mono: true, render: (r) => <span>{r.start} – {r.current ? "Present" : r.end}</span> },
    bulletsCol<TeachingRole>(),
  ];
  return <ManifestTable columns={columns} rows={rows} searchable={(r) => `${r.role} ${r.org}`} />;
}

export function EducationTable({ rows }: { rows: Education[] }) {
  const columns: Column<Education>[] = [
    {
      key: "degree",
      label: "Degree",
      render: (r) => (
        <div>
          <p className="font-semibold">{r.degree}</p>
          <p className="text-xs text-muted">{r.org}</p>
          {r.detail && <p className="mt-1 font-mono text-[11px] text-signal">{r.detail}</p>}
        </div>
      ),
    },
    { key: "location", label: "Location", hideBelow: "md" },
    { key: "dates", label: "Dates", mono: true, render: (r) => <span>{r.start} – {r.current ? "Present" : r.end}</span> },
    { key: "coursework", label: "Coursework", hideBelow: "lg", render: (r) => <span className="text-xs">{r.coursework?.join(", ")}</span> },
  ];
  return <ManifestTable columns={columns} rows={rows} searchable={(r) => `${r.degree} ${r.org} ${(r.coursework ?? []).join(" ")}`} />;
}

export function CertificationsTable({ rows }: { rows: Certification[] }) {
  const columns: Column<Certification>[] = [
    {
      key: "name",
      label: "Certification / Course",
      render: (r) =>
        r.url ? (
          <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-signal hover:text-tide hover:underline">
            {r.name} <ExternalLink size={11} />
          </a>
        ) : (
          <span className="font-semibold">{r.name}</span>
        ),
    },
    { key: "issuer", label: "Issuer", hideBelow: "sm" },
    { key: "date", label: "Date", mono: true },
    { key: "category", label: "Category", render: (r) => <Badge tone="outline">{r.category}</Badge> },
  ];
  return (
    <ManifestTable
      columns={columns}
      rows={rows}
      searchable={(r) => `${r.name} ${r.issuer} ${r.category}`}
      filters={[{ label: "Category", options: [...new Set(rows.map((c) => c.category))], test: (r, sel) => r.category === sel }]}
    />
  );
}

export function AwardsTable({ rows }: { rows: Award[] }) {
  const columns: Column<Award>[] = [
    {
      key: "name",
      label: "Award",
      render: (r) =>
        r.url ? (
          <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-signal hover:text-tide hover:underline">
            {r.name} <ExternalLink size={11} />
          </a>
        ) : (
          <span className="font-semibold">{r.name}</span>
        ),
    },
    { key: "issuer", label: "Issuer", hideBelow: "sm" },
    { key: "date", label: "Date", mono: true },
    { key: "detail", label: "Citation", className: "min-w-[260px] text-xs" },
  ];
  return <ManifestTable columns={columns} rows={rows} searchable={(r) => `${r.name} ${r.detail}`} />;
}
