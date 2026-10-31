import { Link } from "@tanstack/react-router";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  Check,
  Globe2,
  FileCheck2,
  Activity,
  Link as LinkIcon,
  Copy,
  CheckCircle2,
  IndianRupee,
  Sparkles,
  Zap,
  Users,
  UsersRound,
  CreditCard,
  Mail,
  FileText,
  Layers,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
import { useInView } from "../../../hooks/useInView";
import { ThreeDCard } from "../../ui/ThreeDCard";

/* ─────────────────────────────────────────────────────────────
   SeamlessSection — Skydo-style feature highlight grid
   ─────────────────────────────────────────────────────────────
   • Two-column header: headline (left) + CTA (right)
   • Three feature cards with mini-mockup illustrations on top
   • Wide banner card below: checklist + phone-style mockup
   ───────────────────────────────────────────────────────────── */

export function SeamlessSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      {/* Header row — headline left, CTA right */}
      <div
        className={`mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end ${
          inView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl md:max-w-3xl">
          Not just <span className="text-gradient-teal">compliance.</span>
          <br />
          CAGOS makes your practice{" "}
          <span className="text-gradient-teal">seamless.</span>
        </h2>

        <Link
          to="/register"
          className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:-translate-y-0.5"
        >
          Sign up
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Three feature cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {/* Card 1 — Onboard clients fast */}
        <ThreeDCard
          className={`rounded-2xl border border-white/6 bg-blue-500/[0.04] p-7 ${
            inView ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
          maxTilt={6}
          glareColor="rgba(59,130,246,0.1)"
        >
          <ClientStackMockup />
          <h3 className="mt-6 text-lg font-bold text-white">
            Onboard clients in 5 min
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Import 1,000+ clients via CSV or Excel. Attach GST &amp; PAN once
            and reuse across every workflow.
          </p>
        </ThreeDCard>

        {/* Card 2 — Instant compliance reports */}
        <ThreeDCard
          className={`rounded-2xl border border-white/6 bg-teal-500/[0.04] p-7 ${
            inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
          maxTilt={6}
          glareColor="rgba(0,212,170,0.1)"
        >
          <ReportMockup />
          <h3 className="mt-6 text-lg font-bold text-white">
            Instant Reports. Zero Stress.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Export client lists, invoice ledgers and compliance summaries in one
            click. Every document stored in the CAGOS vault, encrypted at rest.
          </p>
        </ThreeDCard>

        {/* Card 3 — Real-time deadline tracking */}
        <ThreeDCard
          className={`rounded-2xl border border-white/6 bg-purple-500/[0.04] p-7 ${
            inView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
          maxTilt={6}
          glareColor="rgba(124,58,237,0.1)"
        >
          <TimelineMockup />
          <h3 className="mt-6 text-lg font-bold text-white">
            Real-time deadline tracking
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Never miss a due date again: every GST, TDS &amp; ITR window
            tracked live across your entire client book.
          </p>
        </ThreeDCard>
      </div>

      {/* Wide banner card — checklist + phone mockup */}
      <div
        className={`mt-6 overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-brand-500/[0.06] to-teal-500/[0.04] p-8 md:p-10 ${
          inView ? "animate-fade-in-up animation-delay-500" : "opacity-0"
        }`}
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left — bullets */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Collect fees via payment links
            </h3>
            <ul className="space-y-3.5">
              {[
                "Save up to 80% on transaction fees",
                "1-click payment for your clients — UPI, Card, Netbanking & Wallets",
                "Auto-reconcile to invoices & ledgers in real time",
                "WhatsApp + email auto-reminders for unpaid invoices",
                "Branded payment pages with your firm's logo & GSTIN",
                "Bank-grade security · PCI-DSS compliant · 256-bit encryption",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-wider">
                Powered by:
              </span>
              <span className="font-semibold text-slate-300">Razorpay</span>
            </div>
          </div>

          {/* Right — payment-link phone mockup */}
          <div className="flex justify-center md:justify-end">
            <PaymentLinkMockup />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          Row A — Unified workspace (text left, dashboard stack right)
         ────────────────────────────────────────────────────────────── */}
      <div
        className={`mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          inView ? "animate-fade-in-up animation-delay-700" : "opacity-0"
        }`}
      >
        {/* Text left */}
        <div>
          <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300">
            One workspace
          </span>
          <h3 className="mt-4 text-[2.1rem] font-black leading-[1.05] tracking-tight text-white md:text-[2.6rem]">
            Run your entire practice
            <br />
            from{" "}
            <span className="text-gradient-teal">one command center</span>
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-slate-400">
            Personal CRM, HRMS portal, e-invoicing and compliance — every
            workflow lives in one tab. Your team stops switching tools and
            starts shipping work.
          </p>
          <Link
            to="/register"
            className="seamless-cta mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
          >
            Explore the platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Visual right */}
        <div className="seamless-pro-card relative overflow-hidden rounded-3xl p-8 md:p-10">
          <DashboardStackVisual />
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          Row B — Connected ecosystem (visual left, text right)
         ────────────────────────────────────────────────────────────── */}
      <div
        className={`mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          inView ? "animate-fade-in-up animation-delay-700" : "opacity-0"
        }`}
      >
        {/* Visual left */}
        <div className="seamless-pro-card relative overflow-hidden rounded-3xl p-8 md:p-10 md:order-1">
          <EcosystemVisual />
        </div>

        {/* Text right */}
        <div className="md:order-2">
          <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-300">
            Connected ecosystem
          </span>
          <h3 className="mt-4 text-[2.1rem] font-black leading-[1.05] tracking-tight text-white md:text-[2.6rem]">
            One platform.{" "}
            <span className="text-gradient-teal">
              Every CA workflow connected.
            </span>
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-slate-400">
            CRM, HRMS, e-invoicing, GST, ITR and payments — every module talks
            to every other. Update a client once and watch it flow across the
            entire system.
          </p>
          <Link
            to="/"
            hash="integrations"
            className="seamless-cta mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
          >
            See live integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────── Mini mockups (SVG-free, tailwind only) ─────────────── */

function ClientStackMockup() {
  return (
    <div className="relative h-32">
      {/* back card */}
      <div className="absolute left-2 right-2 top-0 flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-3 py-2">
        <span className="text-[10px] text-slate-500">Client</span>
        <Globe2 className="h-3 w-3 text-slate-500" />
      </div>
      {/* middle card */}
      <div className="absolute left-4 right-4 top-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/6 px-3 py-2">
        <span className="text-[10px] text-slate-400">Client</span>
        <Globe2 className="h-3 w-3 text-slate-400" />
      </div>
      {/* front card */}
      <div className="absolute left-6 right-6 top-12 flex items-center justify-between rounded-lg border border-brand-500/30 bg-canvas-800 px-3 py-2.5 shadow-lg">
        <span className="text-[11px] font-semibold text-white">
          150+ clients
        </span>
        <Globe2 className="h-3.5 w-3.5 text-brand-400" />
      </div>
    </div>
  );
}

function ReportMockup() {
  return (
    <div className="relative h-32 flex items-start justify-center pt-2">
      <div className="w-32 rounded-md border border-white/10 bg-white/6 p-2.5 shadow-lg">
        {/* red header bar */}
        <div className="mb-2 h-1 w-full rounded-full bg-rose-500/60" />
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[8px] font-bold text-white">FORM 26AS</span>
          <span className="text-[7px] text-slate-500">FY 25-26</span>
        </div>
        <div className="space-y-0.5">
          <div className="h-1 w-full rounded-full bg-white/10" />
          <div className="h-1 w-4/5 rounded-full bg-white/10" />
          <div className="h-1 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="mt-2 flex justify-end">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-500/40 bg-teal-500/10">
            <FileCheck2 className="h-3 w-3 text-teal-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineMockup() {
  const dots = [
    { color: "bg-teal-400", label: "GST 3B filed", done: true },
    { color: "bg-teal-400", label: "TDS Q3 paid", done: true },
    { color: "bg-amber-400", label: "ITR due Jul 31", done: false },
  ];
  return (
    <div className="relative h-32 rounded-lg border border-white/8 bg-white/4 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-bold text-white">Compliance</span>
        <Activity className="h-3 w-3 text-purple-400" />
      </div>
      <div className="space-y-2">
        {dots.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full rounded-full ${d.color} ${
                  !d.done ? "animate-ping opacity-60" : ""
                }`}
              />
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${d.color}`}
              />
            </span>
            <span className="text-[9px] text-slate-300">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentLinkMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] py-8 md:mx-0 md:ml-auto">
      {/* Brand glow halo behind the composition */}
      <div
        aria-hidden
        className="seamless-glow pointer-events-none absolute -left-6 -top-2 h-56 w-56 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)",
        }}
      />

      {/* ── Phone (always dark, regardless of theme) ────────────────── */}
      <div className="seamless-phone seamless-phone-frame relative ml-auto h-[420px] w-[210px] rounded-[2.6rem] border border-slate-800 bg-slate-900 p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* notch / dynamic island */}
        <div className="absolute left-1/2 top-[10px] z-20 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-black" />

        {/* phone screen — white app surface, dark text */}
        <div className="seamless-phone-screen relative flex h-full w-full flex-col overflow-hidden rounded-[2.1rem] bg-white">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-slate-600">
            <span>9:41</span>
            <span className="tracking-widest">•••</span>
          </div>

          {/* page header */}
          <div className="px-4 pt-4">
            <div className="text-[8px] font-medium uppercase tracking-wider text-slate-400">
              Payment request
            </div>
            <div className="mt-1 text-[11px] font-bold text-slate-900">
              CAGOS · INV-4521XX
            </div>
          </div>

          {/* invoice card */}
          <div className="mt-3 px-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] text-slate-400">Client</span>
                <span className="text-[9px] font-semibold text-slate-800">
                  XYZ Pvt. Ltd.
                </span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] text-slate-400">Invoice</span>
                <span className="text-[9px] font-semibold text-slate-800">
                  INV-4521XX
                </span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] text-slate-400">Description</span>
                <span className="text-[9px] font-semibold text-slate-800">
                  Tax filing FY25
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2">
                <span className="text-[8px] text-slate-400">Amount due</span>
                <span className="flex items-center text-[12px] font-bold text-teal-600">
                  <IndianRupee className="h-2.5 w-2.5" strokeWidth={3} />
                  24,500
                </span>
              </div>
            </div>
          </div>

          {/* status pill */}
          <div className="mt-3 px-4">
            <div className="flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-50 px-2.5 py-1 w-fit">
              <CheckCircle2 className="h-2.5 w-2.5 text-teal-600" />
              <span className="text-[8px] font-semibold text-teal-700">
                Verified by CAGOS
              </span>
            </div>
          </div>

          {/* pay-now button on phone */}
          <div className="mt-auto px-4 pb-5">
            <div className="rounded-lg bg-teal-500 py-2 text-center text-[10px] font-bold text-white shadow-lg shadow-teal-500/20">
              Pay ₹24,500
            </div>
            <div className="mt-1.5 text-center text-[7px] text-slate-400">
              Razorpay · UPI · Card · Netbanking
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating CAPay Links card (overlays only top-left of phone) ── */}
      <div className="seamless-floating-card absolute -left-2 top-10 w-[208px]">
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-4 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.55)] ring-1 ring-white/10">
          {/* header */}
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <LinkIcon className="h-3.5 w-3.5 text-white" />
            </span>
            <span className="text-[13px] font-bold text-white">
              CAPay Links
            </span>
          </div>

          {/* URL pill — solid white for contrast */}
          <div className="mb-3 flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-2">
            <span className="truncate text-[10px] font-medium text-slate-700">
              CAGOS.com/pay/INV-4521XX
            </span>
            <Copy className="h-3 w-3 flex-shrink-0 text-slate-500" />
          </div>

          {/* Share button — deep navy for strong contrast on blue card */}
          <button
            type="button"
            className="seamless-share-btn w-full rounded-lg bg-[#1e3a5f] py-2.5 text-[11px] font-bold text-white transition hover:bg-[#162a45]"
          >
            Share payment link
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   DashboardStackVisual — layered dashboard mockup with floating panels
   ───────────────────────────────────────────────────────────────────── */
