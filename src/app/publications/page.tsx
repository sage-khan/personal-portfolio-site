import type { Metadata } from "next";
import Section from "@/components/Section";
import { PublicationsTable, MediaTable } from "@/components/tables/PublicationsMediaTables";
import { publications } from "@/data/publications";
import { mediaAppearances, leadership } from "@/data/media";

export const metadata: Metadata = { title: "Publications & Media — Dan Sage Khan" };

const pubRows = publications.map((p) => ({ ...p, id: p.id }));
const mediaRows = mediaAppearances.map((m) => ({ ...m, id: m.id }));

export default function PublicationsPage() {
  return (
    <>
      <Section
        entry="06"
        kicker="Ship's Log — Record & Reach"
        title="Publications & Media"
        description="Peer-reviewed research, a Master's thesis, and public appearances across national TV and industry podcasts."
      >
        <PublicationsTable rows={pubRows} />
      </Section>

      <Section entry="06.1" kicker="On Air" title="Media Appearances">
        <MediaTable rows={mediaRows} />
      </Section>

      <Section entry="06.2" kicker="Beyond the Bridge" title="Leadership & Community">
        <div className="grid gap-4 sm:grid-cols-3">
          {leadership.map((l) => (
            <div key={l.id} className="rounded-lg border border-panel-border bg-panel p-5">
              <p className="font-mono text-xs text-signal">{l.date}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{l.role}</h3>
              {l.orgUrl ? (
                <a href={l.orgUrl} target="_blank" rel="noreferrer" className="text-xs text-signal hover:text-tide hover:underline">
                  {l.org}
                </a>
              ) : (
                <p className="text-xs text-muted">{l.org}</p>
              )}
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs leading-relaxed">
                {l.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
