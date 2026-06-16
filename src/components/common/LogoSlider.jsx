import Image from "next/image";
import styles from "./LogoSlider.module.scss";

const LogoSlider = ({ darkLogo, lightLogo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />

      <div className={styles.track}>
        {[...lightLogo, ...lightLogo].map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <Image
              src={logo}
              alt="company logo"
              width={180}
              height={70}
              className="object-contain dark:hidden"
            />
            <Image
              src={darkLogo[index % darkLogo.length]}
              alt="company logo"
              width={180}
              height={70}
              className="hidden object-contain dark:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
