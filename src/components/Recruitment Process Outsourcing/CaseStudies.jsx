"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const CaseStudies = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="container mx-auto">
        <SectionHeader
          badge="Client Success Stories"
          title="Transforming Workforce Challenges Into Business Success"
          description="From global talent acquisition to large-scale workforce management, see how our tailored solutions have helped enterprises achieve operational excellence and measurable outcomes."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[32px] border border-purple-200/70 bg-gradient-to-br from-white via-[#fcfaff] to-[#f5efff] p-10 shadow-[0_20px_60px_rgba(168,85,247,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_25px_80px_rgba(168,85,247,0.15)] dark:border-white/10 dark:bg-gradient-to-br dark:from-[#140a24] dark:via-[#120a1f] dark:to-[#0b0615] dark:hover:border-[#c61df2]/40 dark:hover:shadow-[0_0_40px_rgba(198,29,242,0.15)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.08),transparent_60%)] dark:hidden" />

              <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:block" />

              <div className="relative z-10">
                <div className="mb-8 flex items-end gap-3">
                  <span className="bg-gradient-to-r from-[#c61df2] to-[#e12afb] bg-clip-text text-6xl font-bold text-transparent">
                    {item.id}
                  </span>

                  <span className="mb-2 text-lg text-gray-400 dark:text-white/40">
                    case study
                  </span>
                </div>

                <h3 className="mb-6 text-4xl leading-tight font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mb-8 leading-8 text-gray-600 dark:text-white/65">
                  {item.description}
                </p>

                <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Situation
                </h4>

                <p className="leading-8 text-gray-600 dark:text-white/65">
                  {item.situation}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded === item.id ? "mt-8 max-h-[1500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="border-t border-purple-200/70 pt-8 dark:border-white/10">
                    <div className="mb-8">
                      <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Solution
                      </h4>

                      <p className="leading-8 text-gray-600 dark:text-white/65">
                        {item.solution}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                        Our Team
                      </h4>

                      <ul className="space-y-3">
                        {item.team.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-3 h-2 w-2 rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb]" />

                            <span className="text-gray-600 dark:text-white/65">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                        Results
                      </h4>

                      <ul className="space-y-3">
                        {item.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <span className="mt-3 h-2 w-2 rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb]" />

                            <span className="text-gray-600 dark:text-white/65">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="leading-8 text-gray-600 dark:text-white/65">
                      {item.conclusion}
                    </p>
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
