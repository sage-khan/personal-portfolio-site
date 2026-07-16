export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: "ai-ml-engineering",
    title: "AI & Machine Learning Engineering",
    summary: "End-to-end AI system design — from RAG pipelines and agentic architectures to fine-tuning and production inference.",
    deliverables: ["RAG / GraphRAG pipeline design", "LLM fine-tuning (LoRA) & evaluation", "Agentic workflow orchestration (LangChain, CrewAI, n8n)", "Model deployment & MLOps (Docker, Kubernetes, MLflow)"],
    tags: ["AI", "MLOps", "LLM"],
  },
  {
    id: "cybersecurity-grc",
    title: "Cybersecurity, GRC & Auditing",
    summary: "ISO 27001 Lead Auditor-grade security governance, risk assessment, and incident-response readiness for organizations of any size.",
    deliverables: ["ISO 27001 / NIST CSF gap assessments", "SOC deployment (Wazuh) & detection engineering", "Incident response & CERT program design", "AI algorithmic auditing & bias/fairness review"],
    tags: ["Cybersecurity", "GRC", "ISO 27001"],
  },
  {
    id: "dataops-devops",
    title: "DataOps & Cloud-Native Infrastructure",
    summary: "Polyglot data architecture, containerized CI/CD, and open-source infrastructure that scales without vendor lock-in.",
    deliverables: ["Polyglot database architecture (relational, graph, vector, time-series)", "Kubernetes / Docker CI/CD pipelines", "Open-source infra rollout (ERPNext, MeshCentral, Passbolt, Wazuh)", "Legacy monolith → microservices modernization"],
    tags: ["DevOps", "DataOps", "Cloud"],
  },
  {
    id: "data-analytics",
    title: "Data Engineering & Business Intelligence",
    summary: "ETL pipelines and decision-ready dashboards that hold up under real production load.",
    deliverables: ["ETL / ELT pipeline design (Airflow, PySpark, Airbyte)", "Power BI dashboarding & DAX modeling", "Data warehousing strategy", "OCR & document-intelligence pipelines"],
    tags: ["Data Engineering", "Power BI", "ETL"],
  },
  {
    id: "training",
    title: "Technical Training & Curriculum Design",
    summary: "University-grade course design and delivery in AI, cybersecurity, and data — from single workshops to full semester curricula.",
    deliverables: ["Custom curriculum design (AI, cybersecurity, data science)", "Corporate workshops & webinars", "One-on-one coaching (A-Levels to graduate level)", "Course handbooks, quizzes & video lectures"],
    tags: ["Education", "Training", "Curriculum"],
  },
  {
    id: "writing",
    title: "Technical & Editorial Writing",
    summary: "Clear, well-researched technical writing and editorial content — from deep-dive engineering articles to full-length books.",
    deliverables: ["Technical blog & thought-leadership articles", "Book & long-form manuscript development", "SEO-optimized content writing", "Documentation & tutorials"],
    tags: ["Writing", "Content", "Publishing"],
  },
  {
    id: "audio",
    title: "Audio Engineering & Music Production",
    summary: "Full production lifecycle for original music and spoken-word audio — composition through mastering.",
    deliverables: ["Composition & arrangement", "Mixing & mastering", "Voice/podcast production", "DAW workflow setup (FL Studio, Ardour)"],
    tags: ["Audio", "Music", "Production"],
  },
  {
    id: "coaching",
    title: "Meditation & Performance Coaching",
    summary: "Silva Method meditation instruction and hypnotherapy-based coaching for stress reduction and mental resilience.",
    deliverables: ["Silva UltraMind ESP instruction", "Hypnotherapy sessions", "Life & goal-planning coaching", "Speed-reading & memory training"],
    tags: ["Coaching", "Meditation", "Wellbeing"],
  },
];
