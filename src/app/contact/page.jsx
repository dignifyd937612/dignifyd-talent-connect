import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactSection from "@/components/contact/ContactSection";
import Newsletter from "@/components/contact/NewsLetter";
import OurPresence from "@/components/contact/OurPresence";

export const metadata = {
  title: "Dignifyd Talent Connect | AI Recruitment Platform",
  description:
    "Dignifyd Talent Connect is an AI recruitment platform that helps employers hire smarter and job seekers find jobs faster.",
};

const ContactUs = () => {
  return (
    <>
      <ContactSection />
      {/* <ContactInfoSection /> */}
      <OurPresence />
      <Newsletter />
    </>
  );
};

export default ContactUs;
