import { useEffect, useRef } from 'react';
import ProjectArtwork from './ProjectArtwork';
import './ProjectDialog.css';

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    return () => { if (dialog.open) dialog.close(); };
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={onClose}
      onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close(); }}
      aria-labelledby="project-dialog-title"
    >
      <div className="dialog-inner">
        <div className="dialog-top flex items-center justify-between">
          <span className="eyebrow">PROJECT / {project.number}</span>
          <button type="button" onClick={() => dialogRef.current.close()} className="dialog-close" aria-label="Close project details">Close ×</button>
        </div>
        <div className="dialog-art"><ProjectArtwork project={project} /></div>
        <div className="dialog-copy"><p className="eyebrow">{project.category} · {project.year}</p><h2 id="project-dialog-title">{project.title}</h2><p className="dialog-summary">{project.description}</p>
          <div className="dialog-details"><div><span className="eyebrow">MY ROLE</span><p>{project.role}</p></div><div><span className="eyebrow">TOOLS & FOCUS</span><p>{project.technologies.join(' · ')}</p></div></div>
          <div className="dialog-links">{project.website && <a target="_blank" rel="noopener noreferrer" href={project.website}>Live website ↗</a>}{project.repository && <a target="_blank" rel="noopener noreferrer" href={project.repository}>Source code ↗</a>}</div>
        </div>
      </div>
    </dialog>
  );
}
