"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const caseStudies = [
  {
    id: "01",
    title:
      "Scaling Global IT Recruitment Operations for a Technology Enterprise",
    description:
      "A multinational technology enterprise partnered with E-Solutions to rapidly scale software engineering teams across North America, Europe, and Asia to support accelerated product expansion and digital transformation initiatives.",

    situation:
      "The client faced growing hiring pressure as operations expanded across multiple international markets. Internal recruitment teams struggled with lengthy hiring cycles, inconsistent technical screening standards, and limited visibility across distributed recruitment operations.",

    solution:
      "E-Solutions implemented a customized global RPO solution supported by regional recruitment specialists, AI-powered sourcing tools, multilingual candidate engagement strategies, and standardized hiring workflows.",

    team: [
      "Built a centralized global talent pipeline",
      "Implemented AI-assisted technical screening workflows",
      "Standardized interview workflows across time zones",
      "Improved recruitment visibility and candidate engagement",
      "Enabled scalable hiring operations across distributed teams",
    ],

    results: [
      "40% Reduction in Time-to-Hire",
      "Improved Candidate Quality & Retention",
      "Accelerated Global Project Ramp-Ups",
      "Enhanced Cross-Border Workforce Integration",
    ],

    conclusion:
      "This engagement enabled the client to scale engineering operations efficiently while reducing recruitment complexity and operational hiring burdens.",
  },

  {
    id: "02",
    title: "High-Volume Healthcare Recruitment for Workforce Expansion",

    description:
      "A leading healthcare organization partnered with E-Solutions to rapidly scale workforce operations across hospitals and clinical facilities during a period of accelerated expansion and rising patient demand.",

    situation:
      "The client faced critical staffing shortages across multiple healthcare locations while managing rapid operational growth. Internal recruitment teams struggled to support high-volume hiring requirements while maintaining hiring speed, compliance standards, and workforce quality.",

    solution:
      "E-Solutions deployed a dedicated healthcare recruitment team, streamlined sourcing strategies, automated candidate screening processes, and implemented workforce planning support to accelerate hiring outcomes.",

    team: [
      "Established a dedicated healthcare recruitment desk",
      "Implemented accelerated candidate sourcing workflows",
      "Improved workforce planning and forecasting",
      "Reduced administrative recruitment bottlenecks",
      "Enhanced candidate engagement and onboarding",
    ],

    results: [
      "35% Faster Healthcare Hiring Cycles",
      "Improved Workforce Availability",
      "Reduced Vacancy Rates Across Facilities",
      "Enhanced Compliance and Quality Standards",
    ],

    conclusion:
      "The partnership enabled the organization to meet workforce demands efficiently while maintaining patient care standards and operational continuity.",
  },
];

const CaseStudies = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="py-24">
      <SectionHeader
        badge="Client Success Stories"
        title="Transforming Workforce Challenges Into Business Success"
        description="From global talent acquisition to large-scale workforce management, see how our tailored solutions have helped enterprises achieve operational excellence and measurable outcomes."
      />
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#c61df2]/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-8 flex items-end gap-3">
                  <span className="bg-gradient-to-r from-[#c61df2] to-[#e12afb] bg-clip-text text-6xl font-bold text-transparent">
                    {item.id}
                  </span>

                  <span className="mb-2 text-lg text-white/40">case study</span>
                </div>

                <h3 className="mb-6 text-4xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mb-8 leading-8 text-white/65">
                  {item.description}
                </p>

                <h4 className="mb-3 text-xl font-semibold text-white">
                  Situation
                </h4>

                <p className="leading-8 text-white/65">{item.situation}</p>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded === item.id
                      ? "mt-8 max-h-[1500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/10 pt-8">
                    <div className="mb-8">
                      <h4 className="mb-3 text-xl font-semibold text-white">
                        Solution
                      </h4>

                      <p className="leading-8 text-white/65">{item.solution}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 text-xl font-semibold text-white">
                        Our Team
                      </h4>

                      <ul className="space-y-3">
                        {item.team.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-3 h-2 w-2 rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb]" />

                            <span className="text-white/65">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 text-xl font-semibold text-white">
                        Results
                      </h4>

                      <ul className="space-y-3">
                        {item.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <span className="mt-3 h-2 w-2 rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb]" />

                            <span className="text-white/65">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="leading-8 text-white/65">{item.conclusion}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(item.id)}
                  className="mt-8 inline-flex items-center gap-2 font-medium text-[#e12afb] transition-all duration-300 hover:gap-4"
                >
                  {expanded === item.id ? "Show Less" : "Read More"}

                  {expanded === item.id ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c61df2] to-[#e12afb] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
