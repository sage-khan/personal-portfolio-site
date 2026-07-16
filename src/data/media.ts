export type MediaAppearance = {
  id: string;
  title: string;
  outlet: string;
  outletUrl?: string;
  date: string;
  type: "TV / News" | "Podcast" | "Talk" | "Workshop";
  summary: string;
  url?: string;
  articleUrl?: string;
};

export const mediaAppearances: MediaAppearance[] = [
  {
    id: "ntn-interview",
    title: "State of Artificial Intelligence and Cyber Security in Pakistan",
    outlet: "NTN News",
    date: "13 Apr 2026",
    type: "TV / News",
    summary: "Televised interview on Pakistan's AI and cybersecurity gaps, breach data, and policy recommendations.",
    url: "https://youtu.be/Uy4iJl4C6Jc",
    articleUrl: "https://thesagekhan.medium.com/on-ai-cybersecurity-and-pakistans-digital-future-reflections-from-my-ntn-news-interview-8814f3674ae3",
  },
  {
    id: "wind-power",
    title: "Pakistan’s Wind Power Revolution: Turning Coastal Breezes into Energy",
    outlet: "Frontline with Tazmeen Javaid — News 99",
    date: "14 Oct 2025",
    type: "TV / News",
    summary: "Discussed renewable-energy potential in Pakistan and the IntelliWind EU project improving the wind-energy sector.",
    url: "https://youtu.be/M-xRRgxfxLY",
    articleUrl: "https://thesagekhan.medium.com/potential-of-pakistan-in-the-renewable-sector-0e7a748e95b5",
  },
  {
    id: "brain-drain",
    title: "Brain Drain and Bureaucracy in Pakistan",
    outlet: "Frontline with Tazmeen Javaid — News 99",
    date: "01 Aug 2025",
    type: "TV / News",
    summary: "Discussed brain drain, bureaucracy, and the potential of AI and blockchain in public-sector reform.",
    url: "https://youtu.be/hZrwIsi2JFY?si=9BXCreH99uVy0jHL",
  },
  {
    id: "ai-jobs",
    title: "Will Artificial Intelligence Take Jobs Or Create New Opportunities?",
    outlet: "Frontline with Tazmeen Javaid — News 99",
    date: "16 Apr 2025",
    type: "TV / News",
    summary: "Appeared alongside Saim Safder covering AI's impact on creativity, research, and the future of work.",
    url: "https://www.youtube.com/watch?v=vLbHSUjsUx8",
  },
  {
    id: "slow-internet",
    title: "The Impact of Pakistan’s Slow Internet on the Economy",
    outlet: "News 99",
    date: "18 Feb 2025",
    type: "TV / News",
    summary: "Discussed how limited internet connectivity affects productivity, competitiveness, and economic growth.",
    url: "https://youtu.be/Vp77fTwkQfg?si=tBJuv99h10PNacbm",
  },
  {
    id: "deepseek",
    title: "DeepSeek and Impact on Other LLMs",
    outlet: "Frontline with Tazmeen Javaid — News 99 (with Rahim Ali)",
    date: "30 Jan 2025",
    type: "TV / News",
    summary: "Explored DeepSeek and its strategic implications for AI competitiveness, including China–US dynamics.",
    url: "https://www.youtube.com/watch?v=Z7YVXz4Z0Mg",
  },
  {
    id: "linux-kernel",
    title: "State of Linux Kernel",
    outlet: "Cloud Native FM (with Saim Safder)",
    date: "18 Jan 2025",
    type: "Podcast",
    summary: "Joined Cloud Native FM to discuss Linux kernel trends and AI development considerations.",
    url: "https://www.youtube.com/watch?v=nEcpNFMRo8Q",
  },
  {
    id: "mcp-podcast",
    title: "Model Context Protocol: Hype, Anti-Pattern, or a Standard?",
    outlet: "Cloud Native FM (with Saim Safder)",
    date: "2025",
    type: "Podcast",
    summary: "Examined Anthropic's Model Context Protocol as a potential 'USB-C for AI'.",
    articleUrl: "https://thesagekhan.medium.com/model-context-protocol-hype-or-anti-pattern-or-a-standard-0190049a6071",
  },
  {
    id: "ai-wrappers-podcast",
    title: "Beyond \"ChatGPT with a UI\": Why AI Wrapper Companies Still Matter",
    outlet: "Cloud Native FM (with Saim Safder)",
    date: "2025",
    type: "Podcast",
    summary: "Discussed how AI wrapper startups can build defensible businesses as foundation models commoditize.",
    articleUrl: "https://thesagekhan.medium.com/beyond-chatgpt-with-a-ui-why-ai-wrapper-companies-still-matter-if-they-play-it-smart-0207ec253a97",
  },
  {
    id: "marketing-ia-podcast",
    title: "Open-Source AI & Agentic Marketing",
    outlet: "Marketing e IA Podcast",
    date: "2026",
    type: "Podcast",
    summary: "Bilingual (Spanish/English) episode on running enterprise-grade AI on open-source stacks and spotting 'agent washing' in marketing tools.",
    url: "https://open.spotify.com/episode/4nV5vZcevivcBffxeZefTi",
  },
  {
    id: "cyber-kids",
    title: "Cyber Security for Kids",
    outlet: "Pakistan Navy",
    date: "20 Feb 2024",
    type: "Workshop",
    summary: "Delivered an online session on cybersecurity awareness tailored for children and parents.",
    url: "https://fb.watch/r5txJVJUCP/",
  },
  {
    id: "ai-cysec",
    title: "AI and Cyber Security",
    outlet: "AI Center of Pakistan",
    date: "20 Feb 2024",
    type: "Talk",
    summary: "Presented an applied session on AI and cybersecurity, focusing on risks, controls, and safe adoption.",
    url: "https://fb.watch/r5slwH56ry/",
  },
  {
    id: "digital-world",
    title: "Navigating the Digital World",
    outlet: "Bahria University Workshop",
    outletUrl: "https://www.bukc.com",
    date: "2022",
    type: "Workshop",
    summary: "Facilitated a workshop for student psychologists on research skills, fact-checking, and information verification.",
  },
];

export type Leadership = { id: string; role: string; org: string; orgUrl?: string; date: string; bullets: string[] };

export const leadership: Leadership[] = [
  {
    id: "cncf",
    role: "Developer Relations & Community Builder",
    org: "Cloud Native Computing Foundation Islamabad",
    date: "Feb 2025 — Present",
    bullets: ["Contributed to Cloud Native FM podcast on Linux, AI, DevOps and Cybersecurity.", "Coordinated and hosted community events focused on the CNCF stack."],
  },
  {
    id: "mun",
    role: "Director General",
    org: "Model United Nations, NUST PNEC (MUNINP)",
    date: "2015 – 2016",
    bullets: ["Organized NUST PNEC's first nationwide MUN, managing a 600+ delegate conference.", "Participated as a delegate in five MUNs; chaired more than 15 committees across Pakistan."],
  },
  {
    id: "spendless",
    role: "Remote Trainer",
    org: "Spendless Academy",
    orgUrl: "https://www.linkedin.com/company/sc-academy/",
    date: "Aug 2018 – May 2022",
    bullets: ["Taught speed reading, memory improvement, meditation, and the Silva UltraMind ESP system before widespread remote learning."],
  },
];
