import "./EngagementFlow.scss";

const engagementSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand the business requirements, priorities, functions and scope.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="10.8" cy="10.8" r="6.5" />
        <path d="m16 16 4.2 4.2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Scoping",
    description:
      "Break the requirement into a specific talent plan, delivery, and operating flow.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Proposal",
    description:
      "Provide the solution, engagement terms, timelines, and measures of success.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M6 3.5h8l4 4V20.5H6z" />
        <path d="M14 3.5v4h4M9 11h6M9 14.5h6M9 18h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobilisation",
    description:
      "Work with the agreed team, processes, and reporting structure.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c0-3.2 2.3-5 5.5-5s5.5 1.8 5.5 5" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M15.2 14.5c2.9-.1 5.3 1.5 5.3 4.5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Steady-State",
    description:
      "Engage in ongoing delivery with regular reviews, performance tracking, and programme management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M4 19.5V5" />
        <path d="M4 19.5h16" />
        <path d="m6.5 15 4-4 3 2 5-6" />
        <path d="M15.5 7H19v3.5" />
      </svg>
    ),
  },
];

export default function EngagementFlow() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent text-[#111111] dark:text-white">
      <div className="mx-auto max-w-[1280px] py-16 sm:px-8 lg:px-11 lg:py-24">
        <div className="engagement-flow__header grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/40">
                Engagement Process
              </span>
            </div>

            <h2 className="max-w-[620px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-black dark:text-white sm:text-[46px] lg:text-[50px]">
              Engagement Flow
              <span className="block">
                From Requirement{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  to Delivery
                </span>
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>

          <div className="max-w-[560px] lg:pb-1">
            <p className="text-[17px] font-semibold leading-7 text-black/75 dark:text-white/75">
              A straight path from requirement to results.
            </p>

            <p className="mt-4 text-[14px] leading-7 text-black/50 dark:text-white/45">
              All engagements start by understanding the requirement, defining
              the scope, and a mutual agreement on the right delivery model
              before work begins.
            </p>
          </div>
        </div>

        <div className="engagement-flow__process relative mt-16 sm:mt-20 lg:mt-24">
          <div
            className="absolute left-[10%] right-[10%] top-[22px] z-0 hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {engagementSteps.map((step, index) => (
              <article
                key={step.number}
                className="engagement-flow__step group relative"
                style={{
                  "--delay": `${index * 100}ms`,
                }}
              >
                <div className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[11px] font-semibold text-white shadow-[0_0_0_5px_rgba(168,85,247,0.07),0_8px_25px_rgba(168,85,247,0.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_0_7px_rgba(168,85,247,0.08),0_12px_35px_rgba(168,85,247,0.28)]">
                  {step.number}
                </div>

                <div className="relative mt-5 flex min-h-[325px] flex-col overflow-hidden rounded-[18px] border border-black/[0.08] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/25 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:border-white/[0.09] dark:bg-[#101012] dark:shadow-[0_12px_35px_rgba(0,0,0,0.15)] dark:group-hover:border-purple-500/30 dark:group-hover:bg-white/[0.035] dark:group-hover:shadow-[0_24px_55px_rgba(0,0,0,0.35)] sm:p-7">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-purple-500/15 bg-gradient-to-br from-violet-500/[0.11] to-fuchsia-500/[0.08] text-violet-500 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:border-purple-500/30 dark:border-purple-400/15 dark:text-purple-400">
                    <div className="h-7 w-7">{step.icon}</div>
                  </div>

                  <div className="mt-7">
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35 dark:text-white/30">
                      Stage {step.number}
                    </span>

                    <h3 className="text-[19px] font-semibold tracking-[-0.025em] text-black dark:text-white sm:text-[20px]">
                      {step.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-[45px]" />

                    <p className="mt-5 text-[13px] leading-6 text-black/50 dark:text-white/45">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-80 transition-all duration-500 group-hover:w-[90px] group-hover:opacity-100" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
