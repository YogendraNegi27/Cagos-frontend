import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Calendar, DownloadCloud, Bell, CheckCircle,
  AlertTriangle,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema, SITE_URL } from "../../lib/seo";

export const Route = createFileRoute("/resources/calendar")({
  head: () =>
    seoHead({
      path: "/resources/calendar",
      title: "Indian Tax Compliance Calendar FY 2026-27 | GST, ITR, TDS, ROC Deadlines | CAGos",
      description:
        "Complete compliance calendar for Indian CA firms — GST, Income Tax, TDS, ROC/MCA, PF, and ESIC due dates for FY 2026-27. Download the PDF or sync to Google Calendar.",
      ogTitle: "Indian Tax Compliance Calendar FY 2026-27 | CAGos",
      ogDescription:
        "Every GST, Income Tax, TDS, and ROC deadline for FY 2026-27 in one place. Free PDF download for CA firms.",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/resources/calendar`,
          url: `${SITE_URL}/resources/calendar`,
          name: "Indian Tax Compliance Calendar FY 2026-27",
          description:
            "Complete compliance calendar for Indian CA firms — GST, Income Tax, TDS, ROC/MCA, PF, and ESIC due dates for FY 2026-27.",
          inLanguage: "en-IN",
          isPartOf: { "@id": SITE_URL },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/calendar" },
          { name: "Tax Calendar", path: "/resources/calendar" },
        ]),
      ],
    }),
  component: TaxCalendarPage,
});

const deadlines = [
  {
    month: "May 2026",
    items: [
      { date: "7 May", tag: "TDS", tagCol: "bg-brand-500/15 text-brand-400", title: "TDS/TCS Deposit", desc: "Deposit tax deducted/collected for April 2026." },
      { date: "11 May", tag: "GST", tagCol: "bg-teal-500/15 text-teal-400", title: "GSTR-1 (Monthly)", desc: "Outward supplies details — taxpayers with turnover > ₹5 Cr." },
      { date: "13 May", tag: "GST", tagCol: "bg-teal-500/15 text-teal-400", title: "GSTR-1 (QRMP)", desc: "IFF optional for QRMP taxpayers — April quarter month 2." },
      { date: "15 May", tag: "PF/ESIC", tagCol: "bg-blue-500/15 text-blue-400", title: "PF & ESIC Contributions", desc: "Provident Fund and ESIC contributions for April 2026." },
      { date: "20 May", tag: "GST", tagCol: "bg-teal-500/15 text-teal-400", title: "GSTR-3B (Monthly)", desc: "Monthly summary return and tax payment — turnover > ₹5 Cr." },
      { date: "30 May", tag: "TDS", tagCol: "bg-brand-500/15 text-brand-400", title: "TDS Challan-cum-Statement", desc: "TDS on rent (Form 26QC), property (26QB) for Q4 FY26." },
      { date: "31 May", tag: "Income Tax", tagCol: "bg-violet-500/15 text-violet-400", title: "TDS Return — Q4 (FY26)", desc: "Quarterly TDS statements in Form 24Q, 26Q, 27Q, 27EQ." },
    ],
  },
  {
    month: "June 2026",
    items: [
      { date: "7 Jun", tag: "TDS", tagCol: "bg-brand-500/15 text-brand-400", title: "TDS/TCS Deposit", desc: "Deposit tax deducted/collected for May 2026." },
      { date: "11 Jun", tag: "GST", tagCol: "bg-teal-500/15 text-teal-400", title: "GSTR-1 (Monthly)", desc: "Outward supplies details for May 2026." },
      { date: "15 Jun", tag: "Income Tax", tagCol: "bg-violet-500/15 text-violet-400", title: "Advance Tax — 1st Instalment", desc: "15% of estimated annual tax liability for corporates and individuals." },
      { date: "15 Jun", tag: "PF/ESIC", tagCol: "bg-blue-500/15 text-blue-400", title: "PF & ESIC Contributions", desc: "Provident Fund and ESIC contributions for May 2026." },
      { date: "20 Jun", tag: "GST", tagCol: "bg-teal-500/15 text-teal-400", title: "GSTR-3B (Monthly)", desc: "Monthly summary return and tax payment for May 2026." },
      { date: "30 Jun", tag: "ROC", tagCol: "bg-emerald-500/15 text-emerald-400", title: "DIR-3 KYC", desc: "Annual KYC for all DINs issued up to 31 March 2026." },
    ],
  },
];

const categories = [
  { label: "GST Returns", count: "12 dates", col: "bg-teal-500/12 text-teal-400 border-teal-500/20" },
  { label: "Income Tax / TDS", count: "18 dates", col: "bg-violet-500/12 text-violet-400 border-violet-500/20" },
  { label: "ROC / MCA", count: "8 dates", col: "bg-emerald-500/12 text-emerald-400 border-emerald-500/20" },
  { label: "PF / ESIC", count: "24 dates", col: "bg-blue-500/12 text-blue-400 border-blue-500/20" },
  { label: "Advance Tax", count: "4 dates", col: "bg-brand-500/12 text-brand-400 border-brand-500/20" },
  { label: "Audit Deadlines", count: "6 dates", col: "bg-amber-500/12 text-amber-400 border-amber-500/20" },
];

const faqs = [
  {
    q: "Is this calendar applicable for FY 2026-27 (AY 2027-28)?",
    a: "Yes. The deadlines shown are for FY 2026-27 (April 2026 to March 2027). We update the calendar within 24 hours of any CBDT, GST Council, or MCA circular extending or modifying due dates.",
  },
  {
    q: "Can I sync these deadlines to Google Calendar or Outlook?",
    a: "Yes. Click 'Add to Google Calendar' to import an ICS file with all 70+ deadlines pre-loaded with 3-day advance reminders. The same ICS file works with Outlook and Apple Calendar.",
  },
  {
    q: "How does CAGos automatically track compliance deadlines for my clients?",
    a: "Once you onboard your clients and configure their applicable compliance types, CAGos generates a master deadline calendar, sends automated alerts 7 days and 1 day before each due date, and tracks filing status in real time.",
  },
  {
    q: "Are extension notifications included?",
    a: "Yes. When CBDT or GST Council issues an extension circular, we update the calendar and send push notifications to all CA users who have bookmarked the affected deadline. The original date and extension date are both shown.",
  },
];


function TaxCalendarPage() {
  return (
    <MarketingPageShell>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-semibold text-slate-300">Compliance Calendar FY 2026-27</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Every Compliance Deadline{" "}
              <span className="text-gradient-teal">in One Place</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              70+ GST, Income Tax, TDS, ROC, PF, and ESIC due dates for FY 2026-27. Updated within 24 hours of any CBDT or GST Council extension. Free to download and sync.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                <DownloadCloud className="w-4 h-4" /> Download PDF Calendar
              </button>
              <button className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Bell className="w-4 h-4" /> Add to Google Calendar
              </button>
            </div>
            <div className="flex flex-wrap gap-5">
              {["70+ deadlines", "Updated same-day", "Free download"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* May 2026 Deadlines Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <p className="font-bold text-white">May 2026 — Upcoming Deadlines</p>
                  <p className="text-xs text-slate-500">7 due dates this month</p>
                </div>
                <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20 rounded-full px-3 py-1 font-semibold">Live</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { date: "7 May", tag: "TDS", col: "text-brand-400 bg-brand-500/15", title: "TDS/TCS Deposit", urgent: false },
                  { date: "11 May", tag: "GST", col: "text-teal-400 bg-teal-500/15", title: "GSTR-1 (Monthly)", urgent: false },
                  { date: "15 May", tag: "PF", col: "text-blue-400 bg-blue-500/15", title: "PF & ESIC Contributions", urgent: false },
                  { date: "20 May", tag: "GST", col: "text-teal-400 bg-teal-500/15", title: "GSTR-3B (Monthly)", urgent: false },
                  { date: "31 May", tag: "IT", col: "text-violet-400 bg-violet-500/15", title: "TDS Return Q4 FY26", urgent: true },
                ].map((d, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${d.urgent ? "border-amber-500/20 bg-amber-500/5" : "border-white/6 bg-white/3"}`}>
                    <div className="text-right w-12 flex-shrink-0">
                      <p className={`text-xs font-bold ${d.urgent ? "text-amber-400" : "text-slate-400"}`}>{d.date}</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${d.col}`}>{d.tag}</span>
                    <p className="text-sm text-white font-medium flex-1">{d.title}</p>
                    {d.urgent && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">Auto-alerts 7 days before</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "70+", label: "Due dates tracked" },
            { val: "6", label: "Compliance categories" },
            { val: "24h", label: "Update turnaround" },
            { val: "Free", label: "PDF & ICS download" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-teal mb-1">{s.val}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Coverage</span>
          <h2 className="text-2xl font-extrabold text-white">Every compliance type covered</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <div key={c.label} className={`rounded-xl border px-5 py-4 text-center ${c.col.replace("text-", "border-").replace("bg-", "bg-")}`}>
              <p className={`font-bold ${c.col.split(" ")[1]}`}>{c.label}</p>
              <p className="text-xs text-slate-500 mt-1">{c.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEADLINES LIST ────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Upcoming deadlines</span>
            <h2 className="text-3xl font-extrabold text-white">May & June 2026</h2>
          </div>
          {deadlines.map((month) => (
            <div key={month.month} className="mb-10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-teal-400" />
                {month.month}
              </h3>
              <div className="space-y-2">
                {month.items.map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4 flex items-start gap-4">
                    <div className="w-16 flex-shrink-0 text-center pt-0.5">
                      <p className="text-sm font-extrabold text-white">{item.date}</p>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5 ${item.tagCol}`}>{item.tag}</span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <button className="glow-button px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 mx-auto transition-all">
              <DownloadCloud className="w-4 h-4" /> Download Full Year Calendar (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* ── CAGos INTEGRATION CTA ─────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 text-center">
          <Bell className="w-10 h-10 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-white mb-3">Never miss a deadline with CAGos</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            CAGos tracks every due date for every client automatically. Get alerts 7 days and 1 day before — filtered by client, compliance type, and assignee.
          </p>
          <Link to="/register" className="glow-button inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all">
            Start free for 14 days <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ScrollFAQAccordion title="Calendar questions answered" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
