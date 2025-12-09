function Contact() {
  const contactInfo = [
    {
      icon: '✉',
      label: 'Email',
      value: 'hello@temnadigital.com',
      link: 'mailto:hello@temnadigital.com',
    },
    {
      icon: '◎',
      label: 'Location',
      value: 'Zagreb, Croatia',
      link: null,
    },
    {
      icon: '◈',
      label: 'Social',
      value: '@temnadigital',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="text-gradient">amazing</span> together
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact-info-centered">
          <div className="contact-intro">
            <h3>Get in Touch 👋</h3>
            <p>
              Whether you have a question, want to start a project, or simply want to connect — 
              feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </div>
  
          <div className="contact-details">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-text">
                  <span className="contact-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} className="contact-value">{item.value}</a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

