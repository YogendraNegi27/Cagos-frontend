import { createFileRoute } from "@tanstack/react-router";

import { VsLayout, type VsPageData } from "../../components/features/vs/VsLayout";
import {
  seoHead,
  breadcrumbSchema,
  comparisonSchema,
  faqSchema,
} from "../../lib/seo";

const data: VsPageData = {
  competitor: {
    name: "ClearTax",
    slug: "cleartax",
    tagline: "has been a mass-market tax filing platform",
    foundedYear: "2011",
    bestFor: "Individuals and SMBs filing their own GST/ITR",
  },
  hero: {
    eyebrow: "ClearTax alternative for CA firms",
    headline: "CAGOS vs ClearTax: which one is right for your CA firm?",
    subheadline:
      "ClearTax is great if you're an individual or SMB filing your own taxes. But if you're a CA firm managing 50, 200, or 1,000+ clients with their own staff, deadlines, retainers, and compliance trails — you need practice management, not a filing utility. Here's the honest comparison.",
  },
  verdict: {
    summary:
      "ClearTax built its business serving end-taxpayers; CAGOS was built from day one for the CA firm running multi-client engagements. If you need GST/ITR utility for one entity, ClearTax wins. If you need to run a firm, CAGOS was built for you.",
    chooseCAGOSIf: [
      "You manage 25+ clients and need a single CRM + workflow + billing system",
      "You want native HRMS for article clerks, attendance, and payroll",
      "You need automated compliance tracking across GST, ITR, TDS, ROC, PF, and ESIC for every client",
      "Your firm wants white-labeled client portals with branded invoicing",
      "You're tired of stitching together Tally + WhatsApp + Excel + ClearTax",
    ],
    chooseCompetitorIf: [
      "You're an individual taxpayer or single-entity SMB filing your own returns",
      "You only need a GST/ITR filing utility, not a practice OS",
      "Your team already has a separate CRM, HRMS, and billing system you want to keep",
      "Brand recognition with your end-clients matters more than firm-internal workflow",
    ],
  },
  featureGroups: [
    {
      group: "Practice management & firm operations",
      rows: [
        {
          label: "Client CRM with master profiles",
          cagos: {
            value: "Built-in",
            state: "yes",
            note: "PAN/TAN/GST/entity, interaction timeline, documents",
          },
          competitor: {
            value: "Limited",
            state: "partial",
            note: "Client list within filing tools; not a true CRM",
          },
        },
        {
          label: "Task & workflow management",
          cagos: {
            value: "Kanban + SLA tracking",
            state: "yes",
            note: "Sub-task checklists, escalations, owner assignments",
          },
          competitor: {
            value: "Filing-status only",
            state: "partial",
            note: "Tracks return status, not arbitrary firm tasks",
          },
        },
        {
          label: "HRMS for article clerks & staff",
          cagos: {
            value: "Built-in",
            state: "yes",
            note: "Biometric attendance, leave, payroll, payslips",
          },
          competitor: {
            value: "Not offered",
            state: "no",
            note: "Use a separate HRMS like Zoho People / Keka",
          },
        },
        {
          label: "Retainer billing & invoicing",
          cagos: {
            value: "Native",
            state: "yes",
            note: "GST-compliant invoices, recurring retainers, UPI/RZP collection",
          },
          competitor: {
            value: "Separate product",
            state: "partial",
            note: "Available via ClearOne, billed separately",
          },
        },
        {
          label: "White-labeled client portal",
          cagos: {
            value: "Included",
            state: "yes",
            note: "Your firm's branding, not the vendor's",
          },
          competitor: {
            value: "Co-branded",
            state: "partial",
            note: "ClearTax brand remains prominent for end-clients",
          },
        },
      ],
    },
    {
      group: "Compliance & filing",
      rows: [
        {
          label: "GST filing (GSTR-1, 3B, 9, 9C)",
          cagos: {
            value: "Supported",
            state: "yes",
            note: "Direct GSTN integration with reconciliation",
          },
          competitor: {
            value: "Deep + mature",
            state: "yes",
            note: "One of the strongest GST products in India",
          },
        },
        {
          label: "ITR filing across ITR-1 to ITR-7",
          cagos: {
            value: "Supported",
            state: "yes",
            note: "Workflow-driven across all ITR types",
          },
          competitor: {
            value: "Deep + mature",
            state: "yes",
            note: "Core product — well-refined over a decade",
          },
        },
        {
          label: "TDS, ROC, PF, ESIC tracking",
          cagos: {
            value: "Unified tracker",
            state: "yes",
            note: "All filings on one compliance hub",
          },
          competitor: {
            value: "Across multiple SKUs",
            state: "partial",
            note: "TDS Cleartax, ClearROC etc. priced separately",
          },
        },
        {
          label: "Multi-client deadline dashboard",
          cagos: {
            value: "First-class",
            state: "yes",
            note: "Auto-generates dates for every client × filing type",
          },
          competitor: {
            value: "Per-product",
            state: "partial",
            note: "Aggregated view requires Enterprise / ClearOne",
          },
        },
      ],
    },
    {
      group: "Deployment, security & integrations",
      rows: [
        {
          label: "Cloud-native (no installs)",
          cagos: {
            value: "Yes",
            state: "yes",
            note: "Cloudflare global edge",
          },
          competitor: {
            value: "Yes",
            state: "yes",
          },
        },
        {
          label: "Multi-branch & RBAC",
          cagos: {
            value: "Native on every plan",
            state: "yes",
          },
          competitor: {
            value: "Enterprise tier",
            state: "partial",
            note: "Custom RBAC requires custom-priced contract",
          },
        },
        {
          label: "REST API & webhooks",
          cagos: {
            value: "Public, documented",
            state: "yes",
            note: "All entities exposed via REST",
          },
          competitor: {
            value: "Selective",
            state: "partial",
            note: "API access on Enterprise tier; limited scope",
          },
        },
        {
          label: "Document e-signature",
          cagos: {
            value: "Built-in",
            state: "yes",
            note: "Legally valid for engagement letters",
          },
          competitor: {
            value: "Via integration",
            state: "partial",
            note: "Typically pair with DocuSign / Leegality",
          },
        },
      ],
    },
  ],
  pricing: [
    {
      plan: "Solo CA (1 user, up to 50 clients)",
      cagos: "₹999/mo all-in (GST + ITR + CRM + billing)",
      competitor: "₹2,000-5,000+/yr per product, bundled separately",
      notes:
        "ClearTax tools are priced per product (GST plan + ITR plan + TDS plan). CAGOS is one bundle.",
    },
    {
      plan: "Small firm (5 users, 200 clients)",
      cagos: "₹3,999-7,999/mo bundle",
      competitor: "₹40,000-1,00,000+/yr across multiple SKUs",
      notes:
        "Add ClearOne practice management on top for the firm-management features.",
    },
    {
      plan: "Mid-size firm (20 users, 500 clients)",
      cagos: "Growth plan, custom-quoted (~₹15-25k/mo)",
      competitor: "Custom quote; typically ₹2-6 lakh/yr ClearOne",
      notes: "Both move to annual contracts at this scale.",
    },
    {
      plan: "Enterprise (multi-branch, 1000+ clients)",
      cagos: "Custom — bundled CSM + dedicated infra",
      competitor: "Custom — ClearOne Enterprise",
    },
  ],
  scenarios: [
    {
      title: "You're a solo CA with 80 clients across GST + ITR work",
      description:
        "CAGOS gives you everything in one ₹999/mo subscription — CRM, compliance tracker, billing, portal. With ClearTax you'll buy GST + ITR plans separately and still need a CRM and billing tool on top.",
      winner: "cagos",
    },
    {
      title: "You need the absolute deepest GST filing utility",
      description:
        "ClearTax has spent 12+ years refining GST and ITR. Edge-case reconciliations, complex GSTR-9C scenarios, and notice handling are battle-tested. CAGOS covers the standard cases well; ClearTax is more mature at the long tail.",
      winner: "competitor",
    },
    {
      title: "You run a 15-person firm with article clerks",
      description:
        "CAGOS's built-in HRMS handles biometric attendance, payroll, and articleship reports. ClearTax doesn't offer HRMS — you'd buy Zoho People / Keka separately, doubling your tool stack and integration surface.",
      winner: "cagos",
    },
    {
      title: "You want a white-labeled portal for your clients",
      description:
        "CAGOS client portal carries your firm's logo, colors, and domain. ClearTax's client experience is co-branded; clients see ClearTax branding, which can dilute your firm's identity.",
      winner: "cagos",
    },
    {
      title: "You only need to file your own SMB's returns",
      description:
        "If you're a business owner doing your own GST + ITR (not a CA firm), ClearTax is overbuilt for one entity and CAGOS is overbuilt too. Use ClearTax's direct SMB tier or even Zoho Books.",
      winner: "tie",
    },
    {
      title: "Tax season at scale: 500 ITRs in 60 days",
      description:
        "Both handle the filing engine well. CAGOS wins on workflow — bulk data collection, client follow-up automation, and a status pipeline across your team. ClearTax handles the filing depth; CAGOS handles the firm.",
      winner: "cagos",
    },
  ],
  faqs: [
    {
      question: "Is CAGOS a direct replacement for ClearTax?",
      answer:
        "For CA firms, yes — CAGOS covers GST filing, ITR filing, TDS, ROC, and adds the practice management layer (CRM, HRMS, billing, portal) that ClearTax doesn't. For individual taxpayers filing their own returns, ClearTax remains the simpler tool.",
    },
    {
      question: "Can CAGOS handle the GST filing depth ClearTax is known for?",
      answer:
        "CAGOS handles GSTR-1, 3B, 9, 9C, and the common reconciliations natively with direct GSTN integration. ClearTax has more mature handling of long-tail GST scenarios and a 10+ year edge case library — for typical CA firm workloads, CAGOS is sufficient; for highly complex GST consulting, ClearTax's depth still matters.",
    },
    {
      question: "What does it cost to switch from ClearTax to CAGOS?",
      answer:
        "Switching is free. CAGOS includes data migration from ClearTax client lists, historical filing data, and contact records as part of onboarding. Most firms migrate in under a week. The 14-day free trial lets you run both in parallel before committing.",
    },
    {
      question: "Does CAGOS work for solo practitioners or only larger firms?",
      answer:
        "CAGOS works for all firm sizes. The Solo plan starts at ₹999/mo with full feature access for one user and up to 50 clients. Most solo CAs find this cheaper than the equivalent ClearTax product stack (GST + ITR + separate CRM + billing).",
    },
    {
      question: "What about ClearOne, ClearTax's practice management product?",
      answer:
        "ClearOne is ClearTax's answer to practice management — it's a credible product. The biggest differences are: (1) CAGOS bundles HRMS natively; ClearOne doesn't. (2) CAGOS pricing is transparent and starts at ₹999/mo; ClearOne is Enterprise-quoted. (3) CAGOS client portals are white-labeled; ClearOne portals retain ClearTax branding.",
    },
    {
      question: "Can I use ClearTax for filing and CAGOS for practice management?",
      answer:
        "Yes — CAGOS's REST API and webhooks let you integrate it with whatever filing tool you prefer. Some firms use this hybrid during migration. Long-term, most consolidate onto one platform to avoid double data entry and reconciliation overhead.",
    },
    {
      question: "Is my client data safe during a ClearTax-to-CAGOS migration?",
      answer:
        "CAGOS is ISO 27001-aligned with AES-256 encryption at rest and TLS in transit. Migration imports happen over encrypted channels with audit trails. You retain full ownership of client data and can export at any time.",
    },
  ],
  lastVerified: "2026-05-11",
};

