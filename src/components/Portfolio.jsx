import { useState } from 'react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'branding'];

  const projects = [
    {
      id: 1,
      title: 'Nexus Finance',
      category: 'web',
      description: 'A modern fintech dashboard with real-time analytics and intuitive UX.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true,
    },
    {
      id: 2,
      title: 'Pulse Health',
      category: 'mobile',
      description: 'Cross-platform health tracking app with AI-powered insights.',
      tags: ['Flutter', 'Firebase', 'ML Kit'],
      image: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      featured: true,
    },
    {
      id: 3,
      title: 'Aurora Brand',
      category: 'branding',
      description: 'Complete brand identity for a sustainable fashion startup.',
      tags: ['Brand Strategy', 'Visual Design', 'Guidelines'],
      image: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
      featured: false,
    },
    {
      id: 4,
      title: 'Orbit CRM',
      category: 'web',
      description: 'Enterprise CRM solution with advanced automation features.',
      tags: ['Next.js', 'GraphQL', 'AWS'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      featured: false,
    },
    {
      id: 5,
      title: 'Mindful',
      category: 'mobile',
      description: 'Meditation and mindfulness app with personalized sessions.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      featured: false,
    },
    {
      id: 6,
      title: 'Vertex Studio',
      category: 'branding',
      description: 'Brand refresh for a creative agency focusing on digital experiences.',
      tags: ['Logo Design', 'Typography', 'Web Design'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="text-gradient">works</span> & projects
          </h2>
          <p className="section-subtitle">
            A curated collection of projects that showcase my expertise in design and development.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image" style={{ background: project.image }}>
                <div className="project-overlay">
                  <button className="project-link">View Project →</button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary">
            Start a Project
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

