import SectionHeader from "@/components/common/SectionHeader";
import InteractiveDots from "../common/cursors/InteractiveDots";
import { Globe, Handshake, Users } from "lucide-react";

import australia from "@/assets/images/home/globalPresence/australia.webp";
import canada from "@/assets/images/home/globalPresence/canada.png";
import eu from "@/assets/images/home/globalPresence/european-union.jpg";
import ind from "@/assets/images/home/globalPresence/india.webp";
import malaysia from "@/assets/images/home/globalPresence/malaysia.png";
import philippines from "@/assets/images/home/globalPresence/philippines.webp";
import singapore from "@/assets/images/home/globalPresence/singapore.png";
import uae from "@/assets/images/home/globalPresence/UAE.jpg";
import uk from "@/assets/images/home/globalPresence/united-kingdom.jpg";
import usa from "@/assets/images/home/globalPresence/USA.png";

export default function Stats() {
  const countries = [
    { name: "United Kingdom", src: uk.src },
    { name: "USA", src: usa.src },
    { name: "Canada", src: canada.src },
    { name: "UAE", src: uae.src },
    { name: "India", src: ind.src },
    { name: "European Union", src: eu.src },
    { name: "Singapore", src: singapore.src },
    { name: "Philippines", src: philippines.src },
    { name: "Malaysia", src: malaysia.src },
    { name: "Australia", src: australia.src },
  ];

  const stats = [
    {
      icon: <Handshake size={18} />,
      value: "<36H",
      title: "Get Hired",
      desc: "The candidate gets shortlisted in 36 hours from the moment you brief us. We measure every mandate, and track the time from the moment we receive the brief.",
      type: "timeline",
    },
    {
      icon: <Users size={18} />,
      value: "92%",
      title: "Retention",
      desc: "The percentage of candidates hired and working for 90 days. We keep this time duration because a placement that leaves in the first quarter was never a real placement.",
      type: "retention",
    },
    {
      icon: <Globe size={18} />,
      value: "35+",
      title: "Countries",
      desc: "Candidates hired via six offices and a regional partner network. Whether you are hiring in India or other countries. Our process remains the same for every candidate.",
      type: "countries",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 dark:bg-black">
      <InteractiveDots className="absolute inset-0 z-0" />

      <SectionHeader badge="Our Stats" title="8 Years of Placing Candidates" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 backdrop-blur-xl transition duration-300 hover:border-purple-500/30 dark:border-white/10 dark:from-white/5 dark:to-white/0"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.08)]" />

            <div className="relative z-10">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-500 dark:text-purple-400">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h3>
                </div>

                <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 ">
                {item.type === "timeline" && (
                  <div className="relative">
                    <div className="absolute top-[6px] right-0 left-0 h-px bg-purple-500/50" />

                    <div className="relative grid grid-cols-4">
                      {[
                        ["Brief in", "0h"],
                        ["Market mapped", "0–12h"],
                        ["Screened", "12–28h"],
                        ["Shortlist out", "<36h"],
                      ].map(([label, time]) => (
                        <div key={label}>
                          <div className="relative mb-4 flex">
                            <span className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                          </div>

                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {label}
                          </p>

                          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.type === "retention" && (
                  <div className="flex items-center gap-6">
                    <div className="relative h-24 w-24 shrink-0">
                      <svg
                        viewBox="0 0 100 100"
                        className="h-full w-full -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="9"
                          className="text-purple-500/10"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="url(#retentionGradient)"
                          strokeWidth="9"
                          strokeLinecap="round"
                          strokeDasharray="264"
                          strokeDashoffset="21"
                          className="drop-shadow-[0_0_6px_rgba(192,132,252,0.5)]"
                        />

                        <defs>
                          <linearGradient
                            id="retentionGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold text-purple-400">
                          92%
                        </span>
                      </div>
                    </div>

                    <p className="max-w-[190px] text-sm leading-6 text-gray-500 dark:text-gray-400">
                      92 of every 100 hires are still in seat at day 90.
                    </p>
                  </div>
                )}

                {item.type === "countries" && (
                  <div>
                    <div className="grid grid-cols-5 gap-x-4 gap-y-4">
                      {countries.map((country) => (
                        <div
                          key={country.name}
                          className="group flex flex-col items-center"
                        >
                          <div className="h-11 w-11 overflow-hidden rounded-full border border-purple-400/30 bg-purple-500/10 p-[2px] transition duration-300 group-hover:scale-110 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            <img
                              src={country.src}
                              alt={country.name}
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
