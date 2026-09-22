import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import resources_hero from "../../assets/images/resources/resource_hero.png";
import Image from "next/image";

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-20 sm:px-8 sm:py-24 lg:px-11 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="max-w-[650px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-black/45 uppercase dark:text-white/40">
                Insights & Resources
              </span>
            </div>

            <h1 className="text-[44px] leading-[1.02] font-semibold tracking-[-0.05em] text-[#111322] sm:text-[56px] lg:text-[64px] dark:text-white">
              Knowledge that helps you
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                make better decisions.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-[16px] leading-7 text-black/55 sm:text-[17px] dark:text-white/50">
              Explore practical insights, industry perspectives, case studies,
              and resources designed to help organisations build better talent
              and delivery strategies.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="#resources"
                className="group inline-flex items-center gap-3 rounded-full bg-[#111322] px-5 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-600 dark:bg-white dark:text-black dark:hover:bg-purple-500 dark:hover:text-white"
              >
                Explore Resources
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-black/10">
                  <ArrowRight size={14} strokeWidth={1.7} aria-hidden="true" />
                </span>
              </Link>

              <button
                type="button"
                className="group flex items-center gap-3 text-left"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.10] bg-white text-black/70 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-purple-500/30 group-hover:text-purple-500 dark:border-white/[0.10] dark:bg-white/[0.04] dark:text-white/70 dark:group-hover:border-purple-400/30 dark:group-hover:text-purple-400">
                  <Play
                    size={14}
                    strokeWidth={1.7}
                    fill="currentColor"
                    className="ml-0.5"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <span className="block text-[12px] font-semibold text-black/75 dark:text-white/75">
                    Watch Our Story
                  </span>

                  <span className="mt-0.5 block text-[10px] text-black/40 dark:text-white/35">
                    2 min overview
                  </span>
                </span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-start gap-x-10 gap-y-6 border-t border-black/[0.07] pt-7 sm:gap-x-14 dark:border-white/[0.07]">
              <div>
                <p className="text-[25px] leading-none font-semibold tracking-[-0.04em] text-[#111322] dark:text-white">
                  100+
                </p>

                <p className="mt-2 text-[10px] font-medium tracking-[0.12em] text-black/40 uppercase dark:text-white/35">
                  Resources
                </p>
              </div>

              <div>
                <p className="text-[25px] leading-none font-semibold tracking-[-0.04em] text-[#111322] dark:text-white">
                  5+
                </p>

                <p className="mt-2 text-[10px] font-medium tracking-[0.12em] text-black/40 uppercase dark:text-white/35">
                  Expert Perspectives
                </p>
              </div>

              <div>
                <p className="text-[25px] leading-none font-semibold tracking-[-0.04em] text-[#111322] dark:text-white">
                  Global
                </p>

                <p className="mt-2 text-[10px] font-medium tracking-[0.12em] text-black/40 uppercase dark:text-white/35">
                  Industry Coverage
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.08] blur-[90px] dark:bg-purple-500/[0.12]"
              aria-hidden="true"
            />

            <div className="relative aspect-[1/0.92] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:bg-white/[0.025] dark:shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <Image
                src={resources_hero}
                alt="..."
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute top-8 -right-3 rounded-[15px] border border-black/[0.08] bg-white/90 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:-right-5 dark:border-white/[0.09] dark:bg-[#111114]/90 dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
              <p className="text-[8px] font-semibold tracking-[0.16em] text-purple-500 uppercase dark:text-purple-400">
                Featured
              </p>

              <p className="mt-1 text-[11px] font-semibold text-black/70 dark:text-white/70">
                Case Studies
              </p>
            </div>

            <div className="absolute -bottom-5 left-5 rounded-[15px] border border-black/[0.08] bg-white/90 px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:left-8 dark:border-white/[0.09] dark:bg-[#111114]/90 dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
              <p className="text-[8px] font-semibold tracking-[0.16em] text-purple-500 uppercase dark:text-purple-400">
                Explore
              </p>

              <p className="mt-1 text-[11px] font-semibold text-black/70 dark:text-white/70">
                Guides & Insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
