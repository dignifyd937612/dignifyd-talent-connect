import { Timer } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import styles from "./Journey.module.scss";

const timelineData = [
  {
    id: "01",
    title: "Launch (2018)",
    desc: "The foundation of Dignifyd Digital marked the beginning of our mission. During this phase, we focused on building strong consulting capabilities, delivering tailored HR and digital solutions that quickly earned industry trust and long-term partnerships.",
    align: "right",
  },
  {
    id: "02",
    title: "Global Expansion (2023)",
    desc: "With the launch of Dignifyd Talent Connect, we expanded our global footprint and strengthened our service portfolio. This year highlighted rapid growth, onboarding clients across multiple continents and establishing ourselves as a reliable provider of scalable workforce and HR technology solutions.",
    align: "left",
  },
  {
    id: "03",
    title: "Partnership (2025)",
    desc: "By 2025, our journey evolved into strategic collaborations with global enterprises and technology partners. These partnerships enabled us to develop deeper talent ecosystems, co-create innovative HR solutions, and deliver enhanced value for clients navigating digital transformation.",
    align: "right",
  },
];

export default function Journey() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge={"From a Vision to a Global Talent Powerhouse"}
          title={"Our Journey"}
          description={
            "Launched after Dignifyd Digital’s success, Dignifyd Talent Connect connects global companies with flexible, technology-powered workforce solutions."
          }
        />

        <div className="relative mt-20">
          <div className="animate-line absolute top-0 left-4 h-full w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {timelineData.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center ${item.align === "left" ? "md:justify-start" : "md:justify-end"} animate-fadeUp justify-start`}
                style={{
                  animationDelay: `${i * 0.4}s`,
                  animationFillMode: "both",
                }}
              >
                <div
                  className={`w-full md:w-[45%] ${item.align === "left" ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"} pl-16 text-left md:pl-0`}
                >
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                  <div className="animate-glow flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] md:h-12 md:w-12">
                    <Timer />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
