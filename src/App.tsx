import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CV from './components/CV';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MessageComposer from './components/MessageComposer';
import BlogIndex from './components/BlogIndex';
import WorkPage from './components/WorkPage';
import NotFound from './components/NotFound';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useCardSpotlight } from './hooks/useCardSpotlight';
import { useSvgGraphics } from './hooks/useSvgGraphics';
import { navigate, scrollToSection as scrollToElement, usePathname } from './hooks/useRouter';
import { SITE, getRouteMeta, posts, projects } from './data/siteMeta';
import './App.css';

// Article bodies + syntax highlighter only load when a post is opened
const BlogPost = lazy(() => import('./components/BlogPost'));

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
}

function App() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [showMessageComposer, setShowMessageComposer] = useState(false);
  const [techFilter, setTechFilter] = useState<string | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const isHome = pathname === '/';

  useScrollReveal(pathname);
  useCardSpotlight();
  useSvgGraphics();

  // Keep the head in sync for in-app navigation (the build prerenders the same tags per route)
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.title = meta?.title ?? `Page not found | ${SITE.name}`;
    const description = meta?.description ?? SITE.description;
    const url = `${SITE.url}${pathname === '/' ? '/' : `${pathname}/`}`;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', meta?.title ?? SITE.title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const sections = ['home', 'projects', 'cv', 'blog', 'contact'];
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
  }, [isHome]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (sectionId === 'contact') {
        // Open message composer instead of scrolling
        setShowMessageComposer(true);
        return;
      }

      if (isHome) {
        scrollToElement(sectionId);
        setActiveSection(sectionId);
      } else {
        navigate('/', { section: sectionId === 'home' ? undefined : sectionId });
      }
    },
    [isHome]
  );

  const openComposer = useCallback(() => setShowMessageComposer(true), []);

  const handleMessageSubmit = (message: string) => {
    // Handle message submission (e.g., send to email, API, etc.)
    console.log('Message:', message);
    // Then scroll to contact section
    if (scrollToElement('contact')) setActiveSection('contact');
  };

  const handleTechFilter = (tech: string) => {
    setTechFilter(tech);
    scrollToSection('projects');
  };

  const blogMatch = pathname.match(/^\/blog\/([\w-]+)$/);
  const workMatch = pathname.match(/^\/work\/([\w-]+)$/);

  let page: React.ReactNode;
  if (isHome) {
    page = (
      <>
        <Hero onNavigate={scrollToSection} onTechClick={handleTechFilter} />
        <Projects activeFilter={techFilter} onClearFilter={() => setTechFilter(null)} />
        <CV />
        <Blog />
        <Contact onSayHello={openComposer} />
      </>
    );
  } else if (pathname === '/blog') {
    page = <BlogIndex />;
  } else if (blogMatch && posts.some((post) => post.slug === blogMatch[1])) {
    page = (
      <Suspense fallback={<div className="page page-loading" aria-busy="true"></div>}>
        <BlogPost slug={blogMatch[1]} />
      </Suspense>
    );
  } else if (workMatch && projects.some((project) => project.slug === workMatch[1])) {
    page = <WorkPage key={workMatch[1]} slug={workMatch[1]} />;
  } else {
    page = <NotFound />;
  }

  const navSection = isHome
    ? activeSection
    : pathname.startsWith('/blog')
      ? 'blog'
      : pathname.startsWith('/work')
        ? 'projects'
        : '';

  return (
    <div className="app">
      <Navbar activeSection={navSection} onNavigate={scrollToSection} onOpenPalette={() => setPaletteOpen(true)} />
      <main>{page}</main>
      <Footer onNavigate={scrollToSection} />
      <MessageComposer
        isOpen={showMessageComposer}
        onClose={() => setShowMessageComposer(false)}
        onSubmit={handleMessageSubmit}
      />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigateSection={scrollToSection}
        onOpenComposer={openComposer}
      />
      <Toast />
    </div>
  );
}

export default App;
