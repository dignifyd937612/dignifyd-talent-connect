"use client";

import { Globe3D } from "@/components/ui/3d-globe";
import ind from "../../assets/images/home/globalPresence/india.webp";
import uk from "../../assets/images/home/globalPresence/united-kingdom.jpg";
import usa from "@/assets/images/home/globalPresence/USA.png";
import canada from "@/assets/images/home/globalPresence/canada.png";
import uae from "@/assets/images/home/globalPresence/UAE.jpg";
const sampleMarkers = [
  {
    lat: 51.5074,
    lng: -0.1278,
    src: uk.src,
    label: "United Kingdom",
  },
  {
    lat: 38.9072,
    lng: -77.0369,
    src: usa.src,
    label: "USA",
  },
  {
    lat: 43.6532,
    lng: -79.3832,
    src: canada.src,
    label: "Canada",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: uae.src,
    label: "UAE",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: ind.src,
    label: "India",
  },
];

export default function GlobeSection() {
  return (
    <section className="relative mt-20 overflow-hidden rounded-[32px] bg-white dark:bg-[#09090B]">
      <div className="absolute top-1/2 right-[-120px] h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.18),rgba(99,102,241,.12),transparent_72%)] blur-[90px] md:h-[650px] md:w-[650px] lg:right-[-180px] lg:h-[900px] lg:w-[900px]" />

      <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.08),transparent_70%)] blur-[70px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative markert pe click kru to  z-10 flex min-h-[950px] flex-col items-center lg:min-h-[720px] lg:flex-row">
        <div className="order-2 w-full px-6 pb-10 text-center md:px-10 lg:order-1 lg:w-1/2 lg:px-16 lg:pb-0 lg:text-left">
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/15 to-pink-500/15 px-4 py-2 text-xs font-semibold text-purple-600 backdrop-blur-sm md:text-sm dark:text-purple-300">
            Global Talent Network
          </span>

          <h2 className="mt-6 text-4xl leading-[1.05] font-black tracking-[-0.04em] text-neutral-900 md:text-5xl lg:mt-8 lg:text-7xl dark:text-white">
            Global Talent
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Without Borders.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg lg:mx-0 lg:mt-8 lg:leading-9 dark:text-neutral-400">
            Connect businesses with exceptional professionals across continents.
            Hire faster, collaborate globally, and build distributed teams
            through one intelligent recruitment platform.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-12 lg:justify-start">
            <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition duration-300 hover:scale-105 sm:w-auto">
              Get Started
            </button>

            <button className="w-full rounded-full border border-violet-500/25 bg-white/70 px-8 py-3 font-semibold text-violet-700 backdrop-blur transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white sm:w-auto dark:bg-white/5 dark:text-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2 lg:justify-end">
          <div className="relative h-[340px] w-[340px] md:h-[500px] md:w-[500px] lg:absolute lg:top-1/2 lg:right-[-40px] lg:h-[760px] lg:w-[760px] lg:-translate-y-[48%]">
            <Globe3D
              className="h-full w-full"
              markers={sampleMarkers}
              config={{
                atmosphereColor: "#3B82F6",
                atmosphereIntensity: 18,
                bumpScale: 5,
                autoRotateSpeed: 0.35,
              }}
              onMarkerClick={(marker) => console.log(marker.label)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
