"use client";

export default function ProcessCard({ data, index }) {
  const Icon = data.icon;

  return (
    <div
      className="sticky"
      style={{
        top: `${120 + index * 35}px`,
        zIndex: index + 1,
      }}
    >
      <div className="mb-10 rounded-3xl border border-purple-500/20 bg-white/90 p-10 shadow-[0_25px_80px_rgba(168,85,247,.15)] backdrop-blur-xl transition-all duration-500 dark:bg-[#090909]/90">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-purple-500/10 px-4 py-2 text-xs font-semibold tracking-[3px] text-purple-500">
            STEP {data.step}
          </span>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
            <Icon size={24} />
          </div>
        </div>

        <h3 className="mt-8 text-3xl font-semibold dark:text-white">
          {data.title}
        </h3>

        <p className="mt-6 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
          {data.desc}
        </p>
      </div>
    </div>
  );
}
