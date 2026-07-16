import type { Metadata } from "next";
import { ExternalLink, Lock } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects — Dan Sage Khan" };

const flagship = projects.filter((p) => p.category === "Flagship Research");
const independent = projects.filter((p) => p.category === "Independent Project");

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const primaryLink = p.links?.length === 1 ? p.links[0] : undefined;

  const body = (
    <Card className="flex h-full flex-col transition-transform group-hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold">{p.name}</h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {p.featured && <Badge tone="signal">Featured</Badge>}
          {primaryLink && <ExternalLink size={15} className="mt-1 text-signal" />}
        </div>
      </div>
      <p className="mt-1 text-sm font-medium text-signal">{p.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <Badge key={t} tone="mint">
            {t}
          </Badge>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{p.status}</p>
        {!p.links && (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-muted">
            <Lock size={11} /> Repo private / unreleased
          </span>
        )}
      </div>
      {p.links && p.links.length > 1 && (
        <div className="mt-2 flex gap-3">
          {p.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="font-mono text-xs text-signal hover:text-tide underline">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </Card>
  );

  if (primaryLink) {
    return (
      <a href={primaryLink.url} target="_blank" rel="noreferrer" className="group block h-full">
        {body}
      </a>
    );
  }
  return body;
}

export default function ProjectsPage() {
  return (
    <>
      <Section
        entry="03"
        kicker="Ship's Log — Engineering"
        title="Projects"
        description="Research systems and open-source tools — spanning agentic databases, cybersecurity, cryptography, and industrial AI. Cards link out to the live repo, package, or deployment where one is public."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {flagship.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <Section entry="03.1" kicker="Research & Development" title="Independent Projects">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {independent.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
