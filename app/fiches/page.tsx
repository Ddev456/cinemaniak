import Link from "next/link";
import { films } from "./data/db/films";
import { FilmCard } from "../components/FilmCard";
import { getFilms } from "./data/getMovies";
import { error } from "console";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function FichesPage() {
  const films = await getFilms();
  return (
    <div className="p-4">
      <h4 className="p-2 text-center text-3xl">Liste des fiches de films : </h4>
      <div className="flex p-6 gap-6 bg-red-200">
               
          {films.data.map((film, index) => (
          <FilmCard key={index}   film={film} hidden={false} />          
        ))}
       

      </div>
    </div>
  );
}
