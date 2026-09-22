import Link from "next/link";
import { Global } from "../home/Global";
import { Globe3DDemo } from "../home/LightGlobe";

export default function GlobeSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden rounded-[32px]">
      <div className="relative z-10 mx-auto min-h-[760px] w-full max-w-[1240px] lg:min-h-[820px]">
        <div className="relative z-30 w-full px-6 text-left md:px-10 lg:absolute lg:top-1/2 lg:left-0 lg:w-[58%] lg:-translate-y-1/2 lg:px-0 xl:w-[55%]">
          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/15 to-pink-500/15 px-4 py-2 text-xs font-semibold text-purple-600 backdrop-blur-sm md:text-sm dark:text-purple-300">
            Global Recruitment · Six Markets
          </span>

          <h1 className="mt-6 max-w-[760px] text-4xl leading-[1.05] font-black tracking-[-0.04em] text-neutral-900 md:text-5xl lg:mt-8 lg:text-7xl dark:text-white">
            Recruitment across 35+ countries,
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              delivered in six global markets
            </span>
          </h1>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-neutral-600 md:text-lg lg:mt-8 lg:leading-9 dark:text-neutral-400">
            Headquartered in London. Offices in Dubai, Singapore, Chicago,
            Toronto, and Delhi NCR. 120+ specialists across six offices.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row lg:mt-12">
            <Link
              href="#contact_form"
              className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition duration-300 hover:scale-105 sm:w-auto"
            >
              Get a Call Back
            </Link>

            <Link
              href="/about"
              className="w-full rounded-full border border-violet-500/25 bg-white/70 px-8 py-3 text-center font-semibold text-violet-700 backdrop-blur transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white sm:w-auto dark:bg-white/5 dark:text-white"
            >
              See what we do
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center">
          <div className="relative h-[480px] w-[480px] shrink-0 md:h-[540px] md:w-[540px] lg:mr-[-20px] lg:h-[600px] lg:w-[600px] xl:mr-[-10px] xl:h-[650px] xl:w-[650px] 2xl:mr-0 2xl:h-[700px] 2xl:w-[700px]">
            <Globe3DDemo />

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-32 bg-gradient-to-r from-black/80 via-black/30 to-transparent dark:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
