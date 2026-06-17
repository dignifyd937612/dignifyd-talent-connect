import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import presence_dark from "../../assets/images/home/globalPresence/presence-frame.webp";
import presence_light from "../../assets/images/home/globalPresence/presence-frame-light.png";

export default function GlobalPresence() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Global Presence"}
          title={"Scaling Businesses Across Continents"}
        />

        <div className="relative h-[300px] w-full md:h-[500px]">
          <Image
            src={presence_light}
            alt="global presence"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="block object-cover dark:hidden"
          />

          <Image
            src={presence_dark}
            alt="global presence"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="hidden object-cover dark:block"
          />
        </div>
      </div>
    </section>
  );
}
