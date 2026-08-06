"use client";
import SectionHeader from "@/components/common/SectionHeader";

const data = [
  {
    tag: "Technology",
    text: "Top tech talent in software, cloud, cybersecurity, AI, and emerging technologies.",
  },
  {
    tag: "Digital",
    text: "Helping companies hire product, marketing, and UI/UX experts for digital innovation.",
  },
  {
    tag: "BFSI",
    text: "Expert recruitment for banking, finance, insurance, compliance, and fintech innovation.",
  },
  {
    tag: "Manufacturing",
    text: "Skilled talent for manufacturing, including production, quality, operations, and maintenance.",
  },
];

export default function Industry() {
  return (
    <section className="w-full mb-10 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Depth Across Sectors"}
          title={"Industry Expertise"}
          description={
            "Each vertical is supported by industry-certified consultants and domain-specific recruiters."
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex min-h-[260px] flex-col justify-between rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 dark:border-white/10 dark:from-white/5 dark:to-white/0 md:p-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                {item.tag}
              </div>

              <p className="mt-6 text-base leading-relaxed text-gray-800 dark:text-white md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 flex justify-center">
          <button className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
            + Swipe →
          </button>
        </div> */}
      </div>
    </section>
  );
}
