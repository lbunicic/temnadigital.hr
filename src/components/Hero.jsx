import { useState, useEffect } from 'react';

function Hero({ onNavigate }) {
  const [displayedName, setDisplayedName] = useState('');
  const [yearsCount, setYearsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  
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

  // Animated counters
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startDelay = 1200; // Start after name animation
    
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const endValues = {
        years: 7,
        users: 160,
        projects: 9
      };

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setYearsCount(Math.floor(easeOutQuart * endValues.years));
        setUsersCount(Math.floor(easeOutQuart * endValues.users));
        setProjectsCount(Math.floor(easeOutQuart * endValues.projects));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
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
            <span className="stat-number">{yearsCount}+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">Millions</span>
            <span className="stat-label">Users Served</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">{projectsCount}+</span>
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

