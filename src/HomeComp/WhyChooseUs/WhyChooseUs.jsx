import { Link } from "react-router-dom";
import { ArrowRight, Award, Layers3, Users, CalendarCheck, Settings } from "lucide-react";
import "./WhyChooseUs.css";

const benefits = [
  { number: "01", icon: Award, title: "Quality Workmanship", description: "Focus on precision and professional execution." },
  { number: "02", icon: Layers3, title: "Customised Solutions", description: "Design and fabrication tailored to project requirements." },
  { number: "03", icon: Users, title: "Skilled Professionals", description: "Technical knowledge and fabrication expertise." },
  { number: "04", icon: CalendarCheck, title: "Reliable Execution", description: "Attention to project schedules and delivery commitments." },
  { number: "05", icon: Settings, title: "Versatile Capabilities", description: "Multiple fabrication services under one roof." },
];

function WhyChooseUs() {
  return (
    <section className="mars-why-section">
      <div className="mars-why-container">
        <div className="mars-why-visual"><div className="mars-why-image-frame"><img src="/images/whyChoose.png" alt="Engineering professionals reviewing fabrication plans" loading="lazy" /></div><div className="mars-why-orange-frame" /></div>
        <div className="mars-why-content">
          <div className="mars-why-badge"><span className="mars-why-badge-stripes"><span /><span /></span><span>WHY CHOOSE MARS POWER CONTROLS</span></div>
          <h2>Engineering, Craftsmanship <span>and Attention to Detail</span></h2>
          <p className="mars-why-description">We believe every project deserves the right combination of engineering, craftsmanship and attention to detail. Our approach focuses on practical solutions, quality workmanship and understanding client requirements.</p>
          <div className="mars-why-divider" />
          <div className="mars-why-grid">{benefits.map((benefit) => { const Icon = benefit.icon; return <div className="mars-why-card" key={benefit.number}><div className="mars-why-icon"><Icon size={38} strokeWidth={1.8} /></div><div className="mars-why-card-content"><h3>{benefit.title}</h3><p>{benefit.description}</p></div></div>; })}</div>
          <Link to="/contact" className="mars-why-button">Discuss Your Project<ArrowRight size={23} /></Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
