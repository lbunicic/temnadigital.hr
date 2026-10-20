import Link from './Link';
import { shouldHandleClick } from '../hooks/useRouter';
import DeviceMockup from './DeviceMockup';
import { projects } from '../data/siteMeta';
import { projectGraphic, projectScene } from '../data/graphics';
import AirlinePartners from './AirlinePartners';
import NdaProjectsCard from './NdaProjectsCard';

interface ProjectsProps {
  activeFilter: string | null;
  onClearFilter: () => void;
}

function Projects({ activeFilter, onClearFilter }: ProjectsProps) {
  const filteredProjects = activeFilter 
    ? projects.filter(project => project.technologies.includes(activeFilter))
    : projects;
  const publicProjects = filteredProjects.filter((project) => !project.nda);
  const ndaProjects = filteredProjects.filter((project) => project.nda);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Notable <span className="text-gradient">Work</span> & Achievements
          </h2>
          <p className="section-subtitle">
            A selection of key projects showcasing my expertise in mobile development, fintech, and complex system architecture
          </p>
        </div>

        {activeFilter && (
          <div className="projects-filter-indicator">
            <span className="filter-text">
              Showing <strong>{activeFilter}</strong> projects ({filteredProjects.length})
            </span>
            <button className="filter-clear-btn" onClick={onClearFilter}>
              Clear filter ✕
            </button>
          </div>
        )}

        <div className={`projects-grid bento${activeFilter ? ' is-filtered' : ''}`}>
          {publicProjects.map((project) => {
            const size = activeFilter ? undefined : project.size;
            return (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                transition
                data-slug={project.slug}
                className={`project-card bento-tile${size ? ` bento-${size}` : ''}`}
                onClick={(event) => {
                  // Only plain clicks navigate in-app (and morph); modified clicks open a new tab
                  if (shouldHandleClick(event)) event.currentTarget.classList.add('vt-active');
                }}
              >
                {size ? (
                  <div className="bento-visual">
                    <DeviceMockup
                      kind={project.device}
                      graphic={projectGraphic(project.slug)}
                      image={project.image}
                      scene={projectScene(project.slug)}
                      alt={`${project.name} screenshot`}
                    />
                  </div>
                ) : project.image || projectScene(project.slug) ? (
                  <div className={`project-card-shot project-card-shot-${project.device}`} aria-hidden="true">
                    {project.image ? <img src={project.image} alt="" loading="lazy" /> : projectScene(project.slug)}
                  </div>
                ) : (
                  <div className="project-card-graphic">{projectGraphic(project.slug)}</div>
                )}

                <div className="bento-body">
                  <span className="bento-eyebrow">
                    {project.category} · {project.year}
                    {project.nda && <span className="project-card-nda">NDA</span>}
                  </span>
                  <h3 className="project-card-name">{project.name}{project.indie && <span className="project-indie-tag">Indie</span>}</h3>
                  {project.rating && <span className="project-card-rating">{project.rating}</span>}

                  {size === 'xl' && project.metrics ? (
                    <dl className="bento-metrics">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="bento-metric">
                          <dt>{metric.label}</dt>
                          <dd>{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : size === 'wide' ? (
                    <ul className="bento-points">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="bento-summary">{project.highlights[0]}</p>
                  )}

                  {size === 'xl' && project.airlines && (
                    <AirlinePartners airlines={project.airlines} compact />
                  )}

                  <div className="project-card-footer">
                    <div className="project-card-tech">
                      {project.technologies.slice(0, size ? 5 : 3).map((tech) => (
                        <span key={tech} className="project-tech-tag">{tech}</span>
                      ))}
                    </div>
                    <span className="project-card-link" aria-hidden="true">Details →</span>
                  </div>
                </div>
              </Link>
            );
          })}
          {ndaProjects.length > 0 && <NdaProjectsCard projects={ndaProjects} />}
        </div>
      </div>
    </section>
  );
}

export default Projects;

