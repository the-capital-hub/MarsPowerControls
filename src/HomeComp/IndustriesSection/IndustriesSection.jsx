
import {
  ArrowUpRight,
} from "lucide-react";

import "./IndustriesSection.css";

const industries = [
  {
    number: "01",
    title: "Industrial & Manufacturing",
    image: "/images/industries/industrial-manufacturing.jpg",
    link: "/industries/industrial-manufacturing",
  },
  {
    number: "02",
    title: "Commercial Infrastructure",
    image: "/images/industries/commercial-infrastructure.jpg",
    link: "/industries/commercial-infrastructure",
  },
  {
    number: "03",
    title: "Agriculture",
    image: "/images/industries/agriculture.jpg",
    link: "/industries/agriculture",
  },
  {
    number: "04",
    title: "Construction & Real Estate",
    image: "/images/industries/construction-real-estate.jpg",
    link: "/industries/construction-real-estate",
  },
  {
    number: "05",
    title: "Energy & Solar",
    image: "/images/industries/energy-solar.jpg",
    link: "/industries/energy-solar",
  },
  {
    number: "06",
    title: "Warehousing & Logistics",
    image: "/images/industries/warehousing-logistics.jpg",
    link: "/industries/warehousing-logistics",
  },
];

function IndustriesSection() {
  return (
    <section className="mars-industries-section" id="industries">

      {/* SECTION HEADING */}
      <div className="mars-industries-heading">

        <div className="mars-industries-badge">
          <span className="mars-industries-badge-stripes">
            <span />
            <span />
          </span>

          <span>INDUSTRIES WE SERVE</span>
        </div>

        <h2>
          Engineering Solutions
          <span> Across Industries</span>
        </h2>

        <p>
          We deliver reliable, safe and cost effective engineering
          solutions for a wide range of industries with a focus on
          performance, durability and long term value.
        </p>

        <span className="mars-industries-heading-line" />

      </div>

      {/* INDUSTRY CARDS */}
      <div className="mars-industries-grid">

        {industries.map((industry) => (
          <a
            href={industry.link}
            className="mars-industry-card"
            key={industry.number}
          >

            {/* IMAGE */}
            <div className="mars-industry-image">

              <img
                src={industry.image}
                alt={industry.title}
                loading="lazy"
              />

              <span className="mars-industry-number">
                {industry.number}
              </span>

              <span className="mars-industry-image-overlay" />

            </div>

            {/* CARD CONTENT */}
            <div className="mars-industry-content">

              <span className="mars-industry-mark">
                <span />
                <span />
              </span>

              <h3>{industry.title}</h3>

              <span className="mars-industry-arrow">
                <ArrowUpRight size={24} />
              </span>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default IndustriesSection;
