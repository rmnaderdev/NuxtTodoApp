<template>
  <div>

  </div>
</template>

<script setup lang="ts">

// Define layout for this page
definePageMeta({
  layout: 'custom',
  middleware: 'auth2'
});

const { sayHello } = useUtils();
sayHello();

</script>

<style scoped>

</style>