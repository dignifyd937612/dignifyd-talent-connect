import Image from "next/image";
import styles from "./LogoSlider.module.scss";

const LogoSlider = ({ logos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />

      <div className={styles.track}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <Image
              src={logo}
              alt="company logo"
              width={180}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
