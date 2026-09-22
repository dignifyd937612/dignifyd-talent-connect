import { Building2, Globe2, ShieldCheck, Users, Zap } from "lucide-react";

const challenges = [
  {
    icon: Globe2,
    title: "Dual-location strategy",
    description:
      "Establishing a GCC across UAE and India with the right capability split between both locations.",
  },
  {
    icon: ShieldCheck,
    title: "Specialist capabilities",
    description:
      "Building niche cyber, cloud and data engineering capabilities to support the operating model.",
  },
  {
    icon: Users,
    title: "Leadership hiring",
    description:
      "Identifying and appointing senior leadership and functional heads through targeted direct search.",
  },
  {
    icon: Zap,
    title: "Aggressive delivery",
    description:
      "Meeting ambitious delivery requirements while establishing a sustainable talent pipeline.",
  },
];

export default function CaseStudySituation() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-15 sm:px-8 sm:py-24  lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-purple-500 uppercase dark:text-purple-400">
                Client Situation
              </span>
            </div>

            <h2 className="max-w-[520px] text-[36px] leading-[1.05] font-semibold tracking-[-0.045em] text-[#111322] sm:text-[46px] dark:text-white">
              A complex brief
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                with ambitious goals.
              </span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[15px] leading-7 text-black/55 lg:ml-auto dark:text-white/50">
            A global enterprise was establishing its first Global Capability
            Centre across UAE and India. The requirement went beyond hiring,
            with specialist capabilities, senior leadership and a scalable
            delivery structure all needing to come together.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/65 shadow-[0_15px_50px_rgba(0,0,0,0.03)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.025]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-black/[0.07] p-7 sm:p-9 lg:border-r lg:border-b-0 lg:p-11 dark:border-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-purple-500/15 bg-purple-500/[0.06] text-purple-500 dark:border-purple-400/15 dark:bg-purple-400/[0.06] dark:text-purple-400">
                  <Building2 size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-[#111322] dark:text-white">
                    Client Situation
                  </p>

                  <p className="mt-0.5 text-[9px] tracking-[0.14em] text-black/35 uppercase dark:text-white/30">
                    Global Enterprise
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-[470px] text-[15px] leading-7 text-black/60 dark:text-white/50">
                The organisation needed to establish a new GCC capability across
                two geographies while simultaneously building the specialist and
                leadership talent required to make the model operational.
              </p>

              <div className="mt-8 rounded-[16px] border border-purple-500/10 bg-gradient-to-br from-purple-500/[0.07] to-fuchsia-500/[0.035] p-5 dark:border-purple-500/10 dark:from-purple-500/[0.09] dark:to-fuchsia-500/[0.04]">
                <p className="text-[9px] font-semibold tracking-[0.16em] text-purple-500 uppercase dark:text-purple-400">
                  Core requirement
                </p>

                <p className="mt-2 text-[14px] leading-6 font-medium text-[#111322] dark:text-white">
                  Build the right capability, leadership and delivery model
                  across UAE and India.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-11">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-[#111322] dark:text-white">
                    Key Challenges
                  </p>

                  <p className="mt-1 text-[10px] text-black/35 dark:text-white/30">
                    What needed to be solved
                  </p>
                </div>

                <span className="text-[10px] font-semibold tracking-[0.15em] text-black/25 uppercase dark:text-white/20">
                  04 priorities
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {challenges.map((challenge, index) => {
                  const Icon = challenge.icon;

                  return (
                    <div
                      key={challenge.title}
                      className="group rounded-[16px] border border-black/[0.07] bg-black/[0.015] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/20 hover:bg-purple-500/[0.025] dark:border-white/[0.07] dark:bg-white/[0.015] dark:hover:border-purple-500/20 dark:hover:bg-purple-500/[0.025]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-purple-500/10 bg-purple-500/[0.06] text-purple-500 dark:border-purple-400/10 dark:bg-purple-400/[0.06] dark:text-purple-400">
                          <Icon
                            size={16}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>

                        <span className="text-[9px] font-semibold text-black/20 dark:text-white/20">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[14px] font-semibold tracking-[-0.015em] text-[#111322] dark:text-white">
                        {challenge.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-5 text-black/45 dark:text-white/40">
                        {challenge.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-60" />
        </div>
      </div>
    </section>
  );
}
