import { Award, ShieldCheck, Settings, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./TestimonialsSection.css";

// Replaces unverified sample testimonials with company commitments from the supplied content brief.
const commitments = [
  { id: 1, icon: Award, title: "Quality Workmanship", designation: "Precision and professional execution", description: "We focus on workmanship, material quality and attention to detail throughout the fabrication process." },
  { id: 2, icon: Settings, title: "Customised Solutions", designation: "Designed around project requirements", description: "We work to understand project specifications and shape practical solutions around the intended use." },
  { id: 3, icon: ShieldCheck, title: "Reliable Execution", designation: "A clear focus on delivery", description: "We place importance on project schedules, coordination and delivery commitments agreed for the work." },
];

function TestimonialsSection() {
  return (
    <section className="mars-testimonials-section" id="client-commitment">
      <div className="mars-testimonials-heading">
        <div className="mars-testimonials-badge"><span className="mars-testimonials-badge-stripes"><span /><span /></span><span>OUR COMMITMENT</span></div>
        <h2>Every Project Deserves <span>Careful Execution.</span></h2>
        <p>Our approach is built around understanding requirements, delivering quality workmanship and maintaining a focus on dependable project execution.</p>
        <span className="mars-testimonials-heading-line" />
      </div>
      <div className="mars-testimonials-slider">
        <div className="mars-testimonials-grid">
          {commitments.map((item) => { const Icon = item.icon; return <article className="mars-testimonial-card" key={item.id}>
            <div className="mars-testimonial-top"><Quote className="mars-testimonial-quote" size={43} fill="currentColor" /></div>
            <p className="mars-testimonial-review">{item.description}</p>
            <div className="mars-testimonial-divider" />
            <div className="mars-testimonial-profile"><div className="mars-testimonial-avatar"><Icon size={38} strokeWidth={1.7} /></div><div className="mars-testimonial-profile-line" /><div className="mars-testimonial-client-info"><h3>{item.title}</h3><p className="mars-testimonial-designation">{item.designation}</p></div></div>
          </article>; })}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
