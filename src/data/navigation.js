import {
  Globe2,
  UserRoundCheck,
  Megaphone,
  ClipboardCheck,
  UserPlus,
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
            label: "Talent Acquisition",
            icon: Globe2,
            link: "/services/global-recruitment",
          },
          {
            label: "Workforce Advisory",
            icon: UserRoundCheck,
            link: "/services/rpo-solutions",
          },
          {
            label: "GCC & Capability Building",
            icon: Megaphone,
            link: "/services/employer-branding",
          },
          {
            label: "Talent Intelligence",
            icon: ClipboardCheck,
            link: "/services/hr-consulting",
          },
          // {
          //   label: "Onboarding Support",
          //   icon: UserPlus,
          //   link: "/services/onboarding-support",
          // },
        ],
      },
      // {
      //   title: "Engagement Model",
      //   items: [
      //     {
      //       label: "BOT/BOOT",
      //       icon: Factory,
      //       link: "/build-operate-transfer",
      //     },
      //     {
      //       label: "GCC Services",
      //       icon: Network,
      //       link: "/gcc-services",
      //     },
      //     {
      //       label: "Managed Service Provider",
      //       icon: ShieldCheck,
      //       link: "/managed-service-provider",
      //     },
      //   ],
      // },
    ],
  },
  { label: "Contact", path: "/contact" },
  { label: "Resources", path: "/resources" },
];

export const tabs = [
  {
    id: 0,
    label: "Talent Acquisition",
    slug: "talent-acquisition",
    href: "/services/talent-acquisition",
    brief: "Global sourcing · Structured assessment · Compliant onboarding",
  },
  {
    id: 1,
    label: "Workforce Advisory",
    slug: "workforce-advisory",
    href: "/services/workforce-advisory",
    brief: "Operating model · Process & tooling · KPI/analytics",
  },
  {
    id: 2,
    label: "GCC & Capability Building",
    slug: "gcc-capability-building",
    href: "/services/gcc-capability-building",
    brief: "Plan · Build · Operate",
  },
  {
    id: 3,
    label: "Talent Intelligence",
    slug: "talent-intelligence",
    href: "/services/talent-intelligence",
    brief: "Market maps · Skills taxonomies · Benchmarking",
  },
];

export const recruitmentLinks = [
  { name: "Help Desk", href: "/helpdesk" },
  { name: "Job Openings", href: "/careers", hash: "#jobs" },
];

export const policies = [
  { name: "Privacy and Policy", href: "/privacy-policy" },
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
