"use client";

import { CalendarDays, Clock3, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ArticleHeader = ({ article }) => {
  const router = useRouter();

  return (
    <header className="border-b border-gray-200 pb-10 dark:border-white/10">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-[#251330] dark:text-[#B14EFF]">
          {article?.category}
        </span>

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#B14EFF] hover:text-[#B14EFF] dark:border-white/10 dark:bg-[#111111] dark:text-gray-300 dark:hover:border-[#B14EFF] dark:hover:text-[#B14EFF]"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white lg:text-5xl">
        {article?.title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
        {article?.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          {article?.publishDate}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          {article?.readTime}
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
