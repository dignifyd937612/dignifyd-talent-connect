import CaseStudyApproach from "@/components/resources/caseStudiesDetails/CaseStudyApproach";
import CaseStudyChallenge from "@/components/resources/caseStudiesDetails/CaseStudyChallenge";
import CaseStudyHero from "@/components/resources/caseStudiesDetails/CaseStudyHero";
import CaseStudySituation from "@/components/resources/caseStudiesDetails/CaseStudySituation";

const CasestudiesDetails = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <CaseStudyHero slug={slug} />
      <CaseStudySituation />
      <CaseStudyChallenge />
      <CaseStudyApproach />
    </>
  );
};

export default CasestudiesDetails;
