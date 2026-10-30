
import {
  Zap,
  Globe,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Calendar,
} from "lucide-react";

import { useInView } from "../../../hooks/useInView";

const solutions = [
  {
    title: "Automated Onboarding",
    desc: "KYC, engagement letters, and initial document collection handled automatically.",
    icon: Zap,
  },
  {
    title: "Role-Based Access",
    desc: "Partners see firm-wide dashboards; staff see only their assigned clients and modules.",
    icon: Globe,
  },
  {
    title: "Client Portal",
    desc: "Give clients a dedicated login on your CAGos sub-domain to upload documents, pay invoices and chat with your team.",
    icon: ShieldCheck,
  },
];

export function SolutionsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className={`text-brand-400 font-bold tracking-widest uppercase text-sm ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Advanced Solutions</h2>
          <h3 className={`text-4xl md:text-5xl font-extrabold leading-tight ${inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>Automation that <span className="text-brand-500">Thinks</span> with you</h3>
          <p className={`text-xl text-slate-400 leading-relaxed ${inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
            Stop chasing clients for documents. Our automated marketplace and onboarding flows handle the grunt work so you can focus on high-value advisory.
          </p>

          <div className="space-y-6">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: inView ? `${200 * idx}ms` : "0ms" }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <sol.icon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">{sol.title}</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative ${inView ? "animate-fade-in animation-delay-600" : "opacity-0"}`}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-3xl bg-brand-500/10 border border-brand-500/20 p-6 flex flex-col justify-end group hover:bg-brand-500 transition-all duration-500">
                <MessageSquare className="w-8 h-8 text-brand-500 mb-4 group-hover:text-white" />
                <p className="font-bold text-lg group-hover:text-white">Smart CRM</p>
              </div>
              <div className="h-64 rounded-3xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end group hover:bg-blue-500 transition-all duration-500">
                <BarChart3 className="w-8 h-8 text-blue-500 mb-4 group-hover:text-white" />
                <p className="font-bold text-lg group-hover:text-white">Analytics</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-3xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end group hover:bg-blue-500 transition-all duration-500">
                <ShieldCheck className="w-8 h-8 text-blue-500 mb-4 group-hover:text-white" />
                <p className="font-bold text-lg group-hover:text-white">Compliance</p>
              </div>
              <div className="h-48 rounded-3xl bg-brand-500/10 border border-brand-500/20 p-6 flex flex-col justify-end group hover:bg-brand-500 transition-all duration-500">
                <Calendar className="w-8 h-8 text-brand-500 mb-4 group-hover:text-white" />
                <p className="font-bold text-lg group-hover:text-white">Workflow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
