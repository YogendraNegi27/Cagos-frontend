import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { websiteFaqs } from "../../lib/website-faqs";
import "./practice-faq.css";

const guides = [
  {
    points: [
      "Keep client relationships and service history together.",
      "Connect deadlines, documents and team responsibilities.",
      "Follow invoices, retainers and collections from one place.",
    ],
    to: "/products/workflow",
    action: "Explore the workspace",
  },
  {
    points: [
      "Organise your own client work as an independent practitioner.",
      "Give growing teams a shared view of assignments and reviews.",
      "Compare the solo, growing-firm and enterprise solutions.",
    ],
    to: "/solutions/solo",
    action: "Find your firm’s fit",
  },
  {
    points: [
      "Track GST, ITR, TDS and ROC preparation in one view.",
      "Assign owners and move work through review stages.",
      "File returns through the relevant government portals.",
    ],
    to: "/products/compliance",
    action: "Explore compliance",
  },
  {
    points: [
      "Send document requests and keep shared files organised.",
      "Give clients a dedicated view of invoices and service updates.",
      "Keep client conversations connected to the work in progress.",
    ],
    to: "/products/document-vault",
    action: "Explore documents",
  },
  {
    points: [
      "Create GST invoices and manage client retainers.",
      "Track outstanding fees and follow payment status.",
      "Use Razorpay integration for payment collection.",
    ],
    to: "/products/billing",
    action: "Explore billing",
  },
  {
    points: [
      "Explore the workspace with a 14-day free trial.",
      "Start without a credit card.",
      "Compare plans or contact the team for help choosing a setup.",
    ],
    to: "/pricing",
    action: "Compare plans",
  },
];

export function PracticeFAQ() {
  const [active, setActive] = useState(0);
  const id = useId();
  const faq = websiteFaqs[active];
  const guide = guides[active];
  return (
    <section
      className="practice-faq ed-wrap"
      id="faq"
      aria-labelledby={`${id}-title`}
    >
      <header className="practice-faq-heading">
        <p className="ed-eyebrow">A LITTLE MORE CLARITY</p>
        <h2 id={`${id}-title`}>
          Clear answers for <span>your CA practice.</span>
        </h2>
      </header>
      <div className="practice-faq-layout">
        <div
          className="practice-faq-tabs"
          role="tablist"
          aria-label="CAGOS questions"
          aria-orientation="vertical"
        >
          {websiteFaqs.map((item, index) => (
            <button
              key={item.question}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-answer`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next: number | undefined;
                if (event.key === "ArrowDown")
                  next = (index + 1) % websiteFaqs.length;
                if (event.key === "ArrowUp")
                  next = (index + websiteFaqs.length - 1) % websiteFaqs.length;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = websiteFaqs.length - 1;
                if (next !== undefined) {
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`${id}-tab-${next}`)?.focus();
                }
              }}
            >
              {item.question}
            </button>
          ))}
        </div>
        <div
          className="practice-faq-answer"
          role="tabpanel"
          tabIndex={0}
          id={`${id}-answer`}
          aria-labelledby={`${id}-tab-${active}`}
        >
          <div key={active} className="practice-faq-answer-content">
            <span className="practice-faq-count">
              YOUR QUESTIONS, ANSWERED · {String(active + 1).padStart(2, "0")}
            </span>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <ul>
              {guide.points.map((point) => (
                <li key={point}>
                  <Check size={16} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link to={guide.to as never} className="ed-text-link">
              {guide.action}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <p className="practice-faq-help">
        Still have a question?{" "}
        <Link to="/resources/help">Visit the help centre</Link> or{" "}
        <Link to="/contact">talk to the team.</Link>
      </p>
    </section>
  );
}
