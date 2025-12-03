import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
      value: 'Ljubljana, Slovenia',
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

        <div className="contact-grid">
          <div className="contact-info">
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

            <div className="contact-availability">
              <div className="availability-indicator">
                <span className="availability-dot"></span>
                <span>Currently available for new projects</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary btn-full ${submitted ? 'submitted' : ''}`}>
              {submitted ? (
                <>
                  <span className="success-icon">✓</span>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

