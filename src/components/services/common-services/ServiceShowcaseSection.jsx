import Image from "next/image";
import styles from "./ServiceShowcaseSection.module.scss";
import { ServiceImages } from "@/data/servicesData";
import Link from "next/link";

const duplicatedImages = [...ServiceImages, ...ServiceImages, ...ServiceImages];

const ServiceShowcaseSection = ({ children, heading, supportingHeading }) => {
  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>
              {heading} <span>{supportingHeading}</span>
            </h2>
            {children}
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

export default ServiceShowcaseSection;
