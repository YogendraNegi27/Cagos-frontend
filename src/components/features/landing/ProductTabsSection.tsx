import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  MessageSquare,
  ShieldCheck,
  Briefcase,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  Building2,
  CheckCircle,
  Globe2,
  HardHat,
} from "lucide-react";

import { useInView } from "../../../hooks/useInView";

const tabs = [
  {
    id: "crm" as const,
    label: "Client CRM",
    icon: MessageSquare,
    tagline: "Your entire client book, intelligently organized.",
    headline: "Manage every client relationship from one powerful hub",
    desc: "From the first inquiry to year-end filings, CAGos keeps every interaction, document, and deadline organized in one place. No more spreadsheets, no more missed follow-ups.",
    features: [
      "360° client profile with engagement history",
      "Automated follow-up reminders & smart nudges",
      "Document checklist & digital signature requests",
      "Lead pipeline with conversion tracking",
      "Client health scores & activity feed",
    ],
    stats: [
      { value: "3x", label: "Faster client onboarding" },
      { value: "60%", label: "Reduction in follow-up time" },
    ],
    accent: "brand",
    visual: [
      { label: "Mehta & Associates", status: "Active", score: 98, tasks: 3, icon: Building2 },
      { label: "Sharma Corp", status: "Review", score: 74, tasks: 7, icon: BarChart3 },
      { label: "Joshi Exports", status: "Active", score: 91, tasks: 1, icon: Globe2 },
      { label: "Patel Holdings", status: "Pending", score: 62, tasks: 12, icon: HardHat },
    ],
  },
  {
    id: "compliance" as const,
    label: "Compliance Hub",
    icon: ShieldCheck,
    tagline: "Zero missed deadlines. Ever.",
    headline: "Compliance deadline tracking for GST, ITR, ROC & TDS",
    desc: "CAGos keeps every compliance obligation across your client base on one calendar — sending proactive reminders to your team before deadlines, not after.",
    features: [
      "Auto-populated GST deadline calendar for all clients",
      "ITR deadline reminders with workflow stage tracking",
      "ROC annual return & MCA due-date tracking",
      "TDS/TCS due date management",
      "Penalty-prevention alert system",
    ],
    stats: [
      { value: "100%", label: "On-time filing rate (avg)" },
      { value: "₹0", label: "Penalty exposure for users" },
    ],
    accent: "emerald",
    visual: [
      { label: "GSTR-3B", date: "Apr 20", status: "Due in 3 days", urgent: true },
      { label: "GSTR-1", date: "Apr 11", status: "Filed ✓", urgent: false },
      { label: "ITR-1 (Clients)", date: "Jul 31", status: "In Progress", urgent: false },
      { label: "ROC Filing", date: "Sep 30", status: "Not Started", urgent: false },
      { label: "TDS Return Q4", date: "May 31", status: "Scheduled", urgent: false },
    ],
  },
  {
    id: "billing" as const,
    label: "Billing & Invoicing",
    icon: Briefcase,
    tagline: "Get paid faster. Every time.",
    headline: "Automated invoicing, collections, and payment reconciliation",
    desc: "Create professional invoices, automate recurring billing, and collect payments via Razorpay — UPI, cards, net banking, and NACH — directly within CAGos.",
    features: [
      "Recurring invoice automation with smart scheduling",
      "Razorpay payment links shareable over email or WhatsApp",
      "NACH e-mandates for retainer-style recurring billing",
      "GST-compliant invoice PDFs (GSTIN, HSN, SAC)",
      "Built-in refunds, partial payments & reconciliation",
    ],
    stats: [
      { value: "42%", label: "Faster payment collection" },
      { value: "₹42Cr+", label: "Processed via platform" },
    ],
    accent: "blue",
    visual: [
      { id: "INV-001", client: "Mehta & Co", amount: "₹15,000", status: "Paid", date: "2 mins ago" },
      { id: "INV-002", client: "Sharma Corp", amount: "₹28,500", status: "Pending", date: "Due Today" },
      { id: "INV-003", client: "Joshi Exports", amount: "₹12,200", status: "Overdue", date: "3 days ago" },
      { id: "INV-004", client: "Patel Holdings", amount: "₹45,000", status: "Paid", date: "Yesterday" },
    ],
  },
  {
    id: "workflow" as const,
    label: "Workflow Engine",
    icon: Zap,
    tagline: "The task manager built for accountants.",
    headline: "Assign, track, and complete work across your entire team",
    desc: "Kanban boards, Gantt charts, recurring task templates, and smart workload balancing — CAGos keeps your team moving without the chaos.",
    features: [
      "Drag-and-drop Kanban boards per engagement",
      "Recurring task templates (monthly, quarterly, annual)",
      "Team workload visibility & capacity planning",
      "Client-facing task status sharing (optional)",
      "Time tracking & billing integration",
    ],
    stats: [
      { value: "2x", label: "Team productivity gain" },
      { value: "85%", label: "On-time task completion" },
    ],
    accent: "amber",
    visual: [
      { task: "GSTR-3B Filing", team: "Sunil", progress: 85, stage: "Review" },
      { task: "Statutory Audit", team: "Anjali", progress: 40, stage: "In Progress" },
      { task: "TDS Computation", team: "Rohan", progress: 100, stage: "Done ✓" },
      { task: "ROC Annual Return", team: "Priya", progress: 15, stage: "To Do" },
    ],
  },
  {
    id: "hrms" as const,
    label: "HRMS",
    icon: Users,
    tagline: "Your staff deserves more than Excel.",
    headline: "End-to-end HR management built for CA firms",
    desc: "Onboard staff, manage leaves, run payroll, and track performance — all within CAGos. No more siloed HR tools.",
    features: [
      "Employee onboarding with digital document collection",
      "Leave management with approval workflows",
      "Statutory payroll with PF, ESI, TDS deductions",
      "Performance review cycles & goal tracking",
      "Attendance management & timesheet sync",
    ],
    stats: [
      { value: "12hrs", label: "Saved on payroll per month" },
      { value: "100%", label: "PF/ESI compliance" },
    ],
    accent: "purple",
    visual: [
      // Initials rather than emoji faces — matches the avatar treatment in
      // HeroSection and avoids four near-identical person glyphs.
      { name: "Sunil Verma", role: "Senior Associate", leave: "On Leave", initials: "SV" },
      { name: "Anjali Gupta", role: "Article Clerk", leave: "Present", initials: "AG" },
      { name: "Rohan Das", role: "Manager", leave: "Present", initials: "RD" },
      { name: "Priya Singh", role: "Junior Accountant", leave: "Work from Home", initials: "PS" },
    ],
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    icon: BarChart3,
    tagline: "Data that actually drives decisions.",
    headline: "Revenue intelligence & practice performance insights",
    desc: "From client profitability to staff utilization, CAGos surfaces the metrics that matter — so you can grow your firm with confidence, not guesswork.",
    features: [
      "Revenue by client, partner, and service line",
      "Staff utilization & billing efficiency reports",
      "Client health score trends & churn risk alerts",
      "Compliance success rate by filing type",
      "Custom dashboard builder with exportable reports",
    ],
    stats: [
      { value: "38%", label: "Average revenue growth reported" },
      { value: "15+", label: "Pre-built report templates" },
    ],
    accent: "rose",
    visual: [
      { month: "Jan", rev: 3.2 },
      { month: "Feb", rev: 4.1 },
      { month: "Mar", rev: 3.8 },
      { month: "Apr", rev: 5.2 },
    ],
  },
];

