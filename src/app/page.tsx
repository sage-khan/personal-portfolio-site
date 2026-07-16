import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { books } from "@/data/books";
import { blogs } from "@/data/blogs";
import { experience } from "@/data/experience";

const dossier = [
  { href: "/about", entry: "01", title: "About", desc: "The full journey — Navy, PhD, and everything between." },
  { href: "/service-record", entry: "02", title: "Service Record", desc: "Employment, teaching, education, certifications & awards." },
  { href: "/projects", entry: "03", title: "Projects", desc: "Veritas AI DB, CogTwins, CodeGuardian, Ascon & more." },
  { href: "/books", entry: "04", title: "Books", desc: "Warrior | Philosopher, Open for Business, AEON & more." },
  { href: "/blog", entry: "05", title: "Blog", desc: "60+ articles on AI, cybersecurity, Pakistan & philosophy." },
  { href: "/publications", entry: "06", title: "Publications & Media", desc: "Research papers, TV, and podcast appearances." },
  { href: "/services", entry: "07", title: "Services", desc: "What you can hire Dan to do." },
  { href: "/contact", entry: "08", title: "Contact", desc: "Reach the bridge — sagekhanofficial@gmail.com." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip
        stats={[
          { label: "Years of Service", value: "13+" },
          { label: "Languages Spoken", value: "7" },
          { label: "Published Books", value: "2" },
          { label: "Articles Written", value: "60+" },
        ]}
      />

      <Section
        entry="LOG"
        kicker="Opening Entry"
        title="A dynamic, cross-domain systems thinker"
        description="Bridging mission-critical physical assets — autonomous wind farms, naval platforms — with advanced digital logic: agentic LLM frameworks and blockchain ontologies."
      >
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">{profile.summary}</p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-signal hover:text-tide">
          Read the full dossier <ArrowRight size={16} />
        </Link>
      </Section>

      <Section entry="NAV" kicker="Ship's Index" title="Explore the Dossier">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dossier.map((d) => (
            <Link key={d.href} href={d.href}>
              <Card className="h-full">
                <span className="font-mono text-xs text-signal">ENTRY {d.entry}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-muted">{d.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section entry="03" kicker="Currently Building" title="Flagship Project — Veritas AI DB">
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold">{projects[0].name}</h3>
              <p className="mt-1 text-muted">{projects[0].tagline}</p>
            </div>
            <Badge tone="signal">{projects[0].status}</Badge>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed">{projects[0].description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {projects[0].tech.slice(0, 6).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <Link href="/projects" className="mt-5 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-signal hover:text-tide">
            All Projects <ArrowRight size={16} />
          </Link>
        </Card>
      </Section>

      <Section entry="04" kicker="Latest Chapters" title="Published Works">
        <div className="grid gap-5 sm:grid-cols-2">
          {books.slice(0, 2).map((b) => (
            <Card key={b.id}>
              <Badge tone="signal">{b.status}</Badge>
              <h3 className="mt-3 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">{b.genre}</p>
              <p className="mt-3 text-sm leading-relaxed">{b.description.slice(0, 220)}…</p>
            </Card>
          ))}
        </div>
        <Link href="/books" className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-signal hover:text-tide">
          All Books <ArrowRight size={16} />
        </Link>
      </Section>

      <Section entry="05" kicker={`${blogs.length} Entries Logged`} title="From the Blog">
        <div className="grid gap-4 sm:grid-cols-3">
          {blogs.slice(0, 3).map((b) => (
            <Card key={b.slug}>
              <p className="font-mono text-xs text-muted">{b.date ?? "Undated"}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.summary}</p>
            </Card>
          ))}
        </div>
        <Link href="/blog" className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-signal hover:text-tide">
          Read All {blogs.length} Articles <ArrowRight size={16} />
        </Link>
      </Section>

      <Section entry="END" kicker={`${experience.length + 1} Postings on Record`} title="Ready to Work Together?" className="text-center">
        <div className="mx-auto max-w-xl">
          <p className="text-muted">
            From AI architecture to cybersecurity audits to technical writing — see what Dan can do for your
            organization, or reach out directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="rounded bg-signal px-5 py-3 font-mono text-sm uppercase tracking-wide text-white hover:bg-tide">
              View Services
            </Link>
            <Link href="/contact" className="rounded border border-panel-border px-5 py-3 font-mono text-sm uppercase tracking-wide hover:bg-mint dark:hover:bg-pine-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
