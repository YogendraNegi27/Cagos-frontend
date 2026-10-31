import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { CompanyBrand } from "../ui/company-brand";
import { useTheme } from "../../contexts/ThemeContext";
import "./navbar.css";

const groups = [
  {
    name: "Platform",
    intro: "One workspace. Every detail connected.",
    links: [
      [
        "Client CRM",
        "Keep every client relationship in view.",
        "/products/client-crm",
      ],
      [
        "Compliance",
        "Organise GST, ITR, TDS and ROC work.",
        "/products/compliance",
      ],
      [
        "Billing & collections",
        "Connect invoices, retainers and payments.",
        "/products/billing",
      ],
      [
        "Team workflows",
        "Give every task a clear next step.",
        "/products/workflow",
      ],
      ["HRMS", "Bring your people and practice together.", "/products/hrms"],
      [
        "Document vault",
        "Keep client files and requests organised.",
        "/products/document-vault",
      ],
    ],
  },
  {
    name: "Who it’s for",
    intro: "Built around the way you practise.",
    links: [
      [
        "Solo practitioners",
        "A clearer view of your independent practice.",
        "/solutions/solo",
      ],
      [
        "Growing firms",
        "Keep clients and teams moving together.",
        "/solutions/smb",
      ],
      [
        "Enterprise firms",
        "Connect work across a larger practice.",
        "/solutions/enterprise",
      ],
      [
        "Tax practices",
        "Give tax and compliance work a home.",
        "/solutions/tax",
      ],
      [
        "Audit firms",
        "Keep engagements and reviews organised.",
        "/solutions/audit",
      ],
      [
        "Advisory teams",
        "Make more room for client conversations.",
        "/solutions/advisors",
      ],
    ],
  },
  {
    name: "Resources",
    intro: "A little insight. A clearer way forward.",
    links: [
      [
        "Blog & insights",
        "Ideas for your everyday practice.",
        "/resources/blog",
      ],
      [
        "Tax calendar",
        "Keep upcoming deadlines in view.",
        "/resources/calendar",
      ],
      [
        "Help centre",
        "Find answers and practical guidance.",
        "/resources/help",
      ],
      [
        "Case studies",
        "Explore connected practice workflows.",
        "/resources/case-studies",
      ],
      [
        "Webinars",
        "Learn more about running your practice.",
        "/resources/webinars",
      ],
      ["Compare CAGOS", "Find the right fit for your firm.", "/vs/"],
      [
        "API docs",
        "Explore CAGOS integration documentation.",
        "/resources/api",
      ],
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = useId();
  const { theme, toggleTheme } = useTheme();
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const close = () => {
    cancelClose();
    setActive(null);
    setOpen(false);
  };

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) close();
    };
    const breakpoint = matchMedia("(min-width: 1101px)");
    document.addEventListener("pointerdown", outside);
    breakpoint.addEventListener("change", close);
    return () => {
      cancelClose();
      document.removeEventListener("pointerdown", outside);
      breakpoint.removeEventListener("change", close);
    };
  }, []);

  return (
    <header
      ref={root}
      className="fresh-nav cagos-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) close();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        const trigger = active
          ? root.current?.querySelector<HTMLButtonElement>(
              `[data-nav-group="${active}"]`,
            )
          : root.current?.querySelector<HTMLButtonElement>(
              ".cagos-menu-toggle",
            );
        close();
        trigger?.focus();
      }}
    >
      <div className="cagos-header-inner">
        <Link
          to="/"
          className="cagos-nav-brand"
          aria-label="CAGOS home"
          onClick={close}
        >
          <CompanyBrand width={172} />
          <span>BUILT FOR INDIAN CA FIRMS</span>
        </Link>
        <button
          type="button"
          className="cagos-menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls={`${id}-navigation`}
          onClick={() => {
            cancelClose();
            setOpen(!open);
            setActive(null);
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id={`${id}-navigation`}
          className={`cagos-nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="cagos-nav-main">
            {groups.map((group, index) => (
              <div
                key={group.name}
                className="cagos-nav-group"
                onPointerEnter={(event) => {
                  if (
                    event.pointerType !== "mouse" ||
                    !matchMedia("(min-width: 1101px) and (hover: hover)")
                      .matches
                  )
                    return;
                  cancelClose();
                  setActive(group.name);
                }}
                onPointerLeave={(event) => {
                  if (
                    event.pointerType !== "mouse" ||
                    !matchMedia("(min-width: 1101px) and (hover: hover)")
                      .matches
                  )
                    return;
                  cancelClose();
                  closeTimer.current = setTimeout(() => setActive(null), 120);
                }}
              >
                <button
                  type="button"
                  className="cagos-nav-trigger"
                  data-nav-group={group.name}
                  aria-expanded={active === group.name}
                  aria-controls={`${id}-group-${index}`}
                  onClick={(event) => {
                    cancelClose();
                    const mouseHover =
                      event.detail > 0 &&
                      matchMedia("(min-width: 1101px) and (hover: hover)")
                        .matches;
                    setActive(
                      mouseHover
                        ? group.name
                        : active === group.name
                          ? null
                          : group.name,
                    );
                  }}
                >
                  {group.name}
                  <ChevronDown size={13} aria-hidden="true" />
                </button>
                <div
                  id={`${id}-group-${index}`}
                  className={`cagos-nav-panel ${active === group.name ? "is-active" : ""}`}
                  inert={active !== group.name}
                  aria-hidden={active !== group.name}
                >
                  <div className="cagos-nav-panel-body">
                    <div className="cagos-nav-panel-intro">
                      <span>EXPLORE CAGOS</span>
                      <p>{group.intro}</p>
                    </div>
                    <div className="cagos-nav-grid">
                      {group.links.map(([label, description, to]) => (
                        <Link key={to} to={to as never} onClick={close}>
                          <span>
                            <strong>{label}</strong>
                            <small>{description}</small>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/pricing" className="cagos-nav-link" onClick={close}>
              Pricing
            </Link>
            <Link to="/contact" className="cagos-nav-link" onClick={close}>
              Contact
            </Link>
          </div>
          <div className="cagos-nav-actions">
            <button
              type="button"
              className="cagos-nav-theme"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link to="/login" className="cagos-nav-login" onClick={close}>
              Log in
            </Link>
            <Link to="/register" className="cagos-nav-trial" onClick={close}>
              <span>Start free trial</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
