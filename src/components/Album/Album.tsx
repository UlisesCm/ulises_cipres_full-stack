"use client";
import React, { useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Album.module.css";
export const Album = () => {
  const [added, setAdded] = useState(false);
  const addAlbum = () => setAdded(!added);
  return (
    <Card>
      <button
        onClick={addAlbum}
        className={`${styles.button} ${
          added ? styles.button_remove : styles.button_add
        }`}
      >
        {added ? "- Remove album" : "+ Add album"}
      </button>
    </Card>
  );
};
