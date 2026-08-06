"use client";
import { useState } from "react";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ChevronRight, Search, Slack, Unplug, UserPlus, Video } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { tabs } from "@/data/navigation";
import Link from "next/link";
import ServicesTabs from "./common-services/ServicesTabs";

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [openStep, setOpenStep] = useState(1);

  const activeService = tabs.find((item) => item.Id === active) || tabs[0];

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeader badge={"Transforming Workplaces"} title={"What Drives Us: Passion for People, Dedication to Results"} />

        <div className="mb-10 rounded-2xl border border-purple-500/10 pt-6 pb-4 md:p-6">
          <ServicesTabs activeService={activeService} handleFunc={setActive} isDetail={false} />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="relative rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-500/5 to-transparent p-6 md:col-span-3 md:p-7">
              <div className="absolute inset-y-0 left-1/2 z-0 hidden -translate-x-1/2 border-l border-dashed border-purple-500/20 md:block" />

              <div className="relative z-10 space-y-6">
                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div onClick={() => toggleStep(1)} className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <BriefcaseBusiness size={15} />
                      </div>

                      <div>
                        <p className="text-left text-[11px] text-purple-400">Recruitment</p>

                        <p className="text-sm text-gray-700 dark:text-gray-300">Hiring Requirement</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-gray-500">
                      Receive
                      <ChevronRight
                        size={14}
                        style={{
                          transform: openStep === 1 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform .3s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div className={`grid transition-all duration-300 ease-in-out ${openStep === 1 ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="space-y-3 overflow-hidden">
                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Position</span>

                        <span className="text-purple-500">Senior React Developer</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Location</span>

                        <span className="text-purple-500">Toronto, Canada</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Experience</span>

                        <span className="text-purple-500">4–6 Years</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div onClick={() => toggleStep(2)} className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Search size={15} />
                      </div>

                      <div>
                        <p className="text-left text-[11px] text-purple-400">AI Matching</p>

                        <p className="text-sm text-gray-700 dark:text-gray-300">Talent Discovery</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-gray-500">
                      Process
                      <ChevronRight
                        size={14}
                        style={{
                          transform: openStep === 2 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform .3s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div className={`grid transition-all duration-300 ease-in-out ${openStep === 2 ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="space-y-3 overflow-hidden">
                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Profiles Screened</span>

                        <span className="text-purple-500">2,500+</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Qualified Talent</span>

                        <span className="text-purple-500">42 Candidates</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm">
                        <span className="text-gray-500">Hiring Regions</span>

                        <span className="text-purple-500">Global</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <BadgeCheck size={15} />
                      </div>

                      <div>
                        <p className="text-left text-[11px] text-purple-400">Placement</p>

                        <p className="text-sm text-gray-700 dark:text-gray-300">Interview • Offer • Onboarding</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 text-xs text-emerald-500">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-500/5 to-transparent p-6 text-left backdrop-blur-xl md:col-span-2">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                  <Unplug size={20} className="text-purple-500" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{activeService?.label}</h3>

                <p className="mb-6 text-sm text-gray-400">{activeService?.brief}</p>
              </div>

              <Link href={activeService?.href} aria-label={`Learn more about ${activeService?.label}`} className="group inline-flex items-center gap-1 text-sm text-purple-400">
                <span>Learn More</span>
                <span className="sr-only"> about {activeService?.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
