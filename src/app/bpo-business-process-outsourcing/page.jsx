import BPOOutsourcingInfo from "@/components/bpo-business-process-outsourcing/BPOOutsourcingInfo";
import Banner from "@/components/home/Banner";
import ServiceFeatureSection from "@/components/upskilling-academy/ServiceFeatureSection";
import WorkforceChallenges from "@/components/vendor-management-operations/WorkForceChallanges";
import { sub_Services } from "@/data/services/bpo-business-process-outsourcing/sub_Services";
import Healthcare from "../../assets/images/services/bpo-business-process-outsourcing/BPO_1.png";
import Accounting from "../../assets/images/services/bpo-business-process-outsourcing/BPO_2.png";
import customer_Support from "../../assets/images/services/bpo-business-process-outsourcing/BPO_3.png";
import it_Services from "../../assets/images/services/bpo-business-process-outsourcing/BPO_4.png";
import marketing_sales_Support from "../../assets/images/services/bpo-business-process-outsourcing/BPO_5.png";
import recruitment_Process from "../../assets/images/services/bpo-business-process-outsourcing/BPO_6.png";
import CaseStudies from "@/components/Recruitment Process Outsourcing/CaseStudies";
import { caseStudies } from "@/data/services/bpo-business-process-outsourcing/caseStudies";
import FAQs from "@/components/common/FAQs";
import { hrFAQs } from "@/data/faqs";
import CTABanner from "@/components/global-talent-sourcing-payrolling/CTABanner";
const BPOProcessingOutsourcing = () => {
  return (
    <>
      <Banner
        badge="Business Process Outsourcing"
        leading_text="Business Process Outsourcing"
        supporting_text="Streamline Processes, Maximize Efficiency"
        description="Enhance operational efficiency with comprehensive business process outsourcing solutions. From customer support and finance operations to IT services and workforce management, we help organizations reduce costs, improve productivity, and focus on their core business objectives."
        btn_text="Connect With Us"
      />
      <BPOOutsourcingInfo />
      <WorkforceChallenges
        data={sub_Services}
        badge="Sub-Service Summary"
        title="Business Process"
        highlightedText="Outsourcing Services"
        description="From healthcare and finance to customer support and IT operations, our BPO solutions help organizations streamline processes, improve service delivery, and achieve greater operational excellence."
      />
      <ServiceFeatureSection
        heading="Healthcare"
        subHeading="BPO Services"
        title="Optimize Healthcare Operations"
        image={Healthcare}
        background
        variant="primary"
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Healthcare is a demanding field, and we’re here to make it easier. Our
          healthcare BPO services are designed to reduce administrative burdens,
          improve compliance, and ensure better patient outcomes. From medical
          billing and coding to claims processing and patient support, we manage
          critical tasks with precision and care.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          Our focus is on enhancing your operational efficiency while allowing
          you to dedicate more time to delivering exceptional patient care. With
          E-Solutions, you gain a trusted partner committed to navigating the
          complexities of healthcare with you.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="Finance and"
        subHeading="Accounting Services"
        title="Enhance Financial Precision"
        image={Accounting}
        variant="primary"
        reverse
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Managing finances isn’t just about crunching numbers - it’s about
          making smarter decisions that drive growth. Our Finance and Accounting
          BPO services simplify processes like accounts payable, payroll, and
          reporting. By combining automation, real-time insights, and
          experienced professionals, we help you minimize errors, stay
          compliant, and optimize resources.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          With E-Solutions, you gain more than operational efficiency - you gain
          the confidence to make informed, future-ready financial decisions
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="Customer"
        subHeading="Support Services"
        title="Create Lasting Customer Connections"
        image={customer_Support}
        variant="primary"
        background
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Customer relationships are the backbone of any successful business.
          With E-Solutions’ customer support services, you can deliver
          exceptional, 24/7 assistance that meets your customers where they are
          - via phone, email, or chat.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          Our team combines empathy and expertise to ensure every interaction is
          meaningful and every issue is resolved promptly. By choosing us, you
          can elevate customer satisfaction, build loyalty, and make every
          connection count.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="IT"
        subHeading="Services"
        title="Empower Digital Transformation"
        image={it_Services}
        variant="primary"
        reverse
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Technology can be complex but managing it doesn’t have to be. Our IT
          BPO services handle everything from infrastructure management to
          cybersecurity, ensuring your operations stay secure and efficient.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          We implement proactive monitoring and cloud solutions that minimize
          downtime and maximize productivity. Let us handle the technical
          complexities so you can focus on driving your business forward.
        </p>
      </ServiceFeatureSection>{" "}
      <ServiceFeatureSection
        heading="Marketing and"
        subHeading="Sales Support"
        title="Accelerate Business Growth"
        image={marketing_sales_Support}
        variant="primary"
        background
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Building your brand and driving sales can be challenging, but we make
          it simpler. Our marketing and sales support services combine
          creativity and data-driven strategies to maximize your market impact.
          From lead generation and campaign execution to optimizing customer
          engagement, we align with your goals to deliver tangible results.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          With E-Solutions as your partner, you can focus on scaling your
          business while we handle the details.
        </p>
      </ServiceFeatureSection>
      <ServiceFeatureSection
        heading="HR and Recruitment"
        subHeading="Process Outsourcing"
        title="Simplify Workforce Management"
        image={recruitment_Process}
        variant="primary"
        reverse
      >
        <p className="mb-6 text-lg leading-8 text-white/65">
          Building the right team takes time and effort - let us simplify the
          process for you. Our HR and Recruitment Process Outsourcing (RPO)
          services streamline everything from sourcing and screening to
          onboarding. Leveraging advanced tools and global expertise, we help
          you attract top talent while ensuring compliance and efficiency.
        </p>

        <p className="mb-10 text-lg leading-8 text-white/65">
          With E-Solutions, you gain a strategic partner dedicated to helping
          you build and manage a workforce that drives success.
        </p>
      </ServiceFeatureSection>{" "}
      <CaseStudies data={caseStudies} />
      <FAQs
        FAQs={hrFAQs}
        badge={"Answers At Your Fingertips"}
        title={"Your Questions, Our Answers"}
      />
      <CTABanner title={"Business Process Outsourcing"} />
    </>
  );
};
export default BPOProcessingOutsourcing;
