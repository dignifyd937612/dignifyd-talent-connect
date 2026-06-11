import FAQs from "@/components/common/FAQs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import ProcessSection from "@/components/global-talent-sourcing-payrolling/ProcessSection";
import GlobalTalentPayrollingSection from "@/components/global-talent-sourcing-payrolling/GlobalTalentPayrollingSection";
import Banner from "@/components/home/Banner";
import Stats from "@/components/home/Stats";
import { hrFAQs } from "@/data/faqs";
import { processSteps } from "@/data/services/global-talent-sourcing-payrolling/processSteps";

const GlobalTalentSourcingPayroll = () => {
  return (
    <>
      <Banner
        badge="Global Workforce Solutions"
        leading_text="Global Talent Sourcing & Payrolling"
        supporting_text="Hire Globally. Manage Seamlessly."
        description="Simplify international hiring, payroll administration, and workforce compliance with scalable solutions designed for growing global organizations."
        btn_text="Connect With Us"
      />
      <GlobalTalentPayrollingSection />
      <Stats />
      <ProcessSection
        data={processSteps}
        heading={"Operational Advantages"}
        supportingHeading={"That Strengthen Workforce Programs"}
      />
      <FAQs
        FAQs={hrFAQs}
        badge={"Global Talent Sourcing FAQs"}
        title={
          "Streamline your global workforce operations & unlock new growth opportunities."
        }
      />
      <CTABanner title={"Global Talent Sourcing & Payrolling"} />
    </>
  );
};

export default GlobalTalentSourcingPayroll;
