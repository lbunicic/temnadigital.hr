function About() {
  const skills = [
    { name: 'Flutter / Dart', level: 95 },
    { name: 'iOS (UIKit, SwiftUI)', level: 92 },
    { name: 'RxSwift / Combine', level: 88 },
    { name: 'CoreBluetooth / BLE', level: 90 },
    { name: 'CI/CD & Git', level: 87 },
    { name: 'Firebase & Cloud', level: 85 },
  ];

  const services = [
    {
      icon: '◇',
      title: 'Flutter Development',
      description: 'Cross-platform mobile applications using Flutter and Dart for iOS and Android.',
    },
    {
      icon: '△',
      title: 'Fintech & Payments',
      description: 'PCI-compliant payment systems and secure transaction processing for aviation retail.',
    },
    {
      icon: '○',
      title: 'iOS & Native Dev',
      description: 'Native iOS with UIKit/SwiftUI, BLE integration, and platform-specific solutions.',
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
              I'm Lovro, a Senior Flutter Engineer at <span className="gradient-highlight">most.io</span>, working on aviation retail and PCI-compliant 
              fintech solutions. With over <span className="gradient-highlight">7 years of experience</span>, I specialize in building high-quality 
              cross-platform and native mobile applications for enterprise-scale systems.
            </p>
            <p>
              Currently at most.io, I'm building Flutter-based payment and retail platforms used by <span className="gradient-highlight">28,000+ airline crew members</span> across <span className="gradient-highlight">1,000+ aircrafts</span>, 
              serving <span className="gradient-highlight">160M+ passengers</span> globally. Our clients 
              include <span className="gradient-highlight">Southwest Airlines</span>, <span className="gradient-highlight">Play</span>, <span className="gradient-highlight">Hawaiian Airlines</span>, and other major carriers.
            </p>
            <p>
              My expertise spans Flutter/Dart and the iOS ecosystem—from Flutter widgets to native UIKit and 
              SwiftUI, including advanced frameworks like <span className="gradient-highlight">CoreBluetooth</span>, <span className="gradient-highlight">SceneKit</span>, and <span className="gradient-highlight">RxSwift</span>. I've led 
              projects for major telecom companies, built <span className="gradient-highlight">BLE SDKs for medical devices</span>, and developed <span className="gradient-highlight">secure payment systems</span>. I'm passionate about clean architecture, automated testing, and delivering 
              solutions that make a real impact.
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

