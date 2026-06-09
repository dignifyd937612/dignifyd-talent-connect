import Image from "next/image";
import { Eye, ShieldCheck, Gauge, ClipboardCheck } from "lucide-react";

import vmoImage from "../../assets/images/services/vendor-management-operations/whyVMO.jpg";
import SectionHeader from "../common/SectionHeader";

const features = [
  {
    icon: Eye,
    title: "Workforce Visibility",
    description:
      "Centralized insights across contingent workforce operations globally.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Governance",
    description:
      "Standardized governance improves supplier accountability and consistency.",
  },
  {
    icon: Gauge,
    title: "Operational Efficiency",
    description:
      "Streamlined workflows accelerate workforce operations across regions.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Risk Management",
    description:
      "Strengthened oversight reduces workforce compliance and operational risks.",
  },
];

const WhyVMO = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="Why VMO"
              title="Redefining Enterprise Workforce Vendor Management"
              description="Gain complete control over your contingent workforce ecosystem with centralized visibility, supplier governance, compliance oversight, and operational excellence."
              center={false}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c61df2]/40 hover:bg-white/[0.05]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] text-white shadow-[0_0_25px_rgba(198,29,242,0.35)]">
                        <Icon size={24} />
                      </div>

                      <h3 className="mb-3 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-white/65">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c61df2] to-[#e12afb] transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#c61df2]/20 blur-[120px]" />

            <div className="relative h-[700px] overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src={vmoImage}
                alt="Vendor Management Operations"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVMO;
