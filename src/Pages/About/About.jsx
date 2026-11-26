
import React from "react";
import {
  ArrowRight,
  Building2,
  Layers3,
  Users,
  HardHat,
  Target,
  Eye,
  Settings,
  Factory,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Phone,
  CalendarDays,
  Play,
  DraftingCompass,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import "./About.css";

const capabilities = [
  {
    icon: <DraftingCompass />,
    title: "Design & Engineering",
    description: "Customized and efficient engineering solutions",
  },
  {
    icon: <Wrench />,
    title: "Fabrication & Manufacturing",
    description: "Precision fabrication with modern infrastructure",
  },
  {
    icon: <Building2 />,
    title: "Project Execution",
    description: "End to end installation and commissioning",
  },
  {
    icon: <Sun />,
    title: "Solar Solutions",
    description: "Industrial and commercial rooftop solar systems",
  },
  {
    icon: <ShieldCheck />,
    title: "Quality Assurance",
    description: "Process driven quality and safety standards",
  },
];

const strengths = [
  "End to End Solutions",
  "Quality and Safety Focus",
  "Experienced Team",
  "On Time Delivery",
  "Modern Infrastructure",
  "Customer Centric Approach",
];

function SectionBadge({ children }) {
  return (
    <div className="about-badge">
      <span className="badge-slashes">//</span>
      <span>{children}</span>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-container about-hero-content">
          <div className="about-breadcrumb">
            <span>Home</span>
            <ArrowRight size={14} />
            <span className="breadcrumb-active">About Us</span>
          </div>

          <div className="about-hero-title">
            <span className="hero-orange-slash" />
            <div>
              <h1>About Us</h1>
              <p>
                Engineering Solutions <span>|</span> Fabrication
                <span>|</span> Solar <span>|</span> Industrial Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-intro section-space">
        <div className="about-container about-intro-grid">
          <div className="about-intro-image">
            <img
              src="/images/about/about-engineers.png"
              alt="Engineers reviewing an industrial project"
            />
            <span className="image-accent image-accent-one" />
            <span className="image-accent image-accent-two" />
          </div>

          <div className="about-intro-content">
            <SectionBadge>ABOUT MARS POWER CONTROLS</SectionBadge>

            <h2>
              A Trusted Partner in
              <span> Engineering and Fabrication</span>
            </h2>

            <p className="about-description">
              Mars Power Controls is an engineering and fabrication company
              focused on delivering industrial infrastructure, prefabricated
              structures and solar solutions. We combine technical expertise,
              modern facilities and a commitment to quality to build reliable
              solutions for diverse industries.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <Building2 />
                <div>
                  <strong>10+</strong>
                  <small>Years of Experience</small>
                </div>
              </div>

              <div className="about-stat">
                <Layers3 />
                <div>
                  <strong>500+</strong>
                  <small>Projects Completed</small>
                </div>
              </div>

              <div className="about-stat">
                <Users />
                <div>
                  <strong>100+</strong>
                  <small>Happy Clients</small>
                </div>
              </div>

              <div className="about-stat">
                <HardHat />
                <div>
                  <strong>50+</strong>
                  <small>Expert Professionals</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY, MISSION AND VISION */}
      <section className="about-story section-space">
        <div className="about-container about-story-grid">
          <div className="about-story-content">
            <SectionBadge>OUR STORY</SectionBadge>

            <h2>
              A Journey of Growth and <span>Trust</span>
            </h2>

            <p>
              Founded with a vision to deliver high quality engineering and
              fabrication solutions, Mars Power Controls aims to build a
              trusted name across industrial infrastructure and solar
              projects.
            </p>

            <a href="/contact" className="about-outline-btn">
              Read Full Story <ArrowRight size={17} />
            </a>
          </div>

          <div className="about-story-divider" />

          <div className="about-value-card mission-card">
            <Target className="value-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver reliable, innovative and cost effective engineering
              solutions that create long term value for our clients.
            </p>
          </div>

          <div className="about-value-card vision-card">
            <Eye className="value-icon" />
            <h3>Our Vision</h3>
            <p>
              To be a leading engineering and fabrication company known for
              quality, innovation and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY VIDEO */}
      <section className="about-video-section">
        <div className="about-container">
          <div className="about-video">
            <img
              src="/images/company-video-poster.jpg"
              alt="Mars Power Controls company facilities"
            />

            <div className="video-overlay" />

            <div className="video-content">
              <SectionBadge>COMPANY VIDEO</SectionBadge>
              <h2>See Our Capabilities<br />in Action</h2>
              <p>
                Take a quick tour of our facilities, processes and project
                execution expertise.
              </p>
            </div>

            <button
              className="video-play-btn"
              type="button"
              aria-label="Play company video"
              onClick={() => {
                const video = document.getElementById("company-video");
                if (video) {
                  video.paused ? video.play() : video.pause();
                }
              }}
            >
              <Play fill="currentColor" size={28} />
            </button>

            <video
              id="company-video"
              className="about-video-player"
              controls
              preload="metadata"
              poster="/images/about/company-video-poster.png"
            >
              <source
                src="/video/video1.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities section-space">
        <div className="about-container">
          <div className="about-section-heading">
            <SectionBadge>OUR CAPABILITIES</SectionBadge>
            <h2>
              Our Strengths and <span>Capabilities</span>
            </h2>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item, index) => (
              <article className="capability-card" key={item.title}>
                <div className="capability-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why section-space">
        <div className="about-container about-why-grid">
          <div className="about-why-content">
            <SectionBadge>WHY CHOOSE US</SectionBadge>

            <h2>
              Why Choose
              <span> Mars Power Controls?</span>
            </h2>

            <p>
              We deliver more than just structures. We build long term
              partnerships through quality, reliability and on time execution.
            </p>

            <div className="strengths-grid">
              {strengths.map((item) => (
                <div className="strength-item" key={item}>
                  <CheckCircle2 />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-why-image">
            <img
              src="/images/about/about-industrial.png"
              alt="Industrial steel structure project"
            />
            <span className="image-accent image-accent-one" />
            <span className="image-accent image-accent-two" />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="about-bottom-cta">
        <div className="about-container bottom-cta-inner">
          <h2>
            Have a Project in Mind?
            <br />
            Let's Make It <span>Happen.</span>
          </h2>

          <div className="bottom-cta-divider" />

          <div className="bottom-cta-actions">
            <a href="/contact#contact-form" className="about-primary-btn">
              <CalendarDays size={18} />
              Get a Free Consultation
              <ArrowRight size={18} />
            </a>

            <a href="/contact" className="about-secondary-btn">
              <Phone size={18} />
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
