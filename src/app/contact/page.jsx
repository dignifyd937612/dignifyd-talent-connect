import ContactSection from "@/components/contact/ContactSection";
import Newsletter from "@/components/contact/NewsLetter";
import OurPresence from "@/components/contact/OurPresence";
import GlobeSection from "@/components/contact/ContactBanner";

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
      <GlobeSection />
      <ContactSection />
      <OurPresence />
      <Newsletter />
    </>
  );
};

export default ContactUs;
