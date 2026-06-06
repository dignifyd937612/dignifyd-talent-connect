import Image from "next/image";
import styles from "./Serviceinfo.module.scss";
import { ServiceImages } from "@/data/servicesData";
import Link from "next/link";

const duplicatedImages = [...ServiceImages, ...ServiceImages, ...ServiceImages];

const ServiceInfo = () => {
  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>
              Sourcing <span>Global Talent Payrolling</span>
            </h2>

            <p>
              Global Talent Sourcing & Payrolling offers end-to-end solutions
              for sourcing and managing talent across borders. This sub-solution
              simplifies hiring, ensures compliance with local regulations, and
              provides seamless payroll management for global teams.
            </p>

            <p>
              By handling these critical workforce management functions,
              businesses can focus on their core objectives while ensuring
              operational efficiency and cost-effectiveness.
            </p>

            <Link href={"/contact"} className={styles.ctaBtn}>
              <span>Connect With Us</span>

              <div className={styles.arrow}>→</div>
            </Link>
          </div>

          <div className={styles.imageArea}>
            <div className={styles.fadeTop} />
            <div className={styles.fadeBottom} />

            <div className={styles.columns}>
              <div className={styles.columnDown}>
                {duplicatedImages.map((img, index) => (
                  <div className={styles.imageCard} key={`left-${index}`}>
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="300px"
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.columnUp}>
                {duplicatedImages.map((img, index) => (
                  <div className={styles.imageCard} key={`right-${index}`}>
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="300px"
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
