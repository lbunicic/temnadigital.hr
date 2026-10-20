import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

// Minimal History API router. GitHub Pages serves prerendered /blog/<slug>/index.html files
// and redirects /blog/<slug> to /blog/<slug>/, so paths are normalized without the trailing slash.

interface NavigateOptions {
  replace?: boolean;
  // Section id to scroll to after navigating (home page sections)
  section?: string;
  // Animate the change with the View Transitions API
  transition?: boolean;
  // Runs right after the new page is in the DOM (inside the transition, before the new snapshot)
  afterUpdate?: () => void;
}

interface HistoryState {
  scrollY?: number;
}

const NAV_OFFSET = 80;
const listeners = new Set<() => void>();

export function normalizePath(path: string) {
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

const getPath = () => normalizePath(window.location.pathname);

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  const element = document.getElementById(id);
  if (!element) return false;
  window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, behavior });
  return true;
}

function runTransition(update: () => void, animate: boolean) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!animate || reduceMotion || !document.startViewTransition) {
    update();
    return;
  }
  // Shared-element names (.vt-active, .work-hero) only apply while a route transition runs,
  // so they never interfere with the theme switch transition
  const root = document.documentElement;
  root.classList.add('vt-route');
  const transition = document.startViewTransition(() => update());
  transition.ready.catch(() => {});
  transition.finished
    .catch(() => {})
    .finally(() => {
      root.classList.remove('vt-route');
      document.querySelectorAll('.vt-active').forEach((el) => el.classList.remove('vt-active'));
    });
}

export function navigate(to: string, options: NavigateOptions = {}) {
  const url = new URL(to, window.location.href);
  const samePage = normalizePath(url.pathname) === getPath();

  if (samePage && options.section) {
    scrollToSection(options.section);
    return;
  }

  // Remember where we were so back/forward can restore it
  window.history.replaceState({ scrollY: window.scrollY } satisfies HistoryState, '');
  if (options.replace) window.history.replaceState({}, '', url);
  else window.history.pushState({}, '', url);

  runTransition(() => {
    flushSync(notify);
    if (!options.section || !scrollToSection(options.section, 'instant')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    options.afterUpdate?.();
  }, options.transition ?? false);
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.addEventListener('popstate', (event) => {
    const state = event.state as HistoryState | null;
    flushSync(notify);
    window.scrollTo({ top: state?.scrollY ?? 0, behavior: 'instant' });
  });
}

export function usePathname() {
  return useSyncExternalStore(subscribe, getPath);
}

// Only plain left clicks on same-origin app routes are handled client-side
export function shouldHandleClick(event: React.MouseEvent<HTMLAnchorElement>) {
  const anchor = event.currentTarget;
  return (
    event.button === 0 &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    !anchor.target &&
    !anchor.hasAttribute('download') &&
    anchor.origin === window.location.origin
  );
}
