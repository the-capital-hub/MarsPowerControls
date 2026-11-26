
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Solar Solutions", path: "/solar-solutions" },
  { name: "Contact Us", path: "/contact" }
];

const services = [
  { name: "Prefab Structures", path: "/services/prefab-structures" },
  { name: "Interior Design", path: "/services/interior-design" },
  { name: "Decorative Plant Stands", path: "/services/plant-stands" },
  { name: "Agricultural Fabrication", path: "/services/agricultural-fabrication" },
  { name: "Industrial Fabrication", path: "/services/industrial-fabrication" },
  { name: "Truss Work", path: "/services/truss-work" },
  { name: "Metal Furniture", path: "/services/metal-furniture" },
  { name: "SS & MS Works", path: "/services/ss-ms-works" }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/"
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/"
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/"
  }
];

function Footer() {
  return (
    <footer className="mars-footer">

      {/* CTA SECTION */}

      <section className="mars-footer-cta-section">
        <div className="container">

          <div className="mars-footer-cta">

            <div className="mars-footer-cta-content">

              <div className="mars-footer-eyebrow">
                <span>LET'S BUILD TOGETHER</span>
                <span className="mars-eyebrow-line"></span>
              </div>

              <h2>
                Have a <span>Project</span> in Mind?
              </h2>

              <p>
                Get in touch with our team for a customized solution.
              </p>

            </div>

            <div className="mars-footer-cta-divider"></div>

            <Link
              to="/contact"
              className="mars-footer-cta-button"
            >
              Get a Quote
              <ArrowUpRight size={21} />
            </Link>

            <div className="mars-footer-cta-image"></div>

          </div>

        </div>
      </section>

      {/* MAIN FOOTER */}

      <section className="mars-footer-main">

        <div className="mars-footer-background"></div>

        <div className="container">

          <div className="mars-footer-grid">

            {/* BRAND COLUMN */}

            <div className="mars-footer-brand-column">

              <Link to="/" className="mars-footer-logo">
                <img
                  src="/images/logo2.png"
                  alt="Mars Power Controls"
                />
              </Link>

              <p className="mars-footer-description">
                Delivering innovative and reliable fabrication,
                structural engineering and solar solutions for
                industrial, commercial and agricultural needs.
              </p>

              <div className="mars-footer-socials">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="mars-social-link"
                    >
                      <Icon />
                    </a>
                  );
                })}

              </div>

            </div>

            {/* QUICK LINKS */}

            <div className="mars-footer-column">

              <h3>Quick Links</h3>

              <span className="mars-footer-heading-line"></span>

              <ul>
                {quickLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>
                      <ChevronRight size={16} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* SERVICES */}

            <div className="mars-footer-column">

              <h3>Our Services</h3>

              <span className="mars-footer-heading-line"></span>

              <ul>
                {services.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>
                      <ChevronRight size={16} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* CONTACT */}

            <div className="mars-footer-column mars-footer-contact">

              <h3>Contact Us</h3>

              <span className="mars-footer-heading-line"></span>

              <div className="mars-contact-list">

                <a
                  href="https://www.google.com/maps/search/?api=1&query=935+16th+Main+Mico+Layout+Hongasandra+Begur+Bengaluru+560068"
                  target="_blank"
                  rel="noreferrer"
                  className="mars-contact-item"
                >
                  <span className="mars-contact-icon">
                    <MapPin size={21} />
                  </span>

                  <span>
                    935, 16th Main, Mico Layout,
                    Hongasandra, Begur,
                    Bengaluru, Karnataka 560068
                  </span>
                </a>

                <a
                  href="tel:+919886038555"
                  className="mars-contact-item"
                >
                  <span className="mars-contact-icon">
                    <Phone size={20} />
                  </span>

                  <span>+91 98860 38555</span>
                </a>

                <a
                  href="tel:+919632038555"
                  className="mars-contact-item"
                >
                  <span className="mars-contact-icon">
                    <Phone size={20} />
                  </span>

                  <span>+91 96320 38555</span>
                </a>

                <a
                  href="mailto:kirankumar@marsgroup.tech"
                  className="mars-contact-item"
                >
                  <span className="mars-contact-icon">
                    <Mail size={20} />
                  </span>

                  <span>kirankumar@marsgroup.tech</span>
                </a>

                <a
                  href="mailto:kirankumar@marspower.in"
                  className="mars-contact-item"
                >
                  <span className="mars-contact-icon">
                    <Mail size={20} />
                  </span>

                  <span>kirankumar@marspower.in</span>
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM BAR */}

          <div className="mars-footer-bottom">

            <p>
              © {new Date().getFullYear()} Mars Power Controls.
              All Rights Reserved.
            </p>

            <div className="mars-footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/contact">Sitemap</Link>
            </div>

            <a
              href="#root"
              className="mars-footer-decoration"
              aria-label="Back to top"
            >
              <span></span>
              <span></span>
            </a>

          </div>

        </div>

      </section>

    </footer>
  );
}

export default Footer;
