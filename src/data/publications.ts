export type Publication = {
  id: string;
  title: string;
  venue: string;
  date: string;
  type: "Book" | "Novel" | "Research Paper" | "Review Paper" | "Thesis";
  abstract: string;
  identifier?: string;
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    id: "cnc-robotic",
    title: "Design and Development of Next-Generation CNC Robotic Machine",
    venue: "SES Journal, Zenodo DOI",
    date: "Apr 2025",
    type: "Research Paper",
    abstract:
      "Presents the design and development of a next-generation Computer Numerical Control (CNC) robotic machine integrated with laser technology for smart manufacturing, combining high-power laser tools and intelligent control for multi-material processing, rapid prototyping, and complex part production aligned with Industry 4.0 standards.",
    links: [
      { label: "SES Journal", url: "https://sesjournal.com/index.php/1/article/view/254/235" },
      { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.15194642" },
    ],
  },
  {
    id: "iot-smart-building",
    title: "IOT-based Smart Building Management",
    venue: "SES Journal, Zenodo DOI",
    date: "21 Apr 2025",
    type: "Research Paper",
    abstract:
      "A dual approach to smart building management combining automation and safety via bidirectional ultrasonic sensors, real-time monitoring, and alerting. Integrates smoke, flame, gas, temperature, and ultrasonic sensors to detect hazards, auto-disconnect breakers, and dispatch real-time alerts to occupants.",
    identifier: "ISSN (e) 3007-3138, (p) 3007-312X",
    links: [
      { label: "SES Journal", url: "https://sesjournal.com/index.php/1/article/view/284" },
      { label: "Zenodo DOI", url: "https://doi.org/10.5281/zenodo.15253910" },
    ],
  },
  {
    id: "ai-pharmacy",
    title: "Leveraging AI in Pharmacy & Clinical Pharmacy Transformative",
    venue: "Indus Journal of Bioscience Research",
    date: "07 May 2025",
    type: "Review Paper",
    abstract:
      "Reviews how AI — machine learning, NLP, and predictive analytics — is transforming drug discovery, personalized medicine, prescription accuracy, and pharmacovigilance, while examining data-protection, legal, and ethical considerations for responsible clinical adoption.",
    identifier: "ISSN Print 2960-2793, Online 2960-2807",
    links: [
      { label: "Journal", url: "https://induspublishers.com/IJBR/article/view/1225" },
      { label: "DOI", url: "https://doi.org/10.70749/ijbr.v3i5.1225" },
    ],
  },
  {
    id: "urdu-asr-callcenter",
    title: "Code-Switched Urdu ASR for Noisy Telephonic Environment",
    venue: "Arxiv, S2IS",
    date: "Jul 2023",
    type: "Research Paper",
    abstract:
      "Describes a resource-efficient Automatic Speech Recognition framework for code-switched Urdu in noisy call-center audio, using a Chain Hybrid HMM and CNN-TDNN approach. Achieved a 5.2% Word Error Rate on noisy and clean telephonic speech.",
    links: [
      { label: "Arxiv", url: "https://arxiv.org/abs/2307.12759" },
      { label: "S2IS", url: "https://sciendo.com/journal/IJSSIS" },
    ],
  },
  {
    id: "urdu-asr-thesis",
    title: "Urdu ASR for Mal-intended Speech",
    venue: "Thesis, NUST-PNEC / ResearchGate",
    date: "Oct 2022",
    type: "Thesis",
    abstract:
      "Master's thesis developing a Hybrid HMM-CNN-TDNN Urdu Speech-to-Text system with Lattice-Free MMI, practically implemented in the CPLC call center and achieving 95% transcription accuracy on noisy telephonic Urdu.",
    links: [{ label: "ResearchGate", url: "https://www.researchgate.net/publication/365349074_Automatic_Speech_Recognition_to_Detect_MaliciousMal-intended_Speech" }],
  },
];
