import { lightLogos, partnersLogos } from "@/data/logos";
import LogoSlider from "../common/LogoSlider";

const Partners = () => {
  return (
    <section className="w-full border-t border-purple-100 bg-white py-16 dark:border-white/5 dark:bg-black">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Your Trusted Allies In Growth
        </p>
      </div>

      <LogoSlider darkLogo={partnersLogos} lightLogo={lightLogos} />
    </section>
  );
};

export default Partners;
