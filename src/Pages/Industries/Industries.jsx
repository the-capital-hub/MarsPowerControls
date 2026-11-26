
import React from "react";
import {
  Settings,
  ClipboardCheck,
  Users,
  Factory,
  Building2,
  Leaf,
  HardHat,
  Sun,
  Warehouse,
  ArrowRight,
  Award,
  Layers,
  ShieldCheck,
  Headphones,
  CalendarDays,
  Phone,
} from "lucide-react";

import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Industrial & Manufacturing",
    description:
      "Electrical systems, automation and fabrication support for manufacturing units.",
    image: "/images/industries/industrial-manufacturing.jpg",
    icon: Factory,
  },
  {
    number: "02",
    title: "Commercial Infrastructure",
    description:
      "Integrated electrical and power solutions for commercial and institutional projects.",
    image: "/images/industries/commercial-infrastructure.jpg",
    icon: Building2,
  },
  {
    number: "03",
    title: "Agriculture",
    description:
      "Reliable power and automation solutions for modern agricultural operations.",
    image: "/images/industries/agriculture.jpg",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Construction & Real Estate",
    description:
      "Electrical infrastructure and support for residential, commercial and industrial buildings.",
    image: "/images/industries/construction-real-estate.jpg",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Energy & Solar",
    description:
      "End to end solar and energy solutions for a cleaner and sustainable future.",
    image: "/images/industries/energy-solar.jpg",
    icon: Sun,
  },
  {
    number: "06",
    title: "Warehousing & Logistics",
    description:
      "Efficient and safe electrical systems for warehouses, distribution centers and logistics.",
    image: "/images/industries/warehousing-logistics.jpg",
    icon: Warehouse,
  },
];

const advantages = [
  {
    title: "Industry Expertise",
    icon: Award,
  },
  {
    title: "Customized Solutions",
    icon: Layers,
  },
  {
    title: "Quality and Safety",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Support",
    icon: Headphones,
  },
];

function IndustryBadge({ children }) {
  return (
    <div className="industry-badge">
      <span className="industry-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function Industries() {
  return (
    <main className="industries-page">

      {/* Hero Banner */}
      <section className="industries-hero">
        <div className="industries-hero-overlay" />

        <div className="industries-container industries-hero-content">
          <div className="industries-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Industries We Serve</span>
          </div>

          <div className="industries-hero-heading">
            <span className="industries-hero-accent" />

            <div>
              <h1>Industries We Serve</h1>
              <p>
                Reliable Electrical, Automation and Solar Solutions
                <br className="industries-desktop-break" />
                for Diverse Industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="industries-overview industries-container">
        <div className="industries-overview-copy">
          <IndustryBadge>Our Industries</IndustryBadge>

          <h2>
            Powering a Wide Range
            <br />
            of <span>Industries</span>
          </h2>

          <p>
            We deliver customized electrical, automation, fabrication
            and solar solutions that meet the unique operational needs
            of different industries.
          </p>
        </div>

        <div className="industries-stats">
          <div className="industry-stat">
            <Settings />
            <strong>6+</strong>
            <span>Industry Segments</span>
          </div>

          <div className="industry-stat">
            <ClipboardCheck />
            <strong>100+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="industry-stat">
            <Users />
            <strong>Trusted by</strong>
            <span>Leading Clients</span>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="industries-cards-section industries-container">
        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                className="industry-card"
                key={industry.number}
              >
                <div className="industry-card-image">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                  />

                  <div className="industry-card-icon">
                    <Icon />
                  </div>

                  <span className="industry-card-number">
                    {industry.number}
                  </span>
                </div>

                <div className="industry-card-content">
                  <div className="industry-card-copy">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>

                  <a
                    href="/contact"
                    className="industry-card-arrow"
                    aria-label={`Enquire about ${industry.title}`}
                  >
                    <ArrowRight />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="industries-advantage">
        <div className="industries-container industries-advantage-inner">

          <div className="industries-advantage-heading">
            <IndustryBadge>Our Advantage</IndustryBadge>

            <h2>
              Why Choose
              <br />
              <span>Mars Power Controls?</span>
            </h2>
          </div>

          <div className="industries-advantage-grid">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <div
                  className="industry-advantage-item"
                  key={advantage.title}
                >
                  <Icon />
                  <h3>{advantage.title}</h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="industries-contact-section">
        <div className="industries-container industries-contact-inner">

          <div className="industries-contact-image">
            <img
              src="/images/industries/industry-contact.jpg"
              alt="Engineering helmet and technical project blueprints"
              loading="lazy"
            />
          </div>

          <div className="industries-contact-content">
            <h2>
              Let's Build a
              <br />
              <span>Stronger Industry Together</span>
            </h2>

            <p>
              Discuss your project requirements with our experts
              and get a tailored solution for your industry.
            </p>

            <div className="industries-contact-buttons">
              <a
                href="/contact#contact-form"
                className="industries-contact-primary"
              >
                <CalendarDays />
                Get a Free Consultation
                <ArrowRight />
              </a>

              <a
                href="/contact"
                className="industries-contact-secondary"
              >
                <Phone />
                Talk to Our Experts
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Industries;
