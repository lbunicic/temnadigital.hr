function About() {
  const skills = [
    { name: 'iOS (UIKit, SwiftUI)', level: 95 },
    { name: 'RxSwift / Combine', level: 92 },
    { name: 'SceneKit / SpriteKit', level: 88 },
    { name: 'CoreBluetooth / BLE', level: 90 },
    { name: 'CI/CD & Git', level: 87 },
    { name: 'Firebase & Cloud', level: 85 },
  ];

  const services = [
    {
      icon: '◇',
      title: 'iOS Development',
      description: 'Native iOS applications using UIKit, SwiftUI, and modern Swift frameworks.',
    },
    {
      icon: '△',
      title: 'Fintech & Payments',
      description: 'PCI-compliant payment systems and secure transaction processing for aviation retail.',
    },
    {
      icon: '○',
      title: 'SDK & Hardware',
      description: 'Building robust SDKs, BLE integration, and hardware-software solutions.',
    },
    {
      icon: '□',
      title: 'Enterprise Solutions',
      description: 'Scalable systems serving thousands of users with clean architecture and CI/CD.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate about creating <span className="text-gradient">impactful</span> digital solutions
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              I'm Lovro, a Senior iOS Engineer at most.io, working on aviation retail and PCI-compliant fintech 
              solutions. With over 7 years of experience, I specialize in building high-quality native iOS 
              applications for enterprise-scale systems.
            </p>
            <p>
              Currently at most.io, I'm building payment and retail platforms used by 28,000+ airline crew 
              members across 1,000+ aircrafts, serving 160M+ passengers globally. Our clients include Southwest 
              Airlines, Play, Hawaiian Airlines, and other major carriers.
            </p>
            <p>
              My expertise spans the entire iOS ecosystem—from UIKit and SwiftUI to advanced frameworks like 
              CoreBluetooth, SceneKit, and RxSwift. I've led projects for major telecom companies, built 
              BLE SDKs for medical devices, and developed secure payment systems. I'm passionate about clean 
              architecture, automated testing, and delivering solutions that make a real impact.
            </p>
          </div>

          <div className="about-skills">
            <h3>Technical Expertise</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ '--progress': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

