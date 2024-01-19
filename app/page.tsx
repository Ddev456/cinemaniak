import { cp } from "fs";
import HomeComponent from "./components/Home";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};

const getMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1&region=fr",
    options
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const movies = await getMovies();
  return <HomeComponent movies={movies} />;
}
