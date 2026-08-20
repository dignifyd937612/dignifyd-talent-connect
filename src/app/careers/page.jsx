import Banner from "@/components/home/Banner";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import CTASection from "@/components/common/CTA";
import FAQs from "@/components/common/FAQs";
import Testimonials from "@/components/common/Testimonials";
import { hrFAQs } from "@/data/faqs";

export const metadata = {
  title: "Careers | Dignifyd Talent Connect",
  description:
    "Explore open roles at Dignifyd Talent Connect and discover how you can make an impact building the future of recruitment.",
  alternates: {
    canonical: "https://dignifydtalentconnect.com/careers",
  },
  openGraph: {
    title: "Careers | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    url: "https://dignifydtalentconnect.com/careers",
    siteName: "Dignifyd Talent Connect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://dignifydtalentconnect.com/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Careers | Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    images: ["https://dignifydtalentconnect.com/OG_Image.png"],
  },
};
const Careers = async () => {
  return (
    <>
      <Banner
        badge={"Create Your Impact"}
        leading_text={"Join Us in Building the Future of"}
        supporting_text={"Work with Innovation"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Get Started Now"}
        btn_link="/contact#contact_form"
      />
      <WhyWorkWithUs />
      {/* <CTASection
        leading_title={"Everything You Need to"}
        supporting_title={"Know Before You Start"}
        description={
          "Streamline your work and grow your business with our all-in-one platform."
        }
      /> */}
      <FAQs
        FAQs={hrFAQs}
        badge={"Your FAQ Hub"}
        title={"Frequently Asked Questions"}
      />
      {/* <Testimonials /> */}
    </>
  );
};

export default Careers;
