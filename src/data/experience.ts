export type Experience = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  type: "Research" | "Founder" | "Consulting" | "Military" | "Teaching";
  bullets: string[];
  links?: { label: string; url: string }[];
};

export const experience: Experience[] = [
  {
    id: "ipm-lab",
    role: "MSCA Personal Docente e Investigador (PhD Scholar)",
    org: "IPM Lab, Universidad de Granada",
    orgUrl: "https://ipmlab.ugr.es/",
    location: "Granada, Spain (Onsite)",
    start: "Sep 2025",
    end: "Present",
    current: true,
    type: "Research",
    bullets: [
      "Researching a secure IT framework for autonomous wind farm O&M based on blockchain, smart contracts, and AI, under Dr. Manuel Chiachio Ruano and Dr. Juan Chiachio Ruano, with Dr. Juan Fernandez (Quantia Engineering & Consultancy, S.L.) — developing a secure, trustworthy, explainable, interactive structural health monitoring (SHM) platform for wind farms.",
      "Collaborated with industry partners NADARA and Quantia to develop an efficient multi-modal database with blockchain for wind farm and solar farm data.",
      "Architected and built Project Veritas, a blockchain-powered, ontology-aware agentic polyglot persistence database processing real SCADA datasets from NADARA and Penmanshiel wind farms; introduced dual-uncertainty quality scoring (parametric + approximation uncertainty via multi-fidelity Gaussian Process fusion) as a novel data-trust contribution targeted for SIGMOD 2027 publication.",
      "Designed cross-database provenance with UUID linkage and Kafka/Saga-pattern event sync across 7 polyglot stores (PostgreSQL, Neo4j, OpenSearch, Qdrant, Redis, TimescaleDB, Hyperledger Fabric), and an agentic GraphRAG retrieval layer (Neo4j + Qdrant hybrid) with local LLM reasoning via Ollama.",
      "Serving as System Architect on Project Cogtwins (COGTWINS26), a Spanish R&D tax-incentive project building VERITAS-WF, a neuro-symbolic Cognitive Digital Twin for wind-farm O&M; own the semantic core/federated knowledge graph, polyglot persistence layer, and trust-first governance & blockchain-anchoring workstreams, deployed at veritas.ugr.es.",
      "Designed and fielded an expert-elicitation survey (Blockchain Suitability Index, LimeSurvey) to validate blockchain-integration criteria for industrial SHM data governance with domain-expert input.",
    ],
    links: [
      { label: "Personal Page", url: "https://www.ugr.es/personal/muhammad-danyal-khan" },
      { label: "CORDIS Project", url: "https://cordis.europa.eu/project/id/101168725" },
    ],
  },
  {
    id: "veritas-founder",
    role: "Founder & Lead Architect",
    org: "Veritas AI DB",
    orgUrl: "https://www.linkedin.com/company/veritas-aidb",
    location: "Remote, Granada, Spain",
    start: "Feb 2026",
    end: "Present",
    current: true,
    type: "Founder",
    bullets: [
      "Architected an ontology-driven polyglot data platform integrating 7 heterogeneous database types — relational, graph, vector, search, time-series, object storage, blockchain.",
      "Designed a trust-scored routing layer with uncertainty-aware confidence bounds for data governance.",
      "Implemented a GraphRAG architecture for industrial SCADA and document intelligence workloads.",
      "Built a 13-step recursive industrial document pipeline, multi-engine OCR, layout analysis, semantic chunking, embedding generation.",
      "Developed an agentic data-quality framework with distributed tracing via OpenTelemetry for non-deterministic workflows.",
      "Implemented a global UUID-based provenance system spanning polyglot stores.",
      "Open-sourced the specification, ontology, and adapter layers under the Veritas AI DB GitHub organization (veritas-spec, veritas-ontology, veritas-adapters), while the core orchestration engine and PhD-thesis-backed research implementation continue as active, closed development.",
    ],
    links: [{ label: "GitHub Org", url: "https://github.com/veritas-aidb" }],
  },
  {
    id: "cdf-dataops",
    role: "Project Lead — DataOps Initiative",
    org: "Continuous Delivery Foundation (Freelance)",
    location: "Remote, United States",
    start: "Mar 2025",
    end: "Present",
    current: true,
    type: "Consulting",
    bullets: [
      "Led the CD Foundation's DataOps Landscape Initiative — defining its vision, roadmap, and governance.",
      "Developed a structured framework of categories, tools, and technologies for the open-source DataOps ecosystem.",
      "Designed evaluation criteria and inclusion standards for project quality, maintainability, and community relevance.",
      "Authored technical blog posts and thought-leadership content; organized community workshops and webinars.",
    ],
    links: [{ label: "Webinar recording", url: "https://www.youtube.com/watch?v=SkJ33xHNQMQ" }],
  },
  {
    id: "syllaby-ai",
    role: "Senior AI Developer",
    org: "Syllaby AI",
    orgUrl: "https://syllaby.io/",
    location: "Remote",
    start: "Mar 2025",
    end: "Jul 2025",
    type: "Consulting",
    bullets: [
      "Led design and development of scalable image-generation pipelines using Flux and SDXL across cloud APIs and on-prem GPUs.",
      "Formed and managed a cross-functional engineering team building Dockerized microservices and RESTful APIs.",
      "Built advanced ComfyUI workflows with ControlNet, OpenPose and depth maps for consistent character/scene generation.",
      "Fine-tuned Flux diffusion models with LoRA; deployed ML inference via Django, Docker, and Kubernetes on DigitalOcean.",
      "Created text-to-video pipelines combining D-ID and Dia TTS for lifelike talking-head generation.",
    ],
  },
  {
    id: "twinciti",
    role: "Machine Learning Engineer (Contract)",
    org: "TwinCiti AI",
    orgUrl: "https://www.twinciti.com",
    location: "Remote",
    start: "Dec 2024",
    end: "Jan 2025",
    type: "Consulting",
    bullets: [
      "Developed RPA workflows using AutoGUI, Selenium, Playwright and LLMs via OpenRouter.",
      "Implemented ASR/STT/TTS and voice-cloning systems (F5, E2) for conversational agents.",
      "Built speaker-diarization systems using Pyannote and Whisper-based transcript analysis.",
    ],
  },
  {
    id: "hiq",
    role: "Machine Learning Consultant",
    org: "HIQ Solutions LLC",
    orgUrl: "https://www.hiqsolutions.net",
    location: "Remote (Part-Time)",
    start: "Jul 2024",
    end: "Dec 2024",
    type: "Consulting",
    bullets: [
      "Pre-sales consultation, bridging US clients and the global development team.",
      "Translated client requirements into technical scope and delivery plans for AI solutions.",
    ],
  },
  {
    id: "cplc",
    role: "AI-ASR Engineer (Volunteer Member)",
    org: "Citizen Police Liaison Committee (CPLC)",
    location: "Part-Time",
    start: "Oct 2021",
    end: "Dec 2022",
    type: "Consulting",
    bullets: [
      "Engineered and trained a custom Speech-to-Text system from scratch using a Hybrid HMM-DNN architecture.",
      "Automated the end-to-end data pipeline with Linux services, cron jobs and custom Bash scripts.",
      "Achieved 95% transcription accuracy on noisy telephonic Urdu using Kaldi, DeepSpeech and Vosk.",
    ],
  },
  {
    id: "pak-navy",
    role: "Lieutenant Commander",
    org: "Pakistan Navy",
    orgUrl: "https://www.paknavy.gov.pk/",
    location: "Pakistan",
    start: "Jan 2012",
    end: "May 2025",
    type: "Military",
    bullets: [
      "Authored and implemented Cyber Warfare doctrines covering Electronic Warfare, Intelligence Operations, and Information Operations.",
      "Led development and containerized deployment of analytical war-gaming, GIS, and war-simulation software.",
      "Established and led Incident Response and Cyber Emergency Response Teams (CERTs) across naval units.",
      "Served in Signal Communication, Electronic Warfare, Information Warfare, Principal Underwater Warfare, and Executive Officer roles.",
      "Directed maritime law-enforcement operations — anti-trafficking, counter-narcotics, and anti-smuggling missions.",
      "Served aboard Type-21 Destroyers, F22P Frigates, and Corvettes; completed advanced SEAL, close-quarter combat and anti-piracy training.",
    ],
  },
];

