export type rating = 1 | 2 | 3 | 4 | 5;

export type Film = {
  id: number;
  title: string;
  description: string;
  director: string;
  image: string;
  releaseDate: string;
  duration: string;
  productor: string;
  rating: rating;
  type: string;
  year: number;
};
