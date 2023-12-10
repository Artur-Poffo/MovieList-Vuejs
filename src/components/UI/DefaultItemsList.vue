<template>
  <ul class="items-list">
    <slot></slot>
  </ul>
</template>

<style scoped >
.items-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>