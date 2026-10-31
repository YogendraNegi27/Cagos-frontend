import { Reveal } from "../primitives";

/* Two info cards — ported from the Validate reference. Copy adapted for
   CAGOS so it doesn't compete with the Features section above — those
   cards talk about flexibility; these two stake out positioning vs
   competitors. */
export const TwoCards = () => (
  <section className="container">
    <div className="two-card">
      <Reveal>
        <div className="info-card">
          <h3>Make it yours</h3>
          <p>
            Branding, workflows, reminder templates, role hierarchies — every
            surface bends to how your firm actually operates.
          </p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="info-card">
          <h3>No tiered paywalls</h3>
          <p>
            Every plan unlocks every module. We scale with your client count
            and staff seats — never by gating features behind upgrades.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
