
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDialog from "../components/projects/ProjectDialog";
import "./Projects.css";

/* ==========================================
   01 — COURIER UI SCREENSHOTS
========================================== */

const courierUiPath =
  `${import.meta.env.BASE_URL}images/courier-ui/`;

const courierScreens = [
  {
    image: `${courierUiPath}01-onboarding.png`,
    title: "Welcome & Onboarding",
    detail:
      "An introductory experience presenting the courier delivery service and guiding users into the application.",
  },
  {
    image: `${courierUiPath}02-login.png`,
    title: "Courier Login",
    detail:
      "A clean authentication interface with username and password fields designed for courier access.",
  },
  {
    image: `${courierUiPath}03-dashboard.png`,
    title: "Courier Dashboard",
    detail:
      "A personalized home dashboard providing access to courier services, operational shortcuts, and information.",
  },
  {
    image: `${courierUiPath}04-services.png`,
    title: "Services & Information",
    detail:
      "An extended dashboard featuring service exploration, promotional content, and operational announcements.",
  },
  {
    image: `${courierUiPath}05-connection.png`,
    title: "Connection & Attendance",
    detail:
      "A courier activity overview with delivery progress and an attendance or QR connection interface.",
  },
  {
    image: `${courierUiPath}06-statistics.png`,
    title: "Daily Statistics",
    detail:
      "A daily performance dashboard displaying activity progress, delivery targets, and shipment timelines.",
  },
  {
    image: `${courierUiPath}07-items.png`,
    title: "Item Overview",
    detail:
      "An interface presenting parcel information and shipment details within the courier workflow.",
  },
  {
    image: `${courierUiPath}08-shipment-search.png`,
    title: "Shipment Search",
    detail:
      "A shipment lookup interface with keyword search, date filtering, and an empty-data state.",
  },
];

/* ==========================================
   MULTI-OBJECTIVE LAPTOP UI SCREENSHOTS
   Screenshot order follows supplied images
========================================== */

const optimizationUiPath =
  `${import.meta.env.BASE_URL}images/multiobjective-ui/`;

const optimizationScreens = [
  {
    image: `${optimizationUiPath}01-optimization-overview.png`,
    title: "Optimization Workspace",
    detail:
      "An NSGA-II optimization workspace presenting the algorithm, objectives, decision variables, and shipment prediction context.",
  },
  {
    image: `${optimizationUiPath}02-delivery-prediction.png`,
    title: "Delivery Risk Prediction",
    detail:
      "Shipment and weather inputs with oversla probability, classification results, delivery duration, and SLA comparison.",
  },
  {
    image: `${optimizationUiPath}03-model-performance.png`,
    title: "Machine Learning Performance",
    detail:
      "A model evaluation dashboard displaying classification and regression performance alongside training and testing data summaries.",
  },
  {
    image: `${optimizationUiPath}04-dashboard-overview.png`,
    title: "Delivery Intelligence Dashboard",
    detail:
      "An overview of datasets, encoded features, PSO-optimized model metrics, and available analytics tools.",
  },
  {
    image: `${optimizationUiPath}05-landing-page.png`,
    title: "Platform Landing Page",
    detail:
      "The public-facing introduction to the delivery intelligence system and its prediction, optimization, and explainability features.",
  },
  {
    image: `${optimizationUiPath}06-pareto-front.png`,
    title: "Pareto Front & Best Compromise",
    detail:
      "Interactive-style research visualization of Pareto solutions and a recommended compromise for delivery risk and duration.",
  },
  {
    image: `${optimizationUiPath}07-shap-explainability.png`,
    title: "Local SHAP Explainability",
    detail:
      "A feature-attribution view showing the local contributions behind delivery-risk predictions and their relative importance.",
  },
  {
    image: `${optimizationUiPath}08-before-after.png`,
    title: "Before vs After Optimization",
    detail:
      "A side-by-side comparison of baseline predictions and the optimized scenario, including risk and delivery-duration changes.",
  },
];

/* ==========================================
   02 — ADDITIONAL RESEARCH PROJECTS
========================================== */

