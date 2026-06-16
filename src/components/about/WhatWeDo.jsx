import Image from "next/image";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import team from "../../assets/images/aboutUs/whatwedo/whatwedo.jpg";
import SectionHeader from "../common/SectionHeader";
import Magnetic from "../common/Magnetic";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-purple-100 shadow-[0_20px_60px_rgba(168,85,247,0.12)] md:h-[500px] dark:border-purple-500/20 dark:shadow-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 dark:hidden"></div>

          <Image
            src={team}
            alt="team"
            fill
            quality={70}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-300 bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/20">
              <span className="text-xs text-purple-600 dark:text-purple-400">
                ›
              </span>
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              What We Do
            </span>
          </div>

          <SectionHeader
            title={
              "Our platform simplifies the way people manage tasks, collaborate, and scale their operations — all in one place."
            }
            description={
              "Whether you're a growing startup or a global enterprise, we provide the tools you need to streamline your workflow, automate what slows you down, and focus on what drives results. From real-time collaboration and intelligent automation to seamless integrations and enterprise-grade security, we're here to make your day-to-day operations smoother."
            }
            center={false}
          />

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400"></p>

          <Magnetic>
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] transition hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]">
              Get Started
              <ArrowRight size={16} />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
