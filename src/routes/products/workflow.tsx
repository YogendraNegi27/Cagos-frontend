import HowItWorks from '@/components/ui/how-it-works';
import FeaturesWithPanel from '@/components/ui/features-with-panel';
import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, LayoutDashboard, ListTodo, Clock, Users,
  RefreshCw, AlertTriangle, CheckCircle, Phone, Zap,
} from "lucide-react";

import { MarketingPageShell } from "../../components/cagos/marketing/MarketingPageShell";
import { seoHead, softwareApplicationSchema, breadcrumbSchema } from "../../lib/seo";

export const Route = createFileRoute("/products/workflow")({
  head: () =>
    seoHead({
      path: "/products/workflow",
      title: "Task & Workflow Management for CA Firms | Kanban, Checklists & SLA Tracking | CAGos",
      description:
        "CAGos Workflow Engine gives CA firms visual Kanban boards, sub-task checklists, SLA tracking, and automated escalation alerts. Stop losing track of client work.",
      ogTitle: "Workflow Engine for CA Firms | CAGos",
      ogDescription:
        "Assign, track, and deliver client work on time. CAGos Workflow gives your CA firm visual Kanban boards, checklists, and SLA alerts.",
      schema: [
        softwareApplicationSchema({
          name: "CAGos Workflow Engine",
          description:
            "Visual Kanban boards, sub-task checklists, SLA tracking, and automated escalation alerts for client work in Indian CA firms.",
          path: "/products/workflow",
          category: "BusinessApplication",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/workflow" },
          { name: "Workflow", path: "/products/workflow" },
        ]),
      ],
    }),
  component: WorkflowPage,
});

const features = [
  {
    icon: LayoutDashboard,
    color: "brand",
    title: "Visual Kanban Boards",
    desc: "See all client work in a drag-and-drop board — To Do, In Progress, Review, Done. Filter by client, CA, service type, or deadline.",
  },
  {
    icon: ListTodo,
    color: "teal",
    title: "Sub-task Checklists",
    desc: "Break any task into a step-by-step checklist. For ITR filing: PnL upload → Tax computation → Partner review → Client approval → Filing. Never skip a step.",
  },
  {
    icon: Clock,
    color: "violet",
    title: "SLA & Deadline Tracking",
    desc: "Set SLA targets for each service type. CAGos highlights tasks approaching SLA breach in amber and past SLA in red — automatically, no manual monitoring needed.",
  },
  {
    icon: Users,
    color: "blue",
    title: "Resource Allocation View",
    desc: "See each team member's workload across all clients in one view. Spot bottlenecks before they become delays and rebalance assignments in seconds.",
  },
  {
    icon: RefreshCw,
    color: "emerald",
    title: "Recurring Task Templates",
    desc: "Create templates for monthly GST filings, quarterly TDS, and annual ROC returns. Tasks auto-create on schedule — your team just picks them up and works.",
  },
  {
    icon: AlertTriangle,
    color: "amber",
    title: "Priority Escalation Alerts",
    desc: "When a task is overdue or approaching SLA breach, alerts go to the assigned CA, then to the senior, then to the partner — on a configurable escalation ladder.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create tasks from compliance or manually",
    desc: "Tasks can be auto-created from the Compliance Hub when a due date is set, or created manually in seconds. Assign an owner, set due date, and attach client.",
  },
  {
    num: "02",
    title: "Work through the checklist",
    desc: "The assigned CA opens the task, works through the sub-task checklist, and moves the card across the Kanban. Comments and files are attached in-line.",
  },
  {
    num: "03",
    title: "Review, close, and report",
    desc: "Senior CAs review and approve before closing. The task is logged in the audit trail. Monthly completion reports are auto-generated for partners.",
  },
];

