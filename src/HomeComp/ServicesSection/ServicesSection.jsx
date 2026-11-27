import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, Armchair, Sprout, Tractor, Settings, Workflow, Sofa, Layers3 } from "lucide-react";
import "./ServicesSection.css";

const services = [
  { number: "01", title: "Prefab Structures", description: "Prefabricated structures, factory sheds and industrial buildings designed around project requirements.", image: "/images/services/prefab-structures.jpg", icon: Building2, link: "/services/prefab-structures" },
  { number: "02", title: "Interior Design", description: "Functional and customised interior solutions for residential and commercial spaces.", image: "/images/services/interior-design.jpg", icon: Armchair, link: "/services/interior-design" },
  { number: "03", title: "Decorative Plant Stands", description: "Customised metal plant stands for indoor and outdoor spaces.", image: "/images/services/decorative-plant-stands.jpg", icon: Sprout, link: "/services/decorative-plant-stands" },
  { number: "04", title: "Agricultural Fabrication", description: "Agricultural sheds and fabricated structures designed for farming requirements.", image: "/images/services/agricultural-fabrication.jpg", icon: Tractor, link: "/services/agricultural-fabrication" },
  { number: "05", title: "Industrial Fabrication", description: "Customised metal structures, components and frameworks for industrial applications.", image: "/images/services/industrial-fabrication.jpg", icon: Settings, link: "/services/industrial-fabrication" },
  { number: "06", title: "Truss Work", description: "Metal trusses and structural frameworks for roofing and project applications.", image: "/images/services/truss-work.jpg", icon: Workflow, link: "/services/truss-work" },
  { number: "07", title: "Metal Furniture", description: "Custom metal furniture combining strength, functionality and contemporary design.", image: "/images/services/metal-furniture.jpg", icon: Sofa, link: "/services/metal-furniture" },
  { number: "08", title: "SS & MS Works", description: "Custom stainless steel and mild steel fabrication for varied applications.", image: "/images/services/ss-ms-works.jpg", icon: Layers3, link: "/services/ss-ms-works" },
];

function ServicesSection() {
  return (
    <section className="mars-services-section" id="services">
      <div className="mars-services-heading">
        <div className="mars-section-badge"><span className="mars-badge-stripes"><span /><span /></span><span>OUR ENGINEERING SERVICES</span></div>
        <h2>Complete Fabrication Solutions <span>Under One Roof</span></h2>
        <p>From industrial structures to customised metal products, we provide fabrication solutions shaped around your project needs.</p>
        <span className="mars-services-heading-line" />
      </div>
      <div className="mars-services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return <Link to={service.link} className="mars-service-card" key={service.number}>
            <div className="mars-service-image"><img src={service.image} alt={service.title} loading="lazy" /><span className="mars-service-number">{service.number}</span><span className="mars-service-icon"><Icon size={28} strokeWidth={1.8} /></span></div>
            <div className="mars-service-content"><div className="mars-service-copy"><h3>{service.title}</h3><p>{service.description}</p></div><span className="mars-service-arrow"><ArrowRight size={21} /></span></div>
          </Link>;
        })}
      </div>
      <div className="mars-services-footer"><Link to="/services" className="mars-services-button">View All Services<ArrowUpRight size={22} /></Link></div>
    </section>
  );
}

export default ServicesSection;
