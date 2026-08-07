import { Search, Globe, Handshake, Rocket } from "lucide-react";
import ProcessCard from "./ProcessCard.jsx";
import SectionHeader from "@/components/common/SectionHeader.jsx";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Understand Your Workforce Needs",
    desc: "We begin by understanding your hiring goals, workforce structure, and business objectives to build an effective recruitment strategy tailored to your organization.",
  },
  {
    step: "02",
    icon: Globe,
    title: "Source & Screen Global Talent",
    desc: "Our recruiters source qualified professionals across international talent networks while conducting technical, cultural, and background screening.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Interview & Select",
    desc: "We coordinate interviews, streamline evaluations, assist negotiations, and ensure hiring decisions remain consistent across every region.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Onboard & Integrate",
    desc: "After hiring, we support onboarding, documentation, compliance, and employee integration for a smooth transition.",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="relative py-28 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge="Recruitment Workflow"
          title="How Our Global Recruitment Process Works"
          description="A structured four-step hiring process that delivers consistent recruitment outcomes across every market."
        />

        <div className="relative mt-20">
          {steps.map((step, index) => (
            <ProcessCard key={index} data={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
