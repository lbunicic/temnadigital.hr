import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import profileImg from '../assets/profile.jpg';

function CV() {
  const cvRef = useRef(null);

  const downloadPDF = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPos = margin;

      pdf.setFillColor(99, 102, 241);
      pdf.rect(0, 0, pageWidth, 45, 'F');

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont(undefined, 'bold');
      pdf.text('LOVRO BUNIČIĆ', margin, yPos + 10);

      pdf.setFontSize(11);
      pdf.setFont(undefined, 'normal');
      yPos += 18;
      pdf.text('Senior Flutter Engineer | Aviation Retail & PCI Fintech', margin, yPos);

      pdf.setFontSize(9);
      yPos += 8;
      pdf.text(`📧 ${contactInfo.email}  |  📍 ${contactInfo.location}  |  🔗 LinkedIn`, margin, yPos);
      
      yPos += 6;
      pdf.text(`🏢 ${contactInfo.company}  |  ☎ ${contactInfo.phone}`, margin, yPos);

      yPos = 50;
      pdf.setTextColor(40, 40, 40);

      pdf.setFillColor(99, 102, 241);
      pdf.rect(margin, yPos, 3, 6, 'F');
      pdf.setFontSize(14);
      pdf.setFont(undefined, 'bold');
      pdf.setTextColor(99, 102, 241);
      pdf.text('PROFESSIONAL EXPERIENCE', margin + 6, yPos + 4.5);
      yPos += 10;

      pdf.setTextColor(40, 40, 40);
      
      experience.forEach((exp, index) => {
        if (yPos > pageHeight - 40) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setFontSize(11);
        pdf.setFont(undefined, 'bold');
        pdf.text(exp.title, margin, yPos);
        
        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(10);
        const companyWidth = pdf.getTextWidth(exp.company);
        pdf.text(exp.company, margin, yPos + 5);
        
        pdf.setTextColor(100, 100, 100);
        pdf.text(exp.period, pageWidth - margin - pdf.getTextWidth(exp.period), yPos + 5);
        pdf.setTextColor(40, 40, 40);

        yPos += 10;

        if (exp.highlights.length > 0) {
          pdf.setFontSize(9);
          exp.highlights.forEach(highlight => {
            const lines = pdf.splitTextToSize(`• ${highlight}`, contentWidth - 5);
            lines.forEach(line => {
              if (yPos > pageHeight - 25) {
                pdf.addPage();
                yPos = margin;
              }
              pdf.text(line, margin + 3, yPos);
              yPos += 4;
            });
          });
        }

        yPos += 3;
      });

      yPos += 5;
      if (yPos > pageHeight - 60) {
        pdf.addPage();
        yPos = margin;
      }

      pdf.setFillColor(99, 102, 241);
      pdf.rect(margin, yPos, 3, 6, 'F');
      pdf.setFontSize(14);
      pdf.setFont(undefined, 'bold');
      pdf.setTextColor(99, 102, 241);
      pdf.text('EDUCATION', margin + 6, yPos + 4.5);
      yPos += 10;

      pdf.setTextColor(40, 40, 40);

      education.forEach((edu, index) => {
        if (yPos > pageHeight - 30) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setFontSize(11);
        pdf.setFont(undefined, 'bold');
        pdf.text(edu.degree, margin, yPos);

        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(10);
        yPos += 5;
        pdf.text(edu.school, margin, yPos);

        pdf.setTextColor(100, 100, 100);
        pdf.setFontSize(9);
        yPos += 4;
        pdf.text(`${edu.location}  |  ${edu.period}`, margin, yPos);
        pdf.setTextColor(40, 40, 40);

        yPos += 8;
      });

      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text('Generated from temnadigital.hr', pageWidth / 2, pageHeight - 10, { align: 'center' });

      pdf.save('Lovro_Bunicic_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
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

        <div className="cv-content" ref={cvRef}>
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

