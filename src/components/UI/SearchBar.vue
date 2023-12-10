<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { Dialog } from 'radix-vue/namespaced';
import { ref } from "vue";
import { useRouter } from "vue-router";

const queryValue = ref("")
const isOpenModal = ref(false)

const router = useRouter()

async function handleQueryFilms() {
  if (queryValue.value.length > 0) {
    router.push({ name: 'movies', query: { q: queryValue.value } })
  }

  queryValue.value = ""
  isOpenModal.value = false
}
</script>

<template>
  <Dialog.Root v-model:open="isOpenModal">
    <Dialog.Trigger asChild>
      <button class="trigger-button">
        <magnifying-glass-icon class="search-glass-icon" />
        <span>Pesquisar</span>
      </button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay class="search-modal-overlay" />

      <Dialog.Content class="search-modal-container">
        <div class="input-modal-container">
          <button class="submit-button" @click="handleQueryFilms">
            <magnifying-glass-icon class="search-glass-icon" />
          </button>

          <input type="text" v-model="queryValue" placeholder="Nome do filme...">
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</template>

<style scoped>
.trigger-button {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  background-color: transparent;
  color: var(--color-text-mute);
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all ease .3s;
  cursor: pointer;
}

.search-glass-icon {
  width: 1.6rem;
  height: 1.6rem;
  color: var(--color-text-mute);
}

.trigger-button:hover {
  background-color: #111;
  border: 2px solid var(--color-heading);
}

.search-modal-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  opacity: .8;
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
  z-index: 1000;
}

.search-modal-container {
  padding: 2rem;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  position: fixed;
  z-index: 1001;
  top: 15%;
  left: 50%;
  width: 60rem;
  transform: translate(-50%, -50%);
}

.input-modal-container {
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid var(--color-heading);
  display: flex;
  align-items: center;
  gap: .8rem;
}

.submit-button {
  background-color: transparent;
  cursor: pointer;
}

.input-modal-container input {
  background-color: transparent;
  color: var(--color-text-mute);
}

@media (max-width: 640px) {
  .search-modal-container {
    width: 90%;
  }
}
</style>