export type FreelanceEngagement = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  start: string;
  end: string;
  bullets: string[];
  links?: { label: string; url: string }[];
};

export const freelanceEngagements: FreelanceEngagement[] = [
  {
    id: "ec-blockchain-forensics",
    role: "Hands-On Blockchain Forensics — Author & Instructor",
    org: "EC-Council Learning",
    orgUrl: "https://www.eccouncil.org/",
    start: "Jul 2026",
    end: "Present",
    bullets: [
      "Contracted as Author and Instructor for a third EC-Council Learning video course (Inhouse Publishing Agreement executed Jul 9, 2026), covering blockchain forensics: tracing cryptocurrency transactions, attributing wallets, and investigating smart-contract exploits using open-source tooling.",
      "Authoring a ~4-hour, 8-section, 40-video curriculum spanning Bitcoin ledger analysis, Ethereum/EVM forensics, transaction-graph and wallet-attribution analysis, smart-contract exploit investigation, and cross-chain/mixer obfuscation tracing, aligned to DFIR, AML/compliance, and law-enforcement use cases.",
      "Designing hands-on labs using public chain data, block explorers, and open-source Python analysis frameworks in place of proprietary blockchain-intelligence platforms.",
      "Producing full course deliverables: course handbook (eBook), section quizzes, 25-question final assessment, LMS metadata, and instructional slide decks, on a royalty-based compensation model.",
    ],
  },
  {
    id: "ec-netops",
    role: "NetOps Demystified — Author & Instructor",
    org: "EC-Council Learning",
    orgUrl: "https://www.eccouncil.org/",
    start: "Jun 2026",
    end: "Present",
    bullets: [
      "Contracted as Author and Instructor for a second EC-Council Learning video course (Publishing & Distribution Agreement signed Jun 5, 2026): \"NetOps Demystified: From Legacy Network Administration to Software-Driven, Automated, and Reliable Network Operations.\"",
      "Authoring a ~4-hour-10-minute, 8-section, 33-video curriculum covering Software-Defined Networking foundations, Infrastructure-as-Code for networks (Ansible, Terraform), Network Reliability Engineering, and observability/telemetry (Prometheus, Grafana), bridging NetOps into NetSecOps.",
      "Built hands-on labs with Containerlab, Terraform, and NETCONF/ncclient, plus a Prometheus/Grafana observability notebook, for reproducible network-automation practice.",
      "Produced full course deliverables: course handbook (eBook), section quizzes, 25-question final assessment, LMS metadata, and instructional \"how-to\" videos, on a royalty-based compensation model.",
    ],
  },
  {
    id: "ec-ai-auditing",
    role: "AI Algorithmic Auditing in Action — Author & Instructor",
    org: "EC-Council Learning",
    orgUrl: "https://www.eccouncil.org/",
    start: "Mar 2026",
    end: "May 2026",
    bullets: [
      "Contracted as Author and Instructor to design and develop a professional training course in AI Algorithmic Auditing — EC-Council Learning's first video course under this engagement.",
      "Authored and recorded a ~5-hour, 9-section, 52-video curriculum covering Machine Learning fundamentals, Algorithmic Auditing, AI Ethics, Legal frameworks, Bias and Fairness, and Explainability (XAI).",
      "Delivered full supporting materials: course handbook (eBook), section-wise quizzes, final assessment (25 questions), metadata documentation, and instructional \"how-to\" videos.",
      "Designed content aligned with industry compliance, security standards, and real-world AI governance practices; engaged in iterative review cycles with EC-Council on editorial and technical feedback.",
      "Contributed to a commercially distributed product with a royalty-based compensation model (20% of net receipts).",
    ],
  },
  {
    id: "ec-blogs",
    role: "Contributing Author — Technical Blogs",
    org: "EC-Council Learning",
    orgUrl: "https://www.eccouncil.org/",
    start: "Jul 2026",
    end: "Present",
    bullets: [
      "Engaged by EC-Council Learning's editorial team as a contributing author for SEO-optimized technical blog content on applied AI/LLM security topics, including RAG attack surfaces (vector poisoning, embedding inversion), AI capture-the-flag (CTF) methodology, and system-prompt-extraction techniques.",
    ],
  },
  {
    id: "nova-tech",
    role: "Senior AI Consultant",
    org: "Nova Tech (Built Pulse)",
    orgUrl: "https://builtpulse.com/",
    start: "Nov 2025",
    end: "Feb 2026",
    bullets: [
      "Authored a 168+ page technical deliverable set (Agent Architecture Blueprint, Agent Development Playbook, Agent Development Manual, plus a 12-week AI Agent Curriculum, Framework Comparison Guide, and Deployment Checklist) architecting a 5-bot AI automation suite (Email, Meeting, Project Tracker, Knowledge, Resource Allocator) for the client's Karachi engineering team.",
      "Architected and built the Knowledge Bot: a FastAPI + LangChain document-ingestion pipeline (PDF, DOCX, XLSX, CSV, JSON, TXT) with OpenAI embeddings and Qdrant vector-similarity search for semantic retrieval across organizational documents and meeting transcripts.",
      "Delivered, beyond contracted scope, a full codebase restructuring, fixed 5 critical security vulnerabilities (hardcoded secrets, in-memory token storage), added Redis-backed password reset and auth rate-limiting, and built a 100+ test suite (75% backend API coverage) with GitHub Actions CI/CD.",
      "Authored Docker Compose and Kubernetes deployment manifests and a microservices migration guide (PostgreSQL, Redis, Qdrant, n8n) for production rollout of the bot suite.",
      "Developed and enforced enterprise-grade password management policies aligned with ISO 27001 standards, implementing Passbolt for secure credential orchestration and access control.",
      "Automated organizational employee attendance tracking by deploying and integrating Kimai and TimeTrex, streamlining HR operations and resource reporting via custom API integrations; final deployment was on horillaHRMS. Led the deployment of a customized CRM.",
      "Drafted end-to-end AI/ML product development SOPs and security protocols for IP protection, while facilitating hands-on agent-building workshops for the core engineering team.",
    ],
    links: [
      { label: "Passbolt", url: "https://passbolt.builtpulse.com" },
      { label: "horillaHRMS", url: "https://attendance.builtpulse.com" },
      { label: "CRM", url: "https://bizzpulse.co/" },
    ],
  },
  {
    id: "virtuous-bpo",
    role: "Open-Source Infrastructure & Automation Consultant",
    org: "Virtuous BPO",
    start: "Jun 2023",
    end: "Aug 2024",
    bullets: [
      "Deployed an open-source SOC using Wazuh with custom detection rules and dashboards.",
      "Built RPA bots automating accounting/BPO workflows in QuickBooks; deployed offline LLM + PrivateGPT RAG on Ollama.",
      "Rolled out ERPNext HR/training modules, MeshCentral, Passbolt/TeamPass, and secure VPN/SSH network infrastructure.",
    ],
    links: [{ label: "GitHub (Offline LLM Deployment)", url: "https://github.com/sage-khan/llm-pdf-csv-conversion" }],
  },
  {
    id: "labs-41",
    role: "Large Language Model Training Optimization",
    org: "41 Labs LLC, USA",
    start: "Mar 2024",
    end: "Mar 2024",
    bullets: ["Consulted on optimization and fine-tuning of GPT-3.5 for medical-domain use cases."],
  },
  {
    id: "disruptivera",
    role: "Technical Content Writing",
    org: "Disruptivera / Medium",
    orgUrl: "https://disruptivera.com/",
    start: "2020",
    end: "2022",
    bullets: ["Authored technical blogs and articles on AI, data science, and emerging technologies."],
  },
  {
    id: "upwork-content",
    role: "Content Writing — US Concept Pages",
    org: "Upwork",
    orgUrl: "https://www.upwork.com/freelancers/~01aac14f21aa443593?promobnr=1",
    start: "2010",
    end: "2010",
    bullets: [
      "Authored SEO-optimized content for U.S.-based concept pages and marketing sites.",
      "Performed keyword research and implemented search engine optimization (SEO) strategies to increase visibility.",
    ],
  },
  {
    id: "upwork-audio",
    role: "Freelance Audio Engineer and Music Composer",
    org: "Upwork",
    orgUrl: "https://www.upwork.com/freelancers/~01aac14f21aa443593?promobnr=1",
    start: "2010",
    end: "2010",
    bullets: [
      "Composed and produced original music tracks for diverse projects.",
      "Developed complete audio tracks using FL Studio and Audacity, managing the full production lifecycle.",
    ],
  },
];

