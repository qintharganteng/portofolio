
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";

import { experiences } from "../data/experience";
import SectionHeading from "../components/ui/SectionHeading";
import "./Experience.css";

/* ==========================================
   CONFIGURATION
========================================== */

const DATA_BARS = [
  { x: 35, y: 111 },
  { x: 100, y: 91 },
  { x: 165, y: 101 },
  { x: 230, y: 71 },
  { x: 295, y: 81 },
  { x: 360, y: 43 },
];

function getExperienceType(item) {
  const role = (item.role || "").toLowerCase();

  return role.includes("android") || role.includes("mobile")
    ? "android"
    : "technologist";
}

/* ==========================================
   SHARED ICON
========================================== */

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* ==========================================
   DECORATIVE BOOK CORNERS
========================================== */

function BookCorner({ position }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`experience-corner experience-corner--${position}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#97A895" strokeWidth="1.2">
          <path d="M0 28 H44 L69 53 H132" />
          <path d="M0 60 H29 L72 103 H147" />
          <path d="M0 101 H38 L78 141 H156" />
          <path d="M97 0 V29 L132 64 V119" />
        </g>

        <motion.path
          d="M0 28 H44 L69 53 H132"
          stroke="#E87532"
          strokeWidth="2.2"
          strokeDasharray="8 20"
          animate={
            reduceMotion
              ? undefined
              : { strokeDashoffset: [0, -112] }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          cx="132"
          cy="53"
          r="4"
          fill="#E87532"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.25, 1, 0.25],
                  scale: [0.8, 1.2, 0.8],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <circle cx="147" cy="103" r="3" fill="#9EAF9C" />
        <circle cx="156" cy="141" r="3" fill="#9EAF9C" />
      </svg>
    </div>
  );
}

/* ==========================================
   DATA & TECHNOLOGY VISUAL
========================================== */

function TechnologistVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="experience-visual experience-visual--data">
      <div className="experience-visual-heading">
        <span>DATA / RESEARCH / ENGINEERING</span>
        <span className="experience-live-dot" />
      </div>

      <div className="experience-data-display">
        <div className="experience-data-top">
          <div>
            <span>ANALYTICAL WORKFLOW</span>
            <strong>Data Exploration</strong>
          </div>

          <span className="experience-data-symbol">
            {"{ }"}
          </span>
        </div>

        <svg
          className="experience-data-svg"
          viewBox="0 0 430 180"
          role="img"
          aria-label="Illustrative data chart with animated bars and trend line"
        >
          <g stroke="#D1DBD1" strokeWidth="1">
            <path d="M10 35 H420" />
            <path d="M10 70 H420" />
            <path d="M10 105 H420" />
            <path d="M10 145 H420" />
          </g>

          {DATA_BARS.map((bar, index) => (
            <motion.rect
              key={bar.x}
              x={bar.x}
              width="29"
              rx="2"
              fill={
                index === DATA_BARS.length - 1
                  ? "#E87532"
                  : "#9FB6A2"
              }
              initial={
                reduceMotion
                  ? false
                  : { y: 145, height: 0 }
              }
              animate={{
                y: bar.y,
                height: 145 - bar.y,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}

          <motion.path
            d="M25 115 C67 117 76 80 121 90 S175 102 217 78 S274 73 318 54 S373 52 407 24"
            fill="none"
            stroke="#E87532"
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={
              reduceMotion ? false : { pathLength: 0 }
            }
            animate={{ pathLength: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.6,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="407"
            cy="24"
            r="4"
            fill="#E87532"
            animate={
              reduceMotion
                ? undefined
                : {
                    r: [3, 5, 3],
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </svg>

        <div className="experience-data-flow">
          <span>PREPARE</span>
          <span>ANALYZE</span>
          <span>EVALUATE</span>
        </div>
      </div>

      <div className="experience-visual-summary">
        <h4>From data to insight.</h4>

        <p>
          Data processing, exploratory analysis,
          machine learning experimentation, and
          software engineering workflows.
        </p>
      </div>

      <span className="experience-visual-note">
        CONCEPTUAL VISUALIZATION · NOT ACTUAL RESULTS
      </span>
    </div>
  );
}

/* ==========================================
   ANDROID DEVELOPMENT VISUAL
========================================== */

function AndroidVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="experience-visual experience-visual--android">
      <div className="experience-visual-heading">
        <span>MOBILE / INTERFACE DEVELOPMENT</span>
        <span className="experience-live-dot" />
      </div>

      <div className="experience-android-scene">
        <motion.div
          className="experience-phone"
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -6, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="experience-phone-screen">
            <div className="experience-phone-status">
              <span />
              <span>● ● ●</span>
            </div>

            <div className="experience-phone-header">
              <small>APPLICATION PREVIEW</small>
              <strong>Overview</strong>
            </div>

            <div className="experience-phone-feature">
              <small>INTERFACE STATE</small>

              <motion.div
                className="experience-phone-progress"
                animate={
                  reduceMotion
                    ? { width: "72%" }
                    : {
                        width: [
                          "35%",
                          "78%",
                          "54%",
                          "72%",
                        ],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="experience-phone-row"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: -10 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.16,
                }}
              >
                <span className="experience-phone-row-icon" />

                <div>
                  <i />
                  <i />
                </div>
              </motion.div>
            ))}

            <div className="experience-phone-navbar">
              <span className="active" />
              <span />
              <span />
            </div>
          </div>
        </motion.div>

        <div className="experience-android-side">
          <span className="experience-android-side-label">
            DEVELOPMENT PROCESS
          </span>

          {[
            ["Interface Design", "Layouts and components"],
            ["Implementation", "Application logic"],
            ["Testing", "UI and usability checks"],
          ].map(([title, detail]) => (
            <div
              className="experience-android-step"
              key={title}
            >
              <span className="experience-android-step-dot" />

              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-visual-summary">
        <h4>Design. Build. Refine.</h4>

        <p>
          Translating mobile interface designs into
          functional Android experiences, implementing
          UI components, and refining application
          interactions.
        </p>
      </div>

      <span className="experience-visual-note">
        CONCEPTUAL UI · NOT AN ACTUAL APP SCREENSHOT
      </span>
    </div>
  );
}

/* ==========================================
   EXPERIENCE VISUAL SELECTOR
========================================== */

function ExperienceWorkVisual({ item }) {
  return getExperienceType(item) === "android"
    ? <AndroidVisual />
    : <TechnologistVisual />;
}

/* ==========================================
   BOOK SPREAD
========================================== */

function ExperienceSpread({ item, onView }) {
  const hasImages = Boolean(item.images?.length);

  return (
    <div className="experience-book-spread">

      {/* LEFT PAGE */}

      <div className="experience-book-page experience-book-page--left">
        <BookCorner position="top-left" />

        <div className="experience-book-page-top">
          <span className="experience-label">
            PROFESSIONAL EXPERIENCE
          </span>

          <span className="experience-dates">
            {item.period}
          </span>
        </div>

        <div className="experience-book-copy">
          <h3>{item.role}</h3>

          <p className="experience-company">
            {item.organization}
          </p>

          {item.location && (
            <span className="experience-location">
              {item.location}
            </span>
          )}

          <p className="experience-description">
            {item.description}
          </p>

          {item.tags?.length > 0 && (
            <div className="experience-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {item.certificateNote && (
            <div className="experience-certificate-note">
              <span className="certificate-note-label">
                DOCUMENTATION STATUS
              </span>

              <p>{item.certificateNote}</p>
            </div>
          )}
        </div>

        <span
          className="experience-book-footline"
          aria-hidden="true"
        />
      </div>

      {/* RIGHT PAGE */}

      <div className="experience-book-page experience-book-page--right">
        <ExperienceWorkVisual item={item} />

        {hasImages && (
          <button
            type="button"
            className="experience-view-button"
            onClick={() => onView(item)}
          >
            <EyeIcon />

            <span>VIEW DOCUMENTATION</span>

            <span
              className="experience-view-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        )}

        <BookCorner position="bottom-right" />
      </div>

    </div>
  );
}

/* ==========================================
   3D PAGE TURN
========================================== */

function TurningPage({
  item,
  nextItem,
  direction,
  onComplete,
}) {
  const isNext = direction > 0;

  return (
    <motion.div
      className={`experience-turn-leaf ${
        isNext
          ? "experience-turn-leaf--next"
          : "experience-turn-leaf--previous"
      }`}
      initial={{ rotateY: 0 }}
      animate={{
        rotateY: isNext ? -180 : 180,
      }}
      transition={{
        duration: 0.9,
        ease: [0.45, 0.02, 0.2, 1],
      }}
      onAnimationComplete={onComplete}
      aria-hidden="true"
    >
      <div className="experience-turn-face experience-turn-face--front">
        <span>PROFESSIONAL EXPERIENCE</span>
        <h3>{item.role}</h3>
        <p>{item.organization}</p>
      </div>

      <div className="experience-turn-face experience-turn-face--back">
        <span>PROFESSIONAL EXPERIENCE</span>
        <h3>{nextItem.role}</h3>
        <p>{nextItem.organization}</p>
      </div>
    </motion.div>
  );
}

/* ==========================================
   DOCUMENTATION LIGHTBOX
========================================== */

function ExperienceLightbox({
  item,
  imageIndex,
  setImageIndex,
  onClose,
  returnFocusRef,
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const images = item.images ?? [];
  const currentImage = images[imageIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        event.preventDefault();

        setImageIndex(
          (index) => (index + 1) % images.length
        );
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        event.preventDefault();

        setImageIndex(
          (index) =>
            (index - 1 + images.length) % images.length
        );
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href]'
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
  }, [
    images.length,
    onClose,
    returnFocusRef,
    setImageIndex,
  ]);

  if (!currentImage) return null;

  return createPortal(
    <div
      className="experience-lightbox"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="experience-lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`Documentation from ${item.organization}`}
      >
        <div className="experience-lightbox-header">
          <div>
            <span>WORK DOCUMENTATION</span>
            <h3>{item.organization}</h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="experience-lightbox-close"
            onClick={onClose}
            aria-label="Close documentation"
          >
            ×
          </button>
        </div>

        <div className="experience-lightbox-image-wrap">
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={
              currentImage.alt ||
              "Professional experience documentation"
            }
          />
        </div>

        <div className="experience-lightbox-footer">
          <a
            href={currentImage.src}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-lightbox-original"
          >
            OPEN ORIGINAL ↗
          </a>

          {images.length > 1 && (
            <div className="experience-lightbox-navigation">
              <button
                type="button"
                onClick={() =>
                  setImageIndex(
                    (index) =>
                      (index - 1 + images.length) %
                      images.length
                  )
                }
                aria-label="Previous photo"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setImageIndex(
                    (index) =>
                      (index + 1) % images.length
                  )
                }
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ==========================================
   MAIN EXPERIENCE SECTION
========================================== */

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [turning, setTurning] = useState(null);
  const [galleryItem, setGalleryItem] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const closeGallery = useCallback(() => {
    setGalleryItem(null);
  }, []);

  if (!experiences.length) return null;

  const visibleIndex = turning
    ? turning.to
    : activeIndex;

  const currentExperience = experiences[visibleIndex];

  const outgoingExperience = turning
    ? experiences[turning.from]
    : null;

  function openGallery(item) {
    openerRef.current = document.activeElement;

    setImageIndex(0);
    setGalleryItem(item);
  }

  function changePage(direction) {
    if (turning || experiences.length < 2) return;

    const nextIndex =
      (activeIndex + direction + experiences.length) %
      experiences.length;

    const useSimpleTransition =
      reduceMotion ||
      (
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 900px)").matches
      );

    if (useSimpleTransition) {
      setActiveIndex(nextIndex);
      return;
    }

    setTurning({
      from: activeIndex,
      to: nextIndex,
      direction,
    });
  }

  function finishTurning() {
    if (!turning) return;

    setActiveIndex(turning.to);
    setTurning(null);
  }

  return (
    <section
      id="experience"
      className="section-space experience-section"
      aria-label="Professional experience"
    >
      <div className="page-shell">
        <SectionHeading
          title="Where I've worked."
          aside="Hands-on experience across software development, research, data, and engineering."
        />

        <div className="experience-book-stage">
          <div className="experience-book-shell">

            <motion.div
              key={visibleIndex}
              className="experience-book-content"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0.82 }
              }
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
              }}
            >
              <ExperienceSpread
                item={currentExperience}
                onView={openGallery}
              />
            </motion.div>

            {turning && outgoingExperience && (
              <TurningPage
                item={outgoingExperience}
                nextItem={currentExperience}
                direction={turning.direction}
                onComplete={finishTurning}
              />
            )}

          </div>

          {/* NAVIGATION */}

          <div className="experience-book-controls">
            <button
              type="button"
              className="experience-book-button"
              onClick={() => changePage(-1)}
              disabled={
                Boolean(turning) ||
                experiences.length < 2
              }
              aria-label="Previous experience"
            >
              <span aria-hidden="true">←</span>
              <span>PREVIOUS</span>
            </button>

            <div
              className="experience-book-progress"
              aria-hidden="true"
            >
              {experiences.map((item, index) => (
                <span
                  key={item.id ?? index}
                  className={`experience-book-progress-line ${
                    index === visibleIndex
                      ? "is-active"
                      : ""
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              className="experience-book-button"
              onClick={() => changePage(1)}
              disabled={
                Boolean(turning) ||
                experiences.length < 2
              }
              aria-label="Next experience"
            >
              <span>NEXT</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <span
            className="experience-book-screen-reader"
            role="status"
            aria-live="polite"
          >
            Now viewing {currentExperience.role} at{" "}
            {currentExperience.organization}
          </span>
        </div>
      </div>

      {galleryItem && (
        <ExperienceLightbox
          item={galleryItem}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          onClose={closeGallery}
          returnFocusRef={openerRef}
        />
      )}
    </section>
  );
}
