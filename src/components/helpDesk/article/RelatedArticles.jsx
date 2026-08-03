import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RelatedArticles = ({ relatedArticles }) => {
  return (
    <section className="mt-24 border-t border-gray-200 pt-14 dark:border-white/10">
      <h3 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">
        Related Articles
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles?.map((article, index) => (
          <Link
            key={index}
            href={"#"}
            className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-400 dark:border-white/10 dark:bg-[#0E0E12] dark:hover:border-[#B14EFF]"
          >
            <h4 className="font-semibold text-gray-900 transition group-hover:text-purple-600 dark:text-white dark:group-hover:text-[#B14EFF]">
              {article}
            </h4>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-[#B14EFF]">
              Read Article
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
