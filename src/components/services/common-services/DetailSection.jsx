"use client";
import Image from "next/image";
import bottomVisual from "../../../assets/images/services/other/glow.gif";

export default function DetailSection({ subSection }) {
  return (
    <section className="w-full bg-white py-15 dark:bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-6 dark:text-white">
            {subSection?.title}
          </h2>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {subSection?.para1}
          </p>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {subSection?.para2}
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[350px] h-[350px] rounded-full"></div>

          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            <Image
              src={bottomVisual}
              alt="glow"
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
