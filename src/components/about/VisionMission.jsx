"use client";

import { useState } from "react";
import Image from "next/image";
import { SparklesIcon } from "lucide-react";

import vision from "../../assets/images/aboutUs/missionandvision/vision.png";
import SectionHeader from "../common/SectionHeader";

export default function VisionMission() {
  const [active, setActive] = useState("vision");

  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeader
          badge="Vision, Mission, Impact"
          title="Talent Solutions Designed for Long-Term Business Success"
        />

        <div className="relative mt-12 overflow-hidden rounded-[30px] border border-purple-500/20 p-6 lg:mt-16 lg:rounded-[40px] lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.2),transparent_60%)]"></div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center rounded-full border border-purple-500/30 p-1 backdrop-blur-xl">
                  {["vision", "mission"].map((tab) => {
                    const isActive = active === tab;

                    return (
                      <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        className={`relative rounded-full px-6 py-2 text-sm transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "cursor-pointer text-gray-400"
                        }`}
                      >
                        {isActive && (
                          <>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/25 via-purple-400/30 to-pink-500/25 blur-lg dark:from-purple-500/40 dark:via-purple-500/40 dark:to-pink-500/40 dark:blur-md"></span>

                            <span className="absolute inset-0 rounded-full border border-purple-300 bg-gradient-to-r from-purple-500 to-pink-500 dark:border-purple-400/40 dark:bg-[#1a0f2e]"></span>
                          </>
                        )}

                        <span className="relative z-10 capitalize">{tab}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <h3 className="mb-5 text-3xl font-semibold leading-tight lg:text-left">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Bring Your
                </span>{" "}
                <span className="text-black dark:text-white">
                  {active === "vision" ? "Vision" : "Mission"}
                </span>
              </h3>

              <p className="mx-auto max-w-2xl leading-8 text-gray-500 lg:mx-0 lg:max-w-lg">
                {active === "vision"
                  ? "Our vision is to become the world’s leading and most trusted partner for inclusive talent solutions, creating equal opportunities that cross borders, empower women, and support professionals with disabilities as they re-enter the workforce. We are dedicated to embedding CSR values and meaningful social impact into every engagement, helping individuals build long-term, fulfilling careers rather than just securing placements."
                  : "Our mission is to deliver world-class recruitment and HR solutions powered by technology, empathy, and ethical practices, enabling organizations to grow and individuals to thrive. We focus on integrating AI-driven hiring, transparent processes, and measurable social impact into every stage of the talent journey, ensuring fairness, trust, and long-term success."}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] rounded-[28px] border border-purple-500/20 bg-white/60 p-5 shadow-[0_0_80px_rgba(168,85,247,0.18)] backdrop-blur-xl dark:bg-[#120a1f]/80 sm:max-w-[380px] lg:p-6">
                <div className="mb-6 rounded-2xl border border-purple-400/10 bg-purple-400/5 p-5 text-center backdrop-blur-xl">
                  <p className="text-sm text-purple-500">Ready</p>

                  <div className="my-3 h-px bg-purple-400/40"></div>

                  <p className="text-sm text-gray-400">Future Workforce</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-black shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <SparklesIcon size={20} color="white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-purple-400/10 bg-purple-400/5 p-4 text-center backdrop-blur-xl">
                  <p className="mb-4 text-sm text-purple-500">
                    Building a Fair
                  </p>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={vision}
                      alt="Vision"
                      width={320}
                      height={180}
                      className="h-auto w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