const researchProjects = [
  {
    id: "research-backup-compliance",
    isResearchProject: true,
    visual: "backup",

    title:
      "Predicting Backup Non-Compliance Using KPI-Derived Labels and Machine Learning: A Proof-of-Concept Study",

    shortTitle: "Backup Non-Compliance Prediction",
    category: "Machine Learning Research | Data Analytics | Data Science | Data Visualization",
    year: "2026",
    role: "Research Co-author",
    status: "PUBLISHED RESEARCH",

    description:
      "A machine learning proof-of-concept for predicting KPI-derived backup non-compliance status.",

    overview:
      "This collaborative study investigates the use of KPI-derived proxy labels and supervised machine learning to estimate backup non-compliance status in enterprise IT environments. Logistic Regression, Random Forest, and XGBoost were evaluated using classification and probability-based metrics. The study explores the potential of KPI-aware monitoring while recognizing that rule-derived proxy labels are not independently audited compliance outcomes.",

    highlights: [
      "Evaluated 439 device instances with 33 features.",
      "Compared Logistic Regression, Random Forest, and XGBoost.",
      "Random Forest achieved an AUC-PR of 0.998 and an F1-score of 0.994 on KPI-derived proxy labels.",
      "Interpreted findings as proof-of-concept evidence rather than independently verified compliance detection.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "XGBoost",
      "Logistic Regression",
      "KPI Analysis",
    ],

    publication:
      "Journal of Information Systems and Informatics, Vol. 8 No. 5 (2026)",

    links: [
      {
        label: "VIEW PUBLISHED PAPER",
        href:
          "https://journal-isi.org/index.php/isi/article/view/1846",
      },
      {
        label: "VIEW CODE",
        href:
          "https://colab.research.google.com/drive/1S8BMVTzynqDJrKcXrpAQUb1ou5ATkNaT?usp=sharing",
      },
    ],
  },

  {
    id: "research-livestock-biogas",
    isResearchProject: true,
    visual: "biogas",

    title:
      "Livestock-Based Biogas Planning and Multi-Objective Optimization",

    shortTitle: "Livestock Biogas Optimization",

    category:
      "Funded Research Collaboration (Kemdiktisaintek) | Machine Learning Research",

    year: "2026",
    role: "Research Team Member",
    status: "RESEARCH COLLABORATION",

    description:
      "A collaborative research study exploring optimization for livestock-based biogas planning.",

    overview:
      "This Kemdiktisaintek-funded research collaboration explores data-driven and multi-objective optimization approaches for livestock-based biogas planning in Indonesia. The research investigates planning trade-offs and optimization strategies that may support renewable energy development and sustainable utilization of livestock waste.",

    highlights: [
      "Participating in a research collaboration funded by Kemdiktisaintek.",
      "Investigating livestock-based biogas planning in Indonesia.",
      "Exploring multi-objective optimization and metaheuristic approaches.",
      "Contributing to collaborative research and computational analysis.",
    ],

    technologies: [
      "Multi-Objective Optimization",
      "Metaheuristics",
      "Data Analysis",
      "Renewable Energy",
      "Research Collaboration",
    ],

    publication: "Kemdiktisaintek-Funded Research",

    links: [
      {
        label: "VIEW JOURNAL",
        href:
          "https://drive.google.com/file/d/1Zm1jSvR_V1shxEfuyK5EOtHX7n8W4NrJ/view?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 1",
        href:
          "https://colab.research.google.com/drive/11To4rPSYXGUul4_umqtiILEFwClmVlSo?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 2",
        href:
          "https://colab.research.google.com/drive/1-sPrI3d8ROBfwESFnvJf3OhZHi_KGODA?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 3",
        href:
          "https://colab.research.google.com/drive/1jA5XfE889BDIZoJDp3IixLuI-ajZmrrK?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 4",
        href:
          "https://colab.research.google.com/drive/1sSJDFKT66jvUVAPyfXCWcAqwt6QzRxXt?usp=sharing",
      },
    ],
  },
];

/* ==========================================
   03 — EXISTING PROJECT POPUP DETAILS
========================================== */

