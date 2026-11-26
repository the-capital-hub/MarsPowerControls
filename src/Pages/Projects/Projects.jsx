
import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  LayoutGrid,
  Settings,
  Building2,
  Sun,
  Sofa,
  Award,
  Users,
  CalendarDays,
  ClipboardList,
  MonitorCog,
  HardHat,
  Layers3,
} from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Industrial Warehouse Building",
    category: "Structures",
    location: "Pune, Maharashtra",
    image: "/images/projects/industrial-shed.jpg",
  },
  {
    id: 2,
    title: "Industrial Interior Setup",
    category: "Interior",
    location: "Nashik, Maharashtra",
    image: "/images/projects/industrial-interior.jpg",
  },
  {
    id: 3,
    title: "Rooftop Solar Installation",
    category: "Solar",
    location: "Ahmednagar, Maharashtra",
    image: "/images/projects/rooftop-solar.jpg",
  },
  {
    id: 4,
    title: "MS Staircase & Railing Work",
    category: "Fabrication",
    location: "Aurangabad, Maharashtra",
    image: "/images/projects/ms-staircase.jpg",
  },
  {
    id: 5,
    title: "Steel Truss Structure",
    category: "Fabrication",
    location: "Nagpur, Maharashtra",
    image: "/images/projects/outdoor-structure.jpg",
  },
  {
    id: 6,
    title: "Custom Metal Furniture",
    category: "Interior",
    location: "Pune, Maharashtra",
    image: "/images/projects/metal-furniture.jpg",
  },
];

const categories = [
  { name: "All Projects", icon: LayoutGrid },
  { name: "Fabrication", icon: Settings },
  { name: "Structures", icon: Building2 },
  { name: "Solar", icon: Sun },
  { name: "Interior", icon: Sofa },
];

const processSteps = [
  { title: "Requirement Analysis", icon: ClipboardList },
  { title: "Design & Engineering", icon: MonitorCog },
  { title: "Fabrication & Quality Check", icon: Settings },
  { title: "Installation & Commissioning", icon: HardHat },
];

function SectionBadge({ children }) {
  return (
    <div className="projects-badge">
      <span className="projects-badge-slashes">//</span>
      <span>{children}</span>
    </div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-overlay" />

        <div className="projects-container projects-hero-content">
          <div className="projects-breadcrumb">
            <a href="/">Home</a>
            <ArrowRight size={14} />
            <span>Projects</span>
          </div>

          <div className="projects-hero-title">
            <span className="projects-hero-slash" />
            <div>
              <h1>Our Projects</h1>
              <p>
                Fabrication <span>|</span> Structures <span>|</span>
                Solar <span>|</span> Interior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-intro">
        <div className="projects-container projects-intro-grid">

          <div className="projects-intro-content">
            <SectionBadge>OUR WORK</SectionBadge>

            <h2>
              Engineering Excellence
              <span> in Every Project</span>
            </h2>

            <p>
              A showcase of our completed and ongoing projects across steel
              fabrication, prefab structures, solar installations and
              industrial interiors.
            </p>

            <div className="projects-intro-highlights">
              <div>
                <Award />
                <strong>Quality</strong>
                <small>Execution</small>
              </div>

              <div>
                <Settings />
                <strong>On Time</strong>
                <small>Delivery</small>
              </div>

              <div>
                <Users />
                <strong>Diverse</strong>
                <small>Industries</small>
              </div>
            </div>
          </div>

          <div className="projects-intro-image">
            <img
              src="/images/projects/industrial-shed.jpg"
              alt="Industrial prefabricated steel building"
            />
            <span className="projects-image-accent projects-accent-top" />
            <span className="projects-image-accent projects-accent-bottom" />
          </div>

        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="projects-gallery-section">
        <div className="projects-container">

          <div className="projects-filters" aria-label="Filter projects">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  type="button"
                  className={`projects-filter ${
                    activeCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={activeCategory === category.name}
                >
                  <Icon size={20} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <a
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="project-card-link"
                  aria-label={`Enquire about ${project.title}`}
                >
                  <div className="project-card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-card-content">
                    <h3>{project.title}</h3>

                    <div className="project-location">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>

                    <span className="project-card-arrow">
                      <ArrowRight size={19} />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="projects-empty">
              No projects available in this category.
            </p>
          )}

        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="featured-project">
        <div className="featured-project-image">
          <img
            src="/images/projects/industrial-shed.jpg"
            alt="Featured prefabricated industrial facility"
          />
        </div>

        <div className="featured-project-content">
          <SectionBadge>FEATURED PROJECT</SectionBadge>

          <h2>Prefabricated Industrial Facility</h2>

          <p>
            A complete prefabricated industrial building with steel structure,
            fabrication and installation, delivered with a focus on quality
            and timely execution.
          </p>

          <div className="featured-project-details">
            <div>
              <Building2 />
              <span>
                <strong>Project Type</strong>
                Prefab Structure
              </span>
            </div>

            <div>
              <Layers3 />
              <span>
                <strong>Area</strong>
                To be confirmed
              </span>
            </div>

            <div>
              <CalendarDays />
              <span>
                <strong>Duration</strong>
                To be confirmed
              </span>
            </div>
          </div>

          <a href="/contact" className="featured-project-btn">
            Discuss a Similar Project <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="projects-process-section">
        <div className="projects-container projects-process-grid">

          <div className="projects-process-heading">
            <SectionBadge>OUR WORK PROCESS</SectionBadge>
            <h2>
              From Planning to
              <span> Project Completion</span>
            </h2>
          </div>

          <div className="projects-process-steps">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.title}>
                  <div className="projects-process-step">
                    <div className="projects-process-icon">
                      <Icon />
                    </div>
                    <h3>{step.title}</h3>
                  </div>

                  {index !== processSteps.length - 1 && (
                    <ArrowRight className="projects-process-arrow" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="projects-bottom-cta">
        <div className="projects-container projects-cta-inner">

          <h2>
            Have a Similar Project?
            <br />
            Let's <span>Discuss Your Requirements.</span>
          </h2>

          <div className="projects-cta-divider" />

          <div className="projects-cta-actions">
            <a href="/contact#contact-form" className="projects-primary-btn">
              <CalendarDays size={17} />
              Get a Project Quote
              <ArrowRight size={17} />
            </a>

            <a href="/contact" className="projects-secondary-btn">
              <Users size={17} />
              Talk to Our Experts
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Projects;
