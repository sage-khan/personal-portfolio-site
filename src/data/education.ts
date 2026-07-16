export type Education = {
  id: string;
  degree: string;
  org: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  detail?: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    id: "phd",
    degree: "Marie-Curie PhD Scholar",
    org: "IPM Lab, Universidad de Granada",
    location: "Granada, Spain",
    start: "Jul 2025",
    end: "Present",
    current: true,
    detail: "Marie Skłodowska-Curie Actions — Personal Docente e Investigador (PhD Scholar)",
    coursework: ["Artificial Intelligence", "Blockchain", "Internet of Things", "Sustainable Development", "Cyber Security", "Knowledge Graph", "Renewable Energy", "Structural Monitoring"],
  },
  {
    id: "mscys",
    degree: "Master of Science in Cyber Security",
    org: "National University of Science & Technology — Pak Navy Engineering College",
    location: "Karachi, Pakistan",
    start: "Sep 2020",
    end: "Oct 2022",
    detail: "CGPA 4.0 / 4.0 — Gold Medal",
    coursework: ["Info Sec Management", "Digital Forensics", "Artificial Intelligence", "Applied Cryptography", "SDLC", "Ethical Hacking", "Internet of Things", "Network Security"],
  },
  {
    id: "bsmis",
    degree: "Bachelor of Science in Management Information Systems",
    org: "National University of Science & Technology — Pak Navy Engineering College",
    location: "Karachi, Pakistan",
    start: "Jan 2012",
    end: "Dec 2018",
    detail: "CGPA 3.72 / 4.0",
    coursework: ["Programming", "Database", "Entrepreneurship", "Human-Computer Interaction", "Web Development", "Data Warehousing", "Organizational Behavior", "Computer Architecture", "Networking", "SDLC", "Operations Research"],
  },
  {
    id: "alevels",
    degree: "GCE A Levels",
    org: "Bahria College Karachi NORE-I",
    location: "Karachi, Pakistan",
    start: "Aug 2010",
    end: "Aug 2012",
    detail: "1A* 3A 1B 1C",
    coursework: ["Accounting (A*)", "Mathematics (A)", "Physics (A)", "Chemistry (A)", "Thinking Skills (B)", "Further Maths (C)"],
  },
  {
    id: "olevels",
    degree: "GCE O Levels",
    org: "Bahria College Karachi NORE-I",
    location: "Karachi, Pakistan",
    start: "1996",
    end: "Aug 2010",
    detail: "10 A’s",
    coursework: ["English (A)", "Urdu (A)", "Mathematics (A)", "Add. Math (A)", "Physics (A)", "Chemistry (A)", "Biology (A)", "Computer Science (A)", "Islamiat (A)", "History & Geography of Pakistan (A)"],
  },
];
