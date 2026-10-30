
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { skillGroups } from "../data/skills";
import "./Skills.css";

/* ==========================================
   SKILL ICON
========================================== */

function SkillIcon({ skill }) {
  const [imageError, setImageError] = useState(false);

  const showIcon = Boolean(skill.icon) && !imageError;

  return (
    <span className="skill-icon" aria-hidden="true">
      {showIcon ? (
        <img
          src={skill.icon}
          alt=""
          width={30}
          height={30}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="skill-icon-fallback">
          {skill.short || skill.name.slice(0, 2)}
        </span>
      )}
    </span>
  );
}

/* ==========================================
   LAPTOP MOCKUP
========================================== */

function SkillsLaptop({
  scrollRef,
  groupRefs,
  onScroll,
}) {
  return (
    <div className="skills-laptop-scene">

      {/* LAPTOP SHADOW */}

      <div
        className="skills-laptop-shadow"
        aria-hidden="true"
      />

      {/* FLOATING LAPTOP */}

      <div className="skills-laptop-float">
        <div className="skills-laptop">

          {/* SCREEN FRAME */}

          <div className="skills-laptop-lid">

            <div
              className="skills-laptop-camera"
              aria-hidden="true"
            >
              <span />
            </div>

            <div className="skills-laptop-screen">

              {/* TOOLBAR */}

              <div className="skills-screen-toolbar">
                <span className="skills-screen-toolbar-title">
                  SKILL EXPLORER
                </span>

                <span
                  className="skills-screen-toolbar-menu"
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                </span>
              </div>

              {/* SCREEN INTRO */}

              <div className="skills-screen-intro">
                <span className="skills-screen-eyebrow">
                  MY TECHNICAL TOOLKIT
                </span>

                <h3>
                  Technologies
                  <span> & tools.</span>
                </h3>

                <p>
                  Explore the disciplines behind
                  my projects and research.
                </p>
              </div>

              {/* SCROLLABLE SKILLS */}

              <div
                ref={scrollRef}
                className="skills-screen-scroll"
                onScroll={onScroll}
                role="region"
                tabIndex={0}
                aria-label="Scrollable list of skills and technologies"
              >
                {skillGroups.map((group, groupIndex) => (
                  <section
                    key={group.title}
                    ref={(element) => {
                      groupRefs.current[groupIndex] = element;
                    }}
                    className="skills-screen-group"
                    aria-labelledby={`skills-group-${groupIndex}`}
                  >
                    <div className="skills-screen-group-header">
                      <h4 id={`skills-group-${groupIndex}`}>
                        {group.title}
                      </h4>

                      <span>
                        {group.skills.length} TOOLS
                      </span>
                    </div>

                    <ul className="skills-screen-grid">
                      {group.skills.map((skill) => (
                        <li
                          key={`${group.title}-${skill.name}`}
                          className="skills-screen-tool"
                        >
                          <SkillIcon skill={skill} />

                          <span className="skills-screen-tool-name">
                            {skill.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {/* SCREEN FOOTER */}

              <div className="skills-screen-footer">
                <span className="skills-screen-status">
                  <span aria-hidden="true" />
                  EXPLORE THE TOOLKIT
                </span>

                <span>SCROLL ↓</span>
              </div>

            </div>
          </div>

          {/* LAPTOP HINGE */}

          <div
            className="skills-laptop-hinge"
            aria-hidden="true"
          />

          {/* LAPTOP KEYBOARD */}

          <div
            className="skills-laptop-base"
            aria-hidden="true"
          >
            <div className="skills-laptop-keyboard">
              {Array.from({ length: 52 }, (_, index) => (
                <span
                  key={index}
                  className="skills-laptop-key"
                />
              ))}
            </div>

            <div className="skills-laptop-trackpad" />
          </div>

        </div>
      </div>

    </div>
  );
}

/* ==========================================
   MAIN SKILLS SECTION
========================================== */

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef(null);
  const groupRefs = useRef([]);

  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  /* ========================================
     CATEGORY NAVIGATION
  ======================================== */

  function scrollToCategory(index) {
    const container = scrollRef.current;
    const target = groupRefs.current[index];

    if (!container || !target) return;

    setActiveIndex(index);

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const scrollPosition =
      container.scrollTop +
      targetRect.top -
      containerRect.top -
      12;

    container.scrollTo({
      top: Math.max(0, scrollPosition),
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  /* ========================================
     SYNC ACTIVE CATEGORY WITH SCROLL
  ======================================== */

  function handleScreenScroll() {
    const container = scrollRef.current;

    if (!container) return;

    const scrollBottom =
      container.scrollTop + container.clientHeight;

    const isAtBottom =
      scrollBottom >= container.scrollHeight - 5;

    if (isAtBottom && skillGroups.length > 1) {
      setActiveIndex(skillGroups.length - 1);
      return;
    }

    const threshold =
      container.getBoundingClientRect().top + 42;

    let currentIndex = 0;

    groupRefs.current.forEach((element, index) => {
      if (
        element &&
        element.getBoundingClientRect().top <= threshold
      ) {
        currentIndex = index;
      }
    });

    setActiveIndex((previous) =>
      previous === currentIndex
        ? previous
        : currentIndex
    );
  }

  if (skillGroups.length === 0) return null;

  return (
    <section
      id="skills"
      className="section-space skills-section"
      aria-labelledby="skills-title"
    >
      <div className="page-shell">

        <div className="skills-layout">

          {/* ==================================
              LEFT — EDITORIAL CONTENT
          ================================== */}

          <motion.div
            className="skills-editorial"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -24 }
            }
            whileInView={
              reduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* TITLE */}

            <h2
              id="skills-title"
              className="skills-display"
            >
              What I

              <span className="skills-display-second">
                work with
                <span className="skills-display-dot">.</span>
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="skills-description">
              The technologies, tools, and disciplines
              behind my work — from software development
              and data analysis to research and
              digital experiences.
            </p>

            {/* COUNTERS */}

            <div className="skills-overview">
              <div className="skills-overview-item">
                <strong>
                  {String(skillGroups.length).padStart(2, "0")}
                </strong>
                <span>DISCIPLINES</span>
              </div>

              <span
                className="skills-overview-divider"
                aria-hidden="true"
              />

              <div className="skills-overview-item">
                <strong>
                  {String(totalSkills).padStart(2, "0")}
                </strong>
                <span>SKILL ENTRIES</span>
              </div>
            </div>

            {/* CATEGORY NAVIGATION */}

            <nav
              className="skills-categories"
              aria-label="Skill categories"
            >
              <div className="skills-category-nav">

                {skillGroups.map((group, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={group.title}
                      type="button"
                      className={`skills-category-button ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() => scrollToCategory(index)}
                      aria-pressed={isActive}
                      aria-controls={`skills-group-${index}`}
                    >
                      <span className="skills-category-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="skills-category-title">
                        {group.title}
                      </span>

                      {isActive && (
                        <span
                          className="skills-category-indicator"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}

              </div>
            </nav>

          </motion.div>

          {/* ==================================
              RIGHT — FLOATING LAPTOP
          ================================== */}

          <motion.div
            className="skills-laptop-column"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35 }
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
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SkillsLaptop
              scrollRef={scrollRef}
              groupRefs={groupRefs}
              onScroll={handleScreenScroll}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
