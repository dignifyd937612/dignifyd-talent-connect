import SectionHeader from "@/components/common/SectionHeader";
import styles from "./Services.module.scss";
import {
  Globe,
  ChevronsLeftRightEllipsis,
  Puzzle,
  Ribbon,
  Sparkle,
} from "lucide-react";
import Link from "next/link";
import global from "../../assets/images/services/global-recruitment.jpg";
import Hrconsulting from "../../assets/images/services/hr-consulting.jpg";
import emp_branding from "../../assets/images/services/employer-branding.jpg";
import rpoSolutions from "../../assets/images/services/onboarding_Support.jpg";
import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Our Expertise"}
          title={"Comprehensive Talent & Workforce Capabilities"}
          description={
            "Empowering organizations with end-to-end workforce solutions designed to attract, develop, and retain world-class talent."
          }
        />
        <div className="mt-16 grid items-center gap-10 md:grid-cols-3">
          <div className="space-y-6">
            <Card
              title="Global Recruitment"
              desc="Executive search, permanent hiring, and flexible contract staffing solutions."
              icon={<Globe />}
              link={"/services/global-recruitment"}
              image={global}
            />
            <Card
              title="HR Consultant"
              desc="Professional support for HR strategy and compliance management."
              icon={<ChevronsLeftRightEllipsis />}
              link={"/services/hr-consulting"}
              image={Hrconsulting}
            />
          </div>
          <div className="flex justify-center">
            <div className={styles.wrapper}>
              <div className={styles.pulse}></div>

              <div className={`${styles.ring} ${styles.ringOuter}`}>
                <div className={`${styles.orbitIcon} ${styles.iconOuter1}`}>
                  <ChevronsLeftRightEllipsis
                    size={16}
                    className="text-purple-400"
                  />
                </div>
                <div className={`${styles.orbitIcon} ${styles.iconOuter2}`}>
                  <Puzzle size={16} className="text-purple-400" />
                </div>
              </div>

              <div className={`${styles.ring} ${styles.ringMiddle}`}>
                <div className={`${styles.orbitIcon} ${styles.iconMiddle1}`}>
                  <Globe size={16} className="text-purple-400" />
                </div>
                <div className={`${styles.orbitIcon} ${styles.iconMiddle2}`}>
                  <Ribbon size={16} className="text-purple-400" />
                </div>
              </div>

              <div className={`${styles.ring} ${styles.ringInner}`}></div>

              <div className={styles.centerCircle}>
                <Sparkle className="text-white" size={28} />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card
              title="RPO Solutions"
              desc="Full or modular outsourcing models for efficient recruitment processes."
              icon={<Puzzle />}
              link={"/services/rpo-solutions"}
              image={emp_branding}
            />
            <Card
              title="Employer Branding"
              desc="Strategies to strengthen employer branding and employee value proposition."
              icon={<Ribbon />}
              link={"/services/employer-branding"}
              image={rpoSolutions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon, link, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white shadow-sm backdrop-blur-xl hover:border-purple-500/60 dark:bg-white/5 dark:shadow-none">
      {image && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-[0.30] transition-opacity duration-300 group-hover:opacity-[0.18]"
          />

          <div className="absolute inset-0 bg-white/80 dark:bg-black/75" />
        </div>
      )}

      <Link href={link} className="relative z-10 block p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-50 dark:bg-black">
            <span className="text-purple-500">{icon}</span>
          </div>

          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
      </Link>
    </div>
  );
}
