export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "R", "C++", "Bash", "Java", "SQL", "HTML/CSS", "JavaScript", "LaTeX", "Markdown"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "LlamaIndex", "OpenLLM", "LM Studio", "Ollama", "Unsloth", "LlamaFactory", "RAG pipelines", "Fine-tuning", "LLM prompting"],
  },
  {
    category: "Data Science & Analytics",
    items: ["Data Analysis", "NLP", "Generative AI", "RAG", "ETL", "Data Warehousing", "Business Intelligence", "Tesseract OCR", "OCRmyPDF", "Power BI", "Jupyter", "Anaconda"],
  },
  {
    category: "ETL & Workflow Automation",
    items: ["Airflow", "Airbyte", "PySpark", "Knime", "Unstructured.io", "n8n.io", "Crew AI"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Google Cloud Platform", "Oracle Cloud", "DigitalOcean", "RunPod", "Proxmox", "OpenStack", "VMware"],
  },
  {
    category: "DevOps & MLOps",
    items: ["Docker", "Kubernetes", "Terraform", "Git", "GitHub Actions", "Jenkins", "AWS SageMaker", "MLflow", "Kaggle"],
  },
  {
    category: "Cybersecurity & GRC",
    items: ["NIST CSF", "ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "Eramba", "JupiterOne", "InfoSec Audits", "Risk Management", "Incident Response"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MS SQL Server", "MongoDB", "DynamoDB", "CosmosDB", "Chroma", "Qdrant", "Weaviate", "Pinecone", "Blob Storage"],
  },
  {
    category: "Systems & Tools",
    items: ["Linux (Ubuntu, Kali, Fedora, CentOS)", "WordPress", "ERPNext", "RPA (PyAutoGUI)", "MeshCentral", "F5/E2 TTS", "Pyannote Diarizer", "Speechbrain", "Kaldi", "Vosk", "DeepSpeech"],
  },
  {
    category: "Audio Engineering & Music",
    items: ["FL Studio", "Ardour", "Audacity", "Mixing & Mastering", "Sound Design", "Composition", "Piano", "Guitar", "Vocals"],
  },
  {
    category: "Leadership & Soft Skills",
    items: ["Strategic Planning", "Mentorship", "Public Speaking", "Technical Documentation", "Research Writing", "Team Building", "Workshop Facilitation"],
  },
];
