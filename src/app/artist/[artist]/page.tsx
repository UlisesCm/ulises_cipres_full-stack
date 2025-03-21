"use client";
import { Banner } from "@/components/Banner/Banner";
import { useParams } from "next/navigation";
import styles from "./Artist.module.css";
import { AlbumList } from "@/components/AlbumList/AlbumList";

export default function Page() {
  const params = useParams();

  return (
    <div className={styles.main_container}>
      <Banner artist={params.artist} />
      <p>Guarda tus álbumes favoritos de {params.artist}</p>
      <AlbumList albums={[1, 2, 3, 4, 5]} />
    </div>
  );
}
