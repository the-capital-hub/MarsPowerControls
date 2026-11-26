
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Wrench,
  Settings,
  Fence,
  DoorOpen,
  Factory,
  Building2,
  Ruler,
  ClipboardList,
  DraftingCompass,
  Hammer,
  ClipboardCheck,
  Truck,
  CheckCircle2,
  Phone,
  Container,
  Construction,
} from "lucide-react";

import "./SSMSWorks.css";

const imagePath = "/images/services/ss-ms/";

const fabricationSolutions = [
  {
    title: "Railings and Balustrades",
    description:
      "Custom stainless steel and mild steel railings for stairs, balconies and commercial spaces.",
    image: "railings-balustrades.jpg",
    icon: Fence,
  },
  {
    title: "Gates and Grills",
    description:
      "Strong and functional metal gates, grills and security structures for different applications.",
    image: "gates-grills.jpg",
    icon: DoorOpen,
  },
  {
    title: "Tanks and Vessels",
    description:
      "Fabricated metal tanks and vessels designed around project specifications and applications.",
    image: "tanks-vessels.jpg",
    icon: Container,
  },
  {
    title: "Platforms and Structures",
    description:
      "Industrial platforms, access structures and support frameworks for industrial facilities.",
    image: "platforms-structures.jpg",
    icon: Construction,
  },
];

const features = [
  { title: "Durable and Strong", icon: ShieldCheck },
  { title: "Precision Fabrication", icon: Layers3 },
  { title: "Custom Solutions", icon: Wrench },
  { title: "Wide Applications", icon: Settings },
];

const benefits = [
  "Corrosion Resistant Finish",
  "Custom Fabrication as per Need",
  "High Strength and Durability",
  "Aesthetic and Functional Design",
  "Suitable for Indoor and Outdoor Use",
  "Reliable and Long Lasting Performance",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding project requirements and site conditions.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Planning",
    description: "Preparing dimensions, drawings and fabrication plans.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication and Assembly",
    description: "Manufacturing and assembling metal components.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description: "Checking dimensions, joints, strength and finish.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Delivery and Installation",
    description: "Delivering and installing the completed fabrication.",
    icon: Truck,
  },
];

const companyStrengths = [
  "Experienced and Skilled Team",
  "Quality Grade SS and MS Materials",
  "Custom and Project Specific Solutions",
  "On Time Project Delivery",
  "End to End Project Support",
];

const projects = [
  {
    title: "Stainless Steel Railings",
    image: "ssms-project-one.jpg",
  },
  {
    title: "Industrial Steel Platform",
    image: "ssms-project-two.jpg",
  },
  {
    title: "Stainless Steel Tanks",
    image: "ssms-project-three.jpg",
  },
  {
    title: "Custom Metal Gates",
    image: "ssms-project-four.jpg",
  },
];

const customCapabilities = [
  "Stainless Steel Fabrication",
  "Mild Steel Fabrication",
  "Custom Sizes and Dimensions",
  "Industrial and Architectural Applications",
];

function SectionBadge({ children }) {
  return (
    <div className="ssms-badge">
      <span>⁄⁄</span>
      {children}
    </div>
  );
}

