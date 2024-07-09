import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

// This middleware is executed only on the pages where it is used
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Hello from auth2 middleware!');
})
