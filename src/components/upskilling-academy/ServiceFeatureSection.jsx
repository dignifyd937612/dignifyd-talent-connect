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
      className={`relative overflow-hidden py-24 ${
        background ? "bg-[#0b0615]" : ""
      }`}
    >
      {background && (
        <>
          <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#c61df2]/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#e12afb]/5 blur-[160px]" />
        </>
      )}

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_700px]">
          <div className={reverse ? "lg:order-2" : ""}>
            <h2 className="mb-4 text-4xl font-semibold leading-tight text-white lg:text-5xl">
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
              className="group mt-8 inline-flex overflow-hidden rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] p-[1px]"
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
            className={`flex items-center justify-center ${reverse ? "lg:order-1" : ""}`}
          >
            <Image
              src={image}
              alt={heading}
              width={750}
              height={750}
              priority
              className="h-auto w-full max-w-[750px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureSection;
