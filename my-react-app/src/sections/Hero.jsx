
import { motion, useReducedMotion } from "motion/react";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { profile } from "../data/profile";
import IntroVideo from "../components/media/IntroVideo";
import "./Hero.css";

/* ==========================================
   SOCIAL MEDIA CONFIGURATION
========================================== */

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/qintharalmaliki",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@qintharalmaliki",
    Icon: FaTiktok,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammad-qinthar-3454442ba/",
    Icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6282127854156",
    Icon: FaWhatsapp,
  },
];

/* ==========================================
   SOCIAL LINKS
========================================== */

function HeroSocialLinks() {
  return (
    <div className="hero-profile-socials">
      <span className="hero-socials-label">
        LET'S CONNECT
      </span>

      <div className="hero-socials-list">
        {socialLinks.map(({ label, href, Icon }) =>
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label={`Visit my ${label}`}
              title={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ) : (
            <span
              key={label}
              className="hero-social-link hero-social-link--inactive"
              role="img"
              aria-label={`${label} link not configured`}
              title={`${label} — add your profile URL`}
            >
              <Icon aria-hidden="true" />
            </span>
          )
        )}
      </div>
    </div>
  );
}

/* ==========================================
   TECHNOLOGY STICKERS
========================================== */

function HeroTechStickers() {
  return (
    <div
      className="hero-tech-stickers"
      aria-hidden="true"
    >
      {/* CODE */}

      <div className="hero-tech-sticker hero-tech-sticker--code">
        <span className="hero-sticker-code-symbol">
          {"</>"}
        </span>

        <span className="hero-sticker-caption">
          THINK. CODE.
        </span>
      </div>

      {/* ARTIFICIAL INTELLIGENCE */}

      <div className="hero-tech-sticker hero-tech-sticker--ai">
        <span className="hero-sticker-dots">
          <i />
          <i />
          <i />
        </span>

        <strong>
          AI<span>.</span>
        </strong>

        <span className="hero-sticker-caption">
          MACHINE LEARNING
        </span>
      </div>

      {/* TERMINAL */}

      <div className="hero-tech-sticker hero-tech-sticker--terminal">
        <span className="hero-sticker-window">
          <i />
          <i />
          <i />
        </span>

        <span className="hero-sticker-command">
          {">_"}
          <span className="hero-sticker-cursor" />
        </span>

        <span className="hero-sticker-caption">
          DEV MODE / ON
        </span>
      </div>
    </div>
  );
}

/* ==========================================
   HERO
========================================== */

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const firstName = profile.shortName || "Qinthar";

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            y: 20,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section
      id="top"
      className="hero-bento"
      aria-labelledby="hero-heading"
    >
      <div className="hero-inner page-shell">

        <div className="hero-layout">

          {/* ==================================
              LEFT — INTRO VIDEO
          ================================== */}

          <motion.article
            className="hero-reel-card"
            {...enter(0.06)}
          >
            <div className="hero-reel-stage">

              <HeroTechStickers />

              <div className="hero-phone">
                <div className="hero-phone-screen">

                  <div
                    className="hero-phone-top"
                    aria-hidden="true"
                  >
                    <span className="hero-phone-camera" />
                    <span className="hero-phone-speaker" />
                  </div>

                  <div className="hero-phone-video">
                    <IntroVideo />
                  </div>

                  <div
                    className="hero-phone-bottom"
                    aria-hidden="true"
                  >
                    <span className="hero-phone-home" />
                  </div>

                </div>
              </div>

            </div>

            <div className="hero-reel-footer">
              <div>
                <span className="hero-reel-label">
                  Personal Film By Admission ULBI
                </span>

                <h2>
                  Promotion<span>.</span>
                </h2>
              </div>
            </div>
          </motion.article>

          {/* ==================================
              RIGHT — PORTFOLIO SHOWCASE
          ================================== */}

          <div className="hero-showcase">

            {/* MAIN HEADING */}

            <motion.div
              className="hero-title-row"
              {...enter(0.12)}
            >
              <h1 id="hero-heading">
                Portfolio<span>.</span>
              </h1>

              <span className="hero-title-index">
                Hiring me!
              </span>
            </motion.div>

            {/* ==================================
                PROFILE & STATISTICS
            ================================== */}

            <div className="hero-showcase-grid">

              {/* PROFILE CARD */}

              <motion.article
                className="hero-profile-card"
                {...enter(0.2)}
              >

                <div className="hero-profile-copy">

                  <div className="hero-profile-info">
                    <span className="hero-profile-greeting">
                      HELLO, I'M
                    </span>

                    <h2>
                      {firstName}<span>.</span>
                    </h2>

                    <p>{profile.intro}</p>
                  </div>

                  <HeroSocialLinks />

                </div>

                <div className="hero-profile-media">
                  <img
                    src={`${import.meta.env.BASE_URL}images/saya.png`}
                    alt="Muhammad Qinthar Sabilla Almalki"
                    className="hero-profile-photo"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />

                  <img
                    src={`${import.meta.env.BASE_URL}images/stiker1.png`}
                    alt=""
                    aria-hidden="true"
                    className="hero-profile-thought-sticker"
                    draggable="false"
                  />
                </div>

              </motion.article>

              {/* STATISTICS */}

              <div className="hero-stat-stack">

                <motion.a
                  href="#work"
                  className="hero-stat-card"
                  {...enter(0.27)}
                >
                  <span className="hero-stat-label">
                    WORK
                  </span>

                  <div className="hero-stat-content">
                    <strong>06</strong>
                    <span>Selected projects</span>
                  </div>
                </motion.a>

                <motion.a
                  href="#research"
                  className="hero-stat-card"
                  {...enter(0.34)}
                >
                  <span className="hero-stat-label">
                    RESEARCH
                  </span>

                  <div className="hero-stat-content">
                    <strong>04</strong>
                    <span>Publications & book</span>
                  </div>
                </motion.a>

              </div>

            </div>

            {/* ==================================
                BOTTOM CARDS
            ================================== */}

            <div className="hero-bottom-row">

              <motion.a
                href="#experience"
                className="hero-work-tile"
                {...enter(0.4)}
              >
                <span>EXPLORE MY WORK</span>

                <div>
                  <strong>
                    Where I've been
                    <br />
                    building and learning.
                  </strong>
                </div>
              </motion.a>

              <motion.div
                className="hero-approach-tile"
                {...enter(0.46)}
              >
                <span>MY APPROACH</span>

                <p>
                  Building with purpose.
                  <br />
                  Designing with intention.
                </p>
              </motion.div>

            </div>

          </div>
        </div>

        {/* ==================================
            SCROLL INDICATOR
        ================================== */}

        <div className="hero-footer-note">
          <a href="#work">
            SCROLL TO EXPLORE
            <span aria-hidden="true">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
