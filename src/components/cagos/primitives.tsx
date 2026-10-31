/**
 * CAGOS design-system primitives — ported from apps/marketing/cagos/components.jsx.
 * Pixel-for-pixel match with the reference. Class names match styles/cagos.css.
 */
import {
  type ReactNode,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

import { useTheme } from "../../contexts/ThemeContext";
import { FREE_TRIAL_CTA } from "../../lib/marketing-copy";

/* ================= Icons ================= */
export const IconSparkle = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3L13.5 9L19 10.5L13.5 12L12 18L10.5 12L5 10.5L10.5 9L12 3Z" fill="currentColor" />
    <path d="M19 3L19.7 5.3L22 6L19.7 6.7L19 9L18.3 6.7L16 6L18.3 5.3L19 3Z" fill="currentColor" />
    <path d="M5 14L5.7 16.3L8 17L5.7 17.7L5 20L4.3 17.7L2 17L4.3 16.3L5 14Z" fill="currentColor" />
  </svg>
);
export const IconKit = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="13" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export const IconCheck = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12L10 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconBadge = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <path d="M13 1L15.4 3.2L18.6 2.5L19.5 5.6L22.5 6.5L21.8 9.6L24 12L21.8 14.4L22.5 17.6L19.5 18.4L18.6 21.5L15.4 20.8L13 23L10.6 20.8L7.4 21.5L6.5 18.4L3.5 17.6L4.2 14.4L2 12L4.2 9.6L3.5 6.5L6.5 5.6L7.4 2.5L10.6 3.2L13 1Z" fill="#5b50ff" />
    <path d="M8.5 13L11.5 16L17.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconChev = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconTwitter = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.9-2.3 8.4 8.4 0 0 1-2.7 1A4.2 4.2 0 0 0 11.6 9a11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.6a12 12 0 0 0 6.5 1.9c7.8 0 12-6.4 12-12v-.6a8.6 8.6 0 0 0 2.1-2.2z" />
  </svg>
);
export const IconSun = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export const IconMoon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ================= Reveal ================= */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      requestAnimationFrame(() => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ================= Brand ================= */
export const Brand = ({ size = 32 }: { size?: number }) => (
  <div className="brand">
    <img
      src="/cagos-brand.png"
      alt="CAGOS"
      className="brand-logo"
      width={171}
      height={60}
      decoding="async"
      style={{ width: size * 5, height: 'auto', maxWidth: '100%', mixBlendMode: 'multiply', filter: 'none' }}
    />
  </div>
);

/* ================= Theme Toggle ================= */
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        type="button"
        className={theme === "light" ? "active" : ""}
        aria-label="Light mode"
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
      >
        <IconSun />
      </button>
      <button
        type="button"
        className={theme === "dark" ? "active" : ""}
        aria-label="Dark mode"
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        <IconMoon />
      </button>
    </div>
  );
};

/* Nav is now in ./Navbar.tsx (modern mega-menu version) */

/* ================= Preview Card ================= */
type Variant =
  | "hero"
  | "unleash"
  | "testimonial"
  | "pricing"
  | "productivity"
  | "faq"
  | "compliance"
  | "invoice"
  | "clients"
  | "calendar"
  | "payments";

