import Reveal from '../ui/Reveal';
import ProjectArtwork from './ProjectArtwork';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <Reveal delay={index % 2 === 1 ? 0.08 : 0} className="project-card">
      <button type="button" className="project-open" onClick={() => onOpen(project)} aria-label={`Read more about ${project.title}`}>
        <div className="project-visual"><ProjectArtwork project={project} /><span className="project-hover-indicator" aria-hidden="true">View project ↗</span></div>
        <div className="project-meta flex items-start justify-between gap-4">
          <div><h3>{project.title}</h3><p>{project.category}</p></div>
          <span className="project-year">{project.year}</span>
        </div>
      </button>
    </Reveal>
  );
}
