import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  UserPlus,
  Settings2,
  PlayCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe2,
  Clock,
} from "lucide-react";

import { useInView } from "../../../hooks/useInView";
import { useCountUp } from "../../../hooks/useCountUp";

/* ─────────────────────────────────────────────────────────────
   HowItWorksSection — premium animated process timeline
   ─────────────────────────────────────────────────────────────
   • 4-step journey with glassmorphism cards
   • Animated gradient timeline + flowing light particle
   • Scroll-triggered stagger reveal + active step on hover/scroll
   • Trust metrics strip + magnetic CTA at the end
   ───────────────────────────────────────────────────────────── */

const steps = [
  {
    icon: UserPlus,
    eyebrow: "Step 01 · Onboard",
    title: "We Map Your Entire Practice",
    desc: "Import clients via CSV, attach GST/PAN data, and pick up where Excel left off. CAGOS is yours in 10 minutes — zero IT lift.",
    highlights: ["CSV client import", "Tenant sub-domain", "Branded client portal"],
    accent: "#3b82f6",
    grad: "from-blue-500 to-brand-600",
  },
  {
    icon: Settings2,
    eyebrow: "Step 02 · Configure",
    title: "Automate Every Compliance Window",
    desc: "Wire up your GST, ITR, ROC and TDS calendars. Smart rules assign tasks to associates and ping clients before deadlines hit.",
    highlights: ["Compliance calendar", "Email + WhatsApp share", "Workflow rules"],
    accent: "#06b6d4",
    grad: "from-cyan-500 to-blue-500",
  },
  {
    icon: PlayCircle,
    eyebrow: "Step 03 · Operate",
    title: "Run Your Firm From One Screen",
    desc: "Compliance, billing, HRMS, vault, client portal — all linked. Your team stops jumping tools and starts shipping work.",
    highlights: ["Unified inbox", "Recurring invoicing", "E-signed audit trail"],
    accent: "#10b981",
    grad: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    eyebrow: "Step 04 · Scale",
    title: "Grow 2× Without Adding Staff",
    desc: "Health-score every client, predict revenue, and let the marketplace bring in leads while you sleep. Senior partners thank us later.",
    highlights: ["Revenue analytics", "Client health scores", "Lead marketplace"],
    accent: "#a855f7",
    grad: "from-purple-500 to-pink-500",
  },
] as const;

