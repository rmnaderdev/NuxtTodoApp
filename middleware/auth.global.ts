import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

// This middleware is executed globally
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Hello from auth.global middleware!');
  // const isLoggedIn = true;

  // if (isLoggedIn) {
  //   // redirect to desired page
  //   return navigateTo(to.fullPath);
  // }

  // // redirect to login page
  // return navigateTo('/login');
})
