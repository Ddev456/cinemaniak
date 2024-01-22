"use client";

import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { Hero } from "./Hero";

export default function HomeComponent({ movies }: any) {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  console.log(movies.results);

  const filteredMovies = movies.results.filter((movie: any) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-50 top-0 sticky z-10 flex h-20 w-full items-center px-4 md:px-6">
        <Link className="mr-6" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Cinema App</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Movies
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Theaters
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Showtimes
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                About Us
              </Link>
            </NavigationMenuLink>
            <Input
              className="z-10 top-0 sticky p-6 bg-indigo-50"
              type="search"
              placeholder="Rechercher un film .."
              onChange={handleSearchChange}
            />
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1">
        <Hero initialMovies={filteredMovies} />
        {/* <section className="relative w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-200 bg-image">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                Bienvenue sur CineManiak !
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the latest movies and showtimes in your favorite
                theaters.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Voir les films
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <Image
                  src="/cinemaniak.png"
                  alt="Movie Poster"
                  className="w-full h-48 object-cover"
                  height="200"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Movie Title</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Release Date: 2024-01-01
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rating: 8.5/10
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Movie Poster"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Movie Title</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Release Date: 2024-01-01
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rating: 8.5/10
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Movie Poster"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/200",
                    objectFit: "cover",
                  }}
                  width="150"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Movie Title</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Release Date: 2024-01-01
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rating: 8.5/10
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex h-20 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cinema App. All rights reserved.
        </p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Facebook
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
