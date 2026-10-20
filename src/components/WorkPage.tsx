import Link from './Link';
import DeviceMockup from './DeviceMockup';
import { navigate } from '../hooks/useRouter';
import { projects } from '../data/siteMeta';
import { projectGraphic, projectScene } from '../data/graphics';
import AirlinePartners from './AirlinePartners';

interface WorkPageProps {
  slug: string;
}

const caseStudySections = [
  { key: 'problem', title: 'The problem' },
  { key: 'role', title: 'My role' },
  { key: 'approach', title: 'Approach' },
  { key: 'outcome', title: 'Outcome' },
] as const;

function WorkPage({ slug }: WorkPageProps) {
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const backToWork = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    navigate('/', {
      section: 'projects',
      transition: true,
      // Morph the header back into its tile on the home page
      afterUpdate: () => document.querySelector(`.bento-tile[data-slug="${slug}"]`)?.classList.add('vt-active'),
    });
  };

  const caseStudy = project.caseStudy ?? {};
  const filledSections = caseStudySections.filter((section) => caseStudy[section.key]);

  return (
    <article className="page work-page">
      <div className="section-container">
        <a href="/#projects" className="page-back" onClick={backToWork}>
          ← All work
        </a>

        <header className="work-hero">
          <div className="work-hero-text">
            <span className="bento-eyebrow">
              {project.category} · {project.year}
              {project.nda && <span className="project-card-nda">NDA</span>}
            </span>
            <h1 className="page-title">{project.name}{project.indie && <span className="project-indie-tag">Indie</span>}</h1>
            {project.rating && <span className="project-card-rating">{project.rating}</span>}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary work-visit">
                Visit project <span className="btn-arrow">↗</span>
              </a>
            )}
          </div>
          <div className="work-hero-visual">
            <DeviceMockup
              kind={project.device}
              graphic={projectGraphic(project.slug)}
              image={project.image}
              scene={projectScene(project.slug)}
              alt={`${project.name} screenshot`}
            />
          </div>
        </header>

        {project.metrics && (
          <dl className="work-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bento-metric">
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.airlines && <AirlinePartners airlines={project.airlines} />}

        <div className="work-body">
          {filledSections.map((section) => (
            <section key={section.key} className="work-section">
              <h2>{section.title}</h2>
              <p>{caseStudy[section.key]}</p>
            </section>
          ))}

          <section className="work-section">
            <h2>What I did</h2>
            <ul className="work-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className="work-section">
            <h2>Stack</h2>
            <div className="project-card-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {project.nda && (
            <p className="work-nda-note">
              Client work under NDA, so details here are limited.
            </p>
          )}
        </div>

        <nav className="work-next" aria-label="Next project">
          <span className="bento-eyebrow">Next project</span>
          <Link to={`/work/${next.slug}`} className="work-next-link">
            {next.name} <span className="link-arrow">→</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}

export default WorkPage;
