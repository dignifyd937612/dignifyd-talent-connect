import Image from "next/image";
import logo from "../../assets/images/home/footer/dignifyd-logo.svg";
import x_logo from "../../assets/images/home/footer/X.png";
import gitHub_logo from "../../assets/images/home/footer/github.png";
import linkedin_logo from "../../assets/images/home/footer/Linkedin.png";
import Link from "next/link";
import styles from "../common/Footer.module.scss";
import {
  getInTouchLinks,
  NAV_LINKS,
  recruitmentLinks,
  tabs,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black px-6 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-30 md:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Dignifyd Logo"
                width={120}
                height={32}
                priority
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Discover a hiring experience built for modern businesses. From
              recruitment to employee growth, we help you attract the right
              talent, nurture strong teams, and drive long-term success.
            </p>

            <div className="flex gap-4">
              {[x_logo, gitHub_logo, linkedin_logo].map((item, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                >
                  <Image
                    src={item}
                    alt="social icon"
                    width={15}
                    height={15}
                    className="h-auto w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-wider text-gray-300 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h3 className="mb-5 text-sm tracking-wider text-gray-300 uppercase">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h3 className="mb-5 text-sm tracking-wider text-gray-300 uppercase">
              Recruitment
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h3 className="mb-5 text-sm tracking-wider text-gray-300 uppercase">
              Get In Touch With Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
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

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-5 pb-10 md:flex-row">
          <div>
            {/* <h3 className="mb-2 text-lg text-white">
              Get free note-taking workflows
            </h3> */}
            <p className="text-sm text-white/50">
              Copyright © 2026 Dignityd Talent Connect. All rights reserved.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-l-full border border-purple-500/20 bg-[#1a0f2e] px-4 py-3 text-sm text-white outline-none md:w-72"
            />
            <button className="cursor-pointer rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
