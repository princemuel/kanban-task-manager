import type { RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

interface IntersectionObserverArgs extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * Returns an IntersectionObserver that checks if the provided ref is visible in the window.
 */
export function useIntersectionObserver<E extends Element>(
  elementRef: RefObject<E>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: IntersectionObserverArgs
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  }, []);

  useEffect(() => {
    const node = elementRef?.current;

    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, frozen, root, rootMargin, threshold, updateEntry]);

  return entry;
}
