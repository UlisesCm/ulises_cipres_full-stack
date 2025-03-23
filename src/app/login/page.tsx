"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import styles from "./login.module.css";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const VECTOR_SRC = "/images/vector.svg";
  const RIGHT_ARROW_SRC = "/icons/arrow-right.svg";
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const AUTH_URI = process.env.NEXT_PUBLIC_SPOTIFY_AUTH_URI;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

  const LoginURL = `${AUTH_URI}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const hash = window.location.hash;
    let localToken = window.localStorage.getItem("token");
    if (hash) {
      const tokenFragment = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));
      if (tokenFragment) {
        localToken = tokenFragment.split("=")[1];
      }

      window.location.hash = "";
      if (localToken) {
        setToken(localToken);
        window.localStorage.setItem("token", localToken);
        redirect("/search");
      }
    }

    if (localToken) {
      setToken(localToken);
    }
  }, [token, setToken]);

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
          <a className={styles.cta} href={LoginURL}>
            <p>Log in con Spotify</p>
            <Image src={RIGHT_ARROW_SRC} width={24} height={24} alt="spotify" />
          </a>
        </div>
      </div>
    </div>
  );
}
