<script setup lang="ts">
const props = defineProps<{
  title: string;
}>()
</script>

<template>
  <header class="header-container">
    <h1>{{ props.title }}</h1>
  </header>
</template>

<style scoped>
.header-container {
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.header-container::after {
  content: "";
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: 2px;
  top: 20px;
  background-color: var(--color-text-extra-mute);
  opacity: .4;
}

.header-container h1 {
  color: var(--color-text-extra-mute);
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
  opacity: .4;
}
</style>