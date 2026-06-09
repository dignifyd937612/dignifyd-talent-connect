import FAQs from "@/components/common/FAQs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
import ProcessSection from "@/components/global-talent-sourcing-payrolling/ProcessSection";
import Banner from "@/components/home/Banner";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import RecruitmentProcess from "@/components/Recruitment Process Outsourcing/RecruitmentProcess";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { hrFAQs } from "@/data/faqs";
import { benefits } from "@/data/services/recruitment-process-outsourcing/benefits";
import { recruitmentFramework } from "@/data/services/recruitment-process-outsourcing/RecritmentsProcess";
import { caseStudies } from "@/data/services/recruitment-process-outsourcing/recruitmentCaseStudies";

const RecruitmentProcessOutsourcing = () => {
  return (
    <>
      <Banner
        badge={"Create Your Impact"}
        leading_text={"Recruitment Process Outsourcing"}
        supporting_text={"Work with Innovation"}
        description={"Transform Recruitment Into a Strategic Growth Advantage"}
        btn_text={"Get Started Now"}
      />
      <RecruitmentProcess />
      <ProcessSection
        data={recruitmentFramework}
        heading={"Our Recruitment"}
        supportingHeading={"Delivery Framework"}
      />
      <CaseStudies data={caseStudies} />
      <WorkforceChallenges
        data={benefits}
        badge="Why Modern RPO"
        title="Why Leading Enterprises Choose Modern RPO"
        highlightedText="Choose Modern"
        description="Modern Recruitment Process Outsourcing empowers organizations to improve hiring agility, leverage intelligent automation, scale recruitment operations, and access global talent more efficiently."
      />
      <FAQs
        FAQs={hrFAQs}
        badge={"Answers At Your Fingertips"}
        title={"Your Questions, Our Answers"}
      />
      <CTABanner title={"Recruitment Process Outsourcing"} />
    </>
  );
};

export default RecruitmentProcessOutsourcing;
