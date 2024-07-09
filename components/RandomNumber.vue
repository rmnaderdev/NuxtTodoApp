<template>
  <div>
    Random Number: {{ randomNumber }}
  </div>
  <button @click="getRandomNumber">Get new random number</button>
</template>

<script lang="ts" setup>
import { callOnce, useState } from 'nuxt/app';

const randomNumber = useState<number | null>("randomNumber", () => null);

const getRandomNumber = async () => {
  const res = await $fetch<{ number: number }>("/api/random-number");
  randomNumber.value = res.number;
};

await callOnce(async () => {
  await getRandomNumber();
});
</script>

<style>

</style>