// (2024-02-26): Coming from Turbo's default `.eslintrc.js`
//
// This configuration only applies to the package manager root.
// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   ignorePatterns: ["apps/**", "packages/**", "tmp-testing/**"],
//   extends: ["@repo/eslint-config/library.js"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
// };

// (2024-03-01 12:48): zLabs | Black | DODO: Also have a look into [Sheriff](https://www.eslint-config-sheriff.dev) ([Git](https://github.com/AndreaPontrandolfo/sheriff))
//                                     Maybe that's a clean and more generic option to `@antfu/eslint-config`.
import antfu from '@antfu/eslint-config'

// [Monorepo Configuration](https://typescript-eslint.io/getting-started/typed-linting/monorepos)
// [Relative TSConfig Projects with `parserOptions.project = true`](https://typescript-eslint.io/blog/parser-options-project-true)

export default antfu(
  {
    // unocss: true,
    formatters: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  // Only apply to root (`/`)
  {
    ignores: ['apps/**', 'packages/**'],
  },
)
