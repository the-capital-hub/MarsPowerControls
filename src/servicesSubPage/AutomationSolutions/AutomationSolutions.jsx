
import React from "react";
import {
  Cpu,
  Settings,
  Layers,
  Monitor,
  Headphones,
  ShieldCheck,
  Factory,
  Warehouse,
  Building2,
  Zap,
  Workflow,
  Network,
  Bot,
  ChartNoAxesCombined,
  ClipboardList,
  DraftingCompass,
  Cog,
  HardHat,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Wrench,
} from "lucide-react";

import "./AutomationSolutions.css";

const capabilities = [
  { icon: Cpu, title: "PLC and SCADA Solutions" },
  { icon: Monitor, title: "HMI Integration" },
  { icon: Bot, title: "Industrial Robotics" },
  { icon: ChartNoAxesCombined, title: "Process Automation" },
  { icon: Network, title: "IIoT Integration" },
  { icon: Wrench, title: "Upgrades and Retrofit" },
];

const industries = [
  { icon: Factory, title: "Manufacturing" },
  { icon: Workflow, title: "Process Industries" },
  { icon: Warehouse, title: "Warehousing and Logistics" },
  { icon: Building2, title: "Commercial Infrastructure" },
  { icon: Zap, title: "Power and Energy" },
  { icon: Settings, title: "Industrial Systems" },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding operations and automation requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "System Design",
    description: "Planning control architecture and system specifications.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Panel Build and Programming",
    description: "Control panel development and automation programming.",
    icon: Cog,
  },
  {
    number: "04",
    title: "Installation and Commissioning",
    description: "System integration, testing and commissioning.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Training and Support",
    description: "Operator guidance and ongoing technical assistance.",
    icon: GraduationCap,
  },
];

const projects = [
  {
    title: "Industrial Control Panel",
    category: "PLC and Control Systems",
    image: "/images/services/automation/control-panel.jpg",
  },
  {
    title: "Automated Conveyor System",
    category: "Process Automation",
    image: "/images/services/automation/conveyor-system.jpg",
  },
  {
    title: "Robotic Production Line",
    category: "Industrial Robotics",
    image: "/images/services/automation/robotic-line.jpg",
  },
];

const panelFeatures = [
  "PLC Programming",
  "Control Panel Design",
  "System Integration and Testing",
];

const roboticsFeatures = [
  "Robotic Integration",
  "Material Handling Automation",
  "Customized Automation Solutions",
];

