import { tabs } from "@/data/navigation";

const ServicesTabs = ({ activeService, handleFunc, isDetail = true }) => {
  return (
    <div className="mb-10 flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap">
        {tabs.map((tab, i) => {
          const isActive = activeService?.slug === tab.slug;

          return (
            <button
              key={i}
              onClick={() =>
                isDetail ? handleFunc(`/services/${tab.slug}`) : handleFunc(i)
              }
              className={`relative cursor-pointer overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${isActive ? ` bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white shadow-[0_10px_30px_rgba(168,85,247,0.35)] dark:shadow-[0_0_25px_rgba(168,85,247,0.45)] ` : ` border border-purple-100 bg-white text-gray-700 shadow-[0_8px_20px_rgba(168,85,247,0.08)] hover:border-purple-200 hover:text-purple-600 hover:shadow-[0_12px_25px_rgba(168,85,247,0.12)] dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-purple-500/30 dark:hover:bg-white/[0.05] dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] `}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesTabs;
