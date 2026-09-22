import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Users,
} from "lucide-react";
import caseStudies1 from "../../assets/images/resources/caseStudies/delivery_transformation.jpg";
import caseStudies2 from "../../assets/images/resources/caseStudies/talent_strategy.jpg";
import caseStudies3 from "../../assets/images/resources/caseStudies/talent_strategy.jpg";

const caseStudies = [
  {
    number: "01",
    category: "GCC Capability Build",
    title: "Building a Global Capability Centre across UAE & India",
    description:
      "A global enterprise establishing its first Global Capability Centre across UAE and India required aggressive talent delivery, niche cyber, cloud and data capabilities, and leadership hiring across both locations.",
    image: caseStudies1,
    icon: Building2,
    slug: "gcc-capability-build",
    results: [
      "First GCC establishment with a dual-location strategy",
      "Niche cyber, cloud and data engineering capabilities",
      "CXO-level leadership hiring through direct headhunting",
    ],
  },

  {
    number: "02",
    category: "Delivery Transformation",
    title: "From in-house recruiting to a scalable global talent function",
    description:
      "A mid-market US IT staffing firm scaling into managed services needed to move beyond siloed recruiting, fragmented tools and a local talent pool. A structured delivery model created a scalable global capability.",
    image: caseStudies2,
    icon: Users,
    slug: "delivery-transformation",
    results: [
      "Global pod structure with offshore delivery capability",
      "Integrated ATS + VMS workflow",
      "24/5 coverage supporting global reach and delivery",
    ],
  },

  {
    number: "03",
    category: "Executive & Leadership Search",
    title: "Building a leadership bench for a new GCC",
    description:
      "A global enterprise required a comprehensive leadership build to operationalise its GCC strategy, covering CXO appointments, functional heads and confidential leadership transitions.",
    image: caseStudies3,
    icon: BarChart3,
    slug: "executive-leadership-search",
    results: [
      "3 CXO appointments completed within targeted delivery windows",
      "12 functional heads across engineering, operations and finance",
      "Succession pipeline established for critical leadership roles",
    ],
  },
];

export default function ResourceCaseStudies() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-20 sm:px-8 sm:py-24 lg:px-11 lg:py-28">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-black/40 uppercase dark:text-white/35">
                Case Studies
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] leading-[1.04] font-semibold tracking-[-0.05em] text-[#111322] sm:text-[48px] dark:text-white">
              Ideas are useful.
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Outcomes matter more.
              </span>
            </h2>
          </div>

          <p className="max-w-[410px] text-[14px] leading-7 text-black/50 lg:pb-1 dark:text-white/45">
            See how organisations are applying better talent, delivery and
            operating models to solve real business challenges.
          </p>
        </div>

        <div className="mt-12 space-y-6 lg:mt-14">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const reversed = index % 2 !== 0;

            return (
              <article
                key={study.number}
                className="group grid overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.025)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] lg:grid-cols-2 dark:border-white/[0.08] dark:bg-[#101012]/75 dark:hover:border-purple-500/25 dark:hover:bg-white/[0.035]"
              >
                <div
                  className={`relative min-h-[330px] overflow-hidden sm:min-h-[390px] lg:min-h-[460px] ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                  <div className="absolute top-5 left-5 sm:top-7 sm:left-7">
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-white backdrop-blur-xl">
                      <span className="text-[9px] font-semibold tracking-[0.16em] uppercase">
                        Case Study {study.number}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-xl sm:bottom-7 sm:left-7">
                    <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-7 sm:p-9 lg:p-12 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />

                    <span className="text-[9px] font-semibold tracking-[0.18em] text-purple-500 uppercase dark:text-purple-400">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-[500px] text-[28px] leading-[1.1] font-semibold tracking-[-0.04em] text-[#111322] sm:text-[34px] dark:text-white">
                    {study.title}
                  </h3>

                  <div className="mt-6 h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-14" />

                  <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-black/50 dark:text-white/45">
                    {study.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-center gap-3">
                        <CheckCircle2
                          size={15}
                          strokeWidth={1.5}
                          className="shrink-0 text-purple-500 dark:text-purple-400"
                          aria-hidden="true"
                        />

                        <span className="text-[12px] text-black/55 dark:text-white/50">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9">
                    <Link
                      href={`/resources/${study.slug}`}
                      className="group/link inline-flex items-center gap-3 text-[11px] font-semibold text-[#111322] transition-colors duration-300 hover:text-purple-500 dark:text-white dark:hover:text-purple-400"
                    >
                      Read case study
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:border-purple-500/25 group-hover/link:text-purple-500 dark:border-white/[0.1] dark:group-hover/link:border-purple-400/25 dark:group-hover/link:text-purple-400">
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>
                </div>

                <span className="absolute bottom-0 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-60 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <BarChart3
            size={14}
            strokeWidth={1.4}
            className="text-purple-500 dark:text-purple-400"
            aria-hidden="true"
          />

          <p className="text-[10px] font-medium tracking-[0.15em] text-black/30 uppercase dark:text-white/25">
            Practical experience. Measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
