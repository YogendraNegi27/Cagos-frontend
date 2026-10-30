import { useEffect, useRef, useState } from "react";

export function useMouseParallax(
  elementRef: React.RefObject<HTMLElement | null>,
  strength = 6,
) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        setRotation({ x: -dy * strength, y: dx * strength }),
      );
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setRotation({ x: 0, y: 0 }));
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [elementRef, strength]);

  return rotation;
}
