
import { motion, useReducedMotion } from "motion/react";

import { publications } from "../data/research";
import "./Research.css";

/* ==========================================
   RESEARCH CONFIGURATION
========================================== */

const RESEARCH_STYLES = [
  "logistics",
  "review",
  "backup",
  "book",
];

const JUTIF_PDF_URL =
  "https://drive.google.com/file/d/1qZGXU0jPXxsAcVNgi67A-2rXcV2cLNxe/view?usp=sharing";

function getResearchStyle(index) {
  return RESEARCH_STYLES[index] ?? "review";
}

/* ==========================================
   LOGISTICS ARTWORK
========================================== */

function LogisticsArtwork() {
  return (
    <div
      className="research-artwork research-artwork--logistics"
      aria-hidden="true"
    >
      <div className="research-logistics-grid" />

      <svg
        className="research-logistics-map"
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#799786"
          strokeWidth="1"
          opacity="0.3"
        >
          <path d="M0 100 H600" />
          <path d="M0 200 H600" />
          <path d="M0 300 H600" />
          <path d="M100 0 V360" />
          <path d="M250 0 V360" />
          <path d="M400 0 V360" />
          <path d="M550 0 V360" />
        </g>

        <path
          d="M55 275 C115 275 132 115 215 143 S315 292 375 201 S466 87 553 71"
          stroke="#D8E6CF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2 13"
        />

        <path
          d="M55 275 C115 275 132 115 215 143 S315 292 375 201 S466 87 553 71"
          stroke="#E87532"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />

        <circle cx="55" cy="275" r="13" fill="#F1EFE4" />
        <circle cx="55" cy="275" r="5" fill="#C6D8CF" />

        <circle cx="215" cy="143" r="11" fill="#E87532" />
        <circle cx="215" cy="143" r="4" fill="#F9F5E9" />

        <circle cx="375" cy="201" r="11" fill="#E87532" />
        <circle cx="375" cy="201" r="4" fill="#F9F5E9" />

        <circle cx="553" cy="71" r="14" fill="#F1EFE4" />
        <circle cx="553" cy="71" r="6" fill="#244132" />
      </svg>

      <div className="research-logistics-label research-logistics-label--one">
        ORIGIN / A
      </div>

      <div className="research-logistics-label research-logistics-label--two">
        DESTINATION / B
      </div>

      <div className="research-logistics-annotation">
        <span>MODEL INPUT</span>
        <span>RISK EVALUATION</span>
        <span>DATA ANALYSIS</span>
        <span>DATA VISUALIZATION</span>
      </div>
    </div>
  );
}

/* ==========================================
   LITERATURE REVIEW ARTWORK
========================================== */

function ReviewArtwork() {
  return (
    <div
      className="research-artwork research-artwork--review"
      aria-hidden="true"
    >
      <div className="research-review-paper">
        <div className="research-review-paper-top">
          <span>RESEARCH NOTES</span>
          <span>SLR / 2026</span>
        </div>

        <strong>
          Evidence
          <br />
          Mapping.
        </strong>

        <div className="research-review-diagram">
          <span className="research-review-node">
            SEARCH
          </span>

          <span className="research-review-connector" />

          <span className="research-review-node">
            SCREEN
          </span>

          <span className="research-review-connector" />

          <span className="research-review-node">
            REVIEW
          </span>
        </div>

        <div className="research-review-lines">
          <span />
          <span />
          <span />
        </div>
      </div>

      <span className="research-review-stamp">
        LITERATURE
        <br />
        STUDY
      </span>
    </div>
  );
}

/* ==========================================
   BACKUP COMPLIANCE ARTWORK
========================================== */

