import path from 'node:path'
import topLevelAwait from 'vite-plugin-top-level-await'

// (2024-02-07): zLabs | Black | Removed this for the meantime, as it caused stuck cache/reloading issues in Safari
// import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

// const surrealWasm = path.resolve(__dirname, 'wasm', 'surreal.wasm')
const surrealWasm = path.resolve(__dirname, '../../node_modules/surrealdb.wasm/dist/full/index_bg.wasm')

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // '@vite-pwa/nuxt',
    'nuxt-module-eslint-config',
    '@nuxtjs/ionic',
  ],

  ionic: {
    integrations: {
      //
    },
    css: {
      // basic: true,
      // core: true,
      // zLabs | Black | To also use classes like `ion-justify-content-center`
      // https://ionic.nuxtjs.org/get-started/configuration#css
      utilities: true,
    },
    config: {
      //
    },
  },

  ssr: false,

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    // inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/ionic.css',
  ],

  vite: {
    plugins: [
      topLevelAwait(),
    ],
    resolve: {
      alias: {
        // "Hotfix" for dev mode - missing copy of `index_bg.wasm` to `node_modules/.vite/deps/`
        'index_bg.wasm': surrealWasm,
      },
    },
    optimizeDeps: {
      // include: ['@mbr/surrealdb']
    },
  },

  // zLabs | Black | We use Ionic's Dark Mode
  // colorMode: {
  //   classSuffix: '',
  // },

  // zLabs | Black | So far, we don't use Nitro at all
  // nitro: {
  //   esbuild: {
  //     options: {
  //       target: 'esnext',
  //     },
  //   },
  //   prerender: {
  //     crawlLinks: false,
  //     routes: ['/'],
  //     ignore: ['/hi'],
  //   },
  // },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  // pwa,

  devtools: {
    // enabled: true,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslintConfig: {
    setup: false,
  },
})
