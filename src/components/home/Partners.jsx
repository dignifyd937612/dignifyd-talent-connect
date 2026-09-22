import { lightLogos, partnersLogos } from "@/data/logos";
import LogoSlider from "../common/LogoSlider";

const Partners = () => {
  return (
    <section className="mt-10 w-full border-t border-purple-100 bg-white dark:border-white/5 dark:bg-black">
      <div className="mx-auto flex w-full max-w-[1230px]">
        <div className="flex h-[100px] w-[280px] shrink-0 items-center border-b border-r border-purple-100 px-6 dark:border-white/5">
          <div className="relative">
            <span className="absolute top-1/2 -left-4 h-10 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />

            <p className="text-[15px] font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Hiring Partners In
            </p>

            <p className="mt-1 text-[15px] font-bold tracking-[0.18em] text-slate-800 uppercase dark:text-white">
              35+ Countries
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden border-b border-purple-100 dark:border-white/5">
          <LogoSlider darkLogo={partnersLogos} lightLogo={lightLogos} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
