import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact — Dan Sage Khan" };

export default function ContactPage() {
  return (
    <Section
      entry="08"
      kicker="Ship's Log — Final Entry"
      title="Reach the Bridge"
      description="Open to consulting engagements, research collaboration, speaking invitations, and publishing inquiries."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <Card>
          <ContactForm />
        </Card>

        <div className="space-y-4">
          <Card>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Direct Line</p>
            <a href={`mailto:${profile.email}`} className="mt-2 flex items-center gap-2 font-display text-lg text-signal hover:text-tide break-all">
              <Mail size={18} className="shrink-0" /> {profile.email}
            </a>
          </Card>

          <Card>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Location</p>
            <p className="mt-2 flex items-center gap-2 text-sm">
              <MapPin size={16} className="shrink-0 text-signal" /> {profile.location}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Clock size={16} className="shrink-0" /> CET (UTC+1) — remote-friendly across time zones
            </p>
          </Card>

          <Card>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Elsewhere</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-signal">
                <GithubIcon size={16} /> github.com/sage-khan
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-signal">
                <LinkedinIcon size={16} /> linkedin.com/in/sagekhan
              </a>
              <a href={profile.links.medium} target="_blank" rel="noreferrer" className="hover:text-signal">
                thesagekhan.medium.com
              </a>
              <a href={profile.links.linktree} target="_blank" rel="noreferrer" className="hover:text-signal">
                linktr.ee/sagekhanofficial
              </a>
              <a href={profile.links.orcid} target="_blank" rel="noreferrer" className="hover:text-signal">
                ORCID 0009-0001-5084-6122
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
