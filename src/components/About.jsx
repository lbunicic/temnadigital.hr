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
      title: 'SDK Development',
      description: 'Building robust SDKs and frameworks, including BLE and hardware integration.',
    },
    {
      icon: '○',
      title: 'Team Leadership',
      description: 'Mentoring developers, conducting interviews, and fostering team collaboration.',
    },
    {
      icon: '□',
      title: 'Architecture & CI/CD',
      description: 'Clean architecture patterns, testing strategies, and automated deployment pipelines.',
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
              I'm Lovro, a Senior iOS Engineer and Team Lead at Ars Futura. With over 7 years of experience, 
              I specialize in building high-quality native iOS applications and leading development teams.
            </p>
            <p>
              My expertise spans the entire iOS ecosystem—from UIKit and SwiftUI to advanced frameworks like 
              CoreBluetooth, SceneKit, and RxSwift. I've led projects for major telecom companies, built 
              BLE SDKs for medical devices, and developed apps that serve thousands of users daily.
            </p>
            <p>
              As a Team Lead, I mentor junior and mid-level developers, conduct technical interviews, and 
              foster cross-team collaboration. I'm passionate about clean architecture, automated testing, 
              and sharing knowledge with the developer community.
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

