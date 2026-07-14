/**
 * Central content model for the portfolio.
 *
 * Content is extracted from Mageshwari's resume + FY21–FY26 accomplishment
 * roadmaps and rewritten into engineering narratives. The site reads exclusively
 * from this file. A few contact fields are marked REPLACE — swap for the values
 * you want public (e.g. a personal email instead of the work address).
 */

export const site = {
  name: "Mageshwari Singaravadivelou",
  shortName: "Mageshwari S.",
  role: "Senior Data Engineer",
  tagline:
    "I build and modernize cloud-native data platforms — migrations, governance, and pipeline optimization that cut cost and runtime while keeping data trustworthy.",
  location: "Chennai, India",
  email: "singaravadiveloumage@gmail.com",
  github: "https://github.com/MageshwariSingaravadivelou",
  linkedin: "https://www.linkedin.com/in/mageshwari-singaravadivelou",
  resumeUrl: "/resume.pdf", // add resume.pdf to /public
  url: "https://mageshwarisingaravadivelou.github.io",
  photo: "/photo.jpg",
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

/** Hero metrics — animated count-up. All values are drawn from real accomplishments. */
export const metrics: { label: string; value: number; suffix?: string; prefix?: string }[] = [
  { label: "Years in Data Engineering", value: 6, suffix: "+" },
  { label: "Annual Cost Saved", value: 29, prefix: "$", suffix: "K+" },
  { label: "Faster Pipeline Execution", value: 87, suffix: "%" },
  { label: "Storage Reclaimed", value: 5, suffix: " TB" },
];

export const specialties = [
  "Lakehouse & Unity Catalog",
  "Snowflake → Databricks Migration",
  "Pipeline Cost & Runtime Optimization",
  "Data Quality & Validation Frameworks",
];

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
    company: "LatentView Analytics — Adobe Digital Experience Marketing",
    role: "Senior Data Engineer / Assistant Manager (L3)",
    period: "Aug 2022 — Present",
    location: "Chennai, India",
    summary:
      "Own data engineering for Adobe's global Digital Experience Marketing (DXM) data platform, leading a 10+ member team and driving the migration, governance, and optimization roadmap that keeps executive marketing analytics fast and trustworthy.",
    highlights: [
      "Led the Snowflake → Databricks migration via Azure Data Factory, cutting average end-to-end execution ~87.5% (largest dataset 144 → 18 min) and retiring the legacy SSIS / Tidal / SnapLogic toolchain.",
      "Optimized the REPLICN_SF pipelines for ~$10,074/year cost savings and ~2,597 hours/year of runtime reduction; cut a core production workflow from 10 hrs to 3 hrs (~$9,700/year).",
      "Architected 'Sandbox Duster', a Flask + Databricks governance app that decommissioned 437 tables, reclaimed ~5 TB, and saved ~$9,216/year while standardizing data-retention policy.",
      "Built automated data-quality and validation frameworks (DXM Validation Dashboard Phases 1–2) delivering 99.5% data reliability, and drove the Unity Catalog cutover for the platform.",
      "Consistently rated DEL2 with client VoC scores of 8–10; mentored the team to certifications and interview panels across Bangalore/Delhi.",
    ],
    stack: [
      "Databricks",
      "Spark",
      "Unity Catalog",
      "Snowflake",
      "Azure Data Factory",
      "Azure Key Vault",
      "Power BI",
      "Python",
    ],
  },
  {
    company: "LatentView Analytics — Microsoft Marketing (Bing / Business Planning)",
    role: "Data Engineer / Senior Analyst",
    period: "Oct 2020 — Aug 2022",
    location: "Chennai, India",
    summary:
      "Owned marketing analytics pipelines and executive reporting for Microsoft's Bing campaigns and business-planning functions, turning fragmented marketing data into reliable, decision-ready dashboards.",
    highlights: [
      "Built an automated Azure pipeline (ADF + Databricks + ADLS Gen2 / Cosmos DB) to fetch, cleanse, and transform marketing data for Power BI — reducing reporting latency from 8 hours to 10 minutes.",
      "Delivered OKR-grind insights and competitor analyses (Brave Browser, Edge Bar, YouTube comment analysis) that fed product-feature release decisions.",
      "Owned MSN and Seeker Power BI dashboards end-to-end with direct client interaction, plus ETL monitoring/validation across SSIS packages.",
    ],
    stack: ["Azure Data Factory", "Databricks", "ADLS Gen2", "Cosmos DB", "SSIS", "Power BI", "SQL"],
  },
  {
    company: "LatentView Analytics — Social & Product Analytics",
    role: "Data / Analytics Engineer",
    period: "Jul 2019 — Oct 2020",
    location: "Chennai, India",
    summary:
      "Started on the data extraction and ingestion team, building the Python pipelines and ML models that powered a social-listening analytics product.",
    highlights: [
      "Developed Python extraction and validation pipelines for social-media data that were the product's primary insight source, enabling on-time delivery and new client pitches.",
      "Built Spam/Ham, sentiment, and NER models, and automated manual production steps to improve efficiency.",
    ],
    stack: ["Python", "PySpark", "SQL", "Machine Learning", "Synthesio", "Sprinklr"],
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
  diagram?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "snowflake-to-databricks-migration",
    title: "Snowflake → Databricks Migration via Azure Data Factory",
    tagline:
      "Re-platformed a marketing data estate off Snowflake and a legacy ETL toolchain onto a Databricks lakehouse — 87.5% faster, dependency-free.",
    problem:
      "Marketing data pipelines were spread across Snowflake and a brittle chain of legacy tools (SSIS, Tidal, SnapLogic). End-to-end runs were slow and fragile, and every tool added an operational and licensing tax.",
    businessContext:
      "Adobe's DXM analytics depend on timely, reliable marketing data for executive dashboards. Latency and pipeline failures directly delayed the insights stakeholders used to make product and campaign decisions.",
    challenges: [
      "Move large datasets without disrupting live reporting.",
      "Preserve correctness and row-level parity across a platform change.",
      "Remove three legacy orchestration tools without leaving coverage gaps.",
    ],
    architecture:
      "Azure Data Factory direct-copy pipelines land source data into a Databricks lakehouse (Delta) governed by Unity Catalog; transformations run on Spark and serve Power BI — replacing the Snowflake + SSIS/Tidal/SnapLogic path.",
    stack: ["Databricks", "Delta Lake", "Azure Data Factory", "Snowflake", "Unity Catalog", "Spark", "Power BI"],
    contributions: [
      "Led the migration design and execution end-to-end, from source assessment to cutover.",
      "Built the ADF direct-copy pipelines and the Databricks transformation layer that replaced the legacy tools.",
      "Validated parity and performance before decommissioning the old path.",
    ],
    decisions: [
      "Chose ADF direct-copy over the legacy staged path to eliminate intermediate hops — the single biggest driver of the runtime win.",
      "Standardized on Delta + Unity Catalog so governance and lineage came with the platform rather than bolted on.",
    ],
    performance: [
      "Average end-to-end execution time reduced ~87.5%.",
      "Largest dataset migration dropped from 144 minutes (legacy) to 18 minutes (ADF direct copy).",
    ],
    outcomes: [
      "Retired SSIS, Tidal, and SnapLogic dependencies entirely.",
      "Faster, more reliable refreshes for executive marketing dashboards; recognized by client stakeholders.",
    ],
    lessons: [
      "The cheapest performance win is usually removing hops, not tuning them.",
      "Parity validation before cutover is what makes a migration boring — in the best way.",
    ],
    featured: true,
  },
  {
    slug: "sandbox-duster",
    title: "Sandbox Duster — Enterprise Cloud Governance & Cost Platform",
    tagline:
      "A full-stack Flask + Databricks app that automates storage lifecycle management across sandbox environments — with audit, recovery, and executive visibility.",
    problem:
      "Sandbox Databricks environments accumulated orphaned tables and storage with no standardized cleanup, driving up cost and governance risk across distributed engineering teams.",
    businessContext:
      "Uncontrolled sandbox growth meant real, recurring cloud spend and compliance exposure — and no single view for leadership to reason about it.",
    challenges: [
      "Safely automate deletion/rename without risking real data loss.",
      "Give engineers a self-serve, one-click lifecycle while keeping an auditable trail.",
      "Surface storage telemetry to executives in a form they can act on.",
    ],
    architecture:
      "A Flask application integrated with Databricks: a 'One-Click' lifecycle service applies retention policy; a persistent audit/recovery layer logs every rename/deletion; and an Executive Admin Suite visualizes storage telemetry and growth trends.",
    stack: ["Flask", "Databricks", "Spark SQL", "System Tables", "Python", "PAT Auth"],
    contributions: [
      "Architected and led end-to-end development of the application.",
      "Designed the One-Click lifecycle protocol standardizing retention for distributed teams.",
      "Built the audit/recovery framework with persistent logging for 100% traceability.",
    ],
    decisions: [
      "Made every destructive action reversible-by-record (persistent audit log) so automation could be trusted.",
      "Used Spark SQL over System Tables for real-time lineage and storage-growth tracking rather than manual auditing.",
    ],
    performance: [
      "Decommissioned 437 tables and reclaimed ~5 TB of storage.",
      "Drastically reduced Mean Time to Detection (MTTD) for pipeline/storage issues via automated monitoring.",
    ],
    outcomes: [
      "~$9,216/year in storage cost savings.",
      "Enterprise-wide retention standardization and 100% compliance with internal data-handling policy.",
    ],
    lessons: [
      "Automation earns trust only when every action is auditable and recoverable.",
      "Cost governance is a product problem — executives adopt what they can see.",
    ],
    featured: true,
  },
  {
    slug: "dxm-data-quality-framework",
    title: "DXM Data Quality & Validation Framework",
    tagline:
      "Automated validation + monitoring that took marketing-data reliability to 99.5% and cut detection time for failures.",
    problem:
      "Manual auditing and daily-refresh firefighting made data reliability inconsistent and slow to diagnose, eroding stakeholder trust in the dashboards.",
    businessContext:
      "Executive marketing decisions ran on these numbers; a silent data-quality issue was a business-decision issue.",
    challenges: [
      "Catch data-quality regressions before stakeholders did.",
      "Automate validation for high-pain areas (e.g. the td_opg validation) that had caused past incidents.",
    ],
    architecture:
      "Spark SQL + System Tables power automated validation checks and lineage/health monitoring; a Power BI validation dashboard surfaces metric-level correctness (DXM Validation Dashboard Phases 1–2).",
    stack: ["Databricks", "Spark SQL", "System Tables", "Power BI", "Python"],
    contributions: [
      "Designed the validation framework and the monitoring that tracks lineage, storage growth, and pipeline health.",
      "Automated the td_opg validation that had been a major recurring pain point.",
    ],
    decisions: [
      "Shifted from manual auditing to a codified, prioritized (production vs. archive) classification so effort focused on high-risk assets.",
    ],
    performance: [
      "Achieved 99.5% data reliability.",
      "Reduced Mean Time to Detection for failures.",
    ],
    outcomes: [
      "Restored stakeholder trust; recognized by the client for automating the td_opg validation.",
      "Reduced reporting delays across the marketing analytics function.",
    ],
    lessons: [
      "Reliability is a feature you build, measure, and defend — not a state you hope for.",
    ],
    featured: true,
  },
  {
    slug: "unity-catalog-cutover",
    title: "Databricks Procedure Migration & Unity Catalog Cutover",
    tagline:
      "Migrated legacy procedures onto Databricks and moved the platform onto Unity Catalog governance, with secrets hardened via Azure Key Vault.",
    problem:
      "Daily-refresh logic lived in legacy stored procedures with ad-hoc security; the platform lacked centralized governance and lineage.",
    businessContext:
      "As the DXM platform grew, governance, security, and maintainability became first-order requirements — not nice-to-haves.",
    challenges: [
      "Port procedural ETL to Databricks without behavior drift.",
      "Cut over to Unity Catalog governance on a live platform.",
      "Remove hardcoded credentials from pipelines.",
    ],
    architecture:
      "Procedures re-implemented on Databricks/Spark; Unity Catalog provides centralized access control and lineage; Azure Key Vault secures pipeline credentials; automated ingestion scripts replace manual steps.",
    stack: ["Databricks", "Unity Catalog", "Azure Key Vault", "Spark", "Python", "Power BI"],
    contributions: [
      "Led procedure migration and the Unity Catalog cutover.",
      "Built automated data-ingestion scripts and moved secrets into Azure Key Vault.",
      "Validated table health post-migration.",
    ],
    decisions: [
      "Adopted Unity Catalog as the governance backbone so access and lineage are centrally enforced.",
    ],
    performance: [
      "Eliminated hardcoded credentials from pipelines.",
      "Reduced manual ingestion steps through automation.",
    ],
    outcomes: [
      "Centralized governance and lineage across the platform; recognized by the client for the migration and cutover.",
    ],
    lessons: [
      "Governance migrations are safest when paired with parity checks and secret hygiene in the same pass.",
    ],
    featured: false,
  },
  {
    slug: "microsoft-marketing-analytics",
    title: "Microsoft Marketing Analytics Platform",
    tagline:
      "Automated Azure pipeline that cut executive-reporting latency from 8 hours to 10 minutes.",
    problem:
      "Marketing data for Microsoft's business planning arrived through slow, manual refreshes, delaying the dashboards executives relied on.",
    businessContext:
      "Bing-campaign and MSN reporting fed OKR grinds and product-feature decisions; stale data meant stale decisions.",
    challenges: [
      "Reliable, dependency-managed refresh cycles across multiple sources.",
      "Consistent KPI availability for executive stakeholders.",
    ],
    architecture:
      "Azure Data Factory orchestrates ingestion from marketing sources into Databricks (with ADLS Gen2 / Cosmos DB), cleansing and transforming before publishing to Power BI with scheduled dependency-managed refreshes.",
    stack: ["Azure Data Factory", "Databricks", "ADLS Gen2", "Cosmos DB", "Power BI", "Python"],
    contributions: [
      "Built the end-to-end automated pipeline and scheduled orchestration.",
      "Owned MSN/Seeker dashboards and competitor analyses feeding product decisions.",
    ],
    decisions: [
      "Introduced dependency management into the orchestration so refreshes were reliable, not just fast.",
    ],
    performance: ["Reporting latency reduced from 8 hours to 10 minutes."],
    outcomes: [
      "Consistent KPI availability for executive stakeholders; multiple client appreciations.",
    ],
    lessons: [
      "Latency is a trust metric: when refreshes are fast and reliable, stakeholders start asking better questions.",
    ],
    featured: false,
  },
  {
    slug: "powerbi-dashboard-refresh-automation",
    title: "PowerBI Dashboard Refresh Automation on Azure",
    tagline:
      "Event-driven refresh — a blob change flows automatically through Logic Apps → ADF → Databricks → Power BI, with no manual steps and no local files.",
    problem:
      "Managing a large set of Power BI dashboards meant repetitive manual refreshes — error-prone, time-consuming, and dependent on files saved locally on someone's machine.",
    businessContext:
      "Teams owning many dashboards were spending real time every day on refresh mechanics. A change in the underlying data should reach the dashboard on its own, not wait for a person.",
    challenges: [
      "Trigger a refresh from a data change, not a clock.",
      "Orchestrate a multi-service flow reliably end-to-end.",
      "Refresh Power BI programmatically and keep historical files.",
    ],
    architecture:
      "Source data lands in Azure Blob Storage. Logic Apps fires on blob add/modify and triggers an Azure Data Factory pipeline, which runs a Databricks notebook to clean and update the table (with room for ML on top). Power BI is then refreshed via its REST API — a fully event-driven chain.",
    stack: [
      "Azure Blob Storage",
      "Azure Logic Apps",
      "Azure Data Factory",
      "Azure Databricks",
      "Power BI REST API",
      "Python",
    ],
    contributions: [
      "Owned and implemented the solution end-to-end; designed the event-driven architecture and selected the services.",
      "Built the Logic Apps trigger, the ADF pipeline, the Databricks notebook, and the Power BI API refresh.",
      "Authored a public blog documenting the approach for other engineers.",
    ],
    decisions: [
      "Chose event-driven (Logic Apps on blob change) over a scheduled refresh so the data drives the update — no stale windows, no wasted runs.",
      "Used Databricks as the connective + cleaning + optional-ML layer rather than a bespoke script host.",
      "Leaned on consumption-priced managed services (Logic Apps free tier, low ADF/blob cost) to keep it cheap to run.",
    ],
    performance: [
      "Eliminated manual refresh effort and the dependency on locally saved files.",
      "Reduced manual errors and preserved historical files automatically.",
    ],
    outcomes: [
      "Hands-off, always-fresh dashboards on a low-cost serverless footprint.",
      "Reusable pattern shared with the wider team via an internal blog.",
    ],
    lessons: [
      "Event-driven beats scheduled whenever data freshness is the goal.",
      "Half of a clean cloud design is choosing the right managed services for each step.",
    ],
    featured: false,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  tags: string[];
  sections: { heading?: string; body: string[] }[];
  reference?: { label: string; href: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "powerbi-dashboard-refresh-automation",
    title: "PowerBI Dashboard Refresh Automation using Azure",
    date: "2023",
    readingTime: "5 min read",
    summary:
      "How to make Power BI dashboards refresh themselves — an event-driven pipeline across Azure Blob Storage, Logic Apps, Data Factory, and Databricks that removes manual refreshes entirely.",
    tags: ["Azure", "Power BI", "Databricks", "Data Factory", "Automation"],
    sections: [
      {
        body: [
          "Manual dashboard refreshes are the kind of work that looks harmless and quietly eats your week. One or two dashboards are fine; a portfolio of them, refreshed by hand every day from files saved on someone's laptop, is a standing source of delay and mistakes. I wanted the opposite: a dashboard that updates itself the moment its data changes, with nothing living on a local machine.",
          "This post walks through the event-driven pipeline I built on Azure to do exactly that — and, more usefully, the reasoning behind each choice.",
        ],
      },
      {
        heading: "Why event-driven instead of a schedule",
        body: [
          "The default answer to \"refresh my dashboard\" is a scheduled job. Schedules are simple, but they're wrong in two directions at once: they run when nothing has changed (wasted compute) and they lag when something changes right after a run (stale data). Tying the refresh to the data event removes both problems — the pipeline does work exactly when there is work to do.",
          "So the design goal became: a new or modified file should propagate all the way to Power BI on its own.",
        ],
      },
      {
        heading: "The architecture",
        body: [
          "The chain has four Azure services, each owning one job. Source data lands in Azure Blob Storage. A Logic App watches the container and fires on any add or modify. That event kicks off an Azure Data Factory pipeline, which runs a Databricks notebook to clean the data and update the backing table. Because the Power BI dataset points at Databricks, the last step is a call to the Power BI REST API to refresh it.",
          "Blob change → Logic Apps → Data Factory → Databricks notebook → Power BI API. No scheduler, no manual export, no local files.",
        ],
      },
      {
        heading: "Implementation notes",
        body: [
          "Storage — Blob Storage is the entry point. It's cheap, tiered, and doubles as a lake for downstream analytics, so it fits both the ingestion and the long-term-retention need without a second system.",
          "Databricks — this is where the data actually becomes trustworthy: cleaning, shaping, and (optionally) ML sit in a notebook that Data Factory invokes. Keeping the logic in Databricks rather than a bespoke script host means it scales and stays observable.",
          "Data Factory — the orchestrator: linked services connect storage and Databricks, and a parameterized pipeline invokes the notebook, so onboarding a new dataset is configuration, not new code.",
          "Logic Apps & Power BI — Logic Apps is the event glue that starts the chain; the Power BI REST API is the finish line, turning \"data changed\" into \"dashboard refreshed\" with zero human steps.",
        ],
      },
      {
        heading: "What it bought us",
        body: [
          "The manual refresh disappeared, and with it the errors and the laptop-file dependency. Historical files are retained automatically, the whole thing runs on consumption-priced services (Logic Apps' free action tier, low ADF and blob cost), and the pattern is reusable — onboarding another dashboard is mostly wiring, not rebuilding.",
          "The broader lesson generalizes past Power BI: when freshness is the goal, let the data trigger the work, and let each managed service do the one thing it's best at.",
        ],
      },
    ],
    reference: {
      label: "Azure Docs — Transform data using a Databricks notebook",
      href: "https://learn.microsoft.com/en-us/azure/data-factory/transform-data-using-databricks-notebook",
    },
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
    slug: "snowflake-to-databricks-migration",
    title: "Migrating a Marketing Data Estate from Snowflake to a Databricks Lakehouse",
    executiveSummary:
      "Re-platformed Adobe DXM's marketing data off Snowflake and a legacy SSIS/Tidal/SnapLogic toolchain onto a Unity-Catalog-governed Databricks lakehouse using Azure Data Factory direct-copy. Average end-to-end execution fell ~87.5% (largest dataset 144 → 18 min) and three legacy tools were retired — with parity validated before cutover.",
    businessProblem:
      "Executive marketing dashboards depended on data that arrived through slow, fragile pipelines. Latency and failures delayed decisions, and the multi-tool ETL stack carried recurring operational and licensing cost.",
    existingSystem:
      "Data lived in Snowflake and moved through a chain of SSIS, Tidal, and SnapLogic jobs into reporting — many hops, several tools, and multiple failure points.",
    painPoints: [
      "Slow end-to-end runs; the largest dataset took ~144 minutes.",
      "Operational fragility and licensing/maintenance overhead across three orchestration tools.",
      "Governance and lineage bolted on rather than built in.",
    ],
    targetArchitecture:
      "Azure Data Factory direct-copy pipelines land source data as Delta tables in a Databricks lakehouse governed by Unity Catalog. Spark handles transformation; Power BI consumes the serving layer. The design removes intermediate staging hops and consolidates orchestration.",
    designDecisions: [
      {
        decision: "ADF direct-copy instead of the legacy staged path.",
        rationale: "Eliminating intermediate hops was the single largest contributor to the ~87.5% runtime reduction.",
      },
      {
        decision: "Delta + Unity Catalog as the foundation.",
        rationale: "Governance, access control, and lineage come with the platform instead of being maintained separately.",
      },
      {
        decision: "Validate parity before decommissioning the legacy path.",
        rationale: "De-risks cutover — the old and new paths are proven equivalent before the old one is switched off.",
      },
    ],
    tradeoffs: [
      "Investing up-front in parity validation slowed the cutover but removed correctness risk.",
      "Consolidating on one platform trades tool flexibility for operational simplicity and lower cost.",
    ],
    implementation:
      "Assessed sources, built ADF direct-copy pipelines and the Databricks transformation layer, ran old and new paths in parallel for validation, then cut over and decommissioned SSIS/Tidal/SnapLogic.",
    challenges: [
      "Moving large datasets without disrupting live reporting.",
      "Guaranteeing row-level parity across a platform change.",
    ],
    scaling:
      "Spark on Databricks scales the transformation layer horizontally; ADF direct-copy handles the largest datasets in minutes rather than hours.",
    monitoring:
      "Pipeline health and lineage tracked via Spark SQL and Databricks System Tables, reducing time-to-detection for failures.",
    security:
      "Unity Catalog centralizes access control and lineage; pipeline credentials moved into Azure Key Vault.",
    costOptimization:
      "Retiring three legacy tools removed licensing/maintenance overhead; faster runs reduced compute time. Related workstreams saved ~$10,074/year (REPLICN_SF) and ~$9,700/year (production workflow, 10 → 3 hrs).",
    lessons: [
      "The cheapest performance win is removing hops, not tuning them.",
      "Parity validation is what turns a risky migration into a routine cutover.",
    ],
    futureImprovements: [
      "Extend Unity Catalog lineage into automated data-quality expectations.",
      "Templatize the ADF-direct-copy pattern for future source onboarding.",
    ],
  },
  {
    slug: "sandbox-duster",
    title: "Sandbox Duster: Turning Cloud Storage Governance into a Product",
    executiveSummary:
      "Built a Flask + Databricks application that automates storage lifecycle management across sandbox environments with a one-click retention protocol, a persistent audit/recovery layer, and an executive telemetry suite. It decommissioned 437 tables, reclaimed ~5 TB, and saved ~$9,216/year while enforcing 100% policy compliance.",
    businessProblem:
      "Sandbox environments grew without governance, driving recurring cloud spend and compliance risk, with no leadership-level visibility into what was accumulating or why.",
    existingSystem:
      "Manual, inconsistent cleanup across distributed engineering teams; storage audited by hand with no standardized retention policy or audit trail.",
    painPoints: [
      "Recurring, avoidable storage cost.",
      "Compliance risk from unmanaged table lifecycles.",
      "No single, trustworthy view of storage telemetry for leadership.",
    ],
    targetArchitecture:
      "A Flask app integrated with Databricks: a One-Click lifecycle service applies retention policy; a persistent audit/recovery layer records every rename and deletion; an Executive Admin Suite visualizes storage telemetry and growth trends from Spark SQL over System Tables.",
    designDecisions: [
      {
        decision: "Every destructive action is recorded and recoverable.",
        rationale: "Automation is only safe to adopt when nothing is irreversible and everything is auditable.",
      },
      {
        decision: "Spark SQL over System Tables for telemetry.",
        rationale: "Real-time lineage and storage-growth tracking without maintaining a separate metadata store.",
      },
      {
        decision: "One-Click lifecycle as a self-serve protocol.",
        rationale: "Standardizes retention across distributed teams while keeping engineers in control.",
      },
    ],
    tradeoffs: [
      "Persistent audit logging adds storage/overhead — a deliberate trade for trust and compliance.",
      "A guided one-click flow constrains flexibility in favor of safety and consistency.",
    ],
    implementation:
      "Designed the lifecycle protocol and audit schema, built the Flask app and Databricks integration with PAT-based secure auth, and shipped the Executive Admin Suite for leadership visibility.",
    challenges: [
      "Safely automating deletion/rename without risking real data loss.",
      "Making telemetry legible enough for executives to act on.",
    ],
    scaling:
      "Operates across many sandbox schemas/environments; System-Tables-based telemetry scales with the workspace rather than per-table scans.",
    monitoring:
      "Persistent logging of table renames/deletions and continuous storage-growth/lineage tracking, lowering Mean Time to Detection.",
    security:
      "PAT-based secure authentication for internal API integrations; audit trail maintains 100% compliance with internal data-handling policy.",
    costOptimization:
      "Reclaimed ~5 TB by decommissioning 437 tables for ~$9,216/year in savings, and reduced ongoing storage overhead through standardized retention.",
    lessons: [
      "Automation earns trust only when every action is auditable and recoverable.",
      "Cost governance sticks when leadership can see it.",
    ],
    futureImprovements: [
      "Policy-as-code retention rules per environment.",
      "Anomaly alerts on storage-growth trends.",
    ],
  },
];

