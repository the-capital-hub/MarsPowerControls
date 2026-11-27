
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight
} from "lucide-react";

import "./Navbar.css";

// All Service Pages
const services = [
  {
    name: "Electrical Solutions",
    path: "/services/electrical-solutions"
  },
  {
    name: "Industrial Fabrication",
    path: "/services/industrial-fabrication"
  },
  {
    name: "Automation Solutions",
    path: "/services/automation-solutions"
  },
  {
    name: "Prefab Structures",
    path: "/services/prefab-structures"
  },
  {
    name: "Interior Design",
    path: "/services/interior-design"
  },
  {
    name: "Decorative Plant Stands",
    path: "/services/decorative-plant-stands"
  },
  {
    name: "Agricultural Fabrication",
    path: "/services/agricultural-fabrication"
  },
  {
    name: "Truss Work",
    path: "/services/truss-work"
  },
  {
    name: "Metal Furniture",
    path: "/services/metal-furniture"
  },
  {
    name: "SS & MS Works",
    path: "/services/ss-ms-works"
  }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  // Detect Services Main Page and Subpages
  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  // Close Navigation
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Toggle Services Dropdown
  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
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

        {/* Navigation Content */}

        <div
          className={`navbar-content ${
            menuOpen ? "active" : ""
          }`}
        >

          <div className="navbar-links">

            {/* Home */}

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

            {/* About Us */}

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
              className={`nav-dropdown ${
                servicesOpen ? "open" : ""
              }`}
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

              <div className="services-nav-wrapper">

                {/* Services Main Page Link */}

                <NavLink
                  to="/services"
                  className={() =>
                    `nav-link ${
                      isServicesActive ? "active" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>

                {/* Dropdown Toggle Button */}

                <button
                  type="button"
                  className="dropdown-toggle-btn"
                  onClick={toggleServices}
                  aria-label="Toggle services dropdown"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <ChevronDown
                    size={16}
                    className="dropdown-icon"
                  />
                </button>

              </div>

              {/* Dropdown Menu */}

              <div className="dropdown-menu">

                <div className="dropdown-heading">
                  <span>OUR EXPERTISE</span>

                  <p>
                    Engineering solutions for every requirement.
                  </p>
                </div>

                {/* Services List */}

                <div className="dropdown-grid">

                  {services.map((service, index) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      className={({ isActive }) =>
                        `dropdown-item ${
                          isActive ? "service-active" : ""
                        }`
                      }
                      onClick={closeMenu}
                    >
                      <span className="dropdown-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="dropdown-item-name">
                        {service.name}
                      </span>

                      <ArrowUpRight size={15} />
                    </NavLink>
                  ))}

                </div>

              </div>

            </div>

            {/* Projects */}

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            {/* Solar Solutions */}

            <NavLink
              to="/solar-solutions"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Solar Solutions
            </NavLink>

            {/* Industries */}

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Industries
            </NavLink>
             <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>

          </div>

          {/* Mobile Get a Quote */}

          <Link
            to="/contact"
            className="mobile-quote-btn"
            onClick={closeMenu}
          >
            Get a Quote
            <ArrowUpRight size={18} />
          </Link>

        </div>

        {/* Desktop Get a Quote */}

        <Link
          to="/contact"
          className="navbar-cta"
        >
          <span>Get a Quote</span>
          <ArrowUpRight size={20} />
        </Link>

        {/* Mobile Menu Toggle */}

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setServicesOpen(false);
          }}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
