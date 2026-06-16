import SectionHeader from "@/components/common/SectionHeader";
import { Building2, MapPinHouse } from "lucide-react";
import Link from "next/link";
import uiUX from "../../assets/images/home/jobs/UI-UX.jpg";
import developer_img from "../../assets/images/home/jobs/frontEnd-Developer.jpg";
import graphic_designer from "../../assets/images/home/jobs/graphic-designer.jpg";
import Image from "next/image";

const jobs = [
  {
    title: "UI/UX Designer",
    company: "Dignifyd Digital",
    location: "Delhi / Remote",
    img: uiUX,
  },
  {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore / Remote",
    img: developer_img,
  },
  {
    title: "Graphic Designer",
    company: "Creative Studio Co.",
    location: "Delhi / Onsite",
    img: graphic_designer,
  },
];

export default function Jobs() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Dream Big, Achieve Bigger"}
          title={"Discover Roles That Match Your Ambition"}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>

        <div className="mt-14">
          <Link
            href={{ pathname: "/careers", hash: "jobs" }}
            className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            View All Jobs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-purple-500/15 bg-gradient-to-b from-purple-50 via-white to-purple-50 p-6 shadow-lg shadow-purple-500/5 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 dark:border-purple-500/20 dark:bg-gradient-to-b dark:from-[#140a25] dark:via-[#10081d] dark:to-[#0b0615] dark:shadow-[0_0_40px_rgba(168,85,247,0.08)] dark:hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-pink-500/[0.03] dark:hidden" />

      <div className="relative z-10">
        <div className="mb-6 rounded-xl border border-purple-100 bg-purple-50/50 p-2 dark:border-white/10 dark:bg-white/5">
          <div className="relative h-40 w-full overflow-hidden rounded-lg">
            <Image
              src={job.img}
              alt={job.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <h3 className="mb-2 flex text-lg font-semibold text-gray-900 dark:text-white">
          {job.title}
        </h3>

        <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Building2
            size={16}
            className="text-purple-500 dark:text-purple-400"
          />
          {job.company}
        </p>

        <p className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <MapPinHouse
            size={16}
            className="text-purple-500 dark:text-purple-400"
          />
          {job.location}
        </p>

        <div className="mt-6 flex justify-end">
          <Link
            href={"/careers/1"}
            className="text-sm text-purple-500 transition hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
