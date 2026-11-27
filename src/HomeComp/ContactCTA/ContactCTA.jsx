import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Phone, Settings, ShieldCheck, Rocket } from "lucide-react";
import "./ContactCTA.css";

const highlights = [
  { icon: Settings, title: "Project", subtitle: "Guidance" },
  { icon: ShieldCheck, title: "Quality", subtitle: "Focused Work" },
  { icon: Rocket, title: "Delivery", subtitle: "Coordination" },
];

function ContactCTA() {
  return (
    <section className="mars-contact-cta" id="contact-cta">
      <div className="mars-contact-container">
        <div className="mars-contact-content">
          <div className="mars-contact-badge"><span className="mars-contact-badge-stripes"><span /><span /></span><span>LET'S DISCUSS YOUR PROJECT</span></div>
          <h2>Have a Project in Mind? <span>Let's Build It Together.</span></h2>
          <p className="mars-contact-description">Whether you need a prefabricated structure, industrial fabrication, customised metal work, interior solutions or solar support, share your requirements with our team.</p>
          <div className="mars-contact-actions">
            <Link to="/contact#contact-form" className="mars-contact-primary"><CalendarDays size={23} /><span>Get a Free Quote</span><ArrowRight size={23} /></Link>
            <Link to="/contact" className="mars-contact-secondary"><Phone size={22} /><span>Contact Our Team</span></Link>
          </div>
          <div className="mars-contact-highlights">{highlights.map((item) => { const Icon = item.icon; return <div className="mars-contact-highlight" key={item.title}><Icon className="mars-contact-highlight-icon" /><div><h3>{item.title}</h3><p>{item.subtitle}</p></div></div>; })}</div>
        </div>
        <div className="mars-contact-visual"><div className="mars-contact-image"><img src="/images/conatct.png" alt="Engineering professionals discussing project requirements" loading="lazy" /></div></div>
      </div>
    </section>
  );
}

export default ContactCTA;
