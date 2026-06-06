import { ArrowRight } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Centralized Workforce Governance",
  },
  {
    number: "02",
    title: "Real-Time Workforce Visibility",
  },
  {
    number: "03",
    title: "Standardized Vendor Operations",
  },
  {
    number: "04",
    title: "AI-Enabled Workforce Reporting",
  },
  {
    number: "05",
    title: "Streamlined Supplier Coordination",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#e12afb]/30 bg-[#e12afb]/10 px-5 py-2 text-sm font-medium text-[#e12afb] backdrop-blur-sm">
              Our Process
            </div>

            <h2 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              <span className="text-[#e12afb]">Operational Advantages</span>{" "}
              That Strengthen Workforce Programs
            </h2>
          </div>

          <Link
            href={"/contact"}
            className="group inline-flex w-fit items-center rounded-full border border-[#e12afb]/40 bg-white/5 p-1 backdrop-blur-xl transition-all duration-300 hover:border-[#e12afb]"
          >
            <span className="px-6 text-sm font-medium text-white">
              Contact Us
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e12afb] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-[28px] border border-[#e12afb]/20 bg-gradient-to-br from-[#e12afb] to-[#c019d8] p-6 shadow-[0_10px_40px_rgba(225,42,251,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(225,42,251,0.35)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="mb-6 text-6xl font-bold leading-none text-white/30">
                {item.number}
              </div>

              <h3 className="relative z-10 text-xl font-semibold leading-snug text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
