<template>
  <div class="mb-4">
    <h1 class="text-3xl font-bold underline">
      People Page
    </h1>
  </div>

  <p>Getting data immediately</p>
  <div v-if="randomStatus === 'pending'">
    Loading random number...
  </div>
  <div v-else-if="randomStatus === 'error'">
    Error loading random number
  </div>
  <div v-else>
    <p>Random number: {{ number?.number }}</p>
  </div>
  

  <p>Getting data lazy</p>
  <div v-if="peopleStatus === 'pending'">
    Loading people...
  </div>
  <div v-else-if="peopleStatus === 'error'">
    Error loading people
  </div>
  <div v-else>
    <ul>
      <li v-for="person in people" :key="person.id">
        {{ person.first_name }} {{ person.last_name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Person } from '~/models/Person';

const { data: number, status: randomStatus } = useFetch<{number: number}>("/api/random-number");

const { data: people, status: peopleStatus } = await useLazyFetch<Person[]>("/api/people", {

});
</script>

<style>

</style>