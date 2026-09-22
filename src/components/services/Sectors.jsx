"use client";

import { useEffect, useRef, useState } from "react";
import "./Sectors.scss";

const sectors = [
  {
    title: "BFSI",
    description:
      "Risk, compliance and digital banking recruitment for financial institutions.",
    tags: ["Risk", "Compliance", "Digital banking"],
  },
  {
    title: "Technology",
    description:
      "SRE/DevOps, full-stack, security. Product, platform and cloud engineering.",
    tags: ["SRE/DevOps", "Full-stack", "Security"],
  },
  {
    title: "Consulting",
    description:
      "PMO, business analyst and transformation roles. Strategy through delivery.",
    tags: ["PMO", "BA", "Transformation"],
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "R&D, IT, QA/RA and clinical roles. Validated system rollouts.",
    tags: ["R&D/IT", "QA/RA", "Clinical"],
  },
  {
    title: "Energy & Industrials",
    description:
      "OT/IoT, embedded and SCADA. Reliability in critical infrastructure.",
    tags: ["OT/IoT", "Embedded", "SCADA"],
  },
  {
    title: "Public Sector & GCCs",
    description:
      "Citizen and shared services. Mission-critical, auditable hiring.",
    tags: ["Citizen services", "Shared services"],
  },
];

const Sectors = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSector, setActiveSector] = useState(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sectors-section relative w-full overflow-hidden py-16 sm:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="sectors-bg-glow sectors-bg-glow--one" />
      <div className="sectors-bg-glow sectors-bg-glow--two" />
      <div className="sectors-grid-bg" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="sectors-header mb-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="sectors-eyebrow-wrap mb-4">
                <span className="sectors-eyebrow-dot" />

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
                  Sectors
                </p>
              </div>

              <h2 className="sectors-heading max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Six sectors.
                <span className="sectors-heading-highlight">
                  {" "}
                  Deep expertise.
                </span>
              </h2>

              <p className="sectors-description mt-4 max-w-4xl text-base leading-7 text-gray-600 dark:text-gray-400">
                Dedicated recruiters per sector who know the roles, titles, and
                where to find the people.
              </p>
            </div>

            <div className="sectors-header-stat shrink-0">
              <span className="sectors-header-stat-number">06</span>

              <div>
                <span className="sectors-header-stat-label">Specialist</span>
                <span className="sectors-header-stat-label">sectors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sectors-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const isActive = activeSector === index;

            return (
              <article
                key={sector.title}
                className={`sector-card group relative overflow-hidden rounded-2xl border border-purple-200 bg-gray-50/70 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/40 hover:bg-purple-50/40 dark:border-purple-500/20 dark:bg-[#111017] dark:hover:border-purple-500/40 dark:hover:bg-purple-500/[0.035] ${
                  index === 0 ? "sector-card--featured" : ""
                } ${isActive ? "sector-card--active" : ""}`}
                style={{
                  "--sector-delay": `${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveSector(index)}
                onMouseLeave={() => setActiveSector(null)}
              >
                <div className="sector-card-glow" />

                <div className="sector-card-corner" />

                <div className="sector-card-top">
                  <div className="sector-number">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="sector-card-line" />

                  <div className="sector-card-arrow">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5M15 5H7M15 5V13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="sector-card-content">
                  <h3 className="sector-card-title text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                    {sector.title}
                  </h3>

                  <p className="sector-card-description mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {sector.description}
                  </p>

                  <div className="sector-tags mt-5 flex flex-wrap gap-2">
                    {sector.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="sector-tag rounded-md border border-purple-200 bg-white px-3 py-1.5 text-xs text-gray-600 transition-colors duration-300 group-hover:border-purple-300 dark:border-purple-500/20 dark:bg-[#15121c] dark:text-gray-400 dark:group-hover:border-purple-500/30"
                        style={{
                          "--tag-delay": `${tagIndex * 60}ms`,
                        }}
                      >
                        <span className="sector-tag-dot" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sector-card-progress">
                  <span />
                </div>
              </article>
            );
          })}
        </div>

        <div className="sectors-footer mt-6">
          <div className="sectors-footer-line" />

          <div className="sectors-footer-content">
            <div className="sectors-footer-icon">
              <span />
              <span />
              <span />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sector-specialist recruiters combine domain knowledge with talent
              intelligence to reach the right people faster.
            </p>

            <div className="sectors-footer-label">
              DOMAIN
              <span>+</span>
              TALENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
