
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight
} from "lucide-react";

import "./Navbar.css";

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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container">

        {/* Brand Logo */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Mars Power Controls Home"
        >
          <img
            src="/images/logo2.png"
            alt="Mars Power Controls"
            className="navbar-logo"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className={`navbar-content ${menuOpen ? "active" : ""}`}>

          <div className="navbar-links">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>

            {/* Services Dropdown */}

            <div
              className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
              onMouseEnter={() => {
                if (window.innerWidth > 992) {
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 992) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className="dropdown-icon"
                />
              </button>

              <div className="dropdown-menu">
                <div className="dropdown-heading">
                  <span>OUR EXPERTISE</span>
                  <p>Engineering solutions for every requirement.</p>
                </div>

                <div className="dropdown-grid">
                  {services.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      <span className="dropdown-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{service.name}</span>

                      <ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            <NavLink
              to="/solar-solutions"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Solar Solutions
            </NavLink>

          </div>

          {/* Mobile CTA */}

          <Link
            to="/contact"
            className="mobile-quote-btn"
            onClick={closeMenu}
          >
            Get a Quote
            <ArrowUpRight size={18} />
          </Link>

        </div>

        {/* Desktop CTA */}

        <Link to="/contact" className="navbar-cta">
          <span>Get a Quote</span>
          <ArrowUpRight size={20} />
        </Link>

        {/* Mobile Menu Toggle */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
