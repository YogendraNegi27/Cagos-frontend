import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpen, Clock, ArrowRight, Tag, Rss, Search } from "lucide-react";

import { MarketingPageShell } from "../../../components/cagos/marketing/MarketingPageShell";
import { seoHead, breadcrumbSchema, SITE_URL } from "../../../lib/seo";
import { STATIC_BLOG_POSTS } from "../../../lib/static-blog-posts";

export const Route = createFileRoute("/resources/blog/")({
  head: () =>
    seoHead({
      path: "/resources/blog",
      title: "CAGos Blog | Practice Management & Tax Insights for Indian CAs",
      description:
        "Tax updates, practice management strategies, and technology trends for Indian CA firms. Written by practitioners, for practitioners.",
      ogTitle: "CAGos Blog — Insights for Indian CA Firms",
      ogDescription:
        "Tax updates, practice management strategies, and tech trends for modern Indian CA firms.",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CAGos Blog",
          description:
            "Tax updates, practice management strategies, and technology trends for Indian CA firms.",
          url: `${SITE_URL}/resources/blog`,
          inLanguage: "en-IN",
          publisher: { "@type": "Organization", name: "CAGos", url: SITE_URL },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/blog" },
          { name: "Blog", path: "/resources/blog" },
        ]),
      ],
    }),
  component: BlogIndexPage,
});

function formatDate(epoch: number | null | undefined): string {
  if (!epoch) return "";
  return new Date(epoch * 1000).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function readingTime(text: string | null | undefined): string {
  if (!text) return "1 min read";
  const words = text.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function BlogIndexPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  const categories = useMemo(() => {
    const unique = new Map<string, { id: string; slug: string; name: string }>();
    for (const post of STATIC_BLOG_POSTS) {
      unique.set(post.category.slug, {
        id: `static-${post.category.slug}`,
        ...post.category,
      });
    }
    return [...unique.values()];
  }, []);

  const allPosts = useMemo(() => STATIC_BLOG_POSTS
    .filter((post) => !activeCategory || post.category.slug === activeCategory)
    .map((post) => ({
      ...post,
      id: `static-${post.slug}`,
      categoryId: `static-${post.category.slug}`,
      viewCount: 0,
    }))
    .sort((a, b) => b.publishedAt - a.publishedAt), [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / 12));

  // Client-side search filter (small dataset; server-side search is a follow-up)
  const filtered = search
    ? allPosts.filter((p) =>
        (p.title + " " + (p.excerpt ?? ""))
          .toLowerCase()
          .includes(search.toLowerCase()),
      )
    : allPosts;

  return (
    <MarketingPageShell>

      {/* Hero */}
      <section className="relative px-6 pt-20 pb-12 border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/15 border border-brand-500/30 rounded-full text-xs font-bold text-brand-300 mb-5">
            <Rss className="w-3.5 h-3.5" />
            CAGos Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Practice management & tax insights for Indian CAs
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tax updates, workflow strategies, and technology trends — written by practitioners,
            for practitioners.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 focus:border-brand-500 focus:bg-white/8 outline-none rounded-xl text-sm text-white placeholder:text-slate-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="px-6 py-6 border-b border-white/5">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => {
                setActiveCategory(undefined);
                setPage(1);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                !activeCategory
                  ? "bg-brand-600 text-white"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.slug);
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeCategory === c.slug
                    ? "bg-brand-600 text-white"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">
                {search ? "No matching posts" : "No posts yet"}
              </h2>
              <p className="text-slate-400 text-sm">
                {search
                  ? "Try a different search term."
                  : "Check back soon — new articles weekly."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(search ? filtered : filtered.slice((page - 1) * 12, page * 12)).map((post) => (
                <BlogCard key={post.id} post={post} categories={categories} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && !search && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-slate-400">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

    </MarketingPageShell>
  );
}

function BlogCard({ post, categories }: { post: {
  slug: string; title: string; categoryId: string | null; coverImageUrl: string | null;
  excerpt: string | null; publishedAt: number | null;
}; categories: { id: string; name: string }[] }) {
  const category = categories.find((c) => c.id === post.categoryId);
  return (
    <Link
      to="/resources/blog/$slug"
      params={{ slug: post.slug }}
      className="group block bg-canvas-800 border border-white/8 rounded-2xl overflow-hidden hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10 transition-all"
    >
      {post.coverImageUrl ? (
        <div className="aspect-[16/9] overflow-hidden bg-canvas-700">
          <img
            src={post.coverImageUrl}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-500/20 via-canvas-800 to-teal-500/15 flex items-center justify-center">
          <BookOpen className="w-12 h-12 text-brand-400 opacity-40" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {category && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-300 text-[10px] font-bold uppercase tracking-wider">
              <Tag className="w-2.5 h-2.5" />
              {category.name}
            </span>
          )}
          <span className="text-[10px] text-slate-500 inline-flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            {readingTime(post.excerpt)}
          </span>
        </div>
        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-brand-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-3">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="inline-flex items-center gap-1 text-brand-400 font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
