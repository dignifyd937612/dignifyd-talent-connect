import Image from "next/image";
import banner_img from "../../assets/images/aboutUs/banner/banner-bg.png";
import banner_light from "../../assets/images/aboutUs/banner/banner_light.png";
import dynamic from "next/dynamic";

const Magnetic = dynamic(() => import("../common/Magnetic"));

export default function Banner({
  banner_bg = banner_img,
  white_banner_bg = banner_light,
  badge,
  leading_text,
  supporting_text,
  description,
  btn_text,
}) {
  return (
    <section className="relative mt-15 flex w-full items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0">
        <>
          <Image
            src={white_banner_bg}
            alt="background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover dark:hidden"
          />
          <Image
            src={banner_bg}
            alt="background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="hidden object-cover dark:block"
          />
        </>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 dark:from-black/60 dark:via-black/30 dark:to-black/60" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/25 bg-white/80 px-6 py-2 text-sm text-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl dark:bg-[#1a0f2e]/60 dark:text-purple-300 dark:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-medium text-transparent">
            {badge}
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-6xl dark:text-white">
          {leading_text}{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {supporting_text}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-600 md:text-base dark:text-gray-400">
          {description}
        </p>

        {btn_text && (
          <Magnetic>
            <div className="mt-8">
              <button className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] transition hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                {btn_text}
              </button>
            </div>
          </Magnetic>
        )}
      </div>
    </section>
  );
}
