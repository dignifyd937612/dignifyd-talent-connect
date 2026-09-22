import CTASection from "@/components/common/CTA";
import FeaturedResource from "@/components/resources/FeaturedResource";
import ResourceCaseStudies from "@/components/resources/ResourceCaseStudies";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import ResourcesHero from "@/components/resources/ResourcesHero";

const ResourcesPage = () => {
  return (
    <>
      <ResourcesHero />
      <FeaturedResource />
      <ResourceLibrary />
      <ResourceCaseStudies />
      <CTASection
        leading_title={"Looking for the right perspective?"}
        description={
          "Explore our resources or connect with our team to discuss the talent, delivery, or organisational challenge you're working through."
        }
      />
    </>
  );
};

export default ResourcesPage;
