import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HelpTopicCard = ({ icon: Icon, title, description, href }) => {
  return (
    <Link
      href={href}
      className="group flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(147,51,234,0.12)] dark:border-white/10 dark:bg-[#0E0E12] dark:hover:border-[#8B5CF6]/50 dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
    >
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 dark:bg-[#181320]">
          <Icon
            size={30}
            strokeWidth={1.8}
            className="text-purple-600 dark:text-[#B14EFF]"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 max-w-[250px] text-sm leading-6 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-purple-50 transition-all duration-300 group-hover:bg-purple-600 dark:border-[#7C3AED]/40 dark:bg-[#15121D] dark:group-hover:bg-[#A855F7]">
        <ArrowRight
          size={18}
          className="text-purple-600 group-hover:text-white dark:text-white"
        />
      </div>
    </Link>
  );
};

export default HelpTopicCard;
