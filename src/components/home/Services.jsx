import SectionHeader from "@/components/common/SectionHeader";
import styles from "./Services.module.scss";
import {
  Globe,
  ChevronsLeftRightEllipsis,
  Puzzle,
  Ribbon,
  Sparkle,
} from "lucide-react";
import emp_branding from "../../assets/images/services/employer-branding.jpg";
import rpoSolutions from "../../assets/images/services/onboarding_Support.jpg";

export default function Services() {
  return (
    <section className="w-full bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={"Our Expertise"}
          title={"What We Do"}
          description={
            "Empowering organizations with end-to-end workforce solutions designed to attract, develop, and retain world-class talent."
          }
        />
        <div className="mt-16 grid items-center gap-10 md:grid-cols-3">
          <div className="space-y-6">
            <Card
              title="Talent Acquisition"
              desc="Permanent and contract hiring for specialists, leadership, and scale hiring across 35+ countries. We provide targeted search and full recruitment process outsourcing."
              icon={<Globe />}
              link="/services/global-recruitment"
            />

            <Card
              title="Workforce Advisory"
              desc="We improve candidate evaluation through scorecards, rubrics, and panel training. We optimize assessments, interview processes, and operating models."
              icon={<ChevronsLeftRightEllipsis />}
              link="/services/hr-consulting"
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
              title="GCC and Capability Building"
              desc="We help companies set up offices in new countries by hiring the team and running operations until the business is stable. We then hand it over when they are ready."
              icon={<Puzzle />}
              link="/services/rpo-solutions"
              image={emp_branding}
            />

            <Card
              title="Talent Intelligence"
              desc="Before you hire in a new market, we tell you what it will cost, which skills are available, and how your offer compares with others in the market."
              icon={<Ribbon />}
              link="/services/employer-branding"
              image={rpoSolutions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white shadow-sm backdrop-blur-xl hover:border-purple-500/60 dark:bg-white/5 dark:shadow-none">
      <div className="relative z-10 block p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-50 dark:bg-black">
            <span className="text-purple-500">{icon}</span>
          </div>

          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
