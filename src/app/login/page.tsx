import Image from "next/image";
import React from "react";
import styles from "./login.module.css";
export default function page() {
  const VECTOR_SRC = "/images/vector.svg";
  const RIGHT_ARROW_SRC = "/icons/arrow-right.svg";
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.image_container}>
          <Image
            src={VECTOR_SRC}
            alt="vector"
            layout="responsive"
            width={464}
            height={464}
          />
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.title_text}>
            Disfruta de la
            <br />
            <span className={styles.primary_color}>mejor música</span>
          </h1>
          <p>
            Accede a tu cuenta para guardar tus
            <br />
            albumes favoritos.
          </p>
          <button className={styles.cta}>
            <p>Log in con Spotify</p>
            <Image src={RIGHT_ARROW_SRC} width={24} height={24} alt="spotify" />
          </button>
        </div>
      </div>
    </div>
  );
}
