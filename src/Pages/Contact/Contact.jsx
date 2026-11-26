
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CalendarDays,
  Clock3,
  Building2,
  ChevronDown,
  CheckCircle2,
  Send,
  MessageSquare,
} from "lucide-react";

import "./Contact.css";

const contactDetails = {
  phone: "+91 XXXXX XXXXX",
  alternatePhone: "+91 XXXXX XXXXX",
  email: "info@yourcompany.com",
  salesEmail: "sales@yourcompany.com",
  office: "Add verified office address here",
  city: "India",
};

const serviceOptions = [
  "Electrical Solutions",
  "Industrial Fabrication",
  "Automation Solutions",
  "Solar Solutions",
  "Prefab Structures",
  "Interior Design",
  "Other Requirements",
];

const faqs = [
  {
    question: "What services does Mars Power Controls offer?",
    answer:
      "We offer electrical, automation, fabrication, industrial infrastructure and solar related solutions. Contact our team to discuss your specific requirements.",
  },
  {
    question: "Do you provide end to end project support?",
    answer:
      "Our team can discuss your project requirements, planning, execution and support needs to identify a suitable solution.",
  },
  {
    question: "Can you customize solutions for specific industry needs?",
    answer:
      "Yes. Share your project scope and operational requirements with our team so we can discuss a suitable customized solution.",
  },
  {
    question: "How can I request a project quote?",
    answer:
      "Complete the project enquiry form with your contact details, required service and project information. Our team can follow up once the form is connected to the enquiry system.",
  },
];

function ContactBadge({ children }) {
  return (
    <div className="contact-badge">
      <span className="contact-badge-slashes">
        <i />
        <i />
      </span>
      <span>{children}</span>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()]{7,18}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!formData.details.trim()) {
      nextErrors.details = "Please describe your project.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Frontend demonstration only.
    // Connect this handler to your backend API before production.
    console.log("Contact enquiry:", formData);

    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      details: "",
    });
    setErrors({});
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="contact-container contact-hero-inner">
          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Contact Us</span>
          </div>

          <div className="contact-hero-copy">
            <h1>
              Contact <span>Us</span>
            </h1>

            <p>
              Let's discuss your project. Our team is here to provide
              expert support and reliable solutions for your power
              and automation needs.
            </p>

            <a href="#contact-form" className="contact-hero-button">
              Get in Touch
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section contact-container">
        <div className="contact-info-intro">
          <ContactBadge>Get in Touch</ContactBadge>
          <h2>We're Here to Help</h2>
          <p>
            Whether you have a project inquiry, need a consultation
            or want to know more about our solutions, reach out to us
            anytime.
          </p>
        </div>

        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Phone />
            </div>
            <h3>Call Us</h3>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
              {contactDetails.phone}
            </a>
            <a href={`tel:${contactDetails.alternatePhone.replace(/\s/g, "")}`}>
              {contactDetails.alternatePhone}
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Mail />
            </div>
            <h3>Email Us</h3>
            <a href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
            <a href={`mailto:${contactDetails.salesEmail}`}>
              {contactDetails.salesEmail}
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin />
            </div>
            <h3>Our Office</h3>
            <p>{contactDetails.office}</p>
            <p>{contactDetails.city}</p>
          </div>
        </div>
      </section>

      {/* Office Image and Enquiry Form */}
      <section className="contact-main-section contact-container">
        <div className="contact-office-image">
          <img
            src="/images/contact/contact-office.jpg"
            alt="Mars Power Controls office building"
            loading="lazy"
          />

          <div className="contact-office-image-caption">
            <Building2 />
            <div>
              <strong>Mars Power Controls</strong>
              <span>Engineering Strength. Fabrication Excellence.</span>
            </div>
          </div>
        </div>

        <div className="contact-form-card" id="contact-form">
          <ContactBadge>Project Enquiry</ContactBadge>

          <h2>Send Us a Message</h2>
          <p className="contact-form-description">
            Share your requirements and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName && (
                  <small className="contact-error">{errors.fullName}</small>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <small className="contact-error">{errors.email}</small>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <small className="contact-error">{errors.phone}</small>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-company">Company Name</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-service">
                  Service Required <span>*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <small className="contact-error">{errors.service}</small>
                )}
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-details">
                  Project Details <span>*</span>
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows="4"
                  placeholder="Tell us about your project, requirements or any specific details"
                  value={formData.details}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.details)}
                />
                {errors.details && (
                  <small className="contact-error">{errors.details}</small>
                )}
              </div>
            </div>

            {submitted && (
              <div className="contact-success" role="status">
                <CheckCircle2 />
                Your details passed validation. Backend connection is
                required to send this enquiry to the company.
              </div>
            )}

            <button type="submit" className="contact-submit-button">
              Submit Enquiry
              <ArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Office Location and Hours */}
      <section className="contact-location-section contact-container">
        <div className="contact-map-placeholder">
          <div className="contact-map-grid" />
          <div className="contact-map-pin">
            <MapPin />
          </div>
          <div className="contact-map-label">
            <strong>Mars Power Controls</strong>
            <span>{contactDetails.office}</span>
          </div>
          <span className="contact-map-note">
            Add verified office location to embed the map
          </span>
        </div>

        <div className="contact-location-details">
          <div className="contact-location-item">
            <Building2 />
            <div>
              <h3>Office Address</h3>
              <p>{contactDetails.office}</p>
              <p>{contactDetails.city}</p>
            </div>
          </div>

          <div className="contact-location-item">
            <Clock3 />
            <div>
              <h3>Business Hours</h3>
              <p><strong>Monday to Friday</strong></p>
              <p>9:30 AM to 6:30 PM</p>
              <p><strong>Saturday</strong></p>
              <p>As per office schedule</p>
              <p><strong>Sunday</strong></p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq-section">
        <div className="contact-container contact-faq-inner">
          <div className="contact-faq-intro">
            <ContactBadge>FAQ</ContactBadge>
            <h2>
              Frequently
              <br />
              Asked Questions
            </h2>
            <p>
              Quick answers to common queries about our services,
              project timelines and support.
            </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`contact-faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown />
                  </button>

                  {isOpen && (
                    <div className="contact-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final-cta">
        <div className="contact-container contact-final-inner">
          <div className="contact-final-mark">//</div>

          <div className="contact-final-copy">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Get in touch with our experts and discover the right
              power and automation solution for your business.
            </p>
          </div>

          <a href="#contact-form" className="contact-final-button">
            Talk to Our Team
            <ArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Contact;
