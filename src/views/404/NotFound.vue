<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="not-found">
        <img src="../../assets/vue-alert.png" class="vue-alert" />

        <h1>Página não encontrada</h1>
        <RouterLink class="return-link" to="/">Voltar para a Home</RouterLink>
    </section>
</template>

<style scoped>
#not-found {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.vue-alert {
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
}

#not-found h1 {
    font-size: 3rem;
    color: var(--color-heading);
    text-align: center;
}

.return-link {
    color: var(--color-heading);
    text-decoration: underline;
    text-underline-offset: 0.6rem;
}

@media (max-width: 380px) {
    .vue-alert {
        width: 100%;
    }
}
</style>