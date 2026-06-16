import SectionHeader from "@/components/common/SectionHeader";
import styles from "./Services.module.scss";
import {
  Globe,
  ChevronsLeftRightEllipsis,
  Puzzle,
  Ribbon,
  Sparkle,
} from "lucide-react";

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
            />
            <Card
              title="HR Consultant"
              desc="Professional support for HR strategy and compliance management."
              icon={<ChevronsLeftRightEllipsis />}
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
            />
            <Card
              title="Employer Branding"
              desc="Strategies to strengthen employer branding and employee value proposition."
              icon={<Ribbon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon }) {
  return (
    <div className="rounded-2xl border border-purple-500/20 bg-white p-6 shadow-sm backdrop-blur-xl dark:bg-white/5 dark:shadow-none">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-50 dark:bg-black">
          <span className="text-purple-500">{icon}</span>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}
