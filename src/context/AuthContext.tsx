"use client";

import { Album } from "@/interfaces/Albumn";
import { redirect } from "next/navigation";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
  saveAlbums: Album[];
  setSaveAlbums: (albums: Album[]) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  token: "",
  setToken: (token: string) => {},
  logout: () => {},
  saveAlbums: [],
  setSaveAlbums: ([]) => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");
  const [saveAlbums, setSaveAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    redirect("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        logout,
        saveAlbums,
        setSaveAlbums,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
