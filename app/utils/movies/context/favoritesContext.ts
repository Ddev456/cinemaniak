import { Film } from "@/app/types/Film";
import { createContext, useContext } from "react";

export type FavoritesContextType = {
  favorites: Film[];
  addFavorites: (film: Film) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorites: () => {},
});
