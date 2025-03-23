import Image from "next/image";
import styles from "./Banner.module.css";
import { Artist } from "@/interfaces/Artist";

interface BannerProps {
  artist: Artist;
}

export const Banner = ({ artist }: BannerProps) => {
  const VERIFIED_SRC = "/icons/verificado.svg";
  const { name, popularity, followers } = artist || {};
  const followersTotal = followers?.total ? followers.total : "N/A";
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        {artist?.images?.[0] && (
          <Image
            src={artist?.images[0]?.url}
            width={237}
            height={236}
            alt="artist"
          />
        )}
      </div>
      <div className={styles.text_container}>
        <div className={styles.d_flex}>
          <Image src={VERIFIED_SRC} width={24} height={24} alt="verified" />
          <p>Artista certificado</p>
        </div>
        <h1>{name}</h1>
        <p>Followers: {followersTotal}</p>
        <p>popularidad: {popularity}</p>
      </div>
    </div>
  );
};
