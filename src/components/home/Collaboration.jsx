import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { collaborations, lightLogos } from "@/data/logos";

export default function Collaboration() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-20 md:px-6 md:py-28 dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          badge={"Together, We Achieve More"}
          title={"Collaboration For Excellence: Partners In Every Endeavor"}
        />

        <section className="overflow-hidden py-10">
          <div className="block dark:hidden">
            <div className="group relative flex overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />
              <div className="animate-marquee flex shrink-0 items-center gap-24">
                {[...lightLogos, ...lightLogos].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={90}
                    className="h-16 w-auto shrink-0 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-16"
                  />
                ))}
              </div>
            </div>

            <div className="my-20" />

            <div className="group relative flex overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />
              <div className="animate-marquee-reverse flex shrink-0 items-center gap-24">
                {[...lightLogos, ...lightLogos].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={90}
                    className="h-16 w-auto shrink-0 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-16"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden dark:block">
            <div className="group relative flex overflow-hidden">
              <div className="animate-marquee flex shrink-0 items-center gap-24">
                {[...collaborations, ...collaborations].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={90}
                    className="h-16 w-auto shrink-0 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-16"
                  />
                ))}
              </div>
            </div>

            <div className="my-17" />

            <div className="group relative flex overflow-hidden">
              <div className="animate-marquee-reverse flex shrink-0 items-center gap-24">
                {[...collaborations, ...collaborations].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={90}
                    className="h-16 w-auto shrink-0 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 md:h-16"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center md:mt-16">
          <Magnetic>
            <Link
              href="/contact#contact_form"
              className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] md:px-10 md:py-4"
            >
              Let’s Collaborate →
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
