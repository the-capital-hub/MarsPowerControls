
import React from "react";
import {
  ArrowRight,
  Leaf,
  Layers3,
  SlidersHorizontal,
  ShieldCheck,
  Home,
  Flower2,
  Trees,
  Ruler,
  Palette,
  Settings,
  Hammer,
  Paintbrush,
  ClipboardCheck,
  PackageCheck,
  CheckCircle2,
  Phone,
  Sofa,
  Boxes,
} from "lucide-react";

import "./DecorativePlantStands.css";

const imagePath = "/images/services/plant-stands/";

const plantRanges = [
  {
    title: "Wall Mounted Plant Stands",
    image: "wall-mounted.jpg",
    icon: Layers3,
    description: "Space saving metal designs for decorative wall displays.",
  },
  {
    title: "Indoor Plant Stands",
    image: "indoor-stands.jpg",
    icon: Home,
    description: "Elegant stands designed for modern indoor spaces.",
  },
  {
    title: "Outdoor Plant Stands",
    image: "outdoor-stands.jpg",
    icon: Trees,
    description: "Durable stands for gardens, balconies and outdoor areas.",
  },
];

const productFeatures = [
  { title: "Aesthetic Designs", icon: Leaf },
  { title: "Sturdy Construction", icon: Layers3 },
  { title: "Custom Sizes", icon: SlidersHorizontal },
  { title: "Indoor and Outdoor Use", icon: ShieldCheck },
];

const finishes = [
  { title: "Matte Black Finish", image: "matte-black.jpg" },
  { title: "Powder Coated Colors", image: "powder-coated.jpg" },
  { title: "Industrial Metal Look", image: "metal-finish.jpg" },
  { title: "Wood and Metal Combine", image: "wood-metal.jpg" },
  { title: "Minimal Modern Design", image: "minimal-design.jpg" },
];

const processSteps = [
  {
    number: "01",
    title: "Design and Customisation",
    description: "Understanding the required design, size and style.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Material Preparation",
    description: "Preparing suitable metal materials and components.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Fabrication and Assembly",
    description: "Fabricating and assembling the plant stand structure.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Finishing and Coating",
    description: "Applying the selected finish and protective coating.",
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Quality Check and Dispatch",
    description: "Checking the finished product before dispatch.",
    icon: PackageCheck,
  },
];

const benefits = [
  "Creative and functional designs",
  "Durable and long lasting products",
  "Customisation as per requirement",
  "Quality finish and modern look",
  "Timely delivery and support",
];

const projects = [
  {
    image: "plant-project-one.jpg",
    title: "Modern Indoor Plant Display",
  },
  {
    image: "plant-project-two.jpg",
    title: "Decorative Metal Stand",
  },
  {
    image: "plant-project-three.jpg",
    title: "Outdoor Garden Plant Stand",
  },
];

function SectionBadge({ children }) {
  return (
    <div className="plant-badge">
      <span className="plant-badge-mark">⁄⁄</span>
      <span>{children}</span>
    </div>
  );
}

