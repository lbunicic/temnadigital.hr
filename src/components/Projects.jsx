import { 
  AviationPaymentGraphic, 
  UFOGraphic, 
  MindfulnessGraphic, 
  BluetoothDeviceGraphic, 
  MobileAppGraphic,
  TelecomGraphic,
  GamingArenaGraphic,
  IoTGraphic,
  ConferenceGraphic,
} from './ProjectGraphics';

function Projects() {
  const projects = [
    {
      name: "most.io - Aviation Retail Platform",
      category: "Fintech",
      year: 2024,
      graphic: <AviationPaymentGraphic />,
      stats: "160M+ Passengers • 28K+ Crew • 1K+ Aircrafts",
      highlights: [
        "Building cross-platform Flutter payment and retail solutions for aviation industry",
        "Working with PCI-compliant fintech systems for airline transactions",
        "Clients include Southwest Airlines, Play, Hawaiian Airlines, and more",
        "Mobile POS and secure, offline-capable payment processing",
        "Serving 5,000+ flights per day across global airline networks",
      ],
      technologies: ["Flutter", "Dart", "PCI Compliance", "Fintech", "Offline-First"],
      link: "https://most.io/",
    },
    {
      name: "UFO Tracking app",
      category: "Entertainment",
      year: 2023,
      graphic: <UFOGraphic />,
      rating: "4.8 ★, 4.8k Ratings",
      highlights: [
        "Assisted the team in refactoring legacy code, setting up app architecture, and delivering the app to the App Store",
        "Identified and resolved multiple performance issues",
      ],
      technologies: ["SwiftUI", "MapKit", "Sentry", "Segment", "SpriteKit", "GraphQL"],
      link: "https://tinyurl.com/enigma-ios",
    },
    {
      name: "Nova Eva (freelance project)",
      category: "Lifestyle",
      year: 2020,
      graphic: <MobileAppGraphic />,
      rating: "4.9 ★, 108 ratings",
      highlights: ["Maintaining the app since 2020"],
      technologies: ["UIKit"],
      link: "https://tinyurl.com/nova-eva",
    },
    {
      name: "Bluetooth (BLE) SDK for a medical device",
      category: "Healthcare",
      year: 2022,
      graphic: <BluetoothDeviceGraphic />,
      nda: true,
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
      name: "Mindfulness app",
      category: "Healthcare",
      year: 2023,
      graphic: <MindfulnessGraphic />,
      nda: true,
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
      category: "Telecom",
      year: 2022,
      graphic: <TelecomGraphic />,
      nda: true,
      highlights: [
        "Helped with app development",
        "Implemented server driven UI for subscription tier based screens",
      ],
      technologies: ["UIKit", "Server driven UI"],
    },
    {
      name: "Gaming Arena Reservation iPad Application",
      category: "Entertainment",
      year: 2021,
      graphic: <GamingArenaGraphic />,
      nda: true,
      highlights: [
        "Helped resolving backend - client integration issues by introducing Clean Architecture concepts",
        "Helped implement Square payments",
        "Implemented custom and complex layouts for seat reservation calendar",
      ],
      technologies: ["RxSwift", "Clean Architecture", "iPadOS", "WebSockets", "Sentry", "Bitrise"],
    },
    {
      name: "Smart Lab Monitoring (IOT)",
      category: "IoT",
      year: 2020,
      graphic: <IoTGraphic />,
      nda: true,
      highlights: [
        "Developed a simple app that included sensor data monitoring and push notifications",
      ],
      technologies: ["UIKit", "Firebase Cloud Messaging"],
    },
    {
      name: "HSKIKI26 (freelance project)",
      category: "Events",
      year: 2019,
      graphic: <ConferenceGraphic />,
      nda: true,
      highlights: [
        "Developed native Android and iOS conference itinerary applications for Croatian Meeting of Chemists and Chemical Engineers",
      ],
      technologies: ["UIKit"],
    },
  ];

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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              {project.graphic && (
                <div className="project-card-graphic">
                  {project.graphic}
                </div>
              )}
              <div className="project-card-header">
                <h3 className="project-card-name">{project.name}</h3>
                <div className="project-card-labels">
                  {project.rating && (
                    <span className="project-card-rating">{project.rating}</span>
                  )}
                  {project.stats && (
                    <span className="project-card-stats">{project.stats}</span>
                  )}
                  {project.nda && !project.rating && !project.stats && (
                    <span className="project-card-nda">NDA</span>
                  )}
                </div>
              </div>
              <ul className="project-card-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-card-footer">
                <div className="project-card-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                    View →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

