import SectionHeader from "../common/SectionHeader";

const WorkforceChallenges = ({ data, badge, title, description }) => {
  return (
    <section className="mt-10 py-20">
      <SectionHeader badge={badge} title={title} description={description} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c61df2]/40 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,29,242,0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#c61df2] to-[#e12afb] text-white shadow-[0_0_30px_rgba(198,29,242,0.35)] transition-transform duration-500 group-hover:scale-110">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mb-4 text-2xl leading-snug font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-white/65">{item.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c61df2] to-[#e12afb] transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkforceChallenges;
