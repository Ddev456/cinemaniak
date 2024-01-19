import { films } from "./db/films";

export const getFilms = async () => {
  throw new Error('echec truc ')
  const res = await films;

  return { data: res };
};
