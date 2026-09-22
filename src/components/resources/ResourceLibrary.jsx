"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  FileText,
  Lightbulb,
  Search,
  X,
} from "lucide-react";

const categories = [
  "All Resources",
  "Insights",
  "Case Studies",
  "Guides",
  "Reports",
];

const resources = [
  {
    category: "Insights",
    title: "The Future of Global Talent Delivery",
    description:
      "How organisations can rethink talent and delivery models for a changing business environment.",
    meta: "6 min read",
    icon: Lightbulb,
  },
  {
    category: "Case Studies",
    title: "Building a Scalable Delivery Capability",
    description:
      "A closer look at how a structured delivery model helped support sustainable organisational growth.",
    meta: "8 min read",
    icon: BarChart3,
  },
  {
    category: "Guides",
    title: "Designing the Right Talent Model",
    description:
      "A practical framework for aligning talent structures with business priorities and delivery needs.",
    meta: "10 min read",
    icon: BookOpen,
  },
  {
    category: "Reports",
    title: "Global Workforce Perspectives",
    description:
      "Key observations and perspectives shaping the future of workforce and talent strategy.",
    meta: "12 min read",
    icon: FileText,
  },
  {
    category: "Insights",
    title: "From Requirement to Delivery",
    description:
      "Understanding the steps that turn a business requirement into an effective delivery model.",
    meta: "5 min read",
    icon: Lightbulb,
  },
  {
    category: "Guides",
    title: "A Practical Approach to Scaling",
    description:
      "Considerations for organisations planning their next stage of talent and operational growth.",
    meta: "7 min read",
    icon: BookOpen,
  },
];

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      if (!debouncedSearch) {
        return matchesCategory;
      }

      const searchableContent = `
        ${resource.title}
        ${resource.description}
        ${resource.category}
        ${resource.meta}
      `.toLowerCase();

      const matchesSearch = searchableContent.includes(debouncedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debouncedSearch]);

  const clearSearch = () => {
    setSearchValue("");
    setDebouncedSearch("");
  };

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1280px] py-20 sm:px-8 sm:py-24 lg:px-11 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40 dark:text-white/35">
                Resource Library
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111322] dark:text-white sm:text-[48px]">
              Explore ideas, insights
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                and practical thinking.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[14px] leading-7 text-black/50 dark:text-white/45 lg:pb-1">
            Browse our latest perspectives, guides and case studies across
            talent, delivery and organisational strategy.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-y border-black/[0.07] py-5 dark:border-white/[0.07] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-[10px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#111322] text-white shadow-sm dark:bg-white dark:text-black"
                      : "border border-black/[0.07] bg-white/60 text-black/45 hover:border-purple-500/25 hover:text-purple-500 dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-white/40 dark:hover:border-purple-400/25 dark:hover:text-purple-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-[260px]">
            <Search
              size={14}
              strokeWidth={1.5}
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-black/35 dark:text-white/30"
              aria-hidden="true"
            />

            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search resources"
              aria-label="Search resources"
              className="h-9 w-full border-b border-black/[0.08] bg-transparent pl-6 pr-8 text-[11px] text-[#111322] outline-none placeholder:text-black/30 focus:border-purple-500/40 dark:border-white/[0.08] dark:text-white dark:placeholder:text-white/25 dark:focus:border-purple-400/40"
            />
          </div>
        </div>

        <div className="mt-7 flex min-h-[20px] items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/30 dark:text-white/25">
            {filteredResources.length}{" "}
            {filteredResources.length === 1 ? "resource" : "resources"}
          </p>

          {debouncedSearch && (
            <p className="text-[10px] text-black/35 dark:text-white/30">
              Results for{" "}
              <span className="font-semibold text-black/55 dark:text-white/50">
                "{debouncedSearch}"
              </span>
            </p>
          )}
        </div>

        {filteredResources.length > 0 ? (
          <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="group relative flex min-h-[365px] flex-col overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/75 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.025)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#101012]/75 dark:shadow-[0_12px_35px_rgba(0,0,0,0.14)] dark:hover:border-purple-500/25 dark:hover:bg-white/[0.035] dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.24)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-purple-500/15 bg-gradient-to-br from-violet-500/[0.08] to-fuchsia-500/[0.06] text-purple-500 transition-transform duration-500 group-hover:-translate-y-1 dark:border-purple-400/15 dark:text-purple-400">
                      <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                    </div>

                    <span className="rounded-full border border-purple-500/10 bg-purple-500/[0.05] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-purple-500 dark:border-purple-400/10 dark:bg-purple-500/[0.07] dark:text-purple-400">
                      {resource.category}
                    </span>
                  </div>

                  <div className="mt-8 flex-1">
                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-black/30 dark:text-white/25">
                      Resource {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#111322] dark:text-white">
                      {resource.title}
                    </h3>

                    <div className="mt-5 h-[2px] w-9 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-12" />

                    <p className="mt-5 text-[13px] leading-6 text-black/50 dark:text-white/45">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-5 dark:border-white/[0.07]">
                    <span className="text-[10px] text-black/35 dark:text-white/30">
                      {resource.meta}
                    </span>

                    <Link
                      href="#"
                      aria-label={`Read ${resource.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-black/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-purple-500/25 group-hover:text-purple-500 dark:border-white/[0.08] dark:text-white/35 dark:group-hover:border-purple-400/25 dark:group-hover:text-purple-400"
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-60 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 flex min-h-[300px] flex-col items-center justify-center rounded-[20px] border border-dashed border-black/[0.09] bg-black/[0.015] px-6 text-center dark:border-white/[0.09] dark:bg-white/[0.015]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/15 bg-purple-500/[0.06] text-purple-500 dark:border-purple-400/15 dark:bg-purple-500/[0.08] dark:text-purple-400">
              <Search size={19} strokeWidth={1.4} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-[#111322] dark:text-white">
              No resources found
            </h3>

            <p className="mt-2 max-w-[360px] text-[12px] leading-6 text-black/40 dark:text-white/35">
              Try a different search term or choose another resource category.
            </p>

            {(searchValue || activeCategory !== "All Resources") && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Resources");
                  clearSearch();
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-[10px] font-semibold text-black/60 transition-all duration-300 hover:border-purple-500/25 hover:text-purple-500 dark:border-white/[0.09] dark:bg-white/[0.04] dark:text-white/55 dark:hover:border-purple-400/25 dark:hover:text-purple-400"
              >
                Reset filters
                <X size={12} strokeWidth={1.5} />
              </button>
            )}
          </div>
        )}

        {filteredResources.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Link
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-black/[0.09] bg-white/70 py-3 text-[11px] font-semibold text-[#111322] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/25 hover:text-purple-500 dark:border-white/[0.09] dark:bg-white/[0.025] dark:text-white dark:hover:border-purple-400/25 dark:hover:text-purple-400"
            >
              View all resources
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
