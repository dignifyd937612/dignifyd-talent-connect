"use client";
import { useEffect, useState } from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import ind from "../../assets/images/home/globalPresence/india.webp";
import uk from "../../assets/images/home/globalPresence/united-kingdom.jpg";
import usa from "@/assets/images/home/globalPresence/USA.png";
import canada from "@/assets/images/home/globalPresence/canada.png";
import uae from "@/assets/images/home/globalPresence/UAE.jpg";
import eu from "@/assets/images/home/globalPresence/european-union.jpg";
import singapore from "@/assets/images/home/globalPresence/singapore.png";
import philippines from "@/assets/images/home/globalPresence/philippines.webp";
import malaysia from "@/assets/images/home/globalPresence/malaysia.png";
import australia from "@/assets/images/home/globalPresence/australia.webp";

export function GlobalPresence() {
  return (
    <div className="py-10 mt-20 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Where we{" "}
          <span className="text-neutral-400">
            {"Work".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Six offices and 35+ countries served with the help of our experts.
          24/5 timezone coverage.
        </p>
      </div>
      <WorldMap
        markers={[
          {
            lat: 52.8,
            lng: -2.5,
            src: uk.src,
            label: "United Kingdom",
          },
          {
            lat: 23.8,
            lng: -111.5,
            src: usa.src,
            label: "USA",
          },
          {
            lat: 65.8,
            lng: -120.5,
            src: canada.src,
            label: "Canada",
          },
          {
            lat: 10.2,
            lng: 58.5,
            src: uae.src,
            label: "UAE",
          },
          {
            lat: 11.8,
            lng: 83.5,
            src: ind.src,
            label: "India",
          },
          {
            lat: 43.5,
            lng: 18.5,
            src: eu.src,
            label: "European Union",
          },
          {
            lat: 2.8,
            lng: 101.8,
            src: singapore.src,
            label: "Singapore",
          },
          {
            lat: 16.8,
            lng: 123.5,
            src: philippines.src,
            label: "Philippines",
          },
          {
            lat: 5.5,
            lng: 106.5,
            src: malaysia.src,
            label: "Malaysia",
          },
          {
            lat: -46,
            lng: 148,
            src: australia.src,
            label: "Australia",
          },
        ]}
        dots={[
          {
            start: { lat: 65.8, lng: -120.5 },
            end: { lat: 23.8, lng: -111.5 },
          },

          {
            start: { lat: 23.8, lng: -111.5 },
            end: { lat: 52.8, lng: -2.5 },
          },

          {
            start: { lat: 52.8, lng: -2.5 },
            end: { lat: 43.5, lng: 18.5 },
          },

          {
            start: { lat: 43.5, lng: 18.5 },
            end: { lat: 10.2, lng: 58.5 },
          },

          {
            start: { lat: 10.2, lng: 58.5 },
            end: { lat: 11.8, lng: 83.5 },
          },

          {
            start: { lat: 11.8, lng: 83.5 },
            end: { lat: 2.8, lng: 101.8 },
          },

          {
            start: { lat: 2.8, lng: 101.8 },
            end: { lat: 5.5, lng: 106.5 },
          },

          {
            start: { lat: 5.5, lng: 106.5 },
            end: { lat: 16.8, lng: 123.5 },
          },

          {
            start: { lat: 16.8, lng: 123.5 },
            end: { lat: -46, lng: 148 },
          },
        ]}
      />
      <OfficeTimes />
    </div>
  );
}

const OfficeTimes = () => {
  const offices = [
    {
      city: "London",
      timezone: "Europe/London",
      region: "HQ",
    },
    {
      city: "Dubai",
      timezone: "Asia/Dubai",
      region: "Middle East",
    },
    {
      city: "Delhi NCR",
      timezone: "Asia/Kolkata",
      region: "India",
    },
    {
      city: "Singapore",
      timezone: "Asia/Singapore",
      region: "APAC",
    },
    {
      city: "Toronto",
      timezone: "America/Toronto",
      region: "Canada",
    },
    {
      city: "Springfield",
      timezone: "America/Chicago",
      region: "Illinois, USA",
    },
  ];

  const getTime = (timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  };

  const [times, setTimes] = useState(() =>
    offices.reduce((acc, office) => {
      acc[office.city] = getTime(office.timezone);
      return acc;
    }, {}),
  );

  useEffect(() => {
    const updateTimes = () => {
      setTimes(
        offices.reduce((acc, office) => {
          acc[office.city] = getTime(office.timezone);
          return acc;
        }, {}),
      );
    };

    updateTimes();

    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto mt-6 mb-15 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {offices.map((office) => (
        <div
          key={office.city}
          className="group rounded-2xl border border-gray-200 bg-gray-50/80 px-5 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            {office.city}
          </h3>

          <p className="mt-3 text-2xl font-bold tracking-tight text-purple-500 dark:text-purple-400">
            {times[office.city]}
          </p>

          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {office.region}
          </p>
        </div>
      ))}
    </div>
  );
};
