"use client";

import Image from "next/image";
import { ArrowDown, Building2, Globe2, Users, Zap } from "lucide-react";

import caseStudyImage from "../../../assets/images/resources/caseStudies/delivery_transformation.jpg";

const caseStudyData = {
  "gcc-capability-build": {
    number: "01",
    category: "GCC Capability Build",
    eyebrow: "Case Study",
    title: "Building a Global Capability Centre across UAE & India",
    description:
      "How a global enterprise built the talent, leadership and delivery capability needed to establish its first GCC across two strategic locations.",
    image: caseStudyImage,
    highlights: [
      {
        icon: Globe2,
        label: "Locations",
        value: "UAE + India",
      },
      {
        icon: Users,
        label: "Capability",
        value: "Talent + Leadership",
      },
      {
        icon: Zap,
        label: "Focus",
        value: "Rapid Build",
      },
    ],
  },

  "delivery-transformation": {
    number: "02",
    category: "Delivery Transformation",
    eyebrow: "Case Study",
    title: "From in-house recruiting to a scalable global talent function",
    description:
      "How a structured delivery model helped a growing IT staffing business move from fragmented recruiting to a connected global capability.",
    image: caseStudyImage,
    highlights: [
      {
        icon: Globe2,
        label: "Coverage",
        value: "Global",
      },
      {
        icon: Users,
        label: "Model",
        value: "Global Pods",
      },
      {
        icon: Zap,
        label: "Focus",
        value: "Scale",
      },
    ],
  },

  "executive-leadership-search": {
    number: "03",
    category: "Executive & Leadership Search",
    eyebrow: "Case Study",
    title: "Building a leadership bench for a new GCC",
    description:
      "How targeted executive search supported a new GCC with CXO appointments, functional leadership and a succession pipeline.",
    image: caseStudyImage,
    highlights: [
      {
        icon: Users,
        label: "Leadership",
        value: "CXO + Heads",
      },
      {
        icon: Building2,
        label: "Context",
        value: "New GCC",
      },
      {
        icon: Zap,
        label: "Focus",
        value: "Critical Hiring",
      },
    ],
  },
};

export default function CaseStudyHero({ slug }) {
  const study = caseStudyData[slug] ?? caseStudyData["gcc-capability-build"];

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-500 dark:text-purple-400">
              {study.eyebrow}
            </span>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-black/30 sm:block dark:text-white/25">
            Dignify Talent Connect
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/15 bg-purple-500/[0.05] px-3.5 py-2 dark:border-purple-400/15 dark:bg-purple-400/[0.05]">
              <Building2
                size={14}
                strokeWidth={1.5}
                className="text-purple-500 dark:text-purple-400"
                aria-hidden="true"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-500 dark:text-purple-400">
                {study.category}
              </span>
            </div>

            <h1 className="mt-7 max-w-[650px] text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#111322] sm:text-[54px] lg:text-[62px] dark:text-white">
              {study.title}
            </h1>

            <div className="mt-7 h-[2px] w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <p className="mt-7 max-w-[560px] text-[15px] leading-7 text-black/55 dark:text-white/50">
              {study.description}
            </p>

            <div className="mt-10 flex items-center gap-3 text-black/30 dark:text-white/25">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.1]">
                <ArrowDown size={14} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Explore the story
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[1.08/1] overflow-hidden rounded-[28px] border border-black/[0.08] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.12)] dark:border-white/[0.1]">
              <Image
                src={study.image}
                alt={study.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 text-white backdrop-blur-xl sm:left-6 sm:top-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
                  {study.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                      The brief
                    </p>

                    <p className="mt-1 max-w-[330px] text-[16px] font-medium leading-6 text-white">
                      Build capability. Establish leadership. Scale delivery.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl sm:flex">
                    <ArrowDown size={15} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-4 z-10 w-[185px] rounded-[17px] border border-black/[0.08] bg-white/90 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:-left-7 dark:border-white/[0.1] dark:bg-[#15151a]/95">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-purple-500 dark:text-purple-400">
                Capability Build
              </p>

              <p className="mt-2 text-[13px] font-semibold leading-5 text-[#111322] dark:text-white">
                Talent + operating model built together
              </p>
            </div>

            <div className="absolute -right-3 top-[24%] z-10 hidden w-[155px] rounded-[16px] border border-black/[0.08] bg-white/90 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:block dark:border-white/[0.1] dark:bg-[#15151a]/95">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/[0.08] text-purple-500 dark:text-purple-400">
                  <Globe2 size={14} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.12em] text-black/35 dark:text-white/30">
                    Locations
                  </p>

                  <p className="text-[12px] font-semibold text-[#111322] dark:text-white">
                    UAE + India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/60 backdrop-blur-xl sm:grid-cols-3 dark:border-white/[0.08] dark:bg-white/[0.025]">
          {study.highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-5 sm:p-6 ${
                  index !== study.highlights.length - 1
                    ? "border-b border-black/[0.07] sm:border-b-0 sm:border-r dark:border-white/[0.07]"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-purple-500/10 bg-purple-500/[0.06] text-purple-500 dark:border-purple-400/10 dark:bg-purple-400/[0.06] dark:text-purple-400">
                  <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-black/35 dark:text-white/30">
                    {item.label}
                  </p>

                  <p className="mt-1 text-[13px] font-semibold text-[#111322] dark:text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
