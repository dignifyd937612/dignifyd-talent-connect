import { Users, Eye, ShieldAlert, Globe2 } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const challenges = [
  {
    icon: Users,
    title: "Fragmented Vendor Ecosystems",
    description:
      "Managing multiple workforce suppliers creates operational inefficiencies.",
  },
  {
    icon: Eye,
    title: "Limited Workforce Visibility",
    description:
      "Disconnected systems reduce workforce transparency and reporting.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance & Governance Risks",
    description:
      "Inconsistent processes increase workforce compliance vulnerabilities significantly.",
  },
  {
    icon: Globe2,
    title: "Global Hiring Support",
    description:
      "Rapid workforce expansion complicates vendor coordination efforts.",
  },
];

const WorkforceChallenges = () => {
  return (
    <section className="py-20 mt-10">
      <SectionHeader
        badge="Enterprise Workforce"
        title={"Challenges Are Growing Increasingly Complex"}
        description="As organizations expand across regions and suppliers, managing workforce operations becomes increasingly challenging. Limited visibility, fragmented vendor networks, and compliance risks can hinder efficiency, scalability, and business growth."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {challenges.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c61df2]/40 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] text-white shadow-[0_0_30px_rgba(198,29,242,0.35)] transition-transform duration-500 group-hover:scale-110">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mb-4 text-2xl leading-snug font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-white/65">{item.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c61df2] to-[#e12afb] transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkforceChallenges;
