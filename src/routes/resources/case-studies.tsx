import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, TrendingUp, Users, Star,
  CheckCircle, Phone,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/resources/case-studies")({
  head: () =>
    seoHead({
      path: "/resources/case-studies",
      title: "CAGos Customer Stories | How Indian CA Firms Scale with CAGos",
      description:
        "See how solo practitioners, mid-size CA firms, and enterprise practices use CAGos to save time, grow revenue, and deliver a better client experience.",
      ogTitle: "CAGos Customer Stories — Real Results from Indian CA Firms",
      ogDescription:
        "From solo practitioners to multi-branch firms — see how CA firms use CAGos to save time and grow revenue.",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/case-studies" },
          { name: "Customer Stories", path: "/resources/case-studies" },
        ]),
      ],
    }),
  component: CaseStudiesPage,
});

const studies = [
  {
    firm: "Kapoor Tax Practice",
    segment: "Solo Practitioner",
    segmentCol: "bg-brand-500/15 text-brand-400 border-brand-500/20",
    city: "Pune",
    headline: "Scaled from 90 to 310 clients without hiring a single associate",
    result1: { val: "3.4×", label: "Client growth in 18 months" },
    result2: { val: "4 hrs", label: "Admin time saved per day" },
    quote: "I was drowning in Excel sheets and WhatsApp messages. CAGos automated my compliance reminders, document collection, and invoicing. I now run 310 clients alone — and I actually take weekends off.",
    author: "CA Sunil Kapoor",
    color: "brand",
    features: ["Compliance calendar", "Automated reminders", "Recurring invoicing"],
  },
  {
    firm: "Desai & Associates",
    segment: "Mid-size Firm (15 Staff)",
    segmentCol: "bg-teal-500/15 text-teal-400 border-teal-500/20",
    city: "Mumbai",
    headline: "Reduced GST filing time by 40% and eliminated filing season panic",
    result1: { val: "40%", label: "Reduction in filing time" },
    result2: { val: "₹0", label: "Penalties from missed deadlines" },
    quote: "Filing season used to mean 80-hour weeks for everyone. With CAGos, clients upload their own documents, we move through a structured pipeline, and nothing slips. Last July was the first year no one stayed past 8 PM.",
    author: "CA Riddhi Desai, Managing Partner",
    color: "teal",
    features: ["Filing pipeline tracker", "Bulk document collection", "Notice management"],
  },
  {
    firm: "Reddy Financial Group",
    segment: "Enterprise (80+ Staff)",
    segmentCol: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    city: "Hyderabad (4 branches)",
    headline: "Unified 4 branch offices onto one platform with real-time P&L visibility",
    result1: { val: "4", label: "Branches on one platform" },
    result2: { val: "₹9.3 Cr", label: "Revenue tracked in real time" },
    quote: "We had fragmented Excel sheets across Mumbai, Delhi, Hyderabad, and Pune. Partners couldn't see cross-branch performance. CAGos Enterprise gave us one view of the entire firm — billing, headcount, and client health — for the first time.",
    author: "CA Venkat Reddy, Senior Partner",
    color: "violet",
    features: ["Multi-branch management", "Branch P&L analytics", "Custom RBAC"],
  },
  {
    firm: "Shah Audit LLP",
    segment: "Audit Firm (12 Staff)",
    segmentCol: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    city: "Ahmedabad",
    headline: "Passed ICAI peer review on first attempt with zero documentation gaps",
    result1: { val: "100%", label: "Peer review pass rate" },
    result2: { val: "3×", label: "Faster audit setup" },
    quote: "Our ICAI peer reviewer was impressed by the structured workpaper trail in CAGos. Every audit phase had sign-offs, version history, and client confirmation records. What used to take a week to prepare for review now takes a day.",
    author: "CA Neel Shah, Partner",
    color: "emerald",
    features: ["Audit workpaper management", "Peer review readiness", "Engagement tracking"],
  },
  {
    firm: "Mehta Advisory Services",
    segment: "Financial Advisor (HNI)",
    segmentCol: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    city: "Delhi",
    headline: "Launched a white-labeled client portal that HNI clients love",
    result1: { val: "99%", label: "HNI client retention" },
    result2: { val: "₹128 Cr", label: "AUM tracked on platform" },
    quote: "My HNI clients compare me to private bank RMs. CAGos gives me a portal under my own brand where clients see their portfolios, invoices, and documents. One client told me it feels better than HDFC Private. That's the benchmark I needed.",
    author: "CA Rohit Mehta, Principal Advisor",
    color: "amber",
    features: ["White-labeled client portal", "AUM tracking", "Retainer billing"],
  },
  {
    firm: "Sharma & Sons CA",
    segment: "Small Firm (6 Staff)",
    segmentCol: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    city: "Jaipur",
    headline: "Grew revenue 3× without adding admin overhead by standardizing workflows",
    result1: { val: "3×", label: "Revenue in year 1" },
    result2: { val: "60%", label: "Less admin time per CA" },
    quote: "Adding a third CA felt impossible with our WhatsApp-based coordination. CAGos gave us task assignment, maker-checker approvals, and SLA tracking. Now I can onboard new staff in a day — the system tells them exactly what to do.",
    author: "CA Rajan Sharma, Partner",
    color: "blue",
    features: ["Team task assignment", "Maker-checker approvals", "SLA tracking"],
  },
];

