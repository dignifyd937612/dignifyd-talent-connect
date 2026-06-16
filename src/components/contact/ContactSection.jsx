"use client";

import Image from "next/image";
import contactImg from "../../assets/images/contactUs/contact.png";
import SectionHeader from "../common/SectionHeader";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, Send } from "lucide-react";

export default function ContactSection() {
  const { register } = useForm();

  return (
    <section className="w-full bg-white py-28 dark:bg-black">
      <SectionHeader
        badge={"Driven By Innovation"}
        title={"Let’s Build Something Great Together"}
      />

      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-purple-200/60 bg-gradient-to-br from-white via-[#fcfaff] to-[#f5edff] p-6 shadow-[0_30px_80px_rgba(168,85,247,0.12)] md:p-10 dark:border-white/10 dark:bg-gradient-to-br dark:from-[#140a24] dark:via-[#120a1f] dark:to-[#0b0615] dark:shadow-none">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px] dark:hidden"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="relative overflow-hidden rounded-[24px] md:h-[420px]">
                <Image
                  src={contactImg}
                  alt="contact"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-400">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                    />

                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Name"
                      className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-11 text-sm text-gray-900 shadow-[0_8px_25px_rgba(168,85,247,0.08)] placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#161616] dark:text-white dark:shadow-none dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-400">
                    Mobile Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                    />

                    <input
                      type="text"
                      placeholder="Phone Number"
                      {...register("phone")}
                      className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-11 text-sm text-gray-900 shadow-[0_8px_25px_rgba(168,85,247,0.08)] placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#161616] dark:text-white dark:shadow-none dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-400">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                    className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-11 text-sm text-gray-900 shadow-[0_8px_25px_rgba(168,85,247,0.08)] placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#161616] dark:text-white dark:shadow-none dark:placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-400">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Type your message"
                  className="w-full resize-none rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-[0_8px_25px_rgba(168,85,247,0.08)] placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#161616] dark:text-white dark:shadow-none dark:placeholder:text-gray-500"
                />
              </div>

              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-medium text-white shadow-[0_15px_35px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(168,85,247,0.45)]">
                <Send size={16} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
