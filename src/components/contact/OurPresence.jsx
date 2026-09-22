import Image from "next/image";
import { ArrowRight, Building2, Globe2, Landmark } from "lucide-react";

import "./OurPresence.scss";

import londonImage from "../../assets/images/contactUs/our_presence/london.jpg";
import dubaiImage from "../../assets/images/contactUs/our_presence/dubai.jpg";
import singaporeImage from "../../assets/images/contactUs/our_presence/singapore.jpg";
import torontoImage from "../../assets/images/contactUs/our_presence/toronto.jpg";
import springfieldImage from "../../assets/images/contactUs/our_presence/springfield.jpg";
import delhiImage from "../../assets/images/contactUs/our_presence/delhi.jpg";

const locations = [
  {
    city: "London",
    country: "United Kingdom",
    image: londonImage,
    icon: Landmark,
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    image: dubaiImage,
    icon: Building2,
  },
  {
    city: "Singapore",
    country: "Singapore",
    image: singaporeImage,
    icon: Building2,
  },
  {
    city: "Toronto",
    country: "Canada",
    image: torontoImage,
    icon: Landmark,
  },
  {
    city: "Chicago",
    country: "United States",
    image: springfieldImage,
    icon: Landmark,
  },
  {
    city: "Delhi NCR",
    country: "India",
    image: delhiImage,
    icon: Landmark,
  },
];

export default function OurPresence() {
  return (
    <section className="relative w-full bg-transparent">
      <div className="mx-auto max-w-[1400px] py-14 sm:px-7 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/[0.45] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/[0.1] dark:bg-white/[0.02] dark:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-7 lg:p-8">
          <div className="grid items-start gap-8 lg:grid-cols-[255px_minmax(0,1fr)] lg:gap-8">
            <div className="presence-intro flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/15 bg-purple-500/[0.06] text-purple-500 dark:border-purple-400/20 dark:bg-purple-500/[0.08] dark:text-purple-400">
                  <Globe2 size={13} strokeWidth={1.5} />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-500 dark:text-purple-400">
                  Global Presence
                </span>
              </div>

              <h2 className="mt-5 text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#17171c] dark:text-white sm:text-[31px]">
                Six capability centres.
                <span className="block">
                  One{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    global
                  </span>{" "}
                  standard.
                </span>
              </h2>

              <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

              <p className="mt-5 max-w-[270px] text-[12px] leading-[1.7] text-black/50 dark:text-white/45">
                Our people, processes and technology work together across six
                centres to deliver talent solutions that support your growth.
              </p>

              <button
                type="button"
                className="group mt-6 flex w-full items-center justify-between rounded-lg border border-purple-500/20 bg-purple-500/[0.025] px-4 py-3 text-left text-[11px] font-medium text-[#22222a] transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.06] hover:-translate-y-0.5 dark:border-purple-400/25 dark:bg-purple-500/[0.03] dark:text-white dark:hover:border-purple-400/45 dark:hover:bg-purple-500/[0.07]"
              >
                <span>Explore Our Global Presence</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {locations.map((location, index) => {
                const LocationIcon = location.icon;

                return (
                  <article
                    key={location.city}
                    className="presence-location group self-start overflow-hidden rounded-[13px] border border-black/[0.08] bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:border-white/[0.1] dark:bg-[#0b0c14]/90 dark:hover:border-purple-500/40 dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                    style={{
                      "--presence-delay": `${index * 80}ms`,
                    }}
                  >
                    <div className="relative h-[260px] w-full overflow-hidden bg-black/5 dark:bg-black/20">
                      <Image
                        src={location.image}
                        alt={`${location.city}, ${location.country}`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    </div>

                    <div className="relative flex h-[86px] flex-col items-center bg-white/95 px-2 pb-3 text-center dark:bg-[#0b0c14]/95">
                      <div className="relative -mt-[18px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border border-purple-400/30 bg-gradient-to-br from-violet-700 to-purple-600 text-purple-100 shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/60 group-hover:shadow-[0_8px_20px_rgba(139,92,246,0.2)]">
                        <LocationIcon
                          size={15}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-[9px] text-[12px] font-semibold leading-[1.2] text-[#17171c] dark:text-white">
                        {location.city}
                      </h3>

                      <p className="mt-1 text-[8px] leading-[1.3] text-black/40 dark:text-white/40">
                        {location.country}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex min-h-[52px] items-center gap-3 rounded-[10px] border border-purple-500/10 bg-purple-500/[0.025] px-3 py-2.5 dark:border-purple-400/10 dark:bg-purple-500/[0.025] sm:gap-4 sm:px-4">
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-purple-500/15 bg-purple-500/[0.05] text-purple-500 dark:border-purple-400/20 dark:bg-purple-500/[0.06] dark:text-purple-400">
              <Globe2 size={14} strokeWidth={1.4} />
            </div>

            <div className="h-5 w-px shrink-0 bg-black/10 dark:bg-white/[0.08]" />

            <p className="text-[10px] leading-5 text-black/50 dark:text-white/45 sm:text-[11px]">
              A distributed delivery model that brings together local market
              understanding and{" "}
              <span className="font-medium text-purple-500 dark:text-purple-400">
                global talent expertise.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
