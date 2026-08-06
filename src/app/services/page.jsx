import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/services/Services";
import Newsletter from "@/components/contact/NewsLetter";
import Collaboration from "@/components/home/Collaboration";
import ServicesGrid from "@/components/services/ServicesGrid";
import Schema from "@/components/common/seo/Schema";
import { aboutSchema } from "@/data/schemas/aboutSchema";

export const metadata = {
  title: "Services | Dignifyd Talent Connect",
  description:
    "Explore our comprehensive range of services designed to help you hire smarter and find jobs faster. From talent acquisition to workforce growth, we provide innovative solutions that drive measurable results for modern organizations.",
  alternates: {
    canonical: "https://dignifydtalentconnect.com/services",
  },

  openGraph: {
    title: "Services | Dignifyd Talent Connect",
    description:
      "Explore our comprehensive range of services designed to help you hire smarter and find jobs faster. From talent acquisition to workforce growth, we provide innovative solutions that drive measurable results for modern organizations.",
    url: "https://dignifydtalentconnect.com/services",
    siteName: "Dignifyd Talent Connect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://dignifydtalentconnect.com/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Services | Dignifyd Talent Connect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Dignifyd Talent Connect",
    description:
      "Explore our comprehensive range of services designed to help you hire smarter and find jobs faster. From talent acquisition to workforce growth, we provide innovative solutions that drive measurable results for modern organizations.",
    images: ["https://dignifydtalentconnect.com/OG_Image.png"],
  },
};

const Services = () => {
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
        badge={"Talent That Delivers"}
        leading_text={"Innovative Hiring Solutions for"}
        supporting_text={"Modern Organizations"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Talk to our team"}
        showBreadcrumb={true}
        btn_link="/contact#contact_form"
      />
      <ServicesSection />
      <ServicesGrid />
      <Collaboration />
      <Newsletter />
    </>
  );
};

export default Services;
