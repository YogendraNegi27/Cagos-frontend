import HowItWorks from '@/components/ui/how-it-works';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code, Server, Webhook, Key,
  Shield, Zap, CheckCircle, Phone, Terminal,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema, SITE_URL } from "../../lib/seo";

export const Route = createFileRoute("/resources/api")({
  head: () =>
    seoHead({
      path: "/resources/api",
      title: "CAGos REST API | Developer Documentation for CA Firm Integrations",
      description:
        "Build on top of the CAGos API. REST endpoints for clients, tasks, billing, and compliance data. Webhooks, SDKs for Node.js, Python, and Go. Full developer documentation.",
      ogTitle: "CAGos Developer API — Build on Top of Your CA Firm's Data",
      ogDescription:
        "REST API, Webhooks, and SDKs to integrate CAGos with your internal ERP, billing system, or custom reporting tools.",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "CAGos REST API Documentation",
          description:
            "Developer documentation for the CAGos REST API — endpoints, authentication, webhooks, and SDK references.",
          url: `${SITE_URL}/resources/api`,
          inLanguage: "en-IN",
          publisher: {
            "@type": "Organization",
            name: "CAGos",
            url: SITE_URL,
          },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/api" },
          { name: "API", path: "/resources/api" },
        ]),
      ],
    }),
  component: ApiPage,
});

const features = [
  {
    icon: Server,
    color: "brand",
    title: "RESTful JSON API",
    desc: "Standard HTTP/JSON endpoints for all core objects — clients, tasks, invoices, compliance events, staff, and documents. Full CRUD with cursor-based pagination.",
  },
  {
    icon: Webhook,
    color: "teal",
    title: "Webhooks",
    desc: "Receive real-time push notifications when invoices are paid, documents are signed, compliance deadlines are breached, or tasks change status. Configure per-event or all-events.",
  },
  {
    icon: Code,
    color: "violet",
    title: "Official SDKs",
    desc: "Drop-in libraries for Node.js, Python, and Go. Type-safe clients with automatic retries, pagination helpers, and webhook signature verification built in.",
  },
  {
    icon: Key,
    color: "blue",
    title: "API Key Authentication",
    desc: "Bearer token authentication with scoped API keys — read-only, read-write, or billing-only. Rotate keys from the dashboard without downtime. IP allowlisting available.",
  },
  {
    icon: Shield,
    color: "emerald",
    title: "Sandbox Environment",
    desc: "A fully isolated sandbox with test data to develop and test your integration before going live. Sandbox webhooks work identically to production — no surprises at launch.",
  },
  {
    icon: Zap,
    color: "amber",
    title: "Rate Limits & SLA",
    desc: "1,000 requests/min on Growth, 10,000/min on Enterprise. 99.9% API uptime SLA. Rate limit headers on every response so your code can adapt gracefully.",
  },
];

const endpoints = [
  { method: "GET", path: "/v1/clients", desc: "List all clients with pagination and filters", methodCol: "text-teal-400 bg-teal-500/15" },
  { method: "POST", path: "/v1/clients", desc: "Create a new client with profile data", methodCol: "text-brand-400 bg-brand-500/15" },
  { method: "GET", path: "/v1/clients/{id}/tasks", desc: "List all tasks for a client", methodCol: "text-teal-400 bg-teal-500/15" },
  { method: "POST", path: "/v1/invoices", desc: "Create a GST-compliant invoice", methodCol: "text-brand-400 bg-brand-500/15" },
  { method: "GET", path: "/v1/compliance/deadlines", desc: "List upcoming compliance deadlines", methodCol: "text-teal-400 bg-teal-500/15" },
  { method: "POST", path: "/v1/documents/upload", desc: "Upload a document to the encrypted vault", methodCol: "text-brand-400 bg-brand-500/15" },
];

const steps = [
  {
    num: "01",
    title: "Get your API key",
    desc: "Log into CAGos, go to Settings → Developer, and create your first API key. Choose the scopes your integration needs — read-only or full access.",
  },
  {
    num: "02",
    title: "Install the SDK or hit the API directly",
    desc: "Install npm install @cagos/sdk for Node.js, pip install cagos for Python, or use any HTTP client to hit our REST endpoints directly with your Bearer token.",
  },
  {
    num: "03",
    title: "Build and test in sandbox",
    desc: "Use our sandbox environment with pre-seeded test data to develop your integration. Webhooks fire in real time even in sandbox — test your event handlers thoroughly before going live.",
  },
];

const faqs = [
  {
    q: "Which plans include API access?",
    a: "API access is available on Growth and Enterprise plans. The Starter plan does not include API access. Sandbox access is available to all registered users for evaluation.",
  },
  {
    q: "What can I build with the API?",
    a: "Common integrations include: syncing client data from your existing CRM, auto-generating invoices from external billing triggers, pulling compliance status into internal dashboards, and posting task updates from your project management tool. Enterprise customers also integrate CAGos with Tally and SAP for ledger sync.",
  },
  {
    q: "Are there webhook retries if my server is down?",
    a: "Yes. CAGos retries failed webhook deliveries with exponential backoff — 5 attempts over 24 hours. If all retries fail, the event is marked as failed and visible in your webhook delivery log so you can replay it manually.",
  },
  {
    q: "Is there a rate limit on the sandbox?",
    a: "Sandbox is limited to 100 requests/min — sufficient for development. If you need higher sandbox limits for load testing, email developer@cagos.in and we'll temporarily raise it.",
  },
  {
    q: "Do you have Postman collections?",
    a: "Yes. A complete Postman collection covering all endpoints is available for download from the developer dashboard. It includes pre-configured environments for sandbox and production, and example request bodies for every POST endpoint.",
  },
];


