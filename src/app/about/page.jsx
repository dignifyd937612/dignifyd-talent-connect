import Banner from "@/components/home/Banner";
import Journey from "@/components/about/Journey";
import Certifications from "@/components/about/Certifications";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import LeaderShip from "@/components/about/LeaderShip";
import OurPeopleOurBrand from "@/components/about/OurPeopleOurBrand";
import TechSupport from "@/components/about/TechSupport";
import CTASection from "@/components/common/CTA";

export const metadata = {
  title: "About Us | Dignifyd Talent Connect",
  description:
    "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success.",
};
const AboutUs = () => {
  return (
    <>
      <Banner
        badge={"Find, Engage, grow"}
        leading_text={"Building Stronger Teams Through"}
        supporting_text={"Smart Recruitment Solutions"}
        description={
          "Discover a smarter approach to hiring designed for modern organizations. From talent acquisition to workforce growth, we help businesses find the right people, build stronger teams, and achieve sustainable success."
        }
        btn_text={"Get Started Now"}
      />
      <Journey />
      <Certifications />
      <VisionMission />
      <WhatWeDo />
      {/* <LeaderShip /> */}
      {/* <OurPeopleOurBrand /> */}
      <TechSupport />
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
