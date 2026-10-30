import { Link } from "@tanstack/react-router";

import { Reveal, PreviewCard, IconSparkle } from "../primitives";
import { FREE_TRIAL_CTA } from "../../../lib/marketing-copy";

export const LaunchFast = () => {
  const variants = [
    "pricing", "productivity", "hero", "testimonial",
    "unleash", "faq", "pricing", "productivity",
    "hero", "testimonial", "unleash", "faq",
    "pricing", "productivity", "hero", "testimonial",
  ] as const;
  return (
    <section className="container">
      <div className="split">
        <Reveal>
          <div className="tilt-shell">
            <div className="tilt-grid">
              {variants.map((v, i) => (
                <div key={i} className="tile">
                  <div style={{ transform: "scale(0.42)", transformOrigin: "top left", width: "238%" }}>
                    <PreviewCard variant={v} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <p className="eyebrow">Launch fast</p>
            <h2 className="h-section">Set up your firm in minutes, not weeks</h2>
            <p className="section-sub">
              Import 1,000+ clients via CSV, attach GST &amp; PAN once, and every workflow — compliance, billing, payments — reuses that identity. No re-keying.
            </p>
            <div style={{ marginTop: 36 }}>
              <Link to="/register" className="btn btn-primary">
                <IconSparkle /> {FREE_TRIAL_CTA}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
