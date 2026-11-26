
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Layers3,
  Sprout,
  Sun,
} from "lucide-react";

import "./ProjectsSection.css";

const projects = [
  {
    id: "01",
    title: "Industrial Shed Construction",
    category: "Structures",
    categoryLabel: "Prefab Structures",
    image: "/images/projects/industrial-shed.jpg",
    icon: Building2,
    link: "/projects/industrial-shed",
  },
  {
    id: "02",
    title: "MS Staircase & Railing",
    category: "Fabrication",
    categoryLabel: "Metal Fabrication",
    image: "/images/projects/ms-staircase.jpg",
    icon: Layers3,
    link: "/projects/ms-staircase",
  },
  {
    id: "03",
    title: "Outdoor Structure",
    category: "Fabrication",
    categoryLabel: "Custom Fabrication",
    image: "/images/projects/outdoor-structure.jpg",
    icon: Sprout,
    link: "/projects/outdoor-structure",
  },
  {
    id: "04",
    title: "Rooftop Solar Installation",
    category: "Solar",
    categoryLabel: "Solar Solution",
    image: "/images/projects/rooftop-solar.jpg",
    icon: Sun,
    link: "/projects/rooftop-solar",
  },
];

const filters = ["All Projects", "Fabrication", "Structures", "Solar"];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="mars-projects-section" id="projects">

      {/* SECTION HEADING */}
      <div className="mars-projects-heading">

        <div className="mars-projects-badge">
          <span className="mars-projects-badge-stripes">
            <span />
            <span />
          </span>

          <span>OUR RECENT WORK</span>
        </div>

        <h2>
          Projects That Define
          <span> Our Excellence</span>
        </h2>

        <p>
          A glimpse of our recent fabrication, infrastructure
          and engineering projects delivered with precision,
          quality and reliability.
        </p>

        <span className="mars-projects-heading-line" />

      </div>

      {/* PROJECT FILTERS */}
      <div className="mars-project-filters" aria-label="Filter projects">

        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={
              activeFilter === filter ? "active" : ""
            }
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}

      </div>

      {/* PROJECT CARDS */}
      <div className="mars-projects-grid">

        {filteredProjects.map((project) => {
          const Icon = project.icon;

          return (
            <a
              href={project.link}
              className="mars-project-card"
              key={project.id}
            >

              {/* IMAGE */}
              <div className="mars-project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className="mars-project-number">
                  {project.id}
                </span>

                <span className="mars-project-image-overlay" />

              </div>

              {/* CARD CONTENT */}
              <div className="mars-project-content">

                <h3>{project.title}</h3>

                <div className="mars-project-bottom">

                  <div className="mars-project-category">
                    <Icon size={23} strokeWidth={1.8} />
                    <span>{project.categoryLabel}</span>
                  </div>

                  <span className="mars-project-arrow">
                    <ArrowRight size={21} />
                  </span>

                </div>

              </div>

            </a>
          );
        })}

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="mars-projects-footer">

        <a href="/projects" className="mars-projects-button">
          View All Projects
          <ArrowRight size={24} />
        </a>

      </div>

    </section>
  );
}

export default ProjectsSection;
