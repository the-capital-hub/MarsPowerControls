
import React from "react";
import { Link } from "react-router-dom";

import {
  Zap,
  Layers,
  Cpu,
  Sun,
  Warehouse,
  Armchair,
  Flower2,
  Tractor,
  Network,
  Sofa,
  Settings,
  MessageCircle,
  ClipboardList,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

import "./Services.css";

// All Service Categories
const services = [
  {
    number: "01",
    title: "Electrical Solutions",
    description:
      "Design, installation and commissioning of reliable electrical systems.",
    image: "/images/services/electrical-solutions.jpg",
    icon: Zap,
    path: "/services/electrical-solutions",
  },
  {
    number: "02",
    title: "Industrial Fabrication",
    description:
      "Precision fabrication solutions for industrial and commercial infrastructure.",
    image: "/images/services/industrial-fabrication.jpg",
    icon: Layers,
    path: "/services/industrial-fabrication",
  },
  {
    number: "03",
    title: "Automation Solutions",
    description:
      "Smart and efficient automation systems for improved productivity and control.",
    image: "/images/services/automation-solutions.jpg",
    icon: Cpu,
    path: "/services/automation-solutions",
  },
  {
    number: "04",
    title: "Solar Solutions",
    description:
      "Solar power solutions for a cleaner and more cost effective energy future.",
    image: "/images/services/solar-solutions.jpg",
    icon: Sun,
    path: "/solar-solutions",
  },
  {
    number: "05",
    title: "Prefab Structures",
    description:
      "Pre engineered, durable structures designed for diverse applications.",
    image: "/images/services/prefab-structures.jpg",
    icon: Warehouse,
    path: "/services/prefab-structures",
  },
  {
    number: "06",
    title: "Interior Design",
    description:
      "Functional and modern interior solutions for industrial and commercial spaces.",
    image: "/images/services/interior-design.jpg",
    icon: Armchair,
    path: "/services/interior-design",
  },
  {
    number: "07",
    title: "Decorative Plant Stands",
    description:
      "Custom metal plant stands and decorative solutions for indoor and outdoor spaces.",
    image: "/images/services/decorative-plant-stands.jpg",
    icon: Flower2,
    path: "/services/decorative-plant-stands",
  },
  {
    number: "08",
    title: "Agricultural Fabrication",
    description:
      "Fabrication solutions for agricultural equipment, farm structures and applications.",
    image: "/images/services/agricultural-fabrication.jpg",
    icon: Tractor,
    path: "/services/agricultural-fabrication",
  },
  {
    number: "09",
    title: "Truss Work",
    description:
      "Engineered metal truss solutions for industrial and commercial structures.",
    image: "/images/services/truss-work.jpg",
    icon: Network,
    path: "/services/truss-work",
  },
  {
    number: "10",
    title: "Metal Furniture",
    description:
      "Custom metal furniture combining durability, functionality and modern design.",
    image: "/images/services/metal-furniture.jpg",
    icon: Sofa,
    path: "/services/metal-furniture",
  },
  {
    number: "11",
    title: "SS & MS Works",
    description:
      "Stainless steel and mild steel fabrication for custom industrial requirements.",
    image: "/images/services/ss-ms-works.jpg",
    icon: Settings,
    path: "/services/ss-ms-works",
  },
];

// Our Process
const processSteps = [
  {
    number: "01",
    title: "Consult",
    description: "Understand your requirements",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Plan",
    description: "Design and solution planning",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Execute",
    description: "Implementation with quality control",
    icon: Settings,
  },
  {
    number: "04",
    title: "Deliver",
    description: "On time and within scope",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing service and assistance",
    icon: Headphones,
  },
];

// Why Choose Us
const advantages = [
  {
    title: "Reliable and Safe",
    description:
      "Solutions built with a strong focus on safety and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Industry Expertise",
    description:
      "Experience across multiple industrial sectors.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Customized Solutions",
    description:
      "Tailored to your operational and business needs.",
    icon: Settings,
  },
  {
    title: "End to End Support",
    description:
      "From design to execution and long term assistance.",
    icon: Headphones,
  },
];

// Reusable Section Badge
function ServiceBadge({ children }) {
  return (
    <div className="service-badge">
      <span className="service-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function Services() {
  return (
    <main className="services-page">

      {/* Hero Banner */}

      <section className="services-hero">
        <div className="services-hero-overlay" />

        <div className="services-container services-hero-inner">

          <div className="services-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </div>

          <div className="services-hero-copy">

            <h1>
              Our <span>Services</span>
            </h1>

            <p>
              Comprehensive engineering and industrial solutions
              designed to deliver reliable, efficient and future
              ready infrastructure for your business.
            </p>

            <Link
              to="/contact#contact-form"
              className="services-hero-button"
            >
              Request a Consultation
              <ArrowRight />
            </Link>

          </div>
        </div>
      </section>

      {/* Overview */}

      <section className="services-overview services-container">

        <div className="services-overview-copy">

          <ServiceBadge>What We Offer</ServiceBadge>

          <h2>End to End Industrial Solutions</h2>

          <p>
            From electrical systems to solar and infrastructure,
            we deliver integrated solutions that power industries
            and businesses.
          </p>

        </div>

        <div className="services-overview-stats">

          <div className="services-stat">
            <Settings />
            <strong>11</strong>
            <span>Service Categories</span>
          </div>

          <div className="services-stat">
            <ClipboardCheck />
            <strong>100+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="services-stat">
            <Headphones />
            <strong>20+</strong>
            <span>Industry Sectors</span>
          </div>

        </div>
      </section>

      {/* Service Cards */}

      <section className="services-grid-section services-container">

        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >

                <Link
                  to={service.path}
                  className="service-card-image"
                  aria-label={`Explore ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-card-icon">
                    <Icon />
                  </div>
                </Link>

                <div className="service-card-content">

                  <span className="service-card-number">
                    {service.number}
                  </span>

                  <h3>
                    <Link to={service.path}>
                      {service.title}
                    </Link>
                  </h3>

                  <p>{service.description}</p>

                  <Link
                    to={service.path}
                    className="service-card-link"
                  >
                    Explore Service
                    <ArrowRight />
                  </Link>

                </div>
              </article>
            );
          })}

        </div>
      </section>

      {/* Process */}

      <section className="services-process-section">

        <div className="services-container services-process-inner">

          <div className="services-process-intro">

            <ServiceBadge>Our Process</ServiceBadge>

            <h2>
              A Structured Approach for Reliable Delivery
            </h2>

            <p>
              We follow a proven process to ensure quality,
              safety and on time project execution.
            </p>

          </div>

          <div className="services-process-steps">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.number}>

                  <div className="services-process-step">

                    <div className="services-process-icon">
                      <Icon />
                    </div>

                    <span>{step.title}</span>

                    <p>{step.description}</p>

                  </div>

                  {index !== processSteps.length - 1 && (
                    <ArrowRight className="services-process-arrow" />
                  )}

                </React.Fragment>
              );
            })}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="services-advantage-section">

        <div className="services-container services-advantage-inner">

          <div className="services-advantage-image">
            <img
              src="/images/services/services-advantage.jpg"
              alt="Industrial engineering and fabrication facility"
              loading="lazy"
            />
          </div>

          <div className="services-advantage-content">

            <ServiceBadge>Why Choose Us</ServiceBadge>

            <h2>The Mars Power Controls Advantage</h2>

            <div className="services-advantage-grid">

              {advantages.map((advantage) => {
                const Icon = advantage.icon;

                return (
                  <div
                    className="services-advantage-item"
                    key={advantage.title}
                  >

                    <Icon />

                    <div>
                      <h3>{advantage.title}</h3>
                      <p>{advantage.description}</p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="services-final-cta">

        <div className="services-container services-final-inner">

          <div className="services-final-mark">//</div>

          <div className="services-final-copy">

            <h2>Have a Project in Mind?</h2>

            <p>
              Let's discuss your requirements and build the right
              solution for your business.
            </p>

          </div>

          <Link
            to="/contact"
            className="services-final-button"
          >
            Get in Touch
            <ArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Services;
