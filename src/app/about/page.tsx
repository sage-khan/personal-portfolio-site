import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { LanguageTable, SkillsTable } from "@/components/tables/AboutTables";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "About — Dan Sage Khan" };

const langRows = profile.languages.map((l, i) => ({ id: String(i), ...l }));
const skillRows = skillGroups.map((g, i) => ({ id: String(i), category: g.category, items: g.items.join(", ") }));

export default function AboutPage() {
  return (
    <>
      <Section entry="01" kicker="Ship's Log — Personal" title="About Dan Sage Khan" description={profile.heroTagline}>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <div className="mx-auto lg:mx-0">
            <Image src={profile.photo} alt={profile.shortName} width={220} height={220} className="w-[200px] drop-shadow-lg" />
          </div>
          <div>
            <p className="text-base leading-relaxed">{profile.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.titles.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section entry="02" kicker="Base of Operations" title={`${profile.location}`}>
        <Card>
          <p className="text-sm">
            Based in Granada, Spain as a Marie Skłodowska-Curie PhD Scholar, having relocated from Karachi,
            Pakistan after 13 years in the Pakistan Navy. Fluent across a working set of seven languages —
            the product of a Navy career, a research life across Europe, and a genuine polyglot streak.
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-wide text-signal">
            {profile.ielts.title} — {profile.ielts.breakdown}
          </p>
        </Card>
      </Section>

      <Section entry="03" kicker="Linguistic Manifest" title="Languages">
        <LanguageTable rows={langRows} />
      </Section>

      <Section entry="04" kicker="Full Capability Set" title="Skills & Tooling" description="A cross-domain stack spanning AI/ML, cybersecurity, DevOps, data, and audio engineering.">
        <SkillsTable rows={skillRows} />
      </Section>

      <Section entry="05" kicker="Off Duty" title="Hobbies & Interests">
        <div className="flex flex-wrap gap-2">
          {profile.hobbies.map((h) => (
            <Badge key={h} tone="mint">
              {h}
            </Badge>
          ))}
        </div>
      </Section>

      <Section entry="06" kicker="The Movement" title={profile.sageForce.name} description={profile.sageForce.strapline}>
        <Card className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Image src="/images/logo.png" alt="Sage Force emblem" width={120} height={120} className="shrink-0 rounded-full" />
          <p className="text-sm leading-relaxed">{profile.sageForce.description}</p>
        </Card>
      </Section>
    </>
  );
}
