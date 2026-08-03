import ServiceShowcaseSection from "../services/common-services/ServiceShowcaseSection";
const ServiceInfo = () => {
  const obj = {
    name: "Sumit",
    age: 24,
    address: {
      city: "Delhi",
      state: "Delhi",
      pincode: 110001,
    },
    skills: {
      frontend: {
        react: "React",
        js: "JavaScript",
      },
      backend: "Node",
    },
  };

  return (
    <>
      <ServiceShowcaseSection
        heading={"Global Talent"}
        supportingHeading={"Sourcing & Payrolling"}
      >
        <p className="mb-7 text-lg leading-[1.8] text-black/70 dark:text-white/60">
          Global Talent Sourcing & Payrolling offers end-to-end solutions for
          sourcing and managing talent across borders. This sub-solution
          simplifies hiring, ensures compliance with local regulations, and
          provides seamless payroll management for global teams.
        </p>

        <p className="mb-7 text-lg leading-[1.8] text-black/70 dark:text-white/60">
          By handling these critical workforce management functions, businesses
          can focus on their core objectives while ensuring operational
          efficiency and cost-effectiveness.
        </p>
      </ServiceShowcaseSection>
    </>
  );
};

export default ServiceInfo;
