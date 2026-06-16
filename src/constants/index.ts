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
    period: "Present",
    role: "Software Developer Trainee",
    company: "NasKraft Pvt Ltd · Hybrid",
    bullets: [
      "Architected and developed robust Android applications utilizing native Java APIs, ensuring seamless performance across diverse device ecosystems.",
      "Built desktop applications using Java Swing, focusing on responsive layouts and intuitive user interfaces for internal tooling.",
      "Practiced solid software engineering fundamentals including version control, agile methodologies, and clean code architecture.",
    ],
    tags: ["Java", "Android SDK", "Java Swing", "Git", "UI/UX"],
  },
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
