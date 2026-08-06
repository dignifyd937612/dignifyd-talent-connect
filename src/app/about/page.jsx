import Banner from "@/components/home/Banner";
import Journey from "@/components/about/Journey";
import Certifications from "@/components/about/Certifications";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import LeaderShip from "@/components/about/LeaderShip";
import OurPeopleOurBrand from "@/components/about/OurPeopleOurBrand";
import TechSupport from "@/components/about/TechSupport";
import CTASection from "@/components/common/CTA";
import Schema from "@/components/common/seo/Schema";
import { aboutSchema } from "@/data/schemas/aboutSchema";

export const metadata = {
  title: "About Us | Dignifyd Talent Connect",
  description:
    "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",

  alternates: {
    canonical: "https://dignifydtalentconnect.com/about",
  },

  openGraph: {
    title: "About Us | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    url: "https://dignifydtalentconnect.com/about",
    siteName: "Dignifyd Talent Connect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://dignifydtalentconnect.com/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "About Us | Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Dignifyd Talent Connect",
    description:
      "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
    images: ["https://dignifydtalentconnect.com/OG_Image.png"],
  },
};
const AboutUs = () => {
  return (
    <>
      {aboutSchema.map((schema, index) => (
        <Schema
          key={`${schema?.["@type"] ?? index}-${index}`}
          id={`${(schema?.["@type"] ?? "schema").toLowerCase()}-schema`}
          data={schema}
        />
      ))}
      <Banner
        badge={"Find, Engage, grow"}
        leading_text={"Building Stronger Teams Through"}
        supporting_text={"Smart Recruitment Solutions"}
        description={
          "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success."
        }
        btn_text={"Get Started Now"}
        showBreadcrumb={true}
      />
      <Journey />
      <Certifications />
      <VisionMission />
      <WhatWeDo />
      {/* <LeaderShip /> */}
      {/* <OurPeopleOurBrand /> */}
      {/* <TechSupport /> */}
      <CTASection
        leading_title={"Power Up Your Workflow "}
        supporting_title={"with Smart Jobs"}
        description={
          "Streamline your work and grow your business with our all-in-one platform."
        }
      />
    </>
  );
};

export default AboutUs;