function AutomationBadge({ children }) {
  return (
    <div className="automation-badge">
      <span className="automation-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function AutomationSolutions() {
  return (
    <main className="automation-page">

      {/* Hero */}
      <section className="automation-hero">
        <div className="automation-hero-overlay" />

        <div className="automation-container automation-hero-inner">
          <div className="automation-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            <span>Automation Solutions</span>
          </div>

          <div className="automation-hero-content">
            <h1>
              Automation <span>Solutions</span>
            </h1>

            <p>
              Smart and reliable automation solutions to improve
              efficiency, safety and productivity across industries.
            </p>

            <div className="automation-hero-actions">
              <a
                href="/contact#contact-form"
                className="automation-primary-button"
              >
                Request a Quote
                <ArrowRight />
              </a>

              <a href="/contact" className="automation-outline-button">
                <Headphones />
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="automation-overview automation-container">
        <div className="automation-overview-image">
          <img
            src="/images/services/automation/automation-overview.jpg"
            alt="Engineer inspecting an industrial automation control panel"
          />
        </div>

        <div className="automation-overview-content">
          <AutomationBadge>Service Overview</AutomationBadge>

          <h2>End to End Industrial Automation Solutions</h2>

          <p>
            We design, develop and implement automation systems
            including PLC, SCADA, HMI and control panels to
            streamline operations, improve monitoring and
            support productivity.
          </p>

          <div className="automation-overview-services">
            <div>
              <Settings />
              <strong>System Design</strong>
            </div>

            <div>
              <Layers />
              <strong>Control Panel Manufacturing</strong>
            </div>

            <div>
              <Monitor />
              <strong>Installation and Commissioning</strong>
            </div>

            <div>
              <Headphones />
              <strong>Ongoing Support</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="automation-capabilities-section">
        <div className="automation-container automation-capabilities-inner">
          <div className="automation-capabilities-heading">
            <AutomationBadge>Our Capabilities</AutomationBadge>
            <h2>Comprehensive Automation Capabilities</h2>
          </div>

          <div className="automation-capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div className="automation-capability" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="automation-solutions-section automation-container">

        <article className="automation-solution-card">
          <div className="automation-solution-image">
            <img
              src="/images/services/automation/control-panel.jpg"
              alt="Industrial PLC and electrical control panels"
              loading="lazy"
            />
          </div>

          <div className="automation-solution-content">
            <AutomationBadge>Control Systems</AutomationBadge>

            <h2>PLC and Control Panel Solutions</h2>

            <p>
              Custom built control panel solutions designed
              around operational requirements and system needs.
            </p>

            <ul>
              {panelFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="automation-solution-card automation-solution-reverse">
          <div className="automation-solution-image">
            <img
              src="/images/services/automation/robotic-automation.jpg"
              alt="Industrial robotic arm working on a production line"
              loading="lazy"
            />
          </div>

          <div className="automation-solution-content">
            <AutomationBadge>Robotics and Automation</AutomationBadge>

            <h2>Industrial Robotics and Automation</h2>

            <p>
              Robotic and automated systems to support precision,
              speed and efficient industrial operations.
            </p>

            <ul>
              {roboticsFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </article>

      </section>

      {/* Industries */}
      <section className="automation-industries-section">
        <div className="automation-container automation-industries-inner">
          <div className="automation-industries-heading">
            <AutomationBadge>Industries We Serve</AutomationBadge>
            <h2>Automation for Diverse Industries</h2>
          </div>

          <div className="automation-industries-grid">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div className="automation-industry" key={item.title}>
                  <Icon />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="automation-process-section">
        <div className="automation-container automation-process-inner">
          <div className="automation-process-heading">
            <AutomationBadge>Our Implementation Process</AutomationBadge>

            <h2>A Proven Automation Implementation Approach</h2>

            <p>
              From planning to commissioning, our structured
              approach focuses on reliable integration and
              efficient system performance.
            </p>
          </div>

          <div className="automation-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="automation-process-step" key={step.number}>
                  <div className="automation-process-number">
                    {step.number}
                  </div>

                  <div className="automation-process-icon">
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== processSteps.length - 1 && (
                    <span className="automation-process-line" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="automation-why-section">
        <div className="automation-container automation-why-inner">
          <div className="automation-why-copy">
            <AutomationBadge>Why Choose Us</AutomationBadge>

            <h2>Why Choose Mars Power Controls?</h2>

            <p>
              A trusted partner for industrial automation with
              a focus on quality, reliability and long term
              system performance.
            </p>
          </div>

          <div className="automation-why-image">
            <img
              src="/images/services/automation/automation-team.jpg"
              alt="Automation engineer monitoring an industrial control system"
              loading="lazy"
            />
          </div>

          <div className="automation-why-points">
            {[
              "Experienced Automation Team",
              "Industry Compliant Solutions",
              "Reliable and Scalable Systems",
              "Lifecycle Support",
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
      <section className="automation-projects-section automation-container">
        <div className="automation-projects-heading">
          <div>
            <AutomationBadge>Related Projects</AutomationBadge>
            <h2>Our Automation Projects</h2>
          </div>

          <a href="/projects" className="automation-view-projects">
            View All Projects
            <ArrowRight />
          </a>
        </div>

        <div className="automation-projects-grid">
          {projects.map((project) => (
            <article className="automation-project-card" key={project.title}>
              <div className="automation-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="automation-project-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="automation-cta-section">
        <div className="automation-container automation-cta-inner">
          <div className="automation-cta-copy">
            <h2>Looking for an Automation Solution?</h2>

            <p>
              Get in touch with our team to discuss your automation
              requirements and explore a suitable solution.
            </p>
          </div>

          <a href="/contact#contact-form" className="automation-cta-button">
            Enquire Now
            <ArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}

export default AutomationSolutions;
