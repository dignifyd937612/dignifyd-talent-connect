import Banner from "@/components/home/Banner";
import UpskillingAcademyInfo from "@/components/upskilling-academy/UpskillingAcademyInfo";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { upskillingServices } from "@/data/services/upskilling-academy/UpskillingServices";
import hireTrainDeployImg from "../../assets/images/services/upskilling-academy/hireTrainDeploy.jpg";
import evolvingSkills from "../../assets/images/services/upskilling-academy/upSkilling2.jpg";
import empoweringWomen from "../../assets/images/services/upskilling-academy/upSkilling3.jpg";
import bootCamps from "../../assets/images/services/upskilling-academy/upSkilling4.jpg";
import ServiceFeatureSection from "@/components/upskilling-academy/ServiceFeatureSection";
import { caseStudies } from "@/data/services/upskilling-academy/upskillingCaseStudies";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import FAQs from "@/components/common/FAQs";
import { hrFAQs } from "@/data/faqs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
const UpSkillsAcademy = () => {
  return (
    <>
      <Banner
        badge="Upskilling Academy"
        leading_text="Upskilling Academy"
        supporting_text="Customized Learning Paths to Elevate Your Team's Performance"
        description="Empower your workforce with industry-focused training programs, professional development initiatives, and future-ready learning solutions designed to enhance skills, improve productivity, and accelerate organizational growth."
        btn_text="Connect With Us"
      />
      <UpskillingAcademyInfo />
      <WorkforceChallenges
        data={upskillingServices}
        badge="Learning & Development"
        title="Comprehensive Upskilling Solutions for a Future-Ready Workforce"
        highlightedText="Upskilling Solutions"
        description="Our specialized learning programs are designed to bridge skill gaps, enhance workforce capabilities, and create a sustainable talent pipeline through training, reskilling, career reintegration, and industry-focused boot camps."
      />
      <ServiceFeatureSection
        heading="Hire,"
        subHeading="Train, & Deploy"
        title="Skilled Talent, Ready to Deliver"
        image={hireTrainDeployImg}
        background
        variant="primary"
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Our Hire, Train & Deploy model simplifies hiring by delivering
          professionals trained to meet your specific needs.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          Candidates are trained in both technical competencies and essential
          soft skills, ensuring they can integrate smoothly into your projects.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="Upskilling & "
        subHeading="Reskilling"
        title="Evolving Skills for a Dynamic Workforce"
        image={evolvingSkills}
        reverse={true}
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Our Women Back to Work program is designed to support women returning
          to their careers after a break. We provide specialized training,
          mentorship, and job placement assistance to help them re-enter the
          workforce with confidence and updated skills.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          This program not only empowers individuals but also helps
          organizations build diverse, inclusive, and high-performing teams.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="Women"
        subHeading="Back to Work"
        title="Empowering Women, Strengthening the Workforce"
        image={empoweringWomen}
        background
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Equip your team to adapt to evolving business needs with our
          Upskilling & Reskilling programs. Whether it’s learning new
          technologies, enhancing existing skills, or pivoting into entirely new
          roles, we offer tailored programs to close skill gaps and future-proof
          your workforce.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          From technical expertise in areas like AI, Cloud Computing, and
          Cybersecurity to soft skills such as collaboration and critical
          thinking, our programs ensure your employees are equipped to thrive in
          a changing landscape. By fostering a growth mindset and a culture of
          continuous improvement, we empower your team to meet the demands of
          today and tomorrow.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="Boot"
        subHeading="Camps"
        title="Fast-Track Training for High-Demand Skills"
        image={bootCamps}
        reverse={true}
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Our Boot Camps are intensive, short-term training programs designed to
          equip your workforce with in-demand skills quickly and effectively.
          Covering areas like Full-Stack Development, Data Analytics, DevOps,
          and more, these hands-on programs focus on real-world applications and
          practical problem-solving.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          By the end of the program, participants are job-ready and prepared to
          make an immediate impact. Our Boot Camps are perfect for upskilling
          current employees or preparing new hires for critical roles within
          your organization.
        </p>
      </ServiceFeatureSection>
      <CaseStudies data={caseStudies} />
      <FAQs
        FAQs={hrFAQs}
        badge={"Answers At Your Fingertips"}
        title={"Your Questions, Our Answers"}
      />
      <CTABanner title={"Upskilling Academy"} />
    </>
  );
};

export default UpSkillsAcademy;
