import { Check } from "lucide-react";
import ServiceShowcaseSection from "../services/common-services/ServiceShowcaseSection";
const features = [
  "Global Workforce Coordination",
  "Centralized Vendor Governance",
  "Contingent Workforce Visibility",
  "Scalable Workforce Operations",
];
const VendorManagementOperationsInfo = () => {
  return (
    <>
      <ServiceShowcaseSection
        heading={"Optimizing Workforce Ecosystems"}
        supportingHeading={"Through Strategic Governance"}
      >
        <div className="max-w-3xl">
          <p className="mb-7 text-lg leading-[1.8] text-black/70 dark:text-white/60">
            E-Solutions helps enterprises optimize contingent workforce
            ecosystems through centralized vendor governance, workforce
            visibility, supplier performance management, and scalable workforce
            operations across global business environments.
          </p>

          <ul className="mb-10 space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c61df2] bg-[#c61df2]/10 text-[#e12afb] shadow-[0_0_15px_rgba(198,29,242,0.25)]">
                  <Check size={16} strokeWidth={3} />
                </div>

                <span className="text-[1.2rem] font-medium text-gray-700 dark:text-white/80">
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

export default VendorManagementOperationsInfo;
