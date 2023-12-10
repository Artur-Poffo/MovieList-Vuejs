<script setup lang="ts">
import DefaultItemsList from '@/components/UI/DefaultItemsList.vue';
import MovieCard from '@/components/UI/MovieCard.vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';
import type { IMovie } from '@/interfaces/IMovie';
import { apiKey, urlBase } from '@/tmdb.ts';
import { ref } from 'vue';

const movies = ref<IMovie[]>([])

async function fetchPopularMovies() {
  const response = await fetch(`${urlBase}/movie/popular?language=pt-BR&api_key=${apiKey}`);
  const { results }: { results: IMovie[] } = await response.json();

  movies.value = results
}

fetchPopularMovies()
</script>

<template>
  <section id="Catalog">
    <SectionHeader title="Populares no momento" />

    <DefaultItemsList>
      <li v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </li>
    </DefaultItemsList>
  </section>
</template>

<style scoped>
#Catalog {
  padding: 0 10px 20px;
}
</style>