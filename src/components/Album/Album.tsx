"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Album.module.css";
import { AuthContext } from "@/context/AuthContext";
import { Album } from "@/interfaces/Albumn";

interface AlbumProps {
  album: Album;
}
export const AlbumComponent = ({ album }: AlbumProps) => {
  const { saveAlbums, setSaveAlbums } = useContext(AuthContext);
  const [added, setAdded] = useState(saveAlbums.includes(album));
  const ALBUM = "album";

  const handleAlbum = () => {
    setAdded(!added);
    if (added) {
      setSaveAlbums(saveAlbums.filter((a) => a.id !== album.id));
    } else {
      setSaveAlbums([...saveAlbums, album]);
    }
  };

  return (
    <Card album={album} type={ALBUM}>
      <button
        onClick={handleAlbum}
        className={`${styles.button} ${
          added ? styles.button_remove : styles.button_add
        }`}
        type="button"
      >
        {added ? "- Remove album" : "+ Add album"}
      </button>
    </Card>
  );
};
