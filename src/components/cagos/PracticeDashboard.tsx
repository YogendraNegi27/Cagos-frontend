import {
  Bell,
  CalendarDays,
  Check,
  FileText,
  FolderLock,
  LayoutDashboard,
  Search,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";

export type DashboardVariant =
  "overview" | "compliance" | "clients" | "billing" | "documents";
// Presentation-only placeholders: replace with the real product media later.
const workspaces = {
  overview: {
    title: "A clearer view. A stronger practice.",
    name: "Practice overview",
    metrics: [
      ["Active clients", "128"],
      ["Tasks completed", "86"],
      ["Fees collected", "₹2.4L"],
      ["Awaiting review", "12"],
    ],
    rows: [
      ["GSTR-3B preparation", "Mehta Industries", "In progress"],
      ["ITR document review", "Kapoor & Co.", "In review"],
      ["Monthly retainer invoice", "Verma Enterprises", "Completed"],
      ["Client onboarding", "Shah & Associates", "In progress"],
    ],
    chart: "Collections overview",
  },
  compliance: {
    title: "Every deadline. Already on your radar.",
    name: "Compliance workspace",
    metrics: [
      ["Active workflows", "47"],
      ["In preparation", "23"],
      ["Ready for review", "12"],
      ["Completed", "86"],
    ],
    rows: [
      ["GSTR-3B preparation", "Mehta Industries", "In progress"],
      ["TDS return checklist", "Verma Enterprises", "In review"],
      ["ITR document collection", "Kapoor & Co.", "Completed"],
      ["ROC working papers", "Shah & Associates", "In progress"],
    ],
    chart: "Work completed",
  },
  clients: {
    title: "Every client. A little more connected.",
    name: "Client relationships",
    metrics: [
      ["Active clients", "128"],
      ["New this month", "8"],
      ["Follow-ups", "16"],
      ["Onboarding", "4"],
    ],
    rows: [
      ["Quarterly review", "Mehta Industries", "In progress"],
      ["Document follow-up", "Kapoor & Co.", "In review"],
      ["Client onboarding", "Verma Enterprises", "Completed"],
      ["Service renewal", "Shah & Associates", "In progress"],
    ],
    chart: "Client activity",
  },
  billing: {
    title: "Great work. Smoother collections.",
    name: "Billing & collections",
    metrics: [
      ["Fees collected", "₹2.4L"],
      ["Invoices paid", "58"],
      ["Outstanding", "₹84K"],
      ["Active retainers", "32"],
    ],
    rows: [
      ["Monthly GST retainer", "Mehta Industries", "Completed"],
      ["Tax advisory services", "Kapoor & Co.", "In review"],
      ["Audit engagement", "Verma Enterprises", "In progress"],
      ["Compliance retainer", "Shah & Associates", "Completed"],
    ],
    chart: "Monthly collections",
  },
  documents: {
    title: "The right file. Right where it belongs.",
    name: "Document vault",
    metrics: [
      ["Client folders", "128"],
      ["Requests sent", "24"],
      ["Received", "18"],
      ["To review", "6"],
    ],
    rows: [
      ["Bank statements", "Mehta Industries", "Completed"],
      ["Working paper review", "Kapoor & Co.", "In review"],
      ["Signed engagement letter", "Verma Enterprises", "Completed"],
      ["Form 16 request", "Shah & Associates", "In progress"],
    ],
    chart: "Documents received",
  },
} satisfies Record<
  DashboardVariant,
  {
    title: string;
    name: string;
    metrics: string[][];
    rows: string[][];
    chart: string;
  }
>;

export function PracticeDashboard({
  variant = "overview",
}: {
  variant?: DashboardVariant;
}) {
  const view = workspaces[variant];
  return (
    <div
      className="ed-dashboard"
      role="img"
      aria-label={`Illustrative CAGOS ${view.name.toLowerCase()}. All names and figures are sample data.`}
    >
      <div aria-hidden="true">
        <div className="ed-dash-top">
          <span className="ed-dash-wordmark">
            CAGOS<span> / </span>
            <span>Sharma & Associates</span>
          </span>
          <span className="ed-dash-search">
            <Search size={12} /> Search your workspace
          </span>
          <Bell size={14} />
          <span className="ed-avatar">AS</span>
        </div>
        <div className="ed-dash-body">
          <aside className="ed-dash-side">
            {[
              LayoutDashboard,
              Users,
              CalendarDays,
              Workflow,
              Wallet,
              FolderLock,
            ].map((Icon, i) => (
              <span key={i} className={i === 0 ? "is-current" : undefined}>
                <Icon size={17} />
              </span>
            ))}
          </aside>
          <div className="ed-dash-main">
            <div className="ed-dash-breadcrumb">
              Workspace <span>/</span> {view.name}
              <span className="ed-dash-period">This month</span>
            </div>
            <header className="ed-dash-heading">
              <div>
                <p>YOUR PRACTICE, AT A GLANCE</p>
                <h3>{view.title}</h3>
                <span>Clients, people and progress. All in one place.</span>
              </div>
              <span className="ed-dash-add">+ New task</span>
            </header>
            <div className="ed-dash-metrics">
              {view.metrics.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>
                    <span /> This month
                  </small>
                </div>
              ))}
            </div>
            <div className="ed-dash-panels">
              <section className="ed-dash-work">
                <header>
                  <strong>Your focus today</strong>
                  <span>View all</span>
                </header>
                <div className="ed-dash-table-head">
                  <span>CLIENT WORK</span>
                  <span>STATUS</span>
                </div>
                {view.rows.map(([title, client, status]) => (
                  <div className="ed-dash-row" key={title}>
                    <span
                      className={`ed-dash-check ${status === "Completed" ? "is-done" : ""}`}
                    >
                      {status === "Completed" ? (
                        <Check size={10} />
                      ) : (
                        <FileText size={10} />
                      )}
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <small>{client}</small>
                    </div>
                    <span
                      className={`ed-status ${status === "Completed" ? "is-done" : status === "In review" ? "is-review" : ""}`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </section>
              <section className="ed-dash-chart">
                <header>
                  <strong>{view.chart}</strong>
                  <span>6 months</span>
                </header>
                <b>
                  {variant === "overview" || variant === "billing"
                    ? "₹12.8L"
                    : "86"}
                  <small> ↗ This year</small>
                </b>
                <div className="ed-chart-bars">
                  {[32, 48, 39, 62, 54, 76, 65, 90, 78, 95, 83, 100].map(
                    (height, i) => (
                      <span key={i} style={{ height: `${height}%` }} />
                    ),
                  )}
                </div>
                <div className="ed-chart-axis">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                </div>
              </section>
            </div>
            <div className="ed-dash-foot">
              <span>
                <i /> Your practice, connected.
              </span>
              <span>Sample data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