const accentMap: Record<string, { tab: string; badge: string; check: string; stat: string; statBg: string }> = {
  brand:   { tab: "text-brand-400 border-brand-400",   badge: "bg-brand-500/10 text-brand-400 border-brand-500/20",   check: "text-brand-400",  stat: "text-brand-400",  statBg: "bg-brand-500/8" },
  emerald: { tab: "text-blue-400  border-blue-400",    badge: "bg-blue-500/10  text-blue-400  border-blue-500/20",    check: "text-blue-400",   stat: "text-blue-400",   statBg: "bg-blue-500/8" },
  blue:    { tab: "text-blue-400  border-blue-400",    badge: "bg-blue-500/10  text-blue-400  border-blue-500/20",    check: "text-blue-400",   stat: "text-blue-400",   statBg: "bg-blue-500/8" },
  amber:   { tab: "text-amber-400 border-amber-400",   badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",   check: "text-amber-400",  stat: "text-amber-400",  statBg: "bg-amber-500/8" },
  purple:  { tab: "text-purple-400 border-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",check: "text-purple-400", stat: "text-purple-400", statBg: "bg-purple-500/8" },
  rose:    { tab: "text-rose-400  border-rose-400",    badge: "bg-rose-500/10  text-rose-400  border-rose-500/20",    check: "text-rose-400",   stat: "text-rose-400",   statBg: "bg-rose-500/8" },
};

export function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05 });
  const tab = tabs[activeTab];
  const colors = accentMap[tab.accent];

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className={`text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-4">
          Everything in one platform
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
          Built for every part of{" "}
          <span className="text-gradient-teal">your practice</span>
        </h2>
        <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore the modules that power India&apos;s fastest-growing CA firms. No separate apps, no data silos.
        </p>
      </div>

      {/* Tab bar */}
      <div className={`flex overflow-x-auto gap-2 border-b border-white/8 mb-12 pb-0 ${inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
        {tabs.map((t, idx) => {
          const Icon = t.icon;
          const active = idx === activeTab;
          const ac = accentMap[t.accent];
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                active
                  ? `${ac.tab} bg-white/3`
                  : "text-slate-500 border-transparent hover:text-slate-300 hover:border-white/20"
              }`}
            >
              <Icon className="w-4 h-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className={`grid lg:grid-cols-2 gap-12 items-start ${inView ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`} key={activeTab}>
        {/* Left: text */}
        <div className="space-y-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${colors.badge}`}>
            {tab.tagline}
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            {tab.headline}
          </h3>
          <p className="text-slate-400 leading-relaxed">{tab.desc}</p>

          <ul className="space-y-3">
            {tab.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <CheckCircle className={`w-5 h-5 ${colors.check} mt-0.5 flex-shrink-0`} />
                <span className="text-slate-300 text-sm">{feat}</span>
              </li>
            ))}
          </ul>

          <div className={`grid grid-cols-2 gap-4 p-5 rounded-2xl ${colors.statBg} border border-white/8`}>
            {tab.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className={`text-3xl font-extrabold ${colors.stat}`}>{s.value}</p>
                <p className="text-xs text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:gap-3 transition-all"
          >
            Explore {tab.label} in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right: visual mockup */}
        <div className="bg-[#0d1628] rounded-2xl p-6 border border-white/8 min-h-[380px] relative overflow-hidden shadow-2xl shadow-black/40">
          {tab.id === "crm" && tab.visual && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-slate-900">Client List</p>
                <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-1 rounded-full border border-brand-200">342 Active</span>
              </div>
              {tab.visual.map((client) => (
                <div key={client.label} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm card-lift">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    {React.createElement(client.icon, { className: "w-5 h-5 text-brand-600" })}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{client.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                        <div className="bg-brand-500 h-1.5 rounded-full" style={{ width: `${client.score}%` }} />
                      </div>
                      <span className="text-xs text-slate-500">{client.score} health score</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${client.status === "Active" ? "bg-brand-50 text-brand-700" : client.status === "Review" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                      {client.status}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">{client.tasks} tasks</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab.id === "compliance" && tab.visual && (
            <div className="space-y-3 relative h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-slate-900">Compliance Calendar</p>
                <span className="text-xs font-semibold bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">1 Urgent</span>
              </div>
              {tab.visual.map((item) => (
                <div key={item.label} className={`flex items-center justify-between bg-white rounded-xl p-4 border shadow-sm ${item.urgent ? "border-amber-300 bg-amber-50/30" : "border-slate-100"}`}>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Due: {item.date}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.urgent ? "bg-amber-500 text-white" : item.status.includes("✓") ? "bg-brand-50 text-brand-700" : "bg-slate-100 text-slate-600"}`}>
                    {item.status}
                  </span>
                </div>
              ))}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl animate-float-element border-4 border-white transform rotate-3">
                 <p className="text-[10px] font-bold uppercase tracking-wider">Efficiency Gain</p>
                 <p className="text-xl font-black">+70%</p>
              </div>
            </div>
          )}

          {tab.id === "billing" && tab.visual && (
            <div className="space-y-3 relative h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-slate-900">Collections Summary</p>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+42% Collection speed</span>
              </div>
              {tab.visual.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between bg-white rounded-xl p-4 border border-slate-100 shadow-sm card-lift">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-bold">
                         {inv.id.split('-')[1]}
                      </div>
                      <div>
                         <p className="font-bold text-slate-900 text-sm">{inv.client}</p>
                         <p className="text-[10px] text-slate-400">{inv.date}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="font-bold text-slate-900 text-sm">{inv.amount}</p>
                      <span className={`text-[10px] font-bold ${inv.status === 'Paid' ? 'text-emerald-500' : inv.status === 'Overdue' ? 'text-red-500' : 'text-amber-500'}`}>{inv.status}</span>
                   </div>
                </div>
              ))}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl animate-float-element border-4 border-white transform -rotate-3">
                 <p className="text-[10px] font-bold uppercase tracking-wider">Workload Reduced</p>
                 <p className="text-xl font-black">70%</p>
              </div>
            </div>
          )}

          {tab.id === "workflow" && tab.visual && (
            <div className="space-y-4 relative h-full">
               <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-slate-900">Team Kanban</p>
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-50 bg-slate-200" />)}
                </div>
              </div>
              {tab.visual.map((item) => (
                <div key={item.task} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm space-y-3">
                   <div className="flex justify-between items-start">
                      <p className="font-bold text-slate-900 text-sm">{item.task}</p>
                      <span className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">{item.stage}</span>
                   </div>
                   <div className="flex items-center gap-3 font-semibold text-[10px] text-slate-500">
                      <span>Owner: {item.team}</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-500" style={{ width: `${item.progress}%` }} />
                      </div>
                      <span>{item.progress}%</span>
                   </div>
                </div>
              ))}
              <div className="absolute top-1/2 -right-4 bg-brand-600 text-white p-4 rounded-full shadow-2xl animate-pulse-glow border-4 border-white">
                 <p className="text-xs font-black">70% FASTER</p>
              </div>
            </div>
          )}

          {tab.id === "hrms" && tab.visual && (
            <div className="space-y-3 relative h-full">
               <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-slate-900">Articles & Staff</p>
                <Link to="/register" className="text-xs font-bold text-purple-600">+ Add Member</Link>
              </div>
              <div className="grid grid-cols-1 gap-3">
                 {tab.visual.map((staff) => (
                   <div key={staff.name} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-xs font-extrabold text-purple-700">{staff.initials}</div>
                      <div className="flex-1">
                         <p className="font-bold text-slate-900 text-sm">{staff.name}</p>
                         <p className="text-[10px] text-slate-500">{staff.role}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${staff.leave === 'Present' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{staff.leave}</span>
                   </div>
                 ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700">
                 <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold">Monthly Payroll</p>
                    <span className="text-[10px] text-emerald-400">100% Tax Compliant</span>
                 </div>
                 <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 animate-grow-width w-[90%]" />
                 </div>
                 <p className="text-[10px] text-slate-400 mt-2">Saved 12 hrs this month on calculations.</p>
              </div>
            </div>
          )}

          {tab.id === "analytics" && tab.visual && (
            <div className="h-full flex flex-col relative">
               <div className="flex items-center justify-between mb-6">
                 <div>
                    <p className="font-bold text-slate-900">Revenue Growth</p>
                    <p className="text-[10px] text-slate-500">Practice-wide performance</p>
                 </div>
                 <div className="text-right">
                    <p className="text-sm font-bold text-rose-600">+38%</p>
                    <p className="text-[10px] text-slate-400">Annual growth</p>
                 </div>
               </div>
               
               <div className="flex-1 flex items-end gap-3 px-2 mb-8 h-40">
                  {tab.visual.map((v, i: number) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                       <div 
                        className="w-full bg-rose-500/20 rounded-t-lg relative group overflow-hidden" 
                        style={{ height: `${v.rev * 20}%` }}
                       >
                          <div className="absolute inset-0 bg-rose-500 animate-grow-height" style={{ animationDelay: `${i * 200}ms` }} />
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[9px] px-2 py-0.5 rounded font-bold">₹{v.rev}L</div>
                       </div>
                       <span className="text-[10px] font-bold text-slate-500 uppercase">{v.month}</span>
                    </div>
                  ))}
               </div>

               <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                     <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Billing Eff.</p>
                     <p className="text-lg font-black text-rose-600">92%</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                     <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Capacity</p>
                     <p className="text-lg font-black text-blue-600">74%</p>
                  </div>
               </div>
               
               <div className="absolute -top-4 -right-4 bg-brand-600 text-white p-3 rounded-2xl shadow-xl animate-float-element border-4 border-white rotate-6">
                  <p className="text-[10px] font-black leading-tight">70% SMARTER<br/>DECISIONS</p>
               </div>
            </div>
          )}

          {!tab.visual && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                {React.createElement(tab.icon, { className: "w-16 h-16 text-slate-300 mx-auto" })}
                <p className="text-slate-400 font-medium text-sm max-w-xs">
                  Live preview of your {tab.label} dashboard — available after signing up.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-bold hover:bg-brand-700 transition-all"
                >
                  Try for free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
