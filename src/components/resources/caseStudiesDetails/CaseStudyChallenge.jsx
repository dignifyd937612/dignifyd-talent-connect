"use client";

import {
  ArrowDown,
  Building2,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

const challenges = [
  {
    number: "01",
    icon: Building2,
    title: "Build across two locations",
    description:
      "The GCC needed to establish delivery capability across UAE and India without treating either location as an isolated hiring market.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Access specialist capability",
    description:
      "Cyber, cloud and data engineering requirements meant the talent strategy needed to reach highly specialised and difficult-to-source profiles.",
  },
  {
    number: "03",
    icon: Users,
    title: "Establish leadership alongside scale",
    description:
      "The programme required CXO-level appointments and functional leadership while simultaneously building the wider capability underneath them.",
  },
];

export default function CaseStudyChallenge() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-20 sm:py-24 lg:px-11 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-500 dark:text-purple-400">
                The Challenge
              </span>
            </div>

            <h2 className="max-w-[620px] text-[38px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111322] sm:text-[50px] dark:text-white">
              Building the GCC was
              <span className="block text-black/30 dark:text-white/30">
                bigger than hiring.
              </span>
            </h2>
          </div>

          <p className="max-w-[510px] text-[14px] leading-7 text-black/50 lg:ml-auto dark:text-white/45">
            The organisation wasn't starting with an established delivery
            engine. It needed talent, leadership and capability to come together
            as one operating model across two geographies.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:mt-16">
          <div className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#f7f7f9] p-7 sm:p-9 dark:border-white/[0.08] dark:bg-[#101014]">
            <div className="relative">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35 dark:text-white/30">
                Starting position
              </p>

              <div className="mt-8 ">
                <h3 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#111322] dark:text-white">
                  A capability centre had to be created while the talent
                  strategy was still taking shape.
                </h3>

                <p className="mt-6 text-[13px] leading-6 text-black/50 dark:text-white/45">
                  This created a dependency between market access, specialist
                  hiring, leadership appointments and the operating structure
                  needed to support them.
                </p>
              </div>

              <div className="mt-12 border-t border-black/[0.07] pt-6 dark:border-white/[0.07]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30 dark:text-white/25">
                  Core dependencies
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Talent", "Capability", "Leadership", "Delivery"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[10px] font-medium text-black/50 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-white/45"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-black/[0.08] bg-white/60 p-7 backdrop-blur-xl sm:p-9 dark:border-white/[0.08] dark:bg-white/[0.025]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-500 dark:text-purple-400">
                  What made it complex
                </p>

                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.035em] text-[#111322] dark:text-white">
                  Three challenges had to move together.
                </h3>
              </div>

              <span className="hidden text-[10px] font-medium text-black/25 sm:block dark:text-white/20">
                GCC BUILD
              </span>
            </div>

            <div className="mt-8 divide-y divide-black/[0.07] dark:divide-white/[0.07]">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;

                return (
                  <div
                    key={challenge.number}
                    className="group grid gap-5 py-6 first:pt-0 last:pb-0 sm:grid-cols-[52px_1fr_auto] sm:items-start"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-black/[0.07] bg-black/[0.015] text-[10px] font-semibold text-black/35 transition-all duration-300 group-hover:border-purple-500/20 group-hover:bg-purple-500/[0.06] group-hover:text-purple-500 dark:border-white/[0.08] dark:bg-white/[0.015] dark:text-white/30 dark:group-hover:border-purple-400/20 dark:group-hover:bg-purple-400/[0.06] dark:group-hover:text-purple-400">
                      {challenge.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className="text-purple-500 dark:text-purple-400"
                          aria-hidden="true"
                        />

                        <h4 className="text-[15px] font-semibold tracking-[-0.02em] text-[#111322] dark:text-white">
                          {challenge.title}
                        </h4>
                      </div>

                      <p className="mt-3 max-w-[560px] text-[12px] leading-6 text-black/50 dark:text-white/45">
                        {challenge.description}
                      </p>
                    </div>

                    <ArrowDown
                      size={15}
                      strokeWidth={1.3}
                      className="hidden text-black/20 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-purple-500 sm:block dark:text-white/20 dark:group-hover:text-purple-400"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div className="rounded-[18px] border border-black/[0.07] bg-black/[0.015] px-5 py-4 dark:border-white/[0.07] dark:bg-white/[0.015]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30 dark:text-white/25">
              Geography
            </p>

            <p className="mt-2 text-[13px] font-medium text-[#111322] dark:text-white">
              UAE + India
            </p>
          </div>

          <div className="rounded-[18px] border border-black/[0.07] bg-black/[0.015] px-5 py-4 dark:border-white/[0.07] dark:bg-white/[0.015]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30 dark:text-white/25">
              Capability
            </p>

            <p className="mt-2 text-[13px] font-medium text-[#111322] dark:text-white">
              Cyber · Cloud · Data
            </p>
          </div>

          <div className="rounded-[18px] border border-purple-500/10 bg-gradient-to-r from-purple-500/[0.06] to-fuchsia-500/[0.03] px-5 py-4 dark:border-purple-500/10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-purple-500 dark:text-purple-400">
              Requirement
            </p>

            <p className="mt-2 text-[13px] font-medium text-[#111322] dark:text-white">
              Build capability from day one
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
