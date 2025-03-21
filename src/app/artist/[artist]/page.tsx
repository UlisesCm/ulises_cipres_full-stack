"use client";
import { Album } from "@/components/Album/Album";
import { Banner } from "@/components/Banner/Banner";
import { useParams } from "next/navigation";
import styles from "./Artist.module.css";

export default function Page() {
  const params = useParams();

  return (
    <div className={styles.main_container}>
      <Banner artist={params.artist} />
      <p>Guarda tus álbumes favoritos de {params.artist}</p>
      <div className={styles.albums_container}>
        {[...Array(10)].map((_, i) => (
          <Album key={i} />
        ))}
      </div>
    </div>
  );
}
