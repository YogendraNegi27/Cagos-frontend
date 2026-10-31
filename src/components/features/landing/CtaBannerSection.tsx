
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Calendar, PartyPopper, Shield } from "lucide-react";

import { useInView } from "../../../hooks/useInView";

export function CtaBannerSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060c18] via-[#0a1e38] to-[#060c18]" />

        {/* Mesh blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -z-0 animate-orbit-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] -z-0 animate-orbit-medium" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 px-8 py-20 md:py-28 md:px-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`space-y-7 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-white/80 text-xs font-semibold">30-day free trial · No credit card needed</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to modernize{" "}
              <span className="text-gradient-teal">your CA firm?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
              Join 2,500+ chartered accountants who use CAGOS to automate compliance, boost revenue, and deliver a premium client experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/register"
                className="group w-full sm:w-auto px-8 py-4 bg-white text-brand-900 rounded-xl text-base font-extrabold hover:bg-brand-50 transition-all shadow-xl shadow-black/30 flex items-center justify-center gap-2"
              >
                Start your 30-day free trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918010001234"
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Talk to sales
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              {["No credit card needed", "Setup in 10 minutes", "Free data migration"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: onboarding card */}
          <div
            className={`hidden lg:block ${inView ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-500/30 rounded-xl flex items-center justify-center border border-brand-400/30">
                  <CheckCircle className="w-6 h-6 text-brand-300" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg">Onboarding Complete</p>
                  <p className="text-white/50 text-sm">Your workspace is ready in 10 minutes.</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { icon: CheckCircle, label: "Client list imported (342 clients)", time: "2 mins ago", done: true },
                  { icon: Calendar,    label: "Compliance calendar generated",       time: "Just now",   done: true },
                  { icon: Shield,      label: "Team invites sent (4 members)",       time: "Pending",    done: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-xl border ${
                      item.done
                        ? "bg-white/10 border-white/10"
                        : "bg-brand-500/10 border-brand-400/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={`w-4 h-4 flex-shrink-0 ${
                          item.done ? "text-brand-300" : "text-white/40"
                        }`}
                      />
                      <span className="text-white/80 text-sm font-medium">{item.label}</span>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        item.done
                          ? "bg-brand-500/20 text-brand-300"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-brand-500/15 border border-brand-400/20">
                <p className="text-brand-200 text-xs font-semibold text-center inline-flex items-center justify-center gap-1.5 w-full">
                  <PartyPopper className="w-3.5 h-3.5 flex-shrink-0" />
                  First compliance alert sent to 47 clients automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
