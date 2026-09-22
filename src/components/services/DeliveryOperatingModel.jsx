"use client";

import { useEffect, useRef, useState } from "react";
import "./DeliveryOperatingModel.scss";

const deliveryRoles = [
  {
    title: "Vice President, Delivery",
    description: "Owns global delivery, operating board",
  },
  {
    title: "Regional Directors",
    description: "Owns one of six global centres",
  },
  {
    title: "Delivery Managers",
    description: "Owns domain pods",
  },
  {
    title: "Principal Recruiters",
    description: "Complex/senior mandates",
  },
  {
    title: "Recruiters",
    description: "Execution layer",
  },
];

const domainPods = [
  {
    title: "Cyber & Cloud",
    description: "Security, cloud, DevSecOps",
  },
  {
    title: "Data & Analytics",
    description: "Data eng, ML & AI",
  },
  {
    title: "Product & Eng.",
    description: "Full-stack, mobile, platform",
  },
  {
    title: "Leadership Search",
    description: "CXO, VP, director mandates",
  },
  {
    title: "GCC Build & Operate",
    description: "Centre setup, scaling, ops",
  },
  {
    title: "Talent Intelligence",
    description: "Market mapping, compensation",
  },
];

export default function DeliveryOperatingModel() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveRole((current) => (current + 1) % deliveryRoles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`delivery-model w-full bg-white py-12 dark:bg-black md:py-16 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl md:px-6">
        <div className="delivery-model__header mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
            Delivery Model
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Delivery Operating Model
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400 md:text-base">
            Five-tier recruiter-led organisation with structured accountability.
            Every mandate is owned by a Principal Recruiter, governed by a
            Delivery Manager, and reports to a Regional Director.
          </p>
        </div>

        <div className="delivery-model__intro mb-10 overflow-hidden rounded-2xl border border-purple-200 bg-gray-50 dark:border-purple-500/20 dark:bg-[#111017]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
            <div className="flex items-center px-6 py-7 sm:px-8 lg:px-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
                  How we operate
                </p>

                <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Clear ownership at every stage of delivery.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                  A structured operating model connects leadership, regional
                  teams and specialist recruiters into one accountable delivery
                  system.
                </p>
              </div>
            </div>

            <div className="delivery-model__image relative min-h-[210px] overflow-hidden lg:min-h-[230px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                alt="Professional team collaborating"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-transparent dark:from-[#111017]" />

              <div className="absolute bottom-5 left-5 rounded-lg border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                  Delivery ecosystem
                </p>

                <p className="mt-1 text-xs font-medium text-white">
                  People • Process • Expertise
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="delivery-model__roles min-w-0">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
              Five Tiers
            </p>

            <div className="delivery-model__role-list relative flex flex-col gap-2">
              <div className="delivery-model__rail" />

              {deliveryRoles.map((role, index) => {
                const isActive = index === activeRole;

                return (
                  <button
                    type="button"
                    key={role.title}
                    onClick={() => setActiveRole(index)}
                    className={`delivery-model__role relative flex min-h-[78px] items-center gap-5 rounded-xl border px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                      isActive
                        ? "border-purple-400 bg-purple-500/[0.07] shadow-[0_0_30px_rgba(168,85,247,0.08)] dark:border-purple-400 dark:bg-purple-500/[0.06]"
                        : "border-gray-200 bg-gray-50/40 hover:border-purple-300/50 hover:bg-purple-50/20 dark:border-white/10 dark:bg-white/[0.015] dark:hover:border-purple-500/30 dark:hover:bg-purple-500/[0.025]"
                    }`}
                    style={{
                      marginLeft: `${index * 10}px`,
                      "--role-delay": `${180 + index * 100}ms`,
                    }}
                  >
                    <div
                      className={`delivery-model__number flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-medium ${
                        isActive
                          ? "bg-purple-500/80 text-white shadow-[0_0_18px_rgba(168,85,247,0.35)]"
                          : "bg-gray-200 text-gray-500 dark:bg-white/[0.08] dark:text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight text-gray-900 dark:text-white">
                        {role.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-500">
                        {role.description}
                      </p>
                    </div>

                    <span className="delivery-model__role-dot ml-auto shrink-0" />
                  </button>
                );
              })}
            </div>

            <div className="delivery-model__active mt-4 flex items-center gap-3 rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3 dark:border-purple-500/15 dark:bg-purple-500/[0.035]">
              <span className="delivery-model__active-dot" />

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-500">
                  Currently highlighted
                </p>

                <p className="mt-0.5 truncate text-xs font-semibold text-gray-800 dark:text-gray-200">
                  {deliveryRoles[activeRole].title}
                </p>
              </div>

              <span className="ml-auto text-[10px] font-medium text-purple-600 dark:text-purple-400">
                {String(activeRole + 1).padStart(2, "0")} / 05
              </span>
            </div>
          </div>

          <div className="delivery-model__domains min-w-0">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400">
              Domain Pods
            </p>

            <h3 className="mb-5 max-w-xl text-sm font-bold text-gray-900 dark:text-white">
              Specialist delivery teams aligned by technical function.
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {domainPods.map((pod, index) => (
                <div
                  key={pod.title}
                  className="delivery-model__pod min-h-[124px] rounded-xl border border-purple-200 bg-gray-50/70 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-50/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)] dark:border-purple-500/20 dark:bg-[#111017] dark:hover:border-purple-500/40 dark:hover:bg-purple-500/[0.035]"
                  style={{
                    "--pod-delay": `${420 + index * 100}ms`,
                  }}
                >
                  <div className="delivery-model__pod-top mb-3 flex items-center justify-between">
                    <div className="h-px w-5 bg-purple-400/70" />

                    <span className="text-[10px] text-gray-400 dark:text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    {pod.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-500">
                    {pod.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="delivery-model__specialists mt-3 flex min-h-[68px] items-center justify-center gap-2 rounded-xl border border-purple-200 bg-gray-50/70 px-4 py-4 dark:border-purple-500/20 dark:bg-[#111017]">
              <span className="delivery-model__specialists-number text-xl font-bold text-purple-600 dark:text-purple-400">
                120+
              </span>

              <span className="text-xs text-gray-500 dark:text-gray-500">
                specialists across the Dignifyd Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
