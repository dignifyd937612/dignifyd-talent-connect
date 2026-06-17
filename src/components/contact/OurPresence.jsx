import Image from "next/image";

import SectionHeader from "../common/SectionHeader";
import { Ourpresence } from "@/data/presence";

export default function OurPresence() {
  return (
    <section className="w-full bg-white py-10 dark:bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Our Expertise Spans Over 35+ Countries"}
          title={"Global Presence & Service Reach"}
          description={
            "Operating in  regions across the UK, Europe, USA, Canada, SEA, and APAC, we deliver localized hiring with global best practices."
          }
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {Ourpresence.map((place, index) => (
            <div
              key={place.name}
              className={`group grid overflow-hidden rounded-[24px] border border-purple-200/70 bg-gradient-to-br from-white via-[#fcfaff] to-[#f6efff] text-left shadow-[0_20px_60px_rgba(168,85,247,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)] lg:grid-cols-2 dark:border-purple-500/10 dark:from-[#140a24] dark:via-[#120a1f] dark:to-[#0b0615] ${index === Ourpresence.length - 1 ? "lg:col-span-2 lg:mx-auto lg:w-[70%]" : ""}`}
            >
              <div className="p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                  {place.name}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Step into a world of opportunity, culture, and innovation in
                  the beautiful {place.name}.
                </p>

                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                    <span>{place.location}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                    <span>{place.contact}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500"></span>
                    <span>Experience the {place.shortForm} Lifestyle</span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[280px] overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/40"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
