"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import banner_img from "../../assets/images/aboutUs/banner/banner-bg.png";
import banner_light from "../../assets/images/aboutUs/banner/banner_light.png";
import dynamic from "next/dynamic";
import Link from "next/link";

const Magnetic = dynamic(() => import("../common/Magnetic"));

export default function Banner({
  banner_bg = banner_img,
  white_banner_bg = banner_light,
  badge,
  leading_text,
  supporting_text,
  description,
  btn_text,
  btn_link = "#",
  showBreadcrumb = false,
}) {
  const pathname = usePathname();
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
        <div className="relative mb-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full border border-purple-500/25 bg-white/80 px-6 py-2 text-sm shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl dark:border-purple-500/25 dark:bg-[#1a0f2e]/60 dark:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-medium text-transparent">
                {badge}
              </span>
            </div>
          </div>

          {showBreadcrumb && (
            <>
              <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
                <nav className="flex items-center">
                  {[
                    { label: "Home", href: "/" },
                    ...pathname
                      .split("/")
                      .filter(Boolean)
                      .map((item, index, arr) => ({
                        label: item.replace(/-/g, " "),
                        href: "/" + arr.slice(0, index + 1).join("/"),
                      })),
                  ].map((item, index, arr) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative flex h-10 items-center px-5 text-sm font-medium transition-all duration-300 ${index === arr.length - 1 ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-[#181122] text-gray-300 hover:bg-[#241735]"} ${index !== 0 ? "-ml-2" : ""} `}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
                      }}
                    >
                      {item.label
                        .split(" ")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase(),
                        )
                        .join(" ")}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-5 flex justify-center lg:hidden">
                <div className="scrollbar-hide max-w-full overflow-x-auto">
                  <nav className="flex min-w-max items-center">
                    {[
                      { label: "Home", href: "/" },
                      ...pathname
                        .split("/")
                        .filter(Boolean)
                        .map((item, index, arr) => ({
                          label: item.replace(/-/g, " "),
                          href: "/" + arr.slice(0, index + 1).join("/"),
                        })),
                    ].map((item, index, arr) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative flex h-9 items-center px-4 text-xs font-medium transition-all duration-300 ${index === arr.length - 1 ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-[#181122] text-gray-300"} ${index !== 0 ? "-ml-2" : ""} `}
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
                        }}
                      >
                        {item.label
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase(),
                          )
                          .join(" ")}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>

        <h1 className="text-4xl leading-tight font-semibold text-gray-900 md:text-6xl dark:text-white">
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
              <Link
                href={btn_link}
                className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] transition hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]"
              >
                {btn_text}
              </Link>
            </div>
          </Magnetic>
        )}
      </div>
    </section>
  );
}