const colorMap: Record<string, string> = {
  brand: "bg-brand-500/12 text-brand-400 border-brand-500/20",
  teal: "bg-teal-500/12 text-teal-400 border-teal-500/20",
  violet: "bg-violet-500/12 text-violet-400 border-violet-500/20",
  blue: "bg-blue-500/12 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/12 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/12 text-amber-400 border-amber-500/20",
};

function ApiPage() {
  return (
    <MarketingPageShell>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-slate-300">Developers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Build on the{" "}
              <span className="text-gradient-teal">CAGos API</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Connect your ERP, billing system, or custom dashboards to CAGos via our REST API and Webhooks. Type-safe SDKs for Node.js, Python, and Go — get your first integration live in under an hour.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Get API keys <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to developer support
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["REST + Webhooks", "Node.js, Python, Go SDKs", "Sandbox included"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-teal-500/70" />
                <span className="text-xs text-slate-500 ml-2 font-mono">POST /v1/clients</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-slate-500 mb-1"># Create a client via API</p>
                <p>
                  <span className="text-violet-400">curl</span>
                  {" "}<span className="text-slate-300">-X POST</span>
                </p>
                <p className="pl-4 text-slate-300">https://api.cagos.in/v1/clients \</p>
                <p className="pl-4">
                  <span className="text-teal-400">-H</span>
                  {" "}<span className="text-amber-300">&quot;Authorization: Bearer sk_live_...&quot;</span>
                  {" "}<span className="text-slate-400">\</span>
                </p>
                <p className="pl-4">
                  <span className="text-teal-400">-H</span>
                  {" "}<span className="text-amber-300">&quot;Content-Type: application/json&quot;</span>
                  {" "}<span className="text-slate-400">\</span>
                </p>
                <p className="pl-4">
                  <span className="text-teal-400">-d</span>
                  {" "}<span className="text-slate-300">{'{'}</span>
                </p>
                <p className="pl-8"><span className="text-teal-300">&quot;name&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;Mehta Industries Pvt Ltd&quot;</span><span className="text-slate-400">,</span></p>
                <p className="pl-8"><span className="text-teal-300">&quot;pan&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;ABCDE1234F&quot;</span><span className="text-slate-400">,</span></p>
                <p className="pl-8"><span className="text-teal-300">&quot;entity_type&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;private_limited&quot;</span><span className="text-slate-400">,</span></p>
                <p className="pl-8"><span className="text-teal-300">&quot;gst_number&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;29ABCDE1234F1Z5&quot;</span></p>
                <p className="pl-4 text-slate-300">{'}'}</p>
                <div className="mt-4 pt-4 border-t border-white/8">
                  <p className="text-slate-500 mb-1"># Response</p>
                  <p className="text-slate-400">{"{"}</p>
                  <p className="pl-4"><span className="text-teal-300">&quot;id&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;cl_8fGh2kP9mNq1&quot;</span><span className="text-slate-400">,</span></p>
                  <p className="pl-4"><span className="text-teal-300">&quot;status&quot;</span><span className="text-slate-400">:</span> <span className="text-teal-400">&quot;active&quot;</span><span className="text-slate-400">,</span></p>
                  <p className="pl-4"><span className="text-teal-300">&quot;created_at&quot;</span><span className="text-slate-400">:</span> <span className="text-amber-300">&quot;2026-05-01T10:32:00Z&quot;</span></p>
                  <p className="text-slate-400">{"}"}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-white">10,000 requests/min on Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "60+", label: "API endpoints" },
            { val: "3", label: "Official SDKs" },
            { val: "99.9%", label: "API uptime SLA" },
            { val: "<1h", label: "Time to first integration" },
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
            <span className="inline-block text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">API capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Everything you need to integrate</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              REST endpoints, webhooks, and SDKs designed for real-world CA firm integrations — not a generic CRUD API.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:bg-white/6 transition-all group">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colorMap[f.color]}`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENDPOINT REFERENCE ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Key endpoints</span>
            <h2 className="text-2xl font-extrabold text-white">Common API operations</h2>
          </div>
          <div className="space-y-2">
            {endpoints.map((e, i) => (
              <div key={i} className="glass rounded-xl p-4 flex items-center gap-4 font-mono text-sm">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md flex-shrink-0 ${e.methodCol}`}>{e.method}</span>
                <span className="text-teal-300 flex-shrink-0">{e.path}</span>
                <span className="text-slate-500 hidden md:block">{e.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-5">
            60+ endpoints across clients, tasks, billing, compliance, staff, and documents.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Getting started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From API key to live integration</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion title="Developer questions answered" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
