import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MessageComposer from './components/MessageComposer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showMessageComposer, setShowMessageComposer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'cv', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      // Open message composer instead of scrolling
      setShowMessageComposer(true);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection(sectionId);
  };

  const handleMessageSubmit = (message: string) => {
    // Handle message submission (e.g., send to email, API, etc.)
    console.log('Message:', message);
    // Then scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection('contact');
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Projects />
        <CV />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <MessageComposer
        isOpen={showMessageComposer}
        onClose={() => setShowMessageComposer(false)}
        onSubmit={handleMessageSubmit}
      />
    </div>
  );
}

export default App;
