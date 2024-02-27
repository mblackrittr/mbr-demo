module.exports = {
  cache: true,
  // zLabs | Black | In case the issue of random errors on latest Nuxts comes back and we should stick to `"nuxt": "3.8.2"` again
  // Nuxt 3.9.0 Internal server error: Soft-invalidated module "entry.js" should not have existing transform result #3472
  // https://github.com/unocss/unocss/issues/3472
  // UPDATE (2024-02-18 06:33): Seems to be fixed with `3.10.2`, was still valid for `3.10.1` - giving this error on a forced full reload (Ctrl+Command+R).
  // reject: "nuxt"
}
