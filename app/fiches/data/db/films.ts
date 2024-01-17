import { Film } from "@/app/types/Film";

export const films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    rating: 5,
    type: "Drama",
    image: "https://picsum.photos/200/300",
    releaseDate: "14 October 1994",
    productor: "Castle Rock Entertainment",
    description:
      "film qui parle de prison et de liberté et de rédemption et de tout ça",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    rating: 5,
    type: "Crime, Drama",
    image: "https://picsum.photos/200/300",
    releaseDate: "24 March 1972",
    productor: "Paramount Pictures",
    description: "film qui parle de mafia et de famille et de tout ça",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    rating: 5,
    type: "Action, Crime, Drama, Thriller",
    image: "https://picsum.photos/200/300",
    releaseDate: "18 July 2008",
    productor: "Warner Bros. Pictures",
    description: "film qui parle de batman et de joker et de tout ça",
  },
];
