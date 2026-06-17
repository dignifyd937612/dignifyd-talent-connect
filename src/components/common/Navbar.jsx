"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dark_logo from "../../assets/images/home/footer/dignifyd-logo.svg";
import light_logo from "../../assets/images/home/footer/light-logo.png";
import { NAV_LINKS } from "@/data/navigation";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleTheme = async (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    if (!document.startViewTransition) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      return;
    }

    document.startViewTransition(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition ${open ? "bg-white dark:bg-black" : "bg-white md:bg-white/70 md:backdrop-blur-xl dark:bg-black dark:md:bg-black/70"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="relative block h-15 w-[150px]">
          <Image
            src={light_logo}
            alt="Dignifyd Logo"
            fill
            priority
            sizes="150px"
            className="object-contain dark:hidden"
          />

          <Image
            src={dark_logo}
            alt="Dignifyd Logo"
            fill
            priority
            sizes="150px"
            className="hidden object-contain dark:block"
          />
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;

            return (
              <div key={link.path} className="group relative">
                <Link
                  href={link.path}
                  className={`text-sm transition ${isActive ? "text-purple-500" : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"}`}
                >
                  {link.label}
                </Link>

                {link.megaMenu && (
                  <div className="invisible absolute top-full left-1/2 z-50 mt-4 w-max -translate-x-1/2 rounded-xl border border-gray-200 bg-white/95 p-8 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:visible group-hover:opacity-100 dark:border-white/10 dark:bg-black/95">
                    <div className="grid auto-cols-max grid-flow-col gap-16">
                      {link.megaMenu.map((section) => (
                        <div key={section.title}>
                          <h3 className="mb-5 text-sm font-semibold text-purple-500">
                            {section.title}
                          </h3>

                          <ul className="space-y-4">
                            {section.items.map((item) => {
                              const Icon = item.icon;

                              return (
                                <Link
                                  key={item.label}
                                  href={item?.link}
                                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                                >
                                  <Icon
                                    size={18}
                                    className="flex-shrink-0 text-purple-500"
                                  />

                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact">
            <button className="relative cursor-pointer rounded-full px-5 py-2 text-sm">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
              <span className="absolute inset-[1px] rounded-full bg-white dark:bg-black"></span>
              <span className="relative z-10 text-gray-900 dark:text-white">
                Work With Us
              </span>
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label={
              resolvedTheme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-900 transition-all duration-300 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-gray-900 lg:hidden dark:text-white"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm transform bg-white/95 px-6 py-6 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden dark:bg-black/95 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="relative h-8 w-[110px]">
            <Image
              src={light_logo}
              alt="logo"
              fill
              sizes="140px"
              className="object-contain dark:hidden"
            />

            <Image
              src={dark_logo}
              alt="logo"
              fill
              sizes="140px"
              className="hidden object-contain dark:block"
            />
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={26} className="text-gray-900 dark:text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.path;
            const hasMegaMenu = item.megaMenu?.length;

            if (!hasMegaMenu) {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-base transition ${isActive ? "text-purple-500" : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.path}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label,
                    )
                  }
                  className="flex w-full items-center justify-between text-left text-base text-gray-700 dark:text-gray-300"
                >
                  <span>{item.label}</span>

                  <ChevronDown
                    size={18}
                    className={`transition-all duration-300 ${openDropdown === item.label ? "rotate-180 text-purple-500" : "rotate-0"}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === item.label ? "mt-4 max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-4 space-y-5 border-l border-gray-200 pl-4 dark:border-white/10">
                    {item.megaMenu.map((section) => (
                      <div key={section.title}>
                        <h4 className="mb-2 text-xs font-semibold text-purple-500 uppercase">
                          {section.title}
                        </h4>

                        <div className="space-y-3">
                          {section.items.map((subItem) => {
                            const Icon = subItem.icon;

                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.link}
                                onClick={() => setOpen(false)}
                                className="flex translate-x-0 items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400"
                              >
                                <Icon size={16} className="text-purple-500" />
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <button className="relative mt-6 cursor-pointer rounded-full px-5 py-3 text-sm">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
            <span className="absolute inset-[1px] rounded-full bg-white dark:bg-black"></span>
            <span className="relative z-10 text-gray-900 dark:text-white">
              Work With Us
            </span>
          </button>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label={
              resolvedTheme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-900 transition-all duration-300 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
