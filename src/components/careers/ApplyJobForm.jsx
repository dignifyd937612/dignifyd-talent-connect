"use client";

import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import {
  Upload,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function ApplyJobForm() {
  const [fileName, setFileName] = useState("No file chosen");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFileName(acceptedFiles[0].name);
      }
    },
    multiple: false,
  });

  return (
    <section className="w-full bg-white py-16 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <SectionHeader badge={"Apply Now"} title={"Apply For This Job"} />

        <div className="relative overflow-hidden rounded-[32px] border border-purple-200 bg-gradient-to-br from-white via-[#fcfaff] to-[#f5edff] p-8 shadow-[0_25px_80px_rgba(168,85,247,0.12)] md:p-12 dark:border-purple-500/10 dark:bg-[#0b0615] dark:shadow-[0_0_40px_rgba(168,85,247,0.08)] dark:border-purple-500/10 dark:bg-[#0b0615] dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent dark:shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_35%)]" />

          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name*
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-12 text-gray-900 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-[#140a24] dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address*
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-12 text-gray-900 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-[#140a24] dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mobile Number*
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-12 text-gray-900 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-[#140a24] dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Title*
                </label>

                <div className="relative">
                  <Briefcase
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-purple-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full rounded-xl border border-purple-200 bg-white py-3 pr-4 pl-12 text-gray-900 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-[#140a24] dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Message
              </label>

              <div className="relative">
                <textarea
                  rows={5}
                  placeholder="Tell us about your experience, skills, or anything you'd like us to know..."
                  className="w-full resize-none rounded-xl border border-purple-200 bg-white py-4 pr-4 pl-6 text-gray-900 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-[#140a24] dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Resume Upload
                </label>

                <div
                  {...getRootProps()}
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${isDragActive ? "border-purple-500 bg-purple-500/10" : "border-purple-200 bg-white dark:border-white/10 dark:bg-[#140a24]"}`}
                >
                  <input {...getInputProps()} />

                  <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white">
                    <Upload size={14} />
                    Upload
                  </div>

                  <span className="max-w-[220px] truncate text-sm text-gray-600 dark:text-gray-400">
                    {fileName}
                  </span>
                </div>

                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Upload your resume in PDF, DOC, DOCX, JPG, or PNG format.
                </p>
              </div>

              <button className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
