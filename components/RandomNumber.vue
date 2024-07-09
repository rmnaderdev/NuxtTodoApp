<template>
  <div v-if="randomNumber">
    Random Number: {{ randomNumber }}
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts" setup>
import { callOnce, useState } from 'nuxt/app';

const randomNumber = useState<number | null>("randomNumber", () => null);

await callOnce(async () => {
  const res = await $fetch<{ number: number }>("/api/random-number");
  randomNumber.value = res.number;
});
</script>

<style>

</style>