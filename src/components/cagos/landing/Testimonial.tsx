import type { CSSProperties } from "react";

import { Reveal } from "../primitives";

export const Testimonial = () => (
  <section className="testimonial">
    <div className="grid-bg-blue" />
    <div className="container">
      <Reveal>
        <div className="test-inner">
          <div className="test-photo">
            <CAFirmScene />
          </div>
          <div>
            <div className="test-quote">
              &quot;CAGOS cut our GST 3B filing time from 3 days to 3 hours. Recurring billing, client reminders, and audit logs all just work.&quot;
            </div>
            <div className="test-name">CA Partner</div>
            <div className="test-role">Top-50 Firm, Mumbai</div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── Animated 3D scene depicting a CA firm's workflow ──────────────
   Stacked filing papers (GSTR-3B / ITR-3 / Form 16) with a "FILED"
   stamp, a floating compliance-score chart with growing bars, a
   pulsing "Filed in 3h" status badge, and drifting accent particles.
   Pure CSS + inline styles for variable-driven bar heights. The
   scene is decorative — every node is aria-hidden so it doesn't
   pollute the accessibility tree around the testimonial quote. */
function CAFirmScene() {
  const bars: { h: string; d: string }[] = [
    { h: "55%", d: "0s"   },
    { h: "72%", d: "0.15s" },
    { h: "40%", d: "0.3s"  },
    { h: "88%", d: "0.45s" },
    { h: "65%", d: "0.6s"  },
    { h: "95%", d: "0.75s" },
  ];

  return (
    <div className="caf-scene" aria-hidden="true">
      <div className="caf-glow" />
      <div className="caf-grid" />

      {/* Document stack — three offset papers with 3D tilt */}
      <div className="caf-stack">
        <div className="caf-paper caf-paper-3">
          <div className="caf-paper-head">FORM 16</div>
          <div className="caf-paper-row" />
          <div className="caf-paper-row narrow" />
          <div className="caf-paper-row" />
          <div className="caf-paper-row narrow" />
        </div>
        <div className="caf-paper caf-paper-2">
          <div className="caf-paper-head">ITR-3</div>
          <div className="caf-paper-row" />
          <div className="caf-paper-row narrow" />
          <div className="caf-paper-row" />
          <div className="caf-paper-row" />
        </div>
        <div className="caf-paper caf-paper-1">
          <div className="caf-paper-head">
            <span>GSTR-3B</span>
            <span className="caf-stamp">FILED</span>
          </div>
          <div className="caf-paper-row" />
          <div className="caf-paper-row narrow" />
          <div className="caf-paper-row" />
          <div className="caf-paper-row" />
        </div>
      </div>

      {/* Floating compliance chart card */}
      <div className="caf-chart">
        <div className="caf-chart-title">Compliance score</div>
        <div className="caf-chart-bars">
          {bars.map((b, i) => (
            <span key={i} style={{ "--h": b.h, "--d": b.d } as CSSProperties} />
          ))}
        </div>
        <div className="caf-chart-foot">FY 25-26 · 247 clients</div>
      </div>

      {/* Pulsing "Filed in 3h" badge */}
      <div className="caf-badge">
        <span className="caf-badge-dot" />
        Filed in 3h
      </div>

      {/* Drifting accent particles */}
      <span className="caf-particle caf-particle-1" />
      <span className="caf-particle caf-particle-2" />
      <span className="caf-particle caf-particle-3" />
      <span className="caf-particle caf-particle-4" />
    </div>
  );
}
