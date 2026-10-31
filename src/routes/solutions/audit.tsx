import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Search, ShieldAlert, FolderTree, ClipboardCheck,
  Clock, CheckCircle, Phone, BarChart3,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/audit")({
  head: () =>
    seoHead({
      path: "/solutions/audit",
      title: "CAGOS for Audit Firms | Audit Engagement Management & Workpapers",
      description:
        "CAGOS helps audit firms manage engagements from planning to report — audit checklists, structured workpapers, evidence linking, client data matrices, and ICAI peer-review-ready audit trails.",
      ogTitle: "CAGOS for Audit Firms",
      ogDescription:
        "Deliver high-quality audits with less friction. Audit checklists, workpapers, evidence trails, and ICAI peer review readiness — built in.",
      schema: [
        serviceSchema({
          name: "CAGOS for Audit Firms",
          description:
            "Audit engagement management — checklists, structured workpapers, evidence linking, client data matrices, and ICAI peer-review-ready audit trails.",
          path: "/solutions/audit",
          serviceType: "Audit Engagement Management Software",
          audience: "Statutory Audit Firms",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/audit" },
          { name: "Audit Firms", path: "/solutions/audit" },
        ]),
      ],
    }),
  component: AuditPage,
});

const features = [
  {
    icon: ClipboardCheck,
    color: "brand",
    title: "Standardized Audit Programs",
    desc: "Use pre-built audit checklists aligned to SA (Standards on Auditing) — risk assessment, substantive procedures, management representation. Customize for each engagement.",
  },
  {
    icon: FolderTree,
    color: "teal",
    title: "Structured Workpaper Management",
    desc: "Link scanned vouchers, Excel analyses, and confirmation letters directly to audit program line items. Every working paper is one click from the engagement file.",
  },
  {
    icon: Search,
    color: "violet",
    title: "Client Data Request Matrix",
    desc: "Create a structured data request list and send it to the client via the portal. Track which items are received, pending, or outstanding — without email threads.",
  },
  {
    icon: ShieldAlert,
    color: "blue",
    title: "ICAI Peer Review Ready",
    desc: "All system actions are immutably logged — who did what, when, and on which file. Peer review documentation is auto-compiled in the format ICAI reviewers expect.",
  },
  {
    icon: Clock,
    color: "emerald",
    title: "Engagement Progress Tracking",
    desc: "Track each audit phase — planning, fieldwork, review, reporting — with percentage completion and milestone dates. Partners see firm-wide engagement health at a glance.",
  },
  {
    icon: BarChart3,
    color: "amber",
    title: "Resource & Time Management",
    desc: "Log hours per team member per engagement. Compare budgeted vs actual time. Identify engagements running over estimate before they become unprofitable.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create the engagement file",
    desc: "Set up a new engagement with client, audit type (statutory, internal, tax), team, and timelines. The system loads the relevant audit program template automatically.",
  },
  {
    num: "02",
    title: "Execute and document fieldwork",
    desc: "Team members work through the checklist, attach evidence, log observations, and flag exceptions. Senior CA reviews each section before marking it complete.",
  },
  {
    num: "03",
    title: "Issue the report — audit-ready",
    desc: "Partner signs off on the complete workpaper file. The audit report is generated from the engagement. The full file is archived and immediately peer-review ready.",
  },
];

const auditTypes = [
  "Statutory Audit (Companies Act)",
  "Tax Audit (Form 3CA/3CB)",
  "GST Audit (GSTR-9C)",
  "Internal Audit",
  "Bank Concurrent Audit",
  "Stock Audit",
  "Revenue Audit",
  "Forensic Audit",
];

const faqs = [
  {
    q: "Does CAGOS support SA (Standards on Auditing) aligned checklists?",
    a: "Yes. Our built-in templates cover risk assessment (SA 315), materiality (SA 320), sampling (SA 530), management representation (SA 580), and more. You can also build custom templates for your firm's specific audit methodology.",
  },
  {
    q: "How does the client data request matrix work?",
    a: "You create a structured list of required documents — trial balance, ledgers, bank statements, invoices — and share it via the client portal. Clients upload directly against each line item. You see real-time status.",
  },
  {
    q: "Can different team members work on different sections simultaneously?",
    a: "Yes. The audit program is divided into sections assigned to individual team members. Each section can be worked on concurrently. Section lock prevents overwrite conflicts when multiple people are active.",
  },
  {
    q: "How is the peer review documentation compiled?",
    a: "CAGOS auto-generates an engagement summary document that lists all procedures performed, evidence referenced, and sign-off timestamps — in the format expected during an ICAI peer review. One click to download.",
  },
  {
    q: "Can we handle multiple concurrent audit engagements?",
    a: "Yes. There's no limit on concurrent engagements. The partner dashboard shows all live engagements with their progress status. Filter by deadline, client, or assigned team member.",
  },
];



function AuditPage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Deliver High-Quality Audits{" "}
              <span className="text-gradient-teal">with Less Friction</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              From planning to final report — CAGOS gives your audit team structured checklists, organized workpapers, client data request tracking, and an immutable audit trail that satisfies ICAI peer reviewers.
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
              {["SA-aligned checklists", "Workpaper linking", "ICAI peer review ready"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Audit Engagement Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white">Statutory Audit — TechNova Pvt Ltd</p>
                  <p className="text-xs text-slate-500">FY 2025–26 · Partner: CA S. Kumar</p>
                </div>
                <span className="text-xs bg-brand-500/15 text-brand-400 border border-brand-500/20 rounded-full px-3 py-1 font-semibold">In Progress</span>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  { phase: "Planning & Risk Assessment", pct: 100, done: true },
                  { phase: "Fieldwork & Vouching", pct: 65, done: false },
                  { phase: "Management Representation", pct: 20, done: false },
                  { phase: "Audit Report Drafting", pct: 0, done: false },
                ].map((phase, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-semibold ${phase.done ? "text-teal-400" : "text-slate-300"}`}>{phase.phase}</span>
                      <span className={`text-xs font-bold ${phase.done ? "text-teal-400" : "text-slate-500"}`}>{phase.pct}%</span>
                    </div>
                    <div className="w-full bg-white/8 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${phase.done ? "bg-teal-500" : "bg-brand-500"}`} style={{ width: `${phase.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Workpapers", val: "42 / 68", col: "text-brand-400" },
                  { label: "Evidence files", val: "127", col: "text-teal-400" },
                  { label: "Exceptions", val: "3", col: "text-amber-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                    <p className={`text-sm font-extrabold ${s.col}`}>{s.val}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">95% on-time audit completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "95%", label: "On-time audit completion" },
            { val: "100%", label: "ICAI peer review pass rate" },
            { val: "0", label: "Documents lost or misfiled" },
            { val: "3×", label: "Faster engagement setup" },
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
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Built for audit practices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Total control over every audit engagement
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From the first planning meeting to the signed audit report — every step documented, organized, and traceable.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── AUDIT TYPES ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Supports every type of audit engagement</h2>
          <p className="text-slate-400 text-sm mb-10">Pre-built templates for the most common audit types. Custom templates for your firm&apos;s unique methodology.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {auditTypes.map((t) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From engagement creation to ICAI-ready file</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Questions from audit firms" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
