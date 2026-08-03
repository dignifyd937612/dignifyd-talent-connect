"use client";
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
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global{" "}
          <span className="text-neutral-400">
            {"Presence".split("").map((word, idx) => (
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
          Scaling Businesses Across Continents
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
            lat: 36.5,
            lng: -76.5,
            src: usa.src,
            label: "USA",
          },
          {
            lat: 44.8,
            lng: -82.5,
            src: canada.src,
            label: "Canada",
          },
          {
            lat: 24.2,
            lng: 54.5,
            src: uae.src,
            label: "UAE",
          },
          {
            lat: 26.8,
            lng: 80.5,
            src: ind.src,
            label: "India",
          },
          {
            lat: 55.5,
            lng: 14.5,
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
            lat: -26,
            lng: 148,
            src: australia.src,
            label: "Australia",
          },
        ]}
        dots={[
          {
            start: { lat: 44.8, lng: -82.5 },
            end: { lat: 36.5, lng: -76.5 },
          },

          {
            start: { lat: 36.5, lng: -76.5 },
            end: { lat: 52.8, lng: -2.5 },
          },

          {
            start: { lat: 52.8, lng: -2.5 },
            end: { lat: 55.5, lng: 14.5 },
          },

          {
            start: { lat: 55.5, lng: 14.5 },
            end: { lat: 24.2, lng: 54.5 },
          },

          {
            start: { lat: 24.2, lng: 54.5 },
            end: { lat: 26.8, lng: 80.5 },
          },

          {
            start: { lat: 26.8, lng: 80.5 },
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
            end: { lat: -26, lng: 148 },
          },
        ]}
      />
    </div>
  );
}
