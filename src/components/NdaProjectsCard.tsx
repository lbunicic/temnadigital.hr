import { useState } from 'react';
import type { ProjectMeta } from '../data/siteMeta';
import { projectGraphic, projectScene } from '../data/graphics';
import DeviceMockup from './DeviceMockup';
import Link from './Link';

interface NdaProjectsCardProps {
  projects: ProjectMeta[];
}

function NdaCollectionGraphic() {
  return (
    <svg className="project-graphic nda-collection-graphic" viewBox="0 0 260 220" role="img" aria-label="A collection of private product interfaces">
      <g fill="none" stroke="currentColor">
        <rect x="34" y="38" width="150" height="108" rx="12" opacity="0.12" />
        <rect x="51" y="51" width="158" height="116" rx="12" fill="var(--bg-card)" opacity="0.35" />
        <rect x="70" y="68" width="158" height="116" rx="12" fill="var(--bg-card)" strokeOpacity="0.48" />
        <path d="M70 91h158" opacity="0.18" />
        <circle cx="84" cy="80" r="3" fill="currentColor" opacity="0.35" />
        <circle cx="94" cy="80" r="3" fill="currentColor" opacity="0.22" />
        <circle cx="104" cy="80" r="3" fill="currentColor" opacity="0.14" />

        <rect x="84" y="108" width="48" height="45" rx="8" fill="currentColor" fillOpacity="0.04" opacity="0.5" />
        <rect x="151" y="108" width="62" height="16" rx="6" fill="currentColor" fillOpacity="0.05" opacity="0.42" />
        <rect x="151" y="136" width="62" height="17" rx="6" fill="currentColor" fillOpacity="0.05" opacity="0.25" />
        <path d="M99 130h18m-9-9v18" opacity="0.55" strokeLinecap="round" />
        <path d="M162 116h25m-25 28h35" opacity="0.38" strokeLinecap="round" />

        <path d="M108 153v12c0 8 7 14 15 14h43" strokeDasharray="3 5" opacity="0.22" />
        <circle r="3" fill="currentColor" stroke="none" opacity="0.75">
          <animateMotion path="M108 153v12c0 8 7 14 15 14h43" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(167 164)">
        <rect width="60" height="28" rx="14" fill="currentColor" opacity="0.08" />
        <path d="M18 14h24" stroke="currentColor" strokeLinecap="round" opacity="0.45" />
        <circle cx="18" cy="14" r="3" fill="currentColor" opacity="0.7">
          <animate attributeName="cx" values="18;42;18" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(40 159) rotate(-8)">
        <rect width="48" height="28" rx="7" fill="var(--bg-card)" stroke="currentColor" strokeOpacity="0.32" />
        <path d="M11 10h25M11 17h16" stroke="currentColor" strokeLinecap="round" opacity="0.32" />
      </g>
    </svg>
  );
}

function ProjectPreview({ project, className }: { project: ProjectMeta; className: string }) {
  return (
    <div className={`nda-project-preview ${className}`}>
      <DeviceMockup
        kind={project.device}
        graphic={projectGraphic(project.slug)}
        scene={projectScene(project.slug)}
        alt={`${project.name} preview`}
      />
      <div className="nda-preview-copy">
        <strong>{project.name}</strong>
        <ul>
          {project.highlights.slice(0, 2).map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <Link to={`/work/${project.slug}`} transition className="nda-preview-link">View details →</Link>
      </div>
    </div>
  );
}

function NdaProjectsCard({ projects }: NdaProjectsCardProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.slug === activeSlug);

  return (
    <article
      className={`project-card bento-tile bento-wide nda-collection${activeProject ? ' has-preview' : ''}`}
      onMouseLeave={() => setActiveSlug(null)}
    >
      <div className="bento-visual nda-collection-visual">
        <div className="nda-collection-placeholder">
          <NdaCollectionGraphic />
        </div>
        {activeProject && <ProjectPreview project={activeProject} className="nda-desktop-preview" />}
      </div>

      <div className="bento-body nda-collection-body">
        <span className="bento-eyebrow">
          Client work · {projects.length} projects
          <span className="project-card-nda">NDA</span>
        </span>
        <h3 className="project-card-name">Selected work under NDA</h3>
        <p className="nda-collection-hint">Hover or tap a project to preview its animation and key points.</p>

        <div className="nda-collection-list">
          {projects.map((project) => {
            const isActive = project.slug === activeSlug;
            return (
              <div key={project.slug} className="nda-collection-entry">
                <button
                  type="button"
                  className={`nda-collection-item${isActive ? ' is-active' : ''}`}
                  aria-pressed={isActive}
                  title={project.name}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onFocus={() => setActiveSlug(project.slug)}
                  onClick={() => setActiveSlug(project.slug)}
                >
                  <span>{project.name}</span>
                  <small>{project.category} · {project.year}</small>
                </button>
                {isActive && <ProjectPreview project={project} className="nda-mobile-preview" />}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default NdaProjectsCard;
