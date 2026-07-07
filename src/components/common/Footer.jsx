import Image from "next/image";
import x_logo from "../../assets/images/home/footer/X.png";
import x_light from "../../assets/images/home/footer/X_light.png";
import gitHub_logo from "../../assets/images/home/footer/github.png";
import gitHub_light from "../../assets/images/home/footer/github_light.png";
import linkedin_logo from "../../assets/images/home/footer/Linkedin.png";
import linkedin_light from "../../assets/images/home/footer/Linkedin_light.webp";
import dark_logo from "../../assets/images/home/footer/dignifyd-logo.svg";
import light_logo from "../../assets/images/home/footer/light-logo.png";
import Link from "next/link";
import styles from "../common/Footer.module.scss";
import { NAV_LINKS, recruitmentLinks, tabs } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-purple-100 bg-white px-6 pt-20 text-gray-900 dark:border-white/5 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-30 md:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="relative block h-15 w-[170px]">
              <Image
                src={light_logo}
                alt="Dignifyd Logo"
                fill
                priority
                sizes="170px"
                className="object-contain dark:hidden"
              />

              <Image
                src={dark_logo}
                alt="Dignifyd Logo"
                fill
                priority
                sizes="170px"
                className="hidden object-contain dark:block"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Discover a hiring experience built for modern businesses. From
              recruitment to employee growth, we help you attract the right
              talent, nurture strong teams, and drive long-term success.
            </p>

            <div className="flex gap-4">
              {[
                {
                  dark: x_logo,
                  light: x_light,
                },
                {
                  dark: gitHub_logo,
                  light: gitHub_light,
                },
                {
                  dark: linkedin_logo,
                  light: linkedin_light,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-100 bg-white shadow-md shadow-purple-500/10 transition hover:shadow-lg hover:shadow-purple-500/20 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                >
                  <>
                    <Image
                      src={item.light}
                      alt="social icon"
                      width={15}
                      height={15}
                      className="h-auto w-auto dark:hidden"
                    />

                    <Image
                      src={item.dark}
                      alt="social icon" 
                      width={15}
                      height={15}
                      className="hidden h-auto w-auto dark:block"
                    />
                  </>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-wider text-gray-700 uppercase dark:text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {NAV_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className={styles?.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-wider text-gray-700 uppercase dark:text-gray-300">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {tabs.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className={styles?.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-wider text-gray-700 uppercase dark:text-gray-300">
              Recruitment
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {recruitmentLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={
                      item.hash
                        ? { pathname: item.href, hash: item.hash }
                        : item.href
                    }
                    className={styles?.footerLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-5 text-sm tracking-wider text-gray-700 dark:text-gray-300 uppercase">
              Get In Touch With Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {getInTouchLinks.map((item, i) => (
                <li key={i}>
                  {item.href.startsWith("mailto:") ||
                  item.href.startsWith("tel:") ? (
                    <a
                      href={item.href}
                      className={`break-words ${item.href.startsWith("mailto:") ? "underline" : ""}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      target="_blank"
                      className="underline break-words"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-purple-100 pt-5 pb-10 md:flex-row dark:border-white/10">
          <div>
            {/* <h3 className="mb-2 text-lg text-white">
              Get free note-taking workflows
            </h3> */}
            <p className="text-sm text-gray-500 dark:text-white/50">
              Copyright © 2026 Dignifyd Talent Connect. All rights reserved.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-l-full border border-purple-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none md:w-72 dark:border-purple-500/20 dark:bg-[#1a0f2e] dark:text-white"
            />
            <button className="cursor-pointer rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
