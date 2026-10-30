
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectDialog from "../components/projects/ProjectDialog";

import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

  const totalProjects = String(projects.length).padStart(2, "0");

  const closeDialog = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="section-space projects-section"
      aria-labelledby="projects-title"
    >
      <div className="page-shell">

        {/* ======================================
            SECTION HEADER
        ====================================== */}

        <header className="projects-header">

          <div className="projects-header-left">
            <h2
              id="projects-title"
              className="projects-title"
            >
              A selection

              <span className="projects-title-second">
                of work
                <span className="projects-title-dot">.</span>
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

        {/* ======================================
            PROJECT GALLERY
        ====================================== */}

        <div className="projects-grid">

          {projects.map((project, index) => (
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
                <ProjectCard
                  project={project}
                  index={index}
                  onOpen={setSelectedProject}
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* ======================================
            SECTION FOOTER
        ====================================== */}

        <div className="projects-end">
          <p>
            Thoughtfully built. Continuously evolving.
          </p>
        </div>

      </div>

      {/* ======================================
          PROJECT DETAIL DIALOG
      ====================================== */}

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={closeDialog}
        />
      )}

    </section>
  );
}
