
import React from "react";
import {
  ArrowRight,
  Home,
  Building2,
  BriefcaseBusiness,
  Layers3,
  Ruler,
  Palette,
  Sofa,
  Lightbulb,
  GlassWater,
  ClipboardList,
  DraftingCompass,
  Boxes,
  Settings,
  Handshake,
  CheckCircle2,
  Phone,
  Paintbrush,
} from "lucide-react";

import "./InteriorDesign.css";

const imagePath = "/images/services/interior/";

const interiorServices = [
  {
    title: "Residential Interior Design",
    description:
      "Stylish and comfortable home interiors designed around your lifestyle.",
    image: "residential-interior.jpg",
    icon: Home,
  },
  {
    title: "Commercial Interior Design",
    description:
      "Modern and brand focused interiors for retail and business spaces.",
    image: "commercial-interior.jpg",
    icon: Building2,
  },
  {
    title: "Office and Workspace Design",
    description:
      "Functional workspaces designed for comfort and productivity.",
    image: "office-interior.jpg",
    icon: BriefcaseBusiness,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation and Requirements",
    description: "Understanding your space, goals and design preferences.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design and Space Planning",
    description: "Developing layouts and design concepts for your space.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Selecting suitable materials, finishes and fixtures.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Execution and Installation",
    description: "Bringing the approved design to life with careful execution.",
    icon: Settings,
  },
  {
    number: "05",
    title: "Handover and Support",
    description: "Completing final checks and handing over your space.",
    icon: Handshake,
  },
];

const materials = [
  {
    title: "Wood and Veneer",
    image: "wood-veneer.jpg",
    icon: Layers3,
  },
  {
    title: "Stone and Marble",
    image: "stone-marble.jpg",
    icon: Boxes,
  },
  {
    title: "Fabrics and Upholstery",
    image: "fabrics-upholstery.jpg",
    icon: Sofa,
  },
  {
    title: "Glass and Partitions",
    image: "glass-partitions.jpg",
    icon: GlassWater,
  },
  {
    title: "Lighting Solutions",
    image: "lighting-solutions.jpg",
    icon: Lightbulb,
  },
];

const benefits = [
  "Experienced design team",
  "Customised and practical solutions",
  "Quality materials and workmanship",
  "Timely project completion",
  "End to end project support",
];

const projects = [
  {
    image: "interior-project-one.jpg",
    title: "Modern Office Interior",
  },
  {
    image: "interior-project-two.jpg",
    title: "Corporate Meeting Space",
  },
  {
    image: "interior-project-three.jpg",
    title: "Premium Living Space",
  },
];

function SectionBadge({ children }) {
  return (
    <div className="interior-badge">
      <span className="interior-badge-mark">⁄⁄</span>
      <span>{children}</span>
    </div>
  );
}

function InteriorDesign() {
  return (
    <main className="interior-page">

      {/* HERO SECTION */}
      <section className="interior-hero">
        <div className="interior-hero-image" />
        <div className="interior-hero-overlay" />

        <div className="interior-container interior-hero-content">
          <div className="interior-breadcrumb">
            Home <span>›</span> Services <span>›</span> Interior Design
          </div>

          <h1>
            Interior
            <span>Design</span>
          </h1>

          <p>
            Functional, aesthetic and modern interior solutions
            for residential, commercial and industrial spaces.
          </p>

          <div className="interior-hero-actions">
            <a
              href="/contact#contact-form"
              className="interior-btn interior-btn-orange"
            >
              Request a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="interior-btn interior-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="interior-hero-accent" />
      </section>

      {/* OVERVIEW */}
      <section className="interior-section interior-overview">
        <div className="interior-container interior-overview-grid">
          <div className="interior-overview-image">
            <img
              src={`${imagePath}interior-overview.jpg`}
              alt="Premium modern residential interior"
            />
            <span className="interior-image-accent" />
          </div>

          <div className="interior-overview-content">
            <SectionBadge>Service Overview</SectionBadge>

            <h2>Complete Interior Design Solutions</h2>

            <p>
              We create well planned, stylish and functional interiors
              that enhance comfort, productivity and the overall
              value of your space.
            </p>

            <div className="interior-feature-grid">
              <div className="interior-feature">
                <Home />
                <strong>Residential Interiors</strong>
              </div>

              <div className="interior-feature">
                <Building2 />
                <strong>Commercial Interiors</strong>
              </div>

              <div className="interior-feature">
                <BriefcaseBusiness />
                <strong>Office and Workspace</strong>
              </div>

              <div className="interior-feature">
                <Layers3 />
                <strong>End to End Execution</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERIOR SERVICES */}
      <section className="interior-section interior-services">
        <div className="interior-container">
          <div className="interior-services-grid">
            {interiorServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="interior-service-card"
                  key={service.title}
                >
                  <div className="interior-service-image">
                    <img
                      src={`${imagePath}${service.image}`}
                      alt={service.title}
                      loading="lazy"
                    />
                    <span className="interior-service-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="interior-service-content">
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>

                    <span className="interior-service-icon">
                      <Icon size={20} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="interior-section interior-process">
        <div className="interior-container">
          <div className="interior-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>Design to Execution</h2>
          </div>

          <div className="interior-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  className="interior-process-step"
                  key={step.number}
                >
                  <span className="interior-process-number">
                    {step.number}
                  </span>

                  <Icon className="interior-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="interior-section interior-materials">
        <div className="interior-container interior-materials-layout">
          <div className="interior-materials-intro">
            <SectionBadge>Materials and Finishes</SectionBadge>
            <h2>Premium Materials for Lasting Spaces</h2>
            <p>
              A curated selection of quality materials and finishes
              for durable and elegant interiors.
            </p>
          </div>

          <div className="interior-materials-grid">
            {materials.map((material) => {
              const Icon = material.icon;

              return (
                <article
                  className="interior-material-card"
                  key={material.title}
                >
                  <div className="interior-material-image">
                    <img
                      src={`${imagePath}${material.image}`}
                      alt={material.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="interior-material-title">
                    <Icon size={18} />
                    <h3>{material.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="interior-why">
        <div className="interior-why-image" />

        <div className="interior-container interior-why-grid">
          <div className="interior-why-content">
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2>Mars Power Controls</h2>

            <p>
              A trusted partner for interior design with a focus
              on quality, functionality and timely project delivery.
            </p>
          </div>

          <div className="interior-benefits">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="interior-section interior-projects">
        <div className="interior-container">
          <div className="interior-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our Interior Design Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="interior-project-grid">
            {projects.map((project) => (
              <article
                className="interior-project-card"
                key={project.title}
              >
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="interior-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="interior-cta">
        <div className="interior-cta-image" />

        <div className="interior-container interior-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>
            <h2>Planning an Interior Project?</h2>
            <p>
              Get in touch with our team to discuss your space,
              design ideas and project requirements.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="interior-btn interior-btn-orange"
          >
            Enquire Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default InteriorDesign;
