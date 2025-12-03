function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '◈', url: '#' },
    { name: 'LinkedIn', icon: '◇', url: '#' },
    { name: 'Twitter', icon: '○', url: '#' },
    { name: 'Dribbble', icon: '△', url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '#cv' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">Temna Digital</span>
            </a>
            <p className="footer-tagline">
              Crafting digital experiences that inspire and perform.
            </p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest articles and insights.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Temna Digital. All rights reserved.
          </p>
          <p className="made-with">
            Made with <span className="heart">♥</span> by Lovro
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

