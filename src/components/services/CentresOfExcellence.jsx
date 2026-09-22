import Image from "next/image";
import talent_intelligence from "../../assets/images/services/talent-intelligence.webp";
import assessment_sciences from "../../assets/images/services/assessment_sciences.webp";
import gcc_build_operate from "../../assets/images/services/gcc_build_operate.webp";
import executive_search from "../../assets/images/services/executive_search.webp";
const CentresOfExcellence = () => {
  const centres = [
    {
      title: "Talent Intelligence",
      label: "MARKET INSIGHTS",
      image: talent_intelligence,
      items: [
        "Market maps across 35+ countries",
        "Skills taxonomies & benchmarking",
        "Compensation intelligence",
        "Location analytics for GCC",
      ],
    },
    {
      title: "Assessment Sciences",
      label: "STRUCTURED EVAL",
      image: assessment_sciences,
      items: [
        "Proctored technical assessments",
        "STAR methodology interviews",
        "Behavioural rubrics & culture-fit",
        "Audit trails for compliance",
      ],
    },
    {
      title: "GCC Build & Operate",
      label: "HUB DEVELOPMENT",
      image: gcc_build_operate,
      items: [
        "Location strategy & market entry",
        "BOT playbooks",
        "Capability hub design",
        "Ongoing operations & talent mgmt",
      ],
    },
    {
      title: "Executive Search",
      label: "LEADERSHIP & CXO",
      image: executive_search,
      items: [
        "Confidential pipeline development",
        "Board & C-suite assessment",
        "Succession planning & mapping",
        "Global reach, local expertise",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-purple-600 uppercase dark:text-purple-400">
            Specialist Functions
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Centres of Excellence
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400">
            Specialised capability hubs with dedicated specialists and defined
            delivery standards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {centres.map((centre) => (
            <div
              key={centre.title}
              className="group relative min-h-[270px] overflow-hidden rounded-xl border border-purple-200 bg-gray-50/70 p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-50/40 dark:border-purple-500/20 dark:bg-[#111017] dark:hover:border-purple-500/40 dark:hover:bg-purple-500/[0.035]"
            >
              <div className="pointer-events-none absolute -right-[70px] -bottom-[70px] h-[250px] w-[250px] overflow-hidden rounded-full opacity-90 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={centre.image}
                  alt={centre.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                    {centre.title}
                  </h3>

                  <span className="shrink-0 pt-0.5 text-[10px] font-medium tracking-[0.16em] text-purple-600 uppercase dark:text-purple-400">
                    {centre.label}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {centre.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-5 text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 transition-transform duration-300 group-hover:scale-125" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentresOfExcellence;
