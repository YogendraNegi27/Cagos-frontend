import { useState } from "react";
import { ArrowRight, Plug, Code } from "lucide-react";

import { useInView } from "../../../hooks/useInView";
import { ThreeDCard } from "../../ui/ThreeDCard";

/* ─────────────────────────────────────────────────────────────
   Real-logo integration grid
   ────────────────────────────────────────────────────────────
   Each item declares a `domain` — the logo is loaded from the
   Clearbit Logo CDN (`https://logo.clearbit.com/<domain>`).
   On error we fall back to Google's favicon service, then to a
   coloured abbreviation badge so the grid never has broken images.
   ───────────────────────────────────────────────────────────── */

interface Integration {
  name: string;
  abbr: string;
  domain: string | null;       // null = no real logo, use icon/abbr
  color: string;               // brand colour (status dot + fallback bg)
  desc: string;
  imageUrl?: string;           // override: use this exact image instead of CDN lookup
}

const integrations: Integration[] = [
  { name: "Razorpay",   abbr: "RZ",  domain: "razorpay.com", color: "#3395FF", desc: "Payments" },
  { name: "WhatsApp",   abbr: "WA",  domain: "whatsapp.com", color: "#25D366", desc: "Share Links" },
  { name: "Resend",     abbr: "RS",  domain: "resend.com",   color: "#0F172A", desc: "Email" },
  { name: "Gmail",      abbr: "GM",  domain: "gmail.com",    color: "#EA4335", desc: "Email Inbox" },
];

const highlights = [
  "Razorpay-native billing — UPI, cards, net banking, NACH mandates",
  "Razorpay payment links shareable over email or WhatsApp",
  "Automated invoice email delivery with PDF attachment",
  "Built-in payment reconciliation and refund tracking",
];

/** Loads a brand logo with a fallback chain.
 *  Stages: 0 = explicit imageUrl (if provided), 1 = clearbit, 2 = google favicon, 3 = abbreviation/icon
 *  Items without imageUrl skip stage 0; items without a domain jump straight to abbreviation. */
function LogoBadge({ item }: { item: Integration }) {
  const initialStage = item.imageUrl ? 0 : item.domain ? 1 : 3;
  const [stage, setStage] = useState(initialStage);

  if (stage === 3) {
    return (
      <div
        className="w-full h-full rounded-lg flex items-center justify-center text-white font-black"
        style={{ backgroundColor: item.color }}
      >
        {item.abbr === "API" ? (
          <Code className="w-5 h-5" strokeWidth={2.5} />
        ) : (
          <span className="text-[10px] tracking-tight">{item.abbr}</span>
        )}
      </div>
    );
  }

  const src =
    stage === 0
      ? item.imageUrl!
      : stage === 1
      ? `https://logo.clearbit.com/${item.domain}?size=128`
      : `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`;

  return (
    <img
      src={src}
      alt={`${item.name} logo`}
      loading="lazy"
      width={48}
      height={48}
      className="w-full h-full object-contain"
      onError={() => setStage(item.domain || stage < 2 ? stage + 1 : 3)}
    />
  );
}

export function IntegrationsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* ── Left: copy ──────────────────────────────────── */}
        <div className="space-y-6">
          <span
            className={`inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Seamless Integrations
          </span>
          <h3
            className={`text-4xl md:text-5xl font-extrabold text-white leading-tight ${
              inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Works with every tool{" "}
            <span className="text-gradient-teal">Indian CAs use</span>
          </h3>
          <p
            className={`text-xl text-slate-400 leading-relaxed ${
              inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            CAGos plugs into Razorpay for end-to-end billing and into the email / WhatsApp
            share workflow your clients already use — no extra tools required.
          </p>
          <ul
            className={`space-y-3 ${inView ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}
          >
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                </div>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className={`inline-flex items-center gap-2 text-teal-400 font-bold hover:gap-3 transition-all text-sm ${
              inView ? "animate-fade-in-up animation-delay-700" : "opacity-0"
            }`}
          >
            <Plug className="w-4 h-4" />
            See what&apos;s included in every plan
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ── Right: integration grid with REAL logos + 3D tilt ─── */}
        <div
          className={`grid grid-cols-2 gap-4 max-w-md ${
            inView ? "animate-fade-in animation-delay-400" : "opacity-0"
          }`}
        >
          {integrations.map((item, idx) => (
            <ThreeDCard
              key={item.name}
              maxTilt={8}
              scale={1.04}
              glareColor="rgba(255,255,255,0.10)"
              className="rounded-2xl"
              style={{
                animation: inView ? `floatY 4s ease-in-out infinite` : undefined,
                animationDelay: `${(idx % 4) * 320}ms`,
              }}
            >
              <div
                className="integ-tile glass p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-white/8 transition-colors cursor-default group"
                style={{
                  // soft brand-coloured glow on hover via box-shadow
                  // (CSS variable so we can target it on :hover in styles.css)
                  ["--int-glow" as string]: `${item.color}30`,
                }}
              >
                {/* logo holder — white card with real brand image */}
                <div className="relative w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <LogoBadge item={item} />
                </div>

                <p className="text-[10px] font-bold text-center leading-tight text-slate-300">
                  {item.name}
                </p>
                <div className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[9px] uppercase tracking-wide text-slate-500 font-semibold">
                    {item.desc}
                  </span>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </div>
  );
}
