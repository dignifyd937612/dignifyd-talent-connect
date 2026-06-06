"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/home/footer/dignifyd-logo.svg";
import { NAV_LINKS } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition ${open ? "bg-black" : "bg-black md:bg-black/70 md:backdrop-blur-xl"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
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

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;

            return (
              <div key={link.path} className="group relative">
                <Link
                  href={link.path}
                  className={`text-sm transition ${isActive ? "text-purple-500" : "text-gray-300 hover:text-white"}`}
                >
                  {link.label}
                </Link>

                {link.megaMenu && (
                  <div className="invisible absolute top-full left-1/2 z-50 mt-4 w-max -translate-x-1/2 rounded-xl border border-white/10 bg-black/95 p-8 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
                                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-300 transition hover:text-white"
                                >
                                  <Icon
                                    size={18}
                                    className="text-purple-500 flex-shrink-0"
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

        <div className="hidden lg:block">
          <Link href="/contact">
          <button className="relative rounded-full px-5 py-2 text-sm text-white cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
            <span className="absolute inset-[1px] rounded-full bg-black"></span>
            <span className="relative z-10">Work With Us</span>
          </button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
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
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm transform bg-black/95 px-6 py-6 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Image
            src={logo}
            alt="logo"
            width={110}
            height={30}
            className="object-contain"
          />

          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={26} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-base transition ${isActive ? "text-purple-500" : "text-gray-300 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}

          <button className="bg-red relative mt-6 cursor-pointer rounded-full px-5 py-3 text-sm text-white">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
            <span className="absolute inset-[1px] rounded-full bg-black"></span>
            <span className="relative z-10">Work With Us</span>
          </button>
        </div>
      </div>
    </header>
  );
}
