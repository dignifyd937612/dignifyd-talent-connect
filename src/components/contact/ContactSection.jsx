"use client";
import Image from "next/image";
import contactImg from "../../assets/images/contactUs/contact.png";
import SectionHeader from "../common/SectionHeader";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const { register } = useForm();
  return (
    <section className="w-full bg-black py-24">
      <SectionHeader
        badge={"Driven By Innovation"}
        title={"Let’s Build Something Great Together"}
      />
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[20px] border border-white/10 bg-[#0b0615] p-6 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="h-full w-full">
              <div className="relative  w-full overflow-hidden rounded-[16px] md:h-[420px]">
                <Image
                  src={contactImg}
                  alt="team"
                  fill
                  priority
                  
                 
                  className="object-fill"
                />
              </div>
            </div>

            <div>
              <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can only contain letters",
                      },
                    })}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(
                        /[^A-Za-z\s]/g,
                        "",
                      );
                    }}
                    placeholder="Name"
                    className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-gray-400">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: "Phone number required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid 10 digit number",
                      },
                    })}
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                    }}
                    className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-1 block text-xs text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter valid email",
                    },
                  })}
                  className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40"
                />
              </div>

              <div className="mb-6">
                <label className="mb-1 block text-xs text-gray-400">
                  Messages
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your messages"
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/40"
                />
              </div>

              <button className="cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 text-sm text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
