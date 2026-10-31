import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Fingerprint, BadgeIndianRupee, BarChart3, Calendar,
  FileText, Users, CheckCircle, Phone, Clock,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/hrms")({
  head: () =>
    seoHead({
      path: "/products/hrms",
      title: "HRMS for CA Firms | Staff Attendance, Payroll & Leave Management | CAGOS",
      description:
        "CAGOS HRMS helps CA firms manage article clerks, associates, and staff — attendance tracking, leave management, automated payroll, digital payslips, and performance reviews in one system.",
      ogTitle: "HRMS for CA Firms | CAGOS",
      ogDescription:
        "Manage your CA firm's staff without an HR department. CAGOS handles attendance, leaves, payroll, and performance reviews automatically.",
      schema: [
        softwareApplicationSchema({
          name: "CAGOS HRMS",
          description:
            "Staff management for CA firms — biometric attendance, leave management, automated payroll, digital payslips, and performance reviews.",
          path: "/products/hrms",
          category: "BusinessApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/hrms" },
          { name: "HRMS", path: "/products/hrms" },
        ]),
      ],
    }),
  component: HrmsPage,
});

const features = [
  {
    icon: Fingerprint,
    color: "brand",
    title: "Attendance Tracking",
    desc: "Staff mark attendance via the mobile app with GPS verification. Article clerks, associates, and partners all on one system — in-office, remote, and hybrid.",
  },
  {
    icon: Calendar,
    color: "teal",
    title: "Leave Management",
    desc: "Configure leave types — casual, earned, sick, compensatory — with approval workflows. Staff apply on mobile, managers approve in one tap. Balances auto-update.",
  },
  {
    icon: BadgeIndianRupee,
    color: "emerald",
    title: "Automated Payroll",
    desc: "Monthly payroll runs in under 2 minutes. CAGOS calculates CTC components, PF deductions, professional tax, TDS, and variable pay — then generates the salary register.",
  },
  {
    icon: FileText,
    color: "violet",
    title: "Digital Payslips",
    desc: "Password-protected payslips are emailed to each employee on salary credit day. Employees access their full payslip history from the mobile app at any time.",
  },
  {
    icon: BarChart3,
    color: "blue",
    title: "Performance Reviews",
    desc: "Set quarterly KRAs for each team member. Managers rate performance against goals. Results feed into increment and bonus workflows — all documented and audit-ready.",
  },
  {
    icon: Users,
    color: "amber",
    title: "Onboarding & Offer Letters",
    desc: "Generate offer letters, appointment letters, and NDAs with your firm's template in one click. Digital signing via the Document Vault. New joiner checklists auto-assigned.",
  },
];

const steps = [
  {
    num: "01",
    title: "Add your team",
    desc: "Import existing staff details or add them individually. Set designations, CTC, department, and reporting manager. Configure leaves and working hours per role.",
  },
  {
    num: "02",
    title: "Run attendance and leaves daily",
    desc: "Staff clock in via mobile. Leave requests flow through approval chains. The system tracks balances, half-days, late arrivals, and overtime automatically.",
  },
  {
    num: "03",
    title: "Run payroll in 2 minutes",
    desc: "On the payroll date, review the auto-calculated salary register, approve it, and CAGOS generates all payslips, updates accounts, and emails staff — done.",
  },
];

const faqs = [
  {
    q: "Is CAGOS HRMS suitable for article clerks under ICAI training?",
    a: "Yes. You can track article clerk attendance separately, manage their stipend payments, generate experience certificates, and log their training hours — all within CAGOS.",
  },
  {
    q: "Does the payroll handle PF and professional tax automatically?",
    a: "Yes. CAGOS calculates PF (employee + employer), professional tax (state-wise), and TDS on salary. It generates the PF challan and Form 24Q data for you to upload to the portal.",
  },
  {
    q: "Can staff apply for leave from their mobile phone?",
    a: "Yes. The CAGOS employee mobile app (iOS and Android) lets staff apply for leaves, view their balance, check payslips, and mark attendance from anywhere.",
  },
  {
    q: "Can we configure custom leave types?",
    a: "Yes. You can create any number of leave types — casual, earned, sick, work-from-home, compensatory off — with their own accrual rules, carry-forward limits, and approval chains.",
  },
  {
    q: "How does the system handle multi-location offices?",
    a: "Each office location can have its own working hours, holiday list, and professional tax slab. Staff are assigned to a primary location and the system applies the correct rules.",
  },
];



function HrmsPage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Run Your CA Firm&apos;s HR{" "}
              <span className="text-gradient-teal">Without an HR Department</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              From article clerks to partners — attendance, leaves, payroll, and performance reviews for your entire CA firm team, automated and compliant with Indian labour laws.
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
              {["Mobile attendance", "Auto payroll", "Article clerk support"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* HRMS Attendance + Payroll Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/8">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">Today&apos;s Attendance</p>
                  <p className="font-bold text-white text-lg">Thursday, 1 May 2026</p>
                </div>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1.5 text-xs font-bold">14 / 18 In</span>
              </div>

              {/* Attendance list */}
              <div className="space-y-2.5 mb-5">
                {[
                  { name: "Rahul Sharma", role: "Article Clerk", time: "09:15 AM", status: "present" },
                  { name: "Priya Mehta", role: "Senior Associate", time: "09:02 AM", status: "present" },
                  { name: "Anil Verma", role: "Article Clerk", time: "—", status: "leave" },
                  { name: "CA Suresh K.", role: "Partner", time: "10:30 AM", status: "wfh" },
                ].map((emp, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300">
                      {emp.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{emp.name}</p>
                      <p className="text-xs text-slate-500">{emp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs font-semibold ${emp.status === "present" ? "text-teal-400" : emp.status === "leave" ? "text-amber-400" : "text-blue-400"}`}>
                        {emp.status === "present" ? emp.time : emp.status === "leave" ? "On Leave" : "WFH"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payroll summary */}
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">May Payroll (Pending)</p>
                    <p className="text-xl font-extrabold text-white mt-1">₹4,82,000</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-400" />
                    <span className="text-xs text-brand-300 font-medium">Run on May 31</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">₹0 payroll errors last 12 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "18", label: "Avg staff per CA firm" },
            { val: "₹0", label: "Payroll errors in 12 months" },
            { val: "2 min", label: "Time to run monthly payroll" },
            { val: "100%", label: "PF / PT compliance rate" },
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
              Complete HR for your entire firm team
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Purpose-built for CA firm structures — article clerks, senior associates, managers, and partners all on one system.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Your firm&apos;s HR, on autopilot</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about HRMS" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
