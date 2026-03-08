import { useState, useEffect } from 'react';

/**
 * Returns true once the referenced element enters the viewport.
 * Disconnects the observer after first trigger (one-shot reveal).
 */
export function useIntersection(ref, options = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return visible;
}
