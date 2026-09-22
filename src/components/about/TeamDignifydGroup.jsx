const groupCompanies = [
  {
    name: "Talent Connect",
    description: "Talent acquisition",
    active: true,
  },
  {
    name: "Dignifyd Tech",
    description: "Software & platforms",
  },
  {
    name: "Dignifyd Digital",
    description: "Digital & brand",
  },
  {
    name: "Consulting Crew Fintech",
    description: "Fintech consulting",
  },
  {
    name: "Enterprise Solutions",
    description: "ERP, cloud, infra",
  },
  {
    name: "Dignifyd Advisory",
    description: "Strategy consulting",
  },
  {
    name: "Data Labs",
    description: "Data & AI",
  },
  {
    name: "Dignifyd Learning",
    description: "Capability building",
  },
  {
    name: "Dignifyd Ventures",
    description: "Innovation & investment",
  },
];

export default function GroupSection() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 lg:px-14 lg:py-20 dark:bg-black">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[1000px]">
          <p className="text-sm font-medium tracking-[0.22em] text-purple-600 uppercase dark:text-purple-400">
            DIGNIFYD GROUP
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Part of a larger group
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-600 md:text-lg md:leading-9 dark:text-gray-400">
            Dignifyd Talent Connect is one of nine companies in the Dignifyd
            Group. When you work with Talent Connect, you get a recruitment team
            backed by the capabilities of the full group.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groupCompanies.map((company) => (
            <div
              key={company.name}
              className={`group rounded-2xl border px-7 py-6 transition-all duration-300 ${company.active ? ` border-purple-300 bg-purple-50 hover:border-purple-500 hover:bg-purple-100/70 dark:border-purple-500/60 dark:bg-purple-500/[0.08] dark:hover:border-purple-400 ` : ` border-gray-200 bg-gray-50/70 hover:border-purple-300 hover:bg-purple-50/70 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-purple-500/30 dark:hover:bg-purple-500/[0.04] `}`}
            >
              <h3
                className={`text-lg font-bold ${company.active ? "text-purple-600 dark:text-purple-400" : "text-gray-900 dark:text-white"}`}
              >
                {company.name}
              </h3>

              <p className="mt-3 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-400">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
