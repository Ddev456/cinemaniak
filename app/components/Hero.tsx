"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero({ initialMovies }: any) {
  const moviesList = initialMovies.map((movie: any) => {
    return {
      title: movie.title,
      link: `/fiches/${movie.id}`,
      thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };
  });
  return (
    <>
      <HeroParallax movies={moviesList} />
    </>
  );
}
