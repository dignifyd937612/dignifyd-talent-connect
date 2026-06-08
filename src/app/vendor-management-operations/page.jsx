import FAQs from "@/components/common/FAQs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import Banner from "@/components/home/Banner";
import VendorManagementOperationsInfo from "@/components/vendor-management-operations/VendorManagementOperations";
import WhyVMO from "@/components/vendor-management-operations/WhyVMO";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { hrFAQs } from "@/data/faqs";
import { challenges } from "@/data/services/vendor-management-operations/challenges";

const VendorManagementOperations = () => {
  return (
    <>
      <Banner
        badge={"Create Your Impact"}
        leading_text={"Global Talent Sourcing & Payrolling"}
        supporting_text={"Work with Innovation"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Get Started Now"}
      />
      <VendorManagementOperationsInfo />
      <WorkforceChallenges
        data={challenges}
        badge="Enterprise Workforce"
        title="Enterprise Workforce Challenges Are Growing Increasingly Complex"
        highlightedText="Enterprise Workforce"
        description="As organizations expand across regions and suppliers, managing workforce operations becomes increasingly challenging. Limited visibility, fragmented vendor networks, and compliance risks can hinder efficiency, scalability, and business growth."
      />
      <WhyVMO />
      <FAQs
        FAQs={hrFAQs}
        badge={"Global Talent Sourcing FAQs"}
        title={
          "Streamline your global workforce operations & unlock new growth opportunities."
        }
      />
      <CTABanner title={"Vendor Management Operations"} />
    </>
  );
};

export default VendorManagementOperations;
