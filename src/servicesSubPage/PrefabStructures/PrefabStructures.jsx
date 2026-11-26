
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Clock3,
  Settings,
  Building2,
  Warehouse,
  Factory,
  HardHat,
  Ruler,
  DraftingCompass,
  Truck,
  ClipboardCheck,
  CheckCircle2,
  Boxes,
  Maximize2,
  Phone,
} from "lucide-react";
import "./PrefabStructures.css";

const imagePath = "/images/services/prefab/";

const structureTypes = [
  {
    title: "Industrial Sheds",
    description: "Strong and scalable sheds designed for industrial operations.",
    image: "industrial-sheds.jpg",
    icon: Factory,
  },
  {
    title: "Warehouse Buildings",
    description: "Spacious structures for storage and logistics operations.",
    image: "warehouse-buildings.jpg",
    icon: Warehouse,
  },
  {
    title: "Factory Buildings",
    description: "Functional factory spaces designed for efficient production.",
    image: "factory-buildings.jpg",
    icon: Building2,
  },
  {
    title: "Site Offices",
    description: "Practical modular spaces for offices and site operations.",
    image: "site-offices.jpg",
    icon: Boxes,
  },
  {
    title: "Canopies and Extensions",
    description: "Durable covered spaces for multiple applications.",
    image: "canopies.jpg",
    icon: Maximize2,
  },
];

const industries = [
  { title: "Manufacturing", icon: Factory },
  { title: "Warehousing and Logistics", icon: Warehouse },
  { title: "Commercial Infrastructure", icon: Building2 },
  { title: "Process Industries", icon: Settings },
  { title: "Power and Energy", icon: Layers3 },
  { title: "Construction Projects", icon: HardHat },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding your project requirements and site conditions.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Design and Engineering",
    description: "Planning the structure with detailed engineering drawings.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Manufacturing",
    description: "Fabricating structural components with quality checks.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Delivery and Installation",
    description: "Transporting and assembling components at your site.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Testing and Handover",
    description: "Final inspection and project handover.",
    icon: CheckCircle2,
  },
];

const benefits = [
  "Experienced engineering team",
  "Quality focused fabrication",
  "Efficient project execution",
  "Customised structural solutions",
  "End to end project support",
];

function SectionBadge({ children }) {
  return (
    <div className="prefab-badge">
      <span className="prefab-badge-mark">⁄⁄</span>
      <span>{children}</span>
    </div>
  );
}

