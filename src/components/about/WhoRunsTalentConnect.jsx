import SectionHeader from "../common/SectionHeader";

const leadership = {
  founder: {
    initials: "PA",
    name: "Pradeep Ahuja",
    role: "Group Chairman",
    description:
      "Founder of SHOBHNEEK Glazing Systems, 1997. Chairman of the Dignifyd Group. Three decades building businesses across construction, technology and talent.",
  },

  team: [
    {
      initials: "PA",
      name: "Paavan Ahuja",
      role: "CEO, Dignifyd Talent Connect",
      description:
        "Founded Dignifyd Digital in 2018 and launched Dignifyd Talent Connect in 2023 as the group's dedicated talent acquisition arm. Leads the overall direction of the group across its nine entities.",
    },
    {
      initials: "PA",
      name: "Punita Ahuja",
      role: "COO & Managing Director",
      description:
        "23 years in talent and workforce operations. Leads strategy, delivery and client partnerships at Dignifyd Talent Connect.",
    },
    {
      initials: "YT",
      name: "Yogesh Tyagi",
      role: "VP, Global Recruitment Ops",
      description:
        "13 years in operations across Encore Capital, Accenture, Agilent and Genpact. Leads recruitment delivery, workflows and performance tracking.",
    },
  ],
};

function Avatar({ initials, large = false }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 font-bold text-purple-500 dark:from-purple-500/50 dark:to-pink-500/40 dark:text-purple-400 ${large ? "h-24 w-24 text-2xl" : "h-20 w-20 text-lg"}`}
    >
      {initials}
    </div>
  );
}

export default function WhoRunsTalentConnect() {
  return (
    <section className="py-12 md:px-6 lg:px-8">
      <SectionHeader badge={"Leadership"} title={"Who runs Talent Connect"} />

      <div className="mx-auto max-w-[1240px]">
        {/* Group Chairman */}
        <div className="rounded-[20px] border border-purple-200 bg-white px-7 py-6 shadow-sm transition-all duration-300 hover:border-purple-400 md:px-9 md:py-7 dark:border-purple-500/25 dark:bg-[#0d0c17] dark:shadow-none">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Avatar initials={leadership.founder.initials} large />

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                {leadership.founder.name}
              </h3>

              <p className="mt-1 text-base font-semibold text-purple-600 dark:text-purple-400">
                {leadership.founder.role}
              </p>

              <p className="mt-4 max-w-[1000px] text-sm leading-6 text-gray-600 md:text-base dark:text-gray-400">
                {leadership.founder.description}
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leadership.team.map((person) => (
            <div
              key={person.name}
              className="rounded-[18px] border border-gray-200 bg-white px-6 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-md dark:border-purple-500/15 dark:bg-[#111017] dark:shadow-none dark:hover:border-purple-500/40"
            >
              <div className="flex justify-center">
                <Avatar initials={person.initials} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {person.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-purple-600 dark:text-purple-400">
                {person.role}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
