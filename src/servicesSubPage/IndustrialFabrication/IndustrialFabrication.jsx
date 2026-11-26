
import React from "react";
import {
  Layers,
  Settings,
  Wrench,
  Headphones,
  ShieldCheck,
  Factory,
  Warehouse,
  Building2,
  Zap,
  Cog,
  DraftingCompass,
  ClipboardList,
  ClipboardCheck,
  HardHat,
  Award,
  ArrowRight,
  CheckCircle2,
  Container,
  Ruler,
  Hammer,
  Workflow,
} from "lucide-react";

import "./IndustrialFabrication.css";

const capabilities = [
  {
    icon: Layers,
    title: "Structural Fabrication",
    description: "Custom steel structures and industrial frameworks.",
  },
  {
    icon: Container,
    title: "Tank and Vessel Fabrication",
    description: "Fabrication solutions for industrial storage requirements.",
  },
  {
    icon: Ruler,
    title: "Platforms and Walkways",
    description: "Access platforms, stairways and industrial walkways.",
  },
  {
    icon: Settings,
    title: "Custom Metal Works",
    description: "Metal fabrication based on project specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Site Erection and Installation",
    description: "On site assembly, erection and installation support.",
  },
];

const fabricationTypes = [
  {
    title: "Structural Steel Works",
    image: "/images/services/fabrication/structural-steel.jpg",
  },
  {
    title: "Process Platforms",
    image: "/images/services/fabrication/process-platforms.jpg",
  },
  {
    title: "Storage Tanks and Vessels",
    image: "/images/services/fabrication/storage-tanks.jpg",
  },
  {
    title: "Ducts and Supports",
    image: "/images/services/fabrication/ducts-supports.jpg",
  },
  {
    title: "Industrial Frames",
    image: "/images/services/fabrication/industrial-frames.jpg",
  },
];

const industries = [
  { title: "Manufacturing", icon: Factory },
  { title: "Process Industries", icon: Workflow },
  { title: "Warehousing and Logistics", icon: Warehouse },
  { title: "Commercial Infrastructure", icon: Building2 },
  { title: "Power and Energy", icon: Zap },
  { title: "Industrial Systems", icon: Cog },
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
    description: "Technical drawings, measurements and fabrication planning.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication and Quality Check",
    description: "Fabrication with quality checks at every stage.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Installation and Erection",
    description: "Assembly and installation at the project site.",
    icon: Settings,
  },
  {
    number: "05",
    title: "Handover and Support",
    description: "Project handover and ongoing assistance.",
    icon: Headphones,
  },
];

const projects = [
  {
    title: "Structural Steel Framework",
    image: "/images/services/fabrication/structural-steel.jpg",
    category: "Structural Fabrication",
  },
  {
    title: "Industrial Access Platform",
    image: "/images/services/fabrication/process-platforms.jpg",
    category: "Platforms and Walkways",
  },
  {
    title: "Industrial Storage Tanks",
    image: "/images/services/fabrication/storage-tanks.jpg",
    category: "Tank Fabrication",
  },
];

