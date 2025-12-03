import { useState, useEffect } from 'react';

function Hero({ onNavigate }) {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Lovro';

  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 150;
    const startDelay = 600;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, typingDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">
            {displayedName}
            <span className="typing-cursor">|</span>
          </span>
          <span className="hero-tagline">
            Crafting <span className="highlight">digital experiences</span> that matter
          </span>
        </h1>
        
        <p className="hero-description">
          Senior Flutter Engineer at most.io — building cross-platform, PCI-compliant payment and 
          retail solutions for the aviation industry, serving 160M+ passengers across major airlines worldwide.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
            View My Work
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
            Say Hello 👋
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">7+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">160M+</span>
            <span className="stat-label">Users Served</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">9+</span>
            <span className="stat-label">Major Projects</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;

