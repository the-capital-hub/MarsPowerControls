import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers3, Sprout, Sun } from "lucide-react";
import "./ProjectsSection.css";

// These are capability categories, not claims about verified completed projects.
const projectAreas = [
  { id: "01", title: "Prefabricated Structures", categoryLabel: "Prefab Structures", image: "/images/projects/industrial-shed.jpg", icon: Building2 },
  { id: "02", title: "Industrial Fabrication", categoryLabel: "Industrial Work", image: "/images/projects/ms-staircase.jpg", icon: Layers3 },
  { id: "03", title: "Custom Metal Structures", categoryLabel: "Metal Fabrication", image: "/images/projects/outdoor-structure.jpg", icon: Sprout },
  { id: "04", title: "Solar Solutions", categoryLabel: "Solar Energy", image: "/images/projects/rooftop-solar.jpg", icon: Sun },
];

function ProjectsSection() {
  return (
    <section className="mars-projects-section" id="projects">
      <div className="mars-projects-heading">
        <div className="mars-projects-badge"><span className="mars-projects-badge-stripes"><span /><span /></span><span>OUR CAPABILITIES</span></div>
        <h2>Fabrication and Engineering <span>Across Project Types</span></h2>
        <p>Explore the types of structures, fabrication work and solar solutions covered by Mars Power Controls. The gallery can be updated with verified company project photographs.</p>
        <span className="mars-projects-heading-line" />
      </div>
      <div className="mars-projects-grid">
        {projectAreas.map((project) => { const Icon = project.icon; return <Link to="/projects" className="mars-project-card" key={project.id}>
          <div className="mars-project-image"><img src={project.image} alt={`${project.title} category illustration`} loading="lazy" /><span className="mars-project-number">{project.id}</span><span className="mars-project-image-overlay" /></div>
          <div className="mars-project-content"><h3>{project.title}</h3><div className="mars-project-bottom"><div className="mars-project-category"><Icon size={23} strokeWidth={1.8} /><span>{project.categoryLabel}</span></div><span className="mars-project-arrow"><ArrowRight size={21} /></span></div></div>
        </Link>; })}
      </div>
      <div className="mars-projects-footer"><Link to="/projects" className="mars-projects-button">Explore Project Gallery<ArrowRight size={24} /></Link></div>
    </section>
  );
}

export default ProjectsSection;
