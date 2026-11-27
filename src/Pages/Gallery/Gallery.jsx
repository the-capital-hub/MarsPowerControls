import React, { useMemo, useState } from "react";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Industrial Structures",
    category: "Industrial",
    image: "/images/projects/industrial-shed.jpg",
  },
  {
    id: 2,
    title: "Metal Staircases",
    category: "Fabrication",
    image: "/images/projects/ms-staircase.jpg",
  },
  {
    id: 3,
    title: "Outdoor Structures",
    category: "Fabrication",
    image: "/images/projects/outdoor-structure.jpg",
  },
  {
    id: 4,
    title: "Rooftop Solar",
    category: "Solar",
    image: "/images/projects/rooftop-solar.jpg",
  },
  {
    id: 5,
    title: "Industrial Fabrication",
    category: "Industrial",
    image: "/images/services/fabrication/structural-steel.jpg",
  },
  {
    id: 6,
    title: "Factory Platforms",
    category: "Industrial",
    image: "/images/services/fabrication/process-platforms.jpg",
  },
  {
    id: 7,
    title: "Steel Frameworks",
    category: "Industrial",
    image: "/images/services/fabrication/industrial-frames.jpg",
  },
  {
    id: 8,
    title: "Prefab Buildings",
    category: "Prefab",
    image: "/images/services/prefab/factory-buildings.jpg",
  },
  {
    id: 9,
    title: "Warehouse Structures",
    category: "Prefab",
    image: "/images/services/prefab/warehouse-buildings.jpg",
  },
  {
    id: 10,
    title: "Agricultural Sheds",
    category: "Agriculture",
    image: "/images/services/agricultural/cattle-sheds.jpg",
  },
  {
    id: 11,
    title: "Farm Equipment Structures",
    category: "Agriculture",
    image: "/images/services/agricultural/farm-equipment.jpg",
  },
  {
    id: 12,
    title: "Decorative Plant Stands",
    category: "Metal Products",
    image: "/images/services/plant-stands/indoor-stands.jpg",
  },
  {
    id: 13,
    title: "Custom Metal Furniture",
    category: "Metal Products",
    image: "/images/services/metal-furniture/custom-metal-furniture.jpg",
  },
  {
    id: 14,
    title: "Office Furniture",
    category: "Metal Products",
    image: "/images/services/metal-furniture/office-furniture.jpg",
  },
  {
    id: 15,
    title: "Steel Truss Work",
    category: "Fabrication",
    image: "/images/services/truss/industrial-truss.jpg",
  },
  {
    id: 16,
    title: "Solar Installation",
    category: "Solar",
    image: "/images/solar/industrial-solar.jpg",
  },
];

const filters = [
  "All",
  "Industrial",
  "Prefab",
  "Agriculture",
  "Fabrication",
  "Metal Products",
  "Solar",
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const visibleItems = useMemo(
    () =>
      activeFilter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  return (
    <main className="mp-gallery">
      <section className="mp-gallery-hero">
        <div className="mp-gallery-hero-content mp-gallery-container">
          <div className="mp-gallery-breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={14} />
            <span>Gallery</span>
          </div>
          <span className="mp-gallery-kicker">OUR WORK</span>
          <h1>
            Project <span>Gallery</span>
          </h1>
          <p>
            Explore fabrication, structural and engineering capabilities from
            Mars Power Controls.
          </p>
        </div>
      </section>

      <section className="mp-gallery-section">
        <div className="mp-gallery-container">
          <div className="mp-gallery-heading">
            <span className="mp-gallery-eyebrow">MARS POWER CONTROLS</span>
            <h2>
              Our Work <span>Gallery</span>
            </h2>
            <p>A visual showcase of our service areas and engineering work.</p>
          </div>

          <div
            className="mp-gallery-filters"
            role="group"
            aria-label="Filter gallery images"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "All" ? "All Images" : filter}
              </button>
            ))}
          </div>

          <div className="mp-gallery-grid">
            {visibleItems.map((item, index) => (
              <article className="mp-gallery-card" key={item.id}>
                <button
                  className="mp-gallery-image"
                  type="button"
                  onClick={() => setActiveImage(item)}
                  aria-label={`Open ${item.title} image`}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="mp-gallery-image-shade" />
                  <span className="mp-gallery-zoom">
                    <ZoomIn size={21} />
                  </span>
                  <span className="mp-gallery-count">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
                <div className="mp-gallery-card-info">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveImage(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mp-gallery-note">
            Images illustrate the company’s service capabilities. Replace them
            with approved project photographs when the original project images
            are available.
          </p>
        </div>
      </section>

      <section className="mp-gallery-cta">
        <div className="mp-gallery-container mp-gallery-cta-inner">
          <div>
            <span className="mp-gallery-kicker">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let’s discuss your <span>next project.</span>
            </h2>
            <p>Share your requirements with the Mars Power Controls team.</p>
          </div>
          <Link to="/contact" className="mp-gallery-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {activeImage && (
        <div
          className="mp-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} image preview`}
          onClick={() => setActiveImage(null)}
        >
          <button
            className="mp-gallery-close"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            <X />
          </button>
          <div
            className="mp-gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeImage.image} alt={activeImage.title} />
            <div>
              <span>{activeImage.category}</span>
              <h3>{activeImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
