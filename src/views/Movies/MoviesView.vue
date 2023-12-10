<script lang="ts">
import DefaultItemsList from "@/components/UI/DefaultItemsList.vue";
import MovieCard from "@/components/UI/MovieCard.vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import type { IMovie } from "@/interfaces/IMovie";
import { apiKey, urlBase } from "@/tmdb";
import type { LocationQueryValue } from "vue-router";

interface DataInterface {
  movies: IMovie[],
  query: LocationQueryValue | LocationQueryValue[],
  loading: boolean
}

export default {
  data(): DataInterface {
    return {
      movies: [],
      query: this.$route.query.q,
      loading: false
    };
  },

  components: {
    DefaultItemsList,
    MovieCard,
    SectionHeader
  },

  methods: {
    async queryMoviesByName(query: LocationQueryValue | LocationQueryValue[]) {
      this.loading = true

      const response = await fetch(
        `${urlBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`
      );
      const { results }: { results: IMovie[] } = await response.json();

      this.movies = results
      this.loading = false
    },

    async fetchTopRatedMovies() {
      this.loading = true

      const response = await fetch(
        `${urlBase}/movie/top_rated?api_key=${apiKey}&language=pt-BR`
      );
      const { results }: { results: IMovie[] } = await response.json();

      this.movies = results
      this.loading = false
    },
  },

  created() {
    if (this.query) {
      this.queryMoviesByName(this.query);
    } else {
      this.fetchTopRatedMovies();
    }
  },

  beforeRouteUpdate(to, from) {
    if (to.query.q) {
      this.queryMoviesByName(to.query.q)
    } else {
      this.fetchTopRatedMovies()
    }
  },
}
</script>

<template>
  <main>
    <section id="list-movies">
      <SectionHeader title="Lista de filmes" />

      <DefaultItemsList v-if="!loading">
        <li v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" />
        </li>
      </DefaultItemsList>
    </section>
  </main>
</template>

<style scoped >
#list-movies {
  padding: 60px 10px 20px 10px;
}
</style>