function DecorativePlantStands() {
  return (
    <main className="plant-page">

      {/* HERO */}
      <section className="plant-hero">
        <div className="plant-hero-image" />
        <div className="plant-hero-overlay" />

        <div className="plant-container plant-hero-content">
          <div className="plant-breadcrumb">
            Home <span>›</span> Services <span>›</span> Decorative Plant Stands
          </div>

          <h1>
            Decorative
            <span>Plant Stands</span>
          </h1>

          <p>
            Stylish, durable and custom metal plant stands
            that bring greenery, elegance and character to your spaces.
          </p>

          <div className="plant-hero-actions">
            <a
              href="/contact#contact-form"
              className="plant-btn plant-btn-orange"
            >
              Request a Quote <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919886038555"
              className="plant-btn plant-btn-outline"
            >
              <Phone size={17} /> Talk to an Expert
            </a>
          </div>
        </div>

        <div className="plant-hero-accent" />
      </section>

      {/* OVERVIEW */}
      <section className="plant-section plant-overview">
        <div className="plant-container plant-overview-grid">

          <div className="plant-overview-image">
            <img
              src={`${imagePath}plant-overview.jpg`}
              alt="Decorative metal plant stand display"
            />
            <span className="plant-image-accent" />
          </div>

          <div className="plant-overview-content">
            <SectionBadge>Product Overview</SectionBadge>

            <h2>Functional and Decorative Plant Stand Solutions</h2>

            <p>
              We design and manufacture metal plant stands that
              enhance interiors, outdoor spaces and commercial
              environments with style and durability.
            </p>

            <div className="plant-feature-grid">
              {productFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="plant-feature" key={feature.title}>
                    <Icon />
                    <strong>{feature.title}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="plant-section plant-range">
        <div className="plant-container plant-range-layout">

          <div className="plant-range-heading">
            <SectionBadge>Our Range</SectionBadge>
            <h2>Plant Stands for Every Space</h2>
            <p>
              Explore decorative metal stand options for
              homes, gardens and commercial spaces.
            </p>
          </div>

          <div className="plant-range-grid">
            {plantRanges.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="plant-range-card" key={item.title}>
                  <div className="plant-range-image">
                    <img
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <span className="plant-range-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="plant-range-content">
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

      {/* CUSTOM SOLUTIONS */}
      <section className="plant-section plant-custom">
        <div className="plant-container plant-custom-grid">

          <div className="plant-custom-image">
            <img
              src={`${imagePath}custom-plant-stands.jpg`}
              alt="Custom geometric metal wall plant stands"
              loading="lazy"
            />
            <span className="plant-image-accent" />
          </div>

          <div className="plant-custom-content">
            <SectionBadge>Custom Solutions</SectionBadge>

            <h2>Custom Metal Plant Stands</h2>

            <p>
              Get tailor made plant stand designs to match your
              space, style and functional needs for homes,
              offices, cafes and commercial areas.
            </p>

            <div className="plant-check-grid">
              <span><CheckCircle2 /> Custom Designs and Dimensions</span>
              <span><CheckCircle2 /> Indoor and Outdoor Use</span>
              <span><CheckCircle2 /> Powder Coated Finishes</span>
              <span><CheckCircle2 /> Modern Space Saving Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINISHES */}
      <section className="plant-section plant-finishes">
        <div className="plant-container plant-finishes-layout">

          <div className="plant-finishes-intro">
            <SectionBadge>Designs and Finishes</SectionBadge>
            <h2>Styles and Finishes to Suit Your Space</h2>
            <p>
              Choose from a range of modern finishes
              to complement your surroundings.
            </p>
          </div>

          <div className="plant-finishes-grid">
            {finishes.map((finish) => (
              <article className="plant-finish-card" key={finish.title}>
                <div className="plant-finish-image">
                  <img
                    src={`${imagePath}${finish.image}`}
                    alt={finish.title}
                    loading="lazy"
                  />
                </div>

                <h3>{finish.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="plant-section plant-process">
        <div className="plant-container">

          <div className="plant-process-heading">
            <SectionBadge>Our Manufacturing Process</SectionBadge>
            <h2>From Design to Final Product</h2>
          </div>

          <div className="plant-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div className="plant-process-step" key={step.number}>
                  <span className="plant-process-number">
                    {step.number}
                  </span>

                  <Icon className="plant-process-icon" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="plant-why">
        <div className="plant-why-image" />

        <div className="plant-container plant-why-grid">

          <div className="plant-why-content">
            <SectionBadge>Why Choose Us</SectionBadge>

            <h2>Mars Power Controls</h2>

            <p>
              A reliable partner for decorative plant stands
              with a focus on quality, design, durability
              and timely delivery.
            </p>
          </div>

          <div className="plant-benefits">
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
      <section className="plant-section plant-projects">
        <div className="plant-container">

          <div className="plant-projects-heading">
            <div>
              <SectionBadge>Featured Projects</SectionBadge>
              <h2>Our Plant Stand Projects</h2>
            </div>

            <a href="/projects">
              View All Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="plant-project-grid">
            {projects.map((project) => (
              <article className="plant-project-card" key={project.title}>
                <img
                  src={`${imagePath}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="plant-project-overlay">
                  <h3>{project.title}</h3>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="plant-cta">
        <div className="plant-cta-image" />

        <div className="plant-container plant-cta-content">
          <div>
            <SectionBadge>Let's Build Together</SectionBadge>
            <h2>Looking for a Custom Plant Stand?</h2>
            <p>
              Get in touch with our team to discuss your design
              ideas, size and project requirements.
            </p>
          </div>

          <a
            href="/contact#contact-form"
            className="plant-btn plant-btn-orange"
          >
            Enquire Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default DecorativePlantStands;
