"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import vision from "../../assets/images/aboutUs/missionandvision/vision.png";

import { SparklesIcon } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function VisionMission() {
  const [active, setActive] = useState("vision");

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Vision, Mission, Impact"}
          title={"Talent Solutions Designed for Long-Term Business Success"}
        />

        <div className="relative mt-12 overflow-hidden rounded-[30px] border border-purple-500/20 bg-gradient-to-b from-[#140a24] to-[#0b0615] p-6 md:mt-16 md:rounded-[40px] md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.2),transparent_60%)]"></div>

          <div className="relative grid items-center gap-8 gap-10 md:grid-cols-2 md:gap-10">
            <div className="text-left">
              <div className="mb-6 flex flex-wrap gap-2 md:gap-3">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl">
                  {["vision", "mission"].map((tab) => {
                    const isActive = active === tab;

                    return (
                      <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        className={`relative rounded-full px-6 py-2 text-sm transition-all duration-300 ${isActive ? "text-white" : "text-gray-400 cursor-pointer"} `}
                      >
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-md"></span>
                        )}

                        {isActive && (
                          <span className="absolute inset-0 rounded-full border border-purple-400/40 bg-[#1a0f2e]"></span>
                        )}

                        <span className="relative z-10 capitalize">{tab}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <h3 className="mb-4 text-3xl font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Bring Your
                </span>{" "}
                <span className="text-white">
                  {active === "vision" ? "Vision" : "Mission"}
                </span>
              </h3>

              <p className="max-w-lg leading-relaxed text-gray-400">
                {active === "vision"
                  ? "Our vision is to become the world’s leading and most trusted partner for inclusive talent solutions—creating equal opportunities that cross borders, empower women, and support professionals with disabilities as they re-enter the workforce. We are dedicated to embedding CSR values and meaningful social impact into every engagement, helping individuals build long-term, fulfilling careers rather than just securing placements."
                  : "Our mission is to deliver world-class recruitment and HR solutions powered by technology, empathy, and ethical practices—enabling organizations to grow and individuals to thrive. We focus on integrating AI-driven hiring, transparent processes, and measurable social impact into every stage of the talent journey, ensuring fairness, trust, and long-term success."}
              </p>
            </div>

            <div className="mt-6 flex justify-center md:mt-0 md:justify-end">
              <div className="relative h-auto w-full max-w-[320px] rounded-[24px] border border-purple-500/20 bg-[#120a1f] p-4 shadow-[0_0_80px_rgba(168,85,247,0.25)] backdrop-blur-xl md:h-[420px] md:max-w-[380px] md:rounded-[30px] md:p-6">
                <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <p className="text-sm text-white">Ready</p>
                  <div className="my-3 h-[1px] bg-white/10"></div>
                  <p className="text-sm text-gray-400">Future Workforce</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-black shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <SparklesIcon size={20} color="white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <p className="mb-3 text-sm text-white">Building a Fair</p>

                  <div className="h-[100px] w-full overflow-hidden rounded-xl md:h-[120px]">
                    <Image
                      src={vision}
                      alt="team"
                      width={300}
                      height={120}
                      className=" object-fill w-auto h-auto"
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
