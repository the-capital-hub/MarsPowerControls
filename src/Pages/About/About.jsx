import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Layers3,
  Users,
  HardHat,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Phone,
  CalendarDays,
  Play,
  DraftingCompass,
  Wrench,
  Factory,
  HeartHandshake,
  Lightbulb,
  Award,
} from "lucide-react";
import "./About.css";

const partners = [
  { name: "MYOB", src: "/images/partners/client-1.png" },
  { name: "BELIMO", src: "/images/partners/client-2.png" },
  { name: "LifeGroups", src: "/images/partners/client-3.png" },
  { name: "Lilly", src: "/images/partners/client-4.png" },
  { name: "Citrus", src: "/images/partners/client-5.png" },
  { name: "Trustly", src: "/images/partners/client-6.png" },
  { name: "Oldendorff EO", src: "/images/partners/client-7.png" },
  { name: "Grabyo", src: "/images/partners/client-8.png" },
];

const capabilities = [
  {
    icon: <DraftingCompass />,
    title: "Prefabricated Structures",
    description: "Prefabricated buildings and structures planned around project requirements.",
  },
  {
    icon: <Wrench />,
    title: "Industrial Fabrication",
    description: "Custom metal structures, components and fabricated frameworks.",
  },
  {
    icon: <Factory />,
    title: "Agricultural Fabrication",
    description: "Agricultural sheds and fabricated structures for farming needs.",
  },
  {
    icon: <Building2 />,
    title: "Interior and Metal Works",
    description: "Interior solutions, metal furniture and customised SS and MS works.",
  },
  {
    icon: <ShieldCheck />,
    title: "Truss Work",
    description: "Metal trusses and structural frameworks for project applications.",
  },
];

const values = [
  {
    icon: <HeartHandshake />,
    title: "Integrity",
    description: "Building lasting relationships through transparency and trust.",
  },
  {
    icon: <Award />,
    title: "Quality",
    description: "Maintaining high standards in materials and workmanship.",
  },
  {
    icon: <Lightbulb />,
    title: "Innovation",
    description: "Adopting practical and modern approaches to fabrication.",
  },
  {
    icon: <CheckCircle2 />,
    title: "Commitment",
    description: "Delivering projects with responsibility and dedication.",
  },
  {
    icon: <Users />,
    title: "Customer Satisfaction",
    description: "Prioritising client requirements at every stage.",
  },
];

