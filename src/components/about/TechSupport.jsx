import { lightLogos, techSupportLogos } from "@/data/logos";
import LogoSlider from "../common/LogoSlider";
import SectionHeader from "../common/SectionHeader";

const TechSupport = () => {
  return (
    <>
      <SectionHeader
        badge={"Tech Support"}
        title={"Built On Intelligence"}
        description={
          "Our stack tech supports real time sourcing, AI screening, compliance tracking, and analytics dashboard."
        }
      />
      <LogoSlider darkLogo={techSupportLogos} lightLogo={lightLogos} />
    </>
  );
};

export default TechSupport;