function DashboardStackVisual() {
  return (
    <div className="relative h-[300px] w-full">
      {/* Trust badge */}
      <div className="absolute left-0 top-0 z-30 inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 backdrop-blur">
        <Sparkles className="h-3 w-3 text-brand-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-300">
          10,000+ filings processed
        </span>
      </div>

      {/* Ghost layer (behind, slightly tilted) */}
      <div className="seamless-ghost-card absolute left-[10%] right-[10%] top-[28%] h-[150px] rounded-2xl border border-white/8 bg-white/[0.03]" />

      {/* Main dashboard panel */}
      <div className="seamless-main-panel absolute left-[6%] right-[6%] top-[20%] overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-slate-900/90 to-slate-900/70 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.55)] backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/8 bg-slate-900/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-500/70" />
            <span className="h-2 w-2 rounded-full bg-amber-500/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[9px] font-semibold text-slate-400">
            CAGOS Workspace
          </span>
          <span className="text-[9px] text-slate-500">v2.4</span>
        </div>

        {/* Module rows */}
        <div className="space-y-2 p-3">
          {[
            { mod: "Personal CRM",    info: "247 active clients",  pill: "Live",   pillCls: "bg-teal-500/15 text-teal-300" },
            { mod: "HRMS Portal",     info: "38 employees · 2 OOO", pill: "Synced", pillCls: "bg-brand-500/15 text-brand-300" },
            { mod: "e-Invoicing",     info: "₹4.2L this month",     pill: "Active", pillCls: "bg-emerald-500/15 text-emerald-300" },
          ].map((r) => (
            <div
              key={r.mod}
              className="flex items-center justify-between rounded-lg border border-white/6 bg-white/[0.04] px-3 py-2"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-white">{r.mod}</div>
                <div className="text-[9px] text-slate-400">{r.info}</div>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${r.pillCls}`}>
                {r.pill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating mini-panel: New client */}
      <div className="seamless-mini-panel seamless-mini-float absolute right-[-2%] top-[8%] z-20 w-[150px] rounded-xl border border-white/12 bg-slate-900/95 px-3 py-2 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          </span>
          <div className="min-w-0">
            <div className="text-[9px] font-bold text-white truncate">
              New client onboarded
            </div>
            <div className="text-[8px] text-slate-400 truncate">ABC Corp · 2m ago</div>
          </div>
        </div>
      </div>

      {/* Floating mini-panel: Invoice paid */}
      <div className="seamless-mini-panel seamless-mini-float-2 absolute bottom-[-8%] left-[-2%] z-20 w-[170px] rounded-xl border border-white/12 bg-slate-900/95 px-3 py-2 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15">
            <IndianRupee className="h-3.5 w-3.5 text-teal-400" strokeWidth={2.5} />
          </span>
          <div className="min-w-0">
            <div className="text-[9px] font-bold text-white truncate">
              Invoice paid · ₹45,000
            </div>
            <div className="text-[8px] text-slate-400 truncate">INV-4521 · just now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   EcosystemVisual — Central Intelligence Network
   • Asymmetric organic node layout (no perfect hexagon)
   • Curved Bézier connections (primary/secondary/cross-link types)
   • Live data packets travelling along primary paths via animateMotion
   • Orbital rings around the core hub (counter-rotating)
   • Node hierarchy: Core (largest) > Primary (4) > Secondary (2)
   • Staggered activity cycle — nodes pulse in sequence
   ───────────────────────────────────────────────────────────────────── */

// viewBox 600 × 500 — near-square landscape. Six modules sit on a perfect
// circle of radius RING_R around HUB(300, 250); a dashed perimeter ring
// connects them as one continuous loop, with an animated comet segment
// travelling clockwise. Container aspect 6:5 keeps SVG ↔ HTML coords 1:1.
const VIEW = { w: 600, h: 500 };
const HUB = { x: 300, y: 250 };
const RING_R = 190;
const HUB_LEFT_PCT = `${(HUB.x / VIEW.w) * 100}%`;
const HUB_TOP_PCT  = `${(HUB.y / VIEW.h) * 100}%`;

interface EcoNode {
  mono: string;
  label: string;
  status: string;
  Icon: IconType;
  // brand-color key used to build Tailwind classes for icon bubble + glow
  tone: "brand" | "purple" | "teal" | "rose" | "amber" | "emerald";
  x: number;
  y: number;
  // CSS percentage positions (precomputed from x/y / viewBox dims)
  leftPct: string;
  topPct:  string;
  // Activity cycle delay
  pulseDelay: string;
  pathId: string;
  // Particle travel duration along this path
  particleDur: string;
}

const TONES: Record<EcoNode["tone"], { border: string; iconColor: string; chipBg: string }> = {
  brand:   { border: "border-blue-300",    iconColor: "text-blue-500",    chipBg: "bg-blue-50/80"    },
  purple:  { border: "border-purple-300",  iconColor: "text-purple-500",  chipBg: "bg-purple-50/80"  },
  teal:    { border: "border-teal-300",    iconColor: "text-teal-500",    chipBg: "bg-teal-50/80"    },
  rose:    { border: "border-rose-300",    iconColor: "text-rose-500",    chipBg: "bg-rose-50/80"    },
  amber:   { border: "border-amber-300",   iconColor: "text-amber-500",   chipBg: "bg-amber-50/80"   },
  emerald: { border: "border-emerald-300", iconColor: "text-emerald-500", chipBg: "bg-emerald-50/80" },
};

// Six modules on a perfect circle (radius RING_R=190, 60° increments) around
// HUB(300, 250). Clockwise from 12 o'clock:
//   0° CRM, 60° HRMS, 120° INV, 180° AI, 240° MAIL, 300° PAY.
const NODES: EcoNode[] = [
  {
    mono: "CRM", label: "Personal CRM", status: "LIVE",
    Icon: Users, tone: "brand",
    x: 300, y: 60,
    leftPct: "50%",        topPct: "12%",
    pulseDelay: "0s",
    pathId: "eco-path-crm",
    particleDur: "3.8s",
  },
  {
    mono: "HRMS", label: "HRMS Portal", status: "SYNCED",
    Icon: UsersRound, tone: "purple",
    x: 464.5, y: 155,
    leftPct: "77.417%",    topPct: "31%",
    pulseDelay: "0.5s",
    pathId: "eco-path-hrms",
    particleDur: "4.4s",
  },
  {
    mono: "INV", label: "e-Invoicing", status: "ACTIVE",
    Icon: FileText, tone: "teal",
    x: 464.5, y: 345,
    leftPct: "77.417%",    topPct: "69%",
    pulseDelay: "1.0s",
    pathId: "eco-path-inv",
    particleDur: "3.4s",
  },
  {
    mono: "AI", label: "AI Instant", status: "AUTO",
    Icon: Sparkles, tone: "rose",
    x: 300, y: 440,
    leftPct: "50%",        topPct: "88%",
    pulseDelay: "1.5s",
    pathId: "eco-path-ai",
    particleDur: "4.6s",
  },
  {
    mono: "MAIL", label: "Email Inbox", status: "SYNCED",
    Icon: Mail, tone: "amber",
    x: 135.5, y: 345,
    leftPct: "22.583%",    topPct: "69%",
    pulseDelay: "2.0s",
    pathId: "eco-path-mail",
    particleDur: "4.0s",
  },
  {
    mono: "PAY", label: "Payments", status: "LIVE",
    Icon: CreditCard, tone: "emerald",
    x: 135.5, y: 155,
    leftPct: "22.583%",    topPct: "31%",
    pulseDelay: "2.5s",
    pathId: "eco-path-pay",
    particleDur: "4.8s",
  },
];

// Pre-computed particle positions for the ambient floater layer. Hand-picked
// off-grid coordinates so the dots don't form a visible pattern.
const ATMOS_PARTICLES: { l: string; t: string; d: string }[] = [
  { l: "12%", t: "18%", d: "0s"   },
  { l: "78%", t: "9%",  d: "1.1s" },
  { l: "25%", t: "78%", d: "2.3s" },
  { l: "88%", t: "62%", d: "0.6s" },
  { l: "45%", t: "8%",  d: "3.2s" },
  { l: "8%",  t: "55%", d: "4.4s" },
  { l: "92%", t: "28%", d: "1.8s" },
  { l: "38%", t: "92%", d: "2.9s" },
  { l: "72%", t: "82%", d: "5.1s" },
  { l: "55%", t: "48%", d: "3.7s" },
  { l: "18%", t: "38%", d: "0.4s" },
  { l: "82%", t: "75%", d: "4.0s" },
];

const FEATURE_STRIP: { Icon: IconType; title: string; sub: string; iconBg: string; iconColor: string }[] = [
  { Icon: Layers,      title: "ALL MODULES",       sub: "Connected",        iconBg: "bg-brand-500/15",   iconColor: "text-brand-400"   },
  { Icon: RefreshCw,   title: "REAL-TIME SYNC",    sub: "Always Updated",   iconBg: "bg-emerald-500/15", iconColor: "text-emerald-400" },
  { Icon: ShieldCheck, title: "SECURE & RELIABLE", sub: "Enterprise Grade", iconBg: "bg-cyan-500/15",    iconColor: "text-cyan-400"    },
  { Icon: TrendingUp,  title: "SMART AUTOMATION",  sub: "AI Powered",       iconBg: "bg-purple-500/15",  iconColor: "text-purple-400"  },
];

function EcosystemVisual() {
  return (
    <div>
    <div className="seamless-eco-graph relative mx-auto aspect-[6/5] w-full max-w-[460px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[660px]">
      {/* ── ATMOSPHERIC LAYERS — soft pastel blooms + dot grid + drifters ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="seamless-eco-bloom-1 absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="seamless-eco-bloom-2 absolute -bottom-28 -right-20 h-[26rem] w-[26rem] rounded-full bg-purple-400/25 blur-3xl" />
        <div className="seamless-eco-bloom-3 absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-rose-400/22 blur-3xl" />
        <div className="seamless-eco-dotgrid absolute inset-0" />
        {ATMOS_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="seamless-eco-floater absolute h-1 w-1 rounded-full bg-cyan-400/60"
            style={{ left: p.l, top: p.t, animationDelay: p.d }}
          />
        ))}
      </div>

      {/* Trust badge — adapts to theme */}
      <div className="seamless-eco-trust absolute right-0 top-0 z-40 inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 backdrop-blur">
        <Zap className="h-3 w-3 text-teal-500" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
          500+ firms · 99.9% uptime
        </span>
      </div>

      {/* ── SVG NETWORK LAYER ─────────────────────────────────────────
          One main dashed perimeter ring connects all 6 modules in a
          continuous loop. A bright gradient comet segment travels
          clockwise around the ring, giving the "flow / data sync"
          feeling without radial spokes from a central hub. */}
      <svg
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <defs>
          {/* Comet gradient — purple → cyan, fades at both ends */}
          <linearGradient
            id="ecoCometGrad"
            gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2={VIEW.w} y2={VIEW.h}
          >
            <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0"   />
            <stop offset="35%"  stopColor="#8b5cf6" stopOpacity="0.95" />
            <stop offset="75%"  stopColor="#06b6d4" stopOpacity="1"   />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.55" />
          </linearGradient>
          {/* Hub radial glow — soft lavender halo behind tagline card */}
          <radialGradient id="ecoHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0.32" />
            <stop offset="55%"  stopColor="#a78bfa" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"    />
          </radialGradient>
          <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Soft halo behind the tagline card */}
        <circle cx={HUB.x} cy={HUB.y} r="155" fill="url(#ecoHubGlow)" />

        {/* Inner thin orbit ring (subtle, smaller than perimeter) */}
        <circle
          cx={HUB.x} cy={HUB.y} r="110"
          fill="none"
          stroke="rgba(148, 163, 184, 0.22)"
          strokeWidth="0.9"
          strokeDasharray="2 7"
          vectorEffect="non-scaling-stroke"
          className="seamless-eco-ring-1"
        />

        {/* Main dashed perimeter ring — connects all 6 module nodes */}
        <circle
          cx={HUB.x} cy={HUB.y} r={RING_R}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="5 8"
          vectorEffect="non-scaling-stroke"
          className="seamless-eco-perimeter"
        />

        {/* Animated comet — bright gradient segment travelling clockwise.
            pathLength=100 + dasharray "22 78" gives a 22% visible chunk;
            stroke-dashoffset animates from 0 to -100 to slide it around. */}
        <circle
          cx={HUB.x} cy={HUB.y} r={RING_R}
          fill="none"
          stroke="url(#ecoCometGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="22 78"
          className="seamless-eco-comet"
          filter="url(#blurGlow)"
        />

        {/* Radar pulse from center — single, slow */}
        <circle cx={HUB.x} cy={HUB.y} r="60" fill="none" stroke="rgba(94,234,212,0.5)" strokeWidth="1">
          <animate attributeName="r"       from="55" to="180" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.55" to="0" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ── HUB — minimal centered tagline card ─────────────────────── */}
      <div
        className="seamless-hub-pro absolute z-30 -translate-x-1/2 -translate-y-1/2 w-[170px] rounded-2xl px-4 py-3 text-center"
        style={{ left: HUB_LEFT_PCT, top: HUB_TOP_PCT }}
      >
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-brand-700 shadow-sm">
            <RefreshCw className="h-3 w-3 text-white" strokeWidth={2.5} />
          </span>
          <span className="seamless-hub-label text-[10px] font-black uppercase tracking-[0.22em]">
            CAGOS
          </span>
        </div>
        <div className="seamless-hub-tagline text-[13px] font-bold leading-snug">
          One workspace,
          <br />
          every workflow
        </div>
      </div>

      {/* ── MODULE NODES — icon circle + label below ─────────────────── */}
      {NODES.map((n, i) => {
        const t = TONES[n.tone];
        return (
          <div
            key={n.mono}
            data-node={n.mono.toLowerCase()}
            className="seamless-eco-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{
              left: n.leftPct,
              top: n.topPct,
              animationDelay: n.pulseDelay,
              zIndex: 20 - i,
              width: 96,
            }}
          >
            <div
              className={`seamless-eco-circle relative flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 ${t.border} shadow-[0_6px_18px_-6px_rgba(15,23,42,0.15)]`}
            >
              <n.Icon className={`h-5 w-5 ${t.iconColor}`} strokeWidth={2.25} />
              {/* Tiny pulsing status dot — top-right edge */}
              <span
                className="seamless-eco-status-dot absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal-400"
                style={{ animationDelay: n.pulseDelay }}
              />
            </div>
            <div className="seamless-eco-node-label mt-2 text-center text-[12px] font-bold whitespace-nowrap">
              {n.mono}
            </div>
            <div className="seamless-eco-node-sub mt-0.5 text-center text-[8.5px] font-medium tracking-wide whitespace-nowrap">
              {n.label}
            </div>
          </div>
        );
      })}
    </div>

    {/* ── BOTTOM FEATURE STRIP — four enterprise callouts ────────────── */}
    <div className="seamless-eco-features mx-auto mt-6 grid w-full max-w-[680px] grid-cols-2 gap-3 rounded-2xl p-4 backdrop-blur-sm md:grid-cols-4 md:gap-4 md:p-5">
      {FEATURE_STRIP.map((f) => (
        <div key={f.title} className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${f.iconBg} ${f.iconColor}`}>
            <f.Icon className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <div className="seamless-eco-feat-title truncate text-[10px] font-black uppercase tracking-wider">
              {f.title}
            </div>
            <div className="seamless-eco-feat-sub truncate text-[10px]">
              {f.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
