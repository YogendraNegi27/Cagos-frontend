import { Link } from "@tanstack/react-router";

import { Reveal, IconSparkle } from "../primitives";
import { FREE_TRIAL_CTA, FREE_TRIAL_SHORT } from "../../../lib/marketing-copy";

export const FinalCTA = () => (
  <section className="final-cta">
    <div className="grid-bg-full" style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)" }} />
    <div className="hero-glow" style={{ top: "-10%" }} />
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <Reveal>
        <h2 className="h-display" style={{ fontSize: "clamp(48px, 7vw, 110px)" }}>
          Run your CA practice<br />from one screen
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p style={{ color: "var(--ink-3)", textAlign: "center", fontSize: 19, marginTop: 26 }}>
          {FREE_TRIAL_SHORT}. No credit card. All modules included.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div className="hero-ctas">
          <Link to="/register" className="btn btn-primary">
            <IconSparkle /> {FREE_TRIAL_CTA}
          </Link>
          <Link to="/contact" className="btn btn-dark">
            Sales
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
