import { useEffect } from 'react';

const GRAPHIC_SELECTOR = '.project-graphic, .blog-graphic';
const CARD_SELECTOR = '.project-card, .blog-card';
const SHAPE_SELECTOR = 'path, line, polyline, polygon, rect, circle, ellipse';
const DRAW_DURATION_MS = 1800;

// Brings the decorative card graphics to life:
// - outlines draw themselves the first time a graphic scrolls into view
// - animations (SMIL + CSS) stay paused until the card is hovered,
//   or while on screen on touch devices
// - with reduced motion everything stays still and fully drawn
export function useSvgGraphics() {
  useEffect(() => {
    const root = document.querySelector('main');
    if (!root || !('IntersectionObserver' in window)) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    const prepared = new WeakSet<SVGSVGElement>();
    const cleanups: Array<() => void> = [];

    const setActive = (svg: SVGSVGElement, active: boolean) => {
      svg.classList.toggle('graphic-active', active);
      if (active) svg.unpauseAnimations();
      else svg.pauseAnimations();
    };

    const drawObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const svg = entry.target as SVGSVGElement;
          drawObserver.unobserve(svg);
          svg.classList.add('is-drawn');
          // Drop the dash styles afterwards so animated geometry (e.g. growing radii) never shows gaps
          const timeout = window.setTimeout(() => svg.classList.remove('svg-draw', 'is-drawn'), DRAW_DURATION_MS);
          cleanups.push(() => window.clearTimeout(timeout));
        });
      },
      { threshold: 0.4 }
    );

    const viewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setActive(entry.target as SVGSVGElement, entry.isIntersecting));
    });

    const prepareDraw = (svg: SVGSVGElement) => {
      svg.querySelectorAll<SVGGeometryElement>(SHAPE_SELECTOR).forEach((shape) => {
        if (shape.closest('defs, mask, clipPath')) return;
        const style = getComputedStyle(shape);
        const isStroked = style.stroke !== 'none' && parseFloat(style.strokeWidth) > 0;
        // Leave intentionally dashed strokes alone
        if (isStroked && style.strokeDasharray === 'none') {
          shape.style.setProperty('--len', `${Math.ceil(shape.getTotalLength())}`);
          shape.classList.add('draw-stroke');
        } else if (style.fill !== 'none') {
          shape.classList.add('draw-fill');
        }
      });
      svg.classList.add('svg-draw');
      drawObserver.observe(svg);
    };

    const prepare = (svg: SVGSVGElement) => {
      if (prepared.has(svg)) return;
      prepared.add(svg);
      setActive(svg, false);
      if (reduceMotion) return;

      prepareDraw(svg);

      const card = svg.closest<HTMLElement>(CARD_SELECTOR);
      if (canHover && card) {
        const onEnter = () => setActive(svg, true);
        const onLeave = () => setActive(svg, false);
        card.addEventListener('pointerenter', onEnter);
        card.addEventListener('pointerleave', onLeave);
        cleanups.push(() => {
          card.removeEventListener('pointerenter', onEnter);
          card.removeEventListener('pointerleave', onLeave);
        });
      } else {
        viewObserver.observe(svg);
      }
    };

    const prepareAll = () => root.querySelectorAll<SVGSVGElement>(GRAPHIC_SELECTOR).forEach(prepare);
    prepareAll();

    // Cards re-mount when the project filter changes
    const mutationObserver = new MutationObserver(prepareAll);
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      drawObserver.disconnect();
      viewObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
