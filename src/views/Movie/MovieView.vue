<script setup lang="ts">
import type { IMovie } from '@/interfaces/IMovie';
import { apiKey, urlBase } from '@/tmdb';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import vue3StarRatings from "vue3-star-ratings";

const router = useRouter()
const route = useRoute()

const movie = ref<IMovie | null>(null)

getMovieData(route.params.id)
    .then((data) => {
        if (!data.id) {
            router.push('/404')
        }

        movie.value = data
    })
    .catch(err => {
        console.error(err)
    })

async function getMovieData(movieId: string | string[]) {
    const response = await fetch(`${urlBase}/movie/${movieId}?api_key=${apiKey}&language=pt-BR`)
    const data: IMovie = await response.json();

    return data
}
</script>

<template>
    <main>
        <section v-if="movie" id="movie-info">
            <header>
                <img class="movie-bg-image" :src="`https://image.tmdb.org/t/p/original${movie?.poster_path}`"
                    alt="Imagem de cartaz do filme">
            </header>

            <article class="movie-content">
                <h1>{{ movie?.title }}</h1>
                <p>{{ movie?.overview }}</p>
                <ul class="genres-list">
                    <li v-for="genre in movie?.genres" :key="genre.id">
                        {{ genre.name }};
                    </li>
                </ul>

                <h2>Média do filme:</h2>
                <vue3-star-ratings v-model="movie.vote_average" :number-of-stars="10" :disable-click="true" />
            </article>
        </section>
    </main>
</template>

<style scoped >
#movie-info {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 8rem 2rem 1rem 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.movie-bg-image {
    width: 35rem;
    border-radius: 10px;
    object-fit: cover;
}

.movie-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.movie-content h1 {
    font-size: 3rem;
    color: var(--color-heading);
    font-weight: bold;
}

.movie-content p {
    font-size: 1.8rem;
}

.genres-list {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    color: var(--color-heading);
    text-transform: uppercase;
}

.rating-stars {
    font-size: 1.8rem;
    width: 20px;
    height: 20px;
    border: 1px solid #eee;
    color: #000;
}

@media (max-width: 770px) {
    #movie-info {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 400px) {
    .movie-bg-image {
        width: 100%;
    }
}
</style>