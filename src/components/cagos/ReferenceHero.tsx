import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PracticeDashboard } from "./PracticeDashboard";
import { CompanyBrand } from "../ui/company-brand";
import "./reference-hero.css";

export function ReferenceHero() {
  const scene = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const player = video.current;
    const container = scene.current;
    if (!player || !container) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      if (visible && !document.hidden && !preference.matches)
        void player.play().catch(() => {});
      else player.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(container);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      player.pause();
    };
  }, []);
  return (
    <section className="editorial-hero ed-wrap" aria-labelledby="home-title">
      <div className="ed-hero-intro" ref={scene}>
        <div className="ed-hero-film" aria-hidden="true">
          <video
            ref={video}
            src="/hero-media/abstract-loop.mp4"
            poster="/hero-media/abstract-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            tabIndex={-1}
          />
          <div className="ed-hero-wash" />
        </div>
        <div className="ed-hero-copy">
          <div className="ed-hero-brand">
            <CompanyBrand width={112} />
          </div>
          <p className="ed-eyebrow">
            Built for Indian Chartered Accountant firms
          </p>
          <h1 id="home-title">
            One practice.
            <br />
            Every detail.
            <br className="ed-hero-mobile-break" /> In view.
          </h1>
          <div className="ed-hero-summary">
            <p>
              Clients, compliance, documents and collections. Connected in one
              cloud workspace, so your team can focus on the work that matters.
            </p>
            <Link to="/register" className="ed-button ed-hero-cta">
              <span>Start free trial</span>
              <span>
                <ArrowRight size={19} aria-hidden="true" />
              </span>
            </Link>
            <small>14 days free. No credit card required.</small>
          </div>
        </div>
      </div>
      <div className="ed-hero-scene">
        <div className="ed-hero-dashboard">
          <PracticeDashboard variant="overview" />
        </div>
        <div className="ed-scene-caption">
          <span>YOUR PRACTICE. ONE CLEARER PICTURE.</span>
          <span>Illustrative workspace · Sample data</span>
        </div>
      </div>
    </section>
  );
}
