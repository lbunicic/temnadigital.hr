import { useEffect } from 'react';

const CARD_SELECTOR = '.project-card, .blog-card';

// Feeds the cursor position into --mx / --my on the hovered card for the CSS spotlight.
// Uses a single delegated listener and writes CSS variables directly to avoid React re-renders.
export function useCardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(CARD_SELECTOR);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, []);
}
