/**
 * Central content model for the portfolio.
 *
 * NOTE: Everything flagged `PLACEHOLDER` is scaffolding copy and must be replaced
 * with real, verified content extracted from Mageshwari's resume / PPTs. The site
 * reads exclusively from this file, so populating real content is a data-only edit
 * (no component changes needed).
 */

export const site = {
  name: "Mageshwari Singaravadivelou",
  shortName: "Mageshwari S.",
  role: "Senior Data Engineer",
  // One-line value proposition shown in the hero.
  tagline:
    "I architect and build cloud-native data platforms that turn raw data into measurable business value.",
  location: "PLACEHOLDER — City, Country",
  email: "PLACEHOLDER@example.com",
  github: "https://github.com/MageshwariSingaravadivelou",
  linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public
  url: "https://mageshwarisingaravadivelou.github.io",
  photo: "/photo.jpg", // drop a square headshot into /public (optional)
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Hero metrics — animated count-up. Replace values with real numbers. */
export const metrics: { label: string; value: number; suffix?: string; prefix?: string }[] = [
  { label: "Years of Experience", value: 8, suffix: "+" }, // PLACEHOLDER
  { label: "Projects Delivered", value: 25, suffix: "+" }, // PLACEHOLDER
  { label: "Cloud Platforms", value: 3 }, // PLACEHOLDER
  { label: "Pipelines Built", value: 120, suffix: "+" }, // PLACEHOLDER
];

export const specialties = [
  "Lakehouse & Medallion Architecture",
  "Batch + Streaming Pipelines",
  "Data Quality & Governance",
  "Performance & Cost Optimization",
]; // PLACEHOLDER — refine from materials

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "PLACEHOLDER — Company",
    role: "Senior Data Engineer",
    period: "2022 — Present",
    location: "Remote",
    summary:
      "PLACEHOLDER — one or two sentences framing the business challenge you owned and the platform you built.",
    highlights: [
      "PLACEHOLDER — solution built + architecture + measurable impact (e.g. cut pipeline runtime 66% → 4s).",
      "PLACEHOLDER — leadership / ownership moment.",
    ],
    stack: ["Databricks", "Spark", "Delta Lake", "Azure", "Python"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  businessContext: string;
  challenges: string[];
  architecture: string;
  stack: string[];
  contributions: string[];
  decisions: string[];
  performance: string[];
  outcomes: string[];
  lessons: string[];
  diagram?: string; // /public path to an architecture image
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "enterprise-lakehouse",
    title: "PLACEHOLDER — Enterprise Lakehouse Platform",
    tagline: "Unified batch + streaming analytics on a governed medallion lakehouse.",
    problem: "PLACEHOLDER — the concrete business/technical problem.",
    businessContext: "PLACEHOLDER — why it mattered to the business.",
    challenges: ["PLACEHOLDER challenge 1", "PLACEHOLDER challenge 2"],
    architecture:
      "PLACEHOLDER — bronze → silver → gold medallion; ingestion, transformation, serving.",
    stack: ["Databricks", "Spark", "Delta Lake", "Unity Catalog", "Azure Data Factory"],
    contributions: ["PLACEHOLDER — what YOU specifically designed/built/owned."],
    decisions: ["PLACEHOLDER — a key technical decision + the tradeoff you weighed."],
    performance: ["PLACEHOLDER — before/after metric."],
    outcomes: ["PLACEHOLDER — business outcome with a number."],
    lessons: ["PLACEHOLDER — what you'd carry forward."],
    featured: true,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  executiveSummary: string;
  businessProblem: string;
  existingSystem: string;
  painPoints: string[];
  targetArchitecture: string;
  designDecisions: { decision: string; rationale: string }[];
  tradeoffs: string[];
  implementation: string;
  challenges: string[];
  scaling: string;
  monitoring: string;
  security: string;
  costOptimization: string;
  lessons: string[];
  futureImprovements: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "realtime-consumption-platform",
    title: "PLACEHOLDER — Real-Time Consumption Analytics Platform",
    executiveSummary: "PLACEHOLDER — 3–4 line summary a hiring manager can skim.",
    businessProblem: "PLACEHOLDER",
    existingSystem: "PLACEHOLDER",
    painPoints: ["PLACEHOLDER"],
    targetArchitecture: "PLACEHOLDER",
    designDecisions: [
      { decision: "PLACEHOLDER decision", rationale: "PLACEHOLDER rationale" },
    ],
    tradeoffs: ["PLACEHOLDER"],
    implementation: "PLACEHOLDER",
    challenges: ["PLACEHOLDER"],
    scaling: "PLACEHOLDER",
    monitoring: "PLACEHOLDER",
    security: "PLACEHOLDER",
    costOptimization: "PLACEHOLDER",
    lessons: ["PLACEHOLDER"],
    futureImprovements: ["PLACEHOLDER"],
  },
];

export const skillGroups: { category: string; skills: { name: string; level: number }[] }[] = [
  {
    category: "Cloud",
    skills: [
      { name: "Azure", level: 90 },
      { name: "AWS", level: 75 },
      { name: "GCP", level: 65 },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Apache Spark", level: 92 },
      { name: "Databricks", level: 92 },
      { name: "Snowflake", level: 78 },
      { name: "Azure Data Factory", level: 85 },
      { name: "Synapse", level: 75 },
      { name: "Kafka", level: 72 },
      { name: "Airflow", level: 78 },
      { name: "dbt", level: 74 },
    ],
  },
  {
    category: "Languages & Storage",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 90 },
      { name: "Scala", level: 70 },
      { name: "Delta Lake", level: 88 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Terraform", level: 78 },
      { name: "GitHub Actions", level: 82 },
      { name: "Docker", level: 76 },
      { name: "Kubernetes", level: 65 },
      { name: "CI/CD", level: 84 },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Lakehouse", level: 90 },
      { name: "Medallion", level: 90 },
      { name: "Data Warehouse", level: 85 },
      { name: "Data Mesh", level: 72 },
      { name: "Event-Driven", level: 78 },
    ],
  },
]; // PLACEHOLDER levels — adjust to reflect real proficiency

export const achievements: { category: string; items: string[] }[] = [
  {
    category: "Performance & Cost",
    items: [
      "PLACEHOLDER — e.g. reduced a critical pipeline from hours to seconds.",
      "PLACEHOLDER — e.g. cut warehouse cost X% via query + storage optimization.",
    ],
  },
  {
    category: "Leadership & Mentoring",
    items: ["PLACEHOLDER — led initiative / mentored engineers."],
  },
  {
    category: "Certifications",
    items: ["PLACEHOLDER — e.g. Databricks Certified Data Engineer Professional."],
  },
];
