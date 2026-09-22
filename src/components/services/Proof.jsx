"use client";

import { useEffect, useRef, useState } from "react";
import "./Proof.scss";

const caseStudies = [
  {
    category: "GCC CAPABILITY BUILD - UAE + INDIA",
    description:
      "Global enterprise setting up its first capability centre across two countries. Niche cyber/cloud talent and CXO appointments.",
    stats: [
      {
        value: "3",
        label: "CXO hires",
        type: "number",
        target: 3,
        decimals: 0,
      },
      {
        value: "2",
        label: "Locations",
        type: "number",
        target: 2,
        decimals: 0,
      },
      {
        value: "24/5",
        label: "Coverage",
        type: "coverage",
        target: 24,
      },
    ],
  },
  {
    category: "RPO SCALE-UP - US IT STAFFING",
    description:
      "Mid-market firm scaling from siloed recruiting to global talent operation. 6-8 week ramp-up, fragmented tools.",
    stats: [
      {
        value: "12",
        label: "Recruiters",
        type: "number",
        target: 12,
        decimals: 0,
      },
      {
        value: "2.3×",
        label: "Revenue growth",
        type: "number",
        target: 2.3,
        decimals: 1,
        suffix: "×",
      },
      {
        value: "5-7d",
        label: "New ramp-up",
        type: "range",
        targetStart: 5,
        targetEnd: 7,
        suffix: "d",
      },
    ],
  },
];

const Proof = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countProgress, setCountProgress] = useState(0);

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
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame;
    const startTime = performance.now();
    const duration = 1400;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCountProgress(easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  const getAnimatedValue = (stat) => {
    if (stat.type === "coverage") {
      const current = Math.round(stat.target * countProgress);

      return `${current}/5`;
    }

    if (stat.type === "range") {
      const start = Math.round(stat.targetStart * countProgress);
      const end = Math.round(stat.targetEnd * countProgress);

      return `${start}-${end}${stat.suffix}`;
    }

    const current = stat.target * countProgress;

    return `${current.toFixed(stat.decimals ?? 0)}${stat.suffix ?? ""}`;
  };

  return (
    <section
      ref={sectionRef}
      className={`proof-section py-16 sm:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="proof-header mb-10">
          <p className="proof-label mb-4 text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
            Proof
          </p>

          <h2 className="proof-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How we have delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((study, studyIndex) => (
            <div
              key={study.category}
              className="proof-card group rounded-xl border border-purple-200 bg-gray-50/70 p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-50/40 dark:border-purple-500/20 dark:bg-[#111017] dark:hover:border-purple-500/40 dark:hover:bg-purple-500/[0.035]"
              style={{
                "--proof-delay": `${studyIndex * 150}ms`,
              }}
            >
              <p className="proof-category text-[11px] font-medium uppercase tracking-[0.12em] text-purple-600 dark:text-purple-400">
                {study.category}
              </p>

              <p className="proof-description mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                {study.description}
              </p>

              <div className="proof-stats mt-7 flex flex-wrap gap-x-10 gap-y-5">
                {study.stats.map((stat, statIndex) => (
                  <div
                    key={stat.label}
                    className="proof-stat"
                    style={{
                      "--stat-delay": `${statIndex * 100}ms`,
                    }}
                  >
                    <div className="proof-stat-value text-2xl font-bold leading-none text-purple-600 dark:text-purple-400">
                      {getAnimatedValue(stat)}
                    </div>

                    <div className="proof-stat-label mt-1.5 text-[11px] text-gray-500 dark:text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="proof-button mt-7 text-sm font-semibold text-purple-600 transition-colors duration-300 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                Read full case study →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
