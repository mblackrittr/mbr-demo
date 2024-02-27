<script setup lang="ts">
// zLabs | Black | Workaround for dev - subsequent calls to `useSurrealDbStore()` within nested components leads to unknown 500 error
// DODO (2024-02-09): Pack into helper function or `uStore` (utilityStore) to only use this on `dev`
const surrealdb = useSurrealDbStore()
</script>

<template>
  <div>
    <button @click="surrealdb.info()">
      Test Embedded SurrealDB
    </button>

    <div>{{ surrealdb.data.info }}</div>
  </div>
</template>

<style scoped>
</style>
