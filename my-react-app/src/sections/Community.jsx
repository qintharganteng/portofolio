
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import { community } from "../data/community";
import Reveal from "../components/ui/Reveal";

import "./Community.css";

/* ==========================================
   COMMUNITY ACCORDION ITEM
========================================== */

function CommunityEntry({
  item,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}) {
  const number = String(index + 1).padStart(2, "0");

  const triggerId = `community-trigger-${index}`;
  const panelId = `community-panel-${index}`;

  return (
    <Reveal
      className={`community-entry ${
        isOpen ? "is-open" : ""
      }`}
      delay={index * 0.06}
    >
      {/* ACCORDION TRIGGER */}

      <button
        id={triggerId}
        type="button"
        className="community-entry-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
      >
        <span className="community-entry-index">
          {number}
        </span>

        <span className="community-entry-main">
          <span className="community-entry-date">
            {item.dates}
          </span>

          <strong className="community-entry-title">
            {item.title}
          </strong>

          <span className="community-entry-role">
            {item.role}
          </span>
        </span>
      </button>

      {/* ANIMATED DESCRIPTION */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="details"
            id={panelId}
            className="community-entry-panel"
            role="region"
            aria-labelledby={triggerId}
            initial={
              reduceMotion
                ? false
                : { height: 0, opacity: 0 }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="community-entry-panel-inner">
              <p>{item.detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

/* ==========================================
   MAIN COMMUNITY SECTION
========================================== */

export default function Community() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  if (!community.length) return null;

  const total = String(community.length).padStart(2, "0");

  function toggleItem(index) {
    setActiveIndex((current) =>
      current === index ? -1 : index
    );
  }

  return (
    <section
      id="community"
      className="section-space community-section"
      aria-labelledby="community-heading"
    >
      <div className="community-shell page-shell">

        {/* ======================================
            EDITORIAL HEADER
        ====================================== */}

        <header className="community-header">

          {/* MAIN HEADING */}

          <Reveal className="community-header-title">
            <h2 id="community-heading">
              Outside
              <br />
              the desk<span>.</span>
            </h2>
          </Reveal>

          {/* HEADER DESCRIPTION */}

          <Reveal
            className="community-header-aside"
            delay={0.1}
          >
            <span>BEYOND THE EVERYDAY WORK</span>

            <p>
              Learning, sharing, and getting involved
              beyond day-to-day project work.
              Growing through experiences, people,
              and meaningful connections.
            </p>
          </Reveal>

        </header>

        {/* ======================================
            MAIN COMMUNITY LAYOUT
        ====================================== */}

        <div className="community-layout">

          {/* ==================================
              LEFT — EDITORIAL FEATURE
          ================================== */}

          <Reveal className="community-feature">

            {/* TOP LABEL */}

            <div className="community-feature-top">
              <span>
                THE HUMAN SIDE OF THE WORK
              </span>
            </div>

            {/* MAIN STATEMENT */}

            <div className="community-feature-content">
              <span className="community-feature-small">
                PEOPLE / IDEAS / EXPERIENCES
              </span>

              <h3>
                Better
                <br />
                together<span>.</span>
              </h3>

              <p>
                Meaningful experiences happen
                when ideas are shared and people
                work toward something bigger.
              </p>
            </div>

            {/* EXPERIENCE COUNTER */}

            <div className="community-feature-bottom">
              <div className="community-feature-counter">
                <strong>{total}</strong>

                <span>
                  COMMUNITY
                  <br />
                  EXPERIENCES
                </span>
              </div>
            </div>

          </Reveal>

          {/* ==================================
              RIGHT — COMMUNITY ACCORDION
          ================================== */}

          <div className="community-collection">

            {/* COLLECTION HEADING */}

            <div className="community-collection-top">
              <span>SELECTED INVOLVEMENTS</span>
            </div>

            {/* ACCORDION LIST */}

            <div className="community-list">
              {community.map((item, index) => (
                <CommunityEntry
                  key={item.id ?? `${item.title}-${index}`}
                  item={item}
                  index={index}
                  isOpen={activeIndex === index}
                  onToggle={() => toggleItem(index)}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
