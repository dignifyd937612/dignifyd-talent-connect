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
    <>
      <section
        className={`relative overflow-hidden py-24 ${
          background ? "bg-[#0b0615]" : ""
        }`}
      >
        {background && (
          <>
            <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#c61df2]/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#e12afb]/5 blur-[140px]" />
          </>
        )}
        <div className="container mx-auto">
          <div className="container relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_650px]">
              <div className={reverse ? "lg:order-2" : ""}>
                <h2 className="mb-4 text-4xl font-semibold leading-tight text-white lg:text-5xl xl:text-6xl">
                  {heading}{" "}
                  <span className="bg-gradient-to-r from-[#c61df2] to-[#e12afb] bg-clip-text text-transparent">
                    {subHeading}
                  </span>
                </h2>

                {title && (
                  <h3 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
                    {title}
                  </h3>
                )}

                {children}

                <Link
                  href="/contact"
                  className="group mt-2 inline-flex overflow-hidden rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] p-[1px]"
                >
                  <div className="flex items-center rounded-full bg-black/40 px-2 py-2 backdrop-blur-md">
                    <span className="px-6 font-semibold text-white">
                      Learn More
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#e12afb] transition-all duration-300 group-hover:translate-x-1">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </Link>
              </div>

              <div
                className={`relative overflow-hidden rounded-[32px] border border-white/10 ${
                  reverse ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={heading}
                  className="aspect-square w-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#c61df2]/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFeatureSection;
