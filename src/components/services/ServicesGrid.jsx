import Image from "next/image";
import global_recruitment from "../../assets/images/services/global-recruitment.jpg";
import employer_branding from "../../assets/images/services/employer-branding.jpg";
import hr_consulting from "../../assets/images/services/hr-consulting.jpg";
import recruitment_process_automation from "../../assets/images/services/recruitment_process_automation.jpg";
import onBoarding_Support from "../../assets/images/services/onboarding_Support.jpg";
import SectionHeader from "../common/SectionHeader";

const services = [
  {
    title: "Global Recruitment",
    desc: "Access top talent worldwide with our global recruitment solutions.",
    img: global_recruitment,
  },
  {
    title: "Recruitment Process Automation",
    desc: "Streamline your hiring process with our automation solutions.",
    img: recruitment_process_automation,
  },
  {
    title: "HR Consulting",
    desc: "Strategic HR advice and solutions for modern organizations.",
    img: hr_consulting,
  },
  {
    title: "Employer Branding",
    desc: "Enhance your employer brand to attract and retain top talent.",
    img: employer_branding,
  },
  {
    title: "Onboarding Support",
    desc: "Ensure a smooth transition for new hires with our comprehensive onboarding programs.",
    img: onBoarding_Support,
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <SectionHeader
          badge={"Our Expertise"}
          title={"Comprehensive Talent & Workforce Capabilities"}
        />
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group w-full md:w-[31%] rounded-2xl border border-purple-500/20 bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)] dark:border-purple-500/30 dark:from-black/[0.04] dark:to-transparent"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="mb-5 h-[220px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
              />

              <h3 className="mb-2 text-lg font-semibold text-purple-500 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
