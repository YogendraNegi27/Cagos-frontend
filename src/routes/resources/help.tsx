import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, MessageCircle, PlayCircle, FileText,
  Search, Mail, Phone, Zap, CheckCircle, LifeBuoy,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/resources/help")({
  head: () =>
    seoHead({
      path: "/resources/help",
      title: "CAGos Help Center | Support, Guides & Tutorials for CA Firms",
      description:
        "Find answers, step-by-step guides, and video tutorials for CAGos. Live chat support for Growth and Enterprise plans. Get your CA firm up and running fast.",
      ogTitle: "CAGos Help Center — Guides, Tutorials & Support",
      ogDescription:
        "Find answers fast. Step-by-step guides, video walkthroughs, and live chat support for CAGos users.",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/help" },
          { name: "Help Center", path: "/resources/help" },
        ]),
      ],
    }),
  component: HelpCenterPage,
});

const categories = [
  {
    icon: Zap,
    color: "brand",
    title: "Getting Started",
    desc: "Set up your firm, import clients, configure your team, and go live in 3 days.",
    articles: 24,
  },
  {
    icon: FileText,
    color: "teal",
    title: "Billing & Invoicing",
    desc: "Create GST invoices, configure retainers, set up payment gateways, and track collections.",
    articles: 31,
  },
  {
    icon: PlayCircle,
    color: "violet",
    title: "Video Tutorials",
    desc: "Step-by-step walkthrough videos for every major feature — watch at your own pace.",
    articles: 18,
  },
  {
    icon: BookOpen,
    color: "blue",
    title: "Compliance & Calendar",
    desc: "Configure your compliance calendar, set up alerts, and track filing statuses.",
    articles: 16,
  },
  {
    icon: MessageCircle,
    color: "emerald",
    title: "Client Portal",
    desc: "Configure white-labeled portals, invite clients, manage document sharing and approvals.",
    articles: 22,
  },
  {
    icon: LifeBuoy,
    color: "amber",
    title: "Account & Security",
    desc: "Manage your subscription, team permissions, two-factor auth, and data export.",
    articles: 14,
  },
];

const popular = [
  { title: "How to import your client list from Excel", cat: "Getting Started", time: "3 min read" },
  { title: "Setting up recurring retainer invoices with auto-reminders", cat: "Billing & Invoicing", time: "5 min read" },
  { title: "Configuring your white-labeled client portal domain", cat: "Client Portal", time: "4 min read" },
  { title: "Adding team members and setting their permissions", cat: "Getting Started", time: "2 min read" },
  { title: "How to set up advance tax reminders for business clients", cat: "Compliance", time: "3 min read" },
  { title: "Enabling UPI payment links on invoices", cat: "Billing & Invoicing", time: "2 min read" },
];

const colorMap: Record<string, string> = {
  brand: "bg-brand-500/12 text-brand-400 border-brand-500/20",
  teal: "bg-teal-500/12 text-teal-400 border-teal-500/20",
  violet: "bg-violet-500/12 text-violet-400 border-violet-500/20",
  blue: "bg-blue-500/12 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/12 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/12 text-amber-400 border-amber-500/20",
};

const faqs = [
  {
    q: "What support channels are available?",
    a: "All plans get email support with a 24-hour response SLA. Growth plan gets live chat support (Mon–Sat, 9 AM–7 PM IST). Enterprise plans get a dedicated Customer Success Manager, phone support, and a 4-hour response SLA.",
  },
  {
    q: "Is there onboarding help for new firms?",
    a: "Yes. All paid plans include a live onboarding call with our team to help you import clients, configure billing, and get your first compliance calendar live. Enterprise plans get 5 structured onboarding sessions.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "Use the in-app feedback button (bottom-right corner of any page) or email support@cagos.in with a description and screenshot. Feature requests go to our public roadmap board — upvote what matters to your practice.",
  },
  {
    q: "Is training available for my team?",
    a: "Yes. We offer live group training sessions for teams of 5 or more — email support@cagos.in to schedule one. Our webinar library also has role-specific walkthroughs for partners, senior CAs, and article clerks.",
  },
  {
    q: "Where can I find the API documentation?",
    a: "Full REST API docs are available in the Developer section at cagos.in/resources/api. Includes endpoint reference, authentication, rate limits, code samples in Node.js, Python, and Go, and a Postman collection download.",
  },
];


function HelpCenterPage() {
  return (
    <MarketingPageShell>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <LifeBuoy className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold text-slate-300">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            How Can We{" "}
            <span className="text-gradient-teal">Help You?</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Search 125+ guides, video tutorials, and how-to articles. Or reach our support team directly — we respond in under 24 hours.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search for guides, tutorials, or FAQs..."
              className="w-full pl-14 pr-32 py-4 rounded-2xl bg-white/6 border border-white/12 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500/40 text-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 px-5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-xl transition-colors">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            {["125+ articles", "Video tutorials", "Live chat support"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "125+", label: "Help articles" },
            { val: "24h", label: "Email response SLA" },
            { val: "98%", label: "Issues resolved first contact" },
            { val: "9 AM–7 PM", label: "Live chat hours (IST)" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-teal mb-1">{s.val}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Browse by category</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Find the answer you need</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Guides are organized by the task you&apos;re trying to accomplish — not the feature name.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6 hover:bg-white/6 transition-all group cursor-pointer">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colorMap[c.color]}`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.desc}</p>
                <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> {c.articles} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR ARTICLES ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Most read</span>
            <h2 className="text-2xl font-extrabold text-white">Popular guides</h2>
          </div>
          <div className="space-y-3">
            {popular.map((a) => (
              <div key={a.title} className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-white/6 cursor-pointer group transition-all">
                <FileText className="w-4 h-4 text-slate-500 group-hover:text-teal-400 flex-shrink-0 transition-colors" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">{a.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{a.cat} · {a.time}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 flex-shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT CHANNELS ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Direct support</span>
            <h2 className="text-3xl font-extrabold text-white">Can&apos;t find what you need?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                desc: "Chat with our support team Mon–Sat, 9 AM–7 PM IST. Available on Growth and Enterprise plans.",
                cta: "Start chat",
                col: "bg-teal-500/12 text-teal-400 border-teal-500/20",
              },
              {
                icon: Mail,
                title: "Email Support",
                desc: "Email support@cagos.in with your question. We respond within 24 hours on all plans.",
                cta: "Send email",
                col: "bg-brand-500/12 text-brand-400 border-brand-500/20",
              },
              {
                icon: Phone,
                title: "Phone Support",
                desc: "Enterprise plans include phone support with a named CSM and 4-hour response SLA.",
                cta: "Call us",
                col: "bg-violet-500/12 text-violet-400 border-violet-500/20",
              },
            ].map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 text-center">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 mx-auto ${s.col}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <button className="glass px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/8 transition-all w-full">
                  {s.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollFAQAccordion title="Support questions answered" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
