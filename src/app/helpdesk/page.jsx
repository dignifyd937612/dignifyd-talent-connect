import ContactSection from "@/components/contact/ContactSection";
import FAQSection from "@/components/helpDesk/FAQSection";
import HelpTopicsSection from "@/components/helpDesk/HelpTopicsSection";
import Banner from "@/components/home/Banner";

const HelpDesk = () => {
  return (
    <>
      <Banner
        badge={"Support Center"}
        leading_text={"Helping Employers & Candidates"}
        supporting_text={"Every Step of the Hiring Journey"}
        description={
          "Get quick answers to your questions about job postings, candidate management, account settings, applications, billing, and more. Explore our support resources or connect with our team for personalized assistance."
        }
        btn_text={"Browse Help Topics"}
      />
      <HelpTopicsSection />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default HelpDesk;
