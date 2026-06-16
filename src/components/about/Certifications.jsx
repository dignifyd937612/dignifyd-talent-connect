import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import gdpr from "../../assets/images/aboutUs/certificates/GDPR.png";
import iso from "../../assets/images/aboutUs/certificates/ISO.png";
import EQOC from "../../assets/images/aboutUs/certificates/EQOC.png";
import audit from "../../assets/images/aboutUs/certificates/audit.png";
import visa from "../../assets/images/aboutUs/certificates/visa.png";
import labour_law_guide from "../../assets/images/aboutUs/certificates/labour-law-guide.png";

const certificatesLogos = [
  { logo: gdpr, name: "GDPR Compliance" },
  { logo: EQOC, name: "EQOC Certification" },
  { logo: iso, name: "ISO Certification" },
  { logo: visa, name: "Local Visa Compliance" },
  { logo: labour_law_guide, name: "Labour Law Guidance" },
  { logo: audit, name: "On-Site Audit" },
];

export default function Certifications() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Empowering Global Success"}
          title={"Custom Workforce Solutions That Accelerate Global Growth"}
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {certificatesLogos.map((item, i) => (
            <div
              key={i}
              className="group relative flex h-40 items-center justify-center rounded-2xl border border-purple-100 bg-gradient-to-b from-white to-purple-50/40 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] dark:border-white/10 dark:bg-[#0b0615] dark:from-transparent dark:to-transparent dark:shadow-none dark:hover:border-purple-500/40 dark:hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden" />

              <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-black/70">
                <p className="px-3 text-center text-sm font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
