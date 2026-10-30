
import {
  X,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  FileSpreadsheet,
  Receipt,
  FolderOpen,
  TrendingUp,
} from "lucide-react";

import { useInView } from "../../../hooks/useInView";

const painPoints = [
  {
    icon: Smartphone,
    title: "Chasing clients on WhatsApp",
    desc: "Sending document reminders manually every week — and still not getting responses.",
  },
  {
    icon: FileSpreadsheet,
    title: "500+ deadlines tracked on Excel",
    desc: "One formula error, one missed filter — and you're facing a ₹5,000/day penalty notice.",
  },
  {
    icon: Receipt,
    title: "Manual billing in Tally or Word",
    desc: "Creating invoices one by one, sending via email, and chasing payments for weeks.",
  },
  {
    icon: AlertTriangle,
    title: "Last-minute compliance panic",
    desc: "Discovering a due date 2 days before it — not 2 weeks before — every single season.",
  },
  {
    icon: FolderOpen,
    title: "Documents scattered everywhere",
    desc: "Client files split across Gmail, Google Drive, pen drives, and physical folders.",
  },
];

const solutions = [
  "Clients upload docs to a branded portal — zero chasing",
  "Compliance calendar tracks every GST, ITR, ROC and TDS deadline",
  "Invoices auto-generated, Razorpay payment links shareable by email or WhatsApp",
  "Proactive alerts 2 weeks before every filing — never miss one again",
  "All documents in an encrypted vault, scoped per client and per role",
];

export function PainSection() {
  const [ref, inView] = useInView({ threshold: 0.06 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 75% 50%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className={`inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Sound Familiar?
          </span>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight ${
              inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            How most CA firms still operate today
          </h2>
          <p
            className={`text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed ${
              inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            If any of these feel painfully familiar — you&apos;re not alone.
            And there&apos;s a much better way.
          </p>
        </div>

        {/* Two-column comparison */}
        <div
          className={`grid lg:grid-cols-2 gap-5 ${
            inView ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          {/* ── LEFT: The Old Way (dark) ─────────────────────── */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">The Old Way</p>
                  <p className="text-xs text-slate-400 mt-0.5">Fragmented, manual, and stressful</p>
                </div>
              </div>

              <div className="space-y-3">
                {painPoints.map((pain, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/8 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <pain.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm mb-0.5">{pain.title}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{pain.desc}</p>
                    </div>
                    <X className="w-3.5 h-3.5 text-red-500/50 flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>

              {/* Penalty callout */}
              <div className="mt-5 p-4 rounded-2xl border border-amber-500/25 bg-amber-500/8 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-200 leading-relaxed">
                  The average CA firm loses{" "}
                  <span className="font-extrabold text-amber-300">₹1.2L per year</span> in missed
                  billing opportunities and avoidable penalties.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: The CAGos Way (dark teal) ──────────── */}
          <div className="bg-[#0a1a2e] rounded-3xl p-8 border border-teal-500/20 shadow-xl shadow-teal-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/6 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">The CAGos Way</p>
                  <p className="text-xs text-slate-400 mt-0.5">Automated, organised, and stress-free</p>
                </div>
              </div>

              <div className="space-y-3">
                {solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-teal-500/5 border border-teal-500/12 hover:bg-teal-500/8 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-teal-500/30">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium pt-1">{sol}</p>
                  </div>
                ))}
              </div>

              {/* ROI callout */}
              <div className="mt-5 p-4 rounded-2xl border border-teal-500/20 bg-gradient-to-r from-teal-500/8 to-brand-500/8 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-500/30">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Firms on CAGos grow revenue by{" "}
                  <span className="font-extrabold text-teal-400">38% on average</span> in the first
                  year — by taking on more clients without adding headcount.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA bridge */}
        <div
          className={`text-center mt-12 ${
            inView ? "animate-fade-in-up animation-delay-600" : "opacity-0"
          }`}
        >
          <p className="text-slate-400 text-base">
            Ready to leave the old way behind?{" "}
            <a
              href="/register"
              className="text-teal-400 font-bold hover:text-teal-300 transition-colors underline underline-offset-2"
            >
              Start your free 30-day trial →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
