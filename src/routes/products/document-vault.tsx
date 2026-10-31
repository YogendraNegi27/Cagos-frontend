import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Lock, KeyRound, FileText, Share2,
  FolderOpen, Search, CheckCircle, Phone, ShieldCheck,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/document-vault")({
  head: () =>
    seoHead({
      path: "/products/document-vault",
      title: "Document Management & E-Signature for CA Firms | CAGOS Document Vault",
      description:
        "Store, organize and share client documents with AES-256 encryption. Send engagement letters for legally valid e-signatures. CAGOS Document Vault — never lose a file again.",
      ogTitle: "Document Vault for CA Firms | CAGOS",
      ogDescription:
        "AES-256 encrypted document storage with legally valid e-signatures — built for CA firms and their clients.",
      schema: [
        softwareApplicationSchema({
          name: "CAGOS Document Vault",
          description:
            "Encrypted document storage, sharing, and legally valid e-signatures built for Indian CA firms and their clients.",
          path: "/products/document-vault",
          category: "BusinessApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/document-vault" },
          { name: "Document Vault", path: "/products/document-vault" },
        ]),
      ],
    }),
  component: DocumentVaultPage,
});

const features = [
  {
    icon: Lock,
    color: "brand",
    title: "AES-256 Encryption",
    desc: "Every file is encrypted at rest and in transit with AES-256 — the same standard used by banks. Your client documents are protected against breaches and unauthorized access.",
  },
  {
    icon: FileText,
    color: "teal",
    title: "Legal E-Signatures",
    desc: "Send engagement letters, audit reports, NDAs, and ITR forms for client signature. Signatures are legally valid under the IT Act 2000 — complete with a signed audit trail.",
  },
  {
    icon: KeyRound,
    color: "violet",
    title: "Version Control",
    desc: "Every edit creates a new version. You can see who changed what and when, restore any previous version, and compare documents side by side — essential for audit work.",
  },
  {
    icon: Share2,
    color: "blue",
    title: "Secure Client Sharing",
    desc: "Share documents directly to the client portal with expiry links and download limits. No more sending sensitive ITR acknowledgements or balance sheets over WhatsApp.",
  },
  {
    icon: FolderOpen,
    color: "emerald",
    title: "Bulk Document Upload",
    desc: "Upload 100 files at once with drag-and-drop. CAGOS auto-tags by client, year, and document type using AI — saving hours of manual filing across your team.",
  },
  {
    icon: Search,
    color: "amber",
    title: "Smart Search & Tags",
    desc: "Find any document in seconds with full-text search. Tag documents with custom labels — client name, filing year, type — and filter across your entire vault instantly.",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload and organize",
    desc: "Upload documents in bulk or individually. CAGOS auto-tags by client and document type. Organize into folder structures that mirror your firm's workflow.",
  },
  {
    num: "02",
    title: "Share securely with clients",
    desc: "Share any document to the client portal or via a time-limited encrypted link. Clients download securely — no email attachments, no WhatsApp.",
  },
  {
    num: "03",
    title: "Send for e-signature",
    desc: "Select any document, add signature fields, and send to the client via email. Clients sign digitally. You receive the signed copy with a legal audit trail attached.",
  },
];

const docTypes = [
  "ITR Acknowledgements", "GSTR Filings", "Balance Sheets",
  "Engagement Letters", "Audit Reports", "Tax Computation Sheets",
  "Form 16 / Form 16A", "Director KYC", "MOA / AOA",
  "Bank Statements", "PnL Statements", "GST Registration Certificates",
];

const faqs = [
  {
    q: "Are e-signatures legally valid in India?",
    a: "Yes. CAGOS e-signatures comply with the Information Technology Act 2000 (Section 3A). Each signature comes with a signed audit trail containing the signer's IP, timestamp, device, and OTP verification — legally equivalent to a wet signature for most documents.",
  },
  {
    q: "Where is my data stored?",
    a: "All documents are stored on ISO 27001-certified cloud infrastructure within India (AWS Mumbai region). Files are encrypted with AES-256 at rest and during transfer. We do not store documents on our own servers.",
  },
  {
    q: "Can clients upload documents to the vault?",
    a: "Yes. Clients can upload documents — bank statements, invoices, receipts — directly through the client portal. Uploaded files appear in the vault tagged to that client and notified to the assigned CA.",
  },
  {
    q: "Is there a storage limit?",
    a: "Starter plan includes 50 GB. Growth plan includes 500 GB. Enterprise has unlimited storage. If you need more, storage can be added in 100 GB blocks at any time.",
  },
  {
    q: "Can I control who in my firm can access which documents?",
    a: "Yes. Document-level access control lets you restrict documents to specific CAs or roles. For example, payroll documents can be visible only to partners — even hidden from the client's assigned CA.",
  },
];



function DocumentVaultPage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Every Document Secured.{" "}
              <span className="text-gradient-teal">Every Signature Captured.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Stop storing client files in shared drives and WhatsApp chats. CAGOS Document Vault gives you AES-256 encrypted storage, legally valid e-signatures, and instant retrieval — all linked to client profiles.
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
              {["AES-256 encryption", "IT Act compliant e-sign", "Unlimited storage"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Document Vault Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              {/* Vault header */}
              <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-violet-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
                    <Lock className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Mehta Industries Ltd</p>
                    <p className="text-xs text-slate-500">23 documents · 340 MB</p>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-teal-400" />
              </div>

              {/* Document list */}
              <div className="space-y-2.5 mb-5">
                {[
                  { name: "Engagement Letter 2026.pdf", type: "E-Sign", status: "Signed", col: "text-teal-400", bg: "bg-teal-500/8 border-teal-500/15" },
                  { name: "ITR-6 AY2025-26.pdf", type: "Filing", status: "Uploaded", col: "text-brand-400", bg: "bg-brand-500/8 border-brand-500/15" },
                  { name: "Audit Report FY25.pdf", type: "Report", status: "Pending Sign", col: "text-amber-400", bg: "bg-amber-500/8 border-amber-500/15" },
                  { name: "GSTR-9C FY25.pdf", type: "GST", status: "Uploaded", col: "text-brand-400", bg: "bg-brand-500/8 border-brand-500/15" },
                ].map((doc, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${doc.bg}`}>
                    <FileText className={`w-4 h-4 flex-shrink-0 ${doc.col}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{doc.name}</p>
                      <p className="text-xs text-slate-500">{doc.type}</p>
                    </div>
                    <span className={`text-xs font-bold flex-shrink-0 ${doc.col}`}>{doc.status}</span>
                  </div>
                ))}
              </div>

              {/* E-sign CTA */}
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <p className="text-sm text-violet-300 font-medium">1 document pending client signature</p>
                </div>
                <button className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-lg px-3 py-1.5 font-semibold hover:bg-violet-500/30 transition-colors">
                  Send reminder
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-bold text-white">AES-256 · Zero breaches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "99.99%", label: "Platform uptime SLA" },
            { val: "AES-256", label: "Encryption standard" },
            { val: "< 2 min", label: "Avg document retrieval time" },
            { val: "500 GB+", label: "Avg storage per firm / year" },
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
            <span className="inline-block text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Secure storage for every document your firm touches
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From ITR acknowledgements to audit reports — every document your firm creates or receives, organized and secured.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── DOCUMENT TYPES ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Store every type of CA document</h2>
          <p className="text-slate-400 text-sm mb-10">Organized by client, year, and document type — automatically.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {docTypes.map((t) => (
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From shared drive chaos to organized vault</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about Document Vault" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
