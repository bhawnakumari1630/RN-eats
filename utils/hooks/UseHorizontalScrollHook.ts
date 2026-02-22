import { useCallback, useEffect, useRef, useState } from "react";

interface useScrollProps {
  gap?: number;
  scrollPercentage?: number;
}
export const UseHorizontalScrollHook = (options: useScrollProps = {}) => {
  const { gap = 24, scrollPercentage = 0.7 } = options;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollStart, setIsScrollStart] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const container = scrollRef.current;
      if (container && container.firstChild) {
        const firstItem = container.firstChild as HTMLElement;
        const itemWidth = firstItem.offsetWidth + gap; // gap-6 = 24px;
        const visibleItems = container.offsetWidth / itemWidth;
        const itemsToScroll = Math.floor(visibleItems * scrollPercentage); // 80% items to scroll
        const scrollAmount = itemsToScroll * itemWidth;
        container.scrollBy({
          left: direction == "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [gap, scrollPercentage],
  );

  const checkScrollPosition = useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      const { scrollWidth, scrollLeft, clientWidth } = container;
      setIsScrollStart(scrollLeft <= 0);
      setIsScrollEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScrollPosition();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkScrollPosition);
      return () => window.removeEventListener("resize", checkScrollPosition);
    }
  }, [checkScrollPosition]);

  return {
    scrollRef,
    isScrollStart,
    isScrollEnd,
    scroll,
    checkScrollPosition,
  };
};
