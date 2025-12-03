function Hero({ onNavigate }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for projects
        </div>
        
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Lovro</span>
          <span className="hero-tagline">
            Crafting <span className="highlight">digital experiences</span> that matter
          </span>
        </h1>
        
        <p className="hero-description">
          Senior Flutter Engineer at most.io — building cross-platform, PCI-compliant payment and 
          retail solutions for the aviation industry, serving 160M+ passengers across major airlines worldwide.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => onNavigate('portfolio')}>
            View My Work
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
            Get in Touch
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Happy Clients</span>
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

