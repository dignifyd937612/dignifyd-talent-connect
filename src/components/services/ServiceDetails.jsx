"use client";
import { servicesData } from "@/data/servicesData";
import { useParams, useRouter } from "next/navigation";
import ServicesTabs from "./common-services/ServicesTabs";
import ServiceBanner from "./common-services/ServiceBanner";
import DetailandForm from "./common-services/DetailandForm";
import FeaturesAndList from "./common-services/FeaturesAndList";
import DetailSection from "./common-services/DetailSection";
import SectionHeader from "../common/SectionHeader";

const ServiceDetails = () => {
  const { service } = useParams();
  const router = useRouter();

  const activeService =
    servicesData.find((item) => item.slug === service) || servicesData[0];

  const handleserviceNavigation = (slug) => {
    router.push(slug);
  };
  return (
    <>
      <section className="mt-10">
        <SectionHeader
          badge={activeService?.badge}
          title={activeService?.title}
        />
      </section>

      <ServicesTabs
        activeService={activeService}
        handleFunc={handleserviceNavigation}
      />

      <ServiceBanner
        darkBanner={activeService?.heroImage}
        lightBanner={activeService?.lightHeroImage}
      />
      <DetailandForm data={activeService} />
      <FeaturesAndList
        features={activeService?.features}
        featuredImages={activeService?.galleryImages}
      />
      <DetailSection subSection={activeService?.subSection} />
    </>
  );
};

export default ServiceDetails;
