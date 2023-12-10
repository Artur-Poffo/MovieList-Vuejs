<script setup lang="ts">
import type { IMovie } from '@/interfaces/IMovie';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  movie: IMovie
}>()

const urlImage = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`
</script>

<template>
  <RouterLink :to="`/movie/${props.movie.id}`">
    <article class="movie-card-container">
      <img :src="urlImage" alt="Imagem do filme">

      <div class="movie-content-wrapper">
        <h2>{{ props.movie.title }}</h2>
      </div>
    </article>
  </RouterLink>
</template>

<style scoped >
.movie-card-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 20rem;
  min-height: 300px;
  background-color: var(--color-background-soft);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.movie-card-container img {
  position: absolute;
  inset: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.movie-content-wrapper {
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: #111;
  z-index: 1;
  margin-bottom: -100%;
  transition: all ease .2s;
}

.movie-card-container:hover .movie-content-wrapper {
  margin-bottom: 0;
}

.movie-content-wrapper h2 {
  color: var(--color-heading);
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
}

@media (max-width: 840px) {
  .movie-content-wrapper {
    margin-bottom: 0;
  }
}
</style>