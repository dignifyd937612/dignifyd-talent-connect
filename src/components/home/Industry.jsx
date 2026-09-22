"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { Code2, Building2, Landmark, HeartPulse, Factory, Users } from "lucide-react";

const data = [
  {
    tag: "Healthcare and Life Sciences",
    text: "Healthcare and Life Sciences recruitment for R&D/IT, QA/RA and clinical roles.",
    icon: <HeartPulse size={26} strokeWidth={1.8} />,
    skills: ["R&D / IT", "QA / RA", "Clinical"],
  },
  {
    tag: "Technology",
    text: "Technology recruitment for SRE/DevOps, full-stack, security roles and product.",
    icon: <Code2 size={26} strokeWidth={1.8} />,
    skills: ["SRE / DevOps", "Full-stack", "Security", "Product", "Platform", "Cloud"],
  },
  {
    tag: "Consulting",
    text: "Consulting recruitment for project management office business analyst.",
    icon: <Building2 size={26} strokeWidth={1.8} />,
    skills: ["PMO", "Business analyst", "Transformation"],
  },
  {
    tag: "BFSI",
    text: "BFSI recruitment across risk, compliance and digital banking roles. Hiring at scale for financial institutions.",
    icon: <Landmark size={26} strokeWidth={1.8} />,
    skills: ["Risk", "Compliance", "Digital banking"],
  },
  {
    tag: "Energy & Industrials",
    text: "Energy and Industrial recruitment for OT/IoT, embedded and SCADA roles. Reliable and safe candidates for critical infrastructure.",
    icon: <Factory size={26} strokeWidth={1.8} />,
    skills: ["OT / IoT", "Embedded", "SCADA"],
  },
  {
    tag: "Public Sectors and GCCs",
    text: "Public Sectors and GCC recruitment in roles for citizen services and shared services.",
    icon: <Users size={26} strokeWidth={1.8} />,
    skills: ["Citizen Services", "Shared Services"],
  },
];

export default function Industry() {
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;

    return 1;
  };

  const updateCarouselState = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const scrollLeft = container.scrollLeft;

    setIsAtStart(scrollLeft <= 5);
    setIsAtEnd(scrollLeft >= maxScrollLeft - 5);

    const card = container.querySelector("[data-card]");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;
    const step = cardWidth + gap;

    if (!step) return;

    const index = Math.round(scrollLeft / step);

    const maxIndex = Math.max(0, data.length - getVisibleCards());

    setActiveIndex(Math.min(index, maxIndex));
  };

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const card = container.querySelector("[data-card]");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;

    container.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const card = container.querySelector("[data-card]");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    updateCarouselState();

    const handleScroll = () => {
      updateCarouselState();
    };

    const handleResize = () => {
      updateCarouselState();
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCards = getVisibleCards();

  const indicatorCount = Math.max(1, data.length - visibleCards + 1);

  return (
    <section className="mb-10 w-full bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeader badge="Six Sectors" title="Industry Expertise" description="Our recruiters work across all sectors. They know the roles and where to find the candidates" />

        <div className="relative mx-0 mt-14 sm:mx-12">
          <button type="button" onClick={() => scrollCarousel("prev")} disabled={isAtStart} aria-label="Previous industries" className={`absolute top-1/2 -left-14 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 sm:flex ${isAtStart ? "cursor-not-allowed border-gray-200 bg-gray-100/70 text-gray-300 dark:border-white/10 dark:bg-[#111114]/50 dark:text-white/20" : "cursor-pointer border-gray-200 bg-white text-gray-700 shadow-lg hover:scale-110 hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-[#111114] dark:text-white dark:hover:border-purple-400 dark:hover:text-purple-400"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button type="button" onClick={() => scrollCarousel("next")} disabled={isAtEnd} aria-label="Next industries" className={`absolute top-1/2 -right-14 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 sm:flex ${isAtEnd ? "cursor-not-allowed border-gray-200 bg-gray-100/70 text-gray-300 dark:border-white/10 dark:bg-[#111114]/50 dark:text-white/20" : "cursor-pointer border-gray-200 bg-white text-gray-700 shadow-lg hover:scale-110 hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-[#111114] dark:text-white dark:hover:border-purple-400 dark:hover:text-purple-400"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div ref={carouselRef} className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden">
            {data.map((item, index) => (
              <div key={index} data-card className="w-[calc(100%-16px)] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <IndustryCard item={item} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400 sm:hidden">
            <span className="h-px w-6 bg-gray-300 dark:bg-white/10" />

            <span>Swipe to explore</span>

            <span className="h-px w-6 bg-gray-300 dark:bg-white/10" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({
              length: indicatorCount,
            }).map((_, index) => (
              <button key={index} type="button" onClick={() => scrollToIndex(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]" : "w-1.5 bg-gray-300 dark:bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item }) {
  return (
    <div className="group relative flex h-[340px] w-full flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-gradient-to-br from-white via-white to-purple-50/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] sm:h-[340px] dark:border-white/10 dark:from-[#111017] dark:via-[#0b0b0f] dark:to-[#120d19] dark:hover:border-purple-400/40 dark:hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]">
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px] transition-all duration-700 group-hover:bg-purple-600/20" />

      <div className="relative z-10 min-h-0 flex-1">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] border border-purple-500/40 bg-purple-500/10 text-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-500 group-hover:border-purple-400/70 group-hover:bg-purple-500/15 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.22)] dark:text-purple-400">{item.icon}</div>

          <h3 className="line-clamp-2 text-xl leading-[1.25] font-bold text-gray-900 transition-colors duration-300 dark:text-white">{item.tag}</h3>
        </div>

        <p className="mt-7 line-clamp-4 text-base leading-[1.8] text-gray-600 dark:text-gray-400">{item.text}</p>
      </div>

      <div className="relative z-10 mt-5 flex max-h-[70px] shrink-0 flex-wrap content-start gap-1.5 overflow-hidden">
        {item.skills?.map((skill) => (
          <span key={skill} className="shrink-0 rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-sm leading-none font-medium text-gray-700 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 dark:border-purple-400/25 dark:bg-purple-500/5 dark:text-gray-300 dark:group-hover:border-purple-400/50 dark:group-hover:bg-purple-500/10">
            {skill}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition-all duration-700 group-hover:w-[70%] group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-purple-400/0 transition-all duration-500 group-hover:border-purple-400/15" />
    </div>
  );
}
