import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Lock, Network, BarChart3,
  Users, ShieldCheck, CheckCircle, Phone, TrendingUp,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/enterprise")({
  head: () =>
    seoHead({
      path: "/solutions/enterprise",
      title: "CAGos Enterprise for Large CA Firms | Multi-Branch Practice Management",
      description:
        "CAGos Enterprise gives large CA firms multi-branch management, custom RBAC, API integrations, branch-level P&L reporting, and a dedicated Customer Success Manager.",
      ogTitle: "CAGos Enterprise for Large CA Firms",
      ogDescription:
        "Govern a multi-branch CA firm with one platform. Enterprise-grade security, RBAC, and analytics built for large Indian CA practices.",
      schema: [
        serviceSchema({
          name: "CAGos Enterprise",
          description:
            "Multi-branch practice management for large CA firms with custom RBAC, API integrations, branch-level P&L reporting, and a dedicated Customer Success Manager.",
          path: "/solutions/enterprise",
          serviceType: "Enterprise Practice Management Software",
          audience: "Large Multi-branch CA Firms",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/enterprise" },
          { name: "Enterprise", path: "/solutions/enterprise" },
        ]),
      ],
    }),
  component: EnterprisePage,
});

const features = [
  {
    icon: Building2,
    color: "brand",
    title: "Multi-Branch Management",
    desc: "Manage distinct client rosters, staff teams, billing, and P&L per branch — with a consolidated firm-level view for partners. Mumbai, Delhi, and Bengaluru on one screen.",
  },
  {
    icon: Lock,
    color: "teal",
    title: "Granular Role-Based Access",
    desc: "Custom RBAC lets you restrict data on a need-to-know basis. A Bengaluru partner cannot see Mumbai's confidential client files. Audit trails log every access.",
  },
  {
    icon: Network,
    color: "violet",
    title: "API & ERP Integration",
    desc: "Connect CAGos to your internal ERP, payroll system, or proprietary tools via REST APIs. Real-time billing and CRM data sync — no manual exports.",
  },
  {
    icon: BarChart3,
    color: "blue",
    title: "Branch-level P&L Reporting",
    desc: "Revenue, collections, outstanding, and headcount per branch — in one dashboard. Compare branch performance quarter-over-quarter and identify growth opportunities.",
  },
  {
    icon: Users,
    color: "emerald",
    title: "Dedicated Customer Success Manager",
    desc: "Enterprise plans include a named CSM who handles your onboarding, configuration, team training, and ongoing support — available via phone and email.",
  },
  {
    icon: ShieldCheck,
    color: "amber",
    title: "Enterprise SLA & Compliance",
    desc: "99.9% uptime SLA with a financially-backed guarantee. Data stored in India (AWS Mumbai). SOC 2 Type II audit in progress. Custom BAAs available on request.",
  },
];

const steps = [
  {
    num: "01",
    title: "Dedicated onboarding with your CSM",
    desc: "Your Customer Success Manager works with your firm's admin to configure branches, roles, billing, and client import — over 5 structured onboarding sessions.",
  },
  {
    num: "02",
    title: "Deploy across all branches",
    desc: "Team members across all offices are added with the correct roles and branch assignments. Each branch operates independently while partners see the unified view.",
  },
  {
    num: "03",
    title: "Govern, analyse, and grow",
    desc: "Monthly partner review packages, quarterly performance reports, and API-driven dashboards give you the data to make decisions that grow the firm.",
  },
];

const faqs = [
  {
    q: "What qualifies as an 'enterprise' firm for CAGos?",
    a: "Typically firms with 20+ staff, 2+ office locations, or 500+ clients. We also extend enterprise terms to firms with complex billing needs, RBAC requirements, or ERP integration requirements.",
  },
  {
    q: "Can we get a custom contract and MSA?",
    a: "Yes. Enterprise clients sign a Master Service Agreement with custom terms including SLA commitments, data residency requirements, and GDPR/PDPB compliance addenda.",
  },
  {
    q: "How does the API integration work?",
    a: "CAGos exposes a documented REST API covering clients, tasks, billing, and compliance data. We provide Postman collections and have integration experience with Tally, SAP, and custom ERPs.",
  },
  {
    q: "Is data from each branch kept separate?",
    a: "Yes. Branch data is logically separated with access governed by RBAC. A staff member in Delhi sees only Delhi clients unless explicitly granted cross-branch access by a partner.",
  },
  {
    q: "What is the implementation timeline for a 50-person firm?",
    a: "Typical implementation takes 2–4 weeks: week 1 for configuration and import, week 2 for team training, weeks 3–4 for parallel run and go-live. Your CSM manages the entire process.",
  },
];



function EnterprisePage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Govern a Multi-Branch Firm{" "}
              <span className="text-gradient-teal">with One Platform</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Manage multiple branches, dozens of partners, and hundreds of staff — with bank-grade security, granular RBAC, branch-level P&L, and API integrations with your existing systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to enterprise sales
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Custom RBAC", "API & ERP integrations", "Dedicated CSM"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Branch Revenue Matrix Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white">Branch Revenue Matrix</p>
                  <p className="text-xs text-slate-500">FY 2025–26 · All branches</p>
                </div>
                <span className="text-xs bg-brand-500/15 text-brand-400 border border-brand-500/20 rounded-full px-3 py-1 font-semibold">Live</span>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  { branch: "Mumbai HQ", rev: "₹4.5 Cr", yoy: "+14%", staff: "22 staff", col: "text-teal-400" },
                  { branch: "Delhi Branch", rev: "₹2.1 Cr", yoy: "+8%", staff: "11 staff", col: "text-teal-400" },
                  { branch: "Bengaluru", rev: "₹1.8 Cr", yoy: "-2%", staff: "9 staff", col: "text-red-400" },
                  { branch: "Pune", rev: "₹0.9 Cr", yoy: "+22%", staff: "5 staff", col: "text-emerald-400" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/6">
                    <div>
                      <p className="text-sm font-semibold text-white">{b.branch}</p>
                      <p className="text-xs text-slate-500">{b.staff}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">{b.rev}</p>
                      <p className={`text-xs font-semibold ${b.col}`}>{b.yoy} YoY</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3 flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <p className="text-xs text-brand-300 font-medium">Firm-wide revenue: ₹9.3 Cr · +10.5% YoY</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-400" />
                <span className="text-sm font-bold text-white">4 branches · 47 staff · 1 platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "500+", label: "Staff managed across firms" },
            { val: "5+", label: "Branches supported per firm" },
            { val: "99.9%", label: "Uptime SLA" },
            { val: "Custom", label: "Onboarding & MSA" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Enterprise capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Built for the complexity of a large practice
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Governance, security, and analytics at the scale your firm demands — without the enterprise software price tag.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Implementation</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">A structured rollout, not a self-service setup</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Enterprise questions answered" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
