import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LogoMark from './LogoMark';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenPalette: () => void;
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

function Navbar({ activeSection, onNavigate, onOpenPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a
          href="/"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <span className="logo-icon"><LogoMark animated /></span>
          <span className="logo-text">Temna Digital</span>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
                {item.id === 'blog' && <span className="nav-badge-pulse"></span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="palette-trigger" onClick={onOpenPalette} aria-label="Open command menu">
            <span className="palette-trigger-icon" aria-hidden="true">⌕</span>
            <kbd className="palette-trigger-kbd">{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

