import {
  CalendarDays,
  Users,
  Receipt,
  FolderLock,
  Workflow,
  ContactRound,
} from "lucide-react";
import {
  FerrisWheelGallery,
  type FerrisWheelItem,
} from "../ui/ferris-wheel-gallery";
import "./practice-tools-gallery.css";

// Add each real product screenshot as `src` when available.
const tools: FerrisWheelItem[] = [
  {
    id: "compliance",
    title: "Compliance",
    discipline: "GST · ITR · TDS · ROC",
    icon: CalendarDays,
    alt: "CAGOS workspace preview",
    description:
      "Bring GST, ITR, TDS and ROC work into one organised view. Assign owners, track preparation and keep reviews moving.",
    href: "/products/compliance",
    linkLabel: "Explore compliance",
  },
  {
    id: "clients",
    title: "Client CRM",
    shortTitle: "Clients",
    discipline: "Relationships · Follow-ups · Onboarding",
    icon: Users,
    alt: "CAGOS workspace preview",
    description:
      "Keep client details, service history and your next steps together. Give every relationship the attention it deserves.",
    href: "/products/client-crm",
    linkLabel: "Explore client CRM",
  },
  {
    id: "billing",
    title: "Billing & collections",
    shortTitle: "Billing",
    discipline: "Invoices · Retainers · Payments",
    icon: Receipt,
    alt: "CAGOS workspace preview",
    description:
      "Create GST invoices, manage retainers and follow payments from one place, with Razorpay payment collection.",
    href: "/products/billing",
    linkLabel: "Explore billing",
  },
  {
    id: "documents",
    title: "Document vault",
    shortTitle: "Documents",
    discipline: "Requests · Shared files · Client portal",
    icon: FolderLock,
    alt: "CAGOS workspace preview",
    description:
      "Keep client files together in a document vault, with clear requests and a dedicated client portal.",
    href: "/products/document-vault",
    linkLabel: "Explore documents",
  },
  {
    id: "workflow",
    title: "Team workflows",
    shortTitle: "Workflows",
    discipline: "Assignments · Reviews · Time tracking",
    icon: Workflow,
    alt: "CAGOS workspace preview",
    description:
      "Keep client work moving with a clear view of assignments, follow-ups and the time your team spends.",
    href: "/products/workflow",
    linkLabel: "Explore workflows",
  },
  {
    id: "people",
    title: "HRMS",
    discipline: "People · Attendance · Leave",
    icon: ContactRound,
    alt: "CAGOS workspace preview",
    description:
      "Bring your people and practice together. Keep your team's day-to-day administration connected with the work they do.",
    href: "/products/hrms",
    linkLabel: "Explore HRMS",
  },
];

export function PracticeToolsGallery() {
  return (
    <section
      className="ed-capabilities ed-wrap ed-section practice-tools-section"
      id="workspace"
      aria-labelledby="practice-tools-title"
    >
      <div className="ed-split-heading" data-reveal>
        <div>
          <p className="ed-eyebrow">ONE WORKSPACE. EVERY DETAIL CONNECTED.</p>
          <h2 id="practice-tools-title">
            One workspace.
            <br />
            <em>Six connected tools.</em>
          </h2>
        </div>
        <p>
          Scroll the wheel to explore the tools behind your everyday client
          work.
        </p>
      </div>
      <div className="practice-tools-card" data-reveal>
        <FerrisWheelGallery
          items={tools}
          className="cagos-ferris"
          aria-label="Explore six CAGOS practice tools"
        />
      </div>
    </section>
  );
}
