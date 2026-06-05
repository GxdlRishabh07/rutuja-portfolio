// ═══════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this single file to customize
// ═══════════════════════════════════════════════════

export const personalInfo = {
  name: "Rutuja",
  fullName: "Rutuja Nehere",
  fullGreeting: "Hello I'm",
  title: "Data Analyst & BI Specialist",
  tagline:
    "Transforming raw data into compelling stories and actionable insights that drive business decisions.",
  email: "rutujanehere05@gmail.com",
  phone: "+91 7888036190",
  location: "Pune, Maharashtra, India",
  social: {
    linkedin: "https://linkedin.com/in/rutuja-nehere-b8b192283",
    github: "https://github.com/rutuja",
    behance: "https://behance.net/rutuja",
    instagram: "https://instagram.com/rutuja.designs",
  },
  resumeUrl: "/resume.pdf",
  profilePhoto: "/images/about/profile.jpg",
};

export const aboutIntroText =
  "I turn raw data 📊 into actionable insights and 📈 numbers into narratives. With a background in data science and business analytics, I thrive on ✌️ crafting dashboards that feel 😊 as intuitive as they are powerful. Whether it's a Power BI report or a Python pipeline, I bring data 💻 to life by making it visual, engaging, 🔍 and decision-ready. Every chart, ✨ metric, and trend should spark 🎆 understanding, and that's what I aim 🎯 to deliver.";

export const aboutBio = [
  "I'm Rutuja Nehere, a passionate Data Analyst and Business Intelligence specialist based in Pune, India. Currently pursuing my MBA in Business Analytics at MIT World Peace University, I combine strong technical skills with business acumen to deliver data-driven solutions.",
  "With a Master's in Data Science (SGPA: 9.18) and hands-on experience as a Data Analyst Intern at Elendil Pvt. Ltd., I've developed expertise in building interactive dashboards, performing exploratory data analysis, and translating complex datasets into clear, actionable insights.",
  "I believe that great data analytics is not just about numbers — it's about telling stories that empower decision-makers. Every dashboard I build, every model I train, is designed to make complex information accessible and beautiful.",
];

export const projects = [
  {
    slug: "road-accident-analysis",
    title: "Road Accident Analysis",
    description:
      "Interactive Power BI dashboard analyzing UK road accident data — uncovering casualty trends, fatality patterns, and high-risk hotspots through geospatial visualization.",
    longDescription:
      "Built a comprehensive Power BI dashboard to analyze UK road accident data, generating insights on key KPIs including casualties, fatalities, and accident trends. Applied advanced data modeling and DAX calculations to enable dynamic analysis, trend evaluation, and geospatial visualization for identifying high-risk accident hotspots.",
    image: "/images/projects/road-accident.png",
    mockupType: "laptop" as const,
    tags: ["Power BI", "DAX", "Data Modeling", "Geospatial"],
    highlights: [
      "Analyzed 300K+ accident records across UK regions",
      "Built dynamic KPI cards tracking casualties, fatalities & severity",
      "Created geospatial heatmaps identifying high-risk zones",
      "Implemented time-series trend analysis with YoY comparison",
    ],
  },
  {
    slug: "ad-performance-dashboard",
    title: "Ad Performance Dashboard",
    description:
      "Real-time advertising analytics dashboard built at Elendil Pvt. Ltd. — tracking campaign ROI, engagement metrics, and performance optimization.",
    longDescription:
      "Developed a comprehensive Power BI dashboard during my internship at Elendil Pvt. Ltd. to analyze ad performance data. Designed interactive visualizations using DAX and Power Query to identify trends, measure campaign effectiveness, and support data-driven marketing decisions.",
    image: "/images/projects/ad-performance.png",
    mockupType: "laptop" as const,
    tags: ["Power BI", "Power Query", "ETL", "Marketing Analytics"],
    highlights: [
      "Improved reporting efficiency by 40% with automated dashboards",
      "Designed interactive drill-down visualizations for campaign analysis",
      "Performed data cleaning and transformation using Power Query ETL",
      "Collaborated with marketing team to align metrics with business goals",
    ],
  },
  {
    slug: "python-data-pipeline",
    title: "Python Data Pipeline",
    description:
      "Automated data processing pipeline using Python for exploratory data analysis, cleaning, and visualization of large-scale datasets.",
    longDescription:
      "Engineered a Python-based data processing pipeline for handling and analyzing large datasets. Leveraged pandas, NumPy, and matplotlib to automate data cleaning, perform exploratory data analysis, and generate publication-ready visualizations.",
    image: "/images/projects/python-pipeline.png",
    mockupType: "phone" as const,
    tags: ["Python", "Pandas", "EDA", "Visualization"],
    highlights: [
      "Automated ETL workflows reducing manual processing by 60%",
      "Built reusable analysis modules for common data operations",
      "Generated statistical summaries and distribution analyses",
      "Created automated reporting with matplotlib and seaborn",
    ],
  },
  {
    slug: "sales-analytics",
    title: "Sales Analytics Suite",
    description:
      "End-to-end sales analytics solution with Excel and Power BI — enabling real-time tracking of revenue, regional performance, and growth trends.",
    longDescription:
      "Developed a comprehensive sales analytics suite combining Excel's pivot table capabilities with Power BI's interactive visualization. Created dynamic dashboards tracking revenue streams, regional performance metrics, and year-over-year growth trends.",
    image: "/images/projects/sales-analytics.png",
    mockupType: "laptop" as const,
    tags: ["Power BI", "Excel", "SQL", "Business Intelligence"],
    highlights: [
      "Built pivot table models tracking 50+ KPIs across regions",
      "Designed executive-level summary dashboards for C-suite reporting",
      "Implemented SQL queries for data extraction and validation",
      "Created automated weekly/monthly reporting workflows",
    ],
  },
];