export const PreviewCard = ({ variant }: { variant: Variant }) => {
  if (variant === "hero") {
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 16, height: 13, background: "#5b50ff", transform: "skewX(-22deg)", borderRadius: 2 }} />
              <span style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 700 }}>CAGOS</span>
            </div>
            <div style={{ display: "flex", gap: 20, fontSize: 10, color: "#8a8a95" }}>
              <span>Features</span><span>Pricing</span><span>FAQs</span>
            </div>
            <div style={{ width: 60, height: 18, background: "#0a0a0e", borderRadius: 5, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }} />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <h4 style={{ fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: "-0.03em", textAlign: "center", lineHeight: 1 }}>
              Run your CA practice<br />from one screen
            </h4>
            <div style={{ width: 160, height: 18, background: "linear-gradient(180deg,#ff6b35,#ff5a1f)", borderRadius: 5, marginTop: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 600 }}>
              {FREE_TRIAL_CTA}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "testimonial") {
    return (
      <div className="preview-card" style={{ background: "#5b50ff" }}>
        <div className="pc-inner" style={{ flexDirection: "row", alignItems: "center", gap: 18 } as CSSProperties}>
          <div style={{ width: 130, height: 160, borderRadius: 8, background: "linear-gradient(135deg,#e8c89f,#a87a52)", flex: "0 0 auto" }} />
          <div style={{ color: "#fff" }}>
            <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em" }}>
              &quot;CAGOS cut our compliance prep from 3 days to 3 hours. It just works.&quot;
            </div>
            <div style={{ marginTop: 14, fontWeight: 700, fontSize: 11 }}>CA Partner</div>
            <div style={{ fontSize: 10, opacity: 0.85 }}>Top-50 Firm, Mumbai</div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "pricing") {
    return (
      <div className="preview-card">
        <div className="pc-inner" style={{ alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600, marginBottom: 4 }}>Pricing</div>
            <h4 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Simple pricing</h4>
            <div style={{ color: "#8a8a95", fontSize: 10, marginTop: 2 }}>A plan for every firm.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 4 }}>
            {[{ tag: "KIT", price: "₹999" }, { tag: "PRO", price: "₹2,499", hl: true }, { tag: "AGENCY", price: "₹7,999" }].map((p, i) => (
              <div key={i} style={{ background: p.hl ? "#5b50ff" : "#0a0a0e", borderRadius: 8, padding: "10px 8px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", opacity: 0.75 }}>{p.tag}</div>
                <div style={{ fontSize: 10, color: "#cfcfd6", marginTop: 6, lineHeight: 1.3 }}>Run your practice from one screen.</div>
                <div style={{ fontSize: 18, fontWeight: 800, marginTop: 8, letterSpacing: "-0.02em" }}>
                  {p.price}
                  <span style={{ fontSize: 10, opacity: 0.6, fontWeight: 500 }}>/mo</span>
                </div>
                <div style={{ height: 18, background: p.hl ? "#ff5a1f" : "#1a1a22", borderRadius: 5, marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600, color: "#fff" }}>
                  {FREE_TRIAL_CTA}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (variant === "productivity") {
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ flex: "0 0 38%" }}>
              <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600, marginBottom: 6 }}>Features</div>
              <h4 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.05 }}>Boost your firm&apos;s productivity</h4>
              <p style={{ fontSize: 10, color: "#8a8a95", lineHeight: 1.4, marginTop: 10 }}>CAGOS streamlines workflow and enhances collaboration for CA firms across India.</p>
              <div style={{ height: 18, width: 100, background: "linear-gradient(180deg,#ff6b35,#ff5a1f)", borderRadius: 5, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600 }}>
                {FREE_TRIAL_CTA}
              </div>
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {["Real-time collaboration", "Customizable workflows", "Task automation", "Performance analytics"].map((t, i) => (
                <div key={i} style={{ background: "#0a0a0e", borderRadius: 6, padding: 8, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 14, height: 14, background: "rgba(91,80,255,0.2)", borderRadius: 4, marginBottom: 5 }} />
                  <div style={{ fontSize: 9, fontWeight: 700 }}>{t}</div>
                  <div style={{ fontSize: 8, color: "#8a8a95", lineHeight: 1.35, marginTop: 3 }}>CAGOS enhances collaboration with intuitive messaging.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "faq") {
    return (
      <div className="preview-card">
        <div className="pc-inner" style={{ flexDirection: "row", gap: 16 } as CSSProperties}>
          <div style={{ flex: "0 0 38%" }}>
            <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600, marginBottom: 6 }}>FAQs</div>
            <h4 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.05 }}>Frequently Asked Questions</h4>
            <div style={{ height: 18, width: 100, background: "linear-gradient(180deg,#ff6b35,#ff5a1f)", borderRadius: 5, marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600 }}>
              {FREE_TRIAL_CTA}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            {["Is CAGOS easy to set up?", "How is CAGOS different from ClearTax?", "Does it support GST e-invoicing?", "Is there a free trial?", "Is CAGOS ICAI compliant?"].map((q, i) => (
              <div key={i} style={{ background: "#0a0a0e", borderRadius: 6, padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: 9 }}>{q}</span>
                <span style={{ fontSize: 10, color: "#8a8a95" }}>▾</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (variant === "unleash") {
    return (
      <div className="preview-card">
        <div className="pc-inner" style={{ alignItems: "center", justifyContent: "center", gap: 14 }}>
          <h4 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.05 }}>
            Built for<br />Indian CAs
          </h4>
          <p style={{ fontSize: 11, color: "#8a8a95", margin: 0, textAlign: "center", maxWidth: 280 }}>
            CAGOS streamlines your firm with adaptable, all-in-one practice management.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <div style={{ padding: "6px 12px", background: "linear-gradient(180deg,#ff6b35,#ff5a1f)", borderRadius: 6, fontSize: 10, fontWeight: 600 }}>
              {FREE_TRIAL_CTA}
            </div>
            <div style={{ padding: "6px 12px", background: "#0a0a0e", borderRadius: 6, fontSize: 10, fontWeight: 600, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}>
              ▷ Watch demo
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "compliance") {
    const rows = [
      { label: "GST 3B · Acme & Co", date: "10 Jun", urgent: true },
      { label: "TDS Q1 · Vista Holdings", date: "07 Jul", urgent: false },
      { label: "ITR-6 · Nova Pvt Ltd", date: "15 Jul", urgent: false },
      { label: "ROC AOC-4 · Acme & Co", date: "30 Sep", urgent: false },
    ];
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600 }}>Compliance Hub</div>
              <h4 style={{ fontSize: 19, fontWeight: 800, margin: "4px 0 0", letterSpacing: "-0.02em" }}>Upcoming deadlines</h4>
            </div>
            <span style={{ fontSize: 9, color: "#22c55e", background: "rgba(34,197,94,0.15)", padding: "3px 8px", borderRadius: 999, fontWeight: 700 }}>12 tracked</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
            {rows.map((r, i) => (
              <div key={i} style={{ background: "#0a0a0e", borderRadius: 6, padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 99, background: r.urgent ? "#ff5a1f" : "#22c55e", boxShadow: r.urgent ? "0 0 8px rgba(255,90,31,0.6)" : "none" }} />
                  <span style={{ fontSize: 10, fontWeight: 600 }}>{r.label}</span>
                </div>
                <span style={{ fontSize: 10, color: r.urgent ? "#ff5a1f" : "#8a8a95", fontWeight: 700 }}>{r.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (variant === "invoice") {
    const lines = [
      { item: "GST 3B filing · Jan", hsn: "998313", amt: "₹4,500" },
      { item: "TDS Q3 return", hsn: "998314", amt: "₹3,000" },
      { item: "Advisory retainer", hsn: "998311", amt: "₹15,000" },
    ];
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 9, color: "#8a8a95", letterSpacing: "0.14em", fontWeight: 700 }}>INVOICE</div>
              <div style={{ fontSize: 15, fontWeight: 800, marginTop: 4, letterSpacing: "-0.01em" }}>CAGOS-2026-001</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 9, color: "#8a8a95" }}>GSTIN</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.4, marginTop: 2 }}>29AABCU9603R1ZX</div>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "4px 0" }} />
          <div>
            <div style={{ fontSize: 9, color: "#8a8a95" }}>Billed to</div>
            <div style={{ fontSize: 11, fontWeight: 700, marginTop: 2 }}>Acme &amp; Co · 29AAAA12345A1Z5</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {lines.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, fontSize: 10, alignItems: "center" }}>
                <span>{r.item}</span>
                <span style={{ color: "#8a8a95", fontSize: 9 }}>HSN {r.hsn}</span>
                <span style={{ fontWeight: 700, textAlign: "right" }}>{r.amt}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px dashed rgba(255,255,255,0.12)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: 9, color: "#8a8a95" }}>Total · CGST 9% + SGST 9%</div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginTop: 2 }}>₹26,550</div>
              </div>
              <span style={{ fontSize: 9, color: "#22c55e", background: "rgba(34,197,94,0.15)", padding: "4px 9px", borderRadius: 999, fontWeight: 700 }}>✓ IRN generated</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "clients") {
    const list = [
      { name: "Acme & Co", type: "Pvt Ltd", tag: "Growth", color: "#22c55e" },
      { name: "Nova Pvt Ltd", type: "Pvt Ltd", tag: "Enterprise", color: "#5b50ff" },
      { name: "Vista Holdings", type: "LLP", tag: "Starter", color: "#8a8a95" },
      { name: "Singh & Sons", type: "Prop.", tag: "Growth", color: "#22c55e" },
    ];
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600 }}>Client CRM</div>
              <h4 style={{ fontSize: 19, fontWeight: 800, margin: "4px 0 0", letterSpacing: "-0.02em" }}>1,247 clients</h4>
            </div>
            <div style={{ padding: "5px 12px", background: "linear-gradient(180deg,#ff6b35,#ff5a1f)", borderRadius: 6, fontSize: 10, color: "#fff", fontWeight: 600 }}>+ Add</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
            {list.map((c, i) => (
              <div key={i} style={{ background: "#0a0a0e", borderRadius: 6, padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 99, background: `linear-gradient(135deg, ${c.color}, #5b50ff)`, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700 }}>{c.name}</div>
                    <div style={{ fontSize: 9, color: "#8a8a95" }}>{c.type}</div>
                  </div>
                </div>
                <span style={{ fontSize: 9, color: c.color, fontWeight: 700, background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 4, letterSpacing: 0.4 }}>{c.tag.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (variant === "calendar") {
    const today = 12;
    const flagged = new Set([7, 10, 15, 20, 25]);
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600 }}>Tax Calendar</div>
              <h4 style={{ fontSize: 19, fontWeight: 800, margin: "4px 0 0", letterSpacing: "-0.02em" }}>June 2026</h4>
            </div>
            <div style={{ fontSize: 10, color: "#8a8a95", letterSpacing: 1 }}>‹  Today  ›</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} style={{ fontSize: 9, color: "#8a8a95", textAlign: "center", fontWeight: 700, padding: "2px 0" }}>{d}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === today;
              const isFlag = flagged.has(day);
              return (
                <div key={i} style={{
                  fontSize: 10,
                  textAlign: "center",
                  padding: "5px 0",
                  borderRadius: 4,
                  background: isToday ? "#5b50ff" : isFlag ? "rgba(255,90,31,0.16)" : "transparent",
                  color: isToday ? "#fff" : isFlag ? "#ff5a1f" : "#cfcfd6",
                  fontWeight: isToday || isFlag ? 700 : 500,
                  boxShadow: isFlag && !isToday ? "inset 0 0 0 1px rgba(255,90,31,0.35)" : "none",
                }}>{day}</div>
              );
            })}
          </div>
          <div style={{ marginTop: "auto", padding: "8px 12px", background: "#0a0a0e", borderRadius: 6, fontSize: 10, color: "#cfcfd6", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)", lineHeight: 1.4 }}>
            <span style={{ color: "#ff5a1f", fontWeight: 700 }}>5 deadlines</span> · GST 3B (10), TDS Q1 (07), ITR-6 (15), ROC AOC-4 (20)
          </div>
        </div>
      </div>
    );
  }
  if (variant === "payments") {
    const methods = [
      { label: "UPI", note: "Instant", icon: "₹" },
      { label: "Cards", note: "Visa · Mastercard", icon: "▭" },
      { label: "Net banking", note: "All Indian banks", icon: "≡" },
      { label: "NACH mandate", note: "Auto-recurring", icon: "↻" },
    ];
    return (
      <div className="preview-card">
        <div className="pc-inner">
          <div>
            <div style={{ color: "#5b50ff", fontSize: 10, fontWeight: 600 }}>Razorpay Payments</div>
            <h4 style={{ fontSize: 19, fontWeight: 800, margin: "4px 0 0", letterSpacing: "-0.02em" }}>Collect ₹26,550</h4>
            <div style={{ fontSize: 9, color: "#8a8a95", marginTop: 4 }}>Invoice CAGOS-2026-001 · Acme &amp; Co</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {methods.map((p, i) => (
              <div key={i} style={{ background: "#0a0a0e", borderRadius: 6, padding: "9px 11px", display: "flex", alignItems: "center", gap: 10, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(91,80,255,0.16)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#b8b3ff", boxShadow: "inset 0 0 0 1px rgba(91,80,255,0.3)" }}>{p.icon}</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700 }}>{p.label}</div>
                  <div style={{ fontSize: 8, color: "#8a8a95" }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", background: "rgba(255,255,255,0.94)", color: "#0a0a0e", padding: "8px 12px", borderRadius: 6, fontSize: 10, fontFamily: "ui-monospace, monospace", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>cagos.app/pay/inv-001</span>
            <span style={{ fontSize: 9, color: "#5b50ff", fontWeight: 700, letterSpacing: 0.4 }}>COPY</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
