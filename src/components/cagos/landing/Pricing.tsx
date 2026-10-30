import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Star, User, TrendingUp, ShieldCheck,
  Settings, ShieldHalf, Headphones, Activity, Check,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "../primitives";

type TierKey = "starter" | "growth" | "enterprise" | "custom";

interface Tier {
  key: TierKey;
  tag: string;
  Icon: LucideIcon;
  name: string;
  desc: string;
  amount: string;
  period: string;
  billing: string;
  cta: string;
  ctaHref: "/register" | "/contact";
  features: string[];
  badge?: { label: string; style: "popular" | "value" };
}

const PRICING_TIERS: Tier[] = [
  {
    key: "starter",
    tag: "STARTER",
    Icon: User,
    name: "Starter",
    desc: "For solo practitioners just getting started with practice management.",
    amount: "₹2,499",
    period: "/month",
    billing: "Billed monthly",
    cta: "Start free trial",
    ctaHref: "/register",
    features: [
      "Up to 50 clients",
      "Client CRM (basic)",
      "Compliance calendar",
      "Document vault (10 GB)",
      "Invoicing (50/month)",
      "Workflow engine",
      "HRMS module",
      "White-label client portal",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  {
    key: "growth",
    tag: "GROWTH",
    Icon: TrendingUp,
    name: "Growth",
    desc: "For scaling firms with multiple partners and 100+ clients.",
    amount: "₹4,999",
    period: "/month",
    billing: "Billed monthly",
    cta: "Start free trial",
    ctaHref: "/register",
    features: [
      "Unlimited clients",
      "Full Client CRM",
      "Compliance deadline calendar",
      "Document vault (100 GB)",
      "Unlimited invoicing",
      "Full Workflow engine",
      "HRMS (up to 20 staff)",
      "Client portal (tenant slug)",
      "Reports dashboard",
      "Priority support (4hr SLA)",
    ],
    badge: { label: "MOST POPULAR", style: "popular" },
  },
  {
    key: "enterprise",
    tag: "ENTERPRISE",
    Icon: ShieldCheck,
    name: "Enterprise",
    desc: "For leading CA firms needing scale, advanced reporting, and a dedicated success manager.",
    amount: "₹9,999",
    period: "/month",
    billing: "Billed monthly",
    cta: "Talk to sales",
    ctaHref: "/contact",
    features: [
      "Unlimited clients",
      "Full Client CRM",
      "Compliance deadline calendar",
      "Unlimited document vault",
      "Unlimited invoicing",
      "Full Workflow engine",
      "HRMS (unlimited staff)",
      "Client portal (tenant slug)",
      "Advanced reports & exports",
      "Dedicated success manager",
    ],
    badge: { label: "BEST VALUE", style: "value" },
  },
  {
    key: "custom",
    tag: "CUSTOM",
    Icon: Settings,
    name: "Custom",
    desc: "For multi-tenant CA networks needing dedicated infrastructure, custom integrations and a bespoke SLA.",
    amount: "Let's talk",
    period: "",
    billing: "Annual contract",
    cta: "Talk to sales",
    ctaHref: "/contact",
    features: [
      "Everything in Enterprise",
      "Dedicated infrastructure",
      "Custom integrations",
      "BAA / DPA available",
      "Tenant-specific data residency",
      "Custom audit exports",
      "SAML SSO + SCIM",
      "Dedicated onboarding team",
      "Premium SLA (1hr response)",
      "Quarterly business reviews",
    ],
  },
];

const TRUST_BADGES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: ShieldHalf, title: "Enterprise-grade security", desc: "256-bit encryption · SOC 2 ready" },
  { Icon: Headphones, title: "Human support, always",    desc: "Real people. Real fast." },
  { Icon: Activity,   title: "99.9% uptime SLA",         desc: "Reliable. Always." },
];

export const Pricing = () => (
  <section className="pricing" id="pricing">
    <div className="grid-bg-full" style={{ maskImage: "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 80%)" }} />
    <div className="container" style={{ position: "relative" }}>
      <Reveal>
        <div className="price-eyebrow-pill">
          <Sparkles size={14} />
          ALL PLANS INCLUDE EVERY MODULE
        </div>
        <h2 className="h-section h-section-center price-headline">
          Choose the plan that fits your firm
        </h2>
        <p className="price-sub">
          Pick by <span className="price-sub-em">firm size</span>, not feature gates.
        </p>
      </Reveal>
      <div className="price-grid-v2">
        {PRICING_TIERS.map((tier, i) => (
          <Reveal key={tier.key} delay={60 + i * 80}>
            <div className={`price-card-v2 price-card-${tier.key}`}>
              {tier.badge ? (
                <span className={`price-floating-badge price-floating-badge-${tier.badge.style}`}>
                  {tier.badge.style === "popular" ? (
                    <Star size={10} fill="currentColor" strokeWidth={0} />
                  ) : null}
                  {tier.badge.label}
                </span>
              ) : null}
              <div className="price-card-head">
                <span className={`price-tag-v2 price-tag-${tier.key}`}>{tier.tag}</span>
                <span className="price-icon-tile">
                  <tier.Icon size={16} />
                </span>
              </div>
              <h3 className="price-name-v2">{tier.name}</h3>
              <p className="price-desc-v2">{tier.desc}</p>
              <div className="price-amount-block">
                <div className="price-amount-row-v2">
                  <span className={`price-amount-v2 ${tier.amount.startsWith("₹") ? "" : "price-amount-talk-v2"}`}>
                    {tier.amount}
                  </span>
                  {tier.period ? <span className="price-period-v2">{tier.period}</span> : null}
                </div>
                <div className="price-billing-v2">{tier.billing}</div>
              </div>
              <Link
                to={tier.ctaHref}
                className={`price-cta price-cta-${tier.key}`}
              >
                {tier.cta}
                {tier.key === "growth" ? <ArrowRight size={16} strokeWidth={2.5} /> : null}
              </Link>
              <div className="price-included-row">
                <span>WHAT&apos;S INCLUDED</span>
                <span className="price-included-line" />
              </div>
              <ul className="price-features-v2">
                {tier.features.map((f) => (
                  <li key={f} className="price-feat-v2">
                    <span className={`price-check-v2 price-check-${tier.key}`}>
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="price-trust-row">
        {TRUST_BADGES.map(({ Icon, title, desc }) => (
          <div key={title} className="price-trust-item">
            <span className="price-trust-icon">
              <Icon size={20} />
            </span>
            <div>
              <div className="price-trust-title">{title}</div>
              <div className="price-trust-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
