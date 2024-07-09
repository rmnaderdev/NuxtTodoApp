<template>
  <Alert />
  <div class="flex gap-x-4 items-center mb-4">
    <img class="w-16" src="~/assets/images/Bungus.gif" />
    <h1 class="text-3xl font-bold underline">
      Index Page
    </h1>
    <p>
      Mouse position: {{ x }}, {{ y }}
    </p>
  </div>

  <div class="mb-4">
    <ProfileHeader />
    <Profile />
    <ClientOnly fallback-tag="span" fallback="Loading random number...">
      <RandomNumber />
    </ClientOnly>
  </div>

  <div class="px-4 py-2 text-slate-900 bg-gray-200 rounded shadow">
    <ContentDoc />
    <ContentDoc path="/my-other-doc" />
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

<style scoped></style>