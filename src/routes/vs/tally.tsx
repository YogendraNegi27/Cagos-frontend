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
    name: "Tally",
    slug: "tally",
    tagline: "has been the SMB accounting standard in India",
    foundedYear: "1986",
    bestFor: "SMB businesses doing their own accounting",
  },
  hero: {
    eyebrow: "Tally alternative for CA firms",
    headline: "CAGos vs Tally: an honest comparison for Indian CA firms",
    subheadline:
      "Tally is the most installed accounting software in India for a reason — it's deep, fast, and rock-solid for SMB books. But it was built for the business, not for the CA firm managing 200 businesses. If you're treating Tally as your practice management system, you're using a hammer as a screwdriver. Here's what changes.",
  },
  verdict: {
    summary:
      "Tally is exceptional client accounting software. CAGos is firm management software. Most CA firms need both — Tally (or successor) for client books, CAGos for the firm running on top. They solve different problems.",
    chooseCagosIf: [
      "You need a CRM, workflow tracker, billing system, and compliance hub for your firm",
      "You want cloud-first access from anywhere (laptop, phone, branch office)",
      "You manage staff attendance, leave, and payroll for article clerks and associates",
      "You're tired of running Tally on 12 different desktops with .800 files in WhatsApp",
      "You want client portals where clients upload documents and pay invoices",
    ],
    chooseCompetitorIf: [
      "You only need to maintain client books (the actual accounting ledger)",
      "Your firm and clients are deeply entrenched in TallyPrime workflows",
      "You prefer one-time license over subscription",
      "You need to handle complex SMB-specific accounting (inventory, manufacturing, branch-wise P&L for businesses)",
    ],
  },
  featureGroups: [
    {
      group: "What it's built for",
      rows: [
        {
          label: "Primary user",
          cagos: {
            value: "CA firm partners, staff & article clerks",
            state: "yes",
          },
          competitor: {
            value: "SMB business owners & accountants",
            state: "yes",
            note: "The CA firm uses it because the client does",
          },
        },
        {
          label: "Core problem solved",
          cagos: {
            value: "Practice management for CA firms",
            state: "yes",
          },
          competitor: {
            value: "Business accounting ledger",
            state: "yes",
          },
        },
        {
          label: "Deployment model",
          cagos: { value: "Cloud-native (multi-device)", state: "yes" },
          competitor: {
            value: "Desktop-first",
            state: "partial",
            note: "TallyPrime Edit Log + Tally Cloud add cloud, but core is desktop",
          },
        },
      ],
    },
    {
      group: "Practice management capabilities",
      rows: [
        {
          label: "Multi-client CRM",
          cagos: {
            value: "Native — one card per client",
            state: "yes",
            note: "PAN/TAN/GST, entity type, interaction log",
          },
          competitor: {
            value: "Not offered",
            state: "no",
            note: "Each client = a separate Tally company file",
          },
        },
        {
          label: "Task & SLA tracking across clients",
          cagos: { value: "Kanban + checklists + escalation", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Firm-side HRMS (article clerks)",
          cagos: {
            value: "Biometric attendance + payroll + payslips",
            state: "yes",
          },
          competitor: {
            value: "Tally PayrollPro for businesses",
            state: "partial",
            note: "Designed for the SMB's own payroll, not a CA firm's article clerks",
          },
        },
        {
          label: "Retainer billing for the CA firm",
          cagos: {
            value: "Native + recurring + UPI/RZP",
            state: "yes",
            note: "GST-compliant firm invoices",
          },
          competitor: {
            value: "Not for firm itself",
            state: "no",
            note: "Tally invoices are for the client's business, not the firm's billings",
          },
        },
        {
          label: "Client portal (your clients log in)",
          cagos: {
            value: "White-labeled portal included",
            state: "yes",
          },
          competitor: { value: "Not offered", state: "no" },
        },
      ],
    },
    {
      group: "Compliance & filing",
      rows: [
        {
          label: "GST filing (GSTR-1, 3B, 9, 9C)",
          cagos: { value: "Native filing engine", state: "yes" },
          competitor: {
            value: "Generates JSON only",
            state: "partial",
            note: "Filing happens via GSTN portal or third party",
          },
        },
        {
          label: "ITR filing for clients",
          cagos: { value: "Workflow + filing engine", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Multi-client compliance calendar",
          cagos: {
            value: "Auto-generated deadlines per client",
            state: "yes",
          },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Books of account / ledger",
          cagos: {
            value: "Not the focus",
            state: "no",
            note: "CAGos consumes client books; doesn't replace Tally's ledger",
          },
          competitor: {
            value: "Industry-standard depth",
            state: "yes",
            note: "Tally is the leader here",
          },
        },
      ],
    },
    {
      group: "Deployment & cost",
      rows: [
        {
          label: "Cost model",
          cagos: { value: "Subscription (₹999-₹15k/mo)", state: "yes" },
          competitor: {
            value: "One-time license + annual TSS",
            state: "partial",
            note: "Tally Silver ~₹18k, Gold ~₹54k + ~25% TSS/yr",
          },
        },
        {
          label: "Setup time",
          cagos: { value: "Same-day, no install", state: "yes" },
          competitor: {
            value: "Desktop install per machine",
            state: "partial",
          },
        },
        {
          label: "Access from any device",
          cagos: { value: "Web + mobile", state: "yes" },
          competitor: {
            value: "Limited",
            state: "partial",
            note: "Needs Tally Cloud / TallyPrime Server licensing",
          },
        },
        {
          label: "Multi-branch firm support",
          cagos: { value: "Native multi-branch + RBAC", state: "yes" },
          competitor: {
            value: "Per-license per machine",
            state: "no",
            note: "Each branch needs separate Tally license",
          },
        },
      ],
    },
  ],
  pricing: [
    {
      plan: "Solo CA (1 user)",
      cagos: "₹999/mo (~₹12k/yr)",
      competitor: "TallyPrime Silver ~₹18,000 one-time + ~₹4,500/yr TSS",
      notes:
        "Tally is cheaper after 3-4 years if you only need accounting. CAGos includes CRM/HRMS/billing — Tally needs separate tools for those.",
    },
    {
      plan: "Small firm (5 users)",
      cagos: "₹3,999-7,999/mo bundle",
      competitor: "TallyPrime Gold ~₹54,000 one-time + ~₹13,500/yr TSS + Tally Cloud",
      notes: "Multi-user Tally is one-license, but no firm management features.",
    },
    {
      plan: "Mid firm (20 users, multi-branch)",
      cagos: "Custom (~₹15-25k/mo)",
      competitor:
        "₹54k × N branches + Tally Server license + 3rd-party CRM/HRMS/billing",
      notes:
        "Adding the missing firm features (CRM/HRMS/billing) to Tally typically lands at ₹3-6 lakh/yr in stack costs.",
    },
  ],
  scenarios: [
    {
      title: "You only need to maintain client books",
      description:
        "Tally is the gold standard for SMB accounting in India. If your scope is purely books-of-account work and you don't need firm-side management, Tally remains the right choice.",
      winner: "competitor",
    },
    {
      title: "You manage 100+ clients and a team of 8",
      description:
        "CAGos is purpose-built for this. Tally has no CRM, no SLA tracking, no firm-side HRMS, no client portal, and no multi-client compliance dashboard. Most firms at this size end up running Tally + 4 other tools — CAGos consolidates that.",
      winner: "cagos",
    },
    {
      title: "You want clients to upload documents and pay invoices online",
      description:
        "CAGos client portals are white-labeled to your firm. Tally has no equivalent — clients send WhatsApp messages, you chase them on email, and pay via NEFT after manual invoice generation.",
      winner: "cagos",
    },
    {
      title: "Your articleship intake doubled and you're losing track of staff",
      description:
        "CAGos has biometric attendance, leave management, payroll, and ICAI articleship reports built in. Tally's payroll is for the SMB client's payroll, not your firm's article clerks.",
      winner: "cagos",
    },
    {
      title: "Your clients run on Tally and want to stay there",
      description:
        "That's fine. CAGos integrates with Tally exports — you keep client books in Tally, run firm operations in CAGos. Most firms run both in parallel.",
      winner: "tie",
    },
    {
      title: "You're a solo practitioner managing 30 retainer clients",
      description:
        "Tally alone leaves you tracking deadlines in Excel, sending invoices manually, and chasing documents over WhatsApp. CAGos's ₹999/mo Solo plan replaces those four tools.",
      winner: "cagos",
    },
  ],
  faqs: [
    {
      question: "Does CAGos replace Tally entirely?",
      answer:
        "For most CA firms, no — CAGos and Tally solve different problems. Tally maintains client books-of-account (the actual ledger); CAGos manages your firm's operations on top of those books. Many firms run both: Tally for client accounting work, CAGos for the firm itself.",
    },
    {
      question: "Can CAGos import data from TallyPrime?",
      answer:
        "Yes. CAGos imports client master data, GST registration details, and invoice histories from Tally exports (XML, JSON, CSV). The compliance tracker can also auto-generate deadlines based on imported client data without manual setup.",
    },
    {
      question: "Why is Tally one-time price but CAGos subscription?",
      answer:
        "Tally licenses a desktop app with annual TSS (Tally Software Services) for updates. CAGos is cloud-native with continuous updates, infrastructure, security, and support included. After 3-4 years the total cost of ownership is comparable; CAGos starts cheaper for the first 2-3 years and offers practice management features Tally doesn't have.",
    },
    {
      question: "Is Tally being replaced by cloud accounting tools?",
      answer:
        "Slowly, but Tally still has the dominant install base in Indian SMB accounting. The shift is gradual — Zoho Books, QuickBooks (until April 2023), and others have grown, but Tally's offline-first, deep-feature accounting still wins for many SMBs. CAGos doesn't try to replace Tally as the accounting engine; it sits on top as the firm management layer.",
    },
    {
      question: "Can CAGos handle inventory or manufacturing accounting?",
      answer:
        "No — those are Tally strengths and outside CAGos's scope. CAGos focuses on the CA firm running practice operations. If you need inventory/manufacturing accounting for a client, that client should be on Tally (or similar) and CAGos manages the engagement around it.",
    },
    {
      question: "What about TallyPrime's new cloud features?",
      answer:
        "Tally has been adding cloud features (Tally Cloud, TallyPrime Edit Log) — these add remote access on top of a desktop-first product. CAGos is cloud-native from day one, which generally means faster setup, multi-device access, real-time collaboration, and zero install burden across a multi-branch firm.",
    },
    {
      question: "Can my team use both Tally and CAGos without double data entry?",
      answer:
        "Yes — CAGos's API and Tally import flows are designed to avoid duplicate entry. Client master data, filing status, and invoice events sync. You don't re-key information that's already in Tally.",
    },
  ],
  lastVerified: "2026-05-11",
};

export const Route = createFileRoute("/vs/tally")({
  head: () =>
    seoHead({
      path: "/vs/tally",
      title: "CAGos vs Tally for CA Firms: Honest Comparison (2026)",
      description:
        "Tally is great for SMB accounting; CAGos is built for CA firm management. Detailed comparison of features, pricing, and use cases for Indian CA practices.",
      ogTitle: "CAGos vs Tally — A CA Firm's Honest Comparison",
      ogDescription:
        "Tally vs CAGos for Indian CA firms: feature matrix, pricing, and the scenarios where each one wins.",
      schema: [
        comparisonSchema({
          path: "/vs/tally",
          headline: "CAGos vs Tally for CA Firms",
          description:
            "Comparison of Tally and CAGos across firm management capabilities for Indian Chartered Accountants.",
          about: ["CAGos", "Tally", "TallyPrime", "CA Practice Management Software"],
          datePublished: "2026-05-11",
          dateModified: "2026-05-11",
        }),
        faqSchema(data.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
          { name: "vs Tally", path: "/vs/tally" },
        ]),
      ],
    }),
  component: TallyVsPage,
});

function TallyVsPage() {
  return <VsLayout data={data} />;
}
