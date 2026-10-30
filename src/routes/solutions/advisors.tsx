import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, LineChart, Target, BadgeIndianRupee, FileText,
  Star, Share2, CheckCircle, Phone, TrendingUp,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/advisors")({
  head: () =>
    seoHead({
      path: "/solutions/advisors",
      title: "CAGos for Financial Advisors | HNI Client Management & Advisory Platform",
      description:
        "CAGos helps financial advisors and wealth managers deliver a premium experience to HNI clients — white-labeled portals, AUM dashboards, retainer billing, and secure document sharing.",
      ogTitle: "CAGos for Financial Advisors",
      ogDescription:
        "Deliver a premium advisory experience to your HNI clients. White-labeled portal, AUM tracking, and automated billing built for Indian financial advisors.",
      schema: [
        serviceSchema({
          name: "CAGos for Financial Advisors",
          description:
            "Advisory-firm platform with white-labeled portals, AUM dashboards, retainer billing, and secure document sharing for HNI client management.",
          path: "/solutions/advisors",
          serviceType: "Wealth Management Software",
          audience: "Financial Advisors & Wealth Managers",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/advisors" },
          { name: "Financial Advisors", path: "/solutions/advisors" },
        ]),
      ],
    }),
  component: AdvisorsPage,
});

const features = [
  {
    icon: LineChart,
    color: "brand",
    title: "HNI Client Profiles",
    desc: "Track familial relationships, corporate linkages, trust structures, and investment mandates for each client. One master profile connects every entity a client controls.",
  },
  {
    icon: BadgeIndianRupee,
    color: "teal",
    title: "AUM & Relationship Tracking",
    desc: "Log investment portfolios, advisory mandates, insurance policies, and total AUM per client. Track asset allocation across mutual funds, equity, real estate, and alternatives.",
  },
  {
    icon: Share2,
    color: "violet",
    title: "White-labeled Client Portal",
    desc: "Your HNI clients log into a premium portal under your firm's brand and domain — not CAGos. They view invoices, upload documents, and track ongoing advisory tasks.",
  },
  {
    icon: Target,
    color: "blue",
    title: "Retainer & Fee Billing",
    desc: "Set up recurring advisory retainers and AUM-based fee invoices that generate automatically. Track collection rates and outstanding fees across your entire client book.",
  },
  {
    icon: FileText,
    color: "emerald",
    title: "Secure Document Vault",
    desc: "Store investment agreements, engagement letters, portfolio statements, and tax filings in an encrypted vault linked to each client. Share securely — never via WhatsApp.",
  },
  {
    icon: Star,
    color: "amber",
    title: "Advisory Calendar & Tasks",
    desc: "Track quarterly strategy reviews, policy renewal dates, advance tax deadlines, and portfolio rebalancing tasks for every client — never let a commitment slip.",
  },
];

const steps = [
  {
    num: "01",
    title: "Build your advisory client book",
    desc: "Import client profiles with their entity relationships, mandates, and AUM. Configure your firm's white-label portal with your brand, logo, and domain.",
  },
  {
    num: "02",
    title: "Serve clients at a premium level",
    desc: "Share portfolio updates, investment memos, and quarterly reviews through the secure portal. Clients sign engagement letters digitally and pay retainers via UPI.",
  },
  {
    num: "03",
    title: "Grow your AUM and fee income",
    desc: "Revenue analytics show your fee income, AUM growth, and client retention by segment. Identify clients ready for additional mandates and act on them proactively.",
  },
];

const faqs = [
  {
    q: "Can CAGos track multi-generational family wealth relationships?",
    a: "Yes. The HNI profile supports family linkages — you can connect a patriarch's profile to their children, trusts, and corporate entities. The relationship map shows the full family structure at a glance.",
  },
  {
    q: "How white-labeled is the client portal?",
    a: "The portal shows your firm's name, logo, and brand colors — no CAGos branding anywhere. You can also map it to your own domain (e.g., clients.yourfirm.in) so it appears as your proprietary platform.",
  },
  {
    q: "Can I bill on AUM percentage instead of fixed retainers?",
    a: "Yes. CAGos supports AUM-based fee invoices. You set the fee percentage and link it to the client's AUM figure in their profile. The invoice amount auto-calculates quarterly.",
  },
  {
    q: "Does CAGos integrate with portfolio management systems?",
    a: "We support manual AUM entry today. API integrations with portfolio management software are on the roadmap for Q4 2026 — early access is available for enterprise clients.",
  },
  {
    q: "Is CAGos SEBI-registered advisory compliant?",
    a: "CAGos is a practice management tool, not a regulatory compliance system. It does not generate SEBI-required disclosures. However, it can store and share all required documents and track regulatory deadlines for your SEBI RIA or RA registration.",
  },
];



function AdvisorsPage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Deliver a Premium Advisory Experience{" "}
              <span className="text-gradient-teal">to Your HNI Clients</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Your HNI clients expect a premium experience. CAGos gives you a white-labeled client portal, AUM tracking, secure document sharing, and automated retainer billing — so you look like a large wealth management firm even if you&apos;re a boutique advisory practice.
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
              {["White-labeled portal", "AUM tracking", "Retainer billing"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Advisory AUM Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white">Advisory AUM Dashboard</p>
                  <p className="text-xs text-slate-500">As of May 1, 2026</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-bold text-teal-400">+12.4% YTD</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Total AUM", val: "₹128.5 Cr", col: "text-teal-400" },
                  { label: "HNI Clients", val: "62", col: "text-brand-400" },
                  { label: "Monthly Fee", val: "₹14.2L", col: "text-emerald-400" },
                  { label: "Pending Actions", val: "4", col: "text-amber-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3">
                    <p className={`text-xl font-extrabold ${s.col}`}>{s.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Top Client Mandates</p>
                {[
                  { name: "Gupta Family Trust", aum: "₹38 Cr", task: "Q3 strategy review due", col: "text-amber-400" },
                  { name: "TechNova Treasury", aum: "₹24 Cr", task: "Portfolio rebalancing scheduled", col: "text-teal-400" },
                  { name: "Sharma Industries", aum: "₹18 Cr", task: "Tax planning — FY26", col: "text-brand-400" },
                ].map((client, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/6">
                    <div>
                      <p className="text-sm font-semibold text-white">{client.name}</p>
                      <p className="text-xs text-slate-500">{client.task}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs font-bold ${client.col}`}>{client.aum}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-white">99% HNI client retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "₹128 Cr", label: "Avg AUM tracked per advisor" },
            { val: "62", label: "Avg HNI clients per firm" },
            { val: "99%", label: "Client retention rate" },
            { val: "100%", label: "White-labeled experience" },
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
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Built for advisory practices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              The advisory infrastructure your clients expect
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              HNI clients compare you to large private banks. CAGos gives you the platform to compete on experience without the enterprise price tag.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From setup to a premium client experience</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Questions from financial advisors" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