export const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Data Analysis",
  "EDA",
  "Data Visualization",
  "Business Intelligence",
  "ETL Processes",
  "DAX",
  "Power Query",
  "Data Modeling",
  "Excel",
  "HTML/CSS",
  "Analytical Thinking",
  "Problem Solving",
];

export const technicalSkills = {
  languages: ["Python", "SQL", "HTML", "CSS"],
  analytics: [
    "Power BI Desktop",
    "Power BI Service",
    "DAX",
    "Power Query",
    "Data Modeling",
    "ETL",
  ],
  tools: [
    "Microsoft Excel",
    "Pivot Tables",
    "Charts",
    "Data Modeling",
    "PowerPoint",
  ],
  concepts: [
    "Data Analysis",
    "EDA",
    "Data Visualization",
    "Business Intelligence",
    "ETL Processes",
  ],
};

export const toolkit = [
  { name: "Power BI", icon: "📊" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗃️" },
  { name: "Excel", icon: "📗" },
  { name: "PowerPoint", icon: "📎" },
  { name: "Pandas", icon: "🐼" },
];

export const education = [
  {
    degree: "Masters of Business Administration",
    field: "Business Analytics",
    institution: "MIT World Peace University, Pune",
    period: "Jul 2025 – Present",
    grade: "",
  },
  {
    degree: "Masters of Science",
    field: "Data Science",
    institution: "Dr. D. Y. Patil ACS College, Pune",
    period: "2023 – 2025",
    grade: "SGPA: 9.18",
  },
  {
    degree: "Bachelors of Science",
    field: "Computer Science",
    institution: "Dr. D. Y. Patil ACS College, Pune",
    period: "2020 – 2023",
    grade: "CGPA: 8.31",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    field: "",
    institution: "Dr D. Y. Patil Junior College, Pune",
    period: "2018 – 2020",
    grade: "62.15%",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Elendil Pvt. Ltd.",
    location: "Pune, India",
    period: "Feb 2025 – Present",
    highlights: [
      "Developed Power BI dashboards to analyze ad performance, improving reporting efficiency and delivering actionable insights",
      "Designed interactive visualizations using DAX and Power Query to identify trends and support data-driven decision-making",
      "Performed data cleaning, transformation, and data modeling (ETL) to ensure accurate and scalable reporting",
      "Collaborated with cross-functional teams to translate business requirements into effective dashboard solutions",
    ],
  },
];

export const certifications = [
  {
    title: "Python Coder Badge",
    issuer: "Kaggle",
    year: "2025",
    description:
      "Validated proficiency in Python programming, data analysis, and problem-solving with real-world datasets",
  },
];

export const achievements = [
  {
    title: "Academic Excellence",
    description: "M.Sc. Data Science — SGPA: 9.18",
  },
];

export const whatDefinesMe = [
  {
    title: "Analytical Thinker",
    description: "Finding patterns in complex data",
  },
  {
    title: "Detail Oriented",
    description: "Pixel-perfect dashboards & reports",
  },
  {
    title: "Team Collaborator",
    description: "Cross-functional problem solving",
  },
  {
    title: "Lifelong Learner",
    description: "Always growing, always curious",
  },
];

export const interests = [
  "Data Analytics",
  "Business Intelligence",
  "Python Scripting",
  "Data Visualization",
  "Dashboard Design",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Flower logo goes here (center)
  { label: "Work", href: "/#projects" },
  { label: "Resume Download", href: "/resume.pdf" },
  { label: "Contact", href: "/#contact" },
];

export const siteMetadata = {
  title: "Rutuja Nehere — Data Analyst & BI Specialist",
  description:
    "Portfolio of Rutuja Nehere — Data Analyst specializing in Power BI dashboards, Python analytics, and business intelligence solutions. Turning data into decisions.",
  url: "https://rutujanehere.com",
  ogImage: "/images/og-image.png",
};
