import { MovieSheet } from "@/app/components/MovieSheet";
import { getFilms } from "../data/getMovies";

export default async function movieSheetPage() {
  const movies = await getFilms();

  return <MovieSheet movies={movies.data} />;
}
