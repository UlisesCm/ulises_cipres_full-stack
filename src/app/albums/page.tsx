import { AlbumList } from "@/components/AlbumList/AlbumList";
import styles from "./Albums.module.css";

export default function page() {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>
        Mis Albumes
        <br />
        <span className={styles.primary}>Guardados</span>
      </h1>
      <p>
        Disfruta de tu música a un solo click y descubre que discos has guardado
        dentro de “mis álbumes”
      </p>
      <AlbumList albums={[1, 2, 3, 4, 5]} />
    </div>
  );
}
