import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
} from "lucide-react";

import { seoHead, SITE_URL } from "../lib/seo";
import { CompanyBrand } from "../components/ui/company-brand";
import "../styles/contact.css";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      path: "/contact",
      title: "Book a CAGOS Demo — Built for Your CA Practice",
      description:
        "See how CAGOS connects compliance, clients, billing and team workflows for Indian CA firms. Plan a personalised walkthrough with our team.",
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
  const [draftHref, setDraftHref] = useState("");
  const [requestText, setRequestText] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const body = [
      "Hello CAGOS team,",
      "",
      "I would like a personalised demo for my practice.",
      "",
      `Name: ${value("given-name")} ${value("family-name")}`,
      `Work email: ${value("email")}`,
      `Firm: ${value("organization")}`,
      `Role: ${value("organization-title")}`,
      `Phone: ${value("tel") || "Not provided"}`,
      `Practice type: ${value("practice-type")}`,
      `Country: ${value("country-name")}`,
      `Product updates: ${data.has("marketing") ? "Opted in" : "Not opted in"}`,
    ].join("\n");
    setRequestText(body);
    setDraftHref(
      `mailto:sales@cagos.io?subject=${encodeURIComponent(`CAGOS demo request — ${value("organization")}`)}&body=${encodeURIComponent(body)}`,
    );
    setCopied(false);
    setCopyError(false);
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(requestText);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <div className="contact-page">
      <a className="contact-skip" href="#demo-form">
        Skip to demo request
      </a>
      <header className="contact-header">
        <Link to="/" className="contact-brand" aria-label="CAGOS home">
          <CompanyBrand width={124} />
        </Link>
        <Link to="/" className="contact-back">
          <ArrowLeft size={14} aria-hidden="true" />
          Back to full website
        </Link>
      </header>
      <main>
        <section className="contact-hero" aria-labelledby="contact-title">
          <p className="contact-eyebrow">
            <span />
            YOUR PRACTICE. BETTER CONNECTED.
          </p>
          <h1 id="contact-title">
            See what’s possible
            <br className="contact-title-break" /> for your{" "}
            <em>CA practice.</em>
          </h1>
          <p className="contact-intro">
            Purpose-built for the way Indian CA firms work. Discover how CAGOS
            brings your clients, compliance and team together in one calm
            workspace.
          </p>
          <div
            className="contact-workflows"
            aria-label="Connected practice workflows"
          >
            {[
              "Client management",
              "GST & compliance",
              "Billing & collections",
              "Team workflows",
            ].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </section>
        <section className="contact-demo" aria-labelledby="demo-title">
          <div className="contact-demo-inner">
            <aside className="contact-demo-copy">
              <p className="contact-eyebrow">LET’S MAKE WORK FLOW</p>
              <h2>
                A closer look.
                <br />A clearer way forward.
              </h2>
              <p>
                Tell us a little about your firm. We’ll help you explore a setup
                that fits the way you practise.
              </p>
              <ul>
                <li>
                  <Check size={17} aria-hidden="true" />A walkthrough tailored
                  to your practice
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  Your workflows, questions and priorities
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  Guidance on plans and onboarding
                </li>
              </ul>
              <a href="mailto:sales@cagos.io" className="contact-email">
                <Mail size={17} aria-hidden="true" />
                sales@cagos.io
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <span className="contact-demo-note">
                Built for Indian Chartered Accountant firms.
              </span>
            </aside>
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <h2 id="demo-title">Let’s talk about your practice.</h2>
                <p>A few details. A more personal conversation.</p>
              </div>
              <form
                id="demo-form"
                className="contact-form"
                onSubmit={prepareRequest}
                onChange={() => {
                  if (draftHref) {
                    setDraftHref("");
                    setCopied(false);
                    setCopyError(false);
                  }
                }}
              >
                <p className="contact-required-note">
                  Fields marked <span>*</span> are required.
                </p>
                <div className="contact-field-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-first">
                      First name <span>*</span>
                    </label>
                    <input
                      id="contact-first"
                      name="given-name"
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                      maxLength={80}
                      pattern=".*\S.*"
                      title="Enter your first name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-last">
                      Last name <span>*</span>
                    </label>
                    <input
                      id="contact-last"
                      name="family-name"
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                      maxLength={80}
                      pattern=".*\S.*"
                      title="Enter your last name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Work email <span>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      placeholder="you@yourfirm.com"
                      required
                      maxLength={254}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-firm">
                      Firm name <span>*</span>
                    </label>
                    <input
                      id="contact-firm"
                      name="organization"
                      autoComplete="organization"
                      placeholder="Your firm’s name"
                      required
                      maxLength={160}
                      pattern=".*\S.*"
                      title="Enter your firm name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-role">
                      Your role <span>*</span>
                    </label>
                    <input
                      id="contact-role"
                      name="organization-title"
                      autoComplete="organization-title"
                      placeholder="e.g. Partner, Practice manager"
                      required
                      maxLength={100}
                      pattern=".*\S.*"
                      title="Enter your role"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone number <small>(optional)</small>
                    </label>
                    <input
                      id="contact-phone"
                      name="tel"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      maxLength={30}
                    />
                  </div>
                  <div className="contact-field contact-field-wide">
                    <label htmlFor="contact-type">
                      Practice type <span>*</span>
                    </label>
                    <div className="contact-select">
                      <select
                        id="contact-type"
                        name="practice-type"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select your practice type
                        </option>
                        <option>Solo CA practice</option>
                        <option>CA firm / partnership</option>
                        <option>Tax & GST consultancy</option>
                        <option>Audit & assurance firm</option>
                        <option>Accounting & advisory firm</option>
                        <option>In-house finance team</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown size={15} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="contact-field contact-field-wide">
                    <label htmlFor="contact-country">
                      Country <span>*</span>
                    </label>
                    <input
                      id="contact-country"
                      name="country-name"
                      autoComplete="country-name"
                      defaultValue="India"
                      placeholder="Your country"
                      required
                      maxLength={100}
                      pattern=".*\S.*"
                      title="Enter your country"
                    />
                  </div>
                </div>
                <label className="contact-consent">
                  <input type="checkbox" name="marketing" />
                  <span>
                    I’d like to receive CAGOS product updates, practice insights
                    and event invitations. I can unsubscribe at any time.
                  </span>
                </label>
                <button className="contact-submit" type="submit">
                  Prepare demo request
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
                <p className="contact-send-note">
                  Prepare your details, then send them through your email app.
                </p>
                {draftHref && (
                  <div
                    className="contact-draft"
                    role="status"
                    aria-live="polite"
                  >
                    <strong>Your demo request is ready.</strong>
                    <p>
                      Send the prepared email to complete your request. Your
                      details haven’t been submitted yet.
                    </p>
                    <div>
                      <a href={draftHref}>
                        Open email draft
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                      <button type="button" onClick={copyRequest}>
                        {copied ? "Copied!" : "Copy request"}
                      </button>
                    </div>
                    {copyError && (
                      <p>
                        Copy is unavailable in this browser. Use “Open email
                        draft” or email sales@cagos.io directly.
                      </p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="contact-footer">
        <span>© {new Date().getFullYear()} CAGOS. All rights reserved.</span>
        <span>Your practice. One connected workspace.</span>
      </footer>
    </div>
  );
}
