import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-panel-border bg-pine text-mint-2 mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl">Dan Sage Khan</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-tide-2">Sage Force</p>
          <p className="mt-3 text-sm text-mint-2/80 max-w-xs">
            Marie Curie PhD Scholar &middot; AI, Cybersecurity &amp; Blockchain Systems Thinker &middot;
            Ex-Naval Officer &middot; Published Author.
          </p>
        </div>

        <div className="font-mono text-xs uppercase tracking-widest">
          <p className="text-tide-2 mb-3">Dossier</p>
          <ul className="space-y-2 text-mint-2/90 normal-case font-sans text-sm">
            <li><Link href="/about" className="hover:text-tide-2">About</Link></li>
            <li><Link href="/service-record" className="hover:text-tide-2">Service Record</Link></li>
            <li><Link href="/projects" className="hover:text-tide-2">Projects</Link></li>
            <li><Link href="/books" className="hover:text-tide-2">Books</Link></li>
            <li><Link href="/blog" className="hover:text-tide-2">Blog</Link></li>
            <li><Link href="/publications" className="hover:text-tide-2">Publications &amp; Media</Link></li>
            <li><Link href="/services" className="hover:text-tide-2">Services</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-tide-2 mb-3">Reach the Bridge</p>
          <a href="mailto:sagekhanofficial@gmail.com" className="flex items-center gap-2 text-sm hover:text-tide-2">
            <Mail size={16} /> sagekhanofficial@gmail.com
          </a>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://github.com/sage-khan" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-tide-2/30 p-2 hover:bg-pine-2">
              <GithubIcon size={16} />
            </a>
            <a href="https://linkedin.com/in/sagekhan" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-tide-2/30 p-2 hover:bg-pine-2">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://thesagekhan.medium.com" target="_blank" rel="noreferrer" aria-label="Medium blog" className="rounded-full border border-tide-2/30 p-2 hover:bg-pine-2">
              <Rss size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-tide-2/15 px-5 py-4 text-center font-mono text-[11px] uppercase tracking-widest text-mint-2/60">
        &copy; {year} Dan Sage Khan — All entries logged &amp; verified.
      </div>
    </footer>
  );
}
