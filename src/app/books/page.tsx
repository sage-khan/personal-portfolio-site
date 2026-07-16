import type { Metadata } from "next";
import { ExternalLink, Lock } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { books } from "@/data/books";

export const metadata: Metadata = { title: "Books — Dan Sage Khan" };

const published = books.filter((b) => b.status === "Published");
const upcoming = books.filter((b) => b.status !== "Published");

const statusTone: Record<string, "signal" | "mint" | "outline"> = {
  Published: "signal",
  "Complete Draft": "mint",
  "In Production": "outline",
};

function BookCard({ b }: { b: (typeof books)[number] }) {
  return (
    <Card className="flex h-full flex-col transition-transform group-hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <Badge tone={statusTone[b.status]}>{b.status}</Badge>
        <div className="flex items-center gap-2">
          {b.date && <span className="font-mono text-xs text-muted">{b.date}</span>}
          {b.url && <ExternalLink size={15} className="text-signal" />}
        </div>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">{b.title}</h3>
      {b.subtitle && <p className="mt-1 text-sm italic text-muted">{b.subtitle}</p>}
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-signal">{b.genre}</p>
      {b.publisher && <p className="mt-1 text-xs text-muted">{b.publisher}</p>}
      {b.coAuthors && (
        <p className="mt-1 text-xs text-muted">With {b.coAuthors.join(" & ")}</p>
      )}
      <p className="mt-4 flex-1 text-sm leading-relaxed">{b.description}</p>
      {b.identifier && <p className="mt-3 font-mono text-[11px] text-muted">{b.identifier}</p>}
      {b.comps && (
        <p className="mt-3 text-xs text-muted">
          <span className="font-semibold">{b.status === "Published" ? "In the tradition of:" : "Comps:"}</span> {b.comps.join(" · ")}
        </p>
      )}
      {!b.url && (
        <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-muted">
          <Lock size={11} /> {b.status === "Complete Draft" ? "In query with literary agents" : "Not yet publicly listed"}
        </span>
      )}
    </Card>
  );
}

export default function BooksPage() {
  return (
    <>
      <Section
        entry="04"
        kicker="Ship's Log — Authorship"
        title="Books"
        description="Fiction and nonfiction — a published Stoic sports epic, a Taylor & Francis technology book, a completed sci-fi manuscript in query, and titles in production. Cards link out to the listing where one is public."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {published.map((b) =>
            b.url ? (
              <a key={b.id} href={b.url} target="_blank" rel="noreferrer" className="group block h-full">
                <BookCard b={b} />
              </a>
            ) : (
              <BookCard key={b.id} b={b} />
            )
          )}
        </div>
      </Section>

      <Section entry="04.1" kicker="On the Slate" title="In Progress & Forthcoming">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((b) => (
            <BookCard key={b.id} b={b} />
          ))}
        </div>
      </Section>
    </>
  );
}
