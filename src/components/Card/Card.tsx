import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  children?: React.ReactNode;
  selected?: boolean;
  customClassName?: string;
}

export const Card = ({
  children,
  customClassName,
  selected = false,
}: CardProps) => {
  return (
    <div
      className={`${styles.main_container} ${
        selected ? styles.container_selected : ""
      } ${customClassName}`}
    >
      <Image
        src="/images/portada-test.svg"
        width={272}
        height={241}
        alt="artist"
      />
      <p className={`${styles.title} ${selected ? styles.text_selected : ""}`}>
        Artist name
      </p>
      <p
        className={`${styles.description} ${
          selected ? styles.text_selected : ""
        }`}
      >
        followers: n
      </p>
      {children}
    </div>
  );
};
