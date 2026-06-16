import { jobs } from "@/data/jobData";
import JobCard from "../common/JobCard";
import SectionHeader from "../common/SectionHeader";

const WhyWorkWithUs = () => {
  return (
    <>
      <div className="w-full bg-white py-20 dark:bg-black" id="jobs">
        <SectionHeader
          badge={"Why Work With Us"}
          title={"Flexible And Healthy Work-life Balance"}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyWorkWithUs;
