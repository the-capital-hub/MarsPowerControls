
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Settings,
  Layers3,
  Leaf,
  Factory,
  Users,
  HardHat,
  Award,
  Play,
  Pause,
} from "lucide-react";

import "./AboutSection.css";

const highlights = [
  {
    number: "01",
    icon: Settings,
    title: "Engineering Excellence",
    description: "Precision, strength and reliable performance.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Customized Solutions",
    description: "Designed to meet your exact requirements.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Sustainable Approach",
    description: "Energy efficient and future ready solutions.",
  },
];

const statistics = [
  {
    icon: Factory,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "200+",
    label: "Projects Delivered",
  },
  {
    icon: HardHat,
    value: "50+",
    label: "Skilled Professionals",
  },
  {
    icon: Award,
    value: "100%",
    label: "Quality Commitment",
  },
];

function AboutSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play company video:", error);
    }
  };

  return (
    <section className="mars-about-section">

      {/* ABOUT COMPANY */}
      <div className="mars-about-container">

        {/* LEFT IMAGE */}
        <div className="mars-about-visual">
          <div className="mars-about-image-frame">
            <img
              src="/images/aboutImage.png"
              alt="Mars Power Controls engineering team reviewing project blueprints"
            />
          </div>

          <div className="mars-about-orange-frame mars-frame-top" />
          <div className="mars-about-orange-frame mars-frame-bottom" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="mars-about-content">

          {/* APPROVED SECTION BADGE */}
          <div className="mars-section-badge">
            <span className="mars-badge-stripes">
              <span />
              <span />
            </span>

            <span>ABOUT MARS POWER CONTROLS</span>
          </div>

          <h2>
            A Reliable Partner in
            <span>Engineering & Fabrication</span>
          </h2>

          <p className="mars-about-description">
            Mars Power Controls delivers high quality fabrication,
            structural engineering and solar solutions for industrial,
            commercial and agricultural sectors. We combine technical
            expertise, modern infrastructure and a commitment to quality
            to build solutions that last.
          </p>

          {/* NUMBERED HIGHLIGHTS */}
          <div className="mars-about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="mars-about-highlight" key={item.number}>

                  <div className="mars-highlight-top">
                    <span className="mars-highlight-number">
                      {item.number}
                    </span>

                    <Icon size={43} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              );
            })}
          </div>

          <a href="/about" className="mars-about-button">
            Discover Our Company
            <ArrowUpRight size={21} />
          </a>

        </div>
      </div>

      {/* STATISTICS BAR */}
      <div className="mars-stats-container">
        <div className="mars-stats-bar">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div className="mars-stat-item" key={item.label}>

                <Icon
                  className="mars-stat-icon"
                  size={53}
                  strokeWidth={1.7}
                />

                <div className="mars-stat-text">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* COMPANY VIDEO */}
      <div className="mars-company-video-section">

        <video
          ref={videoRef}
          className="mars-company-video"
          src="/video/video1.mp4"
          poster="/images/aboutImage2.png"
          controls
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <div className="mars-video-overlay">

            <div className="mars-video-content">

              <div className="mars-video-label">
                <span />
                COMPANY VIDEO
              </div>

              <h2>
                See Our Capabilities
                <span>in Action</span>
              </h2>

              <p>
                Take a quick tour of our infrastructure,
                processes and project execution.
              </p>

            </div>

            <button
              type="button"
              className="mars-video-play"
              onClick={toggleVideo}
              aria-label="Play company video"
            >
              <Play size={34} fill="currentColor" />
            </button>

          </div>
        )}

        {isPlaying && (
          <button
            type="button"
            className="mars-video-pause"
            onClick={toggleVideo}
            aria-label="Pause company video"
          >
            <Pause size={22} fill="currentColor" />
          </button>
        )}

      </div>

    </section>
  );
}

export default AboutSection;
