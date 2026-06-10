import BOTOverviewSection from "@/components/build-operate-transfer/BOTOverviewSection";
import BuildOperatorTransferInfo from "@/components/build-operate-transfer/BuildOperatorTransferInfo";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import Banner from "@/components/home/Banner";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { caseStudies } from "@/data/services/build-operate-transfer/caseStudies";
import { keyBenefits } from "@/data/services/build-operate-transfer/keyBenefits";
import { processPhases } from "@/data/services/build-operate-transfer/processphase";
import botImage from "../../assets/images/services/build-operate-transfer/build-operate-transfer_1.jpg";

const BuildOperatorTransfer = () => {
  return (
    <>
      <Banner
        badge="Build. Operate. Transfer"
        leading_text="Build. Operate. Transfer"
        supporting_text="Seamless Transition from Setup to Ownership"
        description="Our Build Operate Transfer (BOT) model provides a structured approach to establishing, managing, and seamlessly transitioning operations to your organization. We help businesses accelerate growth, reduce risk, and achieve operational excellence through a proven ownership transfer framework."
        btn_text="Connect With Us"
      />
      <BuildOperatorTransferInfo />

      <WorkforceChallenges
        data={keyBenefits}
        badge="Key Benefits"
        title="Key Benefits"
        highlightedText="Benefits"
        description="Our Build Operate Transfer (BOT) model minimizes risk, accelerates business outcomes, and ensures a smooth transition of operations, enabling organizations to scale confidently and efficiently."
      />
      <WorkforceChallenges
        data={processPhases}
        badge="Our Process"
        title="Our Process"
        highlightedText="Process"
        description="The BOT framework follows a structured three-phase approach to establish operations, optimize performance, and seamlessly transfer ownership to your organization."
      />
      <CaseStudies data={caseStudies} />
      <BOTOverviewSection
        image={botImage}
        badge="BOT"
        title="Why This Model Works for"
        description="Our BOT model is designed to provide a risk-free, efficient approach to new operations. You get the benefit of our expertise during setup and operation, ensuring a smooth, optimized transition to your team."
      />
      <CTABanner title={"Build. Operate. Transfer"} />
    </>
  );
};

export default BuildOperatorTransfer;
