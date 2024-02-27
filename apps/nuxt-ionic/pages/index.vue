<script setup lang="ts">
import { Device } from '@capacitor/device'
import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar } from '@capacitor/status-bar'
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar'
import { defineAsyncComponent } from 'vue'

// DODO (2024-02-20): Move to `uStore``
const deviceInfo = await Device.getInfo()

// zLabs | Black
// DODO (2024-02-14 04:42): Still implement such within demo
// const online = useOnline()

// zLabs | Black | Workaround for dev - subsequent calls to `useSurrealDbStore()` within nested components leads to unknown 500 error
// DODO (2024-02-09): Pack into helper function or `uStore` (utilityStore) to only use this on `dev`
// const surrealdb = useSurrealDbStore()
// const surrealdb = window.surrealdb

// (2024-02-25 11:41): NOTE: Just "resolved" it using a separate async component for now...
const SurrealDb = defineAsyncComponent(() =>
  import('@/components/SurrealDb.vue'),
)

// zLabs | Black | Add or remove the "dark" class on the document body
// DODO (2024-02-14 04:40): Centralize to some store
function toggleDarkTheme() {
  if (deviceInfo.platform !== 'web')
    Haptics.impact({ style: ImpactStyle.Light })

  document.body.classList.toggle('dark')
}

// zLabs | Black | Could just use some array `logos: [...]`, but `data: { logos: { items: [] } }` just has benefits of being more generic to/from any source/target like a component.
//                 E.g. as we did later, adding a path! 😻
const data = {
  logos: {
    path: '/logos/',
    items: [
      {
        id: 'nuxt3',
        class: 'text-geen5 dark:text-green3 text-shadow shadow-green',
        title: 'Nuxt 3',
        url: 'https://nuxt.com',
        img: 'nuxt.svg',
      },
      {
        id: 'ionic',
        class: 'text-blue5 dark:text-blue3 text-shadow shadow-blue',
        title: 'Ionic',
        url: 'https://ionicframework.com',
        img: 'ionic.svg',
      },
      {
        id: 'capacitor',
        class: 'text-blue5 dark:text-blue3 text-shadow shadow-blue',
        title: 'Capacitor',
        url: 'https://capacitorjs.com',
        img: 'capacitor.svg',
      },
      {
        id: 'surrealdb',
        class: 'text-violet5 dark:text-violet3 text-shadow shadow-violet',
        title: 'SurrealDB',
        url: 'https://surrealdb.com',
        img: 'surrealdb.svg',
      },
      {
        id: 'vitesse',
        class: 'text-violet5 dark:text-violet3 text-shadow shadow-violet',
        title: 'Vite[sse]',
        url: 'https://github.com/antfu/vitesse-nuxt3',
        img: 'vite.svg',
      },
      {
        id: 'turborepo',
        class: 'text-violet5 dark:text-violet3 text-shadow shadow-violet',
        title: 'Turborepo',
        url: 'https://turbo.build',
        img: 'turborepo.svg',
      },
      {
        id: 'jsonapi',
        class: 'text-gray5 dark:text-gray3 text-shadow shadow-gray',
        title: 'JSONAPI',
        url: 'https://jsonapi.org',
        img: 'jsonapi.png',
      },
      // {
      //   id: "",
      //   class: " text-shadow shadow-",
      //   title: "",
      //   url: "",
      //   img: ""
      // },
    ],
  },
}

// Navigation bar only affects Android
// NavigationBar.hide()
NavigationBar.setTransparency({ isTransparent: true })
NavigationBar.setColor({ color: '', darkButtons: true })

onMounted(() => {
  // Only on mobile, and else `StatusBar` threw errors - others check for the platform themself.
  // DODO (2024-02-20): Move to somne`composable` within a base/utils package!
  if (deviceInfo.platform !== 'web') {
    // Give the UI a little breath to draw
    setTimeout(() => {
      // Not needed when calling `NavigationBar.setTransparency({ isTransparent: true })`, which also transparents the background of the Status Bar!
      // StatusBar.setOverlaysWebView({ overlay: true })
      // StatusBar.setStyle({ style: Style.Dark })

      StatusBar.hide()
      SplashScreen.hide()

      setTimeout(() => {
        Haptics.impact({ style: ImpactStyle.Heavy })
      }, 75)
    }, 250)
  }
})
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title fw-900>
          MBR | N̷ - U̴ - X̴̴ - O̷ - N̴ - I̷ - C̴̴
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div @click="toggleDarkTheme">
        <Logos :data="data" />
      </div>

      <!-- <div>
        <button @click="surrealdb.info()">
          Test Embedded SurrealDB
        </button>

          <div v-if="surrealdb">{{ surrealdb.data.info }}</div>
      </div> -->

      <SurrealDb />

      <!-- zLabs | Black -->
      <!-- DODO (2024-02-14 04:42): Still implement such within demo -->
      <!-- <Suspense>
        <ClientOnly>
          <PageView v-if="online" />
          <div v-else text-gray:80>
            You're offline
          </div>
        </ClientOnly>
        <template #fallback>
          <div italic op50>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense> -->

      <div>
        <button class="!outline- mt-3" @click="toggleDarkTheme">
          <div class="i-carbon-sun dark:i-carbon-moon" />
        </button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  ion-header {
  opacity: 90%;
}
</style>
