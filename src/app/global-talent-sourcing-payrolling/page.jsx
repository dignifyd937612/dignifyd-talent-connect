import FAQs from "@/components/common/FAQs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import ProcessSection from "@/components/global-talent-sourcing-payrolling/ProcessSection";
import ServiceInfo from "@/components/global-talent-sourcing-payrolling/Serviceinfo";
import Banner from "@/components/home/Banner";
import Stats from "@/components/home/Stats";
import { hrFAQs } from "@/data/faqs";

const GlobalTalentSourcingPayroll = () => {
  return (
    <>
      <Banner
        badge={"Create Your Impact"}
        leading_text={"Global Talent Sourcing & Payrolling"}
        supporting_text={"Work with Innovation"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Get Started Now"}
      />
      <ServiceInfo />
      <Stats />
      <ProcessSection />
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

export default GlobalTalentSourcingPayroll;