const existingProjectDetails = {
  /* ========================================
     COURIER — INTERNSHIP I
  ======================================== */

  courier: {
    shortTitle: "Courier Android Application",
    category: "Mobile Development / Flutter",
    year: "2025–2026",

    role: "Mobile Front-End Development Intern",
    status: "INTERNSHIP I — PT POS INDONESIA",

    overview:
      "This courier-focused mobile application interface was developed as part of my Internship I assignment at PT Pos Indonesia. The project focused on Flutter front-end development and creating a structured mobile experience for courier operations. My work covered onboarding, login, dashboard navigation, service exploration, attendance and connection screens, daily statistics, parcel information, and shipment search. The interface emphasizes clear navigation, reusable components, and operational usability. The screenshots document the application UI rather than a live production deployment.",

    highlightsLabel: "INTERNSHIP TASKS & DELIVERABLES",

    highlights: [
      "Developed Flutter interfaces for courier-oriented workflows.",
      "Designed onboarding, authentication, and dashboard screens.",
      "Created service exploration and information layouts.",
      "Developed attendance, connection, and activity monitoring interfaces.",
      "Prepared statistics, item overview, and shipment search screens.",
      "Collaborated through a shared GitHub repository.",
    ],

    technologiesLabel: "TECHNOLOGIES & FOCUS AREAS",

    technologies: [
      "Flutter",
      "Dart",
      "Android UI",
      "Mobile Front-End Development",
      "UI Components",
      "Navigation",
      "Dashboard Design",
      "GitHub",
    ],

    publicationLabel: "PROJECT CONTEXT",

    publication:
      "Internship I assignment at PT Pos Indonesia. The interactive gallery presents eight interface screenshots from onboarding to shipment search.",

    links: [
      {
        label: "VIEW GITHUB",
        href:
          "https://github.com/Internship-I/Front-end-Mail",
      },
    ],

    uiScreens: courierScreens,
  },

  /* ========================================
     NEW — MODERN CANTEEN WEBSITE
  ======================================== */

  canteen: {
    shortTitle: "Modern Canteen Website",
    category: "Front-End Development",
    year: "2024–2025",

    role: "Front-End Development",
    status: "WEB DEVELOPMENT PROJECT",

    overview:
      "Modern Canteen Website is a front-end web development project focused on presenting a modern and accessible digital experience for a cafeteria. The website uses a food-oriented visual design, clear navigation, and organized page sections to help visitors explore cafeteria information and discover menu-related content. The project emphasizes visual hierarchy, typography, layout consistency, and responsive interface development. The published web demo demonstrates the front-end experience, while the GitHub repository provides access to the implementation.",

    highlightsLabel: "PROJECT FEATURES & DEVELOPMENT",

    highlights: [
      "Developed a modern cafeteria-themed website interface.",
      "Created an organized layout for presenting food and menu-related information.",
      "Designed navigation for exploring the website's main sections.",
      "Applied consistent typography, spacing, colors, and visual hierarchy.",
      "Worked on responsive layouts for different screen sizes.",
      "Published a browser-accessible demonstration through GitHub Pages.",
      "Maintained the project source code in a GitHub repository.",
    ],

    technologiesLabel: "TECHNOLOGIES & FOCUS AREAS",

    technologies: [
      "Front-End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "UI Development",
      "GitHub",
      "GitHub Pages",
    ],

    publicationLabel: "PROJECT DEMONSTRATION",

    publication:
      "A cafeteria-themed front-end website with a public web demonstration and an accompanying GitHub repository. The demo showcases the interface; it should not be interpreted as evidence of a deployed ordering backend.",

    links: [
      {
        label: "VIEW WEB",
        href:
          "https://serlip06.github.io/fe_ATS_serli/template/",
      },
      {
        label: "VIEW GITHUB",
        href:
          "https://github.com/serlip06/fe_ATS_serli",
      },
    ],
  },

  /* ========================================
     NEW — DELIVERY DELAY PREDICTION
  ======================================== */

  prediction: {
    shortTitle: "Delivery Delay Prediction",
    category: "Machine Learning Research",
    year: "2025",

    role: "Machine Learning Research Contributor",
    status: "ACCEPTED FOR PUBLICATION — 2027",

    overview:
      "This research project investigates a hybrid machine learning approach for predicting logistics delivery delay risk. The study addresses challenges associated with imbalanced delivery data by incorporating the Synthetic Minority Over-sampling Technique (SMOTE). An Extra Trees Classifier is used for delay-risk classification, while Particle Swarm Optimization (PSO) supports model hyperparameter optimization. The workflow focuses on data preparation, model training, optimization, and evaluation to explore how machine learning can support earlier identification of potential delivery delays. The associated research manuscript has been accepted for publication in 2027 and is not yet presented here as a published article.",

    highlightsLabel: "MACHINE LEARNING WORKFLOW",

    highlights: [
      "Investigated logistics delivery delay risk as a supervised classification problem.",
      "Prepared delivery-related data for machine learning analysis.",
      "Applied SMOTE to address class imbalance during model development.",
      "Used Extra Trees Classifier for delivery delay risk prediction.",
      "Incorporated Particle Swarm Optimization (PSO) for hyperparameter tuning.",
      "Evaluated the predictive approach and documented the research workflow.",
      "Prepared a research manuscript accepted for publication in 2027.",
    ],

    technologiesLabel: "TECHNOLOGIES & METHODS",

    technologies: [
      "Python",
      "Google Colab",
      "Machine Learning",
      "Extra Trees Classifier",
      "SMOTE",
      "Particle Swarm Optimization",
      "Classification",
      "Logistics Analytics",
    ],

    publicationLabel: "RESEARCH PUBLICATION STATUS",

    publication:
      "Predicting Logistics Delivery Delay Risk Using a Hybrid SMOTE and PSO-Based Optimization Approach with Extra Trees Classifier. Accepted for publication in 2027. The journal document is linked below; publication is pending.",

    links: [
      {
        label: "VIEW CODE",
        href:
          "https://colab.research.google.com/drive/1yJamfV-2vAJL1lAxgTZuj83SdCcKy01n?usp=sharing",
      },
      {
        label: "VIEW JOURNAL",
        href:
          "https://drive.google.com/file/d/1ZJgNlb4b4X5DNVo8ZcFrjVva6JB2XQa_/view?usp=sharing",
      },
    ],
  },

  /* ========================================
     KALORIKU WEBSITE TESTING
  ======================================== */

  kaloriku: {
    shortTitle: "Kaloriku Website Testing",
    category: "Software Quality Assurance",
    year: "2025",

    role: "Quality Assurance / Software Testing",
    status: "TESTING & UAT DOCUMENTATION",

    overview:
      "Quality assurance activities for the Kaloriku website combined manual testing with automated functional testing using Katalon Studio. The work involved preparing test scenarios and test cases, checking core website functionality against expected behavior, documenting results, and organizing User Acceptance Testing (UAT) evidence. Trello was used to track activities and findings, while a shared spreadsheet documented UAT scenarios and outcomes.",

    highlightsLabel: "TESTING ACTIVITIES & DELIVERABLES",

    highlights: [
      "Prepared functional test scenarios and test cases.",
      "Performed manual testing of key website workflows.",
      "Used Katalon Studio for automated functional testing.",
      "Prepared User Acceptance Testing documentation.",
      "Organized test findings and follow-up tasks through Trello.",
    ],

    technologiesLabel: "TOOLS & TESTING METHODS",

    technologies: [
      "Manual Testing",
      "Automation Testing",
      "Katalon Studio",
      "Functional Testing",
      "Test Case Design",
      "User Acceptance Testing",
      "Trello",
      "Test Documentation",
    ],

    publicationLabel: "PROJECT DOCUMENTATION",

    publication:
      "Testing activities and issue tracking are available on Trello. UAT scenarios and documented results are available in the shared spreadsheet.",

    links: [
      {
        label: "VIEW TRELLO RESULTS",
        href:
          "https://trello.com/b/Ms59yurS/kaloriku",
      },
      {
        label: "VIEW UAT DOCUMENT",
        href:
          "https://docs.google.com/spreadsheets/d/1yJOelpT9bRrh6wKeG-LznVzAd_SMMjOB/edit?usp=sharing&ouid=101640865486361143666&rtpof=true&sd=true",
      },
    ],
  },

  /* ========================================
     MULTI-OBJECTIVE LOGISTICS OPTIMIZATION
  ======================================== */

  optimization: {
    shortTitle: "Multi-Objective Logistics Optimization",
    category: "Machine Learning Research",
    year: "2026",

    role: "Research Contributor",
    status: "RESEARCH & OPTIMIZATION STUDY",

    overview:
      "This web-based Delivery Intelligence platform combines shipment-delay prediction, contextual multi-objective optimization, and model explainability in one logistics workspace. Based on shipment and weather inputs, the system presents delivery-risk probability and duration estimates. Its optimization workflow applies NSGA-II to explore trade-offs between oversla probability and delivery duration, visualizes the Pareto front, and highlights a recommended compromise. Dedicated dashboard and SHAP views help users inspect model performance, understand feature contributions, and compare baseline predictions with optimized scenarios. The interface shown is part of my final-project work.",

    highlightsLabel: "RESEARCH WORKFLOW & HIGHLIGHTS",

    highlights: [
      "Built a web workspace for delivery-risk prediction, optimization, and analytics.",
      "Combined prediction context with NSGA-II scenario exploration.",
      "Visualized the Pareto front and recommended best-compromise solution.",
      "Presented before-and-after comparisons for delivery risk and duration.",
      "Included local SHAP explainability and performance monitoring views.",
      "Organized research experiments in three Google Colab notebooks.",
    ],

    technologiesLabel: "METHODS & TOOLS",

    technologies: [
      "Web Application",
      "Python",
      "Google Colab",
      "Random Forest",
      "Particle Swarm Optimization",
      "NSGA-II",
      "Pareto Frontier",
      "SHAP Explainability",
      "Logistics Analytics",
    ],

    publicationLabel: "RESEARCH DOCUMENT",

    publication:
      "Research manuscript and computational notebooks documenting the multi-objective logistics optimization study.",

    links: [
      {
        label: "VIEW JOURNAL",
        href:
          "https://drive.google.com/file/d/1RrG9iPzsP2Ig9ZMHc9gHySXFu_LQ8HIC/view?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 1",
        href:
          "https://colab.research.google.com/drive/1pMjWKKtIlJ8qc7D77CoyN2_aNMShHeKs?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 2",
        href:
          "https://colab.research.google.com/drive/1vQTmmEcED51MRw3aX3imVgmcEwAO9iNQ?usp=sharing",
      },
      {
        label: "VIEW CODE — PART 3",
        href:
          "https://colab.research.google.com/drive/1dER33919ipojYJv6_FlZneABlNyVQ7Q_?usp=sharing",
      },
      {
        label: "VIEW GITHUB FE",
        href: "https://github.com/qintharganteng/fe-tugas-akhir.git",
      },
      {
        label: "VIEW GITHUB BE",
        href: "https://github.com/qintharganteng/be-tugas-akhir.git",
      },
    ],

    laptopScreens: optimizationScreens,
  },

  /* ========================================
     DELIVERY DELAY LITERATURE REVIEW
  ======================================== */

  slr: {
    shortTitle: "Delivery Delay Literature Review",
    category: "Machine Learning Research",
    year: "2026",

    role: "Research Co-author",
    status: "PUBLISHED SYSTEMATIC LITERATURE REVIEW",

    overview:
      "This systematic literature review maps international research on data-driven delivery delay and estimated-time-of-arrival (ETA) prediction in logistics and transportation. The study systematically searches the scientific literature, screens records against eligibility criteria, reviews relevant full texts, extracts evidence, and synthesizes findings to answer two predefined research questions. Following the PRISMA framework, 508 records were identified and 55 studies published between 2016 and 2026 were included. The review compares machine learning, deep learning, hybrid, and modern statistical approaches across various operational conditions.",

    highlightsLabel: "SYSTEMATIC REVIEW PROCESS",

    highlights: [
      "Defined two research questions about prediction approaches and effectiveness.",
      "Identified 508 initial literature records.",
      "Applied PRISMA identification, screening, eligibility, and inclusion stages.",
      "Included 55 studies published between 2016 and 2026.",
      "Compared predictive methods, evaluation metrics, and operational settings.",
      "Identified research trends, methodological limitations, and future opportunities.",
    ],

    researchQuestions: [
      {
        id: "RQ1",
        text:
          "How are data-driven predictive models, including machine learning and modern statistical approaches, developed and applied to predict delivery delays in logistics and transportation systems?",
      },
      {
        id: "RQ2",
        text:
          "How do different predictive models perform and compare in terms of effectiveness under various operational conditions?",
      },
    ],

    technologiesLabel: "REVIEW METHODS & RESEARCH SCOPE",

    technologies: [
      "Systematic Literature Review",
      "PRISMA",
      "Literature Screening",
      "Evidence Extraction",
      "Machine Learning",
      "Deep Learning",
      "ETA Prediction",
      "Logistics & Transportation",
    ],

    publicationLabel: "PUBLISHED ARTICLE",

    publication:
      "Predictive Modeling for ETA and Delivery Delay Prediction in Logistics and Transportation: A Systematic Literature Review — Telematika.",

    links: [
      {
        label: "VIEW PUBLISHED PAPER",
        href:
          "https://ejournal.amikompurwokerto.ac.id/index.php/telematika/article/view/3307/pdf_132",
      },
    ],
  },
};

