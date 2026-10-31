import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Users, Repeat, CheckCircle, BarChart3,
  ShieldCheck, Phone, LayoutDashboard, BellRing,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/smb")({
  head: () =>
    seoHead({
      path: "/solutions/smb",
      title: "CAGOS for Small & Mid-size CA Firms | Scale Without Chaos",
      description:
        "CAGOS helps small and mid-size CA firms (2–20 staff) manage growing client rosters, standardize workflows, and maintain quality as the team expands. Built for Indian CA practices.",
      ogTitle: "CAGOS for Small & Mid-size CA Firms",
      ogDescription:
        "Scale your CA firm without adding admin overhead. CAGOS gives your team the structure to deliver quality at scale.",
      schema: [
        serviceSchema({
          name: "CAGOS for Small & Mid-size CA Firms",
          description:
            "Practice management for CA firms with 2–20 staff — workflows, client management, billing, and compliance built to scale.",
          path: "/solutions/smb",
          serviceType: "Practice Management Software",
          audience: "Small & Mid-size CA Firms",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/smb" },
          { name: "Small & Mid-size Firms", path: "/solutions/smb" },
        ]),
      ],
    }),
  component: SmbPage,
});

const features = [
  {
    icon: Users,
    color: "brand",
    title: "Team Task Assignment",
    desc: "Assign clients and tasks to specific CAs or article clerks. See each team member's workload at a glance and rebalance in seconds — no WhatsApp coordination needed.",
  },
  {
    icon: LayoutDashboard,
    color: "teal",
    title: "Visual Workload Dashboard",
    desc: "A firm-wide view of capacity utilization per team member. Spot bottlenecks before deadlines are missed and make informed decisions about hiring and allocation.",
  },
  {
    icon: ShieldCheck,
    color: "violet",
    title: "Maker-Checker Approvals",
    desc: "Built-in approval loops ensure senior CAs review and sign off on work before it reaches the client. Raise the quality floor across your entire team — automatically.",
  },
  {
    icon: Repeat,
    color: "blue",
    title: "Standardized SOPs & Checklists",
    desc: "Create reusable task templates for GST filing, ITR, ROC returns, and audit. Every associate follows the same process — reducing errors and onboarding time for new staff.",
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "Firm-wide Revenue Analytics",
    desc: "Track billing, collections, and outstanding amounts across all CAs and service types. Identify top clients and underperforming services in your monthly partner review.",
  },
  {
    icon: BellRing,
    color: "amber",
    title: "Escalation & Alert Engine",
    desc: "Tasks approaching SLA breach auto-alert the team lead. Overdue items escalate to partners with a daily digest. Nothing falls through the cracks as the team grows.",
  },
];

const steps = [
  {
    num: "01",
    title: "Onboard your team and clients",
    desc: "Add team members with roles and permissions. Import your client roster. CAGOS builds the compliance calendar and assigns tasks based on existing CA-client relationships.",
  },
  {
    num: "02",
    title: "Standardize how work gets done",
    desc: "Create SOP checklists for your most common service types. Set SLA targets and approval chains. Your entire team now follows the same high-quality process.",
  },
  {
    num: "03",
    title: "Monitor, report, and grow",
    desc: "Track team performance, firm revenue, and compliance health from the partner dashboard. Make data-driven decisions about clients, services, and hiring.",
  },
];

const faqs = [
  {
    q: "How does CAGOS handle different roles in the firm?",
    a: "CAGOS has configurable roles: Partner (full access), Senior CA (their clients + team), CA Associate (assigned clients only), and Article Clerk (assigned tasks only). You can customise permissions at any level.",
  },
  {
    q: "Can I track billable hours per team member?",
    a: "Basic time logging per task is available on Growth and above plans. It doesn't auto-convert to invoices, but generates a utilisation report for partner review.",
  },
  {
    q: "How does the maker-checker approval work?",
    a: "When a task is moved to 'Ready for Review', it queues in the senior CA's or partner's review list. They can approve, reject with comments, or request revisions. The client receives the output only after approval.",
  },
  {
    q: "Can we use CAGOS across multiple office locations?",
    a: "Yes. You can create departments or office branches and assign staff and clients to each. Partners see a cross-office view while associates only see their branch.",
  },
  {
    q: "What's the typical onboarding timeline for a 10-person firm?",
    a: "Most firms are fully set up in 2–3 days with our onboarding team's help — client import on day 1, team setup on day 2, SOP templates and billing config on day 3.",
  },
];



function SmbPage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Scale Your Firm Without{" "}
              <span className="text-gradient-teal">Adding Admin Overhead</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              As your client base grows and you bring on associates, manual processes break down. CAGOS gives your firm the structure to manage a growing team, standardize workflows, and maintain quality client service at scale.
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
              {["Team task assignment", "Maker-checker approvals", "Partner-level analytics"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Team Workload Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <p className="font-bold text-white">Team Workload — May 2026</p>
                <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20 rounded-full px-3 py-1 font-semibold">1 Overloaded</span>
              </div>

              <div className="space-y-4 mb-5">
                {[
                  { name: "CA Rahul Sharma", role: "Senior Manager", pct: 88, col: "bg-amber-500" },
                  { name: "Priya Patel", role: "Tax Associate", pct: 55, col: "bg-brand-500" },
                  { name: "Amit Singh", role: "Article Clerk", pct: 100, col: "bg-red-500" },
                  { name: "CA Neha Rao", role: "Audit Associate", pct: 40, col: "bg-teal-500" },
                ].map((member, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <p className="text-sm font-semibold text-white">{member.name}</p>
                        <p className="text-xs text-slate-500">{member.role}</p>
                      </div>
                      <span className={`text-xs font-bold ${member.pct >= 90 ? "text-red-400" : member.pct >= 75 ? "text-amber-400" : "text-teal-400"}`}>
                        {member.pct}% capacity
                      </span>
                    </div>
                    <div className="w-full bg-white/8 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${member.col}`} style={{ width: `${member.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3 flex items-center justify-between">
                <p className="text-xs text-brand-300 font-medium">Amit Singh is at 100% — reassign 2 tasks</p>
                <button className="text-xs bg-brand-500/20 text-brand-300 border border-brand-500/30 rounded-lg px-3 py-1.5 font-semibold">Rebalance</button>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">87% on-time delivery across team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "2–20", label: "Team size supported" },
            { val: "60%", label: "Less admin time per CA" },
            { val: "87%", label: "On-time task delivery" },
            { val: "3×", label: "Revenue growth in year 1" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Built for growing firms</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              The infrastructure your firm needs to scale
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Structure, visibility, and quality control — the three things every CA firm needs as it grows from a one-person practice to a team.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From chaotic growth to structured scale</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Questions from growing CA firms" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
