import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, CalendarClock, BellRing, AlertCircle,
  ClipboardList, TrendingUp, CheckCircle, Phone,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/compliance")({
  head: () =>
    seoHead({
      path: "/products/compliance",
      title: "Compliance Hub for CA Firms | GST ITR ROC Deadline Tracker | CAGos",
      description:
        "CAGos Compliance Hub auto-generates due dates for GST, ITR, TDS, ROC and 15+ other filings across all your clients. Get smart alerts, track filing status, and eliminate penalties.",
      ogTitle: "Compliance Hub for CA Firms | CAGos",
      ogDescription:
        "Never miss a GST, ITR, or ROC deadline. CAGos tracks compliance across all clients automatically.",
      schema: [
        softwareApplicationSchema({
          name: "CAGos Compliance Hub",
          description:
            "Auto-generated due dates for GST, ITR, TDS, ROC, PF and 15+ other filings across all your CA firm's clients with smart alerts and filing-status tracking.",
          path: "/products/compliance",
          category: "BusinessApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/compliance" },
          { name: "Compliance Hub", path: "/products/compliance" },
        ]),
      ],
    }),
  component: CompliancePage,
});

const features = [
  {
    icon: CalendarClock,
    color: "brand",
    title: "Master Compliance Calendar",
    desc: "One calendar for GST, ITR, TDS, ROC, PF, ESI, and 10+ more filing types — auto-populated for every client based on entity type and registration status.",
  },
  {
    icon: BellRing,
    color: "teal",
    title: "Smart Multi-Channel Alerts",
    desc: "Reminders go out at 15 days, 7 days, and 1 day before each deadline — by email, WhatsApp, and in-app. Escalated to the senior CA if still unpicked at T-3 days.",
  },
  {
    icon: ClipboardList,
    color: "violet",
    title: "Client-wise Status Tracker",
    desc: "See the filing status of every client at a glance: Not Started, In Progress, Filed, Overdue. Filter by due date, assigned CA, or compliance type.",
  },
  {
    icon: AlertCircle,
    color: "amber",
    title: "Overdue Escalation Engine",
    desc: "When a task crosses its due date, it auto-escalates to the supervising CA and logs the delay. Partners get a daily digest of firm-wide overdue items.",
  },
  {
    icon: TrendingUp,
    color: "emerald",
    title: "Compliance Health Reports",
    desc: "Monthly and quarterly reports show your firm's filing accuracy, penalty-free rate, and team performance — perfect for partner review meetings.",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "Audit Trail & Documentation",
    desc: "Every filing action is timestamped and logged — who filed what, when, and the acknowledgement number. Always audit-ready.",
  },
];

const steps = [
  {
    num: "01",
    title: "Link your client roster",
    desc: "Import clients or sync from your CRM profile. CAGos reads entity type, GST registrations, and directorships to auto-build the compliance calendar.",
  },
  {
    num: "02",
    title: "Auto-generate due dates",
    desc: "The engine creates all statutory due dates for each client — GST monthly/quarterly, ITR, TDS, ROC annual filings, PF challans, and more.",
  },
  {
    num: "03",
    title: "Track, remind, and close",
    desc: "Assign tasks to team members, track progress in real time, and close filings with an acknowledgement number. Calendar updates instantly.",
  },
];

const complianceTypes = [
  "GSTR-1", "GSTR-3B", "GSTR-9 / 9C", "TDS Returns (24Q/26Q)",
  "Advance Tax", "ITR Filing", "Form 3CA / 3CB", "ROC Annual Return (MGT-7)",
  "PF / ESI Challans", "Form 15CA / 15CB", "DPT-3", "DIR-3 KYC",
];

const faqs = [
  {
    q: "Which compliance types does CAGos support?",
    a: "GST (GSTR-1, 3B, 9, 9C), Income Tax (ITR, advance tax), TDS (24Q, 26Q, 27Q), ROC (MGT-7, AOC-4, DPT-3), PF, ESI, FEMA (15CA/15CB), and more. New types are added on request.",
  },
  {
    q: "How are due dates calculated for quarterly filers?",
    a: "CAGos reads the GST filing frequency (monthly/quarterly/QRMP) from the client profile and sets dues accordingly. Individual due dates can be overridden manually.",
  },
  {
    q: "Can I send compliance reminders directly to my clients?",
    a: "Yes. You can configure client-facing reminders via email and WhatsApp that go out automatically. The tone and content are customizable per firm.",
  },
  {
    q: "What happens after a filing is completed?",
    a: "The CA marks the task complete, enters the acknowledgement number, and the status flips to Filed. The client portal is updated and a confirmation email goes out.",
  },
  {
    q: "Does CAGos integrate with the GSTN or MCA portal?",
    a: "We have a read-only GSTN integration to pull return status. Full portal integration is on the roadmap for Q3 2026. Acknowledgement numbers are entered manually after filing.",
  },
];



function CompliancePage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Never Miss a{" "}
              <span className="text-gradient-teal">Compliance Deadline</span>{" "}
              Again
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              GST, ITR, TDS, ROC, PF — CAGos tracks every statutory deadline for every client automatically. Your team gets smart reminders. Your clients get filed on time. Every time.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Start free for 14 days <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to sales
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["15+ compliance types", "Auto-escalation alerts", "Client-facing reminders"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Calendar Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-bold text-white">May 2026 — Deadlines</p>
                  <p className="text-xs text-slate-500">47 upcoming across 120 clients</p>
                </div>
                <span className="text-xs bg-red-500/15 text-red-400 border border-red-500/20 rounded-full px-3 py-1 font-semibold">2 Overdue</span>
              </div>
              <div className="space-y-2.5 mb-5">
                {[
                  { label: "GSTR-1 Filing", clients: "34 clients", date: "May 11", col: "text-red-400", bg: "bg-red-500/8 border-red-500/15" },
                  { label: "TDS Return (26Q)", clients: "28 clients", date: "May 15", col: "text-amber-400", bg: "bg-amber-500/8 border-amber-500/15" },
                  { label: "Advance Tax (Q1)", clients: "52 clients", date: "Jun 15", col: "text-teal-400", bg: "bg-teal-500/8 border-teal-500/15" },
                  { label: "GSTR-3B", clients: "41 clients", date: "Jun 20", col: "text-teal-400", bg: "bg-teal-500/8 border-teal-500/15" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${item.bg}`}>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.clients}</p>
                    </div>
                    <p className={`text-xs font-bold ${item.col}`}>{item.date}</p>
                  </div>
                ))}
              </div>
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3 flex items-center gap-3">
                <BellRing className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <p className="text-xs text-brand-300 font-medium">Reminders sent to 34 clients for GSTR-1 — 12 acknowledged</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">₹0 penalties this year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "15+", label: "Compliance types covered" },
            { val: "47", label: "Avg reminders sent / month" },
            { val: "₹0", label: "Avg penalties on CAGos firms" },
            { val: "98%", label: "On-time filing rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-teal mb-1">{s.val}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Built to eliminate compliance risk
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From auto-generated calendars to escalation engines — every feature is designed to ensure nothing slips through.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── COMPLIANCE TYPES TAG CLOUD ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Every compliance type, covered</h2>
          <p className="text-slate-400 text-sm mb-10">Tracking all major Indian tax and corporate statutory filings out of the box.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {complianceTypes.map((t) => (
              <span key={t} className="glass text-sm font-semibold text-slate-300 px-4 py-2 rounded-full border border-white/8">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">How it works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From setup to zero missed deadlines</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about Compliance Hub" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
