import { useEffect } from 'react';

// Elements that fade up as a whole when scrolled into view
const REVEAL_SELECTOR = '.section-header, .cv-simple-header, .blog-cta, .contact-info-centered';
// Containers whose direct children fade up one after another.
// The class goes on the container so children mounted later (e.g. after a filter change) show immediately.
const STAGGER_SELECTOR = '.projects-grid, .blog-grid, .cv-simple-block';

// Re-run with the current path so elements of newly rendered pages get observed
export function useScrollReveal(pathname: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    document.querySelectorAll(STAGGER_SELECTOR).forEach((el) => {
      el.classList.add('reveal-stagger');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
