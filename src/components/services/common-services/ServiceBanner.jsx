import Image from "next/image";

export default function ServiceBanner({ darkBanner, lightBanner }) {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative rounded-[30px] p-[1px]">
          <div className="relative rounded-[30px]">
            <div className="relative w-full h-[300px] md:h-[420px] rounded-[30px] overflow-hidden">
              <Image
                src={lightBanner}
                alt="world map"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover block dark:hidden"
              />
              <Image
                src={darkBanner}
                alt="world map"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
