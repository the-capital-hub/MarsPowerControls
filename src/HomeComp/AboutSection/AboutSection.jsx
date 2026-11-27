import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, Layers3, Leaf, Factory, Users, HardHat, Award, Play, Pause } from "lucide-react";
import "./AboutSection.css";

const highlights = [
  { number: "01", icon: Settings, title: "Technical Expertise", description: "Practical engineering knowledge for project requirements." },
  { number: "02", icon: Layers3, title: "Customised Solutions", description: "Fabrication planned around your specifications." },
  { number: "03", icon: Leaf, title: "Quality Workmanship", description: "Attention to materials, precision and durability." },
];

// These are capability indicators, not unverified company performance statistics.
const statistics = [
  { icon: Factory, value: "08", label: "Fabrication Categories" },
  { icon: Users, value: "03", label: "Core Sectors" },
  { icon: HardHat, value: "SS / MS", label: "Metal Fabrication" },
  { icon: Award, value: "Solar", label: "Energy Solutions" },
];

function AboutSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.paused) await video.play();
      else video.pause();
    } catch (error) {
      console.error("Unable to play company video:", error);
    }
  };

  return (
    <section className="mars-about-section">
      <div className="mars-about-container">
        <div className="mars-about-visual">
          <div className="mars-about-image-frame"><img src="/images/aboutImage.png" alt="Engineering team reviewing project requirements" loading="lazy" /></div>
          <div className="mars-about-orange-frame mars-frame-top" />
          <div className="mars-about-orange-frame mars-frame-bottom" />
        </div>
        <div className="mars-about-content">
          <div className="mars-section-badge"><span className="mars-badge-stripes"><span /><span /></span><span>ABOUT MARS POWER CONTROLS</span></div>
          <h2>Building Strong Foundations <span>for a Better Tomorrow</span></h2>
          <p className="mars-about-description">
            Mars Power Controls is a fabrication and engineering solutions company committed to dependable, customised and quality driven work. Our services include prefabricated structures, industrial fabrication, agricultural sheds, metal furniture, stainless steel and mild steel works, truss structures and interior solutions. We combine technical knowledge, quality materials and skilled workmanship to address practical project requirements.
          </p>
          <div className="mars-about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;
              return <div className="mars-about-highlight" key={item.number}><div className="mars-highlight-top"><span className="mars-highlight-number">{item.number}</span><Icon size={43} strokeWidth={1.7} /></div><h3>{item.title}</h3><p>{item.description}</p></div>;
            })}
          </div>
          <Link to="/about" className="mars-about-button">Know More About Us<ArrowUpRight size={21} /></Link>
        </div>
      </div>
      <div className="mars-stats-container"><div className="mars-stats-bar">
        {statistics.map((item) => {
          const Icon = item.icon;
          return <div className="mars-stat-item" key={item.label}><Icon className="mars-stat-icon" size={53} strokeWidth={1.7} /><div className="mars-stat-text"><strong>{item.value}</strong><span>{item.label}</span></div></div>;
        })}
      </div></div>
      <div className="mars-company-video-section">
        <video ref={videoRef} className="mars-company-video" src="/video/video1.mp4" poster="/images/aboutImage2.png" controls playsInline preload="metadata" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} />
        {!isPlaying && <div className="mars-video-overlay"><div className="mars-video-content"><div className="mars-video-label"><span />COMPANY VIDEO</div><h2>Explore Our Capabilities <span>in Action</span></h2><p>View an overview of fabrication, engineering and project related activities.</p></div><button type="button" className="mars-video-play" onClick={toggleVideo} aria-label="Play company video"><Play size={34} fill="currentColor" /></button></div>}
        {isPlaying && <button type="button" className="mars-video-pause" onClick={toggleVideo} aria-label="Pause company video"><Pause size={22} fill="currentColor" /></button>}
      </div>
    </section>
  );
}

export default AboutSection;
