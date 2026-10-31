/**
 * CAGOS product sections — ported from apps/marketing/cagos/cagos-sections.jsx.
 * Three mid-page surfaces: Compliance · Payments · Command Center.
 */
import { Link } from "@tanstack/react-router";

import { Reveal, IconSparkle } from "./primitives";

const ArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CheckSm = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M5 12L10 17L19 7" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Pulse = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3 12H7L9 6L13 18L15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M10 14C10.83 14.83 12.17 14.83 13 14L17 10C17.83 9.17 17.83 7.83 17 7C16.17 6.17 14.83 6.17 14 7L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 10C13.17 9.17 11.83 9.17 11 10L7 14C6.17 14.83 6.17 16.17 7 17C7.83 17.83 9.17 17.83 10 17L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const VerifiedDot = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#22c55e" />
    <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ===== Section 1: Compliance ===== */
export const SectionCompliance = () => (
  <section className="cagos-sec">
    <div className="grid-bg-section" />
    <div className="hero-glow" style={{ top: "-200px", opacity: 0.6 }} />
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <Reveal>
        <p className="eyebrow eyebrow-center">Built for CAs</p>
        <h2 className="h-section h-section-center">
          Not just <span className="grad-ink">compliance</span>.<br />
          CAGOS makes your practice <span className="grad-ink">seamless</span>.
        </h2>
      </Reveal>
      <div className="comp-grid">
        <Reveal delay={80}>
          <div className="comp-card">
            <div className="comp-visual">
              <div className="cli-row">
                <div className="cli-left">
                  <span className="cli-avatar" />
                  <span>Acme &amp; Co.</span>
                </div>
                <span className="cli-meta">GST · PAN</span>
              </div>
              <div className="cli-row">
                <div className="cli-left">
                  <span className="cli-avatar b" />
                  <span>Nova Pvt. Ltd.</span>
                </div>
                <span className="cli-meta">GST · PAN</span>
              </div>
              <div className="cli-row hl">
                <div className="cli-left">
                  <span className="cli-avatar">+</span>
                  <span>150+ clients</span>
                </div>
                <span className="cli-meta">imported · 2.4s</span>
              </div>
            </div>
            <div className="comp-body-wrap">
              <h3 className="comp-title">Onboard clients in 5 min</h3>
              <p className="comp-body">
                Import 1,000+ clients via CSV or Excel. Attach GST &amp; PAN once and reuse across every workflow.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="comp-card">
            <div className="comp-visual center">
              <div className="form-card">
                <div className="form-bar" />
                <div className="form-row">
                  <strong>FORM 26AS</strong>
                  <span>FY 25-26</span>
                </div>
                <div className="form-line" />
                <div className="form-line thin" />
                <div className="form-line thin" style={{ width: "40%" }} />
                <div className="form-check">
                  <VerifiedDot /> Signed &amp; sealed
                </div>
              </div>
            </div>
            <div className="comp-body-wrap">
              <h3 className="comp-title">Instant Reports. Zero Stress.</h3>
              <p className="comp-body">
                Export client lists, invoice ledgers and compliance summaries in one click. Every document stored encrypted at rest.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="comp-card">
            <div className="comp-visual">
              <div className="comp-card-inner">
                <div className="cci-head">
                  <strong>Compliance</strong>
                  <span className="cci-icon"><Pulse /></span>
                </div>
                <div className="cci-row">
                  <i className="dot dot-g" />GST 3B filed
                  <span className="cci-spacer" />
                  <span className="cci-meta">42 clients</span>
                </div>
                <div className="cci-row">
                  <i className="dot dot-g" />TDS Q3 paid
                  <span className="cci-spacer" />
                  <span className="cci-meta">38 clients</span>
                </div>
                <div className="cci-row">
                  <i className="dot dot-a" />ITR due Jul 31
                  <span className="cci-spacer" />
                  <span className="cci-meta">12 pending</span>
                </div>
              </div>
            </div>
            <div className="comp-body-wrap">
              <h3 className="comp-title">Real-time deadline tracking</h3>
              <p className="comp-body">
                Never miss a due date again — every GST, TDS &amp; ITR window tracked live across your entire client book.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ===== Section 2: Payments ===== */
export const SectionPayments = () => (
  <section className="cagos-sec">
    <div className="grid-bg-section" />
    <div className="container">
      <div className="pay-grid">
        <Reveal>
          <div>
            <p className="eyebrow">CAPay</p>
            <h2 className="h-section">
              Collect fees via <span className="grad-ink">payment links</span>
            </h2>
            <ul className="pay-list">
              {[
                "Save up to 80% on transaction fees",
                "1-click payment for clients — UPI, Card, Netbanking & Wallets",
                "Auto-reconcile to invoices & ledgers in real time",
                "WhatsApp + email auto-reminders for unpaid invoices",
                "Branded payment pages with your firm's logo & GSTIN",
                "Bank-grade security · PCI-DSS compliant · 256-bit encryption",
              ].map((t, i) => (
                <li key={i}>
                  <span className="pay-check"><CheckSm /></span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="pay-foot">
              <span className="pay-foot-label">POWERED BY</span>
              <span className="pay-foot-brand">Razorpay</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="phone-wrap">
            <div className="capay-chip">
              <div className="capay-chip-head">
                <span className="capay-chip-icon"><LinkIcon /></span>
                <strong>CAPay Links</strong>
              </div>
              <div className="capay-url">
                <span>CAGOS.com/pay/INV-4521XX</span>
                <span className="capay-url-copy">⧉</span>
              </div>
              <button className="capay-share" type="button">Share payment link</button>
            </div>
            <div className="phone">
              <div className="phone-status">
                <span>9:41</span>
                <span className="icons">
                  <svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 12h2v2H2zm4-2h2v4H6zm4-2h2v6h-2zm4-2h2v8h-2z" /></svg>
                  <svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 4l6-3 6 3v6c0 4-3 5-6 6-3-1-6-2-6-6V4z" /></svg>
                </span>
              </div>
              <div className="phone-screen">
                <div className="phone-head">
                  <span className="phone-back">←</span>
                  <span className="phone-dots">···</span>
                </div>
                <div className="phone-row">
                  <span>REQUEST</span>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 12 }}>INV-4521XX</span>
                </div>
                <div className="phone-row">
                  <span>From</span>
                  <strong>XYZ Pvt. Ltd.</strong>
                </div>
                <div className="phone-row sep">
                  <span>Description</span>
                  <span style={{ color: "#fff" }}>Tax filing FY25</span>
                </div>
                <div className="phone-amt-label">Amount due</div>
                <div className="phone-amt">₹24,500</div>
                <div className="phone-verified"><VerifiedDot /> Verified by CAGOS</div>
                <div className="phone-pay">Pay ₹24,500</div>
                <div className="phone-foot">Razorpay · UPI · Card · Netbanking</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ===== Section 3: Command center ===== */
export const SectionCommand = () => (
  <section className="cagos-sec">
    <div className="grid-bg-section" />
    <div className="container">
      <div className="cmd-grid">
        <Reveal>
          <div>
            <span className="cmd-pill">ONE WORKSPACE</span>
            <h2 className="h-section" style={{ marginTop: 22 }}>
              Run your entire practice from <span className="grad-ink">one command center</span>
            </h2>
            <p className="section-sub">
              Personal CRM, HRMS portal, e-invoicing and compliance — every workflow lives in one tab. Your team stops switching tools and starts shipping work.
            </p>
            <div style={{ marginTop: 36 }}>
              <Link to="/register" className="btn btn-primary">
                <IconSparkle /> Explore the platform <ArrowRight />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="cmd-mock-wrap">
            <div className="cmd-toast cmd-toast-top">
              <span className="cmd-toast-icon"><VerifiedDot /></span>
              <div>
                <div className="cmd-toast-t">New client onboar…</div>
                <div className="cmd-toast-s">ABC Corp · 2m ago</div>
              </div>
            </div>
            <div className="cmd-mock">
              <div className="cmd-mock-head">
                <div style={{ display: "flex", gap: 6 }}>
                  <i className="tl tl-r" /><i className="tl tl-y" /><i className="tl tl-g" />
                </div>
                <span className="cmd-title">CAGOS Workspace</span>
                <span className="cmd-ver">v2.4</span>
              </div>
              <div className="cmd-stat">
                <span className="cmd-stat-icon"><IconSparkle /></span>
                <span>10,000+ FILINGS PROCESSED</span>
              </div>
              <div className="cmd-rows">
                <div className="cmd-row">
                  <div className="cmd-row-l">
                    <span className="cmd-row-icon b1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="cmd-row-t">Personal CRM</div>
                      <div className="cmd-row-s">247 active clients</div>
                    </div>
                  </div>
                  <span className="cmd-tag tag-live"><i className="ldot" />LIVE</span>
                </div>
                <div className="cmd-row">
                  <div className="cmd-row-l">
                    <span className="cmd-row-icon b2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21V8L12 3L21 8V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="cmd-row-t">HRMS Portal</div>
                      <div className="cmd-row-s">38 employees · 2 OOO</div>
                    </div>
                  </div>
                  <span className="cmd-tag tag-sync">SYNCED</span>
                </div>
                <div className="cmd-row">
                  <div className="cmd-row-l">
                    <span className="cmd-row-icon b3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M4 9H20" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="cmd-row-t">e-Invoicing</div>
                      <div className="cmd-row-s">₹4.2L this month</div>
                    </div>
                  </div>
                  <span className="cmd-tag tag-active">ACTIVE</span>
                </div>
              </div>
            </div>
            <div className="cmd-toast cmd-toast-bot">
              <span className="cmd-rupee">₹</span>
              <div>
                <div className="cmd-toast-t">Invoice paid · ₹45,000</div>
                <div className="cmd-toast-s">INV-4521 · just now</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export const CAGOSSections = () => (
  <>
    <SectionCompliance />
    <SectionPayments />
    <SectionCommand />
  </>
);
