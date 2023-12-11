<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchBar from '../UI/SearchBar.vue';
import NavLink from './NavLink.vue';
</script>

<template>
  <header class="header-container">
    <RouterLink to="/">
      <h1 class="logo">MovieList</h1>
    </RouterLink>

    <nav class="navbar-container">
      <ul class="links-list">
        <li>
          <NavLink text="Home" to="/" />
        </li>
        <li>
          <NavLink text="Catálogo" to="/#Catalog" />
        </li>
      </ul>

      <SearchBar />
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 5rem;
  background-color: var(--color-background);
  box-shadow: 1px 1px 10px var(--color-background-soft);
  z-index: 999;
}

.logo {
  color: var(--color-heading);
  font-size: 2.8rem;
  font-weight: bold;
}

.navbar-container {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.links-list {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 500px) {
  .header-container {
    justify-content: center;
  }

  .logo {
    display: none;
  }
}
</style>