import { acceptHMRUpdate, defineStore } from 'pinia'
import { surrealdb } from '@mbr/surrealdb'

export const useSurrealDbStore = defineStore('surrealdb', () => {
  const now = Date.now
  const data = reactive({ info: '' })
  const surreal = surrealdb()

  async function info() {
    const start = now()
    const info = await surreal.info()
    data.info = `Version: ${info} (${now() - start} ms)`
  }

  return {
    info,
    data,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSurrealDbStore, import.meta.hot))
