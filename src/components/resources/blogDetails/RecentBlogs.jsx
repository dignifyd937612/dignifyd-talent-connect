"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import recentBlog1 from "../../../assets/images/resources/dummy_blog.jpg";
import recentBlog2 from "../../../assets/images/resources/dummy_blog.jpg";
import recentBlog3 from "../../../assets/images/resources/dummy_blog.jpg";

const recentBlogs = [
  {
    category: "Insights",
    date: "5 min read",
    title: "Building a more flexible talent operating model",
    description:
      "How organisations can connect talent strategy with a more adaptable delivery model.",
    image: recentBlog1,
    slug: "building-flexible-talent-operating-model",
  },
  {
    category: "Strategy",
    date: "6 min read",
    title: "Why global talent models are becoming more important",
    description:
      "Exploring how distributed teams and changing business needs are reshaping talent delivery.",
    image: recentBlog2,
    slug: "global-talent-models",
  },
  {
    category: "Delivery",
    date: "4 min read",
    title: "From hiring capacity to real delivery capability",
    description:
      "Why organisations need to think beyond recruitment when building scalable teams.",
    image: recentBlog3,
    slug: "hiring-to-delivery-capability",
  },
];

export default function RecentBlogs() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-[1180px] py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40 dark:text-white/35">
                Continue Reading
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] font-semibold leading-[1.04] tracking-[-0.05em] text-[#111322] sm:text-[48px] dark:text-white">
              More ideas worth
              <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                exploring.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[14px] leading-7 text-black/50 lg:pb-1 dark:text-white/45">
            Continue exploring practical insights, perspectives and ideas from
            our resource library.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {recentBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/25 hover:shadow-[0_20px_55px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#101012]/70 dark:hover:border-purple-500/25 dark:hover:bg-white/[0.035]"
            >
              <Link
                href={`/resources/blog/${blog.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                    {blog.category}
                  </span>
                </div>

                <div className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </Link>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <BookOpen
                    size={13}
                    strokeWidth={1.5}
                    className="text-purple-500 dark:text-purple-400"
                    aria-hidden="true"
                  />

                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-black/35 dark:text-white/30">
                    {blog.date}
                  </span>
                </div>

                <h3 className="mt-5 text-[20px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#111322] transition-colors duration-300 group-hover:text-purple-500 dark:text-white dark:group-hover:text-purple-400">
                  {blog.title}
                </h3>

                <div className="mt-5 h-[2px] w-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-12" />

                <p className="mt-5 text-[13px] leading-6 text-black/50 dark:text-white/45">
                  {blog.description}
                </p>

                <Link
                  href={`/resources/blog/${blog.slug}`}
                  className="mt-6 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/60 transition-colors duration-300 hover:text-purple-500 dark:text-white/50 dark:hover:text-purple-400"
                >
                  Read article
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-violet-500/0 via-purple-500/60 to-fuchsia-500/0 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

          <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-black/30 dark:text-white/25">
            Insights · Perspectives · Practical Thinking
          </span>
        </div>
      </div>
    </section>
  );
}
