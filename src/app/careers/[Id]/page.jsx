import ApplyJobForm from "@/components/careers/ApplyJobForm";
import JobDetails from "@/components/careers/JobDetails";

export const generateMetadata = async () => {
  return {
    title: `Apply for PCI Infra | Dignifyd Talent Connect`,
    description: `Discover the opportunity to join Dignifyd Talent Connect as a PCI Infra specialist. Learn about the role, responsibilities, and how you can contribute to our innovative recruitment solutions.`,
  };
};

const JobDetailpage = async ({ params }) => {
  return (
    <>
      <JobDetails params={await params} />
      <ApplyJobForm />
    </>
  );
};

export default JobDetailpage;
