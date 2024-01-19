"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero({ initialMovies }: any) {
  const moviesList = initialMovies.results.map((movie: any) => {
    return {
      title: movie.title,
      link: "#",
      thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };
  });
  console.log(moviesList);
  return <HeroParallax movies={moviesList} />;
}
