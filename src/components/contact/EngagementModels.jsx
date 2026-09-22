import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Link2,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./EngagementModels.scss";
import engagement_models from "../../assets/images/contactUs/engagement-models.jpg";

const engagementModels = [
  {
    title: "Strategic Pilot",
    description:
      "A focused starting point for organizations to test new talent requirements or roles.",
    detail: (
      <>
        <strong>3–5 active mandates across two functions</strong>, supported by
        a structured pilot period and agreed service levels from day 1.
      </>
    ),
    suitedFor:
      "Organizations looking to measure their delivery capability scaling engagement.",
    icon: BarChart3,
  },
  {
    title: "Multi-Year Partnership",
    description:
      "A long-term recruitment partnership of shared mandates and functions, supported by dedicated programme ownership and regular business reviews.",
    detail: (
      <>
        Designed for organizations with <strong>on-going requirements</strong>{" "}
        across multiple functions or markets.
      </>
    ),
    suitedFor:
      "Organizations looking for continuous talent acquisition partners.",
    icon: Link2,
  },
  {
    title: "Capability Build Programme",
    description:
      "Create and manage dedicated teams around specific business needs, including location strategy, team development, build-operate-transfer models, and leadership hiring.",
    detail: (
      <>
        End-to-end support to establish or expand{" "}
        <strong>talent capability</strong> in new locations.
      </>
    ),
    suitedFor:
      "Organizations establishing or expanding talent capability in new locations.",
    icon: BriefcaseBusiness,
  },
];

export default function EngagementModels() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent text-[#111322] dark:text-white">
      <div className="mx-auto max-w-[1280px] py-16 sm:px-8 lg:px-11 lg:py-24">
        <div className="engagement-models__header">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/40">
                  Engagement Models
                </span>
              </div>

              <h2 className="max-w-[620px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#111322] dark:text-white sm:text-[46px] lg:text-[50px]">
                Engagement Models
                <span className="block">
                  How We Work With{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Organisations
                  </span>
                </span>
              </h2>

              <div className="mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            </div>

            <div className="relative hidden min-h-[330px] overflow-hidden rounded-[28px] border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:shadow-[0_25px_70px_rgba(0,0,0,0.3)] lg:block">
              <Image
                src={engagement_models}
                alt="Global engagement and collaboration"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c14]/20 to-[#0c0c14]/75" />

              <div className="absolute bottom-7 left-7 right-7 flex items-center gap-4 rounded-2xl border border-white/15 bg-[#130e2b]/75 px-5 py-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/35 to-fuchsia-500/30 text-white">
                  <UsersRound size={21} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[15px] font-semibold">Our Approach</p>

                  <p className="mt-1 text-[13px] leading-5 text-white/70">
                    The right talent. The right model.
                    <br />
                    The right impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[850px] lg:col-span-2">
              <p className="text-[17px] font-semibold leading-7 text-black/75 dark:text-white/75">
                Engagement models built around the{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  requirement.
                </span>
              </p>

              <p className="mt-4 text-[14px] leading-7 text-black/50 dark:text-white/45">
                Different talent requirements need different operating models.
                <span className="font-medium text-black/70 dark:text-white/65">
                  {" "}
                  Dignifyd Talent Connect
                </span>{" "}
                provides structured engagements from focused recruitment
                programmes to long-term talent partnerships and
                capability-building initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {engagementModels.map((model, index) => {
            const ModelIcon = model.icon;

            return (
              <article
                key={model.title}
                className="engagement-models__card group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[22px] border border-black/[0.08] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-purple-500/25 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] dark:border-white/[0.09] dark:bg-[#101012] dark:hover:border-purple-500/30 dark:hover:bg-[#111114] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.3)]"
                style={{
                  "--delay": `${index * 120}ms`,
                }}
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-purple-500/15 bg-purple-500/[0.07] text-purple-500 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-purple-500/25 group-hover:bg-purple-500/[0.11] dark:border-purple-400/15 dark:bg-purple-500/[0.08] dark:text-purple-400">
                      <ModelIcon
                        size={20}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-500/80 dark:text-purple-400/80">
                      Model 0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#111322] dark:text-white">
                      {model.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-9 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-12" />
                  </div>

                  <p className="mt-5 max-w-[390px] text-[14px] leading-[1.75] text-black/55 dark:text-white/50">
                    {model.description}
                  </p>

                  <div className="mt-6 rounded-[15px] border border-purple-500/[0.10] bg-purple-500/[0.045] px-4 py-4 transition-all duration-300 group-hover:border-purple-500/[0.16] group-hover:bg-purple-500/[0.065] dark:border-purple-500/[0.12] dark:bg-purple-500/[0.06] dark:group-hover:bg-purple-500/[0.08]">
                    <div className="flex items-start gap-3">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

                      <p className="text-[12.5px] leading-[1.7] text-black/65 dark:text-white/60">
                        {model.detail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black/[0.06] bg-black/[0.015] px-6 py-5 dark:border-white/[0.06] dark:bg-white/[0.025] sm:px-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/15 bg-purple-500/[0.05] text-purple-500 dark:border-purple-400/15 dark:bg-purple-500/[0.06] dark:text-purple-400">
                      <Sparkles
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-purple-500 dark:text-purple-400">
                        Best suited for
                      </p>

                      <p className="mt-1 text-[12px] leading-[1.55] text-black/55 dark:text-white/50">
                        {model.suitedFor}
                      </p>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-black/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-purple-500/25 group-hover:text-purple-500 dark:border-white/[0.08] dark:text-white/35 dark:group-hover:text-purple-400">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <span className="absolute bottom-0 left-1/2 h-[2px] w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-70 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
