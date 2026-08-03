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
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={70}
              className="object-contain dark:hidden"
            />
            <Image
              src={darkLogo[index % darkLogo.length].src}
              alt={darkLogo[index % darkLogo.length].alt}
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
