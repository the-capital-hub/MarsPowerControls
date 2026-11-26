
import React from "react";
import {
  ArrowRight,
  Tractor,
  Warehouse,
  Leaf,
  Settings,
  ShieldCheck,
  Ruler,
  DraftingCompass,
  Hammer,
  Paintbrush,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  Phone,
  Building2,
  Wrench,
  Layers3,
} from "lucide-react";

import "./AgriculturalFabrication.css";

const imagePath = "/images/services/agricultural/";

const agriculturalSolutions = [
  {
    title: "Farm Equipment Structures",
    description:
      "Strong and practical metal structures for agricultural equipment and farm operations.",
    image: "farm-equipment.jpg",
    icon: Tractor,
  },
  {
    title: "Cattle Sheds and Poultry Structures",
    description:
      "Functional shed structures designed for livestock and poultry facilities.",
    image: "cattle-sheds.jpg",
    icon: Warehouse,
  },
  {
    title: "Greenhouse and Polyhouse Structures",
    description:
      "Metal framework solutions for protected cultivation and modern farming.",
    image: "greenhouse.jpg",
    icon: Leaf,
  },
];

const features = [
  { title: "Durable Structures", icon: Settings },
  { title: "Farm Ready Designs", icon: Leaf },
  { title: "Custom Fabrication", icon: Layers3 },
  { title: "Low Maintenance", icon: ShieldCheck },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding your agricultural needs and project scope.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Engineering",
    description: "Preparing suitable layouts and structural designs.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication and Assembly",
    description: "Fabricating and assembling the required metal structures.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Finishing and Coating",
    description: "Applying appropriate finishing and protective coatings.",
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Installation and Handover",
    description: "Completing installation and final quality checks.",
    icon: PackageCheck,
  },
];

const benefits = [
  "Agriculture focused expertise",
  "Quality fabrication",
  "Custom and scalable solutions",
  "Durable and weather resistant designs",
  "Timely project completion",
];

const projects = [
  {
    image: "agri-project-one.jpg",
    title: "Cattle Shed Structure",
  },
  {
    image: "agri-project-two.jpg",
    title: "Greenhouse Framework",
  },
  {
    image: "agri-project-three.jpg",
    title: "Farm Equipment Shed",
  },
];

const customCapabilities = [
  "Custom Designs and Dimensions",
  "Heavy Duty and Long Lasting",
  "Agricultural Equipment Fabrication",
  "On Site Installation and Support",
];

function SectionBadge({ children }) {
  return (
    <div className="agri-badge">
      <span className="agri-badge-mark">⁄⁄</span>
      <span>{children}</span>
    </div>
  );
}

function AgriculturalFabrication() {
  return (
    <main className="agri-page">

      {/* HERO SECTION */}

      <section className="agri-hero">
        <div className="agri-hero-image" />
        <div className="agri-hero-overlay" />

        <div className="agri-container agri-hero-content">
          <div className="agri-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            Agricultural Fabrication
          </div>

          <h1>
            Agricultural
            <span>Fabrication</span>
          </h1>

          <p>
            Robust, long lasting and custom metal fabrication
            solutions for modern and efficient agriculture.
          </p>

          <div className="agri-hero-actions">
            <a
              href="/contact#contact-form"
              className="agri-btn agri-btn-orange"
            >
              Get a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="agri-btn agri-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="agri-hero-accent" />
      </section>

      {/* SERVICE OVERVIEW */}

      <section className="agri-section agri-overview">
        <div className="agri-container agri-overview-grid">

          <div className="agri-overview-image">
            <img
              src={`${imagePath}agri-overview.jpg`}
              alt="Steel agricultural cattle shed structure"
            />
            <span className="agri-image-accent" />
          </div>

          <div className="agri-overview-content">
            <SectionBadge>Service Overview</SectionBadge>

            <h2>Metal Fabrication for Agricultural Needs</h2>

            <p>
              We design and fabricate durable and efficient metal
              structures and equipment that support modern farming,
              livestock management and agricultural operations.
            </p>

            <div className="agri-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="agri-feature" key={feature.title}>
                    <Icon />
                    <strong>{feature.title}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AGRICULTURAL SOLUTIONS */}

      <section className="agri-section agri-solutions">
        <div className="agri-container agri-solutions-layout">

          <div className="agri-solutions-heading">
            <SectionBadge>Our Range</SectionBadge>
            <h2>Agricultural Fabrication Solutions</h2>
            <p>
              Explore practical metal fabrication solutions
              for farms, livestock facilities and modern agriculture.
            </p>
          </div>

          <div className="agri-solutions-grid">
            {agriculturalSolutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="agri-solution-card" key={item.title}>
                  <div className="agri-solution-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span className="agri-solution-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="agri-solution-content">
                    <div>
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

      <section className="agri-section agri-custom">
        <div className="agri-container agri-custom-grid">

          <div className="agri-custom-image">
            <img
              src={`${imagePath}custom-agricultural.jpg`}
              alt="Custom fabricated agricultural metal trailer"
              loading="lazy"
            />

            <span className="agri-image-accent" />
          </div>

          <div className="agri-custom-content">
            <SectionBadge>Custom Solutions</SectionBadge>

            <h2>Custom Agricultural Fabrication</h2>

            <p>
              Get tailor made metal fabrication solutions for
              your specific agricultural requirements, from
              heavy duty structures to specialised equipment.
            </p>

            <div className="agri-check-grid">
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

      {/* PROCESS */}

      <section className="agri-section agri-process">
        <div className="agri-container">

          <div className="agri-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>From Design to Installation</h2>
          </div>

          <div className="agri-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="agri-process-step" key={step.number}>
                  <span className="agri-process-number">
                    {step.number}
                  </span>

                  <Icon className="agri-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="agri-why">
        <div className="agri-why-image" />

        <div className="agri-container agri-why-grid">

          <div className="agri-why-content">
            <SectionBadge>Why Choose</SectionBadge>

            <h2>Mars Power Controls</h2>

            <p>
              A trusted partner for agricultural fabrication
              with a focus on strength, efficiency, quality
              and timely delivery.
            </p>
          </div>

          <div className="agri-benefits">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}

      <section className="agri-section agri-projects">
        <div className="agri-container">

          <div className="agri-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our Agricultural Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="agri-project-grid">
            {projects.map((project) => (
              <article className="agri-project-card" key={project.title}>
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="agri-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="agri-cta">
        <div className="agri-cta-image" />

        <div className="agri-container agri-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>

            <h2>Planning an Agricultural Fabrication Project?</h2>

            <p>
              Get in touch with our team to discuss your requirements
              and get a tailored solution.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="agri-btn agri-btn-orange"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default AgriculturalFabrication;
