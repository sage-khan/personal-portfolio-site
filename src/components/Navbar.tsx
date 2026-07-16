"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/service-record", label: "Service Record" },
  { href: "/projects", label: "Projects" },
  { href: "/books", label: "Books" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Publications & Media" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-panel-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Sage Force emblem" width={38} height={38} className="rounded-full" priority />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight">Dan Sage Khan</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Sage Force // Personal Dossier</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wide">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 transition-colors ${
                  active
                    ? "bg-signal text-white"
                    : "text-foreground/80 hover:bg-mint hover:text-ink dark:hover:bg-pine-2"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded p-2 hover:bg-mint dark:hover:bg-pine-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-panel-border bg-background px-5 py-3 flex flex-col gap-1 font-mono text-sm uppercase tracking-wide">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded px-3 py-2 ${
                pathname === link.href ? "bg-signal text-white" : "hover:bg-mint dark:hover:bg-pine-2"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
