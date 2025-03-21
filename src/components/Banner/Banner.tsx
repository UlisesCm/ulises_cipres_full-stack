import Image from "next/image";
import styles from "./Banner.module.css";

export const Banner = ({ artist }: any) => {
  const TEST = "/images/artist.png";
  const VERIFIED_SRC = "/icons/verificado.svg";
  return (
    <div className={styles.main_container}>
      <Image src={TEST} width={237} height={236} alt="artist" />
      <div className={styles.text_container}>
        <div className={styles.d_flex}>
          <Image src={VERIFIED_SRC} width={24} height={24} alt="verified" />
          <p>Artista certificado</p>
        </div>
        <h1>{artist}</h1>
        <p>Followers: n</p>
        <p>oyentes mensuales</p>
      </div>
    </div>
  );
};
