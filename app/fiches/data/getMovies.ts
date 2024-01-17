import { films } from "./db/films";

export const getFilms = async () => {
  const res = await films;
  return { data: res };
};
