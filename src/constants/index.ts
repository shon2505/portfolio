import { Code2, BrainCircuit, Smartphone } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

// ─── About Section ──────────────────────────────────────────
export const OFFERINGS = [
  {
    title: "FULL STACK WEB DEVELOPMENT",
    desc: "End-to-end web solutions with modern frameworks, responsive design, and seamless user experiences. Expertise in React, Next.js, and robust backends.",
    icon: Code2,
    number: "01",
  },
  {
    title: "AI & DATA SCIENCE",
    desc: "Intelligent solutions leveraging Python, machine learning models, and predictive analytics. Built platforms like OptionDost for intelligent market insights.",
    icon: BrainCircuit,
    number: "02",
  },
  {
    title: "NATIVE MOBILE DEVELOPMENT",
    desc: "High-performance native Android applications built using Java and modern mobile architecture, focusing on smooth user experiences.",
    icon: Smartphone,
    number: "03",
  },
];

// ─── Skills Section ─────────────────────────────────────────
export const SKILL_ICONS = [
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiSpringboot, name: "Spring Boot" },
  { Icon: FaPython, name: "Python" },
  { Icon: SiPandas, name: "Pandas" },
  { Icon: SiNumpy, name: "NumPy" },
  { Icon: SiScikitlearn, name: "Scikit-Learn" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiPrisma, name: "Prisma" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: FaGitAlt, name: "Git" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: FaAws, name: "AWS" },
  { Icon: SiGooglecloud, name: "GCP" },
  { Icon: FaFigma, name: "Figma" },
];

// ─── Projects Section ───────────────────────────────────────
export const PROJECTS = [
  {
    id: "cafirm",
    title: "CA FIRM AUTOMATION",
    subtitle: "Multi-Tenant CRM with AI Compliance Copilot",
    desc: "A multi-tenant CRM for Chartered Accountant firms to manage clients, statutory compliance deadlines, task assignments, and billing. Features role-based access control, tenant isolation, and an AI compliance copilot powered by Groq API that answers natural-language questions about compliance workload, overdue tasks, and client status from live CRM data.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Groq API"],
    github: "#",
    live: "#",
  },
  {
    id: "looply",
    title: "LOOPLY",
    subtitle: "Customer Loyalty & Engagement Platform",
    desc: "A full-stack loyalty platform where businesses manage customer rewards, track transactions, and run engagement campaigns. Features REST APIs powering user accounts, loyalty points, and reward redemption with role-based access for business admins and staff. Deployed on AWS.",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
    github: "#",
    live: "#",
  },
  {
    id: "stocksense",
    title: "STOCKSENSE",
    subtitle: "AI-Based Stock Sentiment Analysis Platform",
    desc: "A web platform analyzing financial news sentiment with a trained ML model to estimate stock movement trends. Features real-time TradingView chart integration, backend logic in Python, and a TypeScript frontend for interactive data visualization.",
    tags: ["Python", "TypeScript", "Machine Learning", "TradingView API", "HTML/CSS"],
    github: "#",
    live: "#",
  },
  {
    id: "sahmatipay",
    title: "SAHMATIPAY",
    subtitle: "Consent-Based Payment & Agreement Review Platform",
    desc: "A flagship fintech platform designed to secure digital transactions and financial commitments. Integrates consent-based payment authorization with an AI-driven agreement reviewer that analyzes loan documents, flags risky clauses, and verifies user understanding before consent is given.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Account Aggregator APIs", "Web Speech API"],
    github: "https://github.com/shantanu-shahane/sahmati-pay",
    live: "https://sahmati-pay.vercel.app/",
  },
  {
    id: "rescue",
    title: "RESCUE PROJECT",
    subtitle: "Real-time Emergency Dispatch & Resource Utility",
    desc: "A real-world utility application built to solve critical coordination challenges during emergencies. Streamlines resource dispatching, incident tracking, and communication pathways between responders and affected parties, ensuring faster response times and reliable status monitoring.",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Socket.io", "Geolocation"],
    github: "https://github.com/shantanu-shahane/rescue",
    live: "#",
  },
  {
    id: "gemai",
    title: "GEMAI BETA",
    subtitle: "AI Developer Assistant & Google Gemini Interface Clone",
    desc: "A high-performance replica of Google's Gemini chatbot interface, integrated with Google's Generative Language API. Features an interactive sidebar, full chat history management, theme toggling, file attachments, and voice input, offering a responsive, production-ready developer companion.",
    tags: ["React", "Gemini API", "Tailwind CSS", "Context API", "Responsive Design"],
    github: "https://github.com/shantanu-shahane/gemai-beta",
    live: "https://gemai-beta.onrender.com/",
  },
  {
    id: "optiondost",
    title: "OPTIONDOST",
    subtitle: "Options Trading & Market Analysis Platform",
    desc: "A stock market and options-chain analysis application designed to reduce trading complexity. Simplifies buy/sell understanding by presenting real-time options data, implied volatility insights, and trend signals, enabling traders to make informed, data-driven market decisions.",
    tags: ["React", "Python", "Data Analysis", "Tailwind CSS", "Node.js"],
    github: "https://github.com/shantanu-shahane/OptionDost",
    live: "#",
  },
  {
    id: "scramble",
    title: "WORD SCRAMBLE GAME",
    subtitle: "Interactive Web-Based Word Puzzle",
    desc: "A lightweight interactive word game where users guess the correct word from scrambled letters. Validates answers instantly and features a simple, engaging loop with replayability, showing practical DOM manipulation and clean game state management.",
    tags: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express.js"],
    github: "https://github.com/shantanu-shahane/word-scramble",
    live: "#",
  },
];

