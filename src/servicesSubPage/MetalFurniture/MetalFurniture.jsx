
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  SlidersHorizontal,
  Settings,
  BriefcaseBusiness,
  Factory,
  Warehouse,
  Building2,
  Ruler,
  ClipboardList,
  DraftingCompass,
  Hammer,
  ClipboardCheck,
  Truck,
  CheckCircle2,
  Phone,
  Sofa,
  Wrench,
} from "lucide-react";

import "./MetalFurniture.css";

const imagePath = "/images/services/metal-furniture/";

const furnitureSolutions = [
  {
    title: "Office Furniture",
    description:
      "Functional metal desks, workstations, tables and storage furniture for modern offices.",
    image: "office-furniture.jpg",
    icon: BriefcaseBusiness,
  },
  {
    title: "Industrial Furniture",
    description:
      "Heavy duty workbenches, industrial tables and utility furniture for demanding workspaces.",
    image: "industrial-furniture.jpg",
    icon: Factory,
  },
  {
    title: "Storage Solutions",
    description:
      "Durable metal racks, shelving units and cabinets for organised storage.",
    image: "storage-solutions.jpg",
    icon: Warehouse,
  },
  {
    title: "Commercial Furniture",
    description:
      "Custom metal furniture for commercial spaces, institutions and business environments.",
    image: "commercial-furniture.jpg",
    icon: Building2,
  },
];

const features = [
  { title: "Heavy Duty", icon: ShieldCheck },
  { title: "Modern Design", icon: Layers3 },
  { title: "Custom Builds", icon: SlidersHorizontal },
  { title: "Long Lasting", icon: Settings },
];

const benefits = [
  "Strong and Durable Construction",
  "Customised as per Requirements",
  "Modern and Space Efficient Designs",
  "Low Maintenance",
  "Suitable for Indoor and Outdoor Use",
  "High Load Bearing Capacity",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding your furniture needs and space requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Prototyping",
    description: "Preparing suitable designs, dimensions and specifications.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication and Finishing",
    description: "Manufacturing and finishing furniture components.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description: "Checking strength, finish and overall product quality.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Delivery and Installation",
    description: "Delivering and installing the finished furniture.",
    icon: Truck,
  },
];

const companyStrengths = [
  "Experienced Fabrication Team",
  "High Quality Materials",
  "Custom and Scalable Designs",
  "On Time Delivery",
  "End to End Project Support",
];

const projects = [
  {
    title: "Modern Office Furniture",
    image: "furniture-project-one.jpg",
  },
  {
    title: "Industrial Workbench",
    image: "furniture-project-two.jpg",
  },
  {
    title: "Custom Metal Shelving",
    image: "furniture-project-three.jpg",
  },
  {
    title: "Outdoor Metal Seating",
    image: "furniture-project-four.jpg",
  },
];

const customCapabilities = [
  "Custom Sizes and Dimensions",
  "Multiple Design Options",
  "Durable Metal Construction",
  "Suitable Surface Finishes",
];

function SectionBadge({ children }) {
  return (
    <div className="mf-badge">
      <span>⁄⁄</span>
      {children}
    </div>
  );
}

