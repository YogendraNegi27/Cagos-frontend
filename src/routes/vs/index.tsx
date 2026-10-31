import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Sparkles } from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema, faqSchema, SITE_URL } from "../../lib/seo";

interface VsCard {
  competitor: string;
  slug: string;
  to:
    | "/vs/cleartax"
    | "/vs/tally"
    | "/vs/winman"
    | "/vs/zoho-books"
    | "/vs/quickbooks-india";
  tagline: string;
  positioning: string;
  recommendedIf: string;
}

const comparisons: VsCard[] = [
  {
    competitor: "ClearTax",
    slug: "cleartax",
    to: "/vs/cleartax",
    tagline: "B2C tax filing giant — deep GST/ITR utility",
    positioning:
      "ClearTax built its business serving end-taxpayers. CAGOS is built for CA firms managing multi-client engagements.",
    recommendedIf: "You're a CA firm and not an individual filing your own returns",
  },
  {
    competitor: "Tally",
    slug: "tally",
    to: "/vs/tally",
    tagline: "SMB accounting standard since 1986",
    positioning:
      "Tally is exceptional client accounting software. CAGOS is firm management software. They solve different problems.",
    recommendedIf: "You need a firm OS on top of Tally's client books",
  },
  {
    competitor: "Winman",
    slug: "winman",
    to: "/vs/winman",
    tagline: "Desktop CA-ERP with deep ITR/audit modules",
    positioning:
      "Winman is mature desktop filing software. CAGOS is a cloud-native firm OS — CRM, HRMS, billing, portal included.",
    recommendedIf: "You want cloud-native, mobile-first, multi-branch CA software",
  },
  {
    competitor: "Zoho Books",
    slug: "zoho-books",
    to: "/vs/zoho-books",
    tagline: "Cloud accounting for SMBs",
    positioning:
      "Zoho Books is built for the business; CAGOS is built for the CA firm. Most firms use both — clients on Zoho Books, firm on CAGOS.",
    recommendedIf: "You manage 25+ clients and need a true practice management product",
  },
  {
    competitor: "QuickBooks India",
    slug: "quickbooks-india",
    to: "/vs/quickbooks-india",
    tagline: "Discontinued by Intuit in April 2023",
    positioning:
      "QuickBooks Online India is no longer available. CAGOS rebuilds your CA firm's practice management; clients move books to Zoho Books or Tally.",
    recommendedIf: "You're rebuilding your firm's stack post-QuickBooks shutdown",
  },
];

const hubFaqs = [
  {
    question: "What's the right CA firm software for an Indian practice in 2026?",
    answer:
      "The honest answer: it depends on what problem you're trying to solve. For CA firm management (CRM, workflow, billing, HRMS, compliance) — CAGOS. For SMB books-of-account work — Tally or Zoho Books for clients. For deep desktop ITR/audit filing — Winman. Most modern firms run CAGOS for the firm and let clients pick their books tool.",
  },
  {
    question: "Which is the cheapest CA practice management software in India?",
    answer:
      "For pure cost per user: Tally (one-time license at ₹18-54k) is cheapest if you only need accounting. For total cost including CRM/HRMS/billing/portal: CAGOS starts at ₹999/mo for solo practitioners — typically the cheapest 'firm OS' option once you account for the tools that other products require you to buy separately.",
  },
  {
    question: "How do I choose between CAGOS, ClearTax, Tally, Winman and Zoho Books?",
    answer:
      "Map your top 3 problems first. If they're CRM + workflow + firm-level billing → CAGOS. If they're GST/ITR filing depth alone → ClearTax or Winman. If they're SMB books-of-account → Tally or Zoho Books. Most firms ultimately need a CA-firm OS (CAGOS) plus a books-of-account tool for clients (Tally / Zoho Books) — the two don't overlap.",
  },
  {
    question: "Are all these products available across India?",
    answer:
      "Yes — all five are available pan-India for any Indian CA firm. CAGOS, ClearTax, Tally, Winman, and Zoho Books all support GST, ITR, and Indian compliance requirements. The exception: QuickBooks India was discontinued by Intuit in April 2023 and is no longer available.",
  },
  {
    question: "Can I try CAGOS before committing?",
    answer:
      "Yes. CAGOS offers a 14-day free trial with full feature access, no credit card required. Most CA firms use the trial to import their client list, run one compliance cycle in parallel with their existing tool, and make the call based on real data.",
  },
];

export const Route = createFileRoute("/vs/")({
  head: () =>
    seoHead({
      path: "/vs",
      title: "CAGOS vs ClearTax, Tally, Winman, Zoho Books — Compare CA Firm Software",
      description:
        "Honest comparisons of CAGOS against ClearTax, Tally, Winman, Zoho Books, and QuickBooks India. Feature matrices, pricing, and which one wins for your CA firm.",
      ogTitle: "Compare CA Firm Software — CAGOS vs the Alternatives",
      ogDescription:
        "Side-by-side comparisons of CAGOS against the leading CA software in India. Make an informed choice.",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE_URL}/vs`,
          url: `${SITE_URL}/vs`,
          name: "CAGOS Comparison Hub",
          description:
            "Detailed comparisons of CAGOS against ClearTax, Tally, Winman, Zoho Books, and QuickBooks India.",
          inLanguage: "en-IN",
          isPartOf: { "@id": SITE_URL },
          hasPart: comparisons.map((c) => ({
            "@type": "Article",
            url: `${SITE_URL}/vs/${c.slug}`,
            name: `CAGOS vs ${c.competitor}`,
          })),
        },
        faqSchema(hubFaqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
        ]),
      ],
    }),
  component: VsHubPage,
});

function VsHubPage() {
  return (
    <MarketingPageShell>

      {/* HERO */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/12 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-semibold text-slate-300">
              CA firm software comparisons
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            How does CAGOS compare to the alternatives?
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
            We&apos;ve written honest, in-depth comparisons of CAGOS against the most-used
            CA firm software in India. No fluff, no inflated claims — feature matrices,
            real pricing, and the scenarios where each tool actually wins.
          </p>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              to={c.to}
              className="group rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-brand-500/30 p-7 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
                    <span className="text-brand-300 font-extrabold text-sm">vs</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white">
                    CAGOS vs {c.competitor}
                  </h2>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-brand-400 font-semibold mb-3">{c.tagline}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {c.positioning}
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1.5">
                  Pick CAGOS if
                </p>
                <p className="text-sm text-slate-300">{c.recommendedIf}</p>
              </div>
            </Link>
          ))}

          {/* Soon-card placeholder */}
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/1 p-7 flex flex-col items-center justify-center text-center">
            <Sparkles className="w-6 h-6 text-slate-500 mb-3" />
            <p className="text-sm font-semibold text-slate-400 mb-1">
              More comparisons coming
            </p>
            <p className="text-xs text-slate-500 max-w-xs">
              We&apos;re working on Computax, Saral, KDK Spectrum, and Marg ERP comparisons.
              Want one prioritized? Email <span className="text-brand-400">hello@cagos.io</span>.
            </p>
          </div>
        </div>
      </section>

      <ScrollFAQAccordion title="Choosing CA firm software in 2026 — FAQ" data={hubFaqs} />

    </MarketingPageShell>
  );
}
