import { useEffect } from 'react';

// Calls onEscape when the Escape key is pressed, while `active` is true.
export default function useEscape(active, onEscape) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && onEscape();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, onEscape]);
}
