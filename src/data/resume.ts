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
    title: "Data Analytics & BI Engineer",
    tagline:
      "Data Analyst and BI Engineer with 3+ years delivering Tableau dashboards, SQL pipelines, and Python ETL at scale — turning messy, multi-source data into insights business teams actually use.",
    email: "mankarsakshi26@gmail.com",
    phone: "+49 15511047748",
    linkedin: "https://linkedin.com/in/sakshi-m-b7a060199",
    github: "https://github.com/sakshimankar",
    location: "Magdeburg, Germany",
    about:
      "I am a Data Analyst and BI Engineer with 3+ years of hands-on experience delivering Tableau dashboards at scale, using SQL and Python for data cleaning — including 15 production dashboards for DBS Bank and telecommunications KPI automation at Samsung India Electronics. Recognised with the Samsung Go-Smart Award. Currently pursuing M.Sc. Digital Engineering at Otto-von-Guericke-University Magdeburg. I specialise in turning messy, multi-source data into reliable BI outputs that business teams actually use.",
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
        "15+ Tableau dashboards for banking and telecom KPIs, with Power BI (DAX), Advanced Excel and RLS administration.",
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
      company: "DBS Bank (via Scatterpie Analytics)",
      role: "Data Analyst",
      location: "Mumbai, India",
      period: "Sep 2025 – Mar 2026",
      description:
        "Designed and delivered 15 production Tableau dashboards tracking banking KPIs across 3 business teams, used daily by analysts and stakeholders for operational decision-making.",
      responsibilities: [
        "Designed and delivered 15 production Tableau dashboards tracking banking KPIs across 3 business teams at DBS Bank.",
        "Built and optimised Python (Pandas, NumPy) ETL pipelines integrating databases, APIs, and CSV/JSON sources into centralised, reporting-ready datasets.",
        "Optimised SQL queries and data models, reducing dashboard load times and improving data availability.",
        "Implemented end-to-end data validation and quality checks, ensuring high accuracy and consistency across all analytics outputs.",
        "Automated recurring reporting workflows in Python, cutting manual reporting effort and turnaround time.",
      ],
    },
    {
      company: "Samsung India Electronics (via Integrated Wireless Solutions)",
      role: "Executive, Tools & Automation Support",
      location: "Mumbai, India",
      period: "Jun 2023 – Jul 2025",
      description:
        "Built 10 Tableau dashboards using SQL, replacing manual Excel workflows and saving 5+ hours per week across reporting teams. Co-recipient of the Samsung Go-Smart Award (Jun 2024).",
      responsibilities: [
        "Built 10 Tableau dashboards using SQL for data cleaning and transformation, replacing manual Excel workflows and saving 5+ hours per week across reporting teams.",
        "Engineered SQL views and data models supporting seamless BI data integration and faster analyst access.",
        "Performed data cleaning, transformation, and validation in Python for 4G/5G network KPI datasets (sleeping cells, call drops, network availability).",
        "Automated recurring operational workflows using Python and Bash/Linux, reducing manual intervention across multiple teams.",
        "Co-recipient of the Samsung Go-Smart Award (Jun 2024) for team-level contribution to analytics automation.",
        "Collaborated in Agile (JIRA, Confluence) environments to deliver scalable, production-ready analytics solutions.",
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
        "Relevant focus: Data Analysis, Data Engineering, Machine Learning, Distributed Systems, Computer Science fundamentals.",
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
      title: "FA-CRS: Fairness-Aware Movie Recommender System",
      category: "ML / AI",
      techStack: ["Python", "LightGCN", "FA★IR", "FastAPI", "React"],
      description:
        "A bias-correcting movie recommender system built for a Human-Centered AI course, presented at HCAI 2026. Goes beyond accuracy to actively improve fairness in what gets recommended.",
      problem:
        "Standard recommender systems amplify existing dataset biases — female-directed and non-western films were severely underrepresented in raw model output.",
      solution:
        "Trained a LightGCN graph neural network on MovieLens-25M; applied a FA★IR fairness reranker to boost underrepresented films. Added chain-of-thought explanations for each recommendation. Delivered as a working web app (FastAPI + React). Results: region bias cut ~50%, gender bias down ~74% — with honest documentation of a supply-side limitation (high recommendation collapse due to small pool of qualifying films).",
      link: null,
    },
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
      title: "Banking KPI Dashboard Suite (DBS Bank)",
      category: "Visualization",
      techStack: ["Tableau", "SQL", "Python", "Pandas"],
      description:
        "15 production Tableau dashboards tracking banking KPIs across 3 DBS Bank business teams, used daily by analysts and stakeholders.",
      problem:
        "Banking analysts lacked a unified, reliable view of daily operational metrics.",
      solution:
        "Delivered end-to-end dashboard suite with data validation, automated ETL pipelines from multiple sources, and optimised SQL data models.",
      link: null,
    },
    {
      title: "Telecom KPI Automation Dashboard",
      category: "Visualization",
      techStack: ["Tableau", "SQL", "Python", "Bash"],
      description:
        "Pan-India KPI dashboards monitoring call drops, sleeping cells, and 4G/5G network performance for Samsung India Electronics.",
      problem:
        "Network teams spent hours on manual Excel reporting with no real-time visibility.",
      solution:
        "Automated recurring workflows, built Tableau dashboards with drill-down KPIs, saving 5+ hours per week across teams.",
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
    {
      title: "HCAI 2026 — Project Presentation",
      description:
        "Presented FA-CRS (Fairness-Aware Recommender System) at the Human-Centered AI course showcase.",
      year: "2026",
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
