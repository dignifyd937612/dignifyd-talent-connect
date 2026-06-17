import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServiceFeatureSection = ({
  heading,
  subHeading,
  title,
  image,
  background = false,
  reverse = false,
  children,
}) => {
  return (
    <section
      className={`relative overflow-hidden py-24 ${background ? "bg-gradient-to-br from-[#faf7ff] via-white to-[#f8f2ff] dark:bg-gradient-to-br dark:from-[#090414] dark:via-[#0b0615] dark:to-[#12081f]" : "bg-white dark:bg-black"}`}
    >
      {background && (
        <>
          <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[180px] dark:hidden" />
          <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[180px] dark:hidden" />

          <div className="absolute top-0 left-0 hidden h-[450px] w-[450px] rounded-full bg-[#c61df2]/10 blur-[160px] dark:block" />
          <div className="absolute right-0 bottom-0 hidden h-[450px] w-[450px] rounded-full bg-[#e12afb]/5 blur-[160px] dark:block" />
        </>
      )}

      <div className="relative z-10 container mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_700px]">
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-300 bg-white/80 px-5 py-2 text-sm font-medium text-purple-600 shadow-[0_10px_30px_rgba(168,85,247,0.08)] backdrop-blur-xl dark:border-purple-500/20 dark:bg-white/[0.03] dark:text-purple-300">
              Premium Workforce Solutions
            </div>

            <h2 className="mb-4 text-4xl leading-tight font-semibold text-gray-900 lg:text-5xl dark:text-white">
              {heading}{" "}
              <span className="bg-gradient-to-r from-[#c61df2] to-[#e12afb] bg-clip-text text-transparent">
                {subHeading}
              </span>
            </h2>

            {title && (
              <h3 className="mb-6 text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                {title}
              </h3>
            )}

            <div className="space-y-5 text-[17px] leading-8">{children}</div>

            <Link
              href="/contact"
              className="group mt-10 inline-flex overflow-hidden rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] p-[1px] shadow-[0_15px_35px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center rounded-full bg-white px-2 py-2 dark:bg-black/40">
                <span className="px-6 font-semibold text-gray-900 dark:text-white">
                  Learn More
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] text-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          </div>

          <div
            className={`flex items-center justify-center ${reverse ? "lg:order-1" : ""}`}
          >
            <Image
              src={image}
              alt={heading}
              width={750}
              height={750}
              priority
              className="h-auto w-full max-w-[750px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureSection;
