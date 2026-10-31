import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Eye, Share2 } from "lucide-react";

import { MarketingPageShell } from "../../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema, SITE_URL } from "../../../lib/seo";
import { STATIC_BLOG_POSTS_BY_SLUG } from "../../../lib/static-blog-posts";

export const Route = createFileRoute("/resources/blog/$slug")({
  // SSR-friendly head: for the 5 static posts we know everything at route
  // registration → emit the real per-post title, description, OG image, and
  // BlogPosting JSON-LD. Dynamic CMS posts fall back to generic defaults
  // since their data isn't known until the client tRPC fetch resolves.
  head: ({ params }) => {
    const staticPost = STATIC_BLOG_POSTS_BY_SLUG[params.slug];
    if (staticPost) {
      return seoHead({
        path: `/resources/blog/${staticPost.slug}`,
        title: staticPost.metaTitle,
        description: staticPost.metaDescription,
        ogTitle: staticPost.title,
        ogDescription: staticPost.excerpt,
        ogImage: staticPost.coverImageUrl,
        ogType: "article",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: staticPost.title,
            description: staticPost.metaDescription,
            image: staticPost.coverImageUrl,
            datePublished: new Date(staticPost.publishedAt * 1000).toISOString(),
            dateModified: new Date(staticPost.updatedAt * 1000).toISOString(),
            author: { "@type": "Person", name: staticPost.authorName },
            publisher: {
              "@type": "Organization",
              name: "CAGOS",
              url: SITE_URL,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/resources/blog/${staticPost.slug}`,
            },
            inLanguage: "en-IN",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/resources/blog" },
            { name: staticPost.category.name, path: "/resources/blog" },
          ]),
        ],
      });
    }
    return seoHead({
      path: `/resources/blog/${params.slug}`,
      title: "Blog | CAGOS",
      description: "Read the latest tax updates and practice management insights from CAGOS.",
      ogType: "article",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blog" },
          { name: params.slug, path: `/resources/blog/${params.slug}` },
        ]),
      ],
    });
  },
  component: BlogPostPage,
});

function formatDate(epoch: number | null | undefined): string {
  if (!epoch) return "";
  return new Date(epoch * 1000).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function BlogPostPage() {
  const { slug } = useParams({ from: "/resources/blog/$slug" });
  const staticPost = STATIC_BLOG_POSTS_BY_SLUG[slug];

  // Articles are bundled locally; no CMS or backend is required.
  const post = staticPost ? { ...staticPost, viewCount: 0 } : undefined;
  const category = staticPost?.category;

  if (!post) {
    return (
      <MarketingPageShell>
        <div className="px-6 py-24 text-center max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Post not found</h1>
          <p className="text-slate-400 mb-6">
            This article may have been removed or the link is mistyped.
          </p>
          <Link
            to="/resources/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 rounded-xl text-sm font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </MarketingPageShell>
    );
  }

  // BlogPosting JSON-LD — emitted client-side for completeness
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt ?? "",
    image: post.coverImageUrl ?? `${SITE_URL}/og-image.png`,
    datePublished: post.publishedAt ? new Date(post.publishedAt * 1000).toISOString() : undefined,
    dateModified: post.updatedAt ? new Date(post.updatedAt * 1000).toISOString() : undefined,
    author: { "@type": "Person", name: post.authorName ?? "CAGOS Editorial" },
    publisher: {
      "@type": "Organization",
      name: "CAGOS",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/resources/blog/${post.slug}` },
    inLanguage: "en-IN",
  };

  return (
    <MarketingPageShell>

      {/* JSON-LD injected via dangerouslySetInnerHTML so it appears in DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-slate-400">
          <Link to="/resources/blog" className="hover:text-white inline-flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            All articles
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {category && (
            <Link
              to="/resources/blog"
              search={{ category: category.slug }}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-500/15 text-brand-300 text-[11px] font-bold uppercase tracking-wider hover:bg-brand-500/25 transition-colors"
            >
              {category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-slate-300 leading-relaxed mb-6">{post.excerpt}</p>
          )}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
            {post.authorName && (
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.authorName}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readingTime(post.contentHtml)}
            </span>
            {(post.viewCount ?? 0) > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                {post.viewCount} views
              </span>
            )}
          </div>
        </header>

        {/* Cover */}
        {post.coverImageUrl && (
          <div className="mb-10 -mx-6 md:mx-0 md:rounded-2xl overflow-hidden">
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        )}

        {/* Body — trusted HTML written by super-admin */}
        <div
          className="blog-prose text-slate-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/resources/blog"
            className="text-sm text-brand-400 hover:text-brand-300 inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            More articles
          </Link>
          <button
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: post.title, url: window.location.href }).catch(() => {
                  // Closing the native share sheet requires no UI update.
                });
              } else if (typeof navigator !== "undefined") {
                navigator.clipboard?.writeText(window.location.href);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </article>

    </MarketingPageShell>
  );
}
