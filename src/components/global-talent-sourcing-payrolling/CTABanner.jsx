import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#e12afb]/30 blur-[120px]" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e12afb]/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 px-8 py-20 text-center lg:px-20">
            <div className="mb-8 inline-flex items-center rounded-full border border-[#e12afb]/30 bg-[#e12afb]/10 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#e12afb]" />
              <span className="ml-2 text-sm font-medium text-[#e12afb]">
                Global Workforce Solutions
              </span>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Simplify Workforce
              <span className="bg-gradient-to-r from-[#e12afb] to-[#ff7ce8] bg-clip-text text-transparent">
                {" "}
                Management
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Explore how Global Talent Sourcing & Payrolling can streamline
              your global operations and help your organization scale faster
              with complete workforce compliance.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group relative inline-flex overflow-hidden rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] p-[1px] transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center rounded-full bg-black/30 px-2 py-2 backdrop-blur-md">
                  <span className="px-6 font-semibold text-white">
                    Get in Touch
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#e12afb] transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
