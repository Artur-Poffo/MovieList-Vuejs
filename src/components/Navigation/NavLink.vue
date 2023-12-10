<script setup lang="ts">
const props = defineProps<{
  text: string,
  to: string
}>()
</script>

<template>
  <RouterLink :to="props.to" class="nav-link">
    {{ props.text }}
  </RouterLink>
</template>

<style scoped >
.nav-link {
  transition: color .3s ease;
}

.nav-link:hover {
  color: var(--color-heading);
}
</style>