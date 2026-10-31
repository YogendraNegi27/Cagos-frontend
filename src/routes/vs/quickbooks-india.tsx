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
    name: "QuickBooks India",
    slug: "quickbooks-india",
    tagline: "was Intuit's cloud accounting platform in India",
    foundedYear: "2012",
    bestFor: "(Was) SMBs doing their own cloud accounting in India",
  },
  hero: {
    eyebrow: "Migrating from QuickBooks India (discontinued)",
    headline: "Migrating off QuickBooks India? CAGOS for your CA firm + a clean migration path",
    subheadline:
      "Intuit discontinued QuickBooks Online in India effective 30 April 2023. If you're a CA firm whose clients were on QuickBooks India, you're now living with the migration. CAGOS can't replace QuickBooks for your client's books, but it can give you the firm-management layer you've been missing — and we'll help you point clients at the right successor.",
  },
  verdict: {
    summary:
      "QuickBooks India is no longer available — Intuit exited the Indian market in April 2023. If you're searching for a QuickBooks India alternative, you're really asking two questions: (1) what should my client's books move to (Zoho Books / Tally), and (2) what should run my CA firm. CAGOS answers question 2.",
    chooseCAGOSIf: [
      "You're a CA firm rebuilding your tech stack post-QuickBooks shutdown",
      "You want one product for CRM, workflow, billing, HRMS, and compliance",
      "You want your team off Excel + WhatsApp permanently",
      "You're treating the QuickBooks exit as the right moment to consolidate tools",
    ],
    chooseCompetitorIf: [
      "You're still hoping for a true QuickBooks-style cloud accounting product for the SMB itself — look at Zoho Books, Tally, or Vyapar (CAGOS isn't a books product)",
      "Your scope is purely SMB accounting, not CA firm management",
    ],
  },
  featureGroups: [
    {
      group: "What CAGOS covers (vs what QuickBooks did)",
      rows: [
        {
          label: "Cloud accounting / books for SMB",
          cagos: {
            value: "Not the use case",
            state: "no",
            note: "Use Zoho Books or Tally for client books",
          },
          competitor: {
            value: "Discontinued in India",
            state: "no",
            note: "Service ended April 2023",
          },
        },
        {
          label: "CA firm CRM",
          cagos: { value: "Built-in", state: "yes" },
          competitor: { value: "Never offered", state: "no" },
        },
        {
          label: "Multi-client compliance dashboard",
          cagos: {
            value: "Auto deadlines × every client",
            state: "yes",
          },
          competitor: { value: "Never offered", state: "no" },
        },
        {
          label: "GST / ITR filing engine",
          cagos: { value: "Native multi-client", state: "yes" },
          competitor: {
            value: "Limited to single org GST",
            state: "no",
          },
        },
        {
          label: "Article clerk HRMS + payroll",
          cagos: { value: "Built-in", state: "yes" },
          competitor: { value: "Never offered", state: "no" },
        },
        {
          label: "Firm retainer billing (UPI/RZP)",
          cagos: { value: "Native", state: "yes" },
          competitor: { value: "Single-org invoicing only", state: "partial" },
        },
        {
          label: "White-labeled client portal",
          cagos: { value: "Included", state: "yes" },
          competitor: { value: "Never offered", state: "no" },
        },
        {
          label: "REST API & webhooks",
          cagos: { value: "Public, documented", state: "yes" },
          competitor: { value: "Yes (while it was live)", state: "partial" },
        },
      ],
    },
    {
      group: "Migration support — moving CA firm off QuickBooks era stack",
      rows: [
        {
          label: "Client data import from QuickBooks exports",
          cagos: {
            value: "Supported via CSV/QBO/QBB imports",
            state: "yes",
            note: "Customer list, invoices, payments",
          },
          competitor: {
            value: "N/A — service ended",
            state: "no",
          },
        },
        {
          label: "Onboarding service for migration",
          cagos: {
            value: "Included on all plans",
            state: "yes",
            note: "Free migration support during 14-day trial",
          },
          competitor: { value: "N/A", state: "no" },
        },
        {
          label: "Guidance to move client books elsewhere",
          cagos: {
            value: "We help pick between Zoho Books / Tally / others",
            state: "yes",
          },
          competitor: { value: "N/A", state: "no" },
        },
      ],
    },
  ],
  pricing: [
    {
      plan: "Solo CA (post-QuickBooks)",
      cagos: "₹999/mo",
      competitor: "N/A — service discontinued",
    },
    {
      plan: "Small firm rebuilding stack",
      cagos: "₹3,999-7,999/mo CAGOS + (client picks own books tool)",
      competitor: "N/A",
    },
    {
      plan: "Mid-size firm consolidating",
      cagos: "Custom (~₹15-25k/mo)",
      competitor: "N/A",
    },
  ],
  scenarios: [
    {
      title: "Your CA firm used QuickBooks Accountant Edition before April 2023",
      description:
        "You've been improvising since. CAGOS rebuilds the practice management layer (CRM, workflow, compliance, billing) with India-specific compliance tracking that QuickBooks never had. Your clients' books should move to Zoho Books or Tally separately.",
      winner: "cagos",
    },
    {
      title: "Your clients still need cloud accounting after QuickBooks shutdown",
      description:
        "CAGOS is not a books-of-account product — we don't replace QuickBooks Online for SMB accounting. Point clients at Zoho Books (the closest QuickBooks-style cloud product in India), Tally (offline-heavy but deep), or RealBooks for slightly more complex SMBs.",
      winner: "competitor",
    },
    {
      title: "You want to consolidate post-migration to fewer tools",
      description:
        "Many firms emerged from the QuickBooks exit running 4-5 disconnected tools. CAGOS brings CRM + workflow + HRMS + billing + compliance back into one place, so your team stops bouncing between Excel, WhatsApp, Tally, and four browser tabs.",
      winner: "cagos",
    },
    {
      title: "You need India-specific compliance (GST, TDS, ROC, ICAI peer review)",
      description:
        "QuickBooks India was always limited on India-specific compliance — it was Intuit's global product adapted to India, which is part of why it was eventually wound down. CAGOS was built India-first.",
      winner: "cagos",
    },
  ],
  faqs: [
    {
      question: "What happened to QuickBooks Online India?",
      answer:
        "Intuit announced that QuickBooks Online would be discontinued in India effective 30 April 2023. Existing customers had to migrate to alternative products. The discontinuation cited operational and product-fit reasons in the Indian market.",
    },
    {
      question: "Is CAGOS a direct QuickBooks India replacement?",
      answer:
        "No — CAGOS is a CA firm practice management product, not SMB cloud accounting. If you need an SMB books-of-account replacement for QuickBooks, look at Zoho Books, Tally, or RealBooks. If you need to run your CA firm better post-QuickBooks, that's where CAGOS fits.",
    },
    {
      question: "What should I recommend to clients who lost QuickBooks?",
      answer:
        "For most SMBs the practical alternatives in India are Zoho Books (closest cloud product), Tally (offline-strong, deep features), or Vyapar (very small businesses). CAGOS can sit on top of any of these — your client picks their books tool, your firm runs on CAGOS.",
    },
    {
      question: "Can CAGOS import data from old QuickBooks exports?",
      answer:
        "Yes — CAGOS imports customer lists, GST registrations, and invoice data from QuickBooks .QBO/CSV exports. Your firm's client list can be onboarded in 1-2 days. The accounting transactions themselves should go to the client's new books-of-account tool.",
    },
    {
      question: "Is now a good time to switch firm management tools?",
      answer:
        "Most firms that exited QuickBooks ended up bolting together multiple tools (Tally + Excel + WhatsApp + Gmail + a CRM). Two-plus years in, that stack is creaking. The post-QuickBooks consolidation moment is a natural time to pick one practice management product and standardize. CAGOS was designed for this gap.",
    },
    {
      question: "What's the migration timeline?",
      answer:
        "For most CA firms (solo to small): 1-2 weeks. We import your client list, set up compliance calendars, configure workflows, and train your team during the 14-day free trial. Mid-size firms typically take 3-4 weeks for a full cutover with parallel running.",
    },
    {
      question: "Will CAGOS also disappear from India like QuickBooks did?",
      answer:
        "CAGOS is built in India for Indian CA firms by an Indian team — that's our entire focus. Intuit's QuickBooks decision was about Intuit's global priorities. Our product, customer base, and team are all India-resident, which is the structural reason this kind of exit is much less likely.",
    },
  ],
  lastVerified: "2026-05-11",
};

