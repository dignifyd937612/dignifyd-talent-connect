import { Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const JobCard = ({ title, description, type, location }) => {
  return (
    <div className="group relative flex h-full w-full max-w-xl flex-col overflow-hidden rounded-[28px] border border-purple-200/60 bg-gradient-to-br from-white via-[#faf7ff] to-[#f2e8ff] p-8 shadow-[0_20px_60px_rgba(168,85,247,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_25px_80px_rgba(168,85,247,0.18)] md:p-10 dark:border-white/10 dark:bg-gradient-to-br dark:from-[#140a24] dark:via-[#120a1f] dark:to-[#0b0615] dark:shadow-none dark:hover:border-purple-500/30 dark:hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_60%)] dark:hidden" />

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100 dark:block" />

      <div className="relative z-10 flex h-full flex-col">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">
            {title}
          </h3>

          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400">
            {description}
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock
                size={16}
                className="text-purple-500 dark:text-purple-400"
              />
              <span>{type}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={16}
                className="text-purple-500 dark:text-purple-400"
              />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <Link
          href="/careers/1"
          className="mt-auto inline-flex self-start items-center gap-2 rounded-full border border-purple-300 bg-white/80 px-6 py-3 text-sm font-medium text-purple-700 shadow-[0_8px_25px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white hover:shadow-[0_12px_35px_rgba(168,85,247,0.25)] dark:border-purple-500/40 dark:bg-transparent dark:text-gray-300 dark:hover:border-purple-400 dark:hover:bg-purple-500/10 dark:hover:text-white"
        >
          Apply Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default memo(JobCard);