function PrefabStructures() {
  return (
    <main className="prefab-page">

      {/* HERO */}
      <section className="prefab-hero">
        <div className="prefab-hero-image" />
        <div className="prefab-hero-overlay" />

        <div className="prefab-container prefab-hero-content">
          <div className="prefab-breadcrumb">
            Home <span>›</span> Services <span>›</span> Prefab Structures
          </div>

          <h1>
            Prefab
            <span>Structures</span>
          </h1>

          <p>
            High quality, durable and cost effective prefabricated
            building solutions for industrial and commercial applications.
          </p>

          <div className="prefab-hero-actions">
            <a href="/contact#contact-form" className="prefab-btn prefab-btn-orange">
              Request a Quote <ArrowRight size={17} />
            </a>
            <a href="tel:+919886038555" className="prefab-btn prefab-btn-outline">
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="prefab-hero-accent" />
      </section>

      {/* OVERVIEW */}
      <section className="prefab-section prefab-overview">
        <div className="prefab-container prefab-overview-grid">
          <div className="prefab-overview-image">
            <img
              src={`${imagePath}prefab-overview.jpg`}
              alt="Steel frame prefabricated building under construction"
            />
            <span className="prefab-image-accent" />
          </div>

          <div className="prefab-overview-content">
            <SectionBadge>Service Overview</SectionBadge>
            <h2>Complete Prefabricated Building Solutions</h2>
            <p>
              We design, manufacture and install prefabricated structures
              that offer strength, flexibility and faster project execution
              for diverse industrial and commercial needs.
            </p>

            <div className="prefab-feature-grid">
              <div className="prefab-feature">
                <Layers3 />
                <strong>Custom Design</strong>
              </div>
              <div className="prefab-feature">
                <ShieldCheck />
                <strong>High Durability</strong>
              </div>
              <div className="prefab-feature">
                <Clock3 />
                <strong>Faster Installation</strong>
              </div>
              <div className="prefab-feature">
                <Settings />
                <strong>Cost Effective</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURE TYPES */}
      <section className="prefab-section prefab-types">
        <div className="prefab-container">
          <div className="prefab-types-heading">
            <div>
              <SectionBadge>Types of Prefab Structures</SectionBadge>
              <h2>Tailored Structures for Every Need</h2>
            </div>
            <p>
              Flexible prefabricated solutions designed around your
              operational requirements.
            </p>
          </div>

          <div className="prefab-types-grid">
            {structureTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="prefab-type-card" key={item.title}>
                  <div className="prefab-type-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <span className="prefab-type-number">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="prefab-type-content">
                    <Icon size={22} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="prefab-section prefab-engineering">
        <div className="prefab-container prefab-engineering-grid">
          <div className="prefab-engineering-image">
            <img
              src={`${imagePath}prefab-engineering.jpg`}
              alt="Engineer reviewing structural building design"
              loading="lazy"
            />
          </div>

          <div className="prefab-engineering-content">
            <SectionBadge>Design and Engineering</SectionBadge>
            <h2>Engineered for Strength and Efficiency</h2>
            <p>
              Our engineering approach combines practical planning,
              structural design and fabrication expertise to create
              dependable building solutions.
            </p>

            <div className="prefab-check-grid">
              <span><CheckCircle2 /> Structural Design and Analysis</span>
              <span><CheckCircle2 /> Optimised Design Planning</span>
              <span><CheckCircle2 /> Detailed Fabrication Drawings</span>
              <span><CheckCircle2 /> Quality Focused Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="prefab-section prefab-industries">
        <div className="prefab-container">
          <div className="prefab-industries-heading">
            <SectionBadge>Applications and Industries</SectionBadge>
            <h2>Built for Diverse Industry Needs</h2>
          </div>

          <div className="prefab-industries-grid">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div className="prefab-industry" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="prefab-section prefab-process">
        <div className="prefab-container">
          <div className="prefab-process-heading">
            <SectionBadge>Our Process</SectionBadge>
            <h2>From Design to Installation</h2>
          </div>

          <div className="prefab-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="prefab-process-step" key={step.number}>
                  <span className="prefab-process-number">{step.number}</span>
                  <Icon className="prefab-process-icon" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="prefab-why">
        <div className="prefab-why-image" />
        <div className="prefab-container prefab-why-grid">
          <div className="prefab-why-content">
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2>Mars Power Controls</h2>
            <p>
              A reliable partner for prefabricated building solutions
              with a focus on quality, timely delivery and long term value.
            </p>
          </div>

          <div className="prefab-benefits">
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
      <section className="prefab-section prefab-projects">
        <div className="prefab-container">
          <div className="prefab-projects-heading">
            <div>
              <SectionBadge>Related Projects</SectionBadge>
              <h2>Our Prefab Structure Projects</h2>
            </div>
            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="prefab-project-grid">
            <div className="prefab-project-card">
              <img
                src={`${imagePath}prefab-project-one.jpg`}
                alt="Industrial prefabricated building"
                loading="lazy"
              />
            </div>
            <div className="prefab-project-card">
              <img
                src={`${imagePath}prefab-project-two.jpg`}
                alt="Steel frame prefabricated structure"
                loading="lazy"
              />
            </div>
            <div className="prefab-project-card">
              <img
                src={`${imagePath}prefab-project-three.jpg`}
                alt="Modern warehouse building"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="prefab-cta">
        <div className="prefab-cta-image" />
        <div className="prefab-container prefab-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>
            <h2>Planning a Prefab Structure?</h2>
            <p>
              Get in touch with our team to discuss your requirements
              and receive a customised solution.
            </p>
          </div>

          <a href="/contact#contact-form" className="prefab-btn prefab-btn-orange">
            Enquire Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default PrefabStructures;
