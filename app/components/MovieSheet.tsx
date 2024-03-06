"use client";

import { StarIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import {
  FavoritesContext,
  FavoritesContextType,
} from "../utils/movies/context/favoritesContext";

type MovieSheetProps = {
  movies: any[];
};

export const MovieSheet = ({ movies }: MovieSheetProps) => {
  const { id } = useParams();
  const { favorites, addFavorites } =
    useContext<FavoritesContextType>(FavoritesContext);
  const movie = movies.find((film) => film.id === Number(id));

  const [isFavorite, setIsFavorite] = useState(
    movie && favorites.includes(movie)
  );

  const handleFavorite = () => {
    if (movie) {
      setIsFavorite(!isFavorite);
      addFavorites(movie);
    }
    return;
  };

  console.log("isFavorite", isFavorite);

  return movie ? (
    <div className="flex flex-col gap-2">
      <Link
        href="/fiches"
        className="border border-border rounded-lg text-lg p-2 w-24 m-3"
      >
        Retour
      </Link>
      <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex w-full justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>

          <button className="" onClick={handleFavorite}>
            <StarIcon
              className={clsx("w-8 h-8", {
                "stroke-yellow-500 fill-yellow-500": isFavorite,
              })}
            />
          </button>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.description}
        </p>
        <div className="flex gap-2 items-center justify-center">
          <Image
            className="shadow-2xl rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
          />
          <div className="p-2 text-sm">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Aucun film trouvé</p>
  );
};
