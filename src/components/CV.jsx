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
      title: "Senior Software Engineer",
      company: "most.io",
      period: "2024 - Present",
      description: "Cross-platform, PCI-compliant payment and retail solutions for aviation, serving 160M+ passengers",
    },
    {
      title: "Senior iOS Engineer & Team Lead",
      company: "Ars Futura",
      period: "2018 - 2024",
      description: "iOS development, team leadership, and client collaboration across multiple projects",
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
        <div className="cv-simple-header">
          <h2>CV</h2>
          <button className="download-cv-btn" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>

        <div className="cv-simple-content">
          <div className="cv-simple-block">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="cv-simple-item">
                <div className="cv-simple-item-header">
                  <div>
                    <h4>{exp.title}</h4>
                    <p className="cv-simple-company">{exp.company}</p>
                  </div>
                  <span className="cv-simple-period">{exp.period}</span>
                </div>
                <p className="cv-simple-description">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="cv-simple-block">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="cv-simple-item">
                <div className="cv-simple-item-header">
                  <div>
                    <h4>{edu.degree}</h4>
                    <p className="cv-simple-company">{edu.school}</p>
                  </div>
                  <span className="cv-simple-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-simple-contact">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span>•</span>
            <span>{contactInfo.location}</span>
            <span>•</span>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;

