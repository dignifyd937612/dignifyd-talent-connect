import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { collaborations } from "@/data/logos";

export default function Collaboration() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          badge={"Together, We Achieve More"}
          title={"Collaboration For Excellence: Partners In Every Endeavor"}
        />

        <div className="relative mt-14 rounded-[28px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-purple-500/30 p-[1px] md:mt-20 md:rounded-[32px]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/80 backdrop-blur-2xl md:rounded-[32px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {collaborations.map((logo, i) => (
                // 
                <div
                  key={i}
                  className="group flex h-[100px] items-center justify-center border border-white/5 sm:h-[110px] md:h-[140px]"
                >
                  <div className="relative flex h-16 w-28 items-center justify-center rounded-xl bg-gradient-to-b _rgba(168,85,247,0.6)] sm:h-20 sm:w-32 sm:p-3 md:h-24 md:w-44 md:rounded-2xl md:group-hover:scale-110">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-pink-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100 md:rounded-2xl" />

                    <div className="relative flex h-17 w-25 items-center justify-center">
                      <Image
                        src={logo}
                        alt="logo"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                        className="scale-110 object-contain grayscale transition duration-500 group-hover:grayscale-0 sm:scale-125 md:scale-150"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-16">
          <Magnetic>
            <Link
              href="/contact"
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
