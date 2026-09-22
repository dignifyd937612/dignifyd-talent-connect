import Image from "next/image";
import talentInsights from "../../assets/images/services/talent-insights.jpg";

const TalentConnectInsights = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 dark:bg-black">
      <div className="mx-auto max-w-[1280px] sm:px-8 lg:px-10">
        <div className="relative min-h-[450px] overflow-hidden rounded-2xl border border-purple-200 bg-gray-50 dark:border-purple-500/20 dark:bg-[#0d0b12]">
          <div className="relative min-h-[330px] lg:absolute lg:inset-y-0 lg:left-0 lg:w-[60%]">
            <div className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
              <Image
                src={talentInsights}
                alt="Talent acquisition and workforce solutions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-purple-950/20 dark:from-black/20 dark:to-purple-950/30" />
            </div>
          </div>

          <div className="relative z-10 flex min-h-[450px] items-center bg-gradient-to-br from-gray-50 via-white to-purple-50 px-7 py-12 sm:px-10 lg:ml-[52%] lg:w-[48%] lg:px-10 lg:py-16 xl:px-14 dark:from-[#100d15] dark:via-[#0d0b12] dark:to-[#180d22]">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10 w-full max-w-[600px]">
              <p className="text-xs font-semibold tracking-[0.18em] text-purple-600 uppercase sm:text-sm dark:text-purple-400">
                Talent & Workforce Solutions
              </p>

              <h2 className="mt-5 text-3xl leading-[1.12] font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[38px] xl:text-[42px] dark:text-white">
                Building Better Teams for a Changing Workforce
              </h2>

              <p className="mt-5 max-w-[540px] text-sm leading-7 text-gray-600 sm:text-base lg:text-lg dark:text-gray-400">
                From global talent acquisition to workforce advisory and
                capability building, we help organisations find the right
                talent, build stronger teams, and scale with confidence.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-xs font-semibold tracking-[0.12em] text-gray-500 uppercase dark:text-gray-500">
                  Talent Connect
                </span>

                <span className="text-purple-500 dark:text-purple-400">/</span>

                <span className="text-xs text-gray-500 sm:text-sm dark:text-gray-500">
                  Talent Intelligence & Recruitment
                </span>
              </div>

              <div className="mt-7 h-px w-20 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentConnectInsights;
