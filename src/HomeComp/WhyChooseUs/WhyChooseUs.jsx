
import {
  ArrowRight,
  Award,
  Layers3,
  Users,
  CalendarCheck,
} from "lucide-react";

import "./WhyChooseUs.css";

const benefits = [
  {
    number: "01",
    icon: Award,
    title: "Quality Engineering",
    description: "Precision and quality focused work.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Custom Solutions",
    description: "Solutions designed as per your requirements.",
  },
  {
    number: "03",
    icon: Users,
    title: "Skilled Team",
    description: "A team of experienced and technical professionals.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Reliable Execution",
    description: "Timely and efficient project execution.",
  },
];

function WhyChooseUs() {
  return (
    <section className="mars-why-section">

      <div className="mars-why-container">

        {/* LEFT IMAGE */}
        <div className="mars-why-visual">
          <div className="mars-why-image-frame">
            <img
              src="/images/whyChoose.png"
              alt="Industrial engineers reviewing fabrication blueprints"
              loading="lazy"
            />
          </div>

          <div className="mars-why-orange-frame" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="mars-why-content">

          {/* APPROVED SECTION BADGE */}
          <div className="mars-why-badge">
            <span className="mars-why-badge-stripes">
              <span />
              <span />
            </span>

            <span>WHY CHOOSE MARS POWER CONTROLS</span>
          </div>

          <h2>
            Built on Strength.
            <span>Driven by Excellence.</span>
          </h2>

          <p className="mars-why-description">
            We combine engineering expertise, modern infrastructure
            and a customer first approach to deliver reliable,
            long lasting fabrication and engineering solutions.
          </p>

          <div className="mars-why-divider" />

          {/* BENEFIT CARDS */}
          <div className="mars-why-grid">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  className="mars-why-card"
                  key={benefit.number}
                >
                  <div className="mars-why-icon">
                    <Icon size={38} strokeWidth={1.8} />
                  </div>

                  <div className="mars-why-card-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* CTA */}
          <a href="/contact" className="mars-why-button">
            Let's Discuss Your Project
            <ArrowRight size={23} />
          </a>

        </div>
      </div>

    </section>
  );
}

export default WhyChooseUs;
