export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status: string;
  category: "Flagship Research" | "Independent Project";
  links?: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "veritas-ai-db",
    name: "Veritas AI DB",
    tagline: "Ontology-aware, agentic polyglot persistence for industrial AI",
    description:
      "Dan's flagship venture: an agentic, ontology-driven polyglot persistence platform that intelligently routes autonomous industrial data (SCADA, documents, BIM/IFC, contracts) across seven specialized databases through a trust-scored routing layer with uncertainty-aware confidence bounds. Includes a 13-step recursive industrial document pipeline (multi-engine OCR, layout analysis, semantic chunking, embedding generation), a GraphRAG architecture, and a global UUID-based provenance system spanning every store. The specification, ontology, and adapter layers are open-sourced under the Veritas AI DB GitHub organization; the core orchestration engine and PhD-thesis-backed research implementation continue as active, closed development.",
    tech: ["Python", "Ollama / Llama 3.2", "PostgreSQL + TimescaleDB", "Neo4j", "Qdrant", "OpenSearch", "Redis", "Kafka", "Hyperledger Fabric", "MinIO", "OpenTelemetry"],
    status: "Founded Feb 2026 · actively developed",
    category: "Flagship Research",
    featured: true,
    links: [
      { label: "GitHub Org", url: "https://github.com/veritas-aidb" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/veritas-aidb" },
    ],
  },
  {
    id: "project-veritas",
    name: "Project Veritas (PhD Research)",
    tagline: "Blockchain-powered, ontology-aware agentic polyglot database for wind-farm SCADA",
    description:
      "The Marie Curie PhD research implementation at IPM Lab, Universidad de Granada: a blockchain-powered, ontology-aware agentic polyglot persistence database processing real SCADA datasets from NADARA and Penmanshiel wind farms. Introduces dual-uncertainty quality scoring (parametric + approximation uncertainty via multi-fidelity Gaussian Process fusion) as a novel data-trust contribution, targeted for SIGMOD 2027 publication. Cross-database provenance uses UUID linkage and Kafka/Saga-pattern event sync across 7 polyglot stores (PostgreSQL, Neo4j, OpenSearch, Qdrant, Redis, TimescaleDB, Hyperledger Fabric), with an agentic GraphRAG retrieval layer (Neo4j + Qdrant hybrid) reasoning via a local LLM through Ollama.",
    tech: ["Python", "PostgreSQL", "Neo4j", "OpenSearch", "Qdrant", "Redis", "TimescaleDB", "Hyperledger Fabric", "Ollama", "Kafka"],
    status: "Active PhD research · repository private",
    category: "Flagship Research",
    featured: true,
  },
  {
    id: "cogtwins",
    name: "CogTwins — VERITAS-WF",
    tagline: "Neuro-symbolic cognitive digital twin for wind-farm operations",
    description:
      "System Architect on Project Cogtwins (COGTWINS26), a Spanish R&D tax-incentive project (titleholder AI 4 INFRA 2026 A.I.E., developer Quantia Ingeniería y Consultoría) building VERITAS-WF, a neuro-symbolic Cognitive Digital Twin for wind-farm O&M. Owns the semantic core/federated knowledge graph, polyglot persistence layer, and trust-first governance & blockchain-anchoring workstreams, including a Hyperledger Fabric network for tamper-evident decision/provenance anchoring — deployed live for the University of Granada.",
    tech: ["Python", "Ollama (qwen2.5)", "Neo4j", "Qdrant", "OpenSearch", "TimescaleDB", "MinIO", "SHACL / OWL", "Hyperledger Fabric"],
    status: "Live deployment, actively developed",
    category: "Flagship Research",
    links: [{ label: "Live Deployment", url: "https://veritas.ugr.es" }],
  },
  {
    id: "agentic-security",
    name: "Agentic AI Polyglot DataOps Security",
    tagline: "Adversarial threat modeling for agentic data architectures",
    description:
      "An early-stage security-research companion to Project Veritas: applying STRIDE threat modeling and attack-tree analysis to an agentic-AI, polyglot-persistence DataOps architecture. Structured as a PI-and-student-researcher collaboration toward a published threat-model catalogue and defensive-mitigation library for agentic data platforms.",
    tech: ["Python", "Pydantic", "STRIDE / Attack-Tree Methodology"],
    status: "Active research · Jul 2026 – Present",
    category: "Flagship Research",
    links: [{ label: "GitHub", url: "https://github.com/sage-khan/agenticai-polyglot-dataops-security" }],
  },
  {
    id: "text2officeprocessor",
    name: "Text2OfficeProcessor",
    tagline: "Deterministic Markdown/Text/HTML → PPTX/DOCX/XLSX rendering",
    description:
      "A published open-source PyPI package converting Markdown, Text, and HTML into template-driven PPTX, DOCX, and XLSX documents via deterministic, non-hallucinating rendering. The LLM only normalizes and tags content — it never authors the final document — keeping every template's branding, layout, and images fully preserved and every replacement auditable. Originated from an internal EC-Council document-generation rulefile, iterated into a versioned, tested Python package (44+ automated tests) with a CLI and bundled generic templates.",
    tech: ["Python", "python-docx", "python-pptx", "openpyxl", "PyPI"],
    status: "Published on PyPI · Apr 2026 – Present",
    category: "Independent Project",
    links: [
      { label: "PyPI", url: "https://pypi.org/project/text2officeprocessor/" },
      { label: "GitHub", url: "https://github.com/sage-khan/text2officeprocessor" },
    ],
  },
  {
    id: "codeguardian",
    name: "CodeGuardian",
    tagline: "AI-driven, natural-language security code review",
    description:
      "A security code-review agent that replaces rigid regex-based SAST scanners with human-readable markdown security rules an AI agent can reason about contextually. Dan integrated Ollama for offline review and added multi-model support (Google Gemini CLI, OpenAI Codex) for comparative evaluation of code-analysis capabilities, designing a modular pipeline for scalable AI-based static review and developer-assist features.",
    tech: ["Python", "Docker", "Ollama", "Gemini CLI"],
    status: "2024 – Present",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/rahimali83/CodeGuardian" }],
  },
  {
    id: "ascon-rust",
    name: "Ascon Encryption — Rust Implementation",
    tagline: "Memory-safe lightweight AEAD cryptography research",
    description:
      "Cryptographic research and documentation for a Rust-based implementation of Ascon — the NIST SP 800-232 standardized lightweight authenticated-encryption algorithm — prioritizing memory-safety and performance, and supporting alignment with modern lightweight AEAD standards for embedded and IoT applications.",
    tech: ["Rust", "Cargo", "Cryptography"],
    status: "2024",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/rahimali83/Ascon_Encryptioin_Rust_Implementation" }],
  },
  {
    id: "ascon-c",
    name: "Ascon Encryption — C Implementation",
    tagline: "Lightweight AEAD on resource-constrained systems",
    description:
      "Research and documentation of Ascon, the NIST SP 800-232 standardized lightweight authenticated-encryption algorithm, analyzing the performance and correctness of its core primitives on resource-constrained systems.",
    tech: ["C", "CMake", "Cryptography"],
    status: "2024",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/rahimali83/Ascon_Encryption_C_lang_Implementation" }],
  },
  {
    id: "latex-editor",
    name: "Offline LaTeX Editor & Book Template",
    tagline: "Fully offline, locally-hosted publishing pipeline",
    description:
      "A fully offline LaTeX editing environment with standardized book/publication templates built from scratch, paired with an offline open-source book-management stack using Calibre and Kavita Reader — built to keep manuscript production secure and sovereign, end to end.",
    tech: ["LaTeX", "Calibre", "Kavita Reader"],
    status: "Feb 2023 – Jul 2023 · unreleased",
    category: "Independent Project",
  },
  {
    id: "urdu-stt",
    name: "Speech-to-Text for Urdu (Hybrid HMM-DNN)",
    tagline: "95% accuracy Urdu ASR on noisy telephonic audio",
    description:
      "A Hybrid HMM-DNN Speech-to-Text system trained from scratch on a customized dataset as part of Dan's Master's thesis, practically deployed inside the CPLC call center. Automated the full pipeline with Linux services, cron jobs and Bash, using Kaldi, DeepSpeech and Vosk — achieving 95% transcription accuracy on noisy, code-switched Urdu.",
    tech: ["Bash", "Python", "Perl", "C++", "Kaldi", "DeepSpeech", "Vosk"],
    status: "Oct 2021 – Dec 2022 · deployed in production (CPLC)",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/sage-khan/code-switched-noisy-urdu-asr" }],
  },
  {
    id: "iot-detector",
    name: "IoT-Based Temperature & Humidity Detector",
    tagline: "Secure, containerized IoT sensing end to end",
    description:
      "An end-to-end secure IoT project spanning device, network and application layers — MQTT over TLS/SSL via Mosquitto, time-series storage in Prometheus, real-time Grafana dashboards, and ESP32-based sensing, containerized with Docker for reproducible deployment.",
    tech: ["Bash", "Python", "MongoDB", "MQTT", "Prometheus", "Grafana", "ESP32", "Docker"],
    status: "Feb – Jun 2021",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/sage-khan/IoT-Thermometer-humidity-sensor" }],
  },
  {
    id: "recruitment-analysis",
    name: "Recruitment Analysis System",
    tagline: "Data-driven candidate evaluation, final-year MIS capstone",
    description:
      "A final-year MIS capstone project delivering a proof of concept for data-driven recruitment analytics and candidate evaluation.",
    tech: ["Python", "HTML", "CSS", "Power BI"],
    status: "2017 – 2018",
    category: "Independent Project",
    links: [{ label: "GitHub", url: "https://github.com/sage-khan/Recruitment-Analysis-System" }],
  },
];