function BackupArtwork() {
  return (
    <div
      className="research-artwork research-artwork--backup"
      aria-hidden="true"
    >
      <div className="research-backup-window">

        <div className="research-backup-toolbar">
          <span className="research-backup-dots">
            <i />
            <i />
            <i />
          </span>

          <small>COMPLIANCE / LAB</small>
        </div>

        <div className="research-backup-body">
          <div className="research-backup-symbol">
            <svg
              viewBox="0 0 90 90"
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 8 L74 20 V41 C74 60 62 74 45 82 C28 74 16 60 16 41 V20 Z"
                stroke="currentColor"
                strokeWidth="3"
              />

              <path
                d="M31 44 L41 54 L60 34"
                stroke="#E87532"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="research-backup-signals">
            <span>DATA INTEGRITY</span>
            <i />
            <span>POLICY CHECK</span>
            <i />
            <span>MODEL EVALUATION</span>
          </div>
        </div>

        <div className="research-backup-footer">
          <span>QUALITY ASSURANCE</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   BOOK ARTWORK
========================================== */

function BookArtwork() {
  return (
    <div
      className="research-artwork research-artwork--book"
      aria-hidden="true"
    >
      <div className="research-book-circle" />

      <div className="research-book-object">
        <div className="research-book-spine" />

        <div className="research-book-cover">
          <span className="research-book-cover-top">
            WEB DEVELOPMENT / PHP
          </span>

          <strong>
            TOKO
            <br />
            KUE.
          </strong>

          <div className="research-cake">
            <span className="research-cake-cherry" />
            <span className="research-cake-cream" />
            <span className="research-cake-base" />
          </div>

          <span className="research-book-cover-bottom">
            WEBSITE DEVELOPMENT
          </span>
        </div>
      </div>

      <span className="research-book-edition">
        PRINT
        <br />
        EDITION
      </span>
    </div>
  );
}

/* ==========================================
   ARTWORK SELECTOR
========================================== */

function ResearchArtwork({ kind }) {
  switch (kind) {
    case "logistics":
      return <LogisticsArtwork />;

    case "backup":
      return <BackupArtwork />;

    case "book":
      return <BookArtwork />;

    default:
      return <ReviewArtwork />;
  }
}

/* ==========================================
   RESEARCH POSTER
========================================== */

function ResearchPoster({
  publication,
  index,
  featured = false,
}) {
  if (!publication) return null;

  const kind = getResearchStyle(index);
  const isJutif = publication.id === "pub-1";

  const hasCardLink =
    !isJutif && Boolean(publication.url);

  const Wrapper = hasCardLink ? "a" : "article";

  const linkProps = hasCardLink
    ? {
        href: publication.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open publication: ${publication.title}`,
      }
    : {};

  const posterClassName = [
    "research-poster",
    `research-poster--${kind}`,
    featured && "research-poster--featured",
    hasCardLink && "is-linked",
    !hasCardLink && !isJutif && "is-pending",
    isJutif && "has-pdf",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper
      className={posterClassName}
      {...linkProps}
    >
      {/* EDITORIAL ARTWORK */}

      <ResearchArtwork kind={kind} />

      {/* POSTER CONTENT */}

      <div className="research-poster-content">

        <div className="research-poster-top">
          <span className="research-poster-category">
            {publication.type || "Research"}
          </span>

          <span className="research-poster-year">
            {publication.year}
          </span>
        </div>

        {/* FEATURED HEADLINE */}

        {featured && (
          <div className="research-poster-display">
            <span>RESEARCH / INTELLIGENCE</span>

            <strong>
              Ahead of
              <br />
              the <em>delay.</em>
            </strong>
          </div>
        )}

        {/* PUBLICATION DETAILS */}

        <div className="research-poster-bottom">
          <span className="research-poster-index">
            {String(index + 1).padStart(3, "0")}
            {" / "}
            {featured ? "FEATURED STUDY" : "SELECTED WORK"}
          </span>

          <h3 title={publication.title}>
            {publication.title}
          </h3>

          {publication.publisher && (
            <p>{publication.publisher}</p>
          )}

          {publication.status && (
            <span className="research-poster-status">
              {publication.status}
            </span>
          )}

          {/* GOOGLE DRIVE PDF */}

          {isJutif && (
            <a
              className="research-pdf-label"
              href={JUTIF_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open JUTIF research paper PDF"
            >
              <span>VIEW PDF</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* CORNER ACTION FOR OTHER PUBLICATIONS */}

      {!isJutif && (
        <span
          className={`research-poster-action ${
            !hasCardLink ? "is-disabled" : ""
          }`}
          aria-hidden="true"
        >
          {hasCardLink ? "↗" : "—"}
        </span>
      )}
    </Wrapper>
  );
}

/* ==========================================
   MAIN RESEARCH SECTION
========================================== */

export default function Research() {
  const reduceMotion = useReducedMotion();

  if (!publications.length) return null;

  const featuredPublication = publications[0];
  const leftPublications = publications.slice(1, 3);
  const rightPublication = publications[3];
  const additionalPublications = publications.slice(4);

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            y: 24,
          },
          whileInView: {
            opacity: 1,
            y: 0,
          },
          viewport: {
            once: true,
            amount: 0.12,
          },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section
      id="research"
      className="section-space research-section"
      aria-labelledby="research-heading"
    >
      <div className="research-shell page-shell">

        {/* EDITORIAL RESEARCH GRID */}

        <div className="research-magazine">

          {/* LEFT — TWO RESEARCH POSTERS */}

          <motion.div
            className="research-left-column"
            {...reveal(0.04)}
          >
            {leftPublications.map((publication, index) => (
              <ResearchPoster
                key={publication.id ?? index}
                publication={publication}
                index={index + 1}
              />
            ))}
          </motion.div>

          {/* CENTER — FEATURED RESEARCH */}

          <motion.div
            className="research-center-column"
            {...reveal(0.1)}
          >
            <ResearchPoster
              publication={featuredPublication}
              index={0}
              featured
            />
          </motion.div>

          {/* RIGHT — INTRODUCTION & BOOK */}

          <motion.div
            className="research-right-column"
            {...reveal(0.16)}
          >
            <div className="research-introduction">
              <h2 id="research-heading">
                Beyond
                <br />
                the build<span>.</span>
              </h2>

              <p>
                Exploring ideas through machine
                learning, software engineering,
                logistics, and writing.
              </p>
            </div>

            {rightPublication && (
              <ResearchPoster
                publication={rightPublication}
                index={3}
              />
            )}
          </motion.div>

        </div>

        {/* ADDITIONAL PUBLICATIONS */}

        {additionalPublications.length > 0 && (
          <div className="research-extra-grid">
            {additionalPublications.map(
              (publication, index) => (
                <ResearchPoster
                  key={publication.id ?? index + 4}
                  publication={publication}
                  index={index + 4}
                />
              )
            )}
          </div>
        )}

      </div>
    </section>
  );
}
