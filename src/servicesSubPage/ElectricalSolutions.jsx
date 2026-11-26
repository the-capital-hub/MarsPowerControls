
import React from "react";
import {
  Zap,
  Settings,
  Wrench,
  Headphones,
  ShieldCheck,
  Gauge,
  Layers,
  RefreshCw,
  Factory,
  Warehouse,
  Building2,
  Sun,
  ClipboardList,
  DraftingCompass,
  Cog,
  UserCheck,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./ElectricalSolutions.css";

const features = [
  {
    icon: ShieldCheck,
    title: "High Safety Standards",
    description: "Safety focused electrical solutions and installation practices.",
  },
  {
    icon: Gauge,
    title: "Energy Efficient",
    description: "Efficient systems designed to support reliable operations.",
  },
  {
    icon: Layers,
    title: "Custom Built Solutions",
    description: "Electrical solutions planned around your project requirements.",
  },
  {
    icon: RefreshCw,
    title: "Low Maintenance",
    description: "Practical system design for dependable long term operation.",
  },
];

const applications = [
  {
    title: "Manufacturing Plants",
    image: "/images/services/electrical/manufacturing-plants.jpg",
    icon: Factory,
  },
  {
    title: "Warehouses and Logistics",
    image: "/images/services/electrical/warehouses-logistics.jpg",
    icon: Warehouse,
  },
  {
    title: "Commercial Buildings",
    image: "/images/services/electrical/commercial-buildings.jpg",
    icon: Building2,
  },
  {
    title: "Renewable Energy Projects",
    image: "/images/services/electrical/renewable-energy.jpg",
    icon: Sun,
  },
  {
    title: "Process Industries",
    image: "/images/services/electrical/process-industries.jpg",
    icon: Factory,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding project needs and site requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Engineering",
    description: "Planning electrical systems and technical specifications.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Manufacturing and Testing",
    description: "System preparation and quality checks.",
    icon: Cog,
  },
  {
    number: "04",
    title: "Installation and Commissioning",
    description: "Installation and system commissioning at site.",
    icon: Settings,
  },
  {
    number: "05",
    title: "Handover and Support",
    description: "Project handover and after sales assistance.",
    icon: UserCheck,
  },
];

const projects = [
  {
    title: "Industrial Control Panel",
    category: "Electrical Infrastructure",
    image: "/images/projects/industrial-shed.jpg",
  },
  {
    title: "Power Distribution System",
    category: "Industrial Electrical",
    image: "/images/services/electrical/power-distribution.jpg",
  },
  {
    title: "Plant Electrification",
    category: "Electrical Installation",
    image: "/images/services/electrical/plant-electrification.jpg",
  },
];

function ElectricalBadge({ children }) {
  return (
    <div className="electrical-badge">
      <span className="electrical-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function ElectricalSolutions() {
  return (
    <main className="electrical-page">

      {/* Hero */}
      <section className="electrical-hero">
        <div className="electrical-hero-overlay" />

        <div className="electrical-container electrical-hero-inner">
          <div className="electrical-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            <span>Electrical Solutions</span>
          </div>

          <div className="electrical-hero-content">
            <h1>
              Electrical <span>Solutions</span>
            </h1>

            <p>
              Reliable, safe and efficient electrical systems
              for industrial and commercial operations.
            </p>

            <div className="electrical-hero-actions">
              <a
                href="/contact#contact-form"
                className="electrical-primary-button"
              >
                Request a Quote
                <ArrowRight />
              </a>

              <a href="/contact" className="electrical-outline-button">
                <Headphones />
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="electrical-overview electrical-container">
        <div className="electrical-overview-image">
          <img
            src="/images/services/electrical/electrical-overview.jpg"
            alt="Industrial electrical control panel installation"
          />
        </div>

        <div className="electrical-overview-content">
          <ElectricalBadge>Service Overview</ElectricalBadge>

          <h2>End to End Electrical Infrastructure Solutions</h2>

          <p>
            We design, manufacture, install and commission a wide
            range of electrical systems including control panels,
            power distribution and complete industrial
            electrification solutions.
          </p>

          <div className="electrical-overview-services">
            <div>
              <Zap />
              <strong>Design and Engineering</strong>
            </div>

            <div>
              <Settings />
              <strong>Panel Manufacturing</strong>
            </div>

            <div>
              <Wrench />
              <strong>Installation and Commissioning</strong>
            </div>

            <div>
              <Headphones />
              <strong>After Sales Support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="electrical-features-section">
        <div className="electrical-container electrical-features-inner">
          <div className="electrical-features-heading">
            <ElectricalBadge>Key Features</ElectricalBadge>
            <h2>Built for Performance and Reliability</h2>
          </div>

          <div className="electrical-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="electrical-feature" key={feature.title}>
                  <div className="electrical-feature-icon">
                    <Icon />
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="electrical-applications electrical-container">
        <div className="electrical-applications-heading">
          <ElectricalBadge>Applications</ElectricalBadge>

          <h2>Serving Diverse Industry Needs</h2>

          <p>
            Our electrical solutions support a wide range of
            industrial and commercial sectors.
          </p>
        </div>

        <div className="electrical-applications-grid">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <article className="electrical-application-card" key={item.title}>
                <div className="electrical-application-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>

                <div className="electrical-application-title">
                  <Icon />
                  <h3>{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Work Process */}
      <section className="electrical-process-section">
        <div className="electrical-container electrical-process-inner">
          <div className="electrical-process-heading">
            <ElectricalBadge>Our Process</ElectricalBadge>

            <h2>A Structured Approach for Reliable Delivery</h2>

            <p>
              Every project follows a structured process focused
              on planning, quality and dependable execution.
            </p>
          </div>

          <div className="electrical-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="electrical-process-step" key={step.number}>
                  <div className="electrical-process-number">
                    {step.number}
                  </div>

                  <div className="electrical-process-icon">
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== processSteps.length - 1 && (
                    <span className="electrical-process-line" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="electrical-why-section">
        <div className="electrical-container electrical-why-inner">
          <div className="electrical-why-heading">
            <ElectricalBadge>Why Choose Us</ElectricalBadge>
            <h2>Why Choose Mars Power Controls?</h2>
          </div>

          <div className="electrical-why-points">
            <div>
              <CheckCircle2 />
              <span>Experienced Engineering Team</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Quality and Compliance Assurance</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>On Time Project Execution</span>
            </div>
          </div>

          <div className="electrical-why-image">
            <img
              src="/images/services/electrical/electrical-team.jpg"
              alt="Electrical engineering professional inspecting control panels"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="electrical-projects-section electrical-container">
        <div className="electrical-projects-heading">
          <div>
            <ElectricalBadge>Related Projects</ElectricalBadge>
            <h2>Our Electrical Projects</h2>
          </div>

          <a href="/projects" className="electrical-view-projects">
            View All Projects
            <ArrowRight />
          </a>
        </div>

        <div className="electrical-projects-grid">
          {projects.map((project) => (
            <article className="electrical-project-card" key={project.title}>
              <div className="electrical-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="electrical-project-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="electrical-cta-section">
        <div className="electrical-container electrical-cta-inner">
          <div className="electrical-cta-copy">
            <h2>Let's Build Your Electrical Infrastructure</h2>
            <p>
              Discuss your requirements with our team and explore
              a suitable solution for your project.
            </p>
          </div>

          <a href="/contact#contact-form" className="electrical-cta-button">
            Enquire Now
            <ArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}

export default ElectricalSolutions;
