import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.main_container}>
      <input
        type="text"
        placeholder="Busca un artista"
        className={styles.input}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};