function MetalFurniture() {
  return (
    <main className="mf-page">

      {/* HERO */}

      <section className="mf-hero">
        <div className="mf-hero-image" />
        <div className="mf-hero-overlay" />

        <div className="mf-container mf-hero-content">
          <div className="mf-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            Metal Furniture
          </div>

          <h1>
            Metal
            <span>Furniture</span>
          </h1>

          <p>
            Durable, modern and custom metal furniture solutions
            for industrial, commercial and workspace needs.
          </p>

          <div className="mf-hero-actions">
            <a
              href="/contact#contact-form"
              className="mf-btn mf-btn-orange"
            >
              Get a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="mf-btn mf-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="mf-hero-accent" />
      </section>

      {/* OVERVIEW */}

      <section className="mf-section mf-overview">
        <div className="mf-container mf-overview-grid">

          <div className="mf-overview-image">
            <img
              src={`${imagePath}furniture-overview.jpg`}
              alt="Modern metal furniture in an office space"
            />
            <span className="mf-image-accent" />
          </div>

          <div className="mf-overview-content">
            <SectionBadge>Service Overview</SectionBadge>

            <h2>Fabricated Metal Furniture for Modern Spaces</h2>

            <p>
              We design and manufacture strong, stylish and
              functional metal furniture that combines durability
              with modern design, suitable for offices, industries,
              commercial spaces and more.
            </p>

            <div className="mf-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="mf-feature" key={feature.title}>
                    <Icon />
                    <strong>{feature.title}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FURNITURE SOLUTIONS */}

      <section className="mf-section mf-solutions">
        <div className="mf-container mf-solutions-layout">

          <div className="mf-solutions-heading">
            <SectionBadge>Our Range</SectionBadge>
            <h2>Our Metal Furniture Solutions</h2>
            <p>
              Explore practical and customised metal furniture
              for offices, industrial facilities and commercial spaces.
            </p>
          </div>

          <div className="mf-solutions-grid">
            {furnitureSolutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="mf-solution-card" key={item.title}>
                  <div className="mf-solution-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />

                    <span className="mf-solution-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mf-solution-content">
                    <div className="mf-solution-title">
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

      {/* CUSTOM FURNITURE */}

      <section className="mf-section mf-custom">
        <div className="mf-container mf-custom-grid">

          <div className="mf-custom-image">
            <img
              src={`${imagePath}custom-metal-furniture.jpg`}
              alt="Custom metal and wood outdoor furniture"
              loading="lazy"
            />
            <span className="mf-image-accent" />
          </div>

          <div className="mf-custom-content">
            <SectionBadge>Custom Solutions</SectionBadge>

            <h2>Furniture Designed Around Your Needs</h2>

            <p>
              From individual furniture pieces to complete
              workspace requirements, we offer custom metal
              fabrication solutions based on your preferred
              dimensions, design and application.
            </p>

            <div className="mf-check-grid">
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

      {/* BENEFITS */}

      <section className="mf-section mf-benefits">
        <div className="mf-container mf-benefits-grid">

          <div className="mf-benefits-content">
            <SectionBadge>Key Benefits</SectionBadge>

            <h2>Why Choose Our Metal Furniture</h2>

            <p>
              Our metal furniture is built for strength, utility
              and long term performance, with designs that suit
              a wide range of applications.
            </p>

            <div className="mf-benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mf-benefits-image">
            <img
              src={`${imagePath}furniture-benefits.jpg`}
              alt="Durable metal outdoor seating"
              loading="lazy"
            />
            <span className="mf-image-accent" />
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="mf-section mf-process">
        <div className="mf-container mf-process-layout">

          <div className="mf-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>From Design to Delivery</h2>
          </div>

          <div className="mf-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="mf-process-step" key={step.number}>
                  <span className="mf-process-number">
                    {step.number}
                  </span>

                  {index < processSteps.length - 1 && (
                    <span className="mf-process-line" />
                  )}

                  <Icon className="mf-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MARS POWER CONTROLS */}

      <section className="mf-why">
        <div className="mf-why-image" />

        <div className="mf-container mf-why-grid">

          <div className="mf-why-content">
            <SectionBadge>Why Choose Mars Power Controls</SectionBadge>

            <h2>Built for Everyday Performance</h2>

            <p>
              A trusted partner for metal furniture with
              expertise in design, fabrication and custom solutions.
            </p>
          </div>

          <div className="mf-company-strengths">
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

      <section className="mf-section mf-projects">
        <div className="mf-container">

          <div className="mf-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our Metal Furniture Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="mf-project-grid">
            {projects.map((project) => (
              <article className="mf-project-card" key={project.title}>
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="mf-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mf-cta">
        <div className="mf-cta-image" />

        <div className="mf-container mf-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>

            <h2>Need Custom Metal Furniture for Your Project?</h2>

            <p>
              Get in touch with our team to discuss your
              requirements and get a tailored solution.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="mf-btn mf-btn-orange"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default MetalFurniture;
