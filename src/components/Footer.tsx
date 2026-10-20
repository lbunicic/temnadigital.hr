import LogoMark from './LogoMark';

interface FooterProps {
  onNavigate: (id: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: '◇', url: 'https://www.linkedin.com/in/lovro-buni%C4%8Di%C4%87/' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '#cv' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/sentir/privacy/' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <span className="logo-icon"><LogoMark /></span>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  {link.href.startsWith('#') ? (
                    <a
                      href={`/${link.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.href.slice(1));
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a href={link.href}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
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
