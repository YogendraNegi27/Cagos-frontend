import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Zap, PieChart, BellRing, FileText,
  Smartphone, Receipt, CheckCircle, Phone, CalendarClock,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/solo")({
  head: () =>
    seoHead({
      path: "/solutions/solo",
      title: "CAGOS for Solo CA Practitioners | Run Your Practice Single-handedly",
      description:
        "CAGOS helps solo CAs manage 100+ clients without support staff — automated compliance tracking, smart billing, client portal, and document vault in one app.",
      ogTitle: "CAGOS for Solo CA Practitioners",
      ogDescription:
        "Run your solo CA practice like a 10-person firm. CAGOS automates compliance, billing, and client communication.",
      schema: [
        serviceSchema({
          name: "CAGOS for Solo CA Practitioners",
          description:
            "Practice management built for solo Chartered Accountants — automated compliance tracking, smart billing, client portal, and document vault.",
          path: "/solutions/solo",
          serviceType: "Practice Management Software",
          audience: "Solo Chartered Accountants",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/solo" },
          { name: "Solo CA", path: "/solutions/solo" },
        ]),
      ],
    }),
  component: SoloPage,
});

const features = [
  {
    icon: CalendarClock,
    color: "brand",
    title: "Auto-Generated Compliance Calendar",
    desc: "Import your clients once — CAGOS builds every GST, ITR, TDS, and ROC deadline automatically. You never have to manually track a due date again.",
  },
  {
    icon: BellRing,
    color: "teal",
    title: "Smart Client Reminders",
    desc: "Automated WhatsApp and email reminders go to clients before every deadline. Stop spending your mornings chasing documents and pending approvals.",
  },
  {
    icon: Receipt,
    color: "emerald",
    title: "One-Click Invoicing",
    desc: "Generate GST-compliant invoices in 30 seconds and collect payments via UPI links embedded in the invoice. No more calls asking for payment status.",
  },
  {
    icon: FileText,
    color: "violet",
    title: "Encrypted Document Vault",
    desc: "Store every client's ITR, GSTR, engagement letters, and KYC in one encrypted vault linked to their profile. Find any document in under 2 minutes.",
  },
  {
    icon: Smartphone,
    color: "blue",
    title: "Mobile-First Design",
    desc: "Manage your practice from your phone. Mark tasks done, view client status, and send invoices while commuting — no laptop required.",
  },
  {
    icon: PieChart,
    color: "amber",
    title: "Practice Health Dashboard",
    desc: "See your revenue, overdue invoices, pending tasks, and compliance deadlines at a glance. Know where your practice stands — every morning in 10 seconds.",
  },
];

const steps = [
  {
    num: "01",
    title: "Import your client list",
    desc: "Upload a CSV or enter clients one by one. CAGOS builds the compliance calendar, creates client profiles, and sets up billing schedules automatically.",
  },
  {
    num: "02",
    title: "Let CAGOS run the admin",
    desc: "Compliance reminders, payment follow-ups, and document requests go out automatically. You focus on advisory and filing — CAGOS handles the rest.",
  },
  {
    num: "03",
    title: "Grow your client base confidently",
    desc: "With admin overhead eliminated, you can take on 30–40% more clients without hiring anyone. CAGOS scales with you from 50 to 500 clients.",
  },
];

const faqs = [
  {
    q: "Is CAGOS suitable if I only have 30–50 clients?",
    a: "Absolutely. The Starter plan is designed for solo practitioners with up to 100 clients. You get the full compliance calendar, billing, and document vault — at a price that makes sense for a solo practice.",
  },
  {
    q: "Do my clients need to sign up or download anything?",
    a: "No. Clients receive reminders by WhatsApp and email without any app. If you want them to view invoices and upload documents, they get a simple browser-based portal — no download needed.",
  },
  {
    q: "Can I use CAGOS on my phone?",
    a: "Yes. CAGOS is fully responsive and has a Progressive Web App (PWA) you can add to your phone's home screen. It works as well on mobile as on desktop.",
  },
  {
    q: "What if I add an article clerk later?",
    a: "Simply add them as a team member and assign clients. Your plan upgrades only when you need it — no forced changes when you add your first employee.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most solo practitioners are fully up and running in under 30 minutes. Import your client list, review the auto-generated compliance calendar, and you're live.",
  },
];



function SoloPage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Run Your Practice{" "}
              <span className="text-gradient-teal">Like a 10-Person Firm</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              When you&apos;re a one-person firm, every hour spent on admin is an hour not spent on clients. CAGOS automates your compliance calendar, billing, client reminders, and document management — so you focus on the work that earns.
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
              {["Setup in 30 minutes", "No staff needed", "Works on mobile"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Solo Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white text-lg">My Day</p>
                  <p className="text-xs text-slate-500">Thursday, 1 May 2026</p>
                </div>
                <span className="text-xs bg-teal-500/15 text-teal-400 border border-teal-500/20 rounded-full px-3 py-1 font-semibold">All on track</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Deadlines this week", val: "4", col: "text-amber-400" },
                  { label: "Pending invoices", val: "₹68K", col: "text-red-400" },
                  { label: "Active clients", val: "87", col: "text-teal-400" },
                  { label: "Tasks due today", val: "3", col: "text-brand-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3">
                    <p className={`text-xl font-extrabold ${s.col}`}>{s.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Today&apos;s Actions</p>
                {[
                  { label: "GSTR-1 — Mehta Industries", status: "File now", col: "text-amber-400", bg: "bg-amber-500/8 border-amber-500/15" },
                  { label: "Invoice #041 — Patel & Sons", status: "Paid ✓", col: "text-teal-400", bg: "bg-teal-500/8 border-teal-500/15" },
                  { label: "ITR — Dr. R. Gupta", status: "Docs pending", col: "text-red-400", bg: "bg-red-500/8 border-red-500/15" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${item.bg}`}>
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className={`text-xs font-bold ${item.col}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-white">120 clients, 0 support staff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "120", label: "Avg clients managed solo" },
            { val: "4 hrs", label: "Admin time saved per week" },
            { val: "₹0", label: "Missed billing per year" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Built for solo CAs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              No bloated enterprise features. Just the tools a solo practitioner needs to serve more clients and bill consistently.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">How it works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From setup to running on autopilot</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Questions from solo practitioners" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
