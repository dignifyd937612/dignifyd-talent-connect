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
          <p className="mb-8 text-lg leading-[1.8] text-[#a99a9a]/80">
            E-Solutions helps enterprises optimize contingent workforce
            ecosystems through centralized vendor governance, workforce
            visibility, supplier performance management, and scalable workforce
            operations across global business environments.
          </p>

          <ul className="space-y-4 mb-10">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#2563ff] text-[#2563ff]">
                  <Check size={16} strokeWidth={3} />
                </div>

                <span className="text-[1.4rem] font-medium text-[#a99a9a]/80">
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
