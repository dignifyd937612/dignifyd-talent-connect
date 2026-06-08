"use client";

import Image from "next/image";

import ticketGif from "../../assets/images/contactUs/global-presence.gif";
import SectionHeader from "../common/SectionHeader";
import { Ourpresence } from "@/data/presence";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurPresence() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlace = Ourpresence[currentIndex];

  const handlePlace = (action) => {
    if (action === "next" && currentIndex < Ourpresence.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (action === "prev" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Our Expertise Spans Over 35+ Countries"}
          title={"Global Presence & Service Reach"}
          description={
            "Operating in  regions across the UK, Europe, USA, Canada, SEA, and APAC, we deliver localized hiring with global best practices."
          }
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {Ourpresence.map((place) => (
            <div
              key={place.name}
              className="grid overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0615] lg:grid-cols-2"
            >
              <div className="p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {place.name}
                </h3>

                <p className="mb-6 text-sm text-gray-400">
                  Step into a world of opportunity, culture, and innovation in
                  the beautiful {place.name}.
                </p>

                <div className="space-y-4 text-sm text-gray-400">
                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500" />
                    <span>{place.location}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500" />
                    <span>{place.contact}</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 h-4 w-[2px] bg-purple-500" />
                    <span>Experience the {place.shortForm} Lifestyle</span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[280px]">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
