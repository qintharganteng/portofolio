
import { useState } from "react";

import { education, certifications } from "../data/education";
import Reveal from "../components/ui/Reveal";

import "./Education.css";

/* ==========================================
   COVERFLOW POSITION HELPER
========================================== */

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

/* ==========================================
   MAIN EDUCATION SECTION
========================================== */

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  const trainingItems = certifications.filter(
    (item) => Boolean(item.image)
  );

  const pendingItems = certifications.filter(
    (item) => !item.image
  );

  const total = trainingItems.length;
  const activeItem = trainingItems[activeIndex];

  /* ========================================
     CERTIFICATE NAVIGATION
  ======================================== */

  function moveSlide(direction) {
    if (total <= 1) return;

    setActiveIndex(
      (current) => (current + direction + total) % total
    );
  }

  function handleGalleryKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    }
  }

  return (
    <section
      id="education"
      className="section-space education-section"
      aria-label="Education and Certifications"
    >
      <div className="education-shell page-shell">

        {/* ======================================
            FORMAL EDUCATION
        ====================================== */}

        <Reveal className="education-academic">
          <div className="education-academic-body">

            {/* UNIVERSITY LOGO */}

            <div className="education-academic-mark">
              <img
                src={`${import.meta.env.BASE_URL}images/ulbi.png`}
                alt="Universitas Logistik dan Bisnis Internasional"
                className="education-academic-logo"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* ACADEMIC INFORMATION */}

            <div className="education-academic-info">
              <span>ACADEMIC BACKGROUND</span>

              <h3>{education.school}</h3>

              <p>{education.degree}</p>
            </div>

            {/* GPA */}

            <div className="education-academic-gpa">
              <span>GRADE POINT AVERAGE</span>

              <strong>{education.gpa}</strong>
            </div>

          </div>
        </Reveal>

        {/* ======================================
            CERTIFICATE GALLERY
        ====================================== */}

        <div className="education-certifications">

          {total > 0 ? (
            <div className="education-gallery">

              {/* ACTIVE CERTIFICATE DETAILS */}

              <div
                className="education-active-heading"
                aria-live="polite"
                aria-atomic="true"
              >
                <span>
                  CERTIFICATION /{" "}
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" "}OF{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <h4>{activeItem.name}</h4>

                <p>
                  {activeItem.issuer}
                  {activeItem.category
                    ? ` — ${activeItem.category}`
                    : ""}
                </p>
              </div>

              {/* ==================================
                  ANIMATED CERTIFICATE COVERFLOW
              ================================== */}

              <div
                className="education-coverflow-stage"
                role="region"
                aria-label="Certificate gallery"
                tabIndex={0}
                onKeyDown={handleGalleryKeyDown}
              >
                <div
                  className="education-stage-glow"
                  aria-hidden="true"
                />

                {trainingItems.map((item, index) => {
                  const offset = getCircularOffset(
                    index,
                    activeIndex,
                    total
                  );

                  const distance = Math.abs(offset);

                  const isActive = offset === 0;
                  const isOutside = distance > 2;

                  const cardClassName = [
                    "education-certificate-card",
                    isActive && "is-active",
                    isOutside && "is-outside",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <button
                      key={item.id ?? index}
                      type="button"
                      className={cardClassName}
                      style={{
                        "--shift": `${offset * 66}%`,
                        "--scale": 1 - distance * 0.17,
                        "--angle": `${offset * -5}deg`,
                        "--vertical": `${distance * 12}px`,
                        zIndex: 10 - distance,
                      }}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Select certificate: ${item.name}`}
                      aria-pressed={isActive}
                      aria-hidden={isOutside}
                      tabIndex={isOutside ? -1 : 0}
                    >
                      <span className="education-certificate-paper">
                        <img
                          src={item.image}
                          alt={`Certificate: ${item.name}`}
                          loading={isActive ? "eager" : "lazy"}
                          decoding="async"
                          draggable="false"
                        />
                      </span>
                    </button>
                  );
                })}

              </div>

              {/* ==================================
                  CAROUSEL CONTROLS
              ================================== */}

              <div className="education-gallery-controls">

                {/* SLIDE COUNTER */}

                <div className="education-gallery-progress">
                  <strong>
                    {String(activeIndex + 1).padStart(2, "0")}
                  </strong>

                  <span
                    className="education-progress-line"
                    aria-hidden="true"
                  />

                  <span>
                    {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* PREVIOUS / NEXT */}

                <div className="education-gallery-actions">
                  <button
                    type="button"
                    className="education-arrow"
                    onClick={() => moveSlide(-1)}
                    disabled={total <= 1}
                    aria-label="Previous certificate"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    type="button"
                    className="education-arrow education-arrow-next"
                    onClick={() => moveSlide(1)}
                    disabled={total <= 1}
                    aria-label="Next certificate"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                {/* FULL CERTIFICATE LINK */}

                <a
                  href={activeItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="education-view-certificate"
                >
                  VIEW FULL CERTIFICATE

                  <span aria-hidden="true">↗</span>
                </a>

              </div>

              {/* ==================================
                  PAGINATION
              ================================== */}

              {total > 1 && (
                <div className="education-gallery-pagination">
                  {trainingItems.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={item.id ?? index}
                        type="button"
                        className={isActive ? "is-active" : ""}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to certificate: ${item.name}`}
                        aria-current={
                          isActive ? "true" : undefined
                        }
                      />
                    );
                  })}
                </div>
              )}

            </div>
          ) : (
            <div className="education-gallery-empty">
              Certificate documentation will be displayed
              here when available.
            </div>
          )}

        </div>

        {/* ======================================
            ONGOING LEARNING
        ====================================== */}

        {pendingItems.length > 0 && (
          <div className="education-pending-section">

            {pendingItems.map((item, index) => (
              <Reveal
                key={item.id ?? index}
                className="education-pending-row"
                delay={index * 0.06}
              >
                {/* ENTRY NUMBER */}

                <span className="education-pending-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CERTIFICATION INFORMATION */}

                <div className="education-pending-copy">
                  <span>
                    {[item.category, item.issuer]
                      .filter(Boolean)
                      .join(" / ")}
                  </span>

                  <h4>{item.name}</h4>

                  {item.status && <p>{item.status}</p>}
                </div>

                {/* STATUS LABEL */}

                <span className="education-pending-mark">
                  IN PROGRESS
                </span>

              </Reveal>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
