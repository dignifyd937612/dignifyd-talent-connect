"use client";

import SectionHeader from "../common/SectionHeader";
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const { register, handleSubmit, reset } = useForm();

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-lg text-purple-300">Get Started</p>
        <SectionHeader
          title={"Stay connected."}
          description={
            "Subscribe to our newsletter for the latest updates and exclusive offers."
          }
        />
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 rounded-full border border-white/10 bg-[#0b0615] p-2 backdrop-blur-xl md:flex-row md:items-center">
          <form onSubmit={handleSubmit()}>
            <input
              type="text"
              {...register("message")}
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-transparent px-4 py-3 text-center text-sm text-white placeholder-gray-500 outline-none md:text-left"
            />

            <button
              type="submit"
              className="mx-auto cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-sm text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition hover:opacity-90 md:mx-0 md:px-6 md:py-3"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
