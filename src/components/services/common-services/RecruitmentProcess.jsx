import ProcessCard from "./ProcessCard.jsx";
import SectionHeader from "@/components/common/SectionHeader.jsx";

export default function RecruitmentProcess({ stepSection }) {
  return (
    <section className="relative py-28 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge="Recruitment Workflow"
          title={stepSection?.title}
          description="A structured four-step hiring process that delivers consistent recruitment outcomes across every market."
        />

        <div className="relative mt-20">
          {stepSection?.steps?.map((step, index) => (
            <ProcessCard key={index} data={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
