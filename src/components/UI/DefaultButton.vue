<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
  text: string
  to?: string
}>()
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to">
    <button class="default-button">
      {{ props.text }}
    </button>
  </RouterLink>

  <button v-if="!props.to" class="default-button">
    {{ props.text }}
  </button>
</template>

<style scoped >
.default-button {
  padding: 0.6rem 1.4rem;
  background-color: var(--vt-c-green);
  color: var(--color-text);
  border-radius: 2px;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all ease .3s;
}

.default-button:hover {
  filter: brightness(110%);
}
</style>