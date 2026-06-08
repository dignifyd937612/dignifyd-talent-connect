import { Check } from "lucide-react";
import ServiceShowcaseSection from "../services/common-services/ServiceShowcaseSection";
const features = [
  "Talent Shortages",
  "Slow Hiring Cycles",
  "Workforce Scalability",
  "Compliance Complexity",
];
const RecruitmentProcess = () => {
  return (
    <>
      <ServiceShowcaseSection
        heading={"Modern Recruitment Challenges"}
        supportingHeading={"Demand Smarter Hiring Strategies"}
      >
        <div className="max-w-3xl">
          <p className="mb-8 text-lg leading-[1.8] text-[#a99a9a]/80">
            Organizations today face increasing hiring pressure driven by talent
            shortages, recruitment inefficiencies, scalability demands,
            compliance complexity, and inconsistent candidate quality - making
            modern, agile, and technology-driven recruitment operations
            essential for sustainable workforce growth.
          </p>

          <ul className="space-y-4 mb-10">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c61df2] bg-[#c61df2]/10 text-[#e12afb] shadow-[0_0_15px_rgba(198,29,242,0.25)]">
                  <Check size={16} strokeWidth={3} />
                </div>

                <span className="text-[1.4rem] font-medium text-white/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ServiceShowcaseSection>
    </>
  );
};

export default RecruitmentProcess;
