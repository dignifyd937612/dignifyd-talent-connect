"use client";

import Image from "next/image";
import { ArrowDown, CalendarDays, Clock3, UserRound } from "lucide-react";

import blogImage from "../../../assets/images/resources/dummy_blog.jpg";

export default function BlogDetailHero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-500 dark:text-purple-400">
            Insights
          </span>
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <h1 className="max-w-[820px] text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#111322] sm:text-[56px] lg:text-[68px] dark:text-white">
              The future of global talent delivery is becoming{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                more strategic.
              </span>
            </h1>
          </div>

          <div className="max-w-[420px] lg:ml-auto lg:pb-2">
            <p className="text-[15px] leading-7 text-black/50 dark:text-white/45">
              A practical perspective on how organisations are rethinking
              talent, delivery and operating models to support sustainable
              growth.
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-black/[0.07] py-5 dark:border-white/[0.07]">
          <div className="flex items-center gap-2">
            <UserRound
              size={14}
              strokeWidth={1.4}
              className="text-purple-500 dark:text-purple-400"
            />

            <span className="text-[11px] font-medium text-black/50 dark:text-white/45">
              Dignify Talent Connect
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays
              size={14}
              strokeWidth={1.4}
              className="text-purple-500 dark:text-purple-400"
            />

            <span className="text-[11px] text-black/45 dark:text-white/40">
              12 Aug 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3
              size={14}
              strokeWidth={1.4}
              className="text-purple-500 dark:text-purple-400"
            />

            <span className="text-[11px] text-black/45 dark:text-white/40">
              6 min read
            </span>
          </div>
        </div>

        <div className="group relative mt-10 overflow-hidden rounded-[24px] border border-black/[0.08] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={blogImage}
              alt="The future of global talent delivery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-white backdrop-blur-xl sm:bottom-7 sm:left-7">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
              Featured insight
            </span>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 text-black/25 dark:text-white/25">
          <span className="text-[9px] font-medium uppercase tracking-[0.18em]">
            Read the insight
          </span>

          <ArrowDown size={13} strokeWidth={1.3} />
        </div>
      </div>
    </section>
  );
}
