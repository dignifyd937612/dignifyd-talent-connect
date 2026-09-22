"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  UserRound,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Plus,
  X,
} from "lucide-react";
import "./Services.module.scss";
import SectionHeader from "../common/SectionHeader";

const tabs = [
  {
    Id: 0,
    label: "Talent Acquisition",
    slug: "talent-acquisition",
    href: "/services/talent-acquisition",
    brief: "Global sourcing · Structured assessment · Compliant onboarding",
  },
  {
    Id: 1,
    label: "Workforce Advisory",
    slug: "workforce-advisory",
    href: "/services/workforce-advisory",
    brief: "Operating model · Process & tooling · KPI/analytics",
  },
  {
    Id: 2,
    label: "GCC & Capability Building",
    slug: "gcc-capability-building",
    href: "/services/gcc-capability-building",
    brief: "Plan · Build · Operate",
  },
  {
    Id: 3,
    label: "Talent Intelligence",
    slug: "talent-intelligence",
    href: "/services/talent-intelligence",
    brief: "Market maps · Skills taxonomies · Benchmarking",
  },
];

const serviceDetails = {
  0: {
    badge: "Global sourcing · Structured assessment · Compliant onboarding",
    title: "Talent Acquisition",
    description:
      "End-to-end recruitment for niche specialists, leadership roles, and volume hiring across 35+ countries.",

    cards: [
      {
        icon: Search,
        title: "Niche & specialist recruitment",
        description:
          "Technology, cybersecurity, cloud, and data talent sourced from 80,000+ profiles and 12,000+ verified referral networks.",
      },
      {
        icon: UserRound,
        title: "Leadership & CXO search",
        description:
          "Confidential leadership mandates through direct headhunting, structured behavioural assessment, and stakeholder calibration.",
      },
      {
        icon: BarChart3,
        title: "Volume hiring & RPO",
        description:
          "Dedicated hiring pods for 50+ roles per mandate, with sourcing plans, delivery managers, SLA frameworks, embedded recruiters, and flexible RPO support.",
      },
    ],

    clientGets: [
      {
        number: "1",
        text: "Discovery brief (Week 1–2)",
      },
      {
        number: "2",
        text: "Hiring blueprint with scorecards (Week 2–3)",
      },
      {
        number: "3",
        text: "Curated shortlist (Week 3–4)",
      },
      {
        number: "4",
        text: "Quarterly performance pack (ongoing)",
      },
    ],
  },

  1: {
    badge: "Operating model · Process & tooling · KPI/analytics",
    title: "Workforce Advisory",
    description:
      "We rebuild how your team evaluates candidates — scorecards, interview panels, operating models, governance.",

    cards: [
      {
        icon: BriefcaseBusiness,
        title: "Assessment redesign",
        description:
          "Structured scorecards and rubrics with documented methodology, consistent evaluation frameworks, and assessment audit trails for compliance.",
      },
      {
        icon: Search,
        title: "InterviewOps",
        description:
          "Panel training, interview loops, scheduling frameworks, and evaluation rubrics your team can use independently.",
      },
      {
        icon: UserRound,
        title: "Panel enablement",
        description:
          "STAR methodology training, behavioural profiling, and calibration sessions that help hiring managers evaluate candidates consistently.",
      },
    ],

    clientGets: [
      {
        number: "1",
        text: "Assessment framework with methodology",
      },
      {
        number: "2",
        text: "Interview guides and panel training",
      },
      {
        number: "3",
        text: "Operating model blueprint with KPIs",
      },
      {
        number: "4",
        text: "Governance cadence setup",
      },
    ],
  },

  2: {
    badge: "Plan · Build · Operate",
    title: "GCC & Capability Building",
    description:
      "We set up capability centres in new countries — location strategy, staffing, operations, and handover.",

    cards: [
      {
        icon: Search,
        title: "Location strategy",
        description:
          "Cost, compliance, talent availability, and infrastructure analysis with multi-country comparisons and risk assessment.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Build-Operate-Transfer",
        description:
          "We build, staff, and run capability centres under defined SLAs, then transfer operations when self-sufficient using standardised BOT playbooks.",
      },
      {
        icon: UserRound,
        title: "Leadership & ongoing operations",
        description:
          "CXO and functional head hiring combined with continued recruitment, pipeline maintenance, and operational scaling after the build phase.",
      },
    ],

    clientGets: [
      {
        number: "1",
        text: "Location and market assessment",
      },
      {
        number: "2",
        text: "GCC build and operating blueprint",
      },
      {
        number: "3",
        text: "Leadership and functional hiring",
      },
      {
        number: "4",
        text: "Operational handover and scaling",
      },
    ],
  },

  3: {
    badge: "Market maps · Skills taxonomies · Benchmarking",
    title: "Talent Intelligence",
    description:
      "What it costs, what is available, and how your offer compares — before you commit to hiring in a new market.",

    cards: [
      {
        icon: Search,
        title: "Talent insights",
        description:
          "Market maps across 35+ countries with availability by skill, seniority, location, salary band, and supply/demand ratios.",
      },
      {
        icon: BarChart3,
        title: "Compensation intelligence",
        description:
          "Benchmarking by role, seniority, and geography using live market data and our placement history.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Location analytics",
        description:
          "Cost, talent depth, regulatory complexity, and infrastructure analysis that feeds directly into GCC location strategy.",
      },
    ],

    clientGets: [
      {
        number: "1",
        text: "Market map with talent pool sizing",
      },
      {
        number: "2",
        text: "Compensation benchmark by role and geo",
      },
      {
        number: "3",
        text: "Location comparison matrix",
      },
    ],
  },
};

