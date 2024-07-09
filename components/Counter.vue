<template>
  <div>
    Counter Component: {{ store.count }}
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/myStore';

//import { useCounter } from '../composables/states';

//const counter = useCounter();

const store = useCounterStore();
</script>

<style>

</style>