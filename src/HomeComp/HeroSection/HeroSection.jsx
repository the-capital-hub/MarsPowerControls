
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Factory,
  Layers3,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import "./HeroSection.css";

const slides = [
  {
    id: 1,
    category: "Fabrication",
    eyebrow: "ENGINEERING THE FUTURE",
    title: "Engineering Strength.",
    highlight: "Fabrication Excellence.",
    description:
      "Delivering innovative fabrication, structural engineering and customized solutions for industrial, commercial and agricultural needs.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    category: "Structures",
    eyebrow: "BUILT FOR THE FUTURE",
    title: "Building Strong.",
    highlight: "Creating Possibilities.",
    description:
      "Reliable structural engineering and steel fabrication solutions designed to deliver strength, stability and lasting performance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    category: "Solar Solutions",
    eyebrow: "POWERING A BETTER TOMORROW",
    title: "Energy For Today.",
    highlight: "Powering Tomorrow.",
    description:
      "Explore smarter solar energy solutions that support sustainable growth and a more energy conscious future.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90",
    thumbnail:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80",
  },
];

const features = [
  {
    icon: Factory,
    title: "Precision",
    subtitle: "Fabrication",
  },
  {
    icon: Layers3,
    title: "Custom",
    subtitle: "Solutions",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "Assurance",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    subtitle: "Energy",
  },
];

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const goToSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const nextSlide = () => {
    goToSlide(activeSlide + 1);
  };

  const previousSlide = () => {
    goToSlide(activeSlide - 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mars-hero">

      {/* Background slides */}
      <div className="mars-hero-background">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`mars-hero-bg ${
              activeSlide === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}
      </div>

      <div className="mars-hero-overlay" />

      {/* Decorative graphics */}
      

      {/* Main content */}
      <div className="mars-hero-container">

        <div className="mars-hero-content" key={currentSlide.id}>

          <div className="mars-hero-eyebrow">
            <span className="mars-eyebrow-stripes">
              <span />
              <span />
            </span>
            <span>{currentSlide.eyebrow}</span>
          </div>

          <h1>
            {currentSlide.title}
            <span>{currentSlide.highlight}</span>
          </h1>

          <p className="mars-hero-description">
            {currentSlide.description}
          </p>

          <div className="mars-hero-actions">
            <a href="/services" className="mars-hero-primary">
              Explore Our Solutions
              <ArrowUpRight size={20} />
            </a>

            <a href="/projects" className="mars-hero-secondary">
              View Our Projects
              <ArrowRight size={19} />
            </a>
          </div>

        </div>

        {/* Thumbnail navigation */}
        <div className="mars-hero-thumbnails">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={`mars-hero-thumbnail ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Show ${slide.category} slide`}
              aria-pressed={activeSlide === index}
            >
              <img src={slide.thumbnail} alt="" />

              <span className="mars-thumbnail-content">
                <strong>0{slide.id}</strong>
                <span>{slide.category}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Previous and next controls */}
        <button
          type="button"
          className="mars-hero-arrow mars-hero-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <ArrowLeft size={23} />
        </button>

        <button
          type="button"
          className="mars-hero-arrow mars-hero-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ArrowRight size={23} />
        </button>

        {/* Slide indicators */}
        <div className="mars-hero-pagination">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={activeSlide === index ? "active" : ""}
              aria-label={`Go to slide ${slide.id}`}
              aria-pressed={activeSlide === index}
            />
          ))}
          <div className="mars-pagination-progress">
            <span
              key={activeSlide}
              className="mars-pagination-progress-fill"
            />
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="mars-hero-features">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="mars-hero-feature" key={feature.title}>
                <Icon size={43} strokeWidth={1.6} />

                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
