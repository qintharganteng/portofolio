
const devicon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const logo = (name) =>
  `https://api.iconify.design/logos/${name}.svg`;

const icon = (name) =>
  `https://api.iconify.design/lucide/${name}.svg?color=%235B635A`;

export const skillGroups = [
  {
    title: "Front-end & Mobile",
    skills: [
      { name: "HTML", icon: devicon("html5"), short: "HT" },
      { name: "CSS", icon: devicon("css3"), short: "CS" },
      { name: "JavaScript", icon: devicon("javascript"), short: "JS" },
      { name: "React", icon: devicon("react"), short: "RE" },
      { name: "Vite", icon: devicon("vitejs"), short: "VI" },
      { name: "Dart", icon: devicon("dart"), short: "DA" },
      { name: "Flutter", icon: devicon("flutter"), short: "FL" },
    ],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      { name: "Python", icon: devicon("python"), short: "PY" },
      { name: "SQL", icon: icon("database"), short: "SQL" },
      { name: "Data Visualization", icon: icon("chart-column-increasing"), short: "DV" },
      { name: "Scikit-learn", icon: devicon("scikitlearn"), short: "SK" },
      { name: "Predictive Modeling", icon: icon("chart-no-axes-combined"), short: "PM" },
      { name: "Power BI", icon: logo("microsoft-power-bi"), short: "BI" },
      { name: "Looker Studio", icon: "https://api.iconify.design/gcp/data-studio.svg", short: "LS" },
      { name: "Tableau", icon: devicon("tableau"), short: "TA" },
    ],
  },
  {
    title: "Quality & Engineering",
    skills: [
      { name: "Manual Testing", icon: icon("clipboard-check"), short: "MT" },
      { name: "Automated Testing", icon: icon("test-tube"), short: "AT" },
      { name: "Katalon Studio", icon: logo("katalon"), short: "KS" },
      { name: "Data Engineering", icon: icon("database-zap"), short: "DE" },
      { name: "Database Engineering", icon: icon("database"), short: "DB" },
      { name: "System Integration", icon: icon("workflow"), short: "SI" },
    ],
  },
  {
    title: "Research & Communication",
    skills: [
      { name: "Multi-Objective Optimization", icon: icon("git-merge"), short: "MO" },
      { name: "Metaheuristics", icon: icon("orbit"), short: "MH" },
      { name: "Scientific Research", icon: icon("flask-conical"), short: "SR" },
      { name: "Public Speaking", icon: icon("mic"), short: "PS" },
      { name: "Presentation", icon: icon("presentation"), short: "PR" },
    ],
  },
];
