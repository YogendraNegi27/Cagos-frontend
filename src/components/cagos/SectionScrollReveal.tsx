/**
 * Auto-applies a scroll-triggered fade-in to every <section> element on the
 * page. Mounted once at the root level — uses MutationObserver so it picks
 * up sections injected by client-side route changes.
 *
 * Each <section> starts at opacity 0 + translateY(40px) and animates in
 * via IntersectionObserver when ~20% visible. CSS lives in cagos.css under
 * `.section-fade` / `.section-fade.in`.
 */
import { useEffect } from "react";

const FADE_CLASS = "section-fade";
const ACTIVE_CLASS = "in";

export function SectionScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add(ACTIVE_CLASS);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    const attach = (el: Element) => {
      if (el.classList.contains(FADE_CLASS)) return;
      el.classList.add(FADE_CLASS);
      // If already in viewport at mount, reveal immediately (next frame so
      // the initial transform actually paints once).
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        requestAnimationFrame(() => el.classList.add(ACTIVE_CLASS));
      } else {
        io.observe(el);
      }
    };

    // Attach to anything currently in the DOM.
    document.querySelectorAll("section").forEach(attach);

    // Watch for newly added sections (route changes inject these).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.tagName === "SECTION") attach(node);
          node.querySelectorAll?.("section").forEach(attach);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
