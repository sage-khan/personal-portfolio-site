export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: "Professional Certification" | "Specialized Course" | "Registration" | "Misc / Life Skills";
  detail?: string;
  url?: string;
};

export const certifications: Certification[] = [
  { id: "audio-cert", name: "Audio Engineering & Music Production", issuer: "Audio Institute of America", date: "Feb 2016", category: "Professional Certification", url: "https://audioinstituteofamerica.com/index.php/the-course/41.html" },
  { id: "iso27001", name: "ISO/IEC 27001:2013 Lead Auditor", issuer: "IRCA, RICI", date: "Apr 2024", category: "Professional Certification", detail: "Credential ID CQI-ULN-554424", url: "https://ricionline.com/front-page/services/training/iso-27001-2013-lead-auditor-training-course/" },
  { id: "pseb", name: "Registered Information Technology Freelancer", issuer: "Pakistan Software Export Board, Ministry of IT (MoIT)", date: "May 2025", category: "Registration", detail: "Registration ID FL21/PSEB/2025/13053", url: "https://techdestination.com" },
  { id: "intelliwind", name: "IntelliWind MSCA-DN — Training School 1", issuer: "Technical University of Denmark (DTU)", date: "Sep 2025", category: "Specialized Course", detail: "Wind energy, SCADA data science, AI/ML for autonomous wind systems" },
  { id: "incident-response", name: "Incident Response Course", issuer: "PDC NUST-PNEC", date: "Apr 2021", category: "Specialized Course" },
  { id: "linux-admin", name: "Linux for System Administration", issuer: "PDC NUST-PNEC", date: "Dec 2021 – Feb 2022", category: "Specialized Course" },
  { id: "ai-workshop", name: "Artificial Intelligence Workshop", issuer: "PDC NUST-PNEC", date: "Jan 2023", category: "Specialized Course" },
  { id: "cv-workshop", name: "Computer Vision Workshop", issuer: "PDC NUST-PNEC", date: "Mar 2023", category: "Specialized Course" },
  { id: "basic-mgmt", name: "Basic Management Course", issuer: "PNS RAHNUMA", date: "Aug 2014", category: "Specialized Course" },
  { id: "logistics", name: "Logistics, Management, and Naval Law", issuer: "PNS KARSAZ", date: "Jun 2015", category: "Specialized Course" },
  { id: "cbrndc", name: "CBRNDC & Fire Fighting Course", issuer: "PNS KARSAZ", date: "Jul 2015", category: "Specialized Course" },
  { id: "jostc", name: "Junior Officer Staff Duties Course", issuer: "PNS RAHNUMA", date: "Mar 2016", category: "Specialized Course" },
  { id: "naval-ops", name: "Naval Operations Course", issuer: "PNS BAHADUR", date: "Jan–Sep 2016", category: "Specialized Course" },
  { id: "heli", name: "Helicopter Controller Course", issuer: "PNS MEHRAN", date: "2017", category: "Specialized Course" },
  { id: "bridge", name: "Bridge Watch Keeping Certificate", issuer: "PNS TARIQ (Type 21)", date: "2017", category: "Specialized Course" },
  { id: "seal", name: "Basic Navy SEAL Course", issuer: "NSOTC", date: "2018", category: "Specialized Course", detail: "Completed all modules except final phase" },
  { id: "mle", name: "Maritime Law Enforcement and Policing", issuer: "HQ PMSA", date: "2019", category: "Specialized Course" },
  { id: "lbm", name: "Life Book Mastery", issuer: "Mindvalley", date: "2020", category: "Misc / Life Skills" },
  { id: "silva", name: "Silva Ultra Mind Instructor", issuer: "Avlis Pro", date: "2019", category: "Misc / Life Skills", detail: "Certified meditation instructor" },
  { id: "hypno", name: "Certified Hypnotherapist", issuer: "First Institute of Dynamic Learning (Kamran Sultan)", date: "2020", category: "Misc / Life Skills" },
  { id: "fireglass", name: "Fire & Glass Walk Course", issuer: "First Institute of Dynamic Learning (Kamran Sultan)", date: "2020", category: "Misc / Life Skills" },
];

export const languageCourses = [
  { name: "Russian Language Course (A1) — 72 Hours", issuer: "Ural State Pedagogical University", date: "28 Oct 2024" },
  { name: "Spanish Language Course (A1)", issuer: "Centro de Lenguas Modernas (CLM), Universidad de Granada", date: "Nov 2025" },
  { name: "Spanish Language Course (B1.1)", issuer: "Centro de Lenguas Modernas (CLM), Universidad de Granada", date: "Mar 2026" },
  { name: "Spanish Language Course (B1.2)", issuer: "Centro de Lenguas Modernas (CLM), Universidad de Granada", date: "May 2026" },
  { name: "Spanish Language Course (B2.1)", issuer: "Centro de Lenguas Modernas (CLM), Universidad de Granada", date: "Jun 2026" },
  { name: "Spanish Language Course (B2.2)", issuer: "Centro de Lenguas Modernas (CLM), Universidad de Granada", date: "Jul 2026" },
];
