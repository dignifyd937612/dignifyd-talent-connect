import Partners from "@/components/home/Partners";
import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import Industry from "@/components/home/Industry";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import Jobs from "@/components/home/Jobs";
import dark_banner_bg from "../assets/images/home/banner/banner-img.png";
import light_banner_bg from "../assets/images/home/banner/light_banner_bg.png";
import Schema from "@/components/common/seo/Schema";
import { homeSchema } from "@/data/schemas/homeSchema";
import { Suspense } from "react";
import RemoveIssParam from "@/components/home/RemoveIssParam";
import { GlobalPresence } from "@/components/home/GlobalPresence";

export const metadata = {
  title: "Dignifyd Talent Connect | AI Recruitment Platform",
  description:
    "Dignifyd Talent Connect is an AI recruitment platform that helps employers hire smarter and job seekers find jobs faster.",

  alternates: {
    canonical: "https://dignifydtalentconnect.com/",
  },

  openGraph: {
    title: "Dignifyd Talent Connect | AI Recruitment Platform",
    description:
      "Dignifyd Talent Connect is an AI recruitment platform that helps employers hire smarter and job seekers find jobs faster.",
    url: "https://dignifydtalentconnect.com/",
    type: "website",
    images: [
      {
        url: "/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Dignifyd Talent Connect | AI Recruitment Platform",
    description:
      "Dignifyd Talent Connect is an AI recruitment platform that helps employers hire smarter and job seekers find jobs faster.",
     images: [
      {
        url: "/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Dignifyd Talent Connect",
      },
    ]
  },
};
export default function Home() {
  return (
    <>
      {homeSchema.map((schema, index) => (
        <Schema
          key={`${schema["@type"]}-${index}`}
          id={`${schema["@type"].toLowerCase()}-schema`}
          data={schema}
        />
      ))}

      <Suspense fallback={null}>
        <RemoveIssParam />
      </Suspense>

      <Banner
        banner_bg={dark_banner_bg}
        white_banner_bg={light_banner_bg}
        badge={"Discover, Engage, Power"}
        leading_text={"Empowering Organizations With"}
        supporting_text={"Smarter Talent Solutions"}
        description={
          "Discover a hiring experience built for modern businesses. From recruitment to employee growth, we help you attract the right talent, nurture strong teams, and drive long-term success."
        }
        btn_text={"Hire a Talent"}
      />
      <Partners />
      <Stats />
      <GlobalPresence />
      <Industry />
      <Collaboration />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      {/* <FAQs
          FAQs={hrFAQs}
          badge={"Your FAQ Hub"}
          title={"Explore Our HR Service FAQs"}
        /> */}
      <Jobs />
    </>
  );
}
