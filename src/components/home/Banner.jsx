"use client";

import Image from "next/image";
import banner_img from "../../assets/images/aboutUs/banner/banner-bg.png";
import dynamic from "next/dynamic";
const Magnetic = dynamic(() => import("../common/Magnetic"));
export default function Banner({
  banner_bg = banner_img,
  badge,
  leading_text,
  supporting_text,
  description,
  btn_text,
}) {
  const loginWithGoogle = () => {
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      "client_id=" +
      "994775511948-fh2m0kvf2ampim371anav8000q5365dn.apps.googleusercontent.com" +
      "&redirect_uri=" +
      "http://localhost:3000" +
      "&response_type=code" +
      "&scope=email profile" +
      "&access_type=offline";

    window.location.href = url;
  };
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden py-20 mt-15">
      {banner_bg && (
        <div className="absolute inset-0">
          <Image
            src={banner_bg}
            alt="background"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className="object-cover opacity-100"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/25 bg-[#1a0f2e]/60 px-6 py-2 text-sm text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-medium text-transparent">
            {badge}
          </span>
        </div>
        <h1 className="text-4xl leading-tight font-semibold text-white md:text-6xl">
          {leading_text}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {supporting_text}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-400 md:text-base">
          {description}
        </p>

        {btn_text && (
          <Magnetic>
            <div className="mt-8">
              <button
                onClick={() => loginWithGoogle()}
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white cursor-pointer"
              >
                {btn_text}
              </button>
            </div>
          </Magnetic>
        )}
      </div>
    </section>
  );
}
