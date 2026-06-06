import Partners from "@/components/home/Partners";
import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import GlobalPresence from "@/components/home/GlobalPresence";
import Industry from "@/components/home/Industry";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/home/Contact";
import FAQs from "@/components/common/FAQs";
import Jobs from "@/components/home/Jobs";
import banner_bg from "../assets/images/home/banner/banner-img.png";
import { hrFAQs } from "@/data/faqs";
import Schema from "@/components/common/seo/Schema";
import { homeSchema } from "@/data/schemas/homeSchema";
import { Suspense } from "react";

import RemoveIssParam from "@/components/home/RemoveIssParam";
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
        url: "logo",
        width: 1200,
        height: 630,
        alt: "Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary",
    site: "",
    title: "Dignifyd Talent Connect | AI Recruitment Platform",
    description:
      "Dignifyd Talent Connect is an AI recruitment platform that helps employers hire smarter and job seekers find jobs faster.",
    images: [""],
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

      <main className="bg-black text-white">
        <Banner
          banner_bg={banner_bg}
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
      </main>
    </>
  );
}
