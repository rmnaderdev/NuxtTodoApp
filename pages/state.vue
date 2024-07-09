<template>
  <div class="mb-4">
    Counter: {{ store.count }}
    <button class="px-4 mr-2 bg-green-500 text-white rounded hover:bg-green-600" @click="store.increment">+</button>
    <button class="px-4 bg-green-500 text-white rounded hover:bg-green-600" @click="store.decrement">-</button>
  </div>

  <Counter />
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/myStore';

//import { useCounter } from '../composables/states';

// useState example
//const counter = useCounter();

// Pinia example
const store = useCounterStore();

</script>

<style></style>