"use client";
import Image from "next/image";
import styles from "./Card.module.css";
import { redirect } from "next/navigation";
import { Artist } from "@/interfaces/Artist";
import { Album } from "@/interfaces/Albumn";

interface CardProps {
  children?: React.ReactNode;
  selected?: boolean;
  customClassName?: string;
  artist?: Artist;
  album?: Album;
  type: "artist" | "album";
}

export const Card = ({
  children,
  customClassName,
  artist,
  album,
  type,
}: CardProps) => {
  const ARTIST = "artist";

  let name = "";
  let id = "";
  let followersTotal = 0;
  let releaseDate = "";
  let image = "";

  if (type === ARTIST && artist) {
    name = artist.name;
    id = artist.id;
    followersTotal = artist.followers.total;
    if (artist?.images[0]?.url) image = artist.images[0].url;
  } else if (album) {
    name = album.name;
    id = album.artists[0].id;
    releaseDate = album.release_date;
    if (album?.images[0]?.url) image = album.images[0].url;
  }

  const handleClick = () => {
    if (artist) {
      redirect(`/artist/${id}`);
    }
  };
  return (
    <div
      className={`${styles.main_container}
      } ${customClassName}`}
      onClick={handleClick}
    >
      <div className={styles.image_container}>
        {image && <Image src={image} width={272} height={241} alt="artist" />}
      </div>
      <p className={styles.title}>{name}</p>
      {type === ARTIST ? (
        <p className={styles.description}>followers: {followersTotal}</p>
      ) : (
        <p className={styles.description}>Publicado: {releaseDate}</p>
      )}

      {children}
    </div>
  );
};