// ─── Experience Section ─────────────────────────────────────
export const EXPERIENCE_ITEMS = [
  {
    period: "Feb 2025 – Mar 2025",
    role: "Full Stack Developer Intern",
    company: "Eatzze · Chhatrapati Sambhajinagar",
    bullets: [
      "Developed application features using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built and tested backend REST APIs and handled database operations.",
      "Designed responsive user interfaces and improved application performance.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    period: "Jun 2023 – Sep 2023",
    role: "Software Developer Intern",
    company: "NasKraft IT Solutions Pvt. Ltd. · Chhatrapati Sambhajinagar",
    bullets: [
      "Assisted in developing Android applications and improving UI functionality.",
      "Implemented backend logic using JavaServer Pages (JSP) and integrated database connectivity.",
      "Contributed to debugging, feature implementation, and application testing.",
    ],
    tags: ["Java", "Android SDK", "JSP", "Git", "UI/UX"],
  },
];

// ─── Achievements Section ───────────────────────────────────
export const ACHIEVEMENTS = [
  {
    title: "1st Prize — Final Year Project Competition",
    subtitle: "Polytechnic",
    desc: "Won first place for building a Face Recognition Attendance System, demonstrating expertise in computer vision and real-time applications.",
    icon: "trophy",
  },
  {
    title: "Hackathon Winner — SahMati Pay",
    subtitle: "AI Financial Agreement Analyzer",
    desc: "Built an AI-powered financial agreement analyzer during a hackathon, securing the winning position with innovative consent-based payment technology.",
    icon: "medal",
  },
];

// ─── Certifications Section ─────────────────────────────────
export const CERTIFICATIONS = [
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Skill Builder" },
  { name: "Oracle Generative AI Certification", issuer: "Oracle" },
  { name: "Prompt Engineering", issuer: "Cognitive Class" },
  { name: "MongoDB + PHP", issuer: "Udemy" },
  { name: "Node.js, Express & MongoDB Bootcamp", issuer: "Udemy" },
];

// ─── Contact Section ────────────────────────────────────────
export const CONTACT_PILLS = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Backend Development",
  "Consulting",
  "DevOps",
];

export const MINI_PROJECTS = [
  {
    title: "Startup Idea Plat...",
    desc: "Community-Driven Pitch Platform",
  },
  { title: "MailForge", desc: "AI-Powered Email Campaign Tool" },
  {
    title: "Little Alien Jump...",
    desc: "Retro Arcade Platformer Game",
  },
  {
    title: "Timesheet Chatb...",
    desc: "Enterprise Conversational...",
  },
  { title: "BatterHub", desc: "Student Skill-Sharing Platform" },
  { title: "Liftly", desc: "Ride-Sharing Mobile Application" },
];

// ─── Navigation Links ──────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ─── Social / Identity ─────────────────────────────────────
export const SOCIAL_LINKS = {
  email: "work.shantanushahane@gmail.com",
  github: {
    username: "shon2505",
    url: "https://github.com/shon2505/",
  },
  linkedin: {
    name: "Shantanu Shahane",
    url: "https://www.linkedin.com/in/shantanu-shahane-ashtekar-4954251b8/",
  },
  instagram: {
    handle: "shantanuu2525",
    url: "https://www.instagram.com/shantanuu2525/",
  },
} as const;
