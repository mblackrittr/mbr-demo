// import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import path from 'path'

// const surrealWasm = path.resolve(__dirname, 'wasm', 'surreal.wasm')
const surrealWasm = path.resolve(__dirname, 'node_modules/surrealdb.wasm/dist/full/index_bg.wasm')

export default {
  // optimizeDeps: {
  //   esbuildOptions: {
  //     target: 'esnext'
  //   }
  // },
  // build: {
  //   target: 'esnext'
  // },
  plugins: [
    // wasm(),
    topLevelAwait()
  ],
  resolve: {
    alias: {
      // "Hotfix" for missing copy of `index_bg.wasm` to `node_modules/.vite/deps/`
      // DODO: Separate such huge stuff!
      'index_bg.wasm': surrealWasm
    }
  }
}