export const skillGroups: { category: string; skills: { name: string; level: number }[] }[] = [
  {
    category: "Cloud",
    skills: [
      { name: "Microsoft Azure", level: 92 },
      { name: "AWS (Redshift)", level: 70 },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Databricks", level: 92 },
      { name: "Apache Spark / PySpark", level: 90 },
      { name: "Snowflake", level: 82 },
      { name: "Azure Data Factory", level: 88 },
      { name: "Unity Catalog", level: 85 },
      { name: "ETL (SSIS / Tidal / SnapLogic)", level: 80 },
    ],
  },
  {
    category: "Languages & Storage",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 90 },
      { name: "Delta Lake", level: 85 },
      { name: "ADLS Gen2 / Cosmos DB", level: 80 },
      { name: "SQL Server / MySQL", level: 82 },
    ],
  },
  {
    category: "Analytics & Apps",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Flask / Full-Stack", level: 78 },
      { name: "Adobe Experience Platform", level: 70 },
      { name: "Machine Learning", level: 72 },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Lakehouse / Medallion", level: 88 },
      { name: "Data Governance & Quality", level: 88 },
      { name: "Cost & Performance Optimization", level: 90 },
      { name: "Pipeline Orchestration", level: 88 },
    ],
  },
];

export const achievements: { category: string; items: string[] }[] = [
  {
    category: "Performance & Cost",
    items: [
      "Snowflake → Databricks migration: ~87.5% faster end-to-end; largest dataset 144 → 18 min.",
      "REPLICN_SF pipeline optimization: ~$10,074/year saved, ~2,597 hours/year of runtime reduced.",
      "Production workflow cut from 10 hrs to 3 hrs (~$9,700/year).",
      "Sandbox Duster: ~5 TB reclaimed, 437 tables decommissioned, ~$9,216/year saved.",
      "Executive reporting latency reduced from 8 hours to 10 minutes.",
    ],
  },
  {
    category: "Reliability & Governance",
    items: [
      "99.5% data reliability via automated validation & monitoring frameworks.",
      "Led Unity Catalog cutover and moved secrets into Azure Key Vault.",
      "100% compliance with internal data-handling policy through auditable automation.",
    ],
  },
  {
    category: "Leadership & Mentoring",
    items: [
      "Led a 10+ member data engineering team; 8 of 10 hit DEL2 targets (75% exceeded).",
      "Interview panelist (Bangalore & Delhi), Databricks trainer, and certification mentor.",
      "Client VoC scores of 8–10 across review cycles.",
    ],
  },
  {
    category: "Certifications",
    items: [
      "Databricks Certified Data Engineer Professional",
      "Databricks Certified Data Engineer Associate",
      "Databricks Certified Gen AI Engineer Associate",
      "Microsoft Certified Azure Developer Associate",
    ],
  },
  {
    category: "Awards",
    items: [
      "Performance Excellence Award (cash) — leading CRM migration & ETL modernization.",
      "Spirit of LatentView — Business Impact (Jul–Sep 2021).",
      "Encore Award (Apr–Jun 2020, Oct–Dec 2022) and Spotlight Award (Sep 2019).",
    ],
  },
];