export const Route = createFileRoute("/vs/quickbooks-india")({
  head: () =>
    seoHead({
      path: "/vs/quickbooks-india",
      title: "QuickBooks India Alternative for CA Firms — Migrate to CAGOS (2026)",
      description:
        "QuickBooks Online India was discontinued in April 2023. CAGOS gives CA firms the practice management layer and a migration path off QuickBooks-era tooling.",
      ogTitle: "QuickBooks India Discontinued — CAGOS Migration Guide for CA Firms",
      ogDescription:
        "Intuit ended QuickBooks Online India service in April 2023. Here's how CAGOS fits into your firm's post-QuickBooks stack rebuild.",
      schema: [
        comparisonSchema({
          path: "/vs/quickbooks-india",
          headline:
            "Migrating from QuickBooks India to CAGOS for CA Firms",
          description:
            "Migration guide and comparison: CAGOS as the practice management replacement for CA firms exiting QuickBooks Online India.",
          about: [
            "CAGOS",
            "QuickBooks India",
            "QuickBooks Online",
            "CA Practice Management",
            "Intuit India",
          ],
          datePublished: "2026-05-11",
          dateModified: "2026-05-11",
        }),
        faqSchema(data.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
          { name: "vs QuickBooks India", path: "/vs/quickbooks-india" },
        ]),
      ],
    }),
  component: QuickBooksIndiaVsPage,
});

function QuickBooksIndiaVsPage() {
  return <VsLayout data={data} />;
}
