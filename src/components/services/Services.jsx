"use client";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Slack,
  Unplug,
  UserPlus,
  Video,
} from "lucide-react";
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
        <SectionHeader
          badge={"Transforming Workplaces"}
          title={"What Drives Us: Passion for People, Dedication to Results"}
        />

        <div className="mb-10 rounded-2xl border border-purple-500/10 pt-6 pb-4 md:p-6">
          <ServicesTabs
            activeService={activeService}
            handleFunc={setActive}
            isDetail={false}
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="relative rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-500/5 to-transparent p-6 md:col-span-3 md:p-7">
              <div className="absolute inset-y-0 left-1/2 z-0 hidden -translate-x-1/2 border-l border-dashed border-purple-500/20 md:block" />

              <div className="relative z-10 space-y-6">
                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div
                    onClick={() => toggleStep(1)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <UserPlus size={14} />
                      </div>
                      <span className="text-purple-500 dark:text-white">
                        User Sign Up
                      </span>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-purple-500/10 px-3 py-1 text-xs  text-gray-500">
                      Scan
                      <ChevronRight
                        size={14}
                        style={{
                          transform:
                            openStep === 1 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openStep === 1 ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="space-y-3 overflow-hidden">
                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm text-purple-400">
                        Workspace
                        <span className="text-purple-400">Storm</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm text-gray-400">
                        Channel
                        <span>#Alerts</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div
                    onClick={() => toggleStep(2)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Slack size={14} />
                      </div>

                      <div>
                        <p className="text-left text-[11px] text-purple-400">
                          Slack
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Send an alert
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-gray-500">
                      Trigger
                      <ChevronRight
                        size={14}
                        style={{
                          transform:
                            openStep === 2 ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openStep === 2 ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="space-y-3 overflow-hidden">
                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm text-purple-400">
                        Workspace
                        <span className="text-purple-400">Storm</span>
                      </div>

                      <div className="flex justify-between rounded-xl bg-purple-500/5 px-4 py-3 text-sm text-purple-400">
                        Channel
                        <span>#Alerts</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 rounded-2xl border border-purple-500/10 bg-white p-4 dark:bg-black">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Video size={14} />
                      </div>

                      <div>
                        <p className="text-left text-[11px] text-purple-400">
                          Zoom
                        </p>
                        <p className="text-black dark:text-white">
                          Create a new meeting
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-gray-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
                      Action
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

                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white">
                  {activeService?.label}
                </h3>

                <p className="mb-6 text-sm text-gray-400">
                  {activeService?.brief}
                </p>
              </div>

              <Link
                href={activeService?.href}
                aria-label={`Learn more about ${activeService?.label}`}
                className="group inline-flex items-center gap-1 text-sm text-purple-400"
              >
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
