function CV() {
  const contactInfo = {
    name: "Lovro Buničić",
    email: "lovro.bunicic@gmail.com",
    phone: "00385989393533",
    location: "Zagreb, Croatia",
    linkedin: "https://www.linkedin.com/in/lovro-buničić/",
    company: "most.io",
    companyUrl: "https://most.io/",
  };

  const experience = [
    {
      title: "Senior iOS Engineer",
      company: "most.io (Aviation Retail & PCI Fintech)",
      period: "2024 - Present",
      highlights: [
        "Building payment and retail solutions for aviation industry",
        "Working with PCI-compliant fintech systems for airline transactions",
        "iOS development for mobile retail platforms used by 28,000+ airline crew",
        "Supporting 1,000+ aircrafts and 160M+ passengers globally",
        "Clients include Southwest Airlines, Play, Hawaiian Airlines, and more",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Ars Futura d.o.o, Zagreb, Croatia",
      period: "2023 - 2024",
      highlights: [
        "iOS Development (UIKit, SwiftUI, Combine, RxSwift, SceneKit, CoreBluetooth...)",
        "Unit testing, Snapshot testing",
        "GIT, CI/CD, Firebase, SPM, Cocoapods",
        "Independently communicated with the clients",
        "Led a project team of a QA, backend and three iOS developers",
      ],
    },
    {
      title: "iOS Team Lead",
      company: "Ars Futura d.o.o, Zagreb, Croatia",
      period: "2022 - Present",
      highlights: [
        "Mentored junior and mid developers",
        "Provided feedback and career planning",
        "Conducted job interviews",
        "Cross team knowledge sharing and collaboration",
      ],
    },
    {
      title: "Junior/Mid Software Engineer",
      company: "Ars Futura d.o.o, Zagreb, Croatia",
      period: "2018 - 2022",
      highlights: [],
    },
  ];

  const education = [
    {
      degree: "MS Information and Communication Technology",
      school: "University of Zagreb, Faculty of Electrical Engineering and Computing (FER)",
      location: "Zagreb, Croatia",
      period: "2017 - 2019",
    },
    {
      degree: "BS Computing",
      school: "University of Zagreb, Faculty of Electrical Engineering and Computing (FER)",
      location: "Zagreb, Croatia",
      period: "2014 - 2017",
    },
  ];

  const projects = [
    {
      name: "Bluetooth (BLE) SDK for a medical device",
      highlights: [
        "Helped design the public API for the SDK",
        "Implemented the SDK",
        "Designed and implemented a robust Over The Air (OTA) firmware update mechanism",
        "Delivered the product via private cocoapod spec",
        "Wrote about architectural challenges in a blog post",
      ],
      technologies: ["Bluetooth", "OTA", "Cocoapods", "CoreBluetooth"],
      link: "http://tinyurl.com/ble-blogpost",
    },
    {
      name: "UFO Tracking app",
      rating: "4.8 ★, 2.1k Ratings",
      highlights: [
        "Assisted the team in refactoring legacy code, setting up app architecture, and delivering the app to the App Store",
        "Identified and resolved multiple performance issues",
      ],
      technologies: ["SwiftUI", "MapKit", "Sentry", "Segment", "SpriteKit", "GraphQL"],
      link: "https://tinyurl.com/enigma-ios",
    },
    {
      name: "Mindfulness app",
      highlights: [
        "Led the project development (architecture setup, style guide, code reviews etc.)",
        "Communicated deadlines, bottlenecks, estimates to both the team and the clients",
        "Supervised backend development",
        "Implemented advanced SwiftUI animations",
        "Implemented 3D UI with SceneKit, integrated it with SwiftUI",
        "Worked with 3D Assets Team to identify and resolve performance issues",
      ],
      technologies: ["SwiftUI", "SceneKit"],
    },
    {
      name: "Mobile App for a Major Telecom",
      highlights: [
        "Helped with app development",
        "Implemented server driven UI for subscription tier based screens",
      ],
      technologies: ["UIKit", "Server driven UI"],
    },
    {
      name: "Gaming Arena Reservation iPad Application",
      highlights: [
        "Helped resolving backend - client integration issues by introducing Clean Architecture concepts",
        "Helped implement Square payments",
        "Implemented custom and complex layouts for seat reservation calendar",
      ],
      technologies: ["RxSwift", "Clean Architecture", "iPadOS", "WebSockets", "Sentry", "Bitrise"],
    },
    {
      name: "Smart Lab Monitoring (IOT)",
      highlights: [
        "Developed a simple app that included sensor data monitoring and push notifications",
      ],
      technologies: ["UIKit", "Firebase Cloud Messaging"],
    },
    {
      name: "HSKIKI26 (freelance project)",
      highlights: [
        "Developed native Android and iOS conference itinerary applications for Croatian Meeting of Chemists and Chemical Engineers",
      ],
      technologies: ["UIKit"],
    },
    {
      name: "Nova Eva (freelance project)",
      rating: "4.9 ★, 95 ratings",
      highlights: ["Maintaining the app since 2020"],
      technologies: ["UIKit"],
      link: "https://tinyurl.com/nova-eva",
    },
  ];

  return (
    <section id="cv" className="cv-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span> & Background
          </h2>
        </div>

        <div className="cv-content">
          <div className="cv-header-card">
            <h1 className="cv-name">{contactInfo.name}</h1>
            <div className="cv-contact">
              <a href={`mailto:${contactInfo.email}`} className="cv-contact-item">
                <span className="cv-icon">✉</span>
                {contactInfo.email}
              </a>
              <span className="cv-contact-item">
                <span className="cv-icon">◎</span>
                {contactInfo.location}
              </span>
              <a href={contactInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                <span className="cv-icon">◇</span>
                {contactInfo.company}
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                <span className="cv-icon">◈</span>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="cv-section-block">
            <h2 className="cv-section-title">
              <span className="cv-title-icon">◇</span>
              Experience
            </h2>
            <div className="cv-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="cv-timeline-item">
                  <div className="cv-timeline-marker"></div>
                  <div className="cv-timeline-content">
                    <div className="cv-job-header">
                      <div>
                        <h3 className="cv-job-title">{exp.title}</h3>
                        <p className="cv-company">{exp.company}</p>
                      </div>
                      <span className="cv-period">{exp.period}</span>
                    </div>
                    {exp.highlights.length > 0 && (
                      <ul className="cv-highlights">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cv-section-block">
            <h2 className="cv-section-title">
              <span className="cv-title-icon">△</span>
              Education
            </h2>
            <div className="cv-education-grid">
              {education.map((edu, index) => (
                <div key={index} className="cv-education-card">
                  <div className="cv-degree-badge">{edu.degree.split(' ')[0]}</div>
                  <h3 className="cv-degree">{edu.degree}</h3>
                  <p className="cv-school">{edu.school}</p>
                  <div className="cv-edu-footer">
                    <span className="cv-edu-location">{edu.location}</span>
                    <span className="cv-edu-period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cv-section-block">
            <h2 className="cv-section-title">
              <span className="cv-title-icon">□</span>
              Notable Projects
            </h2>
            <div className="cv-projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="cv-project-card">
                  <div className="cv-project-header">
                    <h3 className="cv-project-name">{project.name}</h3>
                    {project.rating && (
                      <span className="cv-project-rating">{project.rating}</span>
                    )}
                  </div>
                  <ul className="cv-project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="cv-project-footer">
                    <div className="cv-project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="cv-tech-tag">{tech}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="cv-project-link">
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;

