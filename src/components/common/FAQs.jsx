"use client";

import { useState, memo } from "react";
import SectionHeader from "@/components/common/SectionHeader";

function FAQs({ FAQs, badge, title }) {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeader badge={badge} title={title} />

        <div className="mt-12 space-y-4">
          {FAQs.map((faq, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
                  isActive
                    ? `
                      border border-purple-200
                      bg-gradient-to-r
                      from-white
                      via-purple-50/70
                      to-pink-50/60
                      shadow-[0_15px_40px_rgba(168,85,247,0.12)]

                      dark:border-purple-500/30
                      dark:bg-[#140a24]
                      dark:bg-none
                      dark:shadow-[0_0_40px_rgba(168,85,247,0.15)]
                    `
                    : `
                      border border-purple-100
                      bg-white
                      shadow-[0_8px_25px_rgba(168,85,247,0.05)]

                      hover:border-purple-200
                      hover:shadow-[0_12px_30px_rgba(168,85,247,0.08)]

                      dark:border-white/5
                      dark:bg-[#0b0b0b]
                      dark:hover:border-purple-500/20
                      dark:hover:bg-[#140a24]
                    `
                }`}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <h3 className="text-sm font-medium text-gray-900 md:text-base dark:text-white">
                    {faq.question}
                  </h3>

                  <span
                    className={`text-xl font-medium transition-colors ${
                      isActive
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-500 dark:text-purple-400"
                    }`}
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden px-6 transition-all duration-300 ${
                    isActive ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mb-4 h-px bg-purple-100 dark:bg-white/10"></div>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(FAQs);
