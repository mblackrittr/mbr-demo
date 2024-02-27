<script setup lang="ts">
// zLabs | Black | Workaround for dev - subsequent calls to `useSurrealDbStore()` within nested components leads to unknown 500 error
// DODO (2024-02-09): Pack into helper function or `uStore` (utilityStore) where we then only use this on `dev`
// const surrealdb = useSurrealDbStore()
// window.surrealdb = surrealdb

// zLabs | Black | Add or remove the "dark" class on the document body
// DODO (2024-02-14 04:40): Centralize to some store
function toggleDarkTheme(shouldAdd: boolean) {
  document.body.classList.toggle('dark', shouldAdd)
};

// Force Dark for now
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
// toggleDarkTheme(prefersDark.matches)
toggleDarkTheme(true)
</script>

<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
ion-app {
  /*  margin-top: env(safe-area-inset-top);*/
}

/*zLabs | Black | Apply some of Vitesse Nuxt demo defaults to make it look as expected*/
div {
  text-align: center;
}
</style>
