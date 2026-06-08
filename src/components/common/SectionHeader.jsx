export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`mb-12 w-full  ${center ? "mx-auto text-center" : "text-left"}`}
    >
      {badge && (
        <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/25 bg-[#1a0f2e]/60 px-6 py-2 text-sm text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-xl">
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text font-medium text-transparent">
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`max-w-3xl text-2xl leading-tight font-semibold text-white md:text-4xl ${center ? "mx-auto text-center" : "text-left"}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm text-gray-400 md:text-base ${
            center ? "mx-auto text-center" : "text-left"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
