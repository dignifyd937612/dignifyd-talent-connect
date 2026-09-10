import ContactSection from "@/components/contact/ContactSection";
import Newsletter from "@/components/contact/NewsLetter";
import OurPresence from "@/components/contact/OurPresence";
import GlobeSection from "@/components/contact/ContactBanner";
import EngagementFlow from "@/components/contact/EngagementFlow";
import EngagementModels from "@/components/contact/EngagementModels";
import CTASection from "@/components/common/CTA";
import Banner from "@/components/home/Banner";

export const metadata = {
  title: "Contact Us | Dignifyd Talent Connect",
  description:
    "Get in touch with Dignifyd Talent Connect. Reach our offices in the UK, USA, Canada, UAE, and India, or send us a message to start building your team.",
  alternates: {
    canonical: "https://dignifydtalentconnect.com/contact",
  },

  openGraph: {
    title: "Contact Us | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    url: "https://dignifydtalentconnect.com/contact",
    siteName: "Dignifyd Talent Connect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://dignifydtalentconnect.com/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Contact Us | Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    images: ["https://dignifydtalentconnect.com/OG_Image.png"],
  },
};

const ContactUs = () => {
  return (
    <>
      {/* <GlobeSection /> */}
      {/* <Banner
        badge={"Contact & Global Presence "}
        leading_text={"Engage with the right team,"}
        supporting_text={"wherever you operate."}
        description={
          "Dignifyd Talent Connect collaborates with Organizations in global markets to fulfil talent acquisition, recruitment, and capability-building needs. With teams in London, Dubai, Singapore, Toronto, Springfield, and Delhi NCR, we bring regional understanding to global talent requirements."
        }
        btn_text={"Start a Conversation"}
        btn_link="/contact#contact_form"
      /> */}
      {/* <EngagementFlow /> */}
      {/* <EngagementModels /> */}
      <OurPresence />
      {/* <Newsletter /> */}
      {/* <ContactSection /> */}

      {/* <CTASection
        leading_title={"Have a requirement to discuss?"}
        description={
          "Tell us what you are looking to build, hire, or scale. Our team will connect you with the right people to discuss the requirement."
        }
      /> */}
    </>
  );
};

export default ContactUs;
