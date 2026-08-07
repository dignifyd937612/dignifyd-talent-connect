import Schema from "@/components/common/seo/Schema";
import ServiceDetails from "@/components/services/ServiceDetails";
import { serviceDetailSchema } from "@/data/schemas/serviceDetail";
import { servicesData } from "@/data/servicesData";

export const generateMetadata = async ({ params }) => {
  const { service } = await params;

  const activeService =
    servicesData.find((item) => item.slug === service) || servicesData[0];

  const url = `https://dignifydtalentconnect.com/services/${activeService.slug}`;

  return {
    title: `${activeService.title} | Dignifyd Talent Connect`,
    description: activeService.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${activeService.title} | Dignifyd Talent Connect`,
      description: activeService.description,
      url,
      type: "website",
      images: [
        {
          url: "https://dignifydtalentconnect.com/OG_Image.png",
          width: 1200,
          height: 630,
          alt: activeService.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${activeService.title} | Dignifyd Talent Connect`,
      description: activeService.description,
      images: ["https://dignifydtalentconnect.com/OG_Image.png"],
    },
  };
};
const ServiceDetailsPage = () => {
  return (
    <>
      {serviceDetailSchema.map((schema, index) => (
        <Schema
          key={`${schema?.["@type"] ?? index}-${index}`}
          id={`${(schema?.["@type"] ?? "schema").toLowerCase()}-schema`}
          data={schema}
        />
      ))}
      <ServiceDetails />
    </>
  );
};

export default ServiceDetailsPage;
