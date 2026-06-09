import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServiceShowcaseSection.module.scss";
import { ServiceImages } from "@/data/servicesData";

const duplicatedImages = [...ServiceImages, ...ServiceImages, ...ServiceImages];

const ServiceShowcaseSection = ({ heading, supportingHeading, children }) => {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-20 xl:grid-cols-[1fr_620px]">
          <div className="max-w-[700px]">
            <h2 className="mb-8 text-[clamp(2rem,3.5vw,6rem)] font-bold leading-[1.1] text-white">
              {heading}{" "}
              <span className="text-[#e12afb]">{supportingHeading}</span>
            </h2>

            {children}

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center overflow-hidden rounded-full bg-[#e12afb] p-1 text-white transition-all duration-300 hover:scale-105"
            >
              <span className="px-7 font-semibold">Connect With Us</span>

              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-[#e12afb]">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>

          <div className="relative h-[900px] overflow-hidden">
            <div className={styles.fadeTop} />
            <div className={styles.fadeBottom} />

            <div className="grid grid-cols-2 gap-6">
              <div className={`${styles.animateDown} flex flex-col gap-6`}>
                {duplicatedImages.map((img, index) => (
                  <div
                    key={`left-${index}`}
                    className="relative h-[340px] overflow-hidden rounded-[28px]"
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className={`${styles.animateUp} flex flex-col gap-6`}>
                {duplicatedImages.map((img, index) => (
                  <div
                    key={`right-${index}`}
                    className="relative h-[340px] overflow-hidden rounded-[28px]"
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcaseSection;
