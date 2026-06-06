"use client";

import { useState, memo } from "react";
import SectionHeader from "@/components/common/SectionHeader";

function FAQs({ FAQs, badge, title }) {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader badge={badge} title={title} />

        <div className="mt-12 space-y-4">
          {FAQs.map((faq, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`cursor-pointer rounded-2xl transition-all duration-300 ${isActive ? "border border-purple-500/30 bg-gradient-to-r from-[#1a0f2e] to-[#140a25] shadow-[0_0_40px_rgba(168,85,247,0.15)]" : "border border-white/5 bg-[#0b0b0b] from-[#1a0f2e] to-[#140a25] hover:bg-gradient-to-r"}`}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <h3 className="text-sm font-medium text-white md:text-base">
                    {faq.question}
                  </h3>

                  <span className="text-xl text-purple-400">
                    {isActive ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden px-6 transition-all duration-300 ${isActive ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm leading-relaxed text-gray-400">
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
