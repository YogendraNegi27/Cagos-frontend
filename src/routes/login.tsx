import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, ArrowRight, Loader2 } from "lucide-react";

import { seoHead } from "../lib/seo";
import { AuthPageShell } from "../components/cagos/marketing/AuthPageShell";

export const Route = createFileRoute("/login")({
  head: () =>
    seoHead({
      path: "/login",
      title: "Sign in to CAGos | CA Firm Practice Management",
      description: "Sign in to your CAGos workspace.",
      noindex: true,
    }),
  component: GlobalLoginPage,
});

function getAdminUrl(): string {
  const env = (import.meta).env?.VITE_ADMIN_URL;
  if (env) return env;
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host.includes("staging")) return "https://staging-admin.cagos.io";
  }
  return "https://admin.cagos.io";
}

function GlobalLoginPage() {
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug.trim()) return;

    setLoading(true);
    const formattedSlug = slug.trim().toLowerCase().replace(/\s+/g, "-");

    try {
      window.location.href = `${getAdminUrl()}/${formattedSlug}/admin/login`;
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPageShell>
      <div className="auth-card">
        <div className="auth-icon-wrap">
          <Building2 className="w-6 h-6" />
        </div>
        <h2 style={{ fontSize: "1.75rem", marginBottom: 4 }}>Sign in to your workspace</h2>
        <p className="auth-subtitle">Enter your CA firm&apos;s workspace URL to continue</p>

        <form className="space-y-6" style={{ marginTop: 28 }} onSubmit={handleLookup}>
          <div>
            <label htmlFor="workspace" className="auth-label">
              Workspace URL
            </label>
            <div className="auth-input-group">
              <span className="auth-input-prefix">admin.cagos.io/</span>
              <input
                type="text"
                name="workspace"
                id="workspace"
                className="auth-input"
                placeholder="your-firm-name"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <button type="submit" disabled={!slug.trim() || loading} className="auth-btn-primary">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="auth-divider">
          <span>Don&apos;t have a workspace yet?</span>
        </div>
        <p style={{ textAlign: "center", fontSize: 14 }}>
          <Link to="/register" className="auth-link">
            Register your firm
          </Link>
        </p>
      </div>
    </AuthPageShell>
  );
}
