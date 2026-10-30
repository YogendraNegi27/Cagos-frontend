import { createFileRoute } from "@tanstack/react-router";

import { seoHead, SITE_URL } from "../lib/seo";
import { Navbar } from "../components/cagos/Navbar";
import { Footer, MadeWidget } from "../components/cagos/landing";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      path: "/contact",
      title: "Contact Sales — CAGos",
      description:
        "Talk to the CAGos sales team about pricing, custom onboarding, and multi-tenant deployments for CA firms in India.",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${SITE_URL}/contact`,
          url: `${SITE_URL}/contact`,
          inLanguage: "en-IN",
        },
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <main className="container" style={{ paddingTop: 120, paddingBottom: 140, position: "relative" }}>
        <div className="hero-glow" style={{ top: "-100px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow eyebrow-center">Contact sales</p>
          <h1 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 96px)" }}>
            Let&apos;s talk
          </h1>
          <p className="h-sub">
            Email{" "}
            <a href="mailto:sales@cagos.io" style={{ color: "var(--indigo)" }}>
              sales@cagos.io
            </a>{" "}
            and we&apos;ll reach out within one business day.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWidget />
    </div>
  );
}
