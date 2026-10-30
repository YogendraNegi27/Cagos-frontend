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
    name: "Zoho Books",
    slug: "zoho-books",
    tagline: "has been a cloud accounting platform",
    foundedYear: "2011",
    bestFor: "SMBs doing their own cloud accounting",
  },
  hero: {
    eyebrow: "Zoho Books alternative for CA firms",
    headline: "CAGos vs Zoho Books: practice management for CA firms vs accounting for SMBs",
    subheadline:
      "Zoho Books is a beautifully designed cloud accounting product for SMBs. CAGos is a practice management product for the CA firms managing those SMBs. The customer is fundamentally different, and so is everything about the product. Here's the comparison.",
  },
  verdict: {
    summary:
      "Zoho Books is built for the business; CAGos is built for the CA firm. They aren't direct competitors — your clients should be on Zoho Books (or Tally), and your firm should be on CAGos. The few CA firms that try to run their practice on Zoho Books outgrow it within months.",
    chooseCagosIf: [
      "You're a CA firm managing 25+ client engagements",
      "You need CRM, workflow, billing, HRMS, compliance tracking",
      "Your clients are on different accounting tools (Tally, Zoho, manual) — you need a layer above all of them",
      "You want white-labeled client portals branded as your firm",
      "You're running a firm, not a single business",
    ],
    chooseCompetitorIf: [
      "You're an SMB doing your own books (not a CA firm)",
      "Your clients want a single cloud accounting product to run their own business",
      "You're already deep in the Zoho One ecosystem (CRM, Mail, Desk, Inventory)",
      "Your scope is invoicing, expense tracking, and bank reconciliation for one entity",
    ],
  },
  featureGroups: [
    {
      group: "Who it's built for",
      rows: [
        {
          label: "Primary user",
          cagos: {
            value: "CA firm partners, staff, article clerks",
            state: "yes",
          },
          competitor: {
            value: "SMB business owners",
            state: "yes",
          },
        },
        {
          label: "Scope",
          cagos: { value: "Firm operations across many clients", state: "yes" },
          competitor: { value: "Books-of-account for one business", state: "yes" },
        },
        {
          label: "Multi-client by design",
          cagos: { value: "Yes — every feature is multi-client", state: "yes" },
          competitor: {
            value: "Single-org product",
            state: "partial",
            note: "Zoho Books Accountant Edition allows multi-org but with limits",
          },
        },
      ],
    },
    {
      group: "Practice management",
      rows: [
        {
          label: "Client CRM with master profiles",
          cagos: { value: "Native CRM with timeline", state: "yes" },
          competitor: {
            value: "Customer/vendor records only",
            state: "no",
            note: "Built for the SMB's own customers, not the CA's clients",
          },
        },
        {
          label: "Task / workflow across clients",
          cagos: { value: "Kanban + SLA + escalation", state: "yes" },
          competitor: {
            value: "Tasks within accounting context",
            state: "no",
          },
        },
        {
          label: "Multi-client compliance dashboard",
          cagos: {
            value: "Native — every client × every filing",
            state: "yes",
          },
          competitor: {
            value: "Per-org GST reports",
            state: "no",
          },
        },
        {
          label: "HRMS for article clerks & staff",
          cagos: { value: "Built-in", state: "yes" },
          competitor: {
            value: "Use Zoho People",
            state: "partial",
            note: "Sold separately within Zoho One ecosystem",
          },
        },
        {
          label: "Retainer billing for the firm",
          cagos: {
            value: "Recurring retainers + UPI/RZP",
            state: "yes",
          },
          competitor: {
            value: "Yes for business invoices",
            state: "partial",
            note: "Recurring works, but for client deliverables, not firm-level pipeline",
          },
        },
        {
          label: "White-labeled client portal",
          cagos: { value: "Full white-label", state: "yes" },
          competitor: {
            value: "Customer portal",
            state: "partial",
            note: "Client portal exists; branding flexibility is limited",
          },
        },
      ],
    },
    {
      group: "Accounting & filing",
      rows: [
        {
          label: "Double-entry accounting / ledger",
          cagos: {
            value: "Not the focus",
            state: "no",
            note: "CAGos manages firm operations; client books live elsewhere",
          },
          competitor: {
            value: "Core product — well-built",
            state: "yes",
          },
        },
        {
          label: "Invoicing for client's business",
          cagos: { value: "Not the use case", state: "no" },
          competitor: { value: "Strong feature set", state: "yes" },
        },
        {
          label: "GST e-invoicing & filing",
          cagos: {
            value: "Multi-client GST filing engine",
            state: "yes",
          },
          competitor: {
            value: "Single-org e-invoicing + GSTR-1 push",
            state: "partial",
            note: "Built for the org's own GST, not multi-client filing",
          },
        },
        {
          label: "ITR / TDS / ROC filing",
          cagos: { value: "Workflow + filing engine", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Bank reconciliation",
          cagos: { value: "Not the focus", state: "no" },
          competitor: {
            value: "Auto-feed + reconciliation",
            state: "yes",
          },
        },
      ],
    },
    {
      group: "Ecosystem & pricing",
      rows: [
        {
          label: "Standalone product",
          cagos: { value: "Yes — focused", state: "yes" },
          competitor: {
            value: "Part of Zoho One",
            state: "partial",
            note: "Best value if you adopt many Zoho products",
          },
        },
        {
          label: "API & integrations",
          cagos: { value: "REST + webhooks public", state: "yes" },
          competitor: {
            value: "Deep API ecosystem",
            state: "yes",
          },
        },
        {
          label: "Pricing model",
          cagos: {
            value: "Per firm (multi-user, multi-client)",
            state: "yes",
          },
          competitor: {
            value: "Per org tier × accountant edition",
            state: "partial",
            note: "Pricing scales with number of client orgs",
          },
        },
      ],
    },
  ],
  pricing: [
    {
      plan: "Solo CA / individual SMB",
      cagos: "₹999/mo full CA firm bundle",
      competitor:
        "Zoho Books free up to ₹25L turnover, then ₹749-₹4,999/mo per org",
      notes:
        "Zoho Books cost scales with the client's business, not the CA firm's size.",
    },
    {
      plan: "CA firm with 50 clients",
      cagos: "₹999-₹3,999/mo flat for firm",
      competitor:
        "Zoho Books Accountant Edition + ₹749+/mo × 50 clients (if firm pays)",
      notes:
        "Most CA firms don't pay for the client's Zoho Books — the client does. But you lose practice management without a separate tool.",
    },
    {
      plan: "Firm with 5 staff + 200 clients",
      cagos: "₹3,999-7,999/mo bundle",
      competitor:
        "Zoho Books Accountant + Zoho People + Zoho CRM + Zoho Desk ≈ ₹15,000-25,000+/mo",
      notes: "Once you assemble the missing pieces from Zoho One, costs converge.",
    },
  ],
  scenarios: [
    {
      title: "Your client wants cloud accounting software for their business",
      description:
        "Zoho Books is one of the best cloud accounting products in India — bank feeds, invoicing, GST, e-invoicing, inventory, expense tracking. Your client should be on Zoho Books (or Tally). This is what Zoho Books is built for.",
      winner: "competitor",
    },
    {
      title: "You're a CA firm with 100+ client engagements",
      description:
        "Zoho Books's Accountant Edition lets you view client books, but it isn't a practice management product — no CRM, no firm-level workflow, no compliance dashboard across clients, no HRMS, no white-labeled portal. You'd end up running Zoho Books + Zoho CRM + Zoho People + Zoho Desk to approximate what CAGos does in one.",
      winner: "cagos",
    },
    {
      title: "Your firm is deeply embedded in Zoho One",
      description:
        "If you use Zoho CRM, Zoho People, Zoho Mail, and Zoho Desk already, sticking inside the ecosystem has real value (single sign-on, unified data, ₹3,000/user/mo Zoho One pricing). But you'll still be assembling a CA-specific practice management on top of generic Zoho products.",
      winner: "competitor",
    },
    {
      title: "You want to bill your CA clients on retainers and collect via UPI",
      description:
        "CAGos handles this natively — recurring retainer invoices, UPI/RZP collection, automated reminders. Zoho Books can do recurring invoicing for any business including a CA firm, but it doesn't integrate with the firm's compliance work pipeline.",
      winner: "cagos",
    },
    {
      title: "You need automated compliance tracking across all clients",
      description:
        "CAGos auto-generates GST/ITR/TDS/ROC deadlines for every client and tracks status across the firm. Zoho Books generates GST reports for the org it's installed in — multi-client compliance tracking isn't its design.",
      winner: "cagos",
    },
    {
      title: "Your clients' GST + e-invoicing is your top pain",
      description:
        "Both work, but for different scopes. CAGos files GST for clients from the CA firm. Zoho Books files GST from inside the client's own books. Most modern firms do both — clients on Zoho Books, firm on CAGos.",
      winner: "tie",
    },
  ],
  faqs: [
    {
      question: "Should my CA firm use Zoho Books or CAGos?",
      answer:
        "If your goal is to maintain books for one business, Zoho Books. If your goal is to manage a CA firm with many clients, CAGos. They solve different problems. Many firms use both — clients on Zoho Books, firm on CAGos.",
    },
    {
      question: "What is Zoho Books Accountant Edition?",
      answer:
        "Zoho Books Accountant Edition gives CAs a dashboard to access multiple client Zoho Books accounts from one login. It's useful for review work. It is NOT a practice management product — no CRM, no firm-level workflow, no compliance tracker, no HRMS, no firm-side billing. CAGos provides those.",
    },
    {
      question: "Can CAGos integrate with Zoho Books?",
      answer:
        "Yes. CAGos can pull client data (GST filings status, invoices, ledger balances) from Zoho Books via API. This keeps the client's books in Zoho Books while CAGos manages the firm's engagement.",
    },
    {
      question: "Is CAGos similar to Zoho's Practice Management product?",
      answer:
        "Zoho has Practice product targeted at CA firms — it competes more directly with CAGos than Zoho Books does. CAGos is purpose-built for the Indian CA firm context (GST + ITR + ROC + ICAI peer review + article clerks); Zoho Practice is a more general accountant practice product. For Indian-specific workflows, CAGos tends to be a closer fit.",
    },
    {
      question: "Which is more affordable for a 5-person CA firm?",
      answer:
        "Year 1 raw costs are similar. CAGos: ₹3,999-7,999/mo all-in for the firm. Zoho stack (Books Accountant + People + CRM + Desk + Practice): ₹15,000-25,000+/mo. If you're already in Zoho One, the bundle pricing is competitive; if you're not, CAGos is cheaper and simpler.",
    },
    {
      question: "Can clients stay on Zoho Books while my firm runs on CAGos?",
      answer:
        "Yes — this is the most common pattern. CAGos doesn't replace your client's accounting tool; it adds the firm-management layer above it. The two products complement each other.",
    },
    {
      question: "Does CAGos have an invoicing product like Zoho Books?",
      answer:
        "CAGos has invoicing for the CA firm's own billings (client retainers, ad-hoc fees). It is NOT a general-purpose invoicing tool for SMB businesses — Zoho Books and Zoho Invoice are better for that. If your client needs invoicing, point them at Zoho.",
    },
  ],
  lastVerified: "2026-05-11",
};

