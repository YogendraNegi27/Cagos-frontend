
import { Building2, Users, Wallet, TrendingUp } from "lucide-react";

import { useInView } from "../../../hooks/useInView";
import { useCountUp } from "../../../hooks/useCountUp";

const firms = [
  "Mehta & Associates","Sharma & Co.","Joshi Tax Consultants","Patel & Partners",
  "Nair Tax Advisory","Gupta Financial","Ahluwalia & Co.","Sinha & Associates",
  "Reddy & Partners","Khanna & Co.","Shah Financial","Bhatia Tax Services",
  "Kapoor & Associates","Malhotra & Co.","Desai Consultants","Rajput Advisory",
  "Verma & Co.","Iyer Tax Services","Pillai Associates","Kumar & Partners",
];

export function TrustBanner() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const firms_count  = useCountUp(2500,  inView, 2200);
  const clients_l    = useCountUp(1.2,   inView, 2000, 1);
  const processed_cr = useCountUp(42,    inView, 2200);
  const uptime       = useCountUp(98.7,  inView, 2400, 1);

  const stats = [
    {
      icon: Building2,
      value: `${firms_count >= 2500 ? "2,500" : Math.round(firms_count).toLocaleString("en-IN")}+`,
      label: "CA Firms",
      sub: "across India",
    },
    {
      icon: Users,
      value: `${clients_l.toFixed(1)}L+`,
      label: "Clients",
      sub: "managed on platform",
    },
    {
      icon: Wallet,
      value: `₹${Math.round(processed_cr)}Cr+`,
      label: "Processed",
      sub: "invoices & payments",
    },
    {
      icon: TrendingUp,
      value: `${uptime.toFixed(1)}%`,
      label: "Uptime SLA",
      sub: "guaranteed",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#09101e] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <p
          className={`text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-10 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Trusted by India&apos;s leading chartered accountant firms
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: inView ? `${120 * idx}ms` : "0ms" }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-500/12 border border-brand-500/20 text-brand-400 mb-3 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-teal tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrolling firm logos */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#09101e] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#09101e] to-transparent" />
        <div className="flex animate-marquee gap-4">
          {[...firms, ...firms].map((firm, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/8 transition-colors cursor-default"
            >
              <div className="w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-2.5 h-2.5 text-brand-400" />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-slate-400">{firm}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
