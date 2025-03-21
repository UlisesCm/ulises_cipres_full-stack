import React from "react";
import styles from "./AlbumList.module.css";
import { Album } from "../Album/Album";

interface AlbumListProps {
  albums: any[];
}

export const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div className={styles.albums_container}>
      {albums.map((_, i) => (
        <Album key={i} />
      ))}
    </div>
  );
};
