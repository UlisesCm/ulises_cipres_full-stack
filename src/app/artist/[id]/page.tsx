"use client";
import { AuthContext } from "@/context/AuthContext";
import styles from "./Artist.module.css";
import { AlbumList } from "@/components/AlbumList/AlbumList";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Banner } from "@/components/Banner/Banner";
import { Artist } from "@/interfaces/Artist";

export default function Page() {
  const params = useParams();
  const artistId = params.id;
  const { token } = useContext(AuthContext);
  const [artist, setArtist] = useState<Artist>();

  const fetchArtist = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/artists?ids=${artistId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setArtist(response.data.artists[0]);
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
      fetchArtist();
    }
  }, [artistId, token]);

  if (!artistId) {
    return <div>Error: artist ID is undefined</div>;
  }
  return (
    <div className={styles.main_container}>
      <Banner artist={artist as Artist} />
      <p>Guarda tus álbumes favoritos de</p>
      <AlbumList artistId={artistId as string} />
    </div>
  );
}
