"use client";

import { useEffect, useRef, useState } from "react";
import "./delivery-framework.scss";
import Image from "next/image";
import dignose from "../../assets/images/services/our_process/dignose.jpg";
import design from "../../assets/images/services/our_process/design.jpg";
import deploy from "../../assets/images/services/our_process/deploy.jpg";
import sustain from "../../assets/images/services/our_process/sustain.jpg";
const steps = [
  {
    number: "01",
    title: "Diagnose",
    duration: "Week 1-2",
    image: dignose,
    items: [
      "Role clarity & requirements",
      "Market mapping & availability",
      "Risk & compliance assessment",
    ],
    deliverable: "Discovery brief",
    deliverableDescription: "Shared with client before any sourcing begins",
  },

  {
    number: "02",
    title: "Design",
    duration: "Week 2-3",
    image: design,
    items: [
      "Scorecards & criteria",
      "Sourcing plan & channels",
      "Interview loops & evaluation",
    ],
    deliverable: "Hiring blueprint",
    deliverableDescription: "Approved by hiring manager before deployment",
  },

  {
    number: "03",
    title: "Deploy",
    duration: "Week 3-4",
    image: deploy,
    items: [
      "Multi-channel sourcing",
      "Proctored assessments",
      "SLA management & tracking",
    ],
    deliverable: "Curated shortlist + scorecards",
    deliverableDescription: "Submitted with full assessment documentation",
  },

  {
    number: "04",
    title: "Sustain",
    duration: "Ongoing",
    image: sustain,
    items: [
      "Governance & KPI cadence",
      "Continuous improvement",
      "Performance monitoring",
    ],
    deliverable: "Quarterly performance pack",
    deliverableDescription: "Reviewed in monthly governance meetings",
  },
];
const intelligenceCards = [
  {
    title: "AI-powered matching",
    description: "Proprietary scoring across thousands of data points",
  },
  {
    title: "Comprehensive vetting",
    description:
      "Technical assessments, behavioural profiling, domain interviews",
  },
  {
    title: "Dynamic talent pools",
    description: "Passive and active candidates by skill taxonomy",
  },
  {
    title: "Outcome assurance",
    description: "Scorecards and evidence-backed profiles on every submission",
  },
];

export default function DeliveryFramework() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);

  const sectionRef = useRef(null);

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

  const handleStepChange = (index) => {
    if (index === activeStep) return;

    setActiveStep(index);

    setContentKey((prev) => prev + 1);
  };

  const active = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className={`delivery-framework w-full py-10 md:py-12 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl md:px-6">
        <div className="delivery-header">
          <p className="text-xs font-medium tracking-[0.18em] text-purple-600 uppercase dark:text-purple-400">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Dignifyd Delivery Framework
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base dark:text-gray-400">
            A structured four-stage methodology. Click each phase to see what
            happens.
          </p>
        </div>

        <div className="delivery-steps mt-9 flex items-center">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <div
                key={step.number}
                className="delivery-step flex flex-1 items-center"
                style={{
                  "--step-delay": `${index * 100}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={() => handleStepChange(index)}
                  className={`delivery-step-button relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                    isActive ? "active" : isCompleted ? "completed" : ""
                  }`}
                >
                  <span>{step.number}</span>
                </button>

                {index < steps.length - 1 && (
                  <div className="delivery-line relative mx-2 h-px flex-1">
                    <span className="delivery-line-base" />

                    {index < activeStep && (
                      <span
                        key={`${activeStep}-${index}`}
                        className="delivery-line-progress"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          key={contentKey}
          className="delivery-content mt-9 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          <div className="delivery-left">
            <div className="delivery-title flex items-center gap-3">
              <span className="delivery-number text-4xl leading-none font-bold text-purple-600 dark:text-purple-500">
                {active.number}
              </span>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {active.title}
                </h3>

                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                  {active.duration}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {active.items.map((item, index) => (
                <div
                  key={item}
                  className="delivery-item rounded-lg border border-purple-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-purple-400 dark:border-purple-500/15 dark:bg-[#111017] dark:text-gray-400 dark:hover:border-purple-500/30"
                  style={{
                    "--item-delay": `${180 + index * 80}ms`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[245px] overflow-hidden rounded-xl border border-purple-200 dark:border-purple-500/15">
            <Image
              key={active.number}
              src={active.image.src}
              alt={`${active.title} process`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="delivery-engine mt-7 rounded-xl border border-purple-200 bg-gray-50 p-5 dark:border-purple-500/15 dark:bg-[#111017]">
          <h3 className="delivery-engine-title text-sm font-semibold text-gray-900 dark:text-white">
            Intelligence & Vetting Engine
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {intelligenceCards.map((card, index) => (
              <div
                key={card.title}
                className="delivery-engine-card rounded-lg border border-purple-200 bg-white p-4 dark:border-purple-500/15 dark:bg-[#15131d]"
                style={{
                  "--engine-delay": `${index * 100}ms`,
                }}
              >
                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                  {card.title}
                </h4>

                <p className="mt-1.5 text-xs leading-5 text-gray-500 dark:text-gray-500">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
