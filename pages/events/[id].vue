<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Event dynamic route
    </h1>
    <p>event id: {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp, useRoute } from 'nuxt/app';

// Get route params in ts
const route = useRoute();
console.log("Route params", route.params.id);


// Get the current app context
const nuxt = useNuxtApp();
console.log("Nuxt app", nuxt);

</script>

<style scoped>

</style>