import {
  Database,
  Code,
  BarChart3,
  Cloud,
  LineChart,
  PieChart,
  Award,
} from "lucide-react";

export const resumeData = {
  personal: {
    name: "Sakshi Mankar",
    title: "Data Engineer & Analytics Professional",
    tagline:
      "Data Analyst and BI Engineer with 3+ years delivering SQL pipelines, Python ETL, and Tableau dashboards at scale — turning messy data into insights business teams actually use.",
    email: "sakshimankar30@gmail.com",
    phone: "+49 15511047748",
    linkedin: "https://linkedin.com/in/sakshi-m-b7a060199",
    github: "https://github.com/sakshimankar",
    location: "Magdeburg, Germany",
    about:
      "I am a Data Analyst and BI Engineer with 3+ years of hands-on experience delivering SQL, Python ETL pipelines, and Tableau dashboards at scale — including 15 production dashboards for DBS Bank and telecom KPI automation at Samsung India Electronics. Recognised with the Samsung Go-Smart Award. Currently pursuing M.Sc. Digital Engineering at Otto-von-Guericke-University Magdeburg. I specialise in turning messy, multi-source data into reliable BI outputs.",
    resumeUrl: "/Sakshi_Mankar_Resume.pdf",
  },
  capabilities: [
    {
      title: "Data Engineering",
      description:
        "Building robust Python ETL pipelines integrating APIs, databases, and CSV/JSON sources into centralised, reporting-ready datasets.",
      icon: Database,
    },
    {
      title: "BI & Visualization",
      description:
        "15+ Tableau dashboards for banking and telecom KPIs, with Power BI, Advanced Excel and RLS administration.",
      icon: PieChart,
    },
    {
      title: "Analytics & ML",
      description:
        "Anomaly detection with Scikit-learn, KPI analysis, hypothesis testing, EDA, and statistical reporting.",
      icon: LineChart,
    },
  ],
  experience: [
    {
      company: "Scatterpie Analytics (Client: DBS Bank)",
      role: "Data Analyst",
      location: "Mumbai, India",
      period: "Sep 2025 – Mar 2026",
      description:
        "Designed and delivered 15 Tableau dashboards tracking banking KPIs across 3 business teams used daily by analysts and stakeholders.",
      responsibilities: [
        "Designed and delivered 15 Tableau dashboards tracking banking KPIs across 3 business teams at DBS Bank.",
        "Built and optimised Python (Pandas, NumPy) ETL pipelines integrating databases, APIs, and CSV/JSON sources.",
        "Optimised SQL queries and data models, reducing dashboard load times and improving data availability.",
        "Applied Scikit-learn anomaly detection techniques to flag irregularities in banking data.",
        "Automated recurring reporting workflows in Python, cutting manual reporting effort and turnaround time.",
        "Implemented end-to-end data validation and quality checks across all analytics outputs.",
      ],
    },
    {
      company: "Samsung India Electronics",
      role: "Executive — Tools & Automation Support",
      location: "Mumbai, India",
      period: "Jun 2023 – Jul 2025",
      description:
        "Built 10 Tableau dashboards using SQL, replacing manual Excel workflows and saving 5+ hours per week. Co-recipient of the Samsung Go-Smart Award (Jun 2024).",
      responsibilities: [
        "Built 10 Tableau dashboards using SQL for data cleaning and transformation, replacing manual Excel workflows and saving 5+ hours per week.",
        "Engineered SQL views and data models supporting seamless BI data integration.",
        "Performed data cleaning, transformation, and validation in Python for 4G/5G network KPI datasets.",
        "Automated recurring operational workflows using Python and Bash/Linux.",
        "Co-recipient of the Samsung Go-Smart Award (Jun 2024) for analytics automation contribution.",
        "Collaborated in Agile (JIRA, Confluence) environments to deliver scalable, production-ready analytics.",
      ],
    },
    {
      company: "Samsung India Electronics",
      role: "Graduate Engineer Trainee — Technical Support Group",
      location: "Mumbai, India",
      period: "Jun 2022 – May 2023",
      description:
        "Supported LTE/5G RAN network deployment across 500+ sites and developed Pan-India KPI dashboards.",
      responsibilities: [
        "Supported LTE/5G RAN network deployment across 500+ sites, contributing to network availability and rollout efficiency.",
        "Analysed network logs (MAC, ECCB, PCAP) using SecureCRT and WinSCP to identify root causes.",
        "Developed and maintained Pan-India KPI dashboards monitoring call drops and network performance.",
        "Executed shell scripting and EMS-based configurations to streamline network parameter updates.",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. Digital Engineering (Computer Science)",
      institution: "Otto-von-Guericke-University Magdeburg",
      location: "Saxony-Anhalt, Germany",
      period: "Apr 2026 – Present",
      details:
        "Relevant focus: Data Engineering, Machine Learning, Distributed Systems.",
    },
    {
      degree: "B.E. Electronics & Telecommunication Engineering",
      institution: "Rajiv Gandhi Institute of Technology, University of Mumbai",
      location: "Mumbai, India",
      period: "May 2022",
      details: "GPA: 9.69 / 10.0 — 1st Rank in EXTC Department",
    },
  ],
  skills: {
    categories: [
      {
        name: "Languages & Scripting",
        skills: [
          { name: "SQL", level: 92 },
          { name: "Python", level: 90 },
          { name: "Bash / Shell", level: 72 },
        ],
      },
      {
        name: "BI & Visualization",
        skills: [
          { name: "Tableau", level: 88 },
          { name: "Power BI", level: 78 },
          { name: "Advanced Excel", level: 94 },
        ],
      },
      {
        name: "Data Engineering & Cloud",
        skills: [
          { name: "ETL Pipelines", level: 85 },
          { name: "AWS (EC2/S3/RDS)", level: 78 },
          { name: "MS SQL Server", level: 82 },
        ],
      },
      {
        name: "ML & Analytics",
        skills: [
          { name: "Scikit-learn", level: 75 },
          { name: "Pandas / NumPy", level: 88 },
          { name: "Statistical Analysis", level: 80 },
        ],
      },
    ],
  },
  projects: [
    {
      title: "Real-Time Hand Gesture Recognition (LSTM + Speech)",
      category: "ML / AI",
      techStack: ["Python", "Mediapipe", "OpenCV", "LSTM", "gTTS"],
      description:
        "Vision-based system translating sign language gestures into speech for hearing- and speech-impaired users. Published in IJIRT.",
      problem:
        "Hearing- and speech-impaired users lack accessible, real-time communication tools.",
      solution:
        "Built multi-layer LSTM model using Mediapipe Holistic and OpenCV; achieved 80% categorical accuracy. Integrated Google Text-to-Speech for real-time audio output.",
      link: null,
    },
    {
      title: "Telecom KPI Automation Dashboard",
      category: "Visualization",
      techStack: ["Tableau", "SQL", "Python", "Bash"],
      description:
        "Pan-India KPI dashboards monitoring call drops, sleeping cells, and 4G/5G network performance for Samsung.",
      problem:
        "Network teams spent hours on manual Excel reporting with no real-time visibility.",
      solution:
        "Automated recurring workflows, built Tableau dashboards with drill-down KPIs, saving 5+ hours per week across teams.",
      link: null,
    },
    {
      title: "Banking KPI Dashboard Suite (DBS Bank)",
      category: "Visualization",
      techStack: ["Tableau", "SQL", "Python", "Pandas"],
      description:
        "15 production Tableau dashboards tracking banking KPIs across 3 DBS Bank business teams.",
      problem:
        "Banking analysts lacked a unified, reliable view of daily operational metrics.",
      solution:
        "Delivered end-to-end dashboard suite with anomaly detection, data validation, and automated ETL pipelines from multiple sources.",
      link: null,
    },
    {
      title: "Python ETL Pipeline Framework",
      category: "Data Engineering",
      techStack: ["Python", "Pandas", "NumPy", "SQL", "APIs"],
      description:
        "Modular ETL pipeline integrating data from databases, REST APIs, and CSV/JSON sources into centralised datasets.",
      problem:
        "Multi-source data integration was fragile and required significant manual intervention.",
      solution:
        "Built reusable Python ETL framework with validation checks, anomaly flagging via Scikit-learn, and automated reporting.",
      link: null,
    },
  ],
  certifications: [
    {
      name: "Tableau Desktop Foundations",
      issuer: "Tableau / Salesforce",
      date: "Jun 2025",
      icon: BarChart3,
    },
    {
      name: "Data Visualisation with Tableau Specialisation",
      issuer: "Coursera",
      date: "Apr 2024",
      icon: PieChart,
    },
    {
      name: "Google Data Analytics Professional",
      issuer: "Google / Coursera",
      date: "Mar 2024",
      icon: LineChart,
    },
    {
      name: "AWS Cloud Technical Essentials",
      issuer: "Coursera / AWS",
      date: "Jul 2024",
      icon: Cloud,
    },
  ],
  achievements: [
    {
      title: "Samsung Go-Smart Award",
      description:
        "Team recognition for contribution to analytics automation at Samsung India Electronics.",
      year: "Jun 2024",
      icon: Award,
    },
    {
      title: "1st Rank, EXTC Department",
      description:
        "University of Mumbai B.E. with GPA 9.69/10 — top of the department.",
      year: "2022",
      icon: Award,
    },
  ],
  publication: {
    title:
      "Real-Time Hand Gesture Recognition using LSTM Model and Conversion into Speech",
    journal:
      "International Journal of Innovative Research in Technology (IJIRT)",
    volume: "vol. 8(10), 2022, pp. 120–124",
    authors: "Sakshi M., et al.",
  },
};
