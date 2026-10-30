import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle, X, Zap, Phone } from "lucide-react";

import { useInView } from "../../../hooks/useInView";
import { ThreeDCard } from "../../ui/ThreeDCard";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 2499,
    annualPrice: 1999,
    desc: "For solo practitioners just getting started with practice management.",
    cta: "Start free trial",
    featured: false,
    badge: null,
    color: "border-white/8 bg-[#0d1628]",
    features: [
      { text: "Up to 50 clients",             included: true },
      { text: "Client CRM (basic)",            included: true },
      { text: "Compliance calendar",           included: true },
      { text: "Document vault (10 GB)",        included: true },
      { text: "Invoicing (50/month)",          included: true },
      { text: "Workflow engine",               included: false },
      { text: "HRMS module",                   included: false },
      { text: "White-label client portal",     included: false },
      { text: "Analytics dashboard",           included: false },
      { text: "Priority support",              included: false },
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 4999,
    annualPrice: 3999,
    desc: "For scaling firms with multiple partners and 100+ clients.",
    cta: "Start free trial",
    featured: true,
    badge: "Most Popular",
    color: "border-brand-500 bg-[#0a1526]",
    features: [
      { text: "Unlimited clients",             included: true },
      { text: "Full Client CRM",               included: true },
      { text: "Compliance deadline calendar",  included: true },
      { text: "Document vault (100 GB)",       included: true },
      { text: "Unlimited invoicing",           included: true },
      { text: "Full Workflow engine",          included: true },
      { text: "HRMS (up to 20 staff)",         included: true },
      { text: "Client portal (tenant slug)",   included: true },
      { text: "Reports dashboard",             included: false },
      { text: "Priority support (4hr SLA)",    included: true },
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 9999,
    annualPrice: 7999,
    desc: "For leading CA firms needing scale, advanced reporting, and a dedicated success manager.",
    cta: "Contact sales",
    featured: false,
    badge: "Best Value",
    color: "border-white/8 bg-[#0d1628]",
    features: [
      { text: "Unlimited clients",             included: true },
      { text: "Full Client CRM",               included: true },
      { text: "Compliance deadline calendar",  included: true },
      { text: "Unlimited document vault",      included: true },
      { text: "Unlimited invoicing",           included: true },
      { text: "Full Workflow engine",          included: true },
      { text: "HRMS (unlimited staff)",        included: true },
      { text: "Client portal (tenant slug)",   included: true },
      { text: "Advanced reports & exports",    included: true },
      { text: "Dedicated success manager",     included: true },
    ],
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className={`text-center mb-14 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-4">
          Transparent Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
          Simple plans that scale with your firm
        </h2>
        <p className="text-lg text-slate-400 mt-4">
          No hidden fees. No long-term lock-in. Cancel any time.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-sm font-semibold ${!annual ? "text-white" : "text-slate-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              annual ? "bg-brand-600" : "bg-slate-700"
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                annual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${annual ? "text-white" : "text-slate-500"}`}>
              Annual
            </span>
            <span className="text-xs font-bold bg-teal-500/15 text-teal-400 px-2 py-0.5 rounded-full border border-teal-500/20">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Plans grid */}
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`${plan.featured ? "scale-[1.02]" : ""} ${inView ? "animate-fade-in-up" : "opacity-0"} h-full`}
            style={{ animationDelay: inView ? `${150 * idx}ms` : "0ms" }}
          >
            <ThreeDCard
              maxTilt={6}
              scale={1.015}
              glareColor={plan.featured ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.05)"}
              className={`rounded-2xl border flex flex-col relative overflow-hidden h-full ${plan.color} ${
                plan.featured
                  ? "shadow-2xl shadow-brand-500/20 animate-glow-blue"
                  : "shadow-sm hover:shadow-xl hover:shadow-black/30 hover:border-slate-600"
              }`}
            >
              {/* Featured ribbon */}
              {plan.featured && (
                <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white text-[11px] font-extrabold text-center py-2 tracking-widest uppercase">
                  ✦ Most Popular ✦
                </div>
              )}

              {/* Badge (non-featured) */}
              {plan.badge && !plan.featured && (
                <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-200">
                  {plan.badge}
                </div>
              )}

              <div className="p-7">
                <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-400 mt-1 mb-6 leading-snug">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-white">
                    ₹{(annual ? plan.annualPrice : plan.monthlyPrice).toLocaleString("en-IN")}
                  </span>
                  <span className="text-slate-400 text-sm">/month</span>
                </div>
                {annual && (
                  <p className="text-xs text-emerald-400 font-semibold mb-2">
                    Billed annually · Save ₹
                    {((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString("en-IN")}/yr
                  </p>
                )}
                {!annual && <p className="text-xs text-slate-400 mb-2">Billed monthly</p>}

                {plan.name === "Enterprise" ? (
                  <a
                    href="tel:+918010001234"
                    className="mt-5 w-full py-3 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 text-white border border-white/10"
                  >
                    <Phone className="w-4 h-4" />
                    Talk to sales
                  </a>
                ) : (
                  <Link
                    to="/register"
                    className={`relative overflow-hidden mt-5 w-full py-3 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.featured
                        ? "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/25 glow-button"
                        : "bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute inset-0 animate-shimmer-btn pointer-events-none" />
                    )}
                    <Zap className="w-4 h-4" />
                    {plan.cta}
                  </Link>
                )}
              </div>

              <div className="px-7 pb-7 space-y-2.5 flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  What&apos;s included
                </p>
                {plan.features.map((feat) => (
                  <div key={feat.text} className="flex items-center gap-3 text-sm">
                    {feat.included ? (
                      <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-700 flex-shrink-0" />
                    )}
                    <span className={feat.included ? "text-slate-200" : "text-slate-600"}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </ThreeDCard>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 space-y-2">
        <p className="text-sm text-slate-400">
          All plans include a{" "}
          <strong className="text-white">30-day free trial</strong> — no credit card required.
        </p>
        <p className="text-sm text-slate-500">
          Need a custom plan for 50+ staff?{" "}
          <a href="tel:+918010001234" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            Contact our sales team →
          </a>
        </p>
      </div>
    </div>
  );
}
