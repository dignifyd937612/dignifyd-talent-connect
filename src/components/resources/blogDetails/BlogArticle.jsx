"use client";

import { ArrowUpRight, List } from "lucide-react";

const tableOfContents = [
  {
    id: "changing-talent-landscape",
    number: "01",
    title: "The changing talent landscape",
  },
  {
    id: "why-delivery-models-matter",
    number: "02",
    title: "Why delivery models matter",
  },
  {
    id: "building-flexibility",
    number: "03",
    title: "Building flexibility into talent",
  },
  {
    id: "what-organisations-need",
    number: "04",
    title: "What organisations need next",
  },
];

export default function BlogArticle() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-[1180px]  py-16 sm:px-8 sm:py-20  lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[250px_minmax(0,720px)] lg:items-start lg:gap-20">
          <aside className="hidden self-start lg:sticky lg:top-28 lg:block">
            <div>
              <div className="flex items-center gap-2.5">
                <List
                  size={15}
                  strokeWidth={1.5}
                  className="text-purple-500 dark:text-purple-400"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase dark:text-white/35">
                  In this article
                </span>
              </div>

              <div className="mt-5 border-l border-black/[0.08] dark:border-white/[0.08]">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`group flex gap-3 border-l-2 py-3 pl-4 transition-all duration-300 ${index === 0 ? "border-purple-500 text-black dark:text-white" : "border-transparent text-black/40 hover:border-purple-500/40 hover:text-black/70 dark:text-white/35 dark:hover:text-white/70"}`}
                  >
                    <span className="pt-0.5 text-[9px] font-semibold tracking-[0.12em] text-purple-500/70 dark:text-purple-400/70">
                      {item.number}
                    </span>

                    <span className="text-[12px] leading-5">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <article className="min-w-0 scroll-smooth">
            <p className="max-w-[680px] text-[17px] leading-8 text-black/65 dark:text-white/60">
              The way organisations think about talent is changing. As
              businesses expand across markets and operating models become more
              distributed, access to the right people is no longer enough.
              Organisations also need the right structure to attract, deploy and
              retain that talent effectively.
            </p>

            <p className="mt-7 max-w-[680px] text-[15px] leading-8 text-black/50 dark:text-white/45">
              This shift is creating a stronger connection between talent
              strategy and business strategy. Instead of treating recruitment as
              a standalone function, organisations are increasingly considering
              how people, delivery and operating models work together.
            </p>

            <section
              id="changing-talent-landscape"
              className="scroll-mt-28 pt-14"
            >
              <span className="text-[9px] font-semibold tracking-[0.2em] text-purple-500 uppercase dark:text-purple-400">
                01 · The shift
              </span>

              <h2 className="mt-4 text-[28px] leading-[1.15] font-semibold tracking-[-0.035em] text-[#111322] sm:text-[34px] dark:text-white">
                The changing talent landscape
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/55 dark:text-white/45">
                <p>
                  Global organisations are operating in increasingly complex
                  talent markets. Specialist skills can be difficult to access,
                  competition for experienced professionals continues to grow,
                  and traditional hiring models do not always provide the
                  flexibility businesses require.
                </p>

                <p>
                  This means organisations need to think beyond individual hires
                  and consider the broader capability they are trying to build.
                </p>
              </div>
            </section>

            <div className="my-12 rounded-[20px] border border-purple-500/15 bg-gradient-to-br from-purple-500/[0.07] to-fuchsia-500/[0.035] p-6 sm:p-8 dark:border-purple-400/15 dark:from-purple-500/[0.10] dark:to-fuchsia-500/[0.045]">
              <div className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

                <p className="text-[18px] leading-8 font-medium tracking-[-0.015em] text-black/75 dark:text-white/70">
                  The strongest talent strategies connect people decisions
                  directly to the operating model the organisation is trying to
                  build.
                </p>
              </div>
            </div>

            <section
              id="why-delivery-models-matter"
              className="scroll-mt-28 pt-6"
            >
              <span className="text-[9px] font-semibold tracking-[0.2em] text-purple-500 uppercase dark:text-purple-400">
                02 · Delivery
              </span>

              <h2 className="mt-4 text-[28px] leading-[1.15] font-semibold tracking-[-0.035em] text-[#111322] sm:text-[34px] dark:text-white">
                Why delivery models matter
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/55 dark:text-white/45">
                <p>
                  A strong talent strategy needs an equally strong delivery
                  model. Organisations need clarity around ownership, processes,
                  communication and performance expectations.
                </p>

                <p>
                  When these elements are connected, teams can respond faster to
                  changing requirements while maintaining greater consistency
                  across locations and functions.
                </p>
              </div>
            </section>

            <section id="building-flexibility" className="scroll-mt-28 pt-14">
              <span className="text-[9px] font-semibold tracking-[0.2em] text-purple-500 uppercase dark:text-purple-400">
                03 · Flexibility
              </span>

              <h2 className="mt-4 text-[28px] leading-[1.15] font-semibold tracking-[-0.035em] text-[#111322] sm:text-[34px] dark:text-white">
                Building flexibility into talent
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/55 dark:text-white/45">
                <p>
                  Flexibility does not simply mean having access to more
                  candidates. It means creating an operating structure that
                  allows organisations to adjust capacity as priorities change.
                </p>

                <p>
                  This can involve different delivery locations, specialist
                  talent pools, managed services or a combination of internal
                  and external capabilities.
                </p>
              </div>
            </section>

            <section
              id="what-organisations-need"
              className="scroll-mt-28 pt-14"
            >
              <span className="text-[9px] font-semibold tracking-[0.2em] text-purple-500 uppercase dark:text-purple-400">
                04 · Looking ahead
              </span>

              <h2 className="mt-4 text-[28px] leading-[1.15] font-semibold tracking-[-0.035em] text-[#111322] sm:text-[34px] dark:text-white">
                What organisations need next
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/55 dark:text-white/45">
                <p>
                  The organisations best positioned for the future will be those
                  that treat talent as part of their wider operating strategy.
                </p>

                <p>
                  That means understanding the capabilities required, defining
                  how those capabilities should be delivered and creating the
                  flexibility to evolve as the business changes.
                </p>
              </div>
            </section>

            <div className="mt-14 flex items-center gap-3 border-t border-black/[0.07] pt-7 dark:border-white/[0.07]">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[9px] font-semibold tracking-[0.18em] text-black/30 uppercase dark:text-white/25">
                End of article
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.4}
                className="text-purple-500 dark:text-purple-400"
                aria-hidden="true"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
