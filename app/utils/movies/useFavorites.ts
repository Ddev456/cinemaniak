import { useState } from "react";
import { FavoritesContextType } from "./context/favoritesContext";
import { Film } from "@/app/types/Film";

export const useFavorites = (): FavoritesContextType => {
  const [favorites, setFavorites] = useState<Film[]>([]);

  const addFavorites = (film: Film) => {
    if (!favorites.find((fav) => fav.id === film.id)) {
      setFavorites([...favorites, film]);
    }
  };

  return { favorites, addFavorites };
};
