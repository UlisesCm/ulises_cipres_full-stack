import styles from "./SearchBar.module.css";

export interface SearchBarProps {
  searchKey: string;
  setSearchKey: (value: string) => void;
}
export const SearchBar = ({ searchKey, setSearchKey }: SearchBarProps) => {
  return (
    <div className={styles.main_container}>
      <input
        type="text"
        placeholder="Busca un artista"
        className={styles.input}
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </div>
  );
};
