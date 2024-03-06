import { MovieSheet } from "@/app/components/MovieSheet";
import { getMovies } from "@/app/page";

export default async function movieSheetPage() {
  const movies = await getMovies();
  console.log(movies);

  return <MovieSheet movies={movies.results} />;
}