function SSMSWorks() {
  return (
    <main className="ssms-page">

      {/* HERO */}

      <section className="ssms-hero">
        <div className="ssms-hero-image" />
        <div className="ssms-hero-overlay" />

        <div className="ssms-container ssms-hero-content">
          <div className="ssms-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            SS & MS Works
          </div>

          <h1>
            SS & MS
            <span>Works</span>
          </h1>

          <p>
            Precision fabrication in Stainless Steel (SS)
            and Mild Steel (MS) for industrial, commercial
            and architectural needs.
          </p>

          <div className="ssms-hero-actions">
            <a
              href="/contact#contact-form"
              className="ssms-btn ssms-btn-orange"
            >
              Get a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="ssms-btn ssms-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="ssms-hero-accent" />
      </section>

      {/* OVERVIEW */}

      <section className="ssms-section ssms-overview">
        <div className="ssms-container ssms-overview-grid">

          <div className="ssms-overview-image">
            <img
              src={`${imagePath}ssms-overview.jpg`}
              alt="Industrial mild steel platform fabrication"
            />
            <span className="ssms-image-accent" />
          </div>

          <div className="ssms-overview-content">
            <SectionBadge>Service Overview</SectionBadge>

            <h2>SS & MS Fabrication Works</h2>

            <p>
              We provide comprehensive SS and MS fabrication
              solutions with high quality materials, precise
              workmanship and durable finishes for a wide
              range of industrial and commercial applications.
            </p>

            <div className="ssms-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="ssms-feature" key={feature.title}>
                    <Icon />
                    <strong>{feature.title}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FABRICATION SOLUTIONS */}

      <section className="ssms-section ssms-solutions">
        <div className="ssms-container ssms-solutions-layout">

          <div className="ssms-solutions-heading">
            <SectionBadge>Our Range</SectionBadge>
            <h2>Our SS & MS Work Solutions</h2>
            <p>
              Explore custom stainless steel and mild steel
              fabrication for industrial, commercial and
              architectural applications.
            </p>
          </div>

          <div className="ssms-solutions-grid">
            {fabricationSolutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="ssms-solution-card" key={item.title}>
                  <div className="ssms-solution-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span className="ssms-solution-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="ssms-solution-content">
                    <div className="ssms-solution-title">
                      <Icon size={19} />
                      <h3>{item.title}</h3>
                    </div>

                    <p>{item.description}</p>

                    <a
                      href="/contact#contact-form"
                      aria-label={`Enquire about ${item.title}`}
                    >
                      <ArrowRight size={19} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOM FABRICATION */}

      <section className="ssms-section ssms-custom">
        <div className="ssms-container ssms-custom-grid">

          <div className="ssms-custom-image">
            <img
              src={`${imagePath}custom-ssms-fabrication.jpg`}
              alt="Custom stainless steel architectural fabrication"
              loading="lazy"
            />
            <span className="ssms-image-accent" />
          </div>

          <div className="ssms-custom-content">
            <SectionBadge>Custom Solutions</SectionBadge>

            <h2>Fabrication Designed Around Your Needs</h2>

            <p>
              From architectural metalwork to industrial
              fabrication, we develop custom SS and MS
              solutions based on your project dimensions,
              functional needs and design requirements.
            </p>

            <div className="ssms-check-grid">
              {customCapabilities.map((item) => (
                <span key={item}>
                  <CheckCircle2 />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}

      <section className="ssms-section ssms-benefits">
        <div className="ssms-container ssms-benefits-grid">

          <div className="ssms-benefits-content">
            <SectionBadge>Key Benefits</SectionBadge>

            <h2>Why Choose Our SS & MS Works</h2>

            <p>
              Engineered, fabricated and finished to deliver
              strength, durability and a clean professional
              look for long term performance.
            </p>

            <div className="ssms-benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ssms-benefits-image">
            <img
              src={`${imagePath}ssms-benefits.jpg`}
              alt="Stainless steel canopy and architectural metalwork"
              loading="lazy"
            />
            <span className="ssms-image-accent" />
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="ssms-section ssms-process">
        <div className="ssms-container ssms-process-layout">

          <div className="ssms-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>From Design to Installation</h2>
          </div>

          <div className="ssms-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="ssms-process-step" key={step.number}>
                  <span className="ssms-process-number">
                    {step.number}
                  </span>

                  {index < processSteps.length - 1 && (
                    <span className="ssms-process-line" />
                  )}

                  <Icon className="ssms-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MARS POWER CONTROLS */}

      <section className="ssms-why">
        <div className="ssms-why-image" />

        <div className="ssms-container ssms-why-grid">

          <div className="ssms-why-content">
            <SectionBadge>Why Choose Mars Power Controls</SectionBadge>

            <h2>Precision Workmanship. Lasting Strength.</h2>

            <p>
              A trusted partner for SS and MS works with
              expertise in fabrication, finishing and
              turnkey execution.
            </p>
          </div>

          <div className="ssms-company-strengths">
            {companyStrengths.map((item) => (
              <div key={item}>
                <CheckCircle2 />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="ssms-section ssms-projects">
        <div className="ssms-container">

          <div className="ssms-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our SS & MS Work Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="ssms-project-grid">
            {projects.map((project) => (
              <article className="ssms-project-card" key={project.title}>
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="ssms-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="ssms-cta">
        <div className="ssms-cta-image" />

        <div className="ssms-container ssms-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>

            <h2>Need SS & MS Fabrication for Your Project?</h2>

            <p>
              Get in touch with our team to discuss your
              requirements and get a tailored solution.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="ssms-btn ssms-btn-orange"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default SSMSWorks;
