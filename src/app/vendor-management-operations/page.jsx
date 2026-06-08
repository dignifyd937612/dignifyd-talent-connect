import FAQs from "@/components/common/FAQs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import Banner from "@/components/home/Banner";
import VendorManagementOperationsInfo from "@/components/vendor-management-operations/VendorManagementOperations";
import WhyVMO from "@/components/vendor-management-operations/WhyVMO";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { hrFAQs } from "@/data/faqs";

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
      <WorkforceChallenges />
      <WhyVMO />
      <FAQs
        FAQs={hrFAQs}
        badge={"Global Talent Sourcing FAQs"}
        title={
          "Streamline your global workforce operations & unlock new growth opportunities."
        }
      />
      <CTABanner />
    </>
  );
};

export default VendorManagementOperations;
