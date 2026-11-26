
import {
  ArrowRight,
  CalendarDays,
  Phone,
  Settings,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import "./ContactCTA.css";

const highlights = [
  {
    icon: Settings,
    title: "Expert",
    subtitle: "Guidance",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    subtitle: "Solutions",
  },
  {
    icon: Rocket,
    title: "On Time",
    subtitle: "Execution",
  },
];

function ContactCTA() {
  return (
    <section className="mars-contact-cta" id="contact-cta">

      <div className="mars-contact-container">

        <div className="mars-contact-content">

          <div className="mars-contact-badge">
            <span className="mars-contact-badge-stripes">
              <span />
              <span />
            </span>
            <span>LET'S BUILD SOMETHING TOGETHER</span>
          </div>

          <h2>
            Have a Project in Mind?
            <span>
              Let's Make It <strong>Happen.</strong>
            </span>
          </h2>

          <p className="mars-contact-description">
            From design and fabrication to installation and
            commissioning, we deliver reliable and cost effective
            engineering solutions tailored to your project needs.
          </p>

          <div className="mars-contact-actions">

            <a
              href="/contact#contact-form"
              className="mars-contact-primary"
            >
              <CalendarDays size={23} />
              <span>Get a Free Consultation</span>
              <ArrowRight size={23} />
            </a>

            <a
              href="/contact"
              className="mars-contact-secondary"
            >
              <Phone size={22} />
              <span>Contact Our Team</span>
            </a>

          </div>

          <div className="mars-contact-highlights">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="mars-contact-highlight"
                  key={item.title}
                >
                  <Icon className="mars-contact-highlight-icon" />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        <div className="mars-contact-visual">

          <div className="mars-contact-image">
            <img
              src="/images/conatct.png"
              alt="Industrial engineers reviewing project blueprints inside a factory"
              loading="lazy"
            />
          </div>


        </div>

      </div>

    </section>
  );
}

export default ContactCTA;
