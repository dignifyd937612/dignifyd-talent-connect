import {
  Rocket,
  BriefcaseBusiness,
  Users,
  UserRound,
  CreditCard,
  Headset,
} from "lucide-react";

import HelpTopicCard from "./HelpTopicCard";
import SectionHeader from "../common/SectionHeader";

const topics = [
  {
    title: "Getting Started",
    description: "New to Digni? Learn the basics and get started quickly.",
    icon: Rocket,
    href: "/helpdesk/getting-started",
  },
  {
    title: "Posting Jobs",
    description: "Create job posts that attract the right candidates.",
    icon: BriefcaseBusiness,
    href: "/helpdesk/job-posting",
  },
  {
    title: "Candidate Management",
    description: "Review applications and manage your candidates.",
    icon: Users,
    href: "/helpdesk/candidate-management",
  },
  {
    title: "Employer Account",
    description: "Manage your profile, company information and team.",
    icon: UserRound,
    href: "/helpdesk/employer-account",
  },
  {
    title: "Plans & Billing",
    description: "Update your plan, view invoices and payment methods.",
    icon: CreditCard,
    href: "/helpdesk/plans-and-billing",
  },
  {
    title: "Technical Support",
    description: "Troubleshoot issues and get technical assistance.",
    icon: Headset,
    href: "/helpdesk/technical-support",
  },
];

const HelpTopicsSection = () => {
  return (
    <section className="mx-auto max-w-[1440px] py-28 lg:px-10">
      <SectionHeader badge={"Browse Topics"} title={"Explore Help Topics"} />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((item) => (
          <HelpTopicCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HelpTopicsSection;
