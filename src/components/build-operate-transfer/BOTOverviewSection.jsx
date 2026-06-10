import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

const BOTOverviewSection = ({
  image,
  badge = "BOT",
  title = "Why This Model Works for",
  description,
}) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <SectionHeader badge={badge} title={title} center={false} />
            <p className="mt-8 text-lg leading-8 text-white/65">
              {description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={title}
                width={800}
                height={550}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BOTOverviewSection;
