import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesAndList({ features, featuredImages }) {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2">
        <div>
          <div className="mt-10 mb-10  rounded-2xl border border-purple-200 bg-gradient-to-br from-white to-purple-50/60 p-6 shadow-[0_15px_40px_rgba(168,85,247,0.08)] dark:border-purple-500/10 dark:bg-gradient-to-br dark:from-[#140a24] dark:to-[#0b0615] dark:shadow-none">
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Why Choose Us
            </h4>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We combine industry expertise, global reach, and technology-driven
              solutions to help organizations scale faster, build stronger
              teams, and achieve sustainable growth.
            </p>
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
        <div className="relative mt-10">
          <div className="overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-white to-purple-50/60 shadow-[0_15px_40px_rgba(168,85,247,0.08)] dark:border-purple-500/10 dark:from-[#140a24] dark:to-[#0b0615] dark:shadow-none">
            <Image
              src={featuredImages?.[0]}
              alt="Recruitment Services"
              width={700}
              height={700}
              className="h-[430px] w-full object-cover rounded-2xl transition duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
