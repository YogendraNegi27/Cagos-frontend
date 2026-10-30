import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Receipt, CreditCard, BellRing, RefreshCw,
  BarChart3, FileText, CheckCircle, Phone, BadgeIndianRupee,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/billing")({
  head: () =>
    seoHead({
      path: "/products/billing",
      title: "GST Billing & Invoicing Software for CA Firms | Automated Payments | CAGos",
      description:
        "Create GST-compliant invoices, set up recurring retainers, and collect payments with UPI and payment gateways. CAGos automates your CA firm's entire billing and collections cycle.",
      ogTitle: "Billing & Invoicing for CA Firms | CAGos",
      ogDescription:
        "Stop chasing payments manually. CAGos automates GST invoices, recurring retainers, and payment reminders for CA firms.",
      schema: [
        softwareApplicationSchema({
          name: "CAGos Billing & Invoicing",
          description:
            "GST-compliant invoicing, recurring retainer billing, UPI and payment-gateway collections built for Indian CA firms.",
          path: "/products/billing",
          category: "FinanceApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/billing" },
          { name: "Billing & Invoicing", path: "/products/billing" },
        ]),
      ],
    }),
  component: BillingPage,
});

const features = [
  {
    icon: Receipt,
    color: "brand",
    title: "GST-Compliant Tax Invoices",
    desc: "Generate professional invoices with GSTIN, HSN/SAC codes, CGST/SGST/IGST split, and digital signature — accepted by every corporate client's accounts team.",
  },
  {
    icon: RefreshCw,
    color: "teal",
    title: "Recurring Retainer Billing",
    desc: "Set up monthly or quarterly retainer invoices that generate and send automatically. Never forget to bill a client again — even for annual filings.",
  },
  {
    icon: BellRing,
    color: "violet",
    title: "Automated Payment Reminders",
    desc: "Friendly email and WhatsApp reminders go out at 7 days, 3 days, and on the due date. Escalate to a firm partner if overdue beyond a threshold you set.",
  },
  {
    icon: CreditCard,
    color: "blue",
    title: "UPI & Gateway Links",
    desc: "Embed a payment button in every invoice. Clients pay via UPI, net banking, or card in one tap. Payments are reconciled automatically against the invoice.",
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "Revenue Analytics Dashboard",
    desc: "See outstanding, collected, and overdue amounts by client, CA, service type, or time period. Export to Excel for your monthly partner review.",
  },
  {
    icon: FileText,
    color: "amber",
    title: "Proforma & Quotations",
    desc: "Send proforma invoices or engagement quotes before work begins. Convert them to tax invoices with a single click once the client approves.",
  },
];

const steps = [
  {
    num: "01",
    title: "Set up your service catalogue",
    desc: "Add your services — GST filing, ITR, company incorporation — with default prices, HSN codes, and GST rates. Bills populate automatically from here.",
  },
  {
    num: "02",
    title: "Link clients and set retainer schedules",
    desc: "Assign services to each client and set their billing cycle. CAGos auto-generates invoices on the first of every month — or on a custom date you choose.",
  },
  {
    num: "03",
    title: "Collect, reconcile, report",
    desc: "Clients receive invoices and pay via UPI or gateway. Payments auto-reconcile. You see your firm's revenue health in real time on the dashboard.",
  },
];

const faqs = [
  {
    q: "Are the invoices valid for GST input credit?",
    a: "Yes. CAGos invoices include all mandatory fields — your GSTIN, HSN/SAC codes, tax breakup (CGST/SGST/IGST), and a digitally generated invoice number series. They are fully GST-compliant.",
  },
  {
    q: "Can I add custom line items to an invoice?",
    a: "Yes. While you can create recurring template invoices, you can always add ad-hoc line items — disbursements, reimbursements, one-off charges — to any invoice before sending.",
  },
  {
    q: "Which payment gateways are supported?",
    a: "CAGos integrates with Razorpay (UPI, cards, net banking) by default. You can also generate a direct UPI QR code or collect via bank transfer and mark invoices paid manually.",
  },
  {
    q: "Can clients download invoices from the client portal?",
    a: "Yes. Every invoice is visible in the self-service client portal where clients can view, download PDF, and pay directly. No more email threads asking for invoice copies.",
  },
  {
    q: "How does invoice numbering work?",
    a: "You set a prefix (e.g., INV-2026/) and CAGos auto-sequences from there. The series resets annually or you can use continuous numbering — your choice.",
  },
];



function BillingPage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Get Paid Faster with{" "}
              <span className="text-gradient-teal">Smart Automated Invoicing</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Create GST-compliant invoices in 30 seconds, set up recurring retainers that bill themselves, and collect payments via UPI without a single follow-up call.
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
              {["GST-compliant invoices", "UPI payment links", "Auto-reconciliation"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Invoice Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              {/* Invoice header */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/8">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">Tax Invoice</p>
                  <p className="font-bold text-white text-lg">INV-2026-041</p>
                  <p className="text-xs text-slate-500 mt-1">To: Mehta Industries Ltd</p>
                </div>
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1.5 text-xs font-bold">PAID</span>
              </div>

              {/* Line items */}
              <div className="space-y-2.5 mb-5">
                {[
                  { label: "GST Filing (Monthly)", amount: "₹8,000" },
                  { label: "Income Tax Advisory", amount: "₹5,000" },
                  { label: "ROC Annual Return", amount: "₹4,000" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className="text-sm font-semibold text-white">{item.amount}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm text-slate-400">IGST (18%)</span>
                  <span className="text-sm font-semibold text-slate-300">₹3,060</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center bg-emerald-500/10 border border-emerald-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <BadgeIndianRupee className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white">Total Paid</span>
                </div>
                <span className="text-2xl font-extrabold text-emerald-400">₹20,060</span>
              </div>

              {/* Recurring badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Auto-generated on 1st of every month · Next: Jun 1, 2026</span>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">₹2.3Cr collected last year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "₹2.3Cr", label: "Avg collected per firm / year" },
            { val: "98%", label: "Invoice collection rate" },
            { val: "3×", label: "Faster payment vs email invoices" },
            { val: "40 hrs", label: "Saved per month on billing" },
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
            <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              The complete billing stack for CA firms
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From quote to payment — every step of your billing workflow, automated and compliant.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From setup to getting paid in 3 steps</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about Billing" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
