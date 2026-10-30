import { Link } from "@tanstack/react-router";

import { Reveal, IconSparkle } from "../primitives";
import { FREE_TRIAL_CTA } from "../../../lib/marketing-copy";

/* Inline SVG icons used by the four sticky stack cards. */
const FeatureIconCursor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M5 3L13 11.5L9 12L11 17L8.5 18L6.5 13L4 16L5 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 4L17 6L19 7L17 8L16 10L15 8L13 7L15 6L16 4Z" fill="currentColor" />
  </svg>
);
const FeatureIconKit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="13" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const FeatureIconCode = () => (
  <div style={{ width: 24, height: 24, background: "#5b50ff", borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 800, fontFamily: "monospace" }}>{"{F}"}</div>
);

export const Features = () => {
  const cards = [
    { icon: <FeatureIconCursor />, title: "Easily customise", body: "Branding, workflows, reminders — adapt the platform to each firm's style without leaving the dashboard." },
    { icon: <FeatureIconKit />, title: "Versatile firm structures", body: "Solo CA, mid-size firm, or 100-staff practice — every module scales to your team size and client book." },
    { icon: <FeatureIconCode />, title: "Built on standards", body: "GST-compliant invoices, ICAI-friendly audit logs, and Indian data residency — designed for the regulatory framework you operate under." },
  ];
  return (
    <section className="features-stack" id="features">
      <div className="grid-bg-section" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="features-grid">
          <div className="features-left">
            <Reveal>
              <p className="eyebrow">Features</p>
              <h2 className="h-section">Free doesn&apos;t have to mean basic</h2>
              <p className="section-sub">
                Every module is included from day one. No tiered feature paywalls.
              </p>
              <div style={{ marginTop: 36 }}>
                <Link to="/register" className="btn btn-primary">
                  <IconSparkle /> {FREE_TRIAL_CTA}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="features-stack-col">
            {cards.map((c, i) => (
              <div key={i} className="stack-card">
                <div className="stack-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
