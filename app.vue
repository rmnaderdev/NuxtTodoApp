<template>
  <div>
    <NuxtLayout>
      <header>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events/profile">Profile</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
