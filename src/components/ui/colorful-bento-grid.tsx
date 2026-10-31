import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import "./colorful-bento-grid.css";

type BentoFeatureLink = {
  label: string;
  to: string;
  icon?: LucideIcon;
};

export type BentoFeatureCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  featured?: boolean;
  features: BentoFeatureLink[];
};

type ColorfulBentoGridProps = {
  id: string;
  title: string;
  cards: BentoFeatureCard[];
};

export function ColorfulBentoGrid({
  id,
  title,
  cards,
}: ColorfulBentoGridProps) {
  return (
    <section
      className="colorful-bento-section ed-wrap"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="colorful-bento-panel">
        <header className="colorful-bento-heading" data-reveal>
          <h2 id={`${id}-title`}>{title}</h2>
        </header>
        <div className="colorful-bento-grid">
          {cards.map(
            (
              {
                id: cardId,
                category,
                title: cardTitle,
                description: cardDescription,
                icon: Icon,
                to,
                featured,
                features,
              },
              index,
            ) => (
              <article
                key={cardId}
                className={`colorful-bento-card colorful-bento-${cardId}${featured ? " colorful-bento-featured" : ""}`}
                data-reveal
                style={{ "--bento-delay": `${index * 45}ms` } as CSSProperties}
                aria-labelledby={`${id}-${cardId}-title`}
              >
                <div className="colorful-bento-copy">
                  <div className="colorful-bento-category">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                    <span>{category}</span>
                  </div>
                  <h3 id={`${id}-${cardId}-title`}>
                    <Link to={to as never}>{cardTitle}</Link>
                  </h3>
                  <p>{cardDescription}</p>
                </div>
                <ul
                  className="colorful-bento-features"
                  aria-label={`${category} features`}
                >
                  {features.map(
                    ({ label, to: featureTo, icon: FeatureIcon }) => (
                      <li key={label}>
                        <Link to={featureTo as never}>
                          {FeatureIcon && (
                            <FeatureIcon
                              size={21}
                              strokeWidth={1.6}
                              aria-hidden="true"
                            />
                          )}
                          <span>{label}</span>
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
