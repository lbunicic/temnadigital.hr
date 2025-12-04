import profileImg from '../assets/profile.jpg';
import cvPdf from '../assets/cv_bunicic.pdf';

function CV() {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Lovro_Bunicic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
      title: "Senior Flutter Engineer",
      company: "most.io (Aviation Retail & PCI Fintech)",
      period: "2024 - Present",
      highlights: [
        "Building cross-platform payment and retail solutions for aviation industry",
        "Working with PCI-compliant fintech systems for airline transactions",
        "Flutter development for mobile retail platforms used by 28,000+ airline crew",
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

  return (
    <section id="cv" className="cv-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span> & Education
          </h2>
          <button className="download-cv-btn" onClick={downloadPDF}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV as PDF
          </button>
        </div>

        <div className="cv-content">
          <div className="cv-header-card">
            <img src={profileImg} alt="Lovro Buničić" className="cv-profile-img" />
            <div className="cv-header-info">
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
        </div>
      </div>
    </section>
  );
}

export default CV;