function FabricationBadge({ children }) {
  return (
    <div className="fabrication-badge">
      <span className="fabrication-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function IndustrialFabrication() {
  return (
    <main className="fabrication-page">

      {/* Hero */}
      <section className="fabrication-hero">
        <div className="fabrication-hero-overlay" />

        <div className="fabrication-container fabrication-hero-inner">
          <div className="fabrication-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            <span>Industrial Fabrication</span>
          </div>

          <div className="fabrication-hero-content">
            <h1>
              Industrial <span>Fabrication</span>
            </h1>

            <p>
              Precision fabrication solutions for industrial,
              commercial and infrastructure projects.
            </p>

            <div className="fabrication-hero-actions">
              <a
                href="/contact#contact-form"
                className="fabrication-primary-button"
              >
                Request a Quote
                <ArrowRight />
              </a>

              <a href="/contact" className="fabrication-outline-button">
                <Headphones />
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="fabrication-overview fabrication-container">
        <div className="fabrication-overview-image">
          <img
            src="/images/services/fabrication/fabrication-overview.jpg"
            alt="Industrial structural steel fabrication"
          />
        </div>

        <div className="fabrication-overview-content">
          <FabricationBadge>Service Overview</FabricationBadge>

          <h2>Custom Fabrication for Industrial Excellence</h2>

          <p>
            We deliver fabrication solutions including structural
            steel, process platforms, industrial frames and custom
            metal works tailored to project requirements.
          </p>

          <div className="fabrication-overview-services">
            <div>
              <Settings />
              <strong>Design and Engineering</strong>
            </div>

            <div>
              <Layers />
              <strong>Fabrication and Assembly</strong>
            </div>

            <div>
              <Wrench />
              <strong>Installation and Erection</strong>
            </div>

            <div>
              <Headphones />
              <strong>After Sales Support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="fabrication-capabilities-section">
        <div className="fabrication-container fabrication-capabilities-inner">
          <div className="fabrication-capabilities-heading">
            <FabricationBadge>Our Capabilities</FabricationBadge>
            <h2>Advanced Fabrication Capabilities</h2>
          </div>

          <div className="fabrication-capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="fabrication-capability" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fabrication Types */}
      <section className="fabrication-types-section fabrication-container">
        <div className="fabrication-section-heading">
          <FabricationBadge>Types of Fabrication Work</FabricationBadge>
          <h2>Fabrication Solutions for Every Requirement</h2>
        </div>

        <div className="fabrication-types-grid">
          {fabricationTypes.map((item) => (
            <article className="fabrication-type-card" key={item.title}>
              <div className="fabrication-type-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="fabrication-industries-section">
        <div className="fabrication-container fabrication-industries-inner">
          <div className="fabrication-industries-heading">
            <FabricationBadge>Industries We Serve</FabricationBadge>
            <h2>Serving Diverse Industry Needs</h2>
          </div>

          <div className="fabrication-industries-grid">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div className="fabrication-industry" key={item.title}>
                  <Icon />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="fabrication-process-section">
        <div className="fabrication-container fabrication-process-inner">
          <div className="fabrication-process-heading">
            <FabricationBadge>Our Process</FabricationBadge>

            <h2>A Structured Fabrication Approach</h2>

            <p>
              From initial planning to final installation,
              we follow a systematic approach focused on
              quality and reliable project execution.
            </p>
          </div>

          <div className="fabrication-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="fabrication-process-step" key={step.number}>
                  <div className="fabrication-process-number">
                    {step.number}
                  </div>

                  <div className="fabrication-process-icon">
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== processSteps.length - 1 && (
                    <span className="fabrication-process-line" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality and Safety */}
      <section className="fabrication-quality-section">
        <div className="fabrication-container fabrication-quality-inner">
          <div className="fabrication-quality-copy">
            <FabricationBadge>Quality and Safety</FabricationBadge>

            <h2>Built with a Focus on Quality and Safety</h2>

            <p>
              We follow quality checks and safety practices
              throughout fabrication and installation to
              support durable and reliable solutions.
            </p>
          </div>

          <div className="fabrication-quality-image">
            <img
              src="/images/services/fabrication/fabrication-quality.jpg"
              alt="Engineer inspecting industrial fabrication work"
              loading="lazy"
            />
          </div>

          <div className="fabrication-quality-points">
            {[
              "Qualified and Experienced Team",
              "Standard Compliant Processes",
              "Rigorous Quality Inspections",
              "Safety First Work Culture",
            ].map((point) => (
              <div key={point}>
                <CheckCircle2 />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="fabrication-projects-section fabrication-container">
        <div className="fabrication-projects-heading">
          <div>
            <FabricationBadge>Related Projects</FabricationBadge>
            <h2>Our Fabrication Projects</h2>
          </div>

          <a href="/projects" className="fabrication-view-projects">
            View All Projects
            <ArrowRight />
          </a>
        </div>

        <div className="fabrication-projects-grid">
          {projects.map((project) => (
            <article className="fabrication-project-card" key={project.title}>
              <div className="fabrication-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="fabrication-project-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="fabrication-cta-section">
        <div className="fabrication-container fabrication-cta-inner">
          <div className="fabrication-cta-copy">
            <h2>Have a Fabrication Requirement?</h2>

            <p>
              Get in touch with our team to discuss your project
              and explore a suitable fabrication solution.
            </p>
          </div>

          <a href="/contact#contact-form" className="fabrication-cta-button">
            Enquire Now
            <ArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}

export default IndustrialFabrication;
