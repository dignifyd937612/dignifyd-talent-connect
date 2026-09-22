"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  BookOpen,
  Clock3,
  FileText,
  Globe2,
  Lightbulb,
  Users,
} from "lucide-react";
import FeaturedResource_img1 from "../../assets/images/resources/featured-resource.jpg";
import FeaturedResource_img2 from "../../assets/images/resources/case-studies.jpg";
import FeaturedResource_img3 from "../../assets/images/resources/insights.jpg";

const imageCards = [
  {
    image: FeaturedResource_img1,
    label: "Insights",
    description: "Industry perspectives",
    icon: FileText,
    className:
      "left-[4%] top-[4%] h-[250px] w-[250px] sm:left-[8%] sm:h-[290px] sm:w-[290px] lg:left-[7%] lg:top-[5%] lg:h-[300px] lg:w-[300px]",
  },
  {
    image: FeaturedResource_img2,
    label: "Guides",
    description: "Practical frameworks",
    icon: BookOpen,
    className:
      "right-[2%] top-[31%] h-[230px] w-[230px] sm:right-[5%] sm:h-[270px] sm:w-[270px] lg:right-[2%] lg:top-[29%] lg:h-[285px] lg:w-[285px]",
  },
  {
    image: FeaturedResource_img3,
    label: "Case Studies",
    description: "Real-world outcomes",
    icon: BarChart3,
    className:
      "left-[0%] bottom-[4%] h-[245px] w-[245px] sm:left-[4%] sm:h-[285px] sm:w-[285px] lg:left-[1%] lg:bottom-[2%] lg:h-[295px] lg:w-[295px]",
  },
];