const strengths = [
  "Comprehensive fabrication capabilities",
  "Customised project solutions",
  "Focus on structural strength and durability",
  "Skilled fabrication professionals",
  "Customer focused project execution",
  "Commitment to quality and timely delivery",
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
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-container about-hero-content">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight size={14} />
            <span className="breadcrumb-active">About Us</span>
          </div>
          <div className="about-hero-title">
            <span className="hero-orange-slash" />
            <div>
              <h1>About Mars Power Controls</h1>
              <p>Engineering Ideas <span>|</span> Building Strength <span>|</span> Delivering Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro section-space">
        <div className="about-container about-intro-grid">
          <div className="about-intro-image">
            <img src="/images/about/about-engineers.png" alt="Engineers reviewing project plans" />
            <span className="image-accent image-accent-one" />
            <span className="image-accent image-accent-two" />
          </div>
          <div className="about-intro-content">
            <SectionBadge>WHO WE ARE</SectionBadge>
            <h2>Building Strong Foundations for a <span>Better Tomorrow</span></h2>
            <p className="about-description">
              Mars Power Controls is a fabrication and engineering solutions company focused on dependable,
              customised and quality driven solutions. Our work spans prefabricated structures, industrial
              fabrication, agricultural sheds, truss work, interior design, metal furniture and stainless
              steel and mild steel fabrication.
            </p>
            <p className="about-description about-description-second">
              We bring together technical knowledge, quality materials and skilled workmanship to create
              practical structures and products designed around customer requirements.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <Building2 />
                <div><strong>Quality</strong><small>Focused Workmanship</small></div>
              </div>
              <div className="about-stat">
                <Layers3 />
                <div><strong>Custom</strong><small>Project Solutions</small></div>
              </div>
              <div className="about-stat">
                <Users />
                <div><strong>Customer</strong><small>Focused Approach</small></div>
              </div>
              <div className="about-stat">
                <HardHat />
                <div><strong>Skilled</strong><small>Workmanship</small></div>
              </div>
            </div>
            <p className="about-stat-note">We have intentionally avoided unconfirmed company statistics.</p>
          </div>
        </div>
      </section>

      <section className="about-story section-space">
        <div className="about-container about-story-grid">
          <div className="about-story-content">
            <SectionBadge>OUR PURPOSE</SectionBadge>
            <h2>Practical Solutions. <span>Lasting Value.</span></h2>
            <p>
              Our objective is to understand each customer's requirements and convert them into practical,
              reliable and customised structures and products, while maintaining a strong focus on quality,
              precision and customer satisfaction.
            </p>
          </div>
          <div className="about-story-divider" />
          <article className="about-value-card mission-card">
            <Target className="value-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver reliable, customised and technically sound fabrication solutions that meet our
              clients' requirements while maintaining high standards of quality, safety and execution.
            </p>
          </article>
          <article className="about-value-card vision-card">
            <Eye className="value-icon" />
            <h3>Our Vision</h3>
            <p>
              To become a trusted name in fabrication and engineering solutions through innovation,
              quality workmanship and customer focused services.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values-section section-space">
        <div className="about-container">
          <div className="about-section-heading">
            <SectionBadge>WHAT GUIDES US</SectionBadge>
            <h2>Our Core <span>Values</span></h2>
          </div>
          <div className="values-grid">
            {values.map((item) => (
              <article className="value-item-card" key={item.title}>
                <div className="value-item-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-partners section-space">
        <div className="about-container">
          <div className="about-section-heading">
            <SectionBadge>PARTNERS</SectionBadge>
            <h2>Our <span>Partners</span></h2>
          </div>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div className="partner-logo" key={partner.name}>
                <img src={partner.src} alt={`${partner.name} partner logo`} loading="lazy" />
              </div>
            ))}
          </div>
          <p className="partners-note">
            Partner logos are displayed as supplied in the original website. Please add the eight original
            logo files to the partners image folder before publishing.
          </p>
        </div>
      </section>

      <section className="about-video-section">
        <div className="about-container">
          <div className="about-video">
            <img src="/images/about/company-video-poster.png" alt="Mars Power Controls company video poster" />
            <div className="video-overlay" />
            <div className="video-content">
              <SectionBadge>COMPANY VIDEO</SectionBadge>
              <h2>See Our Work<br />in Action</h2>
              <p>Explore a visual introduction to fabrication and engineering work.</p>
            </div>
            <video className="about-video-player" controls preload="metadata" poster="/images/about/company-video-poster.png">
              <source src="/video/video1.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      <section className="about-capabilities section-space">
        <div className="about-container">
          <div className="about-section-heading">
            <SectionBadge>OUR EXPERTISE</SectionBadge>
            <h2>Our Services and <span>Capabilities</span></h2>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <div className="capability-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-why section-space">
        <div className="about-container about-why-grid">
          <div className="about-why-content">
            <SectionBadge>WHY CHOOSE US</SectionBadge>
            <h2>Why Choose <span>Mars Power Controls?</span></h2>
            <p>
              We believe every project deserves the right combination of engineering, craftsmanship
              and attention to detail. Our focus is on dependable solutions shaped around customer needs.
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
            <img src="/images/about/about-industrial.png" alt="Industrial fabrication and steel structure" />
            <span className="image-accent image-accent-one" />
            <span className="image-accent image-accent-two" />
          </div>
        </div>
      </section>

      <section className="about-bottom-cta">
        <div className="about-container bottom-cta-inner">
          <h2>Have a Project in Mind?<br />Let's Build It <span>Together.</span></h2>
          <div className="bottom-cta-divider" />
          <div className="bottom-cta-actions">
            <Link to="/contact" className="about-primary-btn">
              <CalendarDays size={18} /> Get a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="about-secondary-btn">
              <Phone size={18} /> Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
