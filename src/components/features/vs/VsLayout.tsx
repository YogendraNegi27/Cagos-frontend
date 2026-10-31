import ScrollFAQAccordion from '@/components/ui/scroll-faqaccordion';
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  X,
  Minus,
  Trophy,
  Sparkles,
  Info,
} from "lucide-react";

import { MarketingPageShell } from "../../cagos/marketing/MarketingPageShell";

export interface Cell {
  value: string;
  state: "yes" | "no" | "partial" | "neutral";
  note?: string;
}

export interface VsPageData {
  competitor: {
    name: string;
    slug: string;
    tagline: string;
    foundedYear: string;
    bestFor: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  verdict: {
    summary: string;
    chooseCAGOSIf: string[];
    chooseCompetitorIf: string[];
  };
  featureGroups: {
    group: string;
    rows: {
      label: string;
      cagos: Cell;
      competitor: Cell;
    }[];
  }[];
  pricing: {
    plan: string;
    cagos: string;
    competitor: string;
    notes?: string;
  }[];
  scenarios: {
    title: string;
    description: string;
    winner: "cagos" | "competitor" | "tie";
  }[];
  faqs: { question: string; answer: string }[];
  lastVerified: string;
}

function CellRender({ cell }: { cell: Cell }) {
  const icon =
    cell.state === "yes" ? (
      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
    ) : cell.state === "no" ? (
      <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
    ) : cell.state === "partial" ? (
      <Minus className="w-5 h-5 text-amber-400 flex-shrink-0" />
    ) : (
      <span className="w-5 h-5 flex-shrink-0" />
    );

  return (
    <div className="flex items-start gap-2.5">
      {icon}
      <div>
        <p className="text-sm font-semibold text-white leading-snug">{cell.value}</p>
        {cell.note ? (
          <p className="text-xs text-slate-400 mt-0.5 leading-snug">{cell.note}</p>
        ) : null}
      </div>
    </div>
  );
}


export function VsLayout({ data }: { data: VsPageData }) {
  const competitorName = data.competitor.name;

  return (
    <MarketingPageShell>

      {/* HERO */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-semibold text-slate-300">
              {data.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            {data.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
            {data.hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-brand-500/30"
            >
              Start free 14-day trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#feature-matrix"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white rounded-xl font-bold transition-all"
            >
              Jump to comparison
            </a>
          </div>
        </div>
      </section>

      {/* TL;DR VERDICT CARD */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/8 via-canvas-900 to-teal-500/6 p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <h2 className="text-sm font-bold text-brand-400 uppercase tracking-wider">
                Quick verdict
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-white leading-snug mb-8">
              {data.verdict.summary}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  Choose CAGOS if
                </p>
                <ul className="space-y-2">
                  {data.verdict.chooseCAGOSIf.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  Choose {competitorName} if
                </p>
                <ul className="space-y-2">
                  {data.verdict.chooseCompetitorIf.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE MATRIX */}
      <section id="feature-matrix" className="px-6 pb-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            CAGOS vs {competitorName} — feature-by-feature
          </h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            {competitorName} {data.competitor.tagline.toLowerCase()} since{" "}
            {data.competitor.foundedYear}. CAGOS is built specifically for Indian CA firm
            workflows. Here&apos;s how the two stack up across the dimensions that matter
            for practice management.
          </p>

          <div className="space-y-8">
            {data.featureGroups.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-white/8 bg-white/2 overflow-hidden"
              >
                <div className="px-6 py-4 bg-white/3 border-b border-white/8">
                  <h3 className="text-base font-bold text-brand-400">
                    {group.group}
                  </h3>
                </div>
                <div className="divide-y divide-white/5">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 px-6 py-5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-300">
                          {row.label}
                        </p>
                      </div>
                      <div className="md:border-l md:border-white/5 md:pl-6">
                        <p className="text-xs font-bold text-brand-400 mb-1.5 md:hidden">
                          CAGOS
                        </p>
                        <p className="text-xs font-bold text-brand-400 mb-1.5 hidden md:block">
                          CAGOS
                        </p>
                        <CellRender cell={row.cagos} />
                      </div>
                      <div className="md:border-l md:border-white/5 md:pl-6">
                        <p className="text-xs font-bold text-slate-500 mb-1.5">
                          {competitorName}
                        </p>
                        <CellRender cell={row.competitor} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Pricing — CAGOS vs {competitorName}
          </h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Direct cost comparison for an Indian CA firm. Prices are publicly listed
            or based on typical quotes as of {data.lastVerified}.
          </p>

          <div className="rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr] px-6 py-4 bg-white/3 border-b border-white/8 text-xs font-bold uppercase tracking-wider text-slate-400">
              <p>Tier / Use case</p>
              <p className="text-brand-400">CAGOS</p>
              <p className="text-slate-500">{competitorName}</p>
            </div>
            <div className="divide-y divide-white/5">
              {data.pricing.map((p, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 px-6 py-5"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{p.plan}</p>
                    {p.notes ? (
                      <p className="text-xs text-slate-500 mt-1">{p.notes}</p>
                    ) : null}
                  </div>
                  <p className="text-sm text-emerald-300 font-semibold md:border-l md:border-white/5 md:pl-6">
                    {p.cagos}
                  </p>
                  <p className="text-sm text-slate-300 md:border-l md:border-white/5 md:pl-6">
                    {p.competitor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASE SCENARIOS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Which one wins in your scenario?
          </h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            The right tool depends on what you&apos;re trying to do. Here&apos;s how each
            performs across the most common CA-firm use cases.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {data.scenarios.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/2 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      s.winner === "cagos"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : s.winner === "competitor"
                        ? "bg-amber-500/15 text-amber-300"
                        : "bg-slate-500/15 text-slate-300"
                    }`}
                  >
                    {s.winner === "cagos"
                      ? "CAGOS wins"
                      : s.winner === "competitor"
                      ? `${competitorName} wins`
                      : "Tie"}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollFAQAccordion title="Frequently asked questions" data={data.faqs} />

      {/* DISCLAIMER */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/8 bg-white/2 p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Last verified: {data.lastVerified}.</strong>{" "}
            Competitor pricing, features, and product positioning change frequently —
            refer to {competitorName}&apos;s official site for the most current information.
            CAGOS&apos;s own pricing and feature set is documented at{" "}
            <Link to="/" className="text-brand-400 hover:underline">
              cagos.io
            </Link>
            . This comparison is intended as decision-support for prospective buyers,
            not as legal, financial, or vendor endorsement advice.
          </p>
        </div>
      </section>

      {/* CTA handled by MarketingPageShell FinalCTA */}
    </MarketingPageShell>
  );
}
