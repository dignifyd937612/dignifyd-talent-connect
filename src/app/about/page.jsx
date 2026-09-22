import Banner from "@/components/home/Banner";
import Journey from "@/components/about/Journey";
import Certifications from "@/components/about/Certifications";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import CTASection from "@/components/common/CTA";
import Schema from "@/components/common/seo/Schema";
import { aboutSchema } from "@/data/schemas/aboutSchema";
import WhoRunsTalentConnect from "@/components/about/WhoRunsTalentConnect";
import WhatWeMeasure from "@/components/about/WhatWeMeasure";
import GroupSection from "@/components/about/TeamDignifydGroup";

export const metadata = {
  title: "About Dignifyd Talent Connect | Global Talent Acquisition",
  description:
    "Talent acquisition vertical of Dignifyd group. 120+ specialists, six global offices. Read our story, how we started and how we have expanded worldwide.",

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
        leading_text={"About Us"}
        description={
          "The recruitment branch of Dignifyd group, started in 2018 and expanded globally across 35+ countries. Recruitment is what we do to help companies find the right talent, build teams and grow in their field."
        }
        btn_text={"Talk to Us"}
        btn_link="/contact#contact_form"
        showBreadcrumb={true}
      />
      <Journey />
      <WhoRunsTalentConnect />
      <Certifications />
      <VisionMission />
      <WhatWeMeasure />
      <WhatWeDo />
      <GroupSection />
      {/* <LeaderShip /> */}
      {/* <OurPeopleOurBrand /> */}
      {/* <TechSupport /> */}
      <CTASection
        leading_title={"Power Up Your Workflow "}
        supporting_title={"with Smart Jobs"}
        description={
          "Streamline you work and grow your business with our all-in-one platform."
        }
      />
    </>
  );
};

export default AboutUs;
