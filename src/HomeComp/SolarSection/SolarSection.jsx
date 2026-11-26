
import {
  ArrowRight,
  Zap,
  Leaf,
  Coins,
} from "lucide-react";

import "./SolarSection.css";

const solarBenefits = [
  {
    number: "01",
    icon: Zap,
    title: "Efficient Energy",
    description:
      "Optimize power use and lower operational costs.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Sustainable Future",
    description:
      "Clean, renewable and eco friendly energy solutions.",
  },
  {
    number: "03",
    icon: Coins,
    title: "Smart Investment",
    description:
      "Long term savings with reliable energy solutions.",
  },
];

function SolarSection() {
  return (
    <section className="mars-solar-section" id="solar-solutions">

      <div className="mars-solar-container">

        {/* LEFT IMAGE */}
        <div className="mars-solar-visual">

          <div className="mars-solar-image-frame">
            <img
              src="/images/solar.png"
              alt="Engineers inspecting an industrial rooftop solar installation"
              loading="lazy"
            />
          </div>

          <div className="mars-solar-orange-frame" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="mars-solar-content">

          {/* APPROVED HEADING BADGE */}
          <div className="mars-solar-badge">

            <span className="mars-solar-badge-stripes">
              <span />
              <span />
            </span>

            <span>SOLAR ENERGY SOLUTIONS</span>

          </div>

          {/* MAIN HEADING */}
          <h2>
            Powering Progress
            <span>with Clean Energy.</span>
          </h2>

          <p className="mars-solar-description">
            Reliable and scalable solar solutions for industrial,
            commercial and institutional needs. Reduce energy costs,
            enhance sustainability and move towards a cleaner,
            greener future.
          </p>

          <div className="mars-solar-divider" />

          {/* BENEFIT CARDS */}
          <div className="mars-solar-benefits">

            {solarBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  className="mars-solar-benefit-card"
                  key={benefit.number}
                >

                  <div className="mars-solar-benefit-icon">
                    <Icon size={39} strokeWidth={1.8} />
                  </div>

                  <span className="mars-solar-benefit-number">
                    {benefit.number}
                  </span>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>
              );
            })}

          </div>

          {/* CTA BUTTON */}
          <a
            href="/solar-solutions"
            className="mars-solar-button"
          >
            Explore Solar Solutions
            <ArrowRight size={25} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default SolarSection;
