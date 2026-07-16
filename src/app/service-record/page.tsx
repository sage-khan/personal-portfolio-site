import type { Metadata } from "next";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import {
  EmploymentTable,
  FreelanceTable,
  TeachingTable,
  EducationTable,
  CertificationsTable,
  AwardsTable,
} from "@/components/tables/ServiceRecordTables";
import { experience, freelanceEngagements, teachingRoles } from "@/data/experience";
import { education } from "@/data/education";
import { certifications, languageCourses } from "@/data/certifications";
import { awards } from "@/data/awards";

export const metadata: Metadata = { title: "Service Record — Dan Sage Khan" };

export default function ServiceRecordPage() {
  return (
    <>
      <Section
        entry="02"
        kicker="Ship's Log — Career"
        title="Service Record"
        description="Employment, freelance engagements, teaching, education, certifications, and commendations — the full operational record."
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="signal">13+ Years of Service</Badge>
          <Badge>PhD Scholar</Badge>
          <Badge>Ex-Naval Officer</Badge>
        </div>
      </Section>

      <Section entry="02.1" kicker="Primary Postings" title="Employment">
        <EmploymentTable rows={experience} />
      </Section>

      <Section entry="02.2" kicker="Independent Engagements" title="Freelance & Consulting">
        <FreelanceTable rows={freelanceEngagements} />
      </Section>

      <Section entry="02.3" kicker="Cultivating the Next Generation" title="Teaching & Training">
        <TeachingTable rows={teachingRoles} />
      </Section>

      <Section entry="02.4" kicker="Academic Record" title="Education">
        <EducationTable rows={education} />
      </Section>

      <Section entry="02.5" kicker="Credentials on File" title="Certifications & Specialized Courses">
        <CertificationsTable rows={certifications} />
        <p className="mt-4 font-mono text-xs text-muted">
          Also completed: {languageCourses.map((l) => `${l.name} (${l.issuer}, ${l.date})`).join(" · ")}
        </p>
      </Section>

      <Section entry="02.6" kicker="Commendations" title="Awards & Medals">
        <AwardsTable rows={awards} />
      </Section>
    </>
  );
}
