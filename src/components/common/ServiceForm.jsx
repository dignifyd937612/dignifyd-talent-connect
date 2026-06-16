"use client";

import Link from "next/link";
import styles from "../services/Services.module.scss";
import { useForm } from "react-hook-form";

const ServiceForm = () => {
  const { register } = useForm();

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-purple-200/70 bg-gradient-to-br from-white via-[#fcfaff] to-[#f5edff] p-4 shadow-[0_25px_80px_rgba(168,85,247,0.12)] md:p-8 dark:border-white/10 dark:bg-[#0b0615] dark:bg-none dark:shadow-[0_0_40px_rgba(168,85,247,0.08)]">
      {/* Light Mode Decorative Glow */}
      <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-purple-300/20 blur-3xl dark:hidden" />

      <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-pink-300/20 blur-3xl dark:hidden" />

      <div className="relative">
        <h3 className="mb-3 text-3xl font-semibold text-gray-900 dark:text-white">
          Say, Hello !
        </h3>

        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Tell us a bit about yourself, then schedule time with one of our
          experts who will show you exactly how you can power up your results.
          <br />
          <span className="mt-4 block text-gray-500">
            <Link
              href="#"
              className="font-medium text-gray-900 transition duration-200 hover:text-purple-600 hover:underline dark:text-white"
            >
              Click here to see if you're a good fit.
            </Link>
          </span>
        </p>

        <form className="space-y-6 rounded-3xl border border-purple-200/60 bg-white/90 p-8 shadow-[0_15px_50px_rgba(168,85,247,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0a18] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-400">
              First Name*
            </label>

            <input
              type="text"
              placeholder="John Appleseed"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters",
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
              }}
              className="mt-2 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#151020] dark:text-white dark:placeholder-gray-500 dark:focus:ring-0"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-400">
              Email ID*
            </label>

            <input
              type="email"
              placeholder="JohnAppleseed@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter valid email",
                },
              })}
              className="mt-2 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none dark:border-white/10 dark:bg-[#151020] dark:text-white dark:placeholder-gray-500 dark:focus:ring-0"
            />
          </div>

          <div>
            <label
              htmlFor="serviceType"
              className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              Choose Types of Services
            </label>

            <div className={styles.selectWrapper}>
              <select
                id="serviceType"
                className={styles.select}
                defaultValue=""
                {...register("serviceType")}
              >
                <option value="" disabled hidden>
                  Type of service
                </option>

                <option value="Global Recruitment">Global Recruitment</option>

                <option value="RPO Solutions">RPO Solutions</option>

                <option value="Employer Branding">Employer Branding</option>

                <option value="HR Consulting">HR Consulting</option>

                <option value="Onboarding Support">Onboarding Support</option>
              </select>

              <span className={styles.arrow}></span>
            </div>
          </div>

          <div className="flex items-start">
            <input
              id="link-checkbox"
              type="checkbox"
              className="mt-1 h-4 w-4 cursor-pointer accent-[#f6339a]"
            />

            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm text-gray-600 select-none dark:text-gray-500"
            >
              I agree to Fundamento using my contact information for marketing
              purposes.
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-medium text-white shadow-[0_15px_35px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(168,85,247,0.45)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
