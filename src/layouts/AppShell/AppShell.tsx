import React, { PropsWithChildren } from "react";
import styles from "./AppShell.module.css";
import Image from "next/image";

export const AppShell = ({ children }: PropsWithChildren) => {
  const LOGO_SRC = "/images/logo.svg";
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <Image src={LOGO_SRC} alt="logo" width={133} height={24} />
      </div>
      <div>{children}</div>
    </div>
  );
};
