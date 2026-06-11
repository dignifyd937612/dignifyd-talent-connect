import FAQs from "@/components/common/FAQs";
import WhySection from "@/components/common/WhySection";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import Banner from "@/components/home/Banner";
import VendorManagementOperationsInfo from "@/components/vendor-management-operations/VendorManagementOperations";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { hrFAQs } from "@/data/faqs";
import { challenges } from "@/data/services/vendor-management-operations/challenges";
import whyImg from "../../assets/images/services/vendor-management-operations/whyVMO.jpg";
import { features } from "@/data/services/vendor-management-operations/features";

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
      <WhySection
        badge={"Why VMO"}
        title={"Redefining Enterprise Workforce Vendor Management"}
        description={
          "Gain complete control over your contingent workforce ecosystem with centralized visibility, supplier governance, compliance oversight, and operational excellence."
        }
        features={features}
        whyImg={whyImg}
      />
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
