<template>
  <div>

  </div>
</template>

<script setup lang="ts">

// Define layout for this page
definePageMeta({
  layout: 'custom'
});

const { sayHello } = useUtils();
sayHello();

</script>

<style scoped>

</style>