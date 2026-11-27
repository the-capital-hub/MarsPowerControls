import { Users, DraftingCompass, HardHat, ClipboardCheck, Truck, ArrowRight } from "lucide-react";
import "./WorkProcess.css";

const processSteps = [
  { number: "01", title: "Understanding Your Requirements", description: "We understand project needs, specifications and expectations.", image: "/images/process/understanding-requirements.jpg", icon: Users },
  { number: "02", title: "Planning & Design", description: "We develop suitable concepts, designs and technical plans.", image: "/images/process/planning-design.jpg", icon: DraftingCompass },
  { number: "03", title: "Material Selection & Fabrication", description: "We focus on suitable materials and precise fabrication.", image: "/images/process/fabrication-execution.jpg", icon: HardHat },
  { number: "04", title: "Quality Inspection", description: "We review completed work against project requirements.", image: "/images/process/quality-delivery.jpg", icon: ClipboardCheck },
  { number: "05", title: "Delivery & Installation", description: "We coordinate delivery and installation as agreed for the project.", image: "/images/process/quality-delivery.jpg", icon: Truck },
];

function WorkProcess() {
  return (
    <section className="mars-process-section" id="work-process">
      <div className="mars-process-heading">
        <div className="mars-process-badge"><span className="mars-process-badge-stripes"><span /><span /></span><span>OUR WORK PROCESS</span></div>
        <h2>From Concept <span>to Completion</span></h2>
        <p>We follow a clear process to understand requirements, plan the work, fabricate, inspect and coordinate delivery.</p>
        <span className="mars-process-heading-line" />
      </div>
      <div className="mars-process-grid">
        {processSteps.map((step, index) => { const Icon = step.icon; return <div className="mars-process-card" key={step.number}>
          <div className="mars-process-image"><img src={step.image} alt={step.title} loading="lazy" /><span className="mars-process-number">{step.number}</span></div>
          <div className="mars-process-card-content"><div className="mars-process-card-icon"><Icon size={42} strokeWidth={1.8} /></div><div className="mars-process-card-text"><h3>{step.title}</h3><p>{step.description}</p></div></div>
          {index !== processSteps.length - 1 && <div className="mars-process-connector"><ArrowRight size={22} /></div>}
        </div>; })}
      </div>
    </section>
  );
}

export default WorkProcess;
