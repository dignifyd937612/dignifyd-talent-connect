import ServiceForm from "@/components/common/ServiceForm";

export default function DetailandForm({ data }) {
  return (
    <section className="w-full bg-white py-16 dark:bg-black">
      <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
        <div className="mt-6">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            Service Overview
          </div>

          <h2 className="mt-6 mb-6 text-3xl leading-tight font-semibold text-gray-900 md:text-4xl dark:text-white">
            {data?.highlightTitle1}
          </h2>

          <p className="mb-10 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {data?.highlightDes1}
          </p>

          <div className="h-px w-full bg-gradient-to-r from-purple-500/30 via-purple-300/20 to-transparent dark:from-purple-500/20 dark:via-purple-500/10 dark:to-transparent" />

          <h3 className="mt-10 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {data?.highlightTitle2}
          </h3>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {data?.highlightDes2}
          </p>

          <div className="mt-10 rounded-2xl border border-purple-200 bg-gradient-to-br from-white to-purple-50/60 p-6 shadow-[0_15px_40px_rgba(168,85,247,0.08)] dark:border-purple-500/10 dark:bg-gradient-to-br dark:from-[#140a24] dark:to-[#0b0615] dark:shadow-none">
            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Why Choose Us
            </h4>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              We combine industry expertise, global reach, and technology-driven
              solutions to help organizations scale faster, build stronger
              teams, and achieve sustainable growth.
            </p>
          </div>
        </div>

        <ServiceForm />
      </div>
    </section>
  );
}
