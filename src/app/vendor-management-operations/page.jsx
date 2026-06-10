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
        badge="Enterprise Workforce Solutions"
        leading_text="Vendor Management"
        supporting_text="& Operations"
        description="Gain greater control over your workforce ecosystem with centralized vendor governance, real-time visibility, compliance management, and scalable operational support."
        btn_text="Connect With Us"
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
