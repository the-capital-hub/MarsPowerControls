
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Armchair,
  Sprout,
  Tractor,
  Settings,
  Workflow,
  Sofa,
  Layers3,
} from "lucide-react";

import "./ServicesSection.css";

const services = [
  {
    number: "01",
    title: "Prefab Structures",
    description:
      "Durable, cost effective and quick to install structures for diverse applications.",
    image: "/images/services/prefab-structures.jpg",
    icon: Building2,
    link: "/services/prefab-structures",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Functional and modern interiors with a strong industrial finish.",
    image: "/images/services/interior-design.jpg",
    icon: Armchair,
    link: "/services/interior-design",
  },
  {
    number: "03",
    title: "Decorative Plant Stands",
    description:
      "Aesthetic and sturdy plant stands for indoor and outdoor spaces.",
    image: "/images/services/decorative-plant-stands.jpg",
    icon: Sprout,
    link: "/services/decorative-plant-stands",
  },
  {
    number: "04",
    title: "Agricultural Fabrication",
    description:
      "Rugged and reliable fabrication solutions for agricultural operations.",
    image: "/images/services/agricultural-fabrication.jpg",
    icon: Tractor,
    link: "/services/agricultural-fabrication",
  },
  {
    number: "05",
    title: "Industrial Fabrication",
    description:
      "Precision fabrication for industrial and heavy duty requirements.",
    image: "/images/services/industrial-fabrication.jpg",
    icon: Settings,
    link: "/services/industrial-fabrication",
  },
  {
    number: "06",
    title: "Truss Work",
    description:
      "Engineered truss solutions for strong, stable and long lasting roofs.",
    image: "/images/services/truss-work.jpg",
    icon: Workflow,
    link: "/services/truss-work",
  },
  {
    number: "07",
    title: "Metal Furniture",
    description:
      "Custom metal furniture that combines strength, utility and modern design.",
    image: "/images/services/metal-furniture.jpg",
    icon: Sofa,
    link: "/services/metal-furniture",
  },
  {
    number: "08",
    title: "SS & MS Works",
    description:
      "High quality stainless steel and mild steel fabrication for multiple applications.",
    image: "/images/services/ss-ms-works.jpg",
    icon: Layers3,
    link: "/services/ss-ms-works",
  },
];

function ServicesSection() {
  return (
    <section className="mars-services-section" id="services">

      {/* Heading */}
      <div className="mars-services-heading">

        <div className="mars-section-badge">
          <span className="mars-badge-stripes">
            <span />
            <span />
          </span>
          <span>OUR ENGINEERING SERVICES</span>
        </div>

        <h2>
          Comprehensive Fabrication &amp;
          <span> Engineering Solutions</span>
        </h2>

        <p>
          From prefab structures to precision fabrication, we deliver
          reliable, custom built solutions for industrial, commercial
          and agricultural needs.
        </p>

        <span className="mars-services-heading-line" />
      </div>

      {/* Service cards */}
      <div className="mars-services-grid">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a
              href={service.link}
              className="mars-service-card"
              key={service.number}
            >
              {/* Image */}
              <div className="mars-service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <span className="mars-service-number">
                  {service.number}
                </span>

                <span className="mars-service-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </span>
              </div>

              {/* Card content */}
              <div className="mars-service-content">

                <div className="mars-service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className="mars-service-arrow">
                  <ArrowRight size={21} />
                </span>

              </div>
            </a>
          );
        })}

      </div>

      {/* Explore button */}
      <div className="mars-services-footer">
        <a href="/services" className="mars-services-button">
          Explore All Services
          <ArrowUpRight size={22} />
        </a>
      </div>

    </section>
  );
}

export default ServicesSection;
