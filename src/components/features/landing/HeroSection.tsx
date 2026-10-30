import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Shield,
  Award,
  Zap,
  ChevronDown,
} from "lucide-react";

import { useMouseParallax } from "../../../hooks/useMouseParallax";

const trustBadges = [
  { icon: Award,  label: "ICAI Compliant",      sub: "Built for Indian CAs" },
  { icon: Star,   label: "★ 4.8 / 5 Rating",    sub: "500+ verified reviews" },
  { icon: Shield, label: "Bank-Grade Security",  sub: "AES-256 + SOC 2" },
  { icon: Zap,    label: "10-Min Setup",          sub: "No IT team required" },
];

const avatarInitials = ["RM", "PS", "AJ", "VN", "MG"];
const avatarColors = [
  "bg-brand-500", "bg-blue-500", "bg-amber-500", "bg-purple-500", "bg-rose-500",
];

export function HeroSection() {
  const dashRef = useRef<HTMLDivElement>(null);
  const rotation = useMouseParallax(dashRef, 5);

  return (
    <section className="relative overflow-hidden noise-overlay bg-canvas-900 pt-10 pb-0 md:pt-16">
      {/* ── Gradient orbs ───────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute animate-orbit-slow"
          style={{
            top: "-20%", right: "-8%",
            width: 900, height: 900,
            background: "radial-gradient(circle, rgba(37,99,235,0.32) 0%, transparent 68%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute animate-orbit-medium animation-delay-800"
          style={{
            bottom: "-12%", left: "-10%",
            width: 720, height: 720,
            background: "radial-gradient(circle, rgba(0,212,170,0.22) 0%, transparent 68%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute animate-orbit-fast animation-delay-400"
          style={{
            top: "35%", right: "28%",
            width: 520, height: 520,
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 68%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* ── Dot grid ────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.038]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Perspective grid floor ──────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-72 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(99,179,237,0.1) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          transform: "perspective(480px) rotateX(72deg)",
          transformOrigin: "bottom center",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Eyebrow badge ───────────────────────────────────────────── */}
        <div className="flex justify-center md:justify-start mb-10 animate-fade-in-up animation-delay-100">
          <span className="glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-teal-400 text-xs font-bold tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
            </span>
            #1 Practice Management Platform for CA Firms in India
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-10 items-center">
          {/* ── LEFT: Copy ──────────────────────────────────────────────── */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 data-speakable="true" className="text-5xl md:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight">
              <span className="block text-white animate-fade-in-up animation-delay-200">
                Run your entire
              </span>
              <span className="block animate-fade-in-up animation-delay-300">
                <span className="hero-accent-word relative inline-block text-gradient-teal">
                  CA practice
                  <span aria-hidden className="hero-accent-underline absolute left-0 right-0 -bottom-1 h-[3px] rounded-full" />
                </span>
              </span>
              <span className="block text-white animate-fade-in-up animation-delay-400">
                from one screen.
              </span>
            </h1>

            <p data-speakable="true" className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-500">
              Stop chasing clients on WhatsApp, tracking 500+ deadlines on
              Excel, and juggling 10 different tools.{" "}
              <strong className="font-extrabold text-white">2,500+ CA firms</strong> run
              compliance, billing, workflow, and HRMS — all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Link
                to="/register"
                className="seamless-cta group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-white rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 animate-shimmer-btn pointer-events-none" />
                Start free — no card needed
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="hero-secondary-cta group glass w-full sm:w-auto px-8 py-4 hover:bg-white/10 text-white rounded-xl text-base font-bold transition-all flex items-center justify-center gap-3">
                <span className="hero-play-ring relative w-7 h-7 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 fill-brand-400 text-brand-400 translate-x-[1px]" />
                </span>
                Watch 2-min demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start animate-fade-in-up animation-delay-700">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatarInitials.map((init, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-canvas-900 flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0 ${avatarColors[i]}`}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">2,500+ firms trust CAGos</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs text-slate-500">4.8 avg rating</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex flex-wrap items-center gap-4">
                {["No credit card", "Cancel anytime", "Free migration"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Hero brand visual ────────────────────────────────── */}
          <div
            ref={dashRef}
            className="relative lg:pt-4 lg:-mr-6 xl:-mr-16 animate-fade-in animation-delay-400 cursor-default select-none"
          >
            {/* Ambient glow behind image */}
            <div
              className="pointer-events-none absolute inset-4 -z-10 animate-glow-blue rounded-3xl opacity-60"
              style={{ filter: "blur(40px)" }}
            />
            {/* Floor glow — soft light pooling under the visual */}
            <div aria-hidden className="hero-floor-glow pointer-events-none absolute -bottom-16 left-4 right-4 h-32 -z-10" />
            {/* Image with mouse-tracked 3D perspective */}
            <div
              style={{
                transform: `perspective(1200px) rotateX(${3 + rotation.x * 0.6}deg) rotateY(${-5 + rotation.y * 0.6}deg)`,
                transition: "transform 0.28s cubic-bezier(0.23,1,0.32,1)",
                filter:
                  "drop-shadow(0 60px 100px rgba(0,0,0,0.85)) drop-shadow(0 0 50px rgba(37,99,235,0.18))",
              }}
            >
              <picture>
                <source srcSet="/hero-cagos.webp" type="image/webp" />
                <img
                  src="/hero-cagos.png"
                  alt="CAGos platform — unified CA practice dashboard"
                  width={1536}
                  height={1024}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-auto rounded-2xl"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* ── Trust badges ────────────────────────────────────────────── */}
        <div className="mt-14 pb-0 grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in-up animation-delay-700">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="glass flex items-center gap-3 rounded-xl px-4 py-3.5 hover:bg-white/8 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-4.5 h-4.5 text-brand-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">{badge.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue — bouncing chevron */}
      <div className="hero-scroll-cue mt-12 hidden md:flex flex-col items-center gap-1.5 text-slate-500">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
      </div>

      {/* Wave transition to next section */}
      <div className="mt-12">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path className="hero-wave-fill" d="M0 30C360 60 1080 0 1440 30V60H0V30Z" />
        </svg>
      </div>
    </section>
  );
}
