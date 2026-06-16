"use client";

import { useForm } from "react-hook-form";
import SectionHeader from "../common/SectionHeader";
import styles from "./Contact.module.scss";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <SectionHeader
          title={"Let’s Connect"}
          description={
            "No delays, no vague replies — we respond within 24 hours to schedule your personalized discovery call."
          }
        />
        <div className={`rounded-3xl p-8 ${styles.formCard}`}>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-2 block text-xs text-gray-700 dark:text-gray-300">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className={styles.input}
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
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-700 dark:text-gray-300">
                Email*
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-700 dark:text-gray-300">
                Mobile Number*
              </label>

              <input
                type="text"
                placeholder="Your Number"
                inputMode="numeric"
                maxLength={10}
                className={styles.input}
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
              />

              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-700 dark:text-gray-300">
                Choose Types of Services
              </label>

              <div className={styles.selectWrapper}>
                <select
                  className={styles.select}
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  aria-label="services"
                >
                  <option>Type of service</option>
                  <option>Global Recruitment</option>
                  <option>RPO Solutions</option>
                  <option>Employer Branding</option>
                  <option>HR Consulting</option>
                  <option>Onboarding Support</option>
                </select>

                <span className={styles.arrow}></span>
              </div>

              {errors.service && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-700 dark:text-gray-300">
                Message
              </label>

              <textarea
                placeholder="Your Message"
                className={`${styles.input} ${styles.textarea}`}
                {...register("message")}
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-full py-3 text-sm font-medium text-white ${styles.button}`}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
