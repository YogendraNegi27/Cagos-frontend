import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Video, Users, CalendarDays, PlayCircle,
  CheckCircle, Phone, Radio,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/resources/webinars")({
  head: () =>
    seoHead({
      path: "/resources/webinars",
      title: "CAGOS Webinars | Live Sessions & On-Demand Learning for CA Firms",
      description:
        "Free webinars for Indian CA firms — live masterclasses on tax updates, practice management, and CAGOS product deep-dives. Includes on-demand library of 30+ recordings.",
      ogTitle: "CAGOS Webinars — Free Learning for Indian CA Firms",
      ogDescription:
        "Live masterclasses and 30+ on-demand recordings on tax updates, practice management, and CAGOS product features.",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/webinars" },
          { name: "Webinars", path: "/resources/webinars" },
        ]),
      ],
    }),
  component: WebinarsPage,
});

const upcoming = [
  {
    title: "Direct Tax Code Changes: What Your Filing Workflow Must Look Like",
    date: "Thu, May 8, 2026 • 4:00 PM IST",
    speaker: "CA Ravi Shankar, Tax Partner — RSA & Co.",
    registered: "420+",
    tag: "Live next week",
    tagCol: "bg-red-500/15 text-red-400 border-red-500/20",
    badge: "Tax Updates",
    badgeCol: "bg-brand-500/15 text-brand-400",
  },
  {
    title: "Building a Premium HNI Advisory Practice: From Retainers to White-labeled Portals",
    date: "Tue, May 20, 2026 • 3:00 PM IST",
    speaker: "CA Rohit Mehta, Mehta Advisory Services",
    registered: "280+",
    tag: "Coming soon",
    tagCol: "bg-slate-500/15 text-slate-400 border-slate-500/20",
    badge: "Advisory",
    badgeCol: "bg-teal-500/15 text-teal-400",
  },
  {
    title: "Surviving GST Audit Season: Notice Management & Response Workflows",
    date: "Wed, June 4, 2026 • 4:30 PM IST",
    speaker: "CA Anjali Shah, Shah Mehta & Partners",
    registered: "190+",
    tag: "Coming soon",
    tagCol: "bg-slate-500/15 text-slate-400 border-slate-500/20",
    badge: "GST",
    badgeCol: "bg-blue-500/15 text-blue-400",
  },
];

const recordings = [
  {
    cat: "Product Training",
    catCol: "bg-brand-500/15 text-brand-400",
    title: "Setting up client portals step-by-step",
    duration: "38 min",
    views: "1,240",
  },
  {
    cat: "Practice Management",
    catCol: "bg-teal-500/15 text-teal-400",
    title: "Automating your retainer invoicing and payment reminders",
    duration: "42 min",
    views: "980",
  },
  {
    cat: "Tax Updates",
    catCol: "bg-brand-500/15 text-brand-400",
    title: "Understanding the new GST dispute resolution modules",
    duration: "55 min",
    views: "1,670",
  },
  {
    cat: "Product Training",
    catCol: "bg-brand-500/15 text-brand-400",
    title: "Migrating from desktop software to CAGOS in 3 days",
    duration: "46 min",
    views: "830",
  },
  {
    cat: "Practice Management",
    catCol: "bg-teal-500/15 text-teal-400",
    title: "Hiring and retaining top article clerks in 2026",
    duration: "34 min",
    views: "770",
  },
  {
    cat: "Audit",
    catCol: "bg-emerald-500/15 text-emerald-400",
    title: "ICAI peer review prep: workpaper checklists that work",
    duration: "61 min",
    views: "640",
  },
  {
    cat: "Tax Updates",
    catCol: "bg-brand-500/15 text-brand-400",
    title: "Advance tax tracking for 100+ business clients",
    duration: "29 min",
    views: "910",
  },
  {
    cat: "Practice Management",
    catCol: "bg-teal-500/15 text-teal-400",
    title: "Managing multi-partner firm KPIs with CAGOS analytics",
    duration: "37 min",
    views: "560",
  },
  {
    cat: "Product Training",
    catCol: "bg-brand-500/15 text-brand-400",
    title: "Bulk document collection for ITR season — full walkthrough",
    duration: "44 min",
    views: "1,180",
  },
];