function TrustMetric({
  target, suffix = "", label, icon: Icon, inView,
}: {
  target: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
  inView: boolean;
}) {
  const value = useCountUp(target, inView, 1800, target % 1 !== 0 ? 1 : 0);
  const display =
    target >= 1000
      ? `${Math.round(value).toLocaleString("en-IN")}${suffix}`
      : `${target % 1 !== 0 ? value.toFixed(1) : Math.round(value)}${suffix}`;

  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-extrabold text-white tabular-nums leading-none">
          {display}
        </p>
        <p className="text-xs text-slate-400 mt-1">{label}</p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  // Magnetic CTA effect
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < 140) {
        const k = (1 - dist / 140) * 0.4;
        setMagnet({ x: dx * k, y: dy * k });
      } else {
        setMagnet({ x: 0, y: 0 });
      }
    };
    const reset = () => setMagnet({ x: 0, y: 0 });
    window.addEventListener("mousemove", handle);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="how-section relative overflow-hidden py-24 md:py-32 noise-overlay"
    >
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #93c5fd 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ── HEADER ─────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className={`how-eyebrow inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our process
          </span>
          <h2
            className={`mt-5 font-extrabold text-white leading-[1.04] tracking-tight ${
              inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            From signup to{" "}
            <span className="bg-gradient-to-r from-brand-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              scaling firm
            </span>{" "}
            in one afternoon.
          </h2>
          <p
            className={`mt-5 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto ${
              inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            A four-step journey designed by senior CA partners. No IT team,
            no manual migration, no surprises.
          </p>
        </div>

        {/* ── TIMELINE — animated gradient track + flowing dot ── */}
        <div className="relative mb-12">
          {/* Desktop track (horizontal) */}
          <div className="hidden md:block absolute left-12 right-12 top-12 h-[3px] rounded-full overflow-hidden">
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #06b6d4 33%, #10b981 66%, #a855f7 100%)",
              }}
            />
            {/* progress fill animates as section enters view */}
            <div
              className="how-progress absolute inset-y-0 left-0 rounded-full"
              style={{
                width: inView ? "100%" : "0%",
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #06b6d4 33%, #10b981 66%, #a855f7 100%)",
                transition: "width 2s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: "0 0 18px rgba(59,130,246,0.55), 0 0 32px rgba(168,85,247,0.35)",
              }}
            />
            {/* travelling light particle */}
            <div className="how-particle absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.55)]" />
          </div>

          {/* Mobile track (vertical) */}
          <div className="md:hidden absolute left-7 top-0 bottom-0 w-[3px] rounded-full overflow-hidden">
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background:
                  "linear-gradient(180deg, #3b82f6 0%, #06b6d4 33%, #10b981 66%, #a855f7 100%)",
              }}
            />
            <div
              className="how-progress-v absolute inset-x-0 top-0 rounded-full"
              style={{
                height: inView ? "100%" : "0%",
                background:
                  "linear-gradient(180deg, #3b82f6 0%, #06b6d4 33%, #10b981 66%, #a855f7 100%)",
                transition: "height 2s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: "0 0 18px rgba(59,130,246,0.55)",
              }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeIdx === idx;
              return (
                <div
                  key={s.title}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  className={`flex md:flex-col gap-5 md:gap-0 ${
                    inView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: inView ? `${260 * idx + 200}ms` : "0ms" }}
                >
                  {/* Step badge — sits on the timeline */}
                  <div className="relative md:flex md:justify-center mb-0 md:mb-8 flex-shrink-0">
                    <div
                      className={`how-badge relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-white shadow-xl transition-all duration-500`}
                      style={{
                        boxShadow: isActive
                          ? `0 0 0 6px ${s.accent}25, 0 18px 40px -10px ${s.accent}80`
                          : `0 10px 28px -10px ${s.accent}55`,
                        transform: isActive ? "translateY(-4px) scale(1.06)" : "none",
                      }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`how-card flex-1 rounded-2xl p-6 transition-all duration-500 ${
                      isActive ? "how-card-active" : ""
                    }`}
                    style={{
                      // glassmorphism (CSS variable so light mode flips it)
                      background: "rgba(255,255,255,0.035)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transform: isActive ? "translateY(-6px)" : "none",
                      boxShadow: isActive
                        ? `0 26px 60px -20px ${s.accent}55, 0 0 0 1px ${s.accent}40 inset`
                        : "0 10px 30px -16px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-[0.18em]"
                        style={{ color: s.accent }}
                      >
                        {s.eyebrow}
                      </span>
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-extrabold leading-snug mb-2 transition-colors ${
                        isActive ? "text-white" : "text-slate-100"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {s.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: s.accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-bold transition-all hover:gap-2"
                      style={{ color: s.accent }}
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── TRUST METRICS ───────────────────────────────────── */}
        <div
          className={`mt-16 rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-md p-7 md:p-9 ${
            inView ? "animate-fade-in-up animation-delay-1000" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <TrustMetric target={2500}  suffix="+" label="CA firms onboarded"      icon={ShieldCheck} inView={inView} />
            <TrustMetric target={98}    suffix="%" label="Practice success rate"   icon={TrendingUp}  inView={inView} />
            <TrustMetric target={150}   suffix="+" label="Cities supported"        icon={Globe2}      inView={inView} />
            <TrustMetric target={24}    suffix="/7" label="Compliance support"     icon={Clock}       inView={inView} />
          </div>
        </div>

        {/* ── MAGNETIC CTA ────────────────────────────────────── */}
        <div
          className={`mt-14 text-center ${
            inView ? "animate-fade-in-up animation-delay-1000" : "opacity-0"
          }`}
        >
          <p className="text-sm text-slate-400 mb-4">
            Complete your practice setup in under 30 minutes
          </p>
          <Link
            ref={ctaRef}
            to="/register"
            className="how-cta group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 via-blue-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-bold text-base px-8 py-4 transition-all shadow-[0_18px_50px_-15px_rgba(37,99,235,0.65)] hover:shadow-[0_22px_55px_-12px_rgba(37,99,235,0.85)] glow-button"
            style={{
              transform: `translate(${magnet.x}px, ${magnet.y}px)`,
              transition: "transform 0.18s ease-out, box-shadow 0.3s",
            }}
          >
            Start your CAGOS journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
