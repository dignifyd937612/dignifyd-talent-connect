import { Timer } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import styles from "./Journey.module.scss";

const timelineData = [
  {
    id: "01",
    title: "2018: Founded",
    desc: "Dignifyd Digital launched in India as a technology and digital services company. Over the next 5 years it grew into a group of nine verticals expanding in technology, fintech, enterprise service and talent recruitment.",
  },
  {
    id: "02",
    title: "2023: Launch of Talent Connect:",
    desc: "The group launched Dignifyd Talent Connect as a dedicated recruitment firm. Built on the infrastructure of hiring developed by its own group. Now offering as a service. Talent connect today operates from six different offices.",
    align: "left",
  },
  {
    id: "03",
    title: "2025: RPO & Global Expansion:",
    desc: "Through partnership with established firm we launched RPO (recruitment process outsourcing) as a service. Expanded to multiple cities such as London, Dubai, Singapore, Toronto, Springfield and Delhi NCR.",
    align: "right",
  },
];

export default function Journey() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge={"From a Vision to a Global Talent Powerhouse"}
          title={"How We Got Here"}
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
