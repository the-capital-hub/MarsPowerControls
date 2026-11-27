import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./IndustriesSection.css";

// The supplied homepage content identifies these three core sectors.
const industries = [
  { number: "01", title: "Industrial & Manufacturing", image: "/images/industries/industrial-manufacturing.jpg" },
  { number: "02", title: "Commercial Applications", image: "/images/industries/commercial-infrastructure.jpg" },
  { number: "03", title: "Agricultural Requirements", image: "/images/industries/agriculture.jpg" },
];

function IndustriesSection() {
  return (
    <section className="mars-industries-section" id="industries">
      <div className="mars-industries-heading">
        <div className="mars-industries-badge"><span className="mars-industries-badge-stripes"><span /><span /></span><span>AREAS WE SUPPORT</span></div>
        <h2>Solutions for Industrial, <span>Commercial & Agricultural Needs</span></h2>
        <p>Our fabrication and engineering services address requirements across industrial, commercial and agricultural applications.</p>
        <span className="mars-industries-heading-line" />
      </div>
      <div className="mars-industries-grid">
        {industries.map((industry) => <Link to="/industries" className="mars-industry-card" key={industry.number}>
          <div className="mars-industry-image"><img src={industry.image} alt={industry.title} loading="lazy" /><span className="mars-industry-number">{industry.number}</span><span className="mars-industry-image-overlay" /></div>
          <div className="mars-industry-content"><span className="mars-industry-mark"><span /><span /></span><h3>{industry.title}</h3><span className="mars-industry-arrow"><ArrowUpRight size={24} /></span></div>
        </Link>)}
      </div>
    </section>
  );
}

export default IndustriesSection;
