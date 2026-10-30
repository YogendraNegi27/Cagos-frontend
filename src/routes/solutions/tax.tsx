import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Calculator, FileText, Landmark, Bell,
  UploadCloud, ClipboardList, CheckCircle, Phone, Users,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, serviceSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/solutions/tax")({
  head: () =>
    seoHead({
      path: "/solutions/tax",
      title: "CAGos for Tax Consultants | High-Volume ITR & GST Filing Management",
      description:
        "CAGos helps tax consultants manage high-volume ITR and GST filing seasons — bulk data collection, client filing status pipelines, notice management, and automated document reminders.",
      ogTitle: "CAGos for Tax Consultants",
      ogDescription:
        "Handle 500+ clients in tax season without chaos. CAGos automates data collection, filing tracking, and client communication.",
      schema: [
        serviceSchema({
          name: "CAGos for Tax Consultants",
          description:
            "High-volume tax filing management — bulk data collection, client filing pipelines, notice management, and automated document reminders for ITR & GST seasons.",
          path: "/solutions/tax",
          serviceType: "Tax Filing Management Software",
          audience: "Tax Consultants & Practitioners",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/tax" },
          { name: "Tax Consultants", path: "/solutions/tax" },
        ]),
      ],
    }),
  component: TaxPage,
});

const features = [
  {
    icon: UploadCloud,
    color: "brand",
    title: "Bulk Document Collection",
    desc: "Send one-click mass requests for Form 16, 26AS, bank statements, and rent receipts to your entire client base. Track who has submitted and who hasn't in real time.",
  },
  {
    icon: ClipboardList,
    color: "teal",
    title: "Filing Pipeline Tracker",
    desc: "A customizable Kanban pipeline: Documents Pending → Computation Ready → Under Review → Filed → E-verified. See exactly where every client is in the ITR process.",
  },
  {
    icon: Bell,
    color: "violet",
    title: "Automated Document Reminders",
    desc: "Smart reminders chase clients for pending documents over WhatsApp and email — so you don't have to. Escalate to a call only when reminders are ignored for 7+ days.",
  },
  {
    icon: Landmark,
    color: "blue",
    title: "Notice Management Repository",
    desc: "A structured repository for all income tax and GST notices. Log the notice, set a response deadline, attach the reply, and track hearing dates — never miss a response.",
  },
  {
    icon: Calculator,
    color: "emerald",
    title: "Advance Tax Tracker",
    desc: "Track advance tax due dates for all high-income clients. Auto-reminders go out before each instalment. Log actual tax paid and monitor shortfall risk.",
  },
  {
    icon: Users,
    color: "amber",
    title: "Client Self-Upload Portal",
    desc: "Clients upload their own documents — Form 16, bank statements, HRA receipts — via a secure portal. No WhatsApp, no email attachments, no lost files.",
  },
];

const steps = [
  {
    num: "01",
    title: "Set up filing season in one go",
    desc: "Create a filing season batch, select all eligible clients, and send bulk document collection requests in one click. Track responses as they come in.",
  },
  {
    num: "02",
    title: "Move clients through the pipeline",
    desc: "As documents arrive, clients move from 'Pending' to 'Ready'. Assign the computation to an associate. Partner reviews before filing. Close with e-verification confirmation.",
  },
  {
    num: "03",
    title: "Handle notices without panic",
    desc: "Any notice received gets logged immediately with deadline and handler assigned. CAGos tracks it until a successful response is filed. Partners see all open notices at a glance.",
  },
];

const faqs = [
  {
    q: "How does bulk document collection work?",
    a: "Select clients (or all clients), choose document types (Form 16, 26AS, bank statements), and click send. CAGos generates individual secure upload links and sends them by email and WhatsApp. You see submission status in real time.",
  },
  {
    q: "Can I track different types of ITR (1, 2, 3, 4, 6)?",
    a: "Yes. Each client's ITR type is noted in their profile. The filing pipeline can filter by ITR type, making it easy to manage salary clients (ITR-1), business clients (ITR-3/4), and corporate clients (ITR-6) separately.",
  },
  {
    q: "How does the notice management module handle GST notices?",
    a: "The notice log is agnostic to notice type. You can log income tax (scrutiny, demand, 148, 263), GST (DRC-01, DRC-07, audit), and ROC notices — each with its own deadline and tracking.",
  },
  {
    q: "Can clients see the status of their ITR filing?",
    a: "Yes. The client portal shows a simplified status: 'Documents received', 'Computation in progress', 'Awaiting your approval', 'Filed', 'E-verified'. Clients stay informed without calling your office.",
  },
  {
    q: "Is there a way to batch-send ITR computation sheets for client approval?",
    a: "Yes. Once computation is complete, you can share the tax computation sheet via the client portal or as an email link requiring digital approval — with a legally valid e-signature on the acknowledgement.",
  },
];



function TaxPage() {
  return (
    <MarketingPageShell compactSolution>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Handle 500+ Clients in Tax Season{" "}
              <span className="text-gradient-teal">Without Losing Your Mind</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Stop tracking ITR statuses in Excel and chasing clients for Form 16 over WhatsApp. CAGos centralizes document collection, automates reminders, and gives you a real-time filing pipeline across your entire client base.
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
              {["Bulk doc collection", "Filing pipeline tracker", "Notice management"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* ITR Pipeline Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white">ITR Season — AY 2026-27</p>
                  <p className="text-xs text-slate-500">148 clients total</p>
                </div>
                <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20 rounded-full px-3 py-1 font-semibold">32 days left</span>
              </div>

              <div className="space-y-2.5 mb-5">
                {[
                  { stage: "Docs Pending", count: 38, pct: 26, col: "bg-red-500", text: "text-red-400" },
                  { stage: "Computation Ready", count: 44, pct: 30, col: "bg-amber-500", text: "text-amber-400" },
                  { stage: "Under Partner Review", count: 22, pct: 15, col: "bg-brand-500", text: "text-brand-400" },
                  { stage: "Filed & E-verified", count: 44, pct: 29, col: "bg-teal-500", text: "text-teal-400" },
                ].map((stage, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-300">{stage.stage}</span>
                      <span className={`text-xs font-bold ${stage.text}`}>{stage.count} clients</span>
                    </div>
                    <div className="w-full bg-white/8 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${stage.col}`} style={{ width: `${stage.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Recent Activity</p>
                {[
                  { label: "Anish Patel — Form 16 uploaded", status: "Just now", col: "text-teal-400" },
                  { label: "Dr. R. Gupta — ITR filed", status: "1h ago", col: "text-teal-400" },
                  { label: "SK Traders — Notice logged", status: "3h ago", col: "text-amber-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/3">
                    <span className="text-xs text-slate-300">{item.label}</span>
                    <span className={`text-xs font-semibold ${item.col}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">3× faster filing season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "500+", label: "ITR clients managed / firm" },
            { val: "3×", label: "Faster filing season" },
            { val: "100%", label: "Deadline tracking coverage" },
            { val: "0", label: "Notices missed" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Built for tax practices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Every tool you need for high-volume filing
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Designed for the chaos of July–September and December–January — when 300 clients all need their returns filed at the same time.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From season kickoff to last client filed</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Questions from tax practitioners" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
