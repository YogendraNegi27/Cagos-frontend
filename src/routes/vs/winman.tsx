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
    name: "Winman",
    slug: "winman",
    tagline: "has been a CA-firm software specialist",
    foundedYear: "2002",
    bestFor: "Mid-size Indian CA firms doing high-volume ITR and audit filing",
  },
  hero: {
    eyebrow: "Winman alternative for modern CA firms",
    headline: "CAGos vs Winman: cloud-native practice management or desktop CA-ERP?",
    subheadline:
      "Winman has served Indian CA firms for two decades — its ITR and audit modules are deep and trusted. But it's a desktop-era product, and the cloud, mobile, and integration assumptions of a 2026 firm aren't its native habitat. Here's how the two compare honestly.",
  },
  verdict: {
    summary:
      "Winman is mature filing software with a CA-firm DNA — its ITR and audit depth is excellent. CAGos is a cloud-native firm OS — its CRM, workflow, HRMS, and client portal are excellent. If you're starting fresh or modernizing, CAGos. If you're an established Winman shop happy with desktop workflows, the migration cost is real.",
    chooseCagosIf: [
      "You want cloud-native access (laptop, mobile, branch office)",
      "You need integrated CRM, HRMS, billing, and client portal in one product",
      "Your team is younger and prefers web-first UX over Windows-only software",
      "You want a REST API and webhooks for custom integrations",
      "You're a new or growing firm choosing your first practice management stack",
    ],
    chooseCompetitorIf: [
      "Your firm has been on Winman 5+ years and the team is fluent in its workflows",
      "Your primary need is the deepest possible ITR / audit filing functionality",
      "You prefer one-time license + AMC over subscription",
      "You don't need CRM, HRMS, client portal — only filing software",
    ],
  },
  featureGroups: [
    {
      group: "Deployment & access",
      rows: [
        {
          label: "Cloud-native",
          cagos: { value: "Yes (Cloudflare edge)", state: "yes" },
          competitor: {
            value: "Desktop-first",
            state: "partial",
            note: "Winman Cloud offered separately; core remains Windows-centric",
          },
        },
        {
          label: "Mobile / web access",
          cagos: { value: "Full mobile + web", state: "yes" },
          competitor: {
            value: "Limited",
            state: "no",
            note: "View-only mobile companions, no full functionality",
          },
        },
        {
          label: "Multi-branch firm support",
          cagos: { value: "Native + RBAC", state: "yes" },
          competitor: {
            value: "Per-license per machine",
            state: "partial",
            note: "Each branch typically needs its own license",
          },
        },
        {
          label: "Setup time",
          cagos: { value: "Same-day, zero install", state: "yes" },
          competitor: {
            value: "Install + license activation per workstation",
            state: "partial",
          },
        },
      ],
    },
    {
      group: "Practice management",
      rows: [
        {
          label: "Client CRM with master profiles",
          cagos: {
            value: "Native CRM with interaction timeline",
            state: "yes",
          },
          competitor: {
            value: "Client master only",
            state: "partial",
            note: "Demographic data without interaction tracking",
          },
        },
        {
          label: "Task & workflow management",
          cagos: {
            value: "Kanban + SLA + escalations",
            state: "yes",
          },
          competitor: {
            value: "Job register / status",
            state: "partial",
            note: "Status tracking, not workflow automation",
          },
        },
        {
          label: "HRMS for article clerks & staff",
          cagos: {
            value: "Attendance + payroll + payslips + ICAI reports",
            state: "yes",
          },
          competitor: {
            value: "Not offered",
            state: "no",
          },
        },
        {
          label: "Firm billing (recurring retainers, UPI)",
          cagos: {
            value: "Native + payment gateway",
            state: "yes",
          },
          competitor: {
            value: "Invoicing add-on",
            state: "partial",
            note: "Manual collections, no integrated UPI/RZP",
          },
        },
        {
          label: "White-labeled client portal",
          cagos: { value: "Included", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Document e-signature",
          cagos: { value: "Built-in", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
      ],
    },
    {
      group: "Compliance & filing",
      rows: [
        {
          label: "ITR filing depth (ITR-1 to ITR-7)",
          cagos: {
            value: "All forms supported",
            state: "yes",
            note: "Workflow-driven across types",
          },
          competitor: {
            value: "Deep + battle-tested",
            state: "yes",
            note: "Two decades of edge cases — strongest area",
          },
        },
        {
          label: "GST filing & reconciliation",
          cagos: {
            value: "GSTR-1, 3B, 9, 9C with GSTN integration",
            state: "yes",
          },
          competitor: {
            value: "Winman GST module",
            state: "yes",
            note: "Mature feature set, priced separately",
          },
        },
        {
          label: "TDS, ROC, audit working papers",
          cagos: {
            value: "Unified across compliance hub",
            state: "yes",
          },
          competitor: {
            value: "Separate Winman modules",
            state: "yes",
            note: "Strong audit module, especially for statutory audit firms",
          },
        },
        {
          label: "Multi-client deadline dashboard",
          cagos: {
            value: "Auto-generated × every client",
            state: "yes",
          },
          competitor: {
            value: "Within each module",
            state: "partial",
            note: "Cross-module view requires manual aggregation",
          },
        },
      ],
    },
    {
      group: "Modern stack capabilities",
      rows: [
        {
          label: "REST API & webhooks",
          cagos: { value: "Public, documented", state: "yes" },
          competitor: { value: "Not offered", state: "no" },
        },
        {
          label: "Real-time collaboration",
          cagos: {
            value: "Multi-user, same record, live",
            state: "yes",
          },
          competitor: {
            value: "Sequential editing",
            state: "partial",
            note: "Common in desktop-era software",
          },
        },
        {
          label: "Audit log / activity trail",
          cagos: {
            value: "Built-in for every action",
            state: "yes",
          },
          competitor: {
            value: "Module-level",
            state: "partial",
          },
        },
      ],
    },
  ],
  pricing: [
    {
      plan: "Solo CA",
      cagos: "₹999/mo (~₹12k/yr)",
      competitor: "₹6,000-12,000/yr ITR + ₹6,000+/yr GST per user",
      notes:
        "Winman modules priced à la carte. Adding CRM/HRMS/billing on top requires 3rd-party tools.",
    },
    {
      plan: "Small firm (5 users)",
      cagos: "₹3,999-7,999/mo bundle",
      competitor: "₹50,000-1,00,000+/yr across ITR/GST/CA-ERP modules",
      notes: "Multi-user Winman + CA-ERP typically lands here.",
    },
    {
      plan: "Mid-size firm (20 users, multi-branch)",
      cagos: "Custom (~₹15-25k/mo)",
      competitor:
        "₹2-5 lakh/yr Winman + ₹50k-1L/yr for missing CRM/HRMS/billing tools",
      notes: "Comparable annual spend once you add the missing pieces to Winman.",
    },
  ],
  scenarios: [
    {
      title: "You're an audit firm doing 200+ statutory audits a year",
      description:
        "Winman's audit module has been refined over 20 years — workpaper templates, evidence linking, ICAI peer review prep are deep. CAGos covers audit engagements well but doesn't have Winman's edge-case maturity. For a pure-audit firm, Winman's depth is hard to match.",
      winner: "competitor",
    },
    {
      title: "You're starting a new CA firm in 2026",
      description:
        "CAGos gives you everything new firms need in one cloud product — CRM, workflow, billing, HRMS, compliance, portal. Setting up a new firm on Winman + Tally + Zoho People + custom Excel is what most legacy firms did; the choice now is whether to repeat that or consolidate.",
      winner: "cagos",
    },
    {
      title: "Your team is hybrid / multi-branch / works from home",
      description:
        "CAGos's cloud-native model is built for this. Winman's desktop-first architecture means each workstation needs setup, license activation, and VPN to share files. Real-time multi-user collaboration on the same client is much harder on desktop.",
      winner: "cagos",
    },
    {
      title: "You handle 500+ ITRs per season at high volume",
      description:
        "Both work. Winman's ITR engine is exceptionally fast and well-known to practitioners. CAGos handles the volume too and adds workflow automation (bulk document collection, client follow-ups, status pipeline). Depends on whether filing speed or firm-level workflow is your bottleneck.",
      winner: "tie",
    },
    {
      title: "You want one product for the whole firm",
      description:
        "CAGos is consolidating. Winman is filing-focused — for CRM, HRMS, client portal, and modern billing, you'd add separate tools. Most mid-size firms running Winman also run 2-4 other tools alongside it.",
      winner: "cagos",
    },
    {
      title: "Your team has used Winman for 10+ years",
      description:
        "Switching cost is real. Your team knows Winman's keyboard shortcuts, forms, and reports. CAGos onboarding usually takes 1-2 weeks for proficiency. If your team is productive on Winman and you don't need cloud or firm management features, staying is rational.",
      winner: "competitor",
    },
  ],
  faqs: [
    {
      question: "Is CAGos a replacement for Winman, or a complement?",
      answer:
        "For most firms, CAGos can replace Winman entirely — it covers ITR, GST, TDS, ROC, audit, and adds CRM/HRMS/billing/portal. Where Winman still leads is filing depth for unusual ITR/audit scenarios its 20-year customer base has encountered. Standard CA-firm workflows are well-covered by CAGos.",
    },
    {
      question: "Can CAGos import data from Winman?",
      answer:
        "Yes. CAGos imports client masters, ITR historical data, GST registrations, and compliance histories from Winman's export formats. Migration is typically completed in 1-2 weeks; many firms run both in parallel during the first filing season after switching.",
    },
    {
      question: "Does CAGos handle the audit module that Winman is known for?",
      answer:
        "CAGos provides audit engagement management — checklists, structured workpapers, evidence linking, client data matrices, and ICAI peer-review-ready audit trails. Winman's audit module has 20 years of edge-case maturity; CAGos covers the standard cases well. For pure audit firms doing heavy statutory audit work, Winman's depth may still be the right fit.",
    },
    {
      question: "Why move from desktop to cloud?",
      answer:
        "Three reasons most firms cite: (1) Hybrid/remote work — your team accesses everything from any device. (2) Multi-branch — no more emailing .800 files between offices. (3) Real-time collaboration — two team members work on the same client without locking each other out. Plus zero install burden when you add a new staff member.",
    },
    {
      question: "Is the cloud secure for client data?",
      answer:
        "CAGos is ISO 27001-aligned with AES-256 encryption at rest, TLS in transit, and SOC 2-style audit logging. Data is stored on Cloudflare's India edge with no third-country transit. For most firms, this is materially better than desktop file shares on local NAS or USB drives.",
    },
    {
      question: "What's the total cost of ownership difference?",
      answer:
        "Year 1: CAGos is usually 20-40% cheaper because Winman charges per module (ITR + GST + audit + ERP) and you add 3rd-party CRM/HRMS/billing. Years 2-5: comparable. Where CAGos consistently saves is the avoided 'tool sprawl' cost — running 5 products is more expensive than running 1 in licensing, integration time, and team training.",
    },
    {
      question: "Can I keep Winman for audit and use CAGos for everything else?",
      answer:
        "Yes — CAGos's API allows two-way sync with external filing tools. Some firms keep Winman's audit module while moving CRM/HRMS/billing/compliance tracking to CAGos. Long-term most consolidate to reduce stack complexity.",
    },
  ],
  lastVerified: "2026-05-11",
};

export const Route = createFileRoute("/vs/winman")({
  head: () =>
    seoHead({
      path: "/vs/winman",
      title: "CAGos vs Winman: Cloud Practice Management vs Desktop CA-ERP (2026)",
      description:
        "Detailed comparison of CAGos and Winman for Indian CA firms — feature matrix, pricing, deployment models, and which one wins for solo, small, and mid-size firms.",
      ogTitle: "CAGos vs Winman — A Modern CA Firm's Comparison",
      ogDescription:
        "Winman is mature desktop filing software. CAGos is cloud-native practice management. See the side-by-side feature matrix and pricing.",
      schema: [
        comparisonSchema({
          path: "/vs/winman",
          headline: "CAGos vs Winman for Indian CA Firms",
          description:
            "Comparison of CAGos and Winman across filing, practice management, deployment, and pricing for Indian CA firms.",
          about: ["CAGos", "Winman", "CA-ERP", "Practice Management Software India"],
          datePublished: "2026-05-11",
          dateModified: "2026-05-11",
        }),
        faqSchema(data.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs" },
          { name: "vs Winman", path: "/vs/winman" },
        ]),
      ],
    }),
  component: WinmanVsPage,
});

function WinmanVsPage() {
  return <VsLayout data={data} />;
}
