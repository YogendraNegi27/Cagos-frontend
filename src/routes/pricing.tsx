import { pricingFaqs } from '../lib/website-faqs';
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/cagos/Navbar";
import { Pricing, FAQ, FinalCTA, Footer, MadeWidget } from "../components/cagos/landing";
import { seoHead, breadcrumbSchema, SITE_URL } from "../lib/seo";

/* Dedicated /pricing route. Previously cagos.io/pricing returned 404 because
   pricing lived only on the homepage's #pricing anchor. SERP traffic for
   "cagos pricing" and any direct visitor landed on a 404. This route renders
   the same PricingSection standalone with its own SEO head + Product/Offer
   schema, then reuses FAQ + FinalCTA so the page still converts on its own. */

const pricingProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/pricing#product`,
  name: "CAGOS — CA Practice Management Software",
  description:
    "Cloud-native practice management for Indian CA firms. Plans by firm size: Starter (solo), Growth (small + mid-size), Enterprise (large multi-branch), Custom.",
  brand: { "@type": "Brand", name: "CAGOS" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "2499",
    highPrice: "24999",
    offerCount: "4",
    url: `${SITE_URL}/pricing`,
    availability: "https://schema.org/InStock",
  },
};

const pricingFaqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: pricingFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export const Route = createFileRoute("/pricing")({
  head: () =>
    seoHead({
      path: "/pricing",
      title: "Pricing — CAGOS | Starter, Growth, Enterprise Plans (2026)",
      description:
        "CAGOS pricing for Indian CA firms — Starter from ₹2,499/mo, Growth from ₹6,999/mo, Enterprise + Custom plans. 14-day free trial, no card required.",
      ogTitle: "CAGOS Pricing — Plans for Solo, SMB, and Enterprise CA Firms",
      ogDescription:
        "Transparent INR pricing for CAGOS practice-management software. Free 14-day trial across every plan. Compare Starter, Growth, Enterprise, and Custom.",
      schema: [
        pricingProductSchema,
        pricingFaqSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/pricing`,
          url: `${SITE_URL}/pricing`,
          name: "Pricing — CAGOS",
          isPartOf: { "@id": SITE_URL },
          inLanguage: "en-IN",
        },
      ],
    }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MadeWidget />
    </div>
  );
}