const colorMap: Record<string, string> = {
  brand: "border-brand-500/30 bg-brand-500/5",
  teal: "border-teal-500/30 bg-teal-500/5",
  violet: "border-violet-500/30 bg-violet-500/5",
  emerald: "border-emerald-500/30 bg-emerald-500/5",
  amber: "border-amber-500/30 bg-amber-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
};

const resultColorMap: Record<string, string> = {
  brand: "text-brand-400",
  teal: "text-teal-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  blue: "text-blue-400",
};

const faqs = [
  {
    q: "Are these real customer stories?",
    a: "Yes. All case studies are based on real CAGos customers. Some firm names and identifying details have been changed at their request, but the results and quotes are verified by the firms themselves.",
  },
  {
    q: "Can I speak to a customer who matches my firm profile?",
    a: "Yes. When you schedule a demo, we can connect you with a reference customer in your segment — solo practitioner, SMB, or enterprise — so you can ask them directly about their experience.",
  },
  {
    q: "How long does it take to see these results?",
    a: "Most firms see workflow improvements within the first 2 weeks. Revenue impact (from better billing and reduced leakage) typically shows up in the first 60–90 days. Client retention improvements are visible within 6 months.",
  },
  {
    q: "Can I submit my own success story?",
    a: "Absolutely. Email stories@cagos.in and we'll reach out to schedule a 20-minute interview. Published customers receive 3 months of free Growth plan access as a thank-you.",
  },
];


function CaseStudiesPage() {
  return (
    <MarketingPageShell>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-slate-300">Customer Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Real Results from{" "}
              <span className="text-gradient-teal">Real CA Firms</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              From solo practitioners to 80-person enterprises — see how Indian CA firms use CAGos to save time, grow revenue, and deliver a client experience their clients can&apos;t stop talking about.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Start free for 14 days <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to a customer
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Solo to enterprise", "Verified results", "Real quotes"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Aggregate Stats Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">Across all customer segments</p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { val: "2,500+", label: "Firms on CAGos", col: "text-brand-400" },
                  { val: "4 hrs", label: "Saved per CA/day", col: "text-teal-400" },
                  { val: "3×", label: "Avg revenue growth", col: "text-emerald-400" },
                  { val: "99%", label: "Client retention rate", col: "text-amber-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3">
                    <p className={`text-xl font-extrabold ${s.col}`}>{s.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Recent success stories</p>
                {[
                  { firm: "Kapoor Tax Practice", result: "3.4× client growth", seg: "Solo" },
                  { firm: "Desai & Associates", result: "40% faster filing", seg: "SMB" },
                  { firm: "Reddy Financial Group", result: "4 branches unified", seg: "Enterprise" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/6">
                    <div>
                      <p className="text-sm font-semibold text-white">{s.firm}</p>
                      <p className="text-xs text-slate-500">{s.seg}</p>
                    </div>
                    <p className="text-xs font-bold text-teal-400">{s.result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">₹2.3 Cr avg collected per firm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "2,500+", label: "Firms on CAGos" },
            { val: "4 hrs", label: "Admin saved per CA/day" },
            { val: "3×", label: "Avg revenue growth, year 1" },
            { val: "99%", label: "Customer satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-teal mb-1">{s.val}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Customer stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Every firm type, every segment</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Find the story that matches your practice and see what&apos;s possible.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {studies.map((s) => (
              <div key={s.firm} className={`glass rounded-2xl p-6 border ${colorMap[s.color]} transition-all hover:bg-white/6 group`}>
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div>
                    <p className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">{s.firm}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.city}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${s.segmentCol}`}>{s.segment}</span>
                </div>
                <p className="text-sm font-semibold text-white mb-4 leading-snug">{s.headline}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/4 rounded-xl p-3">
                    <p className={`text-xl font-extrabold ${resultColorMap[s.color]}`}>{s.result1.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.result1.label}</p>
                  </div>
                  <div className="bg-white/4 rounded-xl p-3">
                    <p className={`text-xl font-extrabold ${resultColorMap[s.color]}`}>{s.result2.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.result2.label}</p>
                  </div>
                </div>
                <blockquote className="text-slate-400 text-sm leading-relaxed italic mb-4 border-l-2 border-white/10 pl-4">
                  &quot;{s.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 font-semibold">{s.author}</p>
                  <div className="flex gap-1.5">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs bg-white/6 text-slate-400 px-2 py-0.5 rounded-md">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGMENT FILTER NUDGE ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-8 h-8 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-white mb-3">Find your segment</h2>
          <p className="text-slate-400 mb-6">See which solution fits your firm best.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Solo Practitioner", to: "/solutions/solo" },
              { label: "Small & Mid-size Firm", to: "/solutions/smb" },
              { label: "Enterprise", to: "/solutions/enterprise" },
              { label: "Tax Consultant", to: "/solutions/tax" },
              { label: "Audit Firm", to: "/solutions/audit" },
              { label: "Financial Advisor", to: "/solutions/advisors" },
            ].map((seg) => (
              <Link key={seg.label} to={seg.to as "/solutions/solo"} className="glass px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/8 transition-all flex items-center gap-2">
                {seg.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollFAQAccordion title="Questions about customer stories" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
