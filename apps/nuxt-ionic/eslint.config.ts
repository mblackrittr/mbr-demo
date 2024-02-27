import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import nuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

// (2024-03-03 18:57): zLabs | Black | Leaving this for reference on how to merge the `promise` array `antfu()` returns.
// import base from '../../eslint.config'
// export default (async () => [...await base, ...nuxt])()

export default antfu(
  {
    unocss: true,
    formatters: true,
    // [Type Aware Rules](https://github.com/antfu/eslint-config?tab=readme-ov-file#type-aware-rules)
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  nuxt,
  // Legacy config
  ...compat.config({
    parserOptions: {
      project: true,
    },
    plugins: ['sonarjs'],
    extends: ['plugin:sonarjs/recommended'],
  }),
  // Own ESLint flat configs go into adjacent objects
  {
  },
)
