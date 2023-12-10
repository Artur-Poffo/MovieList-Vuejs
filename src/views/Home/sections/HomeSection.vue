<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
</script>

<template>
  <section id="Home" class="container">
    <img src="https://viciados.net/wp-content/uploads/2019/09/fala-universidades-netflix-3.jpg"
      alt="Imagem ilustrativa de uma lista de filmes de fundo" class="bg-image">

    <div class="content-wrapper">
      <h1>Explore um catálogo de filmes gigantesco</h1>
      <p>Com o MovieList você pode encontrar informações dos filmes mais populares do momento em um só lugar</p>
      <DefaultButton text="Ver catálogo" to="/#Catalog" />
    </div>
  </section>
</template>

<style scoped >
.container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 1;
  opacity: .4;
}

.content-wrapper {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 0 10px 80px 10px;
  z-index: 1;
}

.content-wrapper h1 {
  font-size: 4rem;
  line-height: 1;
  color: var(--color-heading);
  font-weight: bold;
}

.content-wrapper p {
  font-family: monospace;
}
</style>