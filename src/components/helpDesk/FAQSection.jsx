import Image from "next/image";
import questionImage from "@/assets/images/helpDesk/help-desk-faq.png";
import FAQs from "../common/FAQs";
import { hrFAQs } from "@/data/faqs";
import SectionHeader from "../common/SectionHeader";

const FAQSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] lg:px-10">
      <SectionHeader
        badge={"Frequently Asked Questions"}
        title={"Quick Answers"}
      />

      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <FAQs FAQs={hrFAQs} />
        </div>

        <div className="hidden justify-center md:flex">
          <Image
            src={questionImage}
            alt="FAQ"
            className="w-full max-w-[500px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
