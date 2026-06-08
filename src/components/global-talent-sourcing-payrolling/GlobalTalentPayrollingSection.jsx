import ServiceShowcaseSection from "../services/common-services/ServiceShowcaseSection";
const ServiceInfo = () => {
  return (
    <>
      <ServiceShowcaseSection
        heading={"Global Talent"}
        supportingHeading={"Sourcing & Payrolling"}
      >
        <p className="mb-7 text-lg leading-[1.8] text-[#a99a9a]/80">
          Global Talent Sourcing & Payrolling offers end-to-end solutions for
          sourcing and managing talent across borders. This sub-solution
          simplifies hiring, ensures compliance with local regulations, and
          provides seamless payroll management for global teams.
        </p>

        <p className="mb-7 text-lg leading-[1.8] text-[#a99a9a]/80">
          By handling these critical workforce management functions, businesses
          can focus on their core objectives while ensuring operational
          efficiency and cost-effectiveness.
        </p>
      </ServiceShowcaseSection>
    </>
  );
};

export default ServiceInfo;
