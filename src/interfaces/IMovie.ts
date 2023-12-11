export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: {id: string, name: string}[]
  vote_average: number;
}