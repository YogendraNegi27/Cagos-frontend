
import { Shield, Clock, TrendingUp, Award, Headphones, Globe } from "lucide-react";

import { useInView } from "../../../hooks/useInView";
import { ThreeDCard } from "../../ui/ThreeDCard";

const reasons = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "AES-256 encryption at rest and in transit. Your client's ITR data never leaves Indian servers. Penetration-tested quarterly.",
    accent: "brand",
  },
  {
    icon: Clock,
    title: "Setup in Under 10 Minutes",
    desc: "Import your existing clients via CSV, connect your email, and go live with your compliance calendar — all in your first session.",
    accent: "blue",
  },
  {
    icon: TrendingUp,
    title: "Proven Revenue Growth",
    desc: "Firms using CAGOS grow 38% faster on average by taking on more clients without adding headcount. ROI kicks in within 60 days.",
    accent: "teal",
  },
  {
    icon: Award,
    title: "ICAI-Recognised Standards",
    desc: "Built in consultation with senior CA practitioners. All workflows comply with ICAI guidelines and Indian regulatory requirements.",
    accent: "amber",
  },
  {
    icon: Headphones,
    title: "Dedicated Success Team",
    desc: "Every firm gets an onboarding specialist and ongoing access to our CA-trained support team. Average response under 4 hours.",
    accent: "purple",
  },
  {
    icon: Globe,
    title: "Role-Based Access",
    desc: "Partners, managers, and staff each see only the clients and modules assigned to them. Granular permissions across CRM, billing, HRMS, and the vault.",
    accent: "rose",
  },
];

const stats = [
  { value: "2,500+", label: "CA Firms",         sub: "across India" },
  { value: "1.2L+",  label: "Clients Managed",  sub: "on the platform" },
  { value: "98.7%",  label: "Uptime SLA",        sub: "guaranteed" },
  { value: "4.8/5",  label: "Avg Rating",        sub: "from 500+ reviews" },
];

const accentMap: Record<string, { icon: string; glow: string }> = {
  brand:  { icon: "bg-brand-500/12 text-brand-400 border-brand-500/20",   glow: "rgba(59,130,246,0.08)" },
  blue:   { icon: "bg-blue-500/12  text-blue-400  border-blue-500/20",    glow: "rgba(99,102,241,0.08)" },
  teal:   { icon: "bg-teal-500/12  text-teal-400  border-teal-500/20",    glow: "rgba(0,212,170,0.08)" },
  amber:  { icon: "bg-amber-500/12 text-amber-400 border-amber-500/20",   glow: "rgba(245,158,11,0.08)" },
  purple: { icon: "bg-purple-500/12 text-purple-400 border-purple-500/20",glow: "rgba(124,58,237,0.08)" },
  rose:   { icon: "bg-rose-500/12  text-rose-400  border-rose-500/20",    glow: "rgba(244,63,94,0.08)" },
};

export function WhyChooseSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className={`text-center mb-14 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="inline-block mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
          Why CAGOS
        </span>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-5xl">
          The CA firm&apos;s unfair{" "}
          <span className="text-gradient-teal">advantage</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          Not just another practice management tool. CAGOS is the operating
          system your entire firm runs on.
        </p>
      </div>

      {/* Stats row */}
      <div
        className={`mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 ${
          inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
        }`}
      >
        {stats.map((stat) => (
          <ThreeDCard
            key={stat.label}
            className="cursor-default rounded-2xl border border-white/6 p-6 text-center"
            style={{ background: "rgba(255,255,255,0.025)" }}
            maxTilt={7}
            glareColor="rgba(255,255,255,0.04)"
          >
            <p className="text-3xl font-extrabold text-gradient-teal md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-sm font-bold text-white">{stat.label}</p>
            <p className="mt-0.5 text-xs text-slate-500">{stat.sub}</p>
          </ThreeDCard>
        ))}
      </div>

      {/* Feature cards grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, idx) => {
          const Icon = r.icon;
          const ac = accentMap[r.accent];
          return (
            <ThreeDCard
              key={r.title}
              className={`cursor-default rounded-2xl border border-white/6 p-7 ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                background: "rgba(255,255,255,0.025)",
                animationDelay: inView ? `${100 * idx}ms` : "0ms",
              }}
              maxTilt={8}
              glareColor={ac.glow}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${ac.icon}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{r.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{r.desc}</p>
            </ThreeDCard>
          );
        })}
      </div>
    </div>
  );
}