export type TeachingRole = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const teachingRoles: TeachingRole[] = [
  {
    id: "profs-uk",
    role: "Private Coach (Part-Time)",
    org: "The Profs UK Spires",
    orgUrl: "https://spires.co/tutors/fa138578-19ed-4445-aed7-2609f4afc07e",
    location: "Remote, United Kingdom",
    start: "Jan 2026",
    end: "Present",
    current: true,
    bullets: ["One-on-one teaching in AI, Cyber Security, Programming, Mathematics and Statistics from A-Levels to graduate level."],
  },
  {
    id: "iqra",
    role: "Lecturer (Part-Time), Project Supervisor",
    org: "Iqra University",
    orgUrl: "https://www.iqra.edu.pk/",
    location: "Karachi, Pakistan",
    start: "Aug 2024",
    end: "Present",
    current: true,
    bullets: [
      "Taught Generative AI, Critical Infrastructure Protection, Incident Response, Advanced Operating Systems, Digital Forensics, Ethical Hacking, and InfoSec Governance.",
      "Supervised student research and capstone projects.",
    ],
  },
  {
    id: "bahria",
    role: "Lecturer (Part-Time), Project Supervisor",
    org: "Bahria University Karachi",
    orgUrl: "https://bahria.edu.pk/",
    location: "Karachi, Pakistan",
    start: "Sep 2024",
    end: "Oct 2024",
    bullets: ["Taught Management Information Systems, Data Analytics, Business Analytics, Machine Learning, and Generative AI."],
  },
  {
    id: "nust",
    role: "Instructor, Junior Officer Training Officer, Head of Postgraduate Program",
    org: "National University of Sciences and Technology (NUST)",
    orgUrl: "https://nust.edu.pk/",
    location: "Karachi, Pakistan",
    start: "Sep 2020",
    end: "Dec 2022",
    bullets: [
      "Appointed by the Pakistan Navy to train newly commissioned naval officers in academic and technical disciplines.",
      "Designed and established cybersecurity laboratories; contributed to Cyber Warfare and AI doctrine development.",
      "Taught postgraduate courses in Digital Forensics, Ethical Hacking, and Information Security Governance.",
    ],
  },
];
