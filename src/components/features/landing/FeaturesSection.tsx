
import {
  MessageSquare,
  ShieldCheck,
  Zap,
  Briefcase,
  Globe,
  Users,
  ChevronRight,
} from "lucide-react";

import { useInView } from "../../../hooks/useInView";

const features = [
  {
    title: "Client CRM",
    desc: "A centralized hub for all client communications, documents, and historical data. Never lose a lead again.",
    icon: MessageSquare,
    color: "brand",
  },
  {
    title: "Compliance Engine",
    desc: "Automated tracking of GST, Income Tax, and ROC deadlines. Get proactive alerts before they become penalties.",
    icon: ShieldCheck,
    color: "blue",
  },
  {
    title: "Workflow Engine",
    desc: "Assign tasks, track progress, and manage team workloads with visual boards and Gantt charts.",
    icon: Zap,
    color: "amber",
  },
  {
    title: "Billing & Collections",
    desc: "Automated recurring invoices, payment reminders, and seamless payment gateway integrations.",
    icon: Briefcase,
    color: "blue",
  },
  {
    title: "Digital Marketplace",
    desc: "Launch your own digital store for professional services. Onboard clients automatically 24/7.",
    icon: Globe,
    color: "purple",
  },
  {
    title: "Secure Document Vault",
    desc: "Bank-grade security for sensitive client documents with built-in e-signature capabilities.",
    icon: Users,
    color: "rose",
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-20">
        <h2 className={`text-brand-600 font-bold tracking-widest uppercase text-sm ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Powerful Capabilities</h2>
        <h3 className={`text-4xl md:text-5xl font-extrabold text-slate-900 ${inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>Everything you need to <span className="text-brand-500">Grow</span></h3>
        <p className={`text-xl text-slate-500 max-w-2xl mx-auto ${inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>One platform, zero friction. Designed for partners, managers, and associates.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/5 transition-all group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: inView ? `${200 * idx}ms` : "0ms" }}
          >
            <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-50 flex items-center justify-center text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
            <p className="text-slate-500 leading-relaxed mb-6">{feature.desc}</p>
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:gap-3 transition-all">
              Learn more
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
