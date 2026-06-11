import WhySection from "@/components/common/WhySection";
import Banner from "@/components/home/Banner";
import ManagedServiceProviderInfo from "@/components/managed-service-provider/ManagedServiceProviderInfo";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { features } from "@/data/services/managed-service-provider/features";
import { smarterGovernance } from "@/data/services/managed-service-provider/smarterGovernance";
import whyImg from "@/assets/images/services/managed-service-provider/whyImg.jpg";
import ProcessSection from "@/components/global-talent-sourcing-payrolling/ProcessSection";
import { processSteps } from "@/data/services/managed-service-provider/processSteps";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import { caseStudies } from "@/data/services/managed-service-provider/caseStudies";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";

const ManagedServiceProvider = () => {
  return (
    <>
      <Banner
        badge="Workforce Management"
        leading_text="Managed Service Provider"
        supporting_text="Scale Workforce Programs Through Smarter MSP Operations"
        description="Gain complete visibility and control over your contingent workforce with streamlined supplier management, compliance coordination, workforce analytics, and scalable MSP solutions tailored to enterprise needs."
        btn_text="Connect With Us"
      />
      <ManagedServiceProviderInfo />
      <WorkforceChallenges
        data={smarterGovernance}
        badge="Workforce Challenges"
        title="Smarter Governance for"
        highlightedText="Modern Contingent Workforce Programs"
        description="Organizations face increasing challenges in workforce visibility, supplier governance, compliance management, and cost control. A modern MSP approach helps centralize operations and improve workforce performance."
      />
      <WhySection
        badge={"Why Modern MSP"}
        title={"Why Enterprises Need a Smarter MSP Strategy"}
        description={
          "Gain complete control over your contingent workforce ecosystem with centralized visibility, supplier governance, compliance oversight, and operational excellence."
        }
        features={features}
        whyImg={whyImg}
      />
      <ProcessSection
        data={processSteps}
        heading={"Our Enterprise"}
        supportingHeading={"MSP Delivery Approach"}
      />
      <CaseStudies data={caseStudies} />
      <CTABanner title={"Managed Service Provider"} />
    </>
  );
};
export default ManagedServiceProvider;
