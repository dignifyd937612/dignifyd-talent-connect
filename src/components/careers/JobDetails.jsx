import { Check } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function JobDetails() {
  return (
    <section className="mt-10 w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            badge={"PCI Infra Services"}
            title={"PCI Infra"}
            description={
              "PCI Infra is a leading provider of electrical products, specializing in high-quality Wires & Cables and Modular Switches. With a strong dealer and distributor network across multiple states, the company focuses on innovation, product reliability, and building long-term customer relationships in the electrical industry."
            }
            center={false}
          />

          <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Job Description
          </h3>

          <ul className="space-y-5">
            {[
              "Appoint, manage, and monitor dealers and distributors",
              "Drive channel & retail sales for Wires, Cables, Modular Switches & Accessories",
              "Achieve monthly and quarterly sales & revenue targets",
              "Conduct product promotions across assigned territories",
              "Perform competition mapping and market analysis",
              "Build strong relationships with dealers, distributors & retailers",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full border border-purple-300 bg-purple-50 dark:border-purple-500 dark:bg-transparent">
                  <Check
                    size={16}
                    className="text-purple-500 dark:text-purple-400"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl border border-purple-200 bg-gradient-to-br from-white via-[#faf7ff] to-[#f3ebff] p-8 shadow-[0_25px_80px_rgba(168,85,247,0.12)] md:p-10 dark:border-purple-500/10 dark:bg-[#0b0615] dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Job Overview
          </h3>

          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Overall, the goal is to enhance user satisfaction by making products
            intuitive, efficient, and enjoyable to interact with.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-purple-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#140a24]">
              <p className="mb-2 text-xs tracking-wider text-purple-500 uppercase">
                Experience
              </p>

              <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                2–4 Years
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#140a24]">
              <p className="mb-2 text-xs tracking-wider text-purple-500 uppercase">
                Openings
              </p>

              <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                22
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-purple-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#140a24]">
              <p className="mb-3 font-semibold text-gray-900 dark:text-white">
                MP Location*
              </p>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Balaghat, Indore, Itarsi, Gwalior, Ashok Nagar, Bhopal,
                Shajapur, Dewas, Hoshangabad, Tikamgarh, Jhansi, Chhatarpur
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#140a24]">
              <p className="mb-3 font-semibold text-gray-900 dark:text-white">
                U.P Location*
              </p>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Shahjahanpur, Gorakhpur, Deoria, Gonda, Basti, Bareilly,
                Kannauj, Hamirpur, Bahraich, Mahoba
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