/* ==========================================
   04 — MATCH ORIGINAL PROJECT DATA
========================================== */

function getExistingProjectDetail(project) {
  const identity = [
    project.id,
    project.title,
    project.name,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let detail = null;

  if (
    identity.includes("courier") ||
    identity.includes("kurir")
  ) {
    detail = existingProjectDetails.courier;
  } else if (
    identity.includes("canteen") ||
    identity.includes("kantin") ||
    identity.includes("cafeteria")
  ) {
    detail = existingProjectDetails.canteen;
  } else if (identity.includes("kaloriku")) {
    detail = existingProjectDetails.kaloriku;
  } else if (
    /multi[\s-]?objective/.test(identity) ||
    /logistics[\s-]?optimization/.test(identity)
  ) {
    detail = existingProjectDetails.optimization;
  } else if (
    /delivery.*(literature|review)/.test(identity) ||
    /(literature|review).*delivery/.test(identity) ||
    identity.includes("systematic literature")
  ) {
    detail = existingProjectDetails.slr;
  } else if (
    identity.includes("delivery delay prediction") ||
    identity.includes("predict the delay") ||
    identity.includes("predicting logistics delivery delay") ||
    identity.includes("delivery risk prediction")
  ) {
    detail = existingProjectDetails.prediction;
  }

  if (!detail) return null;

  return {
    ...detail,
    title: project.title || detail.shortTitle,
    year: project.year || detail.year,
  };
}

/* ==========================================
   05 — RESEARCH PROJECT POSTER ARTWORK
========================================== */

function ResearchProjectArtwork({ visual }) {
  if (visual === "backup") {
    return (
      <div
        className="projects-research-artwork projects-research-artwork--backup"
        aria-hidden="true"
      >
        <span className="projects-research-artwork-label">
          DATA / COMPLIANCE / INTELLIGENCE
        </span>

        <svg
          viewBox="0 0 480 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="75" y="38"
            width="330" height="185"
            rx="12" fill="#F6F8F3"
          />

          <rect
            x="75" y="38"
            width="330" height="32"
            rx="12" fill="#D8E3D7"
          />

          <path
            d="M75 60 H405"
            stroke="#B7C7B6"
          />

          <circle cx="94" cy="54" r="4" fill="#E87532" />
          <circle cx="108" cy="54" r="4" fill="#8AAE91" />
          <circle cx="122" cy="54" r="4" fill="#8AAE91" />

          <path
            d="M100 105 H380 M100 145 H380 M100 185 H380"
            stroke="#D7E0D5"
            strokeDasharray="5 7"
          />

          {[
            [112, 146, 45],
            [153, 124, 67],
            [194, 135, 56],
            [235, 99, 92],
            [276, 111, 80],
            [317, 85, 106],
          ].map(([x, y, height], index) => (
            <rect
              key={x}
              x={x}
              y={y}
              width="27"
              height={height}
              rx="3"
              fill={index === 3 ? "#E87532" : "#A5BDA7"}
            />
          ))}

          <path
            d="M112 132 L166 105 L207 116 L248 79 L290 87 L331 66"
            stroke="#325A43"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="248" cy="79" r="7" fill="#E87532" />

          <rect
            x="288" y="200"
            width="135" height="33"
            rx="6" fill="#274B36"
          />

          <circle cx="304" cy="216" r="5" fill="#E87532" />

          <path
            d="M318 216 H403"
            stroke="#D9E7D6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="15 5"
          />
        </svg>

        <span className="projects-research-artwork-footer">
          KPI-DRIVEN MACHINE LEARNING
        </span>
      </div>
    );
  }

  return (
    <div
      className="projects-research-artwork projects-research-artwork--biogas"
      aria-hidden="true"
    >
      <span className="projects-research-artwork-label">
        SUSTAINABILITY / OPTIMIZATION / ENERGY
      </span>

      <svg
        viewBox="0 0 480 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="240" cy="132" r="100"
          stroke="#B9CFB8"
          strokeWidth="2"
          strokeDasharray="8 10"
        />

        <circle
          cx="240" cy="132" r="75"
          fill="#DFE9D8"
        />

        <path
          d="M175 147 Q175 84 240 84 Q305 84 305 147"
          fill="#8CAD92"
          stroke="#325E44"
          strokeWidth="4"
        />

        <rect
          x="175" y="145"
          width="130" height="58"
          rx="5" fill="#456E52"
        />

        <rect
          x="188" y="159"
          width="104" height="28"
          rx="3" fill="#6D9474"
        />

        <path
          d="M240 84 V55 H311"
          stroke="#325E44"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect
          x="305" y="43"
          width="28" height="25"
          rx="4" fill="#E87532"
        />

        <circle cx="222" cy="122" r="7" fill="#F5F7E9" />
        <circle cx="243" cy="110" r="5" fill="#F5F7E9" />
        <circle cx="262" cy="129" r="9" fill="#F5F7E9" />

        <path
          d="M158 175 H117 V205"
          stroke="#456E52"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M305 175 H361 V205"
          stroke="#456E52"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="116" cy="71" r="18" fill="#E87532" />

        <path
          d="M108 71 L114 77 L126 64"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="371" cy="114" r="18" fill="#325E44" />

        <path
          d="M371 102 V126 M359 114 H383"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M152 70 Q169 46 196 42"
          stroke="#E87532"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M188 34 L197 42 L188 51"
          stroke="#E87532"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="projects-research-artwork-footer">
        MULTI-OBJECTIVE RESEARCH
      </span>
    </div>
  );
}

/* ==========================================
   06 — RESEARCH PROJECT CARD
========================================== */

function ResearchProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      className="projects-research-card"
      onClick={() => onOpen(project)}
      aria-label={`View project: ${project.title}`}
    >
      <ResearchProjectArtwork visual={project.visual} />

      <div className="projects-research-card-content">
        <div className="projects-research-card-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.shortTitle}</h3>

        <p>{project.description}</p>

        <div className="projects-research-card-footer">
          <span className="projects-research-role">
            {project.role}
          </span>

          <span className="project-view-action">
            VIEW PROJECT
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </button>
  );
}

