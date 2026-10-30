import type { ReactNode } from "react";

import { Navbar } from "../Navbar";
import { FinalCTA, Footer, MadeWidget } from "../landing";

/**
 * Standard wrapper for inner marketing pages (products, solutions, resources, vs).
 * Provides Navbar, theme-aware page surface, FinalCTA, Footer, and MadeWidget.
 */
export function MarketingPageShell({ children, compactProduct = false, compactSolution = false }: { children: ReactNode; compactProduct?: boolean; compactSolution?: boolean }) {
  return (
    <div className={`mkt-page${compactProduct || compactSolution ? ' compact-marketing-page' : ''}`}>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <FinalCTA />
      <Footer />
      <MadeWidget />
    </div>
  );
}
