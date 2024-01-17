"use client";

import React, { useContext } from "react";
import { FavoritesContext } from "../utils/movies/context/favoritesContext";

interface ClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const favorites = useContext(FavoritesContext);
  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
};
