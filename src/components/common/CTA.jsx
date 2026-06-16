import Magnetic from "./Magnetic";

export default function CTASection({
  leading_title,
  supporting_title,
  description,
}) {
  return (
    <section className="w-full bg-[#faf7ff] py-28 text-center dark:bg-black">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-1.5 shadow-lg shadow-purple-500/10 backdrop-blur-xl dark:border-purple-500/20 dark:bg-[#1a0f2e]/60 dark:shadow-none">
          <span className="h-2 w-2 rounded-full bg-purple-500 dark:bg-purple-400"></span>

          <span className="text-xs text-gray-600 dark:text-gray-300">
            Get Started
          </span>
        </div>

        <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-5xl dark:text-white">
          {leading_title}
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {supporting_title}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm text-gray-600 md:text-base dark:text-gray-400">
          {description}
        </p>

        <div className="mt-10">
          <Magnetic>
            <button className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] transition hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]">
              Get started now →
            </button>
          </Magnetic>
        </div>

        <div className="pointer-events-none absolute left-1/2 mt-10 hidden h-48 w-48 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px] dark:hidden"></div>
      </div>
    </section>
  );
}
