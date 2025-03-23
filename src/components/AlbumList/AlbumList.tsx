"use client";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import styles from "./AlbumList.module.css";
import { AuthContext } from "@/context/AuthContext";
import { redirect, usePathname } from "next/navigation";
import { Album as AlbumInterface } from "@/interfaces/Albumn";
import { AlbumComponent } from "../Album/Album";

interface AlbumListProps {
  artistId?: string;
}

export const AlbumList = ({ artistId }: AlbumListProps) => {
  const { token, saveAlbums } = useContext(AuthContext);
  const [albums, setAlbums] = useState<AlbumInterface[]>([]);
  const pathname = usePathname();

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setAlbums(response.data.items);
    } catch (error) {
      console.error("Error fetching artist:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error message:", error.message);
        if (error.response) {
          if (error.response.status === 401) {
            console.error("Unauthorized request");
            redirect("/login");
          }
        }
      }
    }
  };

  useEffect(() => {
    if (artistId && token) {
      fetchAlbums();
    }
  }, [artistId, token]);

  useEffect(() => {
    if (pathname === "/albums" && saveAlbums) {
      setAlbums(saveAlbums);
    }
  }, [saveAlbums]);

  return (
    <div className={styles.albums_container}>
      {albums.map((album) => (
        <AlbumComponent key={album.id} album={album} />
      ))}
    </div>
  );
};
