
import { Link } from "@tanstack/react-router";

import { useInView } from "../../../hooks/useInView";

export function CtaSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className={`bg-brand-500 rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-500/40 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">Ready to transform your practice?</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join hundreds of forward-thinking CA firms already using Growth OS to automate their operations and delight their clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
            <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-white text-brand-500 hover:bg-brand-50 rounded-2xl text-xl font-bold transition-all shadow-xl">
              Get Started for Free
            </Link>
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white hover:bg-brand-700 rounded-2xl text-xl font-bold transition-all border border-brand-400/30">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