export const Route = createFileRoute("/vs/zoho-books")({
  head: () =>
    seoHead({
      path: "/vs/zoho-books",
      title: "CAGos vs Zoho Books: Which is Right for Your CA Firm? (2026)",
      description:
        "Zoho Books is built for SMB accounting; CAGos is built for CA firm management. Side-by-side comparison of features, pricing, and use cases for Indian CAs.",
      ogTitle: "CAGos vs Zoho Books — Practice Management vs Cloud Accounting",
      ogDescription:
        "Zoho Books vs CAGos for Indian CA firms — feature matrix, pricing, and the scenarios where each one wins.",
      schema: [
        comparisonSchema({
          path: "/vs/zoho-books",
          headline: "CAGos vs Zoho Books for Indian CA Firms",
          description:
            "Comparison of CAGos and Zoho Books for Indian Chartered Accountants — features, pricing, and use cases.",
          about: ["CAGos", "Zoho Books", "Zoho One", "Cloud Accounting Software"],
          datePublished: "2026-05-11",
          dateModified: "2026-05-11",
        }),
        faqSchema(data.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
          { name: "vs Zoho Books", path: "/vs/zoho-books" },
        ]),
      ],
    }),
  component: ZohoBooksVsPage,
});

function ZohoBooksVsPage() {
  return <VsLayout data={data} />;
}
