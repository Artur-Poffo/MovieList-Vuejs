import type { IMovie } from "@/interfaces/IMovie";
import { apiKey, urlBase } from "@/tmdb";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: (): { movies: IMovie[] } => {
    return {
      movies: [],
    };
  },

  actions: {
    async fetchTrendingMovie() {
      const response = await fetch(`${urlBase}/movie/popular?language=pt-BR&api_key=${apiKey}`);
      const { results }: { results: IMovie[] } = await response.json();

      this.movies = results
    }
  }
})