import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services — Dan Sage Khan" };

export default function ServicesPage() {
  return (
    <>
      <Section
        entry="07"
        kicker="Ship's Log — Engagement Terms"
        title="Services"
        description="Cross-domain consulting, engineering, training, and creative work — engaged as a contractor, advisor, or embedded team member."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.id} className="flex h-full flex-col">
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.summary}</p>
              <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-4 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <Badge key={t} tone="mint">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section entry="END" kicker="Next Step" title="Commission Work" className="text-center">
        <div className="mx-auto max-w-xl">
          <p className="text-muted">
            Available for consulting engagements, contract roles, and advisory work — remote-first, with a
            preference for high-trust, high-autonomy teams.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded bg-signal px-5 py-3 font-mono text-sm uppercase tracking-wide text-white hover:bg-tide"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