export const Route = createFileRoute("/vs/cleartax")({
  head: () =>
    seoHead({
      path: "/vs/cleartax",
      title: "CAGOS vs ClearTax: Which is Better for Indian CA Firms? (2026)",
      description:
        "Honest comparison of CAGOS and ClearTax for Indian CA firms — feature matrix, pricing, use cases, and which tool wins for solo, small, and mid-size practices.",
      ogTitle: "CAGOS vs ClearTax for CA Firms — Detailed Comparison",
      ogDescription:
        "ClearTax is great for individual taxpayers. CAGOS is built for CA firms. Side-by-side comparison of features, pricing, and use cases.",
      schema: [
        comparisonSchema({
          path: "/vs/cleartax",
          headline: "CAGOS vs ClearTax: Which is Better for Indian CA Firms?",
          description:
            "Comprehensive comparison of CAGOS and ClearTax across features, pricing, and CA firm use cases.",
          about: ["CAGOS", "ClearTax", "CA Practice Management Software", "GST Filing Software"],
          datePublished: "2026-05-11",
          dateModified: "2026-05-11",
        }),
        faqSchema(data.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
          { name: "vs ClearTax", path: "/vs/cleartax" },
        ]),
      ],
    }),
  component: ClearTaxVsPage,
});

function ClearTaxVsPage() {
  return <VsLayout data={data} />;
}
