"use client";
import React, { PropsWithChildren, useContext } from "react";
import styles from "./AppShell.module.css";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";

export const AppShell = ({ children }: PropsWithChildren) => {
  const { token, logout } = useContext(AuthContext);
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Spotify App</h2>
        <h2 className={styles.mobile_title}>SP</h2>
        <div className={styles.links}>
          <Link href="/search">Buscar</Link>
          <Link href="/albums">My albums</Link>
          {token && (
            <button onClick={logout} className={styles.button}>
              <p className={styles.title}>Cerrar sesión</p>
              <div className={styles.mobile_title}>
                <Image
                  src="/icons/carbon_logout.svg"
                  alt="Logout"
                  width={24}
                  height={18}
                />
              </div>
            </button>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
