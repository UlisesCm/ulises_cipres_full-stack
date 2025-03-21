import { Card } from "@/components/Card/Card";
import styles from "./search.module.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export default function page() {
  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Busca tus
          <br />
          <span className={styles.primary}>artistas</span>
        </h1>
        <p className={styles.text_description}>
          Encuentra tus artistas favoritos gracias a nuestro
          <br />
          buscador y guarda tus álbumes favoritos
        </p>
      </div>
      <SearchBar />
      <div className={styles.carousel_section}>
        <p>Mostrando 4 resultados de nResultados</p>
        <div className={styles.carousel_container}>
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
