import { Link } from "react-router-dom";
import { ArrowRight, Zap, Leaf, Coins } from "lucide-react";
import "./SolarSection.css";

const solarBenefits = [
  { number: "01", icon: Zap, title: "Solar Supply & Installation", description: "Solar system options planned around your energy requirements." },
  { number: "02", icon: Leaf, title: "Rooftop Solar Structures", description: "Customised structural solutions for rooftop panel installations." },
  { number: "03", icon: Coins, title: "Maintenance Support", description: "Maintenance support for the upkeep of solar installations." },
];

function SolarSection() {
  return (
    <section className="mars-solar-section" id="solar-solutions">
      <div className="mars-solar-container">
        <div className="mars-solar-visual"><div className="mars-solar-image-frame"><img src="/images/solar.png" alt="Rooftop solar panel installation" loading="lazy" /></div><div className="mars-solar-orange-frame" /></div>
        <div className="mars-solar-content">
          <div className="mars-solar-badge"><span className="mars-solar-badge-stripes"><span /><span /></span><span>SOLAR ENERGY SOLUTIONS</span></div>
          <h2>Explore Solar Energy <span>Solutions for Your Needs</span></h2>
          <p className="mars-solar-description">Mars Power Controls presents solar energy solutions for residential, commercial and industrial applications. Explore suitable systems, related components, rooftop structures and installation support based on your project requirements.</p>
          <div className="mars-solar-divider" />
          <div className="mars-solar-benefits">{solarBenefits.map((benefit) => { const Icon = benefit.icon; return <div className="mars-solar-benefit-card" key={benefit.number}><div className="mars-solar-benefit-icon"><Icon size={39} strokeWidth={1.8} /></div><span className="mars-solar-benefit-number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></div>; })}</div>
          <Link to="/solar-solutions" className="mars-solar-button">Explore Solar Solutions<ArrowRight size={25} /></Link>
        </div>
      </div>
    </section>
  );
}

export default SolarSection;
