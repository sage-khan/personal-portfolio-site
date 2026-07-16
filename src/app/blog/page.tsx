import type { Metadata } from "next";
import Section from "@/components/Section";
import BlogTable from "@/components/tables/BlogTable";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = { title: "Blog — Dan Sage Khan" };

const rows = blogs.map((b) => ({ ...b, id: b.slug }));

export default function BlogPage() {
  return (
    <Section
      entry="05"
      kicker={`${blogs.length} Entries Logged`}
      title="Blog"
      description="Long-form writing on AI, cybersecurity, DevOps, Pakistan policy, and philosophy — mostly published on Medium (thesagekhan.medium.com)."
    >
      <BlogTable rows={rows} />
    </Section>
  );
}
