<template>
  <Alert />
  <div class="flex gap-x-4 items-center">
    <img class="w-16" src="~/assets/images/Bungus.gif" />
    <h1 class="text-3xl font-bold underline">
      Index Page
    </h1>
    <p>
      Mouse position: {{ x }}, {{ y }}
    </p>
  </div>
  
  <div>
    <ProfileHeader />
    <Profile />
  </div>
</template>

<script setup lang="ts">

const utils = useUtils();
utils.sayHello();

const { x, y } = useMouse();

// Use myPlugin
const { $sayHelloPlugin } = useNuxtApp();
$sayHelloPlugin("Potato");

</script>

<style scoped>

</style>