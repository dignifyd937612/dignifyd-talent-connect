import Banner from "@/components/home/Banner";
import PrivacyPolicyContent from "@/components/privacy-policies/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner
        badge={"Privacy Policy"}
        leading_text={"Privacy Policy"}
        description={
          "We are committed to protecting your personal information and your right to privacy. If you have any questions about how we collect, use, or share your personal information, please contact us."
        }
      />

      <PrivacyPolicyContent />
    </>
  );
};

export default PrivacyPolicy;
