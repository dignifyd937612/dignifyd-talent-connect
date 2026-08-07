"use client";
import { servicesData } from "@/data/servicesData";
import { useParams, usePathname, useRouter } from "next/navigation";
import ServicesTabs from "./common-services/ServicesTabs";
import ServiceBanner from "./common-services/ServiceBanner";
import DetailandForm from "./common-services/DetailandForm";
import FeaturesAndList from "./common-services/FeaturesAndList";
import DetailSection from "./common-services/DetailSection";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";
import RecruitmentProcess from "./common-services/RecruitmentProcess";

const ServiceDetails = () => {
  const { service } = useParams();
  const router = useRouter();
  const pathname = usePathname();

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
      <div className="-translate-y-1/2 lg:block">
        <nav className="flex items-center justify-center">
          {[
            { label: "Home", href: "/" },
            ...pathname
              .split("/")
              .filter(Boolean)
              .map((item, index, arr) => ({
                label: item.replace(/-/g, " "),
                href: "/" + arr.slice(0, index + 1).join("/"),
              })),
          ].map((item, index, arr) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex h-10 items-center px-5 text-sm font-medium transition-all duration-300 ${index === arr.length - 1 ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-[#181122] text-gray-300 hover:bg-[#241735]"} ${index !== 0 ? "-ml-2" : ""} `}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
              }}
            >
              {item.label
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
                )
                .join(" ")}
            </Link>
          ))}
        </nav>
      </div>
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
      <RecruitmentProcess />
    </>
  );
};

export default ServiceDetails;
