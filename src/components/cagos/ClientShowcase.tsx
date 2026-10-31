import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./client-showcase.css";

export interface ClientShowcaseItem {
  name: string;
  logo?: string;
  specialty?: string;
  monochrome?: boolean;
}

// These are public industry examples, not CAGOS customers. See asset sources.
const industryExamples: ClientShowcaseItem[] = [
  {
    name: "N. A. Shah Associates LLP",
    logo: "/firm-examples/na-shah.png",
    monochrome: true,
  },
  { name: "S. R. Dinodia & Co. LLP", logo: "/firm-examples/sr-dinodia.png" },
  {
    name: "Lodha & Bhatt",
    logo: "/firm-examples/lodha-bhatt.png",
    monochrome: true,
  },
  {
    name: "S S Kothari Mehta & Co. LLP",
    logo: "/firm-examples/ss-kothari.png",
  },
  { name: "JHS & Associates LLP", specialty: "CHARTERED ACCOUNTANTS" },
  { name: "Singhi & Co.", specialty: "CHARTERED ACCOUNTANTS" },
];

export function ClientShowcase({
  clients = [],
}: {
  clients?: readonly ClientShowcaseItem[];
}) {
  const root = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [running, setRunning] = useState(false);
  const confirmed = clients.length > 0;
  const entries: readonly ClientShowcaseItem[] = confirmed
    ? clients
    : industryExamples;

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () =>
      setRunning(visible && !paused && !document.hidden && !preference.matches);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(section);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
    };
  }, [paused]);

  return (
    <section
      ref={root}
      className="client-showcase"
      aria-labelledby="client-showcase-title"
      data-running={running}
    >
      <img
        className="client-showcase-backdrop"
        src="/client-partnership.jpg"
        width={1600}
        height={1068}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div className="client-showcase-inner">
        <header className="client-showcase-heading">
          <h2 id="client-showcase-title">
            {confirmed ? "OUR" : "CA FIRM"}{" "}
            <span>{confirmed ? "CLIENTS" : "EXAMPLES"}</span>
          </h2>
          <p>
            {confirmed
              ? "The practices building a clearer way to work with CAGOS."
              : "Industry examples only · No CAGOS customer affiliation."}
          </p>
        </header>
        <div
          className="client-showcase-window"
          tabIndex={0}
          aria-label={
            confirmed
              ? "CAGOS clients. Hover or focus to pause the moving strip."
              : "CA firm examples. Hover or focus to pause the moving strip."
          }
        >
          <div className="client-showcase-track">
            {[false, true].map((duplicate) => (
              <ul
                className="client-showcase-group"
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
              >
                {entries.map((item) => {
                  return (
                    <li className="client-showcase-card" key={item.name}>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          className={
                            item.monochrome ? "is-monochrome" : undefined
                          }
                          alt={duplicate ? "" : item.name}
                          width={164}
                          height={60}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <>
                          <div>
                            <strong>{item.name}</strong>
                            {item.specialty && <small>{item.specialty}</small>}
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
        <button
          className="client-showcase-toggle"
          type="button"
          aria-pressed={paused}
          aria-label={paused ? "Resume moving strip" : "Pause moving strip"}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? (
            <Play size={12} aria-hidden="true" />
          ) : (
            <Pause size={12} aria-hidden="true" />
          )}
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </section>
  );
}
