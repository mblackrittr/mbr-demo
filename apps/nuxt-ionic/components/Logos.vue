<script setup lang="ts">
import { Device } from '@capacitor/device'
import { Browser } from '@capacitor/browser'

const props = defineProps(['data'])

const path = props.data.logos.path
const logos = props.data.logos.items

const deviceInfo = await Device.getInfo()

// Return URL in browser, open in-app/overlay browser on app
function href(url: string, event: string | null = null) {
  if (deviceInfo.platform === 'web')
    return url

  // Only on event, else it would just open on non web
  else if (event)
    Browser.open({ url })
}
</script>

<template>
  <div my-8vw font-400 sm:my-13 sm:text-2xl>
    <!-- zLabs | Black -->
    <!-- DODO (2024-02-13): Render these based on `JSON` data -->
    <!-- DONE (2024-02-14): "Reusablel-/Component-ized" `Logos` using v-for/v-if loops instead of static markup -->
    <!-- DODO (2024-02-21): Check to maybe use JSX/TSX (https://nuxt.com/docs/examples/advanced/jsx) "to the rescue",
                            or normalize/transform data to flat array of objects - probably the best solution.
                            Check what's currently the "hottest snølf" for this for JS as Fractal is for PHP (https://fractal.thephpleague.com).
    -->
    <template v-for="(item, i) in logos" :key="item.id">
      <div v-if="i % 3 === 0">
        <div inline-flex cursor-default>
          <template v-for="(column, j) in 3" :key="column.id">
            <div v-if="logos[i + j]">
              <!-- DODO (2024-02-18 11:44): Put in own slotted component for general use -->
              <!-- `.stop` to prevent bubbling up (switching dark/light in our case) -->
              <a :href="href(logos[i + j].url)" @click.stop="href(logos[i + j].url, 'click')">
                <img inline-block h-12vw max-h-28 max-w-28 w-12vw object-contain :src="path + logos[i + j].img">
                <div mt-3 min-w-16 sm:min-w-24 :class="logos[i + j].class" :title="logos[i + j].title">
                  {{ logos[i + j].title }}
                </div>
              </a>
            </div>
            <div
              v-if="j < 2 && logos[i + j + 1]"
              text="sm:3xl xl gray4"
              m="x-1 sm:x-4 y-auto"
              i-carbon-add transform transition-all-500 hover:rotate-135
            />
          </template>
        </div>
      </div>
      <div
        v-if="i % 3 === 2"
        text="sm:3xl xl gray4"
        m="y-4 sm:y-8"
        i-carbon-add-alt inline-flex transform cursor-default transition-all-500 hover:rotate-135
      />
    </template>
  </div>
</template>

<style scoped>
.dark img {
  filter: drop-shadow(0px 0px 0.075rem lightgray)
    drop-shadow(0px 0px 0.075rem lightblue) drop-shadow(0px 0px 0.075rem white);
}

/*
    zLabs | Black | Insane performance hog using `transition: opacity`! 🤯
    DODO (2024-02-11): Optimize this by using opacity of pseudo-elements (https://tobiasahlin.com/blog/how-to-animate-box-shadow/)
    DONE (2024-02-12): Was a little tricky, Safari accepted to only define `.dark div.text-shadow::after`, but others want existing `div.text-shadow::after` to base on!
    NOTE (2024-02-25 12:29): Should generally push such stuff into some WebGL context - The HTML (Text) to SVG (surely don't want to mess with fonts rendering, löl) to WebGL and then apply shaders, etc., or at least some lazy man's variant - rendering "something similar" based on width/height.
  */
/*.dark span {
    transition: opacity 500ms;
  }*/

div.text-shadow {
  position: relative;
  white-space: nowrap;
}

div.text-shadow::after {
  opacity: 0;
  position: absolute;
  width: 100%;
  left: 0;
  content: attr(title);
}

.dark div.text-shadow::after {
  opacity: 1;
  transition: opacity 2000ms;
}

.dark div.shadow-blue::after {
  text-shadow:
    0.05em 0.05em 0.1em black,
    0 0 0.5em blue,
    0 0 0.5em blue,
    0 0 0.7em lightblue;
}

.dark div.shadow-green::after {
  text-shadow:
    0.05em 0.05em 0.1em black,
    0 0 0.5em green,
    0 0 0.5em green,
    0 0 0.7em lightgreen;
}

.dark div.shadow-gray::after {
  text-shadow:
    0.05em 0.05em 0.1em black,
    0 0 0.5em gray,
    0 0 0.5em gray,
    0 0 0.7em lightgray;
}

.dark div.shadow-violet::after {
  text-shadow:
    0.05em 0.05em 0.1em black,
    0 0 0.5em violet,
    0 0 0.5em violet,
    0 0 0.7em darkviolet;
}
</style>
