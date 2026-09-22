"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Network,
  Search,
  Users,
} from "lucide-react";

const approachSteps = [
  {
    number: "01",
    icon: Globe2,
    title: "Map the market",
    description:
      "Identify the right talent pools across UAE and India and understand where specialist capability exists.",
  },
  {
    number: "02",
    icon: Search,
    title: "Target specialist talent",
    description:
      "Build focused searches around cyber, cloud and data engineering requirements.",
  },
  {
    number: "03",
    icon: Users,
    title: "Build leadership",
    description:
      "Run targeted executive and functional searches to establish the leadership layer.",
  },
  {
    number: "04",
    icon: Network,
    title: "Connect the model",
    description:
      "Bring people, locations and delivery processes together into one operating structure.",
  },
];

export default function CaseStudyApproach() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-20 sm:py-24  lg:py-25">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-500 dark:text-purple-400">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111322] sm:text-[50px] dark:text-white">
              One strategy.
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Multiple moves.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[14px] leading-7 text-black/50 lg:ml-auto lg:pb-1 dark:text-white/45">
            Rather than treating each requirement independently, the programme
            connected market intelligence, specialist search, leadership hiring
            and delivery design into one coordinated approach.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#f7f7f9] dark:border-white/[0.08] dark:bg-[#101014]">
          <div className="flex flex-col gap-3 border-b border-black/[0.07] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:border-white/[0.07]">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/30 dark:text-white/25">
                Delivery Architecture
              </p>

              <p className="mt-1 text-[12px] text-black/45 dark:text-white/40">
                From market intelligence to operating capability
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-black/35 dark:text-white/30">
                GCC Build
              </span>
            </div>
          </div>

          <div className="relative px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="absolute left-[10%] right-[10%] top-[88px] hidden h-px bg-gradient-to-r from-purple-500/10 via-purple-500/35 to-fuchsia-500/20 lg:block" />

            <div className="grid gap-5 lg:grid-cols-4 lg:gap-0">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex gap-4 lg:block lg:px-5 first:lg:pl-0 last:lg:pr-0"
                  >
                    {index !== approachSteps.length - 1 && (
                      <div className="absolute bottom-[-20px] left-[19px] top-[58px] w-px bg-gradient-to-b from-purple-500/25 to-transparent lg:hidden" />
                    )}

                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-500/15 bg-white text-purple-500 shadow-[0_8px_25px_rgba(168,85,247,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-500/30 group-hover:shadow-[0_12px_30px_rgba(168,85,247,0.16)] dark:border-purple-400/15 dark:bg-[#17171c] dark:text-purple-400">
                      <Icon size={18} strokeWidth={1.4} aria-hidden="true" />
                    </div>

                    <div className="pt-0 lg:pt-7">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold tracking-[0.15em] text-purple-500 dark:text-purple-400">
                          {step.number}
                        </span>

                        <span className="h-px w-4 bg-black/10 dark:bg-white/10" />
                      </div>

                      <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.02em] text-[#111322] dark:text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[220px] text-[11px] leading-5 text-black/45 dark:text-white/40">
                        {step.description}
                      </p>
                    </div>

                    {index !== approachSteps.length - 1 && (
                      <div className="absolute right-[-7px] top-[80px] z-20 hidden h-5 w-5 items-center justify-center rounded-full border border-black/[0.08] bg-[#f7f7f9] text-black/25 lg:flex dark:border-white/[0.08] dark:bg-[#101014] dark:text-white/25">
                        <ArrowRight size={11} strokeWidth={1.4} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-black/[0.07] bg-white/50 px-6 py-6 sm:px-8 dark:border-white/[0.07] dark:bg-white/[0.015]">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30 dark:text-white/25">
                  Starting point
                </p>

                <p className="mt-1 text-[12px] font-medium text-black/55 dark:text-white/50">
                  Multiple talent and capability requirements
                </p>
              </div>

              <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-purple-500/[0.07] text-purple-500 sm:flex dark:bg-purple-400/[0.07] dark:text-purple-400">
                <ArrowRight size={14} strokeWidth={1.4} />
              </div>

              <div className="sm:text-right">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-500 dark:text-purple-400">
                  Designed outcome
                </p>

                <p className="mt-1 text-[12px] font-medium text-[#111322] dark:text-white">
                  One connected GCC capability
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-[18px] border border-purple-500/10 bg-gradient-to-r from-purple-500/[0.055] to-fuchsia-500/[0.025] px-5 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-purple-500/10 dark:from-purple-500/[0.07] dark:to-fuchsia-500/[0.03]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-purple-500/[0.08] text-purple-500 dark:bg-purple-400/[0.08] dark:text-purple-400">
              <BriefcaseBusiness
                size={16}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </div>

            <p className="text-[12px] leading-5 text-black/55 dark:text-white/50">
              The delivery model was designed around the capability the GCC
              needed, not simply the roles it needed to fill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
