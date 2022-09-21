import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Kalauns got the best Pizza in Town!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Locations</h1>
          <p className={styles.text}>
            Andheri west, S.V road
            <br /> Mumbai, 400058
            <br /> (123) 867-1010
          </p>
          <p className={styles.text}>
            Mira Road
            <br /> Thane, 123445
            <br /> (123) 867-1012
          </p>
          <p className={styles.text}>
            Bandra west.
            <br /> Mumbai, 123344
            <br /> (123) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
