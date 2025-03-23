"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { Card } from "@/components/Card/Card";
import styles from "./search.module.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Pagination } from "@/components/Pagination/Pagination";
import { redirect } from "next/navigation";

export default function SearchPage() {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 4,
    offset: 0,
    total: 0,
  });
  const ARTIST = "artist";
  const { token } = useContext(AuthContext);

  const searchArtists = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "artist",
          market: "ES",
          limit: pagination.limit,
          offset: pagination.offset,
        },
      });
      console.log(data);
      setArtists(data.artists.items);
      setPagination({
        ...pagination,
        total: data.artists.total,
      });
    } catch (error) {
      console.error("Error fetching artists:", error);
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

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * pagination.limit;
    setPagination((prev) => ({
      ...prev,
      offset: newOffset,
      currentPage: page,
    }));
  };

  useEffect(() => {
    if (searchKey) {
      const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
      searchArtists(syntheticEvent);
    }
  }, [pagination.offset]);

  return (
    <form className={styles.main_container} onSubmit={searchArtists}>
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
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <div className={styles.carousel_section}>
        {pagination.total > 0 && (
          <p>Mostrando 4 resultados de {pagination.total}</p>
        )}
        <div className={styles.carousel_container}>
          {artists.map((artist, index) => (
            <Card key={index} artist={artist} type={ARTIST} />
          ))}
          {pagination.total > 0 && (
            <Pagination
              currentPage={pagination.offset / 4 + 1}
              totalPages={Math.ceil(pagination.total / 4)}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </form>
  );
}