const ServicesSection = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openCard, setOpenCard] = useState(0);

  const activeService = serviceDetails[activeTab];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setOpenCard(0);
  }, [activeTab]);

  const handleTabChange = (index) => {
    if (index === activeTab) return;

    setActiveTab(index);
  };

  return (
    <section
      ref={sectionRef}
      className={`services-section py-16 sm:px-6 sm:py-20 lg:px-8 ${isVisible ? "is-visible" : ""}`}
    >
      <SectionHeader
        badge={"Transforming Workplaces"}
        title={"What Drives Us: Passion for People, Dedication to Results"}
      />

      <div className="mx-auto max-w-7xl">
        <div className="services-tabs mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={tab.Id}
                type="button"
                onClick={() => handleTabChange(index)}
                className={`services-tab group relative cursor-pointer overflow-hidden rounded-xl border px-5 py-4 text-left transition-all duration-300 ${isActive ? "border-purple-400/80 bg-gradient-to-br from-purple-500/10 via-purple-500/[0.04] to-pink-500/[0.08] shadow-[0_0_35px_rgba(168,85,247,0.08)]" : "border-gray-200 bg-gray-50/50 hover:border-purple-300/50 hover:bg-purple-50/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-purple-500/30 dark:hover:bg-purple-500/[0.025]"}`}
              >
                <span className="services-tab-glow pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />

                <div className="relative z-10">
                  <span className="services-tab-number block text-[10px] font-medium tracking-[0.16em] text-purple-500 dark:text-purple-400">
                    0{index + 1}
                  </span>

                  <h3
                    className={`services-tab-title mt-1 text-base font-semibold sm:text-lg ${isActive ? "text-gray-900 dark:text-white" : "text-gray-800 dark:text-gray-200"}`}
                  >
                    {tab.label}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-500">
                    {tab.brief}
                  </p>
                </div>

                {isActive && (
                  <span className="services-tab-active-line absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                )}
              </button>
            );
          })}
        </div>

        <div
          key={activeTab}
          className="services-detail relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-8 lg:p-10 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="services-detail-orb pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="services-detail-orb services-detail-orb-secondary pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-pink-500/[0.06] blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="services-content">
              <div className="services-badge inline-flex rounded-md bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                {activeService.badge}
              </div>

              <h2 className="services-title mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {activeService.title}
              </h2>

              <p className="services-description mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                {activeService.description}
              </p>

              <div className="services-client-gets mt-8">
                <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-gray-500 uppercase dark:text-gray-500">
                  What the client gets
                </p>

                <div className="space-y-3">
                  {activeService.clientGets.map((item, index) => (
                    <div
                      key={item.number}
                      className="services-client-item flex items-start gap-3"
                      style={{
                        "--item-index": index,
                      }}
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-400/60">
                        <Check className="h-2.5 w-2.5 text-purple-500" />
                      </span>

                      <span className="text-sm leading-5 text-gray-600 dark:text-gray-400">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="services-cta mt-8">
                <button
                  type="button"
                  className="rounded-lg border border-purple-500/60 bg-transparent px-4 py-2 text-sm font-medium text-purple-600 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 dark:text-purple-300"
                >
                  Talk to us about {activeService.title.toLowerCase()} →
                </button>
              </div>
            </div>

            <div className="services-right">
              <p className="services-included-label mb-4 text-[11px] font-medium tracking-[0.18em] text-gray-500 uppercase dark:text-gray-500">
                What is included
              </p>

              <div className="space-y-2">
                {activeService.cards.map((card, index) => {
                  const Icon = card.icon;
                  const isOpen = openCard === index;

                  return (
                    <div
                      key={card.title}
                      className={`services-accordion overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-purple-500/60 bg-purple-500/[0.035]" : "border-gray-200 bg-white/40 hover:border-purple-300/40 dark:border-white/10 dark:bg-white/[0.015]"}`}
                      style={{
                        "--card-index": index,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenCard(isOpen ? -1 : index)}
                        className="flex w-full cursor-pointer items-center gap-4 px-4 py-4 text-left"
                      >
                        <span className="text-[10px] font-medium tracking-[0.12em] text-gray-400">
                          0{index + 1}
                        </span>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-all duration-300 ${isOpen ? "bg-purple-500/15 text-purple-500" : "text-gray-400"}`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <span className="flex-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {card.title}
                        </span>

                        <span
                          className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        >
                          {isOpen ? (
                            <X className="h-3.5 w-3.5 text-purple-400" />
                          ) : (
                            <Plus className="h-3.5 w-3.5 text-gray-500" />
                          )}
                        </span>
                      </button>

                      <div
                        className={`services-accordion-content ${isOpen ? "is-open" : ""}`}
                      >
                        <div className="px-14 pb-5">
                          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
