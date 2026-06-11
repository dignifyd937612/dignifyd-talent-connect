import {
  Globe,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  Factory,
  Network,
  ShieldCheck,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
  {
    label: "Services",
    path: "/services",
    megaMenu: [
      {
        title: "Global Talent",
        items: [
          {
            label: "Global Talent Sourcing & Payrolling",
            icon: Globe,
            link: "/global-talent-sourcing-payrolling",
          },
          {
            label: "Vendor Management & Operations",
            icon: Users,
            link: "/vendor-management-operations",
          },
          {
            label: "Recruitment Process Outsourcing",
            icon: Briefcase,
            link: "/recruitment-process-outsourcing",
          },
          {
            label: "Upskilling Academy",
            icon: GraduationCap,
            link: "/upskilling-academy",
          },
          {
            label: "BPO (Business Process Outsourcing)",
            icon: Building2,
            link: "/bpo-business-process-outsourcing",
          },
        ],
      },
      {
        title: "Engagement Model",
        items: [
          {
            label: "BOT/BOOT",
            icon: Factory,
            link: "/build-operate-transfer",
          },
          {
            label: "GCC Services",
            icon: Network,
            link: "/gcc-services",
          },
          {
            label: "Managed Service Provider",
            icon: ShieldCheck,
            link: "/managed-service-provider",
          },
        ],
      },
    ],
  },
  { label: "Contact", path: "/contact" },
  // { label: "FAQs", path: "/FAQs" },
];

export const tabs = [
  {
    Id: 0,
    label: "Global Recruitment",
    slug: "global-recruitment",
    href: "/services/global-recruitment",
    brief:
      "Our programs  help organizations cultivate agile, competent, and resilient teams. Through structured development frameworks, targeted performance strategies, and cross-functional collaboration initiatives, we ensure employees are aligned with corporate objectives and empowered to contribute meaningfully. Continuous learning support and strategic guidance enable teams to thrive in an ever-evolving global business environment.",
  },
  {
    Id: 1,
    label: "RPO Solutions",
    slug: "rpo-solutions",
    href: "/services/rpo-solutions",
    brief:
      "At Dignifyd Talent Connect, our RPO Solutions go beyond hiring — we help organizations build future-ready leaders who can drive business transformation. Our leadership development framework strengthens core competencies, enhances decision-making abilities, and empowers teams to perform at their highest potential. Through customized training pathways and strategic talent guidance, we ensure your leaders are equipped to inspire, innovate, and achieve sustainable growth.",
  },
  {
    Id: 2,
    label: "Employer Branding",
    slug: "employer-branding",
    href: "/services/employer-branding",
    brief:
      "A strong employer brand is more than just how your company looks — it’s how people experience it. Our Employer Branding solutions help organizations attract, engage, and retain top talent by showcasing what makes them unique. We align your culture, values, and vision into a compelling narrative that resonates with today’s workforce and sets you apart in a competitive talent market.We combine research-driven insights with strategic storytelling to define your EVP (Employee Value Proposition), strengthen your reputation, and create consistent brand experiences across every candidate and employee touchpoint.",
  },
  {
    Id: 3,
    label: "HR Consulting",
    slug: "hr-consulting",
    href: "/services/hr-consulting",
    brief:
      "A strong people strategy is the foundation of a thriving organization. Our HR Consulting services are designed to help businesses build scalable, compliant, and people-centric HR frameworks that support growth, improve employee experience, and strengthen organizational culture. We work closely with leadership teams to identify gaps, streamline HR processes, and design custom solutions tailored to your unique business needs.From talent management to compliance, performance optimization, and culture development, we provide the expertise that enables organizations to attract the right talent, engage employees effectively, and operate with clarity and confidence.",
  },
  {
    Id: 4,
    label: "Onboarding Support",
    slug: "onboarding-support",
    href: "/services/onboarding-support",
    brief:
      "A smooth onboarding experience sets the foundation for long-term employee success. Our onboarding solutions are designed to make every new hire feel welcomed, informed, and fully prepared for their role from day one. We manage essential steps such as documentation, compliance, IT setup, team introductions, and policy orientation to eliminate confusion and delays. Through structured guidance and continuous support, we ensure new employees adapt quickly, understand expectations clearly, and feel confident in their new environment. This streamlined approach helps organizations boost engagement, strengthen retention, and build a more efficient and connected workforce.",
  },
];

export const recruitmentLinks = [
  { name: "Help Desk", href: "#" },
  { name: "IT Support", href: "#" },
  { name: "Application Process", href: "#" },
  { name: "Job Openings", href: "/careers", hash: "#jobs" },
];

export const getInTouchLinks = [
  {
    label: "+1-877-735-0397 (Toll Free)",
    href: "tel:+1-877-735-0397",
  },
  {
    label: "hello@dignifydtalentconnect.com",
    href: "mailto:hello@dignifydtalentconnect.com",
  },
  {
    label: "ct.com",
    href: "ct.com",
  },
  {
    label: "dignifyd-sap.com",
    href: "https://dignifyd-sap.com/",
  },
  {
    label: "dignifyd.tech",
    href: "https://dignifyd.tech/",
  },
  {
    label: "dignifyd.digital",
    href: "https://www.dignifyd.digital/",
  },
];
