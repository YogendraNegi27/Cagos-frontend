import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  BriefcaseBusiness,
  MessagesSquare,
  Headset,
} from "lucide-react";
import { PracticeFAQ } from "./PracticeFAQ";
import { Footer } from "./landing/Footer";
import { PracticeEcosystem } from "./PracticeEcosystem";
import { ReferenceHero } from "./ReferenceHero";
import { PracticeToolsGallery } from "./PracticeToolsGallery";
import { ClientShowcase } from "./ClientShowcase";
import "./editorial-home.css";

export function WebsiteHome() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("ed-reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    root.current
      ?.querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight)
          element.classList.add("ed-reveal-pending");
        observer.observe(element);
      });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="editorial-home" ref={root}>
      <a className="ed-skip" href="#main">
        Skip to content
      </a>
      <main id="main">
        <ReferenceHero />
        <PracticeEcosystem />
        <PracticeToolsGallery />
        <ClientShowcase />
        <section className="ed-workflow-band" aria-labelledby="workflow-title">
          <div className="ed-wrap ed-section ed-workflow" data-reveal>
            <div className="ed-workflow-copy">
              <p className="ed-eyebrow">A CLEARER WAY TO WORK</p>
              <h2 id="workflow-title">
                From task to done.
                <br />
                All in one flow.
              </h2>
              <p>
                Keep client work moving with a clear view of assignments,
                follow-ups and the time your team spends.
              </p>
              <Link to="/products/workflow" className="ed-text-link">
                Explore workflow <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="ed-workflow-board">
              <div className="ed-board-top">
                <span>CLIENT WORK / GSTR-3B PREPARATION</span>
                <span className="ed-status">In progress</span>
              </div>
              <h3>
                A clear next step.
                <br />
                For everyone involved.
              </h3>
              <ol>
                {[
                  {
                    n: "01",
                    title: "Collect client documents",
                    text: "Document request sent",
                    done: true,
                  },
                  {
                    n: "02",
                    title: "Prepare the return",
                    text: "Assigned to your team",
                    done: true,
                  },
                  {
                    n: "03",
                    title: "Review the working papers",
                    text: "Ready for manager review",
                    done: false,
                  },
                  {
                    n: "04",
                    title: "Complete & invoice",
                    text: "Keep billing connected",
                    done: false,
                  },
                ].map((step) => (
                  <li key={step.n}>
                    <span className={step.done ? "is-done" : undefined}>
                      {step.done ? (
                        <Check size={15} aria-hidden="true" />
                      ) : (
                        step.n
                      )}
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <small>Illustrative workflow · Sample data</small>
            </div>
          </div>
        </section>
        <section
          className="ed-wrap ed-section ed-benefits"
          aria-labelledby="benefits-title"
          data-reveal
        >
          <div className="ed-benefits-panel">
            <div className="ed-benefits-heading">
              <p className="ed-eyebrow">BUILT AROUND THE WAY YOU PRACTISE</p>
              <h2 id="benefits-title">
                What makes <span>CAGOS special?</span>
              </h2>
              <p>
                Professional focus. Room for your ideas. A helping hand when you
                need it.
              </p>
            </div>
            <div className="ed-benefit-grid">
              {[
                {
                  tone: "practice",
                  icon: BriefcaseBusiness,
                  title: "Built for CA professionals.",
                  text: "Your practice has its own rhythm. Bring clients, compliance, documents and billing together in a workspace designed for Indian CA firms.",
                  action: "Find your fit",
                  to: "/solutions/smb",
                },
                {
                  tone: "feedback",
                  icon: MessagesSquare,
                  title: "Your experience. Your input.",
                  text: "You know your everyday challenges best. Share your ideas, tell us what slows your team down and help shape a better way to work.",
                  action: "Share your feedback",
                  to: "/contact",
                },
                {
                  tone: "support",
                  icon: Headset,
                  title: "Support that stays close.",
                  text: "From exploring CAGOS to planning your setup, find clear guidance in our help centre or connect with the team for your next step.",
                  action: "Get support",
                  to: "/resources/help",
                },
              ].map((item) => (
                <Link
                  className="ed-benefit"
                  key={item.to}
                  to={item.to as never}
                >
                  <span
                    className={`ed-benefit-icon ed-benefit-icon-${item.tone}`}
                  >
                    <item.icon size={25} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="ed-text-link">{item.action}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <PracticeFAQ />
        <section className="ed-closing">
          <div className="ed-wrap" data-reveal>
            <p className="ed-eyebrow">MAKE SPACE FOR WHAT’S NEXT</p>
            <h2>
              Your practice, with a little
              <br />
              <em>more breathing room.</em>
            </h2>
            <p>Bring your work together. Give your team a clearer tomorrow.</p>
            <Link to="/register" className="ed-button">
              Start free trial <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <small>14-day free trial · No credit card required</small>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
