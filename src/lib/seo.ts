export const SITE_URL = "https://cagos.io";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type Schema = Record<string, unknown>;

export interface SeoHeadOptions {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
  schema?: Schema | Schema[];
}

export function seoHead(opts: SeoHeadOptions) {
  const url = SITE_URL + opts.path;
  const ogTitle = opts.ogTitle ?? opts.title;
  const ogDescription = opts.ogDescription ?? opts.description;
  const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;
  const ogType = opts.ogType ?? "website";

  const meta: Record<string, string>[] = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:type", content: ogType },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: ogImage },
  ];

  if (opts.noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "en-IN", href: url },
    { rel: "alternate", hrefLang: "en", href: url },
    { rel: "alternate", hrefLang: "x-default", href: url },
  ];

  const schemas = opts.schema
    ? Array.isArray(opts.schema)
      ? opts.schema
      : [opts.schema]
    : [];
  const scripts = schemas.map((s) => ({
    type: "application/ld+json",
    children: JSON.stringify(s),
  }));

  return { meta, links, scripts };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  };
}

export function softwareApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    applicationCategory: opts.category ?? "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: SITE_URL + opts.path,
    publisher: {
      "@type": "Organization",
      name: "CAGOS",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "14-day free trial",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

export function comparisonSchema(opts: {
  path: string;
  headline: string;
  description: string;
  about: string[];
  datePublished: string;
  dateModified: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: SITE_URL + opts.path,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "CAGOS", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "CAGOS",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    about: opts.about.map((name) => ({ "@type": "Thing", name })),
  };
}

/**
 * Speakable schema — flags passages that AI/voice assistants (Google Assistant,
 * AI Overviews) can read aloud. CSS selectors must match elements present in the
 * rendered page.
 */
export function speakableSchema(opts: {
  path: string;
  cssSelectors: string[];
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: SITE_URL + opts.path,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.cssSelectors,
    },
  };
}

/**
 * QAPage schema — strongest signal for AI Overviews / Perplexity / ChatGPT to
 * lift a single Q&A. Use one QAPage per page where a single dominant question
 * is being answered (e.g., "what is CAGOS").
 */
export function qaPageSchema(opts: {
  question: string;
  answer: string;
  path: string;
  upvotes?: number;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: opts.question,
      url: SITE_URL + opts.path,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: opts.answer,
        upvoteCount: opts.upvotes ?? 0,
        url: SITE_URL + opts.path,
      },
    },
  };
}

/**
 * HowTo schema — step-by-step procedures. AI engines reliably surface these as
 * carousels and numbered answers. Use for setup, migration, and onboarding pages.
 */
export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTimeISO?: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.totalTimeISO ? { totalTime: opts.totalTimeISO } : {}),
    step: opts.steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  audience?: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: SITE_URL + opts.path,
    provider: {
      "@type": "Organization",
      name: "CAGOS",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(opts.audience
      ? {
          audience: {
            "@type": "BusinessAudience",
            audienceType: opts.audience,
          },
        }
      : {}),
  };
}
