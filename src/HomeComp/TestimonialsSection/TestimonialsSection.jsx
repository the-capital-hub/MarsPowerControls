
import { useState } from "react";

import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  UserRound,
  Building2,
} from "lucide-react";

import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    review:
      "The team at Mars Power Controls delivered our project with excellent quality and professional execution. Their technical expertise and approach made the experience smooth.",
    name: "Client Representative",
    designation: "Project Manager",
    company: "Manufacturing Industry",
  },
  {
    id: 2,
    review:
      "We appreciate the team's commitment to engineering and fabrication quality. The project requirements were understood clearly and the solution was delivered professionally.",
    name: "Client Representative",
    designation: "Operations Manager",
    company: "Infrastructure Industry",
  },
  {
    id: 3,
    review:
      "A professional team with a strong focus on quality and coordination. The execution process was organised and the overall experience was positive.",
    name: "Client Representative",
    designation: "Project Director",
    company: "Energy Industry",
  },
  {
    id: 4,
    review:
      "The fabrication work was handled with attention to detail. We value the team's technical approach and commitment to delivering reliable solutions.",
    name: "Client Representative",
    designation: "Facility Manager",
    company: "Industrial Sector",
  },
  {
    id: 5,
    review:
      "The team demonstrated good coordination throughout the project. Their focus on workmanship and project requirements was appreciated.",
    name: "Client Representative",
    designation: "Business Representative",
    company: "Commercial Sector",
  },
];

const ITEMS_PER_PAGE = 3;

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPages = Math.ceil(
    testimonials.length / ITEMS_PER_PAGE
  );

  const visibleTestimonials = testimonials.slice(
    activeIndex * ITEMS_PER_PAGE,
    activeIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % totalPages);
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + totalPages) % totalPages);
  };

  return (
    <section
      className="mars-testimonials-section"
      id="testimonials"
    >

      {/* SECTION HEADING */}
      <div className="mars-testimonials-heading">

        <div className="mars-testimonials-badge">
          <span className="mars-testimonials-badge-stripes">
            <span />
            <span />
          </span>

          <span>WHAT OUR CLIENTS SAY</span>
        </div>

        <h2>
          Trusted by Clients.
          <span> Proven by Results.</span>
        </h2>

        <p>
          We value the trust of our clients and are committed
          to delivering engineering solutions that meet their
          expectations.
        </p>

        <span className="mars-testimonials-heading-line" />

      </div>

      {/* TESTIMONIAL SLIDER */}
      <div className="mars-testimonials-slider">

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          className="mars-testimonial-nav mars-testimonial-prev"
          onClick={previousSlide}
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={30} />
        </button>

        {/* CARDS */}
        <div className="mars-testimonials-grid" key={activeIndex}>

          {visibleTestimonials.map((item) => (
            <article
              className="mars-testimonial-card"
              key={item.id}
            >

              {/* QUOTE AND RATING */}
              <div className="mars-testimonial-top">

                <Quote
                  className="mars-testimonial-quote"
                  size={43}
                  fill="currentColor"
                />

                <div
                  className="mars-testimonial-stars"
                  aria-label="Sample five star rating"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>

              </div>

              {/* REVIEW */}
              <p className="mars-testimonial-review">
                {item.review}
              </p>

              {/* DIVIDER */}
              <div className="mars-testimonial-divider" />

              {/* CLIENT PROFILE */}
              <div className="mars-testimonial-profile">

                <div className="mars-testimonial-avatar">
                  <UserRound size={38} strokeWidth={1.7} />
                </div>

                <div className="mars-testimonial-profile-line" />

                <div className="mars-testimonial-client-info">

                  <h3>{item.name}</h3>

                  <p className="mars-testimonial-designation">
                    {item.designation}
                  </p>

                  <div className="mars-testimonial-company">
                    <Building2 size={16} />
                    <span>{item.company}</span>
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* NEXT BUTTON */}
        <button
          type="button"
          className="mars-testimonial-nav mars-testimonial-next"
          onClick={nextSlide}
          aria-label="Next testimonials"
        >
          <ChevronRight size={30} />
        </button>

      </div>

      {/* PAGINATION */}
      <div className="mars-testimonial-pagination">

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            key={index}
            className={
              activeIndex === index ? "active" : ""
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial page ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}

      </div>

    </section>
  );
}

export default TestimonialsSection;
