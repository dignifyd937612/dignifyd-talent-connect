const kpis = [
  {
    kpi: "First submission",
    target: "≤36 hours",
    measured: "Time from mandate receipt to first candidate shortlist",
    matters: "You see candidates within two working days, not two weeks.",
  },
  {
    kpi: "Hit ratio",
    target: "≥1 in 2.5",
    measured: "Interviews divided by submissions",
    matters:
      "Your team's time is spent on qualified candidates, not filtering.",
  },
  {
    kpi: "Interview to offer",
    target: "≥40%",
    measured: "Offers divided by interviews",
    matters:
      "The people we send match the role. Fewer rounds, faster decisions.",
  },
  {
    kpi: "Offer to join",
    target: "≥85%",
    measured: "Joiners divided by offers",
    matters: "Candidates who accept actually show up.",
  },
  {
    kpi: "90-day retention",
    target: "≥92%",
    measured: "Active at day 90 divided by total joiners",
    matters: "The hire stays. No replacement cycle.",
  },
];

export default function WhatWeMeasure() {
  return (
    <section className="px-4 py-14 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8">
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            What we{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              measure
            </span>
          </h2>

          <p className="mt-4 max-w-[900px] text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
            Every engagement starts with agreed KPIs and a 30-day review cycle.
            These are not targets on a pitch deck — they are tracked metrics
            reviewed with clients monthly.
          </p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-purple-200 bg-white shadow-[0_20px_70px_rgba(168,85,247,0.08)] dark:border-purple-500/20 dark:bg-[#0d0c15] dark:shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-purple-100 bg-purple-50/50 dark:border-purple-500/20 dark:bg-white/[0.025]">
                  <th className="w-[17%] px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    KPI
                  </th>

                  <th className="w-[13%] px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Target
                  </th>

                  <th className="w-[30%] px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    How it's measured
                  </th>

                  <th className="w-[40%] px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Why it matters
                  </th>
                </tr>
              </thead>

              <tbody>
                {kpis.map((item, index) => (
                  <tr
                    key={item.kpi}
                    className={`group transition-colors duration-300 hover:bg-purple-50/60 dark:hover:bg-purple-500/[0.035] ${
                      index !== kpis.length - 1
                        ? "border-b border-gray-200 dark:border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-6 align-top">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {item.kpi}
                      </span>
                    </td>

                    <td className="px-6 py-6 align-top">
                      <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
                        {item.target}
                      </span>
                    </td>

                    <td className="px-6 py-6 align-top">
                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item.measured}
                      </p>
                    </td>

                    <td className="px-6 py-6 align-top">
                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {item.matters}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
