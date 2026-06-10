import GCCServicesInfo from "@/components/gcc-services/GCCServicesInfo";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import Banner from "@/components/home/Banner";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { caseStudies } from "@/data/services/gcc-services/caseStudies";
import { keyBenefits } from "@/data/services/gcc-services/keyBenefits";
import { processPhases } from "@/data/services/gcc-services/processPhases";

const GCCServices = () => {
  return (
    <>
      <Banner
        badge="Global Capability Centers"
        leading_text="GCC Services"
        supporting_text="for Global Business Support"
        description="Establish, scale, and optimize Global Capability Centers with access to skilled talent, flexible delivery models, and operational excellence that drives long-term business value."
        btn_text="Connect With Us"
      />
      <GCCServicesInfo />
      <WorkforceChallenges
        data={keyBenefits}
        badge="Key Benefits"
        title="Key Benefits"
        highlightedText="Benefits"
        description="Leverage customized engagement models, global expertise, and scalable delivery capabilities that empower organizations to improve efficiency, optimize costs, and drive sustainable business growth."
      />

      <WorkforceChallenges
        data={processPhases}
        badge="Our Process"
        title="Our Process"
        highlightedText="Process"
        description="From initial assessment and resource planning to execution and continuous optimization, our proven framework ensures transparency, efficiency, and measurable business outcomes at every stage."
      />
      <CaseStudies data={caseStudies} />
      <CTABanner title={"GCC Services"} />
    </>
  );
};

export default GCCServices;