/* ==========================================
   07 — COURIER UI GALLERY
========================================== */

function CourierUIGallery({ screens, reduceMotion }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const pointerStartRef = useRef(null);

  const total = screens.length;
  const activeScreen = screens[activeIndex];

  function moveScreen(step) {
    setDirection(step);

    setActiveIndex(
      (current) => (current + step + total) % total
    );
  }

  function selectScreen(index) {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleSwipe(event) {
    if (pointerStartRef.current === null) return;

    const distance =
      event.clientX - pointerStartRef.current;

    pointerStartRef.current = null;

    if (Math.abs(distance) < 45) return;

    moveScreen(distance < 0 ? 1 : -1);
  }

  function handleGalleryKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveScreen(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveScreen(-1);
    }
  }

  return (
    <div
      className="projects-courier-gallery"
      aria-label="Courier Android interface showcase"
    >
      <div className="projects-courier-gallery-header">
        <span>ANDROID / INTERACTIVE UI SHOWCASE</span>

        <span>
          {String(activeIndex + 1).padStart(2, "0")}
          {" / "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="projects-courier-gallery-layout">

        {/* ANDROID MOCKUP */}

        <div className="projects-courier-device-stage">
          <div className="projects-courier-phone">

            <div
              className="projects-courier-phone-speaker"
              aria-hidden="true"
            />

            <div
              className="projects-courier-phone-screen"
              role="group"
              tabIndex={0}
              aria-label={`Screen ${activeIndex + 1}: ${activeScreen.title}. Swipe or use arrow keys.`}
              onKeyDown={handleGalleryKeyDown}
              onPointerDown={(event) => {
                pointerStartRef.current = event.clientX;
              }}
              onPointerUp={handleSwipe}
              onPointerCancel={() => {
                pointerStartRef.current = null;
              }}
            >
              <AnimatePresence
                initial={false}
                mode="wait"
              >
                <motion.img
                  key={activeScreen.image}
                  src={activeScreen.image}
                  alt={`${activeScreen.title} — courier application interface`}
                  draggable={false}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: direction * 55 }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction * -55,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.27,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>
            </div>

            <div
              className="projects-courier-phone-home"
              aria-hidden="true"
            />

          </div>
        </div>

        {/* GALLERY INFORMATION */}

        <div className="projects-courier-gallery-info">
          <span className="projects-courier-gallery-step">
            SCREEN {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <h3 aria-live="polite" aria-atomic="true">
            {activeScreen.title}
          </h3>

          <p>{activeScreen.detail}</p>

          <div className="projects-courier-gallery-actions">
            <button
              type="button"
              onClick={() => moveScreen(-1)}
              aria-label="Previous UI screen"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => moveScreen(1)}
              aria-label="Next UI screen"
            >
              →
            </button>

            <span>SWIPE TO EXPLORE</span>
          </div>

          <div
            className="projects-courier-gallery-pagination"
            aria-label="Choose an application screen"
          >
            {screens.map((screen, index) => (
              <button
                key={screen.image}
                type="button"
                className={
                  index === activeIndex ? "is-active" : ""
                }
                onClick={() => selectScreen(index)}
                aria-label={`Show screen ${index + 1}: ${screen.title}`}
                aria-current={
                  index === activeIndex ? "step" : undefined
                }
              />
            ))}
          </div>

          <p className="projects-courier-gallery-note">
            Interactive screenshot preview — not a running APK.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ==========================================
   08 — MULTI-OBJECTIVE LAPTOP UI GALLERY
========================================== */

function OptimizationLaptopGallery({ screens, reduceMotion }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pointerStartRef = useRef(null);

  const total = screens.length;
  const activeScreen = screens[activeIndex];

  function moveSlide(step) {
    setDirection(step);
    setActiveIndex((current) => (current + step + total) % total);
  }

  function selectSlide(index) {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    }
  }

  function handlePointerUp(event) {
    if (pointerStartRef.current == null) return;
    const delta = event.clientX - pointerStartRef.current;
    pointerStartRef.current = null;
    if (Math.abs(delta) >= 45) moveSlide(delta < 0 ? 1 : -1);
  }

  return (
    <section
      className="projects-laptop-gallery"
      aria-label="Multi-Objective Logistics Optimization desktop UI showcase"
    >
      <header className="projects-laptop-gallery-header">
        <span>DESKTOP / INTERACTIVE WEB SHOWCASE</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")}
          {" / "}
          {String(total).padStart(2, "0")}
        </span>
      </header>

      <div className="projects-laptop-stage">
        <div className="projects-laptop-screen-frame">
          <div className="projects-laptop-camera" aria-hidden="true" />
          <div
            className="projects-laptop-screen"
            tabIndex={0}
            role="region"
            aria-label={`Screenshot ${activeIndex + 1} of ${total}: ${activeScreen.title}. Use arrow keys or swipe to navigate.`}
            onKeyDown={handleKeyDown}
            onPointerDown={(event) => {
              pointerStartRef.current = event.clientX;
            }}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStartRef.current = null;
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={activeScreen.image}
                src={activeScreen.image}
                alt={`${activeScreen.title} — desktop logistics dashboard screenshot`}
                draggable={false}
                decoding="async"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: direction * 48 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * -48 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="projects-laptop-base" aria-hidden="true">
          <span className="projects-laptop-notch" />
        </div>
      </div>

      <div className="projects-laptop-gallery-info">
        <div className="projects-laptop-gallery-copy" aria-live="polite">
          <span className="projects-laptop-gallery-step">
            SCREEN {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <h3>{activeScreen.title}</h3>
          <p>{activeScreen.detail}</p>
        </div>

        <div className="projects-laptop-gallery-nav">
          <div className="projects-laptop-gallery-arrows">
            <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous desktop screenshot">←</button>
            <button type="button" onClick={() => moveSlide(1)} aria-label="Next desktop screenshot">→</button>
          </div>
          <div className="projects-laptop-gallery-dots" aria-label="Choose a desktop screenshot">
            {screens.map((screen, index) => (
              <button
                key={screen.image}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => selectSlide(index)}
                aria-label={`Show screenshot ${index + 1}: ${screen.title}`}
                aria-current={index === activeIndex ? "step" : undefined}
              />
            ))}
          </div>
          <span className="projects-laptop-gallery-hint">SWIPE / USE ARROW KEYS</span>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   08 — SHARED PROJECT DETAIL POPUP
========================================== */

function DetailedProjectDialog({
  project,
  onClose,
  returnFocusRef,
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const uiGalleryRef = useRef(null);
  const uiOpenRef = useRef(false);

  const [showUi, setShowUi] = useState(false);
  const reduceMotion = useReducedMotion();

  /* Gallery scroll */

  useEffect(() => {
    uiOpenRef.current = showUi;

    if (showUi) {
      uiGalleryRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }, [showUi, reduceMotion]);

  /* Modal keyboard, focus and scroll lock */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();

        if (uiOpenRef.current) {
          uiOpenRef.current = false;
          setShowUi(false);
        } else {
          onClose();
        }

        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex="0"]'
        ) ?? []
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      returnFocusRef.current?.focus();
    };
  }, [onClose, returnFocusRef]);

  return createPortal(
    <div
      className="projects-research-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={`projects-research-dialog ${
          project.laptopScreens?.length > 0
            ? "projects-research-dialog--laptop"
            : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="research-dialog-title"
        aria-describedby="research-dialog-description"
      >

        {/* POPUP HEADER */}

        <div className="projects-research-dialog-header">
          <div>
            <span className="projects-research-dialog-eyebrow">
              {project.category} / {project.year}
            </span>

            <h2 id="research-dialog-title">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="projects-research-dialog-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        {/* POPUP BODY */}

        <div className="projects-research-dialog-body">

          <div className="projects-research-dialog-info">
            <div>
              <span>ROLE</span>
              <strong>{project.role}</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>{project.status}</strong>
            </div>
          </div>

          {/* OVERVIEW */}

          <div className="projects-research-dialog-section">
            <span className="projects-research-dialog-label">
              PROJECT OVERVIEW
            </span>

            <p id="research-dialog-description">
              {project.overview}
            </p>
          </div>

          {/* HIGHLIGHTS */}

          {project.highlights?.length > 0 && (
            <div className="projects-research-dialog-section">
              <span className="projects-research-dialog-label">
                {project.highlightsLabel || "RESEARCH HIGHLIGHTS"}
              </span>

              <ul className="projects-research-dialog-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* RESEARCH QUESTIONS */}

          {project.researchQuestions?.length > 0 && (
            <div className="projects-research-dialog-section">
              <span className="projects-research-dialog-label">
                RESEARCH QUESTIONS
              </span>

              <div className="projects-research-dialog-rq-list">
                {project.researchQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="projects-research-dialog-rq"
                  >
                    <strong>{question.id}</strong>
                    <p>{question.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TECHNOLOGIES */}

          {project.technologies?.length > 0 && (
            <div className="projects-research-dialog-section">
              <span className="projects-research-dialog-label">
                {project.technologiesLabel || "TECHNOLOGIES & METHODS"}
              </span>

              <div className="projects-research-dialog-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* PUBLICATION / PROJECT CONTEXT */}

          {project.publication && (
            <div className="projects-research-dialog-section">
              <span className="projects-research-dialog-label">
                {project.publicationLabel || "RESEARCH / PUBLICATION"}
              </span>

              <p>{project.publication}</p>
            </div>
          )}

          {/* PROJECT RESOURCE LINKS */}

          {(project.links?.length > 0 ||
            project.uiScreens?.length > 0 ||
            project.laptopScreens?.length > 0) && (
            <div className="projects-research-dialog-section">
              <span className="projects-research-dialog-label">
                PROJECT RESOURCES
              </span>

              <nav
                className="projects-research-dialog-links"
                aria-label={`Resources for ${project.shortTitle || project.title}`}
              >
                {(project.links ?? []).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} — ${project.shortTitle || project.title}`}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}

                {/* COURIER OR LAPTOP UI */}

                {(project.uiScreens?.length > 0 ||
                  project.laptopScreens?.length > 0) && (
                  <button
                    type="button"
                    className="projects-research-dialog-ui-button"
                    onClick={() =>
                      setShowUi((current) => !current)
                    }
                    aria-expanded={showUi}
                    aria-controls={
                      project.laptopScreens?.length > 0
                        ? "optimization-ui-gallery"
                        : "courier-ui-gallery"
                    }
                  >
                    <span>
                      {showUi ? "HIDE UI" : "VIEW UI"}
                    </span>

                    <span aria-hidden="true">
                      {showUi ? "−" : "↗"}
                    </span>
                  </button>
                )}
              </nav>
            </div>
          )}

          {/* COURIER INTERACTIVE UI */}

          {project.uiScreens?.length > 0 && (
            <AnimatePresence initial={false}>
              {showUi && (
                <motion.div
                  ref={uiGalleryRef}
                  key="courier-ui"
                  id="courier-ui-gallery"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                  }}
                >
                  <CourierUIGallery
                    screens={project.uiScreens}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* MULTI-OBJECTIVE INTERACTIVE LAPTOP UI */}

          {project.laptopScreens?.length > 0 && (
            <AnimatePresence initial={false}>
              {showUi && (
                <motion.div
                  ref={uiGalleryRef}
                  key="optimization-ui"
                  id="optimization-ui-gallery"
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                >
                  <OptimizationLaptopGallery
                    screens={project.laptopScreens}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

/* ==========================================
   09 — MAIN PROJECTS SECTION
========================================== */

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [selectedDetailedProject, setSelectedDetailedProject] =
    useState(null);

  const returnFocusRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const allProjects = [
    ...projects,
    ...researchProjects,
  ];

  const totalProjects = String(
    allProjects.length
  ).padStart(2, "0");

  const closeDetailedDialog = useCallback(() => {
    setSelectedDetailedProject(null);
  }, []);

  function openDetailedDialog(project) {
    returnFocusRef.current = document.activeElement;
    setSelectedDetailedProject(project);
  }

  function openExistingProject(project) {
    const detailedContent =
      getExistingProjectDetail(project);

    if (detailedContent) {
      openDetailedDialog(detailedContent);
    } else {
      setSelectedProject(project);
    }
  }

  return (
    <section
      id="work"
      className="section-space projects-section"
      aria-labelledby="projects-title"
    >
      <div className="page-shell">

        {/* HEADER */}

        <header className="projects-header">
          <div className="projects-header-left">
            <h2
              id="projects-title"
              className="projects-title"
            >
              A selection

              <span className="projects-title-second">
                of work
                <span className="projects-title-dot">
                  .
                </span>
              </span>
            </h2>
          </div>

          <div className="projects-header-right">
            <p>
              A curated selection of digital experiences,
              interfaces, analytical work, and research.
              Each project reflects a different challenge
              and an opportunity to build something
              meaningful.
            </p>

            <div className="projects-count">
              <strong>{totalProjects}</strong>

              <span>
                SELECTED
                <br />
                PROJECTS
              </span>
            </div>
          </div>
        </header>

        {/* PROJECT CARDS */}

        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id ?? index}
              className="projects-item"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 26 }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion
                  ? 0
                  : (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="projects-item-content">
                {project.isResearchProject ? (
                  <ResearchProjectCard
                    project={project}
                    onOpen={openDetailedDialog}
                  />
                ) : (
                  <ProjectCard
                    project={project}
                    index={index}
                    onOpen={openExistingProject}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}

        <div className="projects-end">
          <p>
            Thoughtfully built. Continuously evolving.
          </p>
        </div>

      </div>

      {/* DEFAULT POPUP FOR UNMATCHED PROJECTS */}

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* SHARED POPUP FOR DETAILED PROJECTS */}

      {selectedDetailedProject && (
        <DetailedProjectDialog
          project={selectedDetailedProject}
          onClose={closeDetailedDialog}
          returnFocusRef={returnFocusRef}
        />
      )}
    </section>
  );
}
