import { useState } from 'react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'mobile'];

  const projects = [
    {
      id: 1,
      title: 'UFO Tracking App',
      category: 'mobile',
      description: 'Refactored legacy codebase, set up modern architecture, and delivered to App Store. Resolved critical performance issues. 4.8★ rating with 2.1k reviews.',
      tags: ['SwiftUI', 'MapKit', 'Sentry', 'GraphQL'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true,
      link: 'https://tinyurl.com/enigma-ios',
    },
    {
      id: 2,
      title: 'Mindfulness App',
      category: 'mobile',
      description: 'Led complete project development including architecture setup, style guide, and code reviews. Implemented advanced SwiftUI animations and 3D UI with SceneKit integration.',
      tags: ['SwiftUI', 'SceneKit', '3D UI'],
      image: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      featured: true,
    },
    {
      id: 3,
      title: 'BLE SDK for Medical Device',
      category: 'mobile',
      description: 'Designed and implemented public API, built robust OTA firmware update mechanism, delivered via private CocoaPods. Wrote technical blog post about challenges.',
      tags: ['Bluetooth', 'CoreBluetooth', 'OTA', 'SDK'],
      image: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
      featured: false,
      link: 'http://tinyurl.com/ble-blogpost',
    },
    {
      id: 4,
      title: 'Gaming Arena Reservation',
      category: 'mobile',
      description: 'iPad application with complex seat reservation calendar. Integrated Square payments and implemented Clean Architecture patterns for better backend integration.',
      tags: ['RxSwift', 'iPadOS', 'WebSockets'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      featured: false,
    },
    {
      id: 5,
      title: 'Major Telecom Mobile App',
      category: 'mobile',
      description: 'Developed server-driven UI for subscription tier based screens, enabling dynamic content without app updates.',
      tags: ['UIKit', 'Server-Driven UI'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      featured: false,
    },
    {
      id: 6,
      title: 'Nova Eva',
      category: 'mobile',
      description: 'Freelance project maintained since 2020. 4.9★ rating with 95 reviews on App Store.',
      tags: ['UIKit', 'iOS'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      featured: false,
      link: 'https://tinyurl.com/nova-eva',
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
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project →
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">NDA Project</span>
                  )}
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

