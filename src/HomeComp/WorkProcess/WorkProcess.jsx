
import {
  Users,
  DraftingCompass,
  HardHat,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import "./WorkProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Understanding Requirements",
    description:
      "Client requirements and project scope analysis.",
    image: "/images/process/understanding-requirements.jpg",
    icon: Users,
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Project planning, measurements and technical design.",
    image: "/images/process/planning-design.jpg",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Fabrication & Execution",
    description:
      "Skilled team for fabrication and on site installation.",
    image: "/images/process/fabrication-execution.jpg",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Quality & Delivery",
    description:
      "Quality inspection and project handover.",
    image: "/images/process/quality-delivery.jpg",
    icon: BadgeCheck,
  },
];

function WorkProcess() {
  return (
    <section className="mars-process-section" id="work-process">

      {/* SECTION HEADING */}
      <div className="mars-process-heading">

        <div className="mars-process-badge">
          <span className="mars-process-badge-stripes">
            <span />
            <span />
          </span>

          <span>OUR WORK PROCESS</span>
        </div>

        <h2>
          A Structured Process for
          <span> Successful Projects</span>
        </h2>

        <p>
          From understanding your needs to final delivery, we follow
          a proven and transparent process to ensure quality, safety
          and on time execution.
        </p>

        <span className="mars-process-heading-line" />

      </div>

      {/* PROCESS CARDS */}
      <div className="mars-process-grid">

        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              className="mars-process-card"
              key={step.number}
            >

              {/* IMAGE */}
              <div className="mars-process-image">

                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                />

                <span className="mars-process-number">
                  {step.number}
                </span>

              </div>

              {/* CARD CONTENT */}
              <div className="mars-process-card-content">

                <div className="mars-process-card-icon">
                  <Icon size={42} strokeWidth={1.8} />
                </div>

                <div className="mars-process-card-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </div>

              {/* CONNECTING ARROW */}
              {index !== processSteps.length - 1 && (
                <div className="mars-process-connector">
                  <ArrowRight size={22} />
                </div>
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WorkProcess;
