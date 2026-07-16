import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-panel-border">
      <div className="deck-texture absolute inset-0 opacity-40 dark:opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
              Personal Dossier // Sage Force
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {profile.shortName}
            </h1>
            <p className="mt-4 text-lg text-muted sm:text-xl">{profile.heroTagline}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {profile.titles.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-panel-border bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded bg-signal px-5 py-3 font-mono text-sm uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-tide"
              >
                Read the Dossier <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded border border-panel-border px-5 py-3 font-mono text-sm uppercase tracking-wide hover:bg-mint dark:hover:bg-pine-2"
              >
                Reach the Bridge
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded border border-panel-border px-5 py-3 font-mono text-sm uppercase tracking-wide hover:bg-mint dark:hover:bg-pine-2"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-signal/20 blur-3xl" aria-hidden />
            <Image
              src={profile.photo}
              alt={profile.shortName}
              width={300}
              height={300}
              priority
              className="w-[240px] sm:w-[300px] drop-shadow-2xl"
            />
            <Image
              src="/images/logo.png"
              alt="Sage Force emblem"
              width={64}
              height={64}
              className="absolute bottom-2 right-2 rounded-full ring-4 ring-background shadow-lg sm:bottom-3 sm:right-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