const faqs = [
  {
    q: "Can tasks be linked to clients and compliance deadlines?",
    a: "Yes. When you create a compliance due date in the Compliance Hub, a task is automatically created in the Workflow Engine and assigned to the responsible CA. Everything stays in sync.",
  },
  {
    q: "Can clients see the status of their tasks?",
    a: "Clients can see a simplified progress view in the self-service portal — e.g., 'Your ITR is in review' — without seeing internal checklists or team notes.",
  },
  {
    q: "How many sub-tasks can I add to a task?",
    a: "There's no limit. You can have 2-step tasks or 20-step tasks with nested checklists. Templates can have pre-built checklists that auto-populate when the task is created.",
  },
  {
    q: "Does CAGos have time tracking built in?",
    a: "Basic time logging (start/stop timer per task) is available on Growth and above plans. We don't have billing-by-the-hour invoicing tied to time entries — that's on the roadmap.",
  },
  {
    q: "Can I customise the Kanban columns?",
    a: "Yes. The default stages are To Do, In Progress, Review, and Done. You can rename them, add stages, and configure which stages require a manager sign-off before moving forward.",
  },
];



function WorkflowPage() {
  return (
    <MarketingPageShell compactProduct>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Team&apos;s Work,{" "}
              <span className="text-gradient-teal">Organized and On Time</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Stop managing client tasks in WhatsApp groups and mental notes. CAGos gives your CA firm a visual workflow system — with Kanban boards, sub-task checklists, SLA tracking, and automatic escalations.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/register" className="glow-button px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                Start free for 14 days <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918010001234" className="glass px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" /> Talk to sales
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Kanban & list views", "SLA tracking", "Auto-escalation alerts"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Kanban Mockup */}
          <div className="relative hidden lg:block">
            <div className="glass-dark rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-white">May 2026 — Work Board</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>3 tasks due today</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* To Do Column */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">To Do</span>
                    <span className="text-xs bg-white/8 text-slate-400 rounded-full px-2 py-0.5">3</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "Company Incorp.", client: "Patel & Sons", urgent: false },
                      { title: "GST Audit FY26", client: "Rao Traders", urgent: true },
                    ].map((task, i) => (
                      <div key={i} className={`p-2.5 rounded-lg border text-left ${task.urgent ? "border-amber-500/30 bg-amber-500/8" : "border-white/8 bg-white/3"}`}>
                        <p className="text-xs font-semibold text-white leading-tight">{task.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{task.client}</p>
                        {task.urgent && <span className="text-xs text-amber-400 font-semibold">⚠ Due today</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress Column */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">In Progress</span>
                    <span className="text-xs bg-white/8 text-slate-400 rounded-full px-2 py-0.5">2</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "GSTR-3B May", client: "41 clients", assignee: "RS" },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-brand-500/30 bg-brand-500/8">
                        <p className="text-xs font-semibold text-white leading-tight">{task.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{task.client}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="w-5 h-5 rounded-full bg-brand-500/30 border border-brand-500/40 flex items-center justify-center text-xs font-bold text-brand-300">{task.assignee}</div>
                          <span className="text-xs text-slate-500">Assigned</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done Column */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Done</span>
                    <span className="text-xs bg-teal-500/15 text-teal-400 rounded-full px-2 py-0.5">12</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "TDS Return Q4", client: "Mehta Ltd" },
                      { title: "ITR — 8 clients", client: "Batch filing" },
                    ].map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg border border-teal-500/20 bg-teal-500/5">
                        <p className="text-xs font-semibold text-white leading-tight">{task.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{task.client}</p>
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400 mt-1.5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">87% on-time delivery rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "87%", label: "On-time task delivery" },
            { val: "12", label: "Avg open tasks per client" },
            { val: "3 min", label: "Avg time to create a task" },
            { val: "0", label: "Missed handoffs reported" },
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
            <span className="inline-block text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Every tool your team needs to deliver on time
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Built for CA firms where every task is a statutory deadline — not just a project note.
            </p>
          </div>
          <FeaturesWithPanel items={features} />
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">How it works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">From task creation to completion</h2>
          </div>
          <HowItWorks features={steps.map(step => ({ number: step.num, title: step.title, description: step.desc }))} />
        </div>
      </section>

      <ScrollFAQAccordion scrollDriven title="Common questions about Workflow Engine" data={faqs.map((item) => ({ question: item.q, answer: item.a }))} />

    </MarketingPageShell>
  );
}
