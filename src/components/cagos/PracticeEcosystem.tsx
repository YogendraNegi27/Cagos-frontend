import {
  CalendarDays,
  FileCheck2,
  ClipboardList,
  Landmark,
  Users,
  Receipt,
  Workflow,
  FolderLock,
} from "lucide-react";
import {
  ColorfulBentoGrid,
  type BentoFeatureCard,
} from "@/components/ui/colorful-bento-grid";

const practiceCards: BentoFeatureCard[] = [
  {
    id: "compliance",
    category: "Compliance",
    title: "Every deadline. In view.",
    description: "Keep tax work moving, from preparation to review.",
    icon: CalendarDays,
    to: "/products/compliance",
    featured: true,
    features: [
      { label: "GST", to: "/products/compliance", icon: CalendarDays },
      { label: "Income Tax", to: "/products/compliance", icon: FileCheck2 },
      { label: "TDS", to: "/products/compliance", icon: ClipboardList },
      { label: "ROC", to: "/products/compliance", icon: Landmark },
    ],
  },
  {
    id: "clients",
    category: "Clients",
    title: "Closer to your clients.",
    description: "One place for every client relationship.",
    icon: Users,
    to: "/products/client-crm",
    features: [
      { label: "Client CRM", to: "/products/client-crm" },
      { label: "Client portal", to: "/products/client-crm" },
      { label: "Onboarding", to: "/products/client-crm" },
    ],
  },
  {
    id: "billing",
    category: "Billing",
    title: "Less chasing. Clearer billing.",
    description: "From the first invoice to the final payment.",
    icon: Receipt,
    to: "/products/billing",
    features: [
      { label: "GST invoicing", to: "/products/billing" },
      { label: "Retainers", to: "/products/billing" },
      { label: "Collections", to: "/products/billing" },
    ],
  },
  {
    id: "team",
    category: "Your team",
    title: "Good work. In sync.",
    description: "Clear ownership, from task to review.",
    icon: Workflow,
    to: "/products/workflow",
    features: [
      { label: "Team workflows", to: "/products/workflow" },
      { label: "Review stages", to: "/products/workflow" },
      { label: "Time tracking", to: "/products/workflow" },
      { label: "HRMS", to: "/products/hrms" },
    ],
  },
  {
    id: "documents",
    category: "Documents",
    title: "Everything in its place.",
    description: "Client files and requests, organised.",
    icon: FolderLock,
    to: "/products/document-vault",
    features: [
      { label: "Document vault", to: "/products/document-vault" },
      { label: "Document requests", to: "/products/document-vault" },
    ],
  },
];

export function PracticeEcosystem() {
  return (
    <ColorfulBentoGrid
      id="practice-ecosystem"
      title="Your practice. Better connected."
      cards={practiceCards}
    />
  );
}
