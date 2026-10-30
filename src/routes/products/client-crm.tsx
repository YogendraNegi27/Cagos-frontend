import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Users, History, Share2, FileText, Bell, BarChart3,
  CheckCircle, Phone, Mail, Star,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/client-crm")({
  head: () =>
    seoHead({
      path: "/products/client-crm",
      title: "Client CRM for CA Firms | Manage 500+ Clients in One Place | CAGos",
      description:
        "CAGos Client CRM gives CA firms a unified master profile for every client — with documents, interaction history, compliance status, and a self-service client portal built in.",
      ogTitle: "Client CRM for CA Firms | CAGos",
      ogDescription:
        "Stop losing clients in WhatsApp and email. CAGos CRM centralizes every client relationship for your CA firm.",
      schema: [
        softwareApplicationSchema({
          name: "CAGos Client CRM",
          description:
            "Client relationship management built for Indian CA firms — master client profiles, interaction timeline, document linking, and a self-service client portal.",
          path: "/products/client-crm",
          category: "BusinessApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/client-crm" },
          { name: "Client CRM", path: "/products/client-crm" },
        ]),
      ],
    }),
  component: ClientCrmPage,
});

const features = [
  {
    icon: Users,
    color: "brand",
    title: "Master Client Profiles",
    desc: "One card per client — PAN, TAN, GST numbers, entity type, billing tier, assigned CA, and compliance status. Everything your team needs in under 3 seconds.",
  },
  {
    icon: History,
    color: "teal",
    title: "Interaction Timeline",
    desc: "A chronological log of every call note, email, WhatsApp message, and meeting linked to each client — searchable and filterable by date or team member.",
  },
  {
    icon: FileText,
    color: "violet",
    title: "Document Linking",
    desc: "Attach ITR acknowledgements, GST returns, engagement letters, and KYC documents directly to the client profile. No more searching shared drives.",
  },
  {
    icon: Share2,
    color: "blue",
    title: "Self-Service Client Portal",
    desc: "Give clients a branded login to track their tasks, view and pay invoices, upload documents, and raise queries — reducing calls to your team by 40%.",
  },
  {
    icon: Bell,
    color: "amber",
    title: "Bulk Communication",
    desc: "Send compliance reminders, greetings, or firm announcements to your entire client base in one click — segmented by entity type, billing tier, or assigned CA.",
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "Client Health Dashboard",
    desc: "See which clients are overdue on filings, have unpaid invoices, or have not been contacted in 30+ days. Act before they become a problem.",
  },
];

const steps = [
  {
    num: "01",
    title: "Import your client list",
    desc: "Upload a CSV or sync from Tally — CAGos maps PAN, GST, and entity details automatically. Done in under 5 minutes for 500 clients.",
  },
  {
    num: "02",
    title: "Assign CAs and set billing tiers",
    desc: "Tag each client with their primary CA, billing plan, and compliance types. The system auto-creates recurring tasks and compliance schedules.",
  },
  {
    num: "03",
    title: "Engage, track, and grow",
    desc: "Log interactions, share the client portal, monitor health scores — and get alerts when a client needs attention before they churn.",
  },
];

const faqs = [
  {
    q: "Can I migrate from my existing spreadsheet or software?",
    a: "Yes. CAGos accepts CSV imports and has a guided mapping wizard. Typical migration for 500 clients takes under 30 minutes with our onboarding team's help.",
  },
  {
    q: "How is the client portal branded?",
    a: "The client portal uses your firm's name and logo. Clients see your brand, not CAGos. You can also map it to your own domain (e.g., clients.yourfirm.in).",
  },
  {
    q: "Can different CAs in my firm see only their own clients?",
    a: "Yes. Role-based access lets you restrict each team member to only their assigned clients. Partners and admins get a full cross-firm view.",
  },
  {
    q: "Is there a limit on how many clients I can add?",
    a: "No hard limit. All plans include unlimited client profiles. Your plan limits are based on active team members, not client count.",
  },
  {
    q: "How does interaction logging work?",
    a: "You can log calls, meetings, and notes manually in under 10 seconds. We also integrate with Gmail and Outlook to auto-import emails against the right client profile.",
  },
];



function ClientCrmPage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              The CRM Built for{" "}
              <span className="text-gradient-teal">Chartered Accountants</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Stop managing clients across WhatsApp, email, and scattered spreadsheets. CAGos gives every client a unified master profile — with compliance status, billing history, documents, and interactions in one place.
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
              {["No credit card needed", "Free migration support", "Setup in 10 minutes"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Client Profile Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Profile</span>
                <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1 font-semibold">Gold Client</span>
              </div>
              {/* Client card */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/8">
                <div className="w-14 h-14 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xl font-bold text-brand-300">M</div>
                <div>
                  <h3 className="font-bold text-white text-lg">Mehta Industries Ltd</h3>
                  <p className="text-slate-400 text-sm">GST: 29AAACM1234F1Z5 · TAN: MUMD12345G</p>
                </div>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Open Tasks", val: "3", col: "text-amber-400" },
                  { label: "Invoices Due", val: "₹45K", col: "text-red-400" },
                  { label: "Last Contact", val: "2d ago", col: "text-teal-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center">
                    <p className={`text-lg font-extrabold ${s.col}`}>{s.val}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Recent activity */}
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Recent Activity</p>
                {[
                  { icon: FileText, label: "GSTR-1 filed for March 2026", time: "2h ago", col: "text-teal-400" },
                  { icon: Mail, label: "Invoice #INV-2026-041 sent", time: "1d ago", col: "text-brand-400" },
                  { icon: Bell, label: "ITR deadline reminder sent", time: "3d ago", col: "text-amber-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/3">
                    <item.icon className={`w-4 h-4 flex-shrink-0 ${item.col}`} />
                    <span className="text-sm text-slate-300 flex-1">{item.label}</span>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-white mkt-on-dark">342 clients managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "2,500+", label: "CA firms onboarded" },
            { val: "342", label: "Avg clients per firm" },
            { val: "4 hrs", label: "Saved per week per CA" },
            { val: "40%", label: "Fewer client calls" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Everything your firm needs to manage clients
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Purpose-built for Indian CA firms — not generic CRM software that you have to twist and bend.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Up and running in 3 steps</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about Client CRM" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
