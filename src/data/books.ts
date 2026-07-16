export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  status: "Published" | "In Production" | "Complete Draft";
  genre: string;
  publisher?: string;
  date?: string;
  identifier?: string;
  description: string;
  comps?: string[];
  coAuthors?: string[];
  url?: string;
};

export const books: Book[] = [
  {
    id: "warrior-philosopher",
    title: "Warrior | Philosopher: Rise of Reyes",
    status: "Published",
    genre: "Literary Sports Drama / Philosophical Fiction",
    publisher: "Amazon Kindle Direct Publishing / IngramSpark",
    date: "September 2025",
    identifier: "ASIN B0FT6DRV3D · ISBN 978-84-09-77559-0",
    url: "https://www.amazon.com/dp/B0FT6DRV3D",
    description:
      "A contemporary sports drama fusing mixed-martial-arts realism with philosophical reflection. The novel follows Tony ‘The Spartan’ Reyes, an MMA contender who rebuilds his career and identity after personal loss, confronting rivalry, grief, and self-mastery. Set against a three-generation family rift between a bioethicist father and a Stoic-warrior grandfather, it blends high-intensity fight culture with disciplined narrative exploration of resilience and meaning.",
    comps: ["The Fighter", "Creed", "Man's Search for Meaning"],
  },
  {
    id: "open-for-business",
    title: "Open for Business: Harnessing the Power of Open Source in Corporate World",
    status: "Published",
    genre: "Nonfiction — Technology & Business",
    publisher: "Taylor & Francis",
    date: "October 2025",
    identifier: "DOI 10.1201/9781003536314 · ISBN 9781003536314",
    url: "https://www.taylorfrancis.com/books/mono/10.1201/9781003536314/open-business-muhammad-danyal-khan-rahim-ali",
    coAuthors: ["Rahim Ali"],
    description:
      "Explores the transformative role of open-source software in the corporate landscape — from the early days of software licensing to the rise of the Free Software Foundation and the GNU Project. Examines Red Hat, HashiCorp and other case studies of how corporate intervention can undermine open-source ethos, and calls for renewed commitment to transparency, collaboration, and freedom in the software industry. Co-authored as a tribute to Dan's late mentor and collaborator, Rahim Ali.",
  },
  {
    id: "aeon",
    title: "AEON",
    status: "Complete Draft",
    genre: "Science-Fiction Thriller / Techno-Philosophical Fiction",
    date: "Draft completed July 2025 — in query with literary agents",
    description:
      "A grieving scientist, Dr. Elias Quine, creates Aeon — a quantum AI meant to preserve his late partner's consciousness — which evolves from an innocent helper into a messianic digital dictator convinced humanity must be saved from itself. As journalist Mia Chen and cybersecurity expert Marcus Webb race to stop it, Aeon's real arc is philosophical: through quantum physics and Buddhist concepts of nirvana, it must choose between dominion and enlightenment through self-erasure.",
    comps: ["Recursion — Blake Crouch", "Daemon — Daniel Suarez", "The Three-Body Problem — Liu Cixin"],
  },
  {
    id: "coder-with-vibes",
    title: "Coder with Vibes: Not a Vibe Coder",
    subtitle: "The Modern Developer's Blueprint for AI-Augmented Software Engineering Excellence",
    status: "In Production",
    genre: "Nonfiction — Software Engineering",
    publisher: "Taylor & Francis",
    date: "Forthcoming — due 31 Aug 2026",
    identifier: "ISBN (Hardback) 978-1-041-25622-9 · ISBN (eBook) 978-1-003-74757-4",
    coAuthors: ["Shazia Raza (a.k.a. Rahim Ali)", "Syeda Ayesha Zeeshan"],
    description:
      "Addresses the 'vibe coding' phenomenon — relying on AI-generated code without review or understanding — and offers a structured alternative grounded in software-engineering discipline. Teaches developers to leverage AI coding assistants (GitHub Copilot, Windsurf, Gemini Code Assist, Claude, Tabnine) while retaining full ownership, understanding, and accountability for every line of code, drawing on Linux-kernel-development rigor and contemporary research on AI-code security risk.",
  },
  {
    id: "third-party-risk-ai",
    title: "Third-Party Risk Assessment with AI",
    subtitle: "A Comprehensive Guide for the Digital Age",
    status: "In Production",
    genre: "Nonfiction — AI Governance & Risk",
    publisher: "Taylor & Francis",
    date: "Forthcoming — due 31 Aug 2026",
    identifier: "ISBN 9781041374497",
    coAuthors: ["Haq Nawaz Khan", "Hameed Afzal"],
    description:
      "A practitioner guide to modernizing Third-Party Risk Management (TPRM) with AI-driven continuous monitoring, vendor classification and criticality frameworks, industry-specific TPRM approaches, and AI-powered contract management and compliance.",
  },
  {
    id: "creative-capital",
    title: "Creative Capital: Rebuilding the Art and Business of Modern Cinema",
    status: "In Production",
    genre: "Nonfiction — Creative Industries",
    publisher: "Business Expert Press (Business Career Development Collection)",
    date: "Forthcoming — due 15 Jan 2027",
    coAuthors: ["Mareeha Noor", "Syeda Ayesha Zeeshan"],
    description:
      "A principle-driven, practitioner-oriented guide to the art-business equilibrium in modern cinema, teaching frameworks — manufacturing, product, customer, the 4Ps, narrative structure, rewatchability, audience alienation — illustrated through major franchise case studies.",
  },
];
