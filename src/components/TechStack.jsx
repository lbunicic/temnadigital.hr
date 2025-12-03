import { useState } from 'react';

function TechStack() {
  const techStack = [
    { name: 'Flutter', proficiency: 95, category: 'mobile', color: '#02569B' },
    { name: 'Dart', proficiency: 95, category: 'language', color: '#0175C2' },
    { name: 'Swift', proficiency: 90, category: 'language', color: '#FA7343' },
    { name: 'SwiftUI', proficiency: 90, category: 'mobile', color: '#007AFF' },
    { name: 'UIKit', proficiency: 90, category: 'mobile', color: '#2396F3' },
    { name: 'iOS', proficiency: 90, category: 'platform', color: '#000000' },
    { name: 'Kotlin', proficiency: 75, category: 'language', color: '#7F52FF' },
    { name: 'TypeScript', proficiency: 80, category: 'language', color: '#3178C6' },
    { name: 'JavaScript', proficiency: 85, category: 'language', color: '#F7DF1E' },
    { name: 'React', proficiency: 75, category: 'web', color: '#61DAFB' },
    { name: 'Git', proficiency: 90, category: 'tool', color: '#F05032' },
    { name: 'Firebase', proficiency: 85, category: 'backend', color: '#FFCA28' },
    { name: 'GraphQL', proficiency: 70, category: 'backend', color: '#E10098' },
    { name: 'RxSwift', proficiency: 85, category: 'mobile', color: '#B7178C' },
    { name: 'Combine', proficiency: 85, category: 'mobile', color: '#FA7343' },
    { name: 'CoreBluetooth', proficiency: 80, category: 'mobile', color: '#007AFF' },
    { name: 'SceneKit', proficiency: 75, category: 'mobile', color: '#2396F3' },
    { name: 'REST APIs', proficiency: 90, category: 'backend', color: '#009688' },
    { name: 'CI/CD', proficiency: 80, category: 'tool', color: '#2088FF' },
    { name: 'Xcode', proficiency: 90, category: 'tool', color: '#147EFB' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'language', label: 'Languages' },
    { id: 'backend', label: 'Backend' },
    { id: 'tool', label: 'Tools' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStack = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section className="tech-stack">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">
            Technologies & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Category Filters */}
        <div className="tech-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tech-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="tech-cloud">
          {filteredStack.map((tech, index) => (
            <div 
              key={tech.name} 
              className="tech-bubble"
              style={{
                '--tech-color': tech.color,
                '--animation-delay': `${index * 0.05}s`,
              }}
            >
              <div className="tech-bubble-content">
                <div className="tech-name">{tech.name}</div>
                <div className="tech-proficiency-bar">
                  <div 
                    className="tech-proficiency-fill" 
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
                <div className="tech-stats">
                  <span className="tech-level">{getProficiencyLabel(tech.proficiency)}</span>
                  <span className="tech-percentage">{tech.proficiency}%</span>
                </div>
              </div>
              <div className="tech-glow" />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="tech-legend">
          <div className="legend-item">
            <div className="legend-bar expert" />
            <span>Expert (90%+)</span>
          </div>
          <div className="legend-item">
            <div className="legend-bar advanced" />
            <span>Advanced (80-89%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-bar proficient" />
            <span>Proficient (70-79%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

