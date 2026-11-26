
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  CalendarClock,
  Settings,
  Factory,
  Building2,
  Warehouse,
  Ruler,
  ClipboardList,
  DraftingCompass,
  Hammer,
  Truck,
  BadgeCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

import "./TrussWork.css";

const imagePath = "/images/services/truss/";

const trussSolutions = [
  {
    title: "Industrial Truss Structures",
    description:
      "Strong steel truss systems for factories, industrial facilities and large span structures.",
    image: "industrial-truss.jpg",
    icon: Factory,
  },
  {
    title: "Commercial Truss Roofing",
    description:
      "Reliable roofing frameworks for commercial buildings, showrooms and workspaces.",
    image: "commercial-truss.jpg",
    icon: Building2,
  },
  {
    title: "Agricultural Truss Sheds",
    description:
      "Practical truss structures for farm sheds, storage facilities and agricultural applications.",
    image: "agricultural-truss.jpg",
    icon: Warehouse,
  },
  {
    title: "Custom Truss Solutions",
    description:
      "Project specific truss designs developed around your structural requirements.",
    image: "custom-truss.jpg",
    icon: Ruler,
  },
];

const benefits = [
  "Strong and Stable Structures",
  "Weather Resistant and Durable",
  "Optimised and Cost Efficient",
  "Quick Fabrication and Installation",
  "Suitable for Large Spans",
  "Customised as per Project Needs",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding project needs, dimensions and site conditions.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Engineering",
    description: "Planning suitable truss layouts and structural specifications.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication at Our Facility",
    description: "Fabricating structural components with quality checks.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Delivery and Installation",
    description: "Transporting and installing the fabricated structure.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Final Inspection and Handover",
    description: "Checking the completed structure before handover.",
    icon: BadgeCheck,
  },
];

const projects = [
  {
    title: "Industrial Roofing Structure",
    image: "truss-project-one.jpg",
  },
  {
    title: "Open Span Steel Truss",
    image: "truss-project-two.jpg",
  },
  {
    title: "Commercial Truss Shed",
    image: "truss-project-three.jpg",
  },
];

const companyStrengths = [
  "Experienced and Skilled Team",
  "Quality Materials and Workmanship",
  "Custom and Scalable Solutions",
  "Timely Project Completion",
  "End to End Project Support",
];

const features = [
  { title: "High Strength", icon: ShieldCheck },
  { title: "Cost Effective", icon: Layers3 },
  { title: "Long Lasting", icon: CalendarClock },
  { title: "Custom Designs", icon: Settings },
];

function SectionBadge({ children }) {
  return (
    <div className="truss-badge">
      <span>⁄⁄</span>
      {children}
    </div>
  );
}

function TrussWork() {
  return (
    <main className="truss-page">

      {/* HERO */}

      <section className="truss-hero">
        <div className="truss-hero-image" />
        <div className="truss-hero-overlay" />

        <div className="truss-container truss-hero-content">
          <div className="truss-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            Truss Work
          </div>

          <h1>
            Truss <span>Work</span>
          </h1>

          <p>
            Engineered steel truss solutions for strong,
            durable and cost effective roofing structures.
          </p>

          <div className="truss-hero-actions">
            <a
              href="/contact#contact-form"
              className="truss-btn truss-btn-orange"
            >
              Get a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="truss-btn truss-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="truss-hero-accent" />
      </section>

      {/* OVERVIEW */}

      <section className="truss-section truss-overview">
        <div className="truss-container truss-overview-grid">

          <div className="truss-overview-image">
            <img
              src={`${imagePath}truss-overview.jpg`}
              alt="Steel truss roof framework"
            />
            <span className="truss-image-accent" />
          </div>

          <div className="truss-overview-content">
            <SectionBadge>Service Overview</SectionBadge>

            <h2>Structural Truss Solutions for Every Space</h2>

            <p>
              We design, fabricate and install high quality steel
              truss structures that provide strength, stability
              and long lasting performance for industrial,
              commercial and agricultural applications.
            </p>

            <div className="truss-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="truss-feature" key={feature.title}>
                    <Icon />
                    <strong>{feature.title}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSS SOLUTIONS */}

      <section className="truss-section truss-solutions">
        <div className="truss-container truss-solutions-layout">

          <div className="truss-solutions-heading">
            <SectionBadge>Our Range</SectionBadge>
            <h2>Truss Work Solutions</h2>
            <p>
              Engineered steel framework solutions for
              industrial, commercial and agricultural projects.
            </p>
          </div>

          <div className="truss-solutions-grid">
            {trussSolutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="truss-solution-card" key={item.title}>
                  <div className="truss-solution-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span className="truss-solution-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="truss-solution-content">
                    <div className="truss-solution-title">
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

      {/* KEY BENEFITS */}

      <section className="truss-section truss-benefits">
        <div className="truss-container truss-benefits-grid">

          <div className="truss-benefits-image">
            <img
              src={`${imagePath}truss-benefits.jpg`}
              alt="Completed steel truss roofing structure"
              loading="lazy"
            />
            <span className="truss-image-accent" />
          </div>

          <div className="truss-benefits-content">
            <SectionBadge>Key Benefits</SectionBadge>

            <h2>Why Choose Our Truss Work</h2>

            <p>
              Our truss structures are engineered for safety,
              durability and versatility, making them ideal
              for a wide range of applications.
            </p>

            <div className="truss-benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="truss-section truss-process">
        <div className="truss-container truss-process-layout">

          <div className="truss-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>From Design to Installation</h2>
          </div>

          <div className="truss-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="truss-process-step" key={step.number}>
                  <span className="truss-process-number">
                    {step.number}
                  </span>

                  {index < processSteps.length - 1 && (
                    <span className="truss-process-line" />
                  )}

                  <Icon className="truss-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MARS POWER CONTROLS */}

      <section className="truss-why">
        <div className="truss-why-image" />

        <div className="truss-container truss-why-grid">

          <div className="truss-why-content">
            <SectionBadge>Why Choose Mars Power Controls</SectionBadge>

            <h2>Built Around Strength and Reliability</h2>

            <p>
              A reliable partner for truss work with expertise
              in design, fabrication and on site execution.
            </p>
          </div>

          <div className="truss-company-strengths">
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

      <section className="truss-section truss-projects">
        <div className="truss-container">

          <div className="truss-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our Truss Work Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="truss-project-grid">
            {projects.map((project) => (
              <article className="truss-project-card" key={project.title}>
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="truss-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="truss-cta">
        <div className="truss-cta-image" />

        <div className="truss-container truss-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>

            <h2>Planning a Truss Work Project?</h2>

            <p>
              Get in touch with our team to discuss your
              requirements and get a tailored solution.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="truss-btn truss-btn-orange"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default TrussWork;