export default function FeaturedResource() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-15 sm:px-8 sm:py-24 lg:px-11 lg:py-20">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:mb-14">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40 dark:text-white/35">
                Featured Resource
              </span>
            </div>

            <h2 className="max-w-[580px] text-[38px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111322] dark:text-white sm:text-[48px]">
              Start with what
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                matters most.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-[14px] leading-7 text-black/50 dark:text-white/45 lg:ml-auto lg:pb-1">
            A selection of practical thinking designed to help you navigate
            talent, delivery and organisational growth.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="resources-feature__visual relative mx-auto h-[570px] w-full max-w-[600px] sm:h-[620px]">
            <div
              className="pointer-events-none absolute left-[18%] top-[18%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.10] blur-[75px] dark:bg-violet-500/[0.14]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute bottom-[8%] right-[8%] h-[260px] w-[260px] rounded-full bg-fuchsia-500/[0.08] blur-[80px] dark:bg-fuchsia-500/[0.12]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute bottom-[5%] left-[2%] grid grid-cols-4 gap-2 opacity-40"
              aria-hidden="true"
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1 w-1 rounded-full bg-purple-500"
                />
              ))}
            </div>

            {imageCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className={`resources-feature__image-card absolute overflow-hidden rounded-full border-[5px] border-white shadow-[0_18px_50px_rgba(55,25,100,0.13)] dark:border-[#17171a] dark:shadow-[0_20px_55px_rgba(0,0,0,0.3)] ${card.className}`}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    sizes="(max-width: 768px) 250px, 300px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  <div
                    className={`absolute z-10 ${
                      index === 0
                        ? "right-[-5px] top-[12%]"
                        : index === 1
                          ? "bottom-[10%] left-[-8px]"
                          : "bottom-[12%] left-[8%]"
                    }`}
                  >
                    <div className="flex items-center gap-3 rounded-[13px] border border-white/60 bg-white/90 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111114]/90">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-purple-500/[0.08] text-purple-500 dark:bg-purple-500/[0.12] dark:text-purple-400">
                        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      </div>

                      <div className="pr-1">
                        <p className="text-[10px] font-semibold text-[#111322] dark:text-white">
                          {card.label}
                        </p>

                        <p className="mt-0.5 text-[8px] text-black/45 dark:text-white/40">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="absolute left-[0%] top-[34%] hidden -rotate-6 sm:block lg:left-[-2%]">
              <div className="flex flex-col items-center">
                <Lightbulb
                  size={20}
                  strokeWidth={1.3}
                  className="mb-1 rotate-12 text-black/45 dark:text-white/35"
                />

                <span className="font-serif text-[16px] italic leading-5 text-black/55 dark:text-white/45">
                  Ideas
                  <br />
                  today
                </span>
              </div>
            </div>

            <div className="absolute bottom-[1%] right-[1%] hidden rotate-3 sm:block lg:right-[0%]">
              <div className="flex flex-col items-center">
                <ArrowRight
                  size={22}
                  strokeWidth={1.2}
                  className="mb-1 -rotate-45 text-black/45 dark:text-white/35"
                />

                <span className="font-serif text-[16px] italic leading-5 text-black/55 dark:text-white/45">
                  Impact
                  <br />
                  tomorrow
                </span>
              </div>
            </div>

            <div
              className="pointer-events-none absolute right-[9%] top-[17%] hidden h-[125px] w-[75px] rounded-[50%] border-r border-dashed border-purple-500/40 sm:block"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute left-[45%] top-[15%] h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_0_7px_rgba(168,85,247,0.08)]"
              aria-hidden="true"
            />
          </div>

          <div className="resources-feature__content max-w-[580px]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-500 dark:text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                Featured Guide
              </span>

              <span className="h-4 w-px bg-black/10 dark:bg-white/10" />

              <span className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.14em] text-black/40 dark:text-white/35">
                <Clock3 size={13} strokeWidth={1.5} />8 min read
              </span>
            </div>

            <h3 className="mt-7 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#111322] dark:text-white sm:text-[43px]">
              Building a Scalable
              <span className="block">Global Talent Strategy</span>
            </h3>

            <div className="mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <p className="mt-6 max-w-[540px] text-[14px] leading-7 text-black/55 dark:text-white/50 sm:text-[15px]">
              A practical guide to building the right talent structure, delivery
              model and operating approach for organisations looking to scale
              with confidence.
            </p>

            <div className="mt-7 space-y-3.5">
              {[
                "Build a scalable talent model",
                "Align delivery with business priorities",
                "Create a sustainable operating structure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500/[0.08] text-purple-500 dark:bg-purple-500/[0.11] dark:text-purple-400">
                    <ArrowRight
                      size={13}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-[13px] text-black/60 dark:text-white/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="#"
                className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-[12px] font-semibold text-white shadow-[0_10px_25px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(139,92,246,0.28)]"
              >
                Read the full resource
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={14} strokeWidth={1.7} aria-hidden="true" />
                </span>
              </Link>

              <Link href="#" className="group flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/[0.08] text-purple-500 transition-all duration-300 group-hover:bg-purple-500/[0.13] dark:bg-purple-500/[0.10] dark:text-purple-400">
                  <ArrowDownToLine
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <span className="block text-[11px] font-semibold text-[#111322] dark:text-white">
                    Download PDF
                  </span>

                  <span className="mt-0.5 block text-[9px] text-black/40 dark:text-white/35">
                    12 MB
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/[0.08] pt-8 dark:border-white/[0.08] lg:mt-20 lg:pt-9">
          <div className="grid gap-7 sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center gap-4 sm:border-r sm:border-black/[0.08] sm:pr-8 dark:sm:border-white/[0.08]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-purple-500/[0.07] text-purple-500 dark:bg-purple-500/[0.1] dark:text-purple-400">
                <FileText size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <div>
                <p className="text-[25px] font-semibold leading-none tracking-[-0.04em] text-[#111322] dark:text-white">
                  100+
                </p>

                <p className="mt-1.5 text-[11px] text-black/45 dark:text-white/40">
                  Resources
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:px-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-purple-500/[0.07] text-purple-500 dark:bg-purple-500/[0.1] dark:text-purple-400">
                <Users size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <div>
                <p className="text-[25px] font-semibold leading-none tracking-[-0.04em] text-[#111322] dark:text-white">
                  5+
                </p>

                <p className="mt-1.5 text-[11px] text-black/45 dark:text-white/40">
                  Expert Perspectives
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:border-l sm:border-black/[0.08] sm:pl-8 dark:sm:border-white/[0.08]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-purple-500/[0.07] text-purple-500 dark:bg-purple-500/[0.1] dark:text-purple-400">
                <Globe2 size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>

              <div>
                <p className="text-[25px] font-semibold leading-none tracking-[-0.04em] text-[#111322] dark:text-white">
                  Global
                </p>

                <p className="mt-1.5 text-[11px] text-black/45 dark:text-white/40">
                  Industry Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
