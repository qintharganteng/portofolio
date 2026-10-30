
import { highlights } from "../data/achievements";
import Reveal from "../components/ui/Reveal";

import "./Achievements.css";

export default function Achievements() {
  const featured = highlights[0];
  const secondary = highlights[1];
  const otherAchievements = highlights.slice(2);

  if (!featured) return null;

  const total = String(highlights.length).padStart(2, "0");

  return (
    <section
      id="recognition"
      className="section-space achievements-section"
      aria-labelledby="achievements-heading"
    >
      <div className="achievements-shell page-shell">

        {/* ======================================
            EDITORIAL HEADER
        ====================================== */}

        <header className="achievements-header">
          <div className="achievements-header-main">
            <h2 id="achievements-heading">
              BUILT TO
              <br />
              STAND OUT<span>.</span>
            </h2>
          </div>

          <div className="achievements-header-aside">
            <p>
              A collection of meaningful moments
              in research, academic life, and
              communication.
            </p>

            <p>
              Every milestone reflects dedication,
              curiosity, collaboration, and growth.
            </p>
          </div>
        </header>

        {/* ======================================
            MAIN ACHIEVEMENT SHOWCASE
        ====================================== */}

        <div
          id="achievements-showcase"
          className="achievements-showcase"
        >

          {/* ==================================
              LEFT COLUMN
          ================================== */}

          <div className="achievements-main">

            {/* FEATURED ACHIEVEMENT */}

            <Reveal className="achievement-feature">

              <div className="achievement-feature-media">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="achievement-feature-image"
                  style={{
                    objectPosition:
                      featured.imagePosition || "center",
                  }}
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="achievement-feature-shade"
                  aria-hidden="true"
                />

                <div className="achievement-feature-topline">
                  <span>FEATURED RECOGNITION</span>
                  <span>01 / {total}</span>
                </div>

                <div className="achievement-feature-metrics">
                  <div className="achievement-photo-stat">
                    <strong>{featured.year}</strong>
                    <span>RECOGNITION YEAR</span>
                  </div>

                  <div className="achievement-photo-stat">
                    <strong>{total}</strong>
                    <span>SELECTED MILESTONES</span>
                  </div>
                </div>
              </div>

              {/* FEATURED CAPTION */}

              <div className="achievement-feature-caption">
                <div className="achievement-caption-index">
                  <span>01</span>

                  <span
                    className="achievement-caption-line"
                    aria-hidden="true"
                  />

                  <span>FEATURED MILESTONE</span>
                </div>

                <div className="achievement-caption-copy">
                  <h3>{featured.title}</h3>
                  <p>{featured.detail}</p>
                </div>
              </div>

            </Reveal>

            {/* ==================================
                ADDITIONAL MILESTONES
            ================================== */}

            {otherAchievements.length > 0 && (
              <div
                id="achievements-archive"
                className="achievements-archive"
              >
                <Reveal className="achievements-archive-heading">
                  <h3>More milestones.</h3>
                </Reveal>

                <div className="achievements-archive-list">
                  {otherAchievements.map((item, index) => (
                    <Reveal
                      key={item.id ?? index}
                      className="achievement-archive-item"
                      delay={index * 0.06}
                    >
                      <span className="achievement-archive-index">
                        {String(index + 3).padStart(2, "0")}
                      </span>

                      <div className="achievement-archive-image">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            objectPosition:
                              item.imagePosition || "center",
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="achievement-archive-copy">
                        <span className="achievement-archive-year">
                          {item.year} / RECOGNITION
                        </span>

                        <h4>{item.title}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ==================================
              RIGHT COLUMN
          ================================== */}

          <div className="achievements-side">

            {/* SECONDARY ACHIEVEMENT */}

            {secondary && (
              <Reveal className="achievement-secondary">

                <div className="achievement-secondary-media">
                  <img
                    src={secondary.image}
                    alt={secondary.title}
                    className="achievement-secondary-image"
                    style={{
                      objectPosition:
                        secondary.imagePosition || "center",
                    }}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="achievement-secondary-tag">
                    02 / {secondary.year}
                  </span>
                </div>

                <div className="achievement-secondary-caption">
                  <span>SELECTED RECOGNITION</span>

                  <h3>{secondary.title}</h3>

                  <p className="achievement-secondary-description">
                    {secondary.detail}
                  </p>
                </div>

              </Reveal>
            )}

            {/* CERTIFICATE PHOTO */}

            <Reveal
              className="achievement-introduction"
              delay={0.14}
            >
              <div className="achievement-introduction-frame">
                <img
                  src={`${import.meta.env.BASE_URL}images/sertif.png`}
                  alt="Achievement certificate"
                  className="achievement-introduction-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>

            {/* ACHIEVEMENT SUMMARY */}

            <Reveal
              className="achievement-counter"
              delay={0.1}
            >
              <div className="achievement-counter-heading">
                <strong>{total}</strong>

                <span>
                  Selected
                  <br />
                  milestones
                </span>
              </div>

              <div
                className="achievement-counter-rule"
                aria-hidden="true"
              />

              <ul className="achievement-counter-list">
                <li>Research &amp; publications</li>
                <li>Academic &amp; creative achievements</li>
                <li>Collaboration &amp; continuous growth</li>
              </ul>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
