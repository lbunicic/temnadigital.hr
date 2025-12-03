function About() {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Node.js / Express', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Flutter / Dart', level: 82 },
    { name: 'Cloud & DevOps', level: 80 },
  ];

  const services = [
    {
      icon: '◇',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    },
    {
      icon: '△',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications that deliver native-like experiences.',
    },
    {
      icon: '○',
      title: 'Digital Strategy',
      description: 'Strategic consulting to help your business thrive in the digital landscape.',
    },
    {
      icon: '□',
      title: 'Brand Identity',
      description: 'Crafting unique visual identities that resonate with your target audience.',
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
              I'm Lovro, founder of Temna Digital — a creative development studio based in the heart of Europe. 
              With over 5 years of experience in the digital space, I've helped businesses transform their ideas 
              into powerful digital products.
            </p>
            <p>
              My approach combines technical excellence with creative thinking. I believe that great software 
              isn't just about code—it's about understanding people, solving real problems, and delivering 
              experiences that feel effortless and delightful.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
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

