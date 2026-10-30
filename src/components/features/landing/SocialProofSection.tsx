
import { Globe, ShieldCheck, Briefcase, Users, Target } from "lucide-react";

import { useInView } from "../../../hooks/useInView";

export function SocialProofSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by 500+ Leading CA Firms across India</p>
      <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <Globe className="w-24 h-8" />
        <ShieldCheck className="w-24 h-8" />
        <Briefcase className="w-24 h-8" />
        <Users className="w-24 h-8" />
        <Target className="w-24 h-8" />
      </div>
    </div>
  );
}
