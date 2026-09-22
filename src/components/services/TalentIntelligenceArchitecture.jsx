"use client";

import { useEffect, useRef, useState } from "react";
import "./TalentIntelligenceArchitecture.scss";

const architectureLayers = [
  {
    number: "01",
    title: "Data Layer",
    subtitle: "Sources & Inputs",
    eyebrow: "DATA FOUNDATION",
    description:
      "A connected talent data foundation brings together multiple candidate sources, referral networks and external talent platforms into one structured ecosystem.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    items: [
      "LinkedIn Talent Solutions",
      "Naukri / Dice / Indeed",
      "Ceipal (80,000+)",
      "Referrals (12,000+)",
    ],
    flow: "Ingestion → Validation → Deduplication",
  },
  {
    number: "02",
    title: "Intelligence Layer",
    subtitle: "Processing & scoring",
    eyebrow: "INTELLIGENCE ENGINE",
    description:
      "AI-assisted intelligence evaluates, scores and validates talent against the requirements of each mandate.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Proprietary Scoring Engine",
      "AI-Assisted Matching",
      "Data Validation & QA",
    ],
    flow: "Scoring → Matching → Verification",
  },
  {
    number: "03",
    title: "Delivery Layer",
    subtitle: "Execution & workflows",
    eyebrow: "DELIVERY ENGINE",
    description:
      "Structured workflows move qualified talent from sourcing through screening and assessment with consistent execution.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    items: ["Ceipal ATS", "Assessment Suite", "Workflow Automation"],
    flow: "Sourcing → Screening → Assessment",
  },
  {
    number: "04",
    title: "Client Layer",
    subtitle: "Integration & reporting",
    eyebrow: "CLIENT ECOSYSTEM",
    description:
      "Enterprise integrations connect talent intelligence directly into the systems and reporting infrastructure your teams already use.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
    items: ["Workday VNDLY / SAP Fieldglass", "BI Reporting", "GDPR & SOC2"],
    flow: "Integration → Reporting → Governance",
  },
];

export default function TalentIntelligenceArchitecture() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    if (!isVisible) return;

    intervalRef.current = setInterval(() => {
      setActiveLayer((current) => (current + 1) % architectureLayers.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  const handleLayerSelect = (index) => {
    setActiveLayer(index);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveLayer((current) => (current + 1) % architectureLayers.length);
    }, 3000);
  };

  const active = architectureLayers[activeLayer];

  return (
    <section
      ref={sectionRef}
      className={`architecture-section w-full bg-white py-14 text-gray-900 transition-colors duration-500 dark:bg-black dark:text-white md:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl md:px-6">
        <div className="architecture-header mb-10 md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl md:text-5xl dark:text-white">
            Talent Intelligence Architecture
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
            Four-layer technology stack. Integration-first — we plug into what
            you already run.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
          <div className="architecture-visual relative min-h-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-purple-500/20 dark:bg-[#0d0b12] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:min-h-[620px]">
            <div
              key={activeLayer}
              className="architecture-image absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${active.image})`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:hidden" />

            <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/55 to-black/10 dark:block" />

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/20 blur-[90px] dark:bg-purple-600/20" />

            <div className="absolute left-5 top-5 z-10 rounded-full border border-purple-300/60 bg-white/75 px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-purple-700 backdrop-blur-md dark:border-purple-400/30 dark:bg-black/40 dark:text-purple-300">
              {active.eyebrow}
            </div>

            <div className="absolute right-5 top-5 z-10 text-5xl font-semibold text-gray-900/20 dark:text-white/20">
              {active.number}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <div className="mb-3 h-px w-10 bg-purple-500" />

              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-300">
                {active.subtitle}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-4xl">
                {active.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600 dark:text-gray-300">
                {active.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                {architectureLayers.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show ${architectureLayers[index].title}`}
                    onClick={() => handleLayerSelect(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeLayer
                        ? "w-10 bg-purple-500"
                        : "w-5 bg-gray-300 hover:bg-purple-300 dark:bg-white/20 dark:hover:bg-purple-400/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="architecture-layers flex flex-col gap-3">
            {architectureLayers.map((layer, layerIndex) => {
              const isActive = activeLayer === layerIndex;

              return (
                <button
                  key={layer.number}
                  type="button"
                  onClick={() => handleLayerSelect(layerIndex)}
                  className={`architecture-layer group relative w-full rounded-2xl border p-4 text-left transition-all duration-500 md:p-5 ${
                    isActive
                      ? "border-purple-400 bg-purple-50 shadow-[0_15px_45px_rgba(168,85,247,0.12)] dark:border-purple-400/70 dark:bg-[#17131e] dark:shadow-[0_15px_45px_rgba(168,85,247,0.12)]"
                      : "border-gray-200 bg-gray-50/70 hover:border-purple-300/70 hover:bg-purple-50/50 dark:border-white/10 dark:bg-[#111017] dark:hover:border-purple-500/40 dark:hover:bg-purple-500/[0.035]"
                  }`}
                  style={{
                    "--layer-delay": `${180 + layerIndex * 120}ms`,
                  }}
                >
                  {isActive && (
                    <span className="architecture-active-glow pointer-events-none absolute inset-0 rounded-2xl" />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold transition-all duration-500 ${
                            isActive
                              ? "border-purple-400 bg-purple-500/15 text-purple-700 shadow-[0_0_25px_rgba(168,85,247,0.18)] dark:border-purple-400/50 dark:bg-purple-500/15 dark:text-purple-300"
                              : "border-purple-200 bg-purple-100/50 text-purple-600 dark:border-purple-500/20 dark:bg-purple-500/[0.08] dark:text-purple-400"
                          }`}
                        >
                          {layer.number}
                        </div>

                        <div>
                          <h3
                            className={`text-sm font-bold transition-colors duration-300 md:text-base ${
                              isActive
                                ? "text-gray-950 dark:text-white"
                                : "text-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {layer.title}
                          </h3>

                          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                            {layer.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? "rotate-0 border-purple-400 bg-purple-500 text-white"
                            : "border-gray-300 text-gray-500 group-hover:border-purple-400 group-hover:text-purple-600 dark:border-white/10 dark:text-gray-500 dark:group-hover:border-purple-500/40 dark:group-hover:text-purple-400"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-lg border px-3 py-2 text-[11px] transition-all duration-300 ${
                            isActive
                              ? "border-purple-200 bg-white text-gray-700 dark:border-purple-500/25 dark:bg-[#0f0d14] dark:text-gray-300"
                              : "border-gray-200 bg-white/70 text-gray-600 dark:border-white/10 dark:bg-[#15121c] dark:text-gray-400"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-lg px-3 py-2 text-[10px] transition-all duration-500 ${
                          isActive
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-500/[0.08] dark:text-purple-300"
                            : "bg-gray-100 text-gray-500 dark:bg-white/[0.025] dark:text-gray-500"
                        }`}
                      >
                        {layer.flow}
                      </span>

                      <span
                        className={`text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                          isActive
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      >
                        {isActive ? "Active" : "Layer"}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="architecture-footer mt-4 rounded-2xl border border-gray-200 bg-gray-50/70 px-5 py-5 text-center shadow-sm dark:border-purple-500/20 dark:bg-[#111017]">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Integration-first architecture — no requirement to rebuild your HRIS
            or ATS infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
