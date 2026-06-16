import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesAndList({ features, featuredImages }) {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2">
        <div>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:flex-nowrap">
            <div className="relative h-[180px] w-full overflow-hidden rounded-2xl md:h-[150px] md:w-[260px]">
              <Image
                src={featuredImages[0]}
                alt="meeting"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>

            <div className="relative h-[180px] w-full overflow-hidden rounded-2xl md:h-[150px] md:w-[260px]">
              <Image
                src={featuredImages[1]}
                alt="discussion"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full border border-purple-500 bg-purple-50 dark:bg-transparent">
                  <Check
                    size={16}
                    className="text-purple-600 dark:text-white"
                  />
                </div>

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
