import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Brand } from "../primitives";

/**
 * Theme-aware shell for /login and /register — matches the CAGos marketing brand.
 */
export function AuthPageShell({ children, registration = false }: { children: ReactNode; registration?: boolean }) {
  return (
    <div className={`auth-page${registration ? " auth-page--register" : ""}`}>
      <header className="auth-page-header">
        <Link to="/" className="auth-page-brand">
          <Brand size={28} />
        </Link>
        <span>Your practice. Beautifully organised.</span>
      </header>
      <main className="auth-page-body">{children}</main>
      <footer className="auth-page-footer">
        <Link to="/">← Back to cagos.io</Link>
      </footer>
    </div>
  );
}
