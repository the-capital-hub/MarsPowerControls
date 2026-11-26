
import React from "react";
import {
  Sun,
  House,
  Building2,
  Factory,
  Leaf,
  Zap,
  Layers,
  Coins,
  ShieldCheck,
  Headphones,
  Settings,
  HardHat,
  ClipboardCheck,
  ArrowRight,
  Phone,
  CalendarDays,
  Network,
  CircuitBoard,
  Cable,
  Award,
  Clock3,
  Users,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import "./SolarSolutions.css";

const solarSolutions = [
  {
    title: "Residential Solar",
    description: "Reliable and cost effective solar systems for homes.",
    image: "/images/solar/residential-solar.jpg",
    icon: House,
  },
  {
    title: "Commercial Solar",
    description: "Reduce operational costs and improve energy efficiency for your business.",
    image: "/images/solar/commercial-solar.jpg",
    icon: Building2,
  },
  {
    title: "Industrial Solar",
    description: "High capacity, scalable solar solutions for industrial and manufacturing units.",
    image: "/images/solar/industrial-solar.jpg",
    icon: Factory,
  },
];

const solarBenefits = [
  {
    title: "Cost Savings",
    description: "Significantly reduce your electricity bills.",
    icon: Coins,
  },
  {
    title: "Clean and Green",
    description: "A renewable and environment friendly energy source.",
    icon: Leaf,
  },
  {
    title: "Long Term Value",
    description: "Durable, low maintenance and a smart investment for the future.",
    icon: ShieldCheck,
  },
];

const solarProcess = [
  {
    title: "Consultation and Site Assessment",
    icon: Headphones,
  },
  {
    title: "System Design and Planning",
    icon: Settings,
  },
  {
    title: "Installation and Testing",
    icon: HardHat,
  },
  {
    title: "Commissioning and Support",
    icon: ClipboardCheck,
  },
];

const reasons = [
  {
    title: "Experienced Team",
    icon: Award,
  },
  {
    title: "Quality Components",
    icon: Settings,
  },
  {
    title: "On Time Execution",
    icon: Clock3,
  },
  {
    title: "End to End Support",
    icon: Users,
  },
];

function SectionBadge({ children }) {
  return (
    <div className="solar-section-badge">
      <span className="solar-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function SolarSolutions() {
  return (
    <main className="solar-page">
      {/* Hero Banner */}
      <section className="solar-hero">
        <div className="solar-hero-overlay" />
        <div className="solar-container solar-hero-content">
          <div className="solar-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Solar Solutions</span>
          </div>

          <div className="solar-hero-title">
            <span className="solar-hero-accent" />
            <div>
              <h1>Solar Solutions</h1>
              <p>Design <span>|</span> Installation <span>|</span> Integration <span>|</span> Maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="solar-intro solar-container">
        <div className="solar-intro-copy">
          <SectionBadge>Clean Energy</SectionBadge>

          <h2>
            Powering Progress
            <br />
            with <span>Clean Energy</span>
          </h2>

          <p className="solar-intro-description">
            End to end solar solutions for residential, commercial and
            industrial needs, helping you reduce energy costs and move
            towards a sustainable future.
          </p>

          <div className="solar-intro-highlights">
            <div>
              <Leaf />
              <strong>Lower<br />Energy Cost</strong>
            </div>
            <div>
              <Zap />
              <strong>Sustainable<br />and Clean Power</strong>
            </div>
            <div>
              <Layers />
              <strong>Long Term<br />Value</strong>
            </div>
          </div>
        </div>

        <div className="solar-intro-image-wrap">
          <span className="solar-image-frame solar-frame-one" />
          <img
            src="/images/solar/solar-engineer.jpg"
            alt="Solar engineer inspecting a solar panel installation"
          />
          <span className="solar-image-frame solar-frame-two" />
        </div>
      </section>

      {/* Solar Solutions Cards */}
      <section className="solar-solutions-section solar-container">
        <div className="solar-section-heading solar-solutions-heading">
          <div>
            <SectionBadge>Our Solar Solutions</SectionBadge>
            <h2>
              Solar Solutions for <span>Every Need</span>
            </h2>
          </div>

          <p>
            Customized solar power systems designed for different
            applications, from homes to large industrial facilities.
          </p>
        </div>

        <div className="solar-solution-grid">
          {solarSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article className="solar-solution-card" key={solution.title}>
                <div className="solar-solution-image">
                  <img src={solution.image} alt={solution.title} />
                  <span className="solar-card-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="solar-solution-info">
                  <div className="solar-solution-icon">
                    <Icon />
                  </div>

                  <div className="solar-solution-text">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>

                  <a
                    href="/contact"
                    className="solar-card-arrow"
                    aria-label={`Enquire about ${solution.title}`}
                  >
                    <ArrowRight />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* How Solar Works */}
      <section className="solar-how-section solar-container">
        <div className="solar-how-copy">
          <SectionBadge>How It Works</SectionBadge>
          <h2>
            How Solar Energy
            <br />
            <span>Works?</span>
          </h2>
          <p>
            A simple and reliable system that converts sunlight into
            clean, usable electricity for your home, business or industry.
          </p>
        </div>

        <div className="solar-flow-card">
          <div className="solar-flow-step">
            <div className="solar-flow-icon solar-sun-icon">
              <Sun />
              <span className="solar-mini-panel"><Lightbulb /></span>
            </div>
            <h3>Solar Panels</h3>
            <p>Capture sunlight and convert it to DC electricity.</p>
          </div>

          <ArrowRight className="solar-flow-arrow" />

          <div className="solar-flow-step">
            <div className="solar-flow-icon">
              <CircuitBoard />
            </div>
            <h3>Inverter</h3>
            <p>Converts DC power to AC power for usable electricity.</p>
          </div>

          <ArrowRight className="solar-flow-arrow" />

          <div className="solar-flow-step">
            <div className="solar-flow-icon">
              <Network />
            </div>
            <h3>Distribution</h3>
            <p>Supplies clean power to your home or facility.</p>
          </div>

          <ArrowRight className="solar-flow-arrow" />

          <div className="solar-flow-step">
            <div className="solar-flow-icon">
              <Cable />
            </div>
            <h3>Grid and Backup</h3>
            <p>Excess power can be sent to the grid or stored when supported.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="solar-benefits-section">
        <div className="solar-benefits-image">
          <img
            src="/images/solar/solar-benefits.jpg"
            alt="Solar panels under a bright sky"
          />
        </div>

        <div className="solar-benefits-content">
          <SectionBadge>Benefits</SectionBadge>
          <h2>Benefits of Solar Energy</h2>

          <div className="solar-benefits-grid">
            {solarBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div className="solar-benefit-item" key={benefit.title}>
                  <Icon />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="solar-installation-section solar-container">
        <div className="solar-installation-heading">
          <SectionBadge>Our Installation Process</SectionBadge>
          <h2>
            A Simple and Transparent
            <br />
            <span>Installation Process</span>
          </h2>
        </div>

        <div className="solar-installation-steps">
          {solarProcess.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.title}>
                <div className="solar-install-step">
                  <div className="solar-install-icon">
                    <Icon />
                  </div>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                </div>

                {index !== solarProcess.length - 1 && (
                  <ArrowRight className="solar-install-arrow" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="solar-why-section">
        <div className="solar-container solar-why-inner">
          <div className="solar-why-heading">
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2>
              Why Choose
              <br />
              <span>Mars Power Controls?</span>
            </h2>
          </div>

          <div className="solar-reasons-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="solar-reason-item" key={reason.title}>
                  <Icon />
                  <h3>{reason.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="solar-final-cta">
        <div className="solar-container solar-cta-inner">
          <h2>
            Start Your
            <br />
            <span>Solar Project Today!</span>
          </h2>

          <p>
            Get a customized solar solution for your home,
            business or industry.
          </p>

          <div className="solar-cta-buttons">
            <a href="/contact#contact-form" className="solar-cta-primary">
              <CalendarDays />
              Get a Free Consultation
              <ArrowRight />
            </a>

            <a href="/contact" className="solar-cta-secondary">
              <Phone />
              Talk to Our Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolarSolutions;
