import { HeadContent, Outlet, Scripts, createRootRoute, Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import redesignCss from "../styles/redesign.css?url";
import '../styles/feature-panel.css';
import { ThemeProvider } from "../contexts/ThemeContext";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CAGos",
  legalName: "CA Growth OS",
  alternateName: ["CA Growth OS", "CAGos India"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/logo.png`,
  description:
    "Cloud-native practice management OS purpose-built for Indian Chartered Accountant firms. Unifies CRM, HRMS, GST billing, e-invoicing, ITR workflows, ROC/MCA compliance, document vault, and Razorpay payments in a single multi-tenant SaaS.",
  slogan: "Run your entire CA practice from one screen.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Chartered Accountant practice management software",
    "CA firm automation",
    "GST billing and e-invoicing automation",
    "Income Tax Return (ITR) filing workflow automation",
    "TDS return preparation software",
    "ROC and MCA compliance tracking",
    "ICAI peer review documentation",
    "Indian audit firm workflow",
    "AI calling agent for CA firms",
    "AI voice agent for client reminders",
    "Conversational AI for accountants",
    "AI-driven document classification",
    "WhatsApp Business automation for CA practice",
    "Client onboarding automation",
    "Razorpay payment automation for CA firms",
    "Practice management OS",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
  ],
  sameAs: [
    "https://x.com/CAGos",
    "https://www.linkedin.com/company/cagos",
    "https://www.youtube.com/@CAGos",
    "https://www.facebook.com/CAGos",
    "https://www.instagram.com/cagos.io",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "CAGos",
  alternateName: "CA Growth OS",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
  copyrightHolder: { "@id": `${SITE_URL}/#organization` },
  copyrightYear: 2024,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all glow-button"
      >
        Back to Home
      </Link>
    </div>
  );
}

function RootErrorComponent({ error }: { error: unknown }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-destructive mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-4">{error instanceof Error ? error.message : "An unexpected error occurred."}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Google Tag Manager — placed as high in <head> as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHH86ZQ3');`,
          }}
        />
        {/* End Google Tag Manager */}
        <HeadContent />
        {/* Apply saved theme before render to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('cagos-theme') || 'light';
                document.documentElement.setAttribute('data-theme', t);
                document.documentElement.classList.toggle('dark', t === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased transition-colors" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) — must be immediately after <body>.
            Rendered via dangerouslySetInnerHTML so the server-rendered iframe
            matches what the browser exposes as noscript text (avoids a
            hydration mismatch). */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHH86ZQ3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <>
          {children}
          <Scripts />
        </>
      </body>
    </html>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CAGos — CA Practice Management Software with AI Calling Agent" },
      {
        name: "description",
        content:
          "CAGos is the all-in-one CA practice management software for Indian Chartered Accountant firms — CRM, HRMS, GST billing, e-invoicing, ITR workflow, ROC compliance, document vault, Razorpay payments, plus an AI calling agent and WhatsApp automation. Trusted by 500+ firms across India.",
      },
      { name: "author", content: "CAGos" },
      { name: "publisher", content: "CAGos (CA Growth OS)" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "bingbot", content: "index, follow" },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "language", content: "en-IN" },
      { httpEquiv: "content-language", content: "en-IN" },
      {
        name: "keywords",
        content: [
          // Core CA software
          "CA software", "CA practice management software", "chartered accountant software India",
          "CA office software", "CA firm software", "practice management OS",
          "accounting practice management software", "CA practice automation",
          // GST / e-invoicing / ITR
          "GST software", "GST billing software", "e-invoicing software India",
          "GSTR-1 software", "GSTR-3B software", "ITR filing software",
          "TDS return software", "ROC compliance software", "MCA filing software",
          // HRMS / payroll for CA
          "CA HRMS", "CA firm payroll software", "staff attendance for CA firm",
          // Automation
          "CA practice automation", "accounting automation software",
          "compliance automation", "workflow automation for CA firms",
          "GST automation", "ITR workflow automation", "tax workflow automation",
          "client onboarding automation", "document collection automation",
          // AI capabilities
          "AI for CA firms", "AI calling agent", "AI voice agent",
          "AI client outreach", "AI reminder agent", "AI WhatsApp agent",
          "AI document classifier", "AI compliance assistant",
          "conversational AI for accountants", "generative AI for CA practice",
          // CRM + comms
          "CA CRM", "client portal for CA firms", "WhatsApp Business for CA",
          "automated client reminders",
          // Payments
          "Razorpay for CA firms", "online fee collection CA", "NACH mandates for CA",
          // Comparisons (longtail)
          "ClearTax alternative", "Tally alternative", "Winman alternative",
          "Zoho Books alternative for CA", "QuickBooks India alternative",
        ].join(", "),
      },
      { name: "theme-color", content: "#0a1020" },
      {
        name: "google-site-verification",
        content: "yYMYuFgcSAtEt1w8_fe41mWCCRrpjTRB4sfJLjP4Ouo",
      },

      /* Site-wide Open Graph defaults — per-route og:url / og:title / og:description / og:image override these */
      { property: "og:site_name", content: "CAGos" },
      { property: "og:locale",    content: "en_IN" },
      { property: "og:image",     content: DEFAULT_OG_IMAGE },

      /* Twitter / X card defaults */
      { name: "twitter:card",  content: "summary_large_image" },
      { name: "twitter:site",  content: "@CAGos" },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: redesignCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Onest:wght@400;500;600;700;800&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },

      /* Favicons & app icons — production set generated from CAGos mark.
         Google Search picks the largest icon ≥ 48×48 — so the 192/512 PNGs
         must be explicitly linked here (the manifest alone isn't enough). */
      { rel: "icon",             href: "/favicon.ico", sizes: "any" },
      { rel: "icon",             type: "image/png", sizes: "16x16",   href: "/favicon-16x16.png" },
      { rel: "icon",             type: "image/png", sizes: "32x32",   href: "/favicon-32x32.png" },
      { rel: "icon",             type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
      { rel: "icon",             type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
      { rel: "apple-touch-icon", sizes: "180x180",   href: "/apple-touch-icon.png" },
      { rel: "manifest",         href: "/site.webmanifest" },
      { rel: "shortcut icon",    href: "/favicon.ico" },
    ],
    scripts: [
      // Google Analytics — gtag.js loader
      { src: "https://www.googletagmanager.com/gtag/js?id=G-25DWYKQN23", async: true },
      // Google Analytics — inline init
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-25DWYKQN23');",
      },
      // Site-wide JSON-LD: Organization
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      // Site-wide JSON-LD: WebSite with SearchAction
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
  errorComponent: RootErrorComponent,
  notFoundComponent: NotFoundComponent,
});
