import { useState, useEffect } from 'react';
import { FaApple, FaGlobe } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { projects, SITE } from '../data/siteMeta';

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: SITE.timeZone,
  timeZoneName: 'short',
});

function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-status">
      <span className="status-dot" aria-hidden="true"></span>
      <span>{SITE.location}</span>
      <span className="hero-status-divider" aria-hidden="true">·</span>
      <time dateTime={now.toISOString()} className="hero-status-time">
        {timeFormatter.format(now)}
      </time>
      {SITE.availability && (
        <>
          <span className="hero-status-divider" aria-hidden="true">·</span>
          <span>{SITE.availability}</span>
        </>
      )}
    </div>
  );
}

interface HeroProps {
  onNavigate: (id: string) => void;
  onTechClick: (tech: string) => void;
}

function Hero({ onNavigate, onTechClick }: HeroProps) {
  const [displayedName, setDisplayedName] = useState('');
  const [yearsCount, setYearsCount] = useState(0);
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

  // Animated counters - start only after name animation completes
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const typingStartDelay = 600; // When typing starts
    const typingDuration = fullName.length * 150; // Time to type all letters
    const pauseAfterName = 400; // Small pause after name finishes
    const startDelay = typingStartDelay + typingDuration + pauseAfterName;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const endValues = {
        years: 7,
        projects: projects.length
      };

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setYearsCount(Math.floor(easeOutQuart * endValues.years));
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
        <LiveClock />
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">
            {displayedName}
            <span className="typing-cursor"></span>
          </span>
          <span className="hero-tagline">
            Crafting <span className="highlight">digital experiences</span> that matter
          </span>
        </h1>

        <p className="hero-description">
          Senior Software Engineer with over 7 years of experience building high-quality mobile applications
          for enterprise-scale systems across fintech, healthcare, and telecom industries.
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
            <span className="stat-number">{projectsCount}+</span>
            <span className="stat-label">Major Projects</span>
          </div>
        </div>

        <div className="hero-tech">
          <button className="tech-badge" onClick={() => onTechClick('iOS')}>
            <FaApple className="tech-badge-icon" />
            <span>iOS</span>
          </button>
          <button className="tech-badge" onClick={() => onTechClick('Flutter')}>
            <SiFlutter className="tech-badge-icon" />
            <span>Flutter</span>
          </button>
          <button className="tech-badge" onClick={() => onTechClick('Web')}>
            <FaGlobe className="tech-badge-icon" />
            <span>Web</span>
          </button>
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