const faqs = [
  {
    q: "Are the live webinars free to attend?",
    a: "Yes — all live webinars are free for anyone with a CAGOS account. Non-users can also register and attend live sessions. Recordings are available free to all registered users.",
  },
  {
    q: "Can I get CPE/CPD credits for attending?",
    a: "We're working with ICAI to get accreditation for select technical sessions. Currently, 3 of our quarterly tax update webinars qualify for 1 CPE hour each under the self-learning category — the certificates are emailed automatically.",
  },
  {
    q: "Will there be a recording if I can't attend live?",
    a: "Yes. Every live session is recorded and added to the on-demand library within 48 hours. Registered attendees are emailed a direct link. You can also access recordings from your CAGOS dashboard under Learning.",
  },
  {
    q: "Can I suggest a topic or speaker for a webinar?",
    a: "Absolutely. Email webinars@cagos.in with your topic idea and why it matters to your practice. We schedule community-requested topics every quarter — your name gets a shoutout in the session intro if we pick your idea.",
  },
];


function WebinarsPage() {
  return (
    <MarketingPageShell>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Radio className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-slate-300">Webinars & Live Sessions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Learn from Indian{" "}
              <span className="text-gradient-teal">CA Practitioners</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Live masterclasses on tax legislation updates, practice management, and CAGOS product deep-dives. Free for all users. 30+ recordings available on demand.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Browse recordings <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to us
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Free for all users", "30+ recordings", "CPE eligible sessions"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Session Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <p className="font-bold text-white">Next Live Session</p>
                <span className="flex items-center gap-1.5 text-xs bg-red-500/15 text-red-400 border border-red-500/20 rounded-full px-3 py-1 font-semibold">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  Live next week
                </span>
              </div>
              <span className="text-xs bg-brand-500/15 text-brand-400 rounded-full px-2.5 py-1 font-semibold mb-3 inline-block">Tax Updates</span>
              <h3 className="text-base font-bold text-white leading-snug mb-3">
                Direct Tax Code Changes: What Your Filing Workflow Must Look Like
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                CA Ravi Shankar walks through every provision that affects your current filing templates — with live Q&A.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> Thu, May 8 • 4 PM IST</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 420+ registered</span>
              </div>
              <button className="w-full py-3 bg-brand-600/20 border border-brand-500/30 text-brand-400 rounded-xl text-sm font-bold hover:bg-brand-600/30 transition-colors">
                Save Your Seat — Free
              </button>
              <div className="mt-4 pt-4 border-t border-white/8">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Also coming up</p>
                <div className="space-y-2">
                  {[
                    "HNI Advisory Practice — May 20",
                    "GST Audit Season — June 4",
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400 p-2 rounded-lg bg-white/3">
                      <Video className="w-3.5 h-3.5 text-violet-400" /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-bold text-white">30+ recordings available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "30+", label: "On-demand recordings" },
            { val: "8", label: "Live sessions per quarter" },
            { val: "4,000+", label: "CAs trained" },
            { val: "Free", label: "For all registered users" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-teal mb-1">{s.val}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING SESSIONS ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">Upcoming live sessions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Register for free</h2>
          </div>
          <div className="space-y-5">
            {upcoming.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${s.tagCol}`}>{s.tag}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeCol}`}>{s.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 leading-snug">{s.title}</h3>
                  <p className="text-xs text-slate-400 mb-2">{s.speaker}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {s.date}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {s.registered} registered</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="glow-button px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-sm transition-all whitespace-nowrap">
                    Save Your Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ON-DEMAND LIBRARY ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">On-demand library</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Watch at your own pace</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recordings.map((r) => (
              <div key={r.title} className="glass rounded-2xl p-5 flex gap-4 hover:bg-white/6 transition-all cursor-pointer group">
                <div className="w-11 h-11 rounded-xl bg-white/6 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-brand-400 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.catCol} inline-block mb-2`}>{r.cat}</span>
                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-teal-400 transition-colors">{r.title}</h4>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                    <span>{r.duration}</span>
                    <span>{r.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollFAQAccordion title="Questions about webinars" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
