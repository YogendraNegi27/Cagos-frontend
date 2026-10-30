import { websiteFaqs } from '../lib/website-faqs';
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/cagos/Navbar";
import { WebsiteHome } from '../components/cagos/WebsiteHome';
import { seoHead, softwareApplicationSchema, speakableSchema, SITE_URL } from "../lib/seo";

const homeFaqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: websiteFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      path: "/",
      title: "CAGos — CA Practice Management Software for Indian Firms",
      // 152 chars — under Google's ~155-char SERP truncation cap. The previous
      // copy ran to ~280 chars and the value-prop tail ("Built for Indian CA
      // firms.") was cut on desktop SERPs.
      description:
        "All-in-one CA practice management for Indian firms — CRM, HRMS, GST billing, compliance tracker, document vault, Razorpay payments. Free 14-day trial.",
      ogTitle: "CAGos — CA Practice Management Software for Indian Firms",
      ogDescription:
        "All-in-one CA practice management: CRM, HRMS, GST billing, compliance tracker, document vault, Razorpay payments. Built for Indian CA firms.",
      schema: [
        softwareApplicationSchema({
          name: "CAGos",
          description:
            "All-in-one practice management OS for Indian CA firms — CRM, HRMS, GST billing, e-invoicing, ITR filing, compliance, and payments.",
          path: "/",
        }),
        homeFaqSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/`,
          url: SITE_URL,
          name: "CAGos — All-in-one Practice Management OS for Indian CA Firms",
          isPartOf: { "@id": SITE_URL },
          inLanguage: "en-IN",
        },
        speakableSchema({
          path: "/",
          cssSelectors: ["h1[data-speakable]", "p[data-speakable]", "[data-speakable]"],
        }),
      ],
    }),
  component: LandingPage,
});

function LandingPage() { return <><Navbar /><WebsiteHome /></>; }
