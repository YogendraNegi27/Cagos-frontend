import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Reveal, PreviewCard, IconSparkle, IconBadge } from "../primitives";
import { FREE_TRIAL_CTA } from "../../../lib/marketing-copy";

/* Mouse-tracking parallax for the hero glow. Writes --mx/--my CSS vars
   (range −0.5 → +0.5) on the hero section; cagos.css uses them in the
   transform of .hero-glow and .hero-glow-inner so the indigo halo
   drifts with the cursor — depth illusion. RAF-batched so the listener
   stays cheap even on every-frame mouse events. */
function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", "0");
        el.style.setProperty("--my", "0");
      });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

export const Hero = () => {
  const sectionRef = useHeroParallax<HTMLElement>();
  // PreviewCard marquee — 11 distinct variants interleaved so two of the
  // same type never sit next to each other. Doubled (not tripled) so
  // translateX(-50%) lands exactly at the start of copy 2 — seamless loop.
  const variants = [
    "hero", "compliance", "unleash", "invoice", "testimonial", "clients",
    "pricing", "calendar", "productivity", "payments", "faq",
  ] as const;
  const marquee = [...variants, ...variants];
  // Second strip rotates the variant order by half its length so the upper
  // and lower rows show different cards at the same horizontal offset —
  // avoids the "mirrored same card" effect when the two strips align.
  const half = Math.floor(variants.length / 2);
  const variantsReverse = [...variants.slice(half), ...variants.slice(0, half)];
  const marqueeReverse = [...variantsReverse, ...variantsReverse];
  // User-facing pause controls. Desktop already pauses on hover (cagos.css),
  // but touch users had no way to stop the scroll to read a card. Each row
  // has an independent toggle that flips its own `is-paused` class.
  const [paused, setPaused] = useState(false);
  const [pausedB, setPausedB] = useState(false);
  return (
    <section className="hero" ref={sectionRef}>
      <div className="grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-inner" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="badge">
              <span className="badge-dot"><IconBadge /></span>
              Free to use — no credit card required
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="h-display">
            Run your CA practice<br />from one screen
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="h-sub">
            CRM, HRMS, GST billing, e-invoicing, ITR workflow, compliance<br />
            calendar, document vault, and Razorpay payments — built for Indian CAs.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="hero-ctas">
            <Link to="/register" className="btn btn-primary">
              <IconSparkle /> {FREE_TRIAL_CTA}
            </Link>
            <Link to="/login" className="btn btn-dark">
              Sign in
            </Link>
          </div>
        </Reveal>
      </div>
      <div className={`hero-strip${paused ? " is-paused" : ""}`}>
        <div className="hero-strip-track" aria-hidden="true">
          {marquee.map((v, i) => <PreviewCard key={i} variant={v} />)}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="hero-strip-toggle"
          aria-label={paused ? "Resume top scrolling row" : "Pause top scrolling row"}
          aria-pressed={paused}
        >
          {paused ? (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M4.5 3.2v9.6c0 .5.6.8 1 .5l7.4-4.8c.4-.3.4-.8 0-1.1L5.5 2.6c-.4-.2-1 .1-1 .6Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
              <rect x="4" y="3" width="3" height="10" rx="0.6" />
              <rect x="9" y="3" width="3" height="10" rx="0.6" />
            </svg>
          )}
          <span className="hero-strip-toggle-label">{paused ? "Play" : "Pause"}</span>
        </button>
      </div>
      {/* Second strip: same card set, reversed direction (left→right). Sits
          immediately under the top strip and shares the same mask + pause
          interaction model. The `is-reverse` modifier flips the keyframe
          via animation-direction; no extra @keyframes needed. */}
      <div className={`hero-strip is-reverse is-paired${pausedB ? " is-paused" : ""}`}>
        <div className="hero-strip-track" aria-hidden="true">
          {marqueeReverse.map((v, i) => <PreviewCard key={i} variant={v} />)}
        </div>
        <button
          type="button"
          onClick={() => setPausedB((p) => !p)}
          className="hero-strip-toggle"
          aria-label={pausedB ? "Resume bottom scrolling row" : "Pause bottom scrolling row"}
          aria-pressed={pausedB}
        >
          {pausedB ? (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M4.5 3.2v9.6c0 .5.6.8 1 .5l7.4-4.8c.4-.3.4-.8 0-1.1L5.5 2.6c-.4-.2-1 .1-1 .6Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
              <rect x="4" y="3" width="3" height="10" rx="0.6" />
              <rect x="9" y="3" width="3" height="10" rx="0.6" />
            </svg>
          )}
          <span className="hero-strip-toggle-label">{pausedB ? "Play" : "Pause"}</span>
        </button>
      </div>
      <div className="hero-fade" />
    </section>
  );
};
