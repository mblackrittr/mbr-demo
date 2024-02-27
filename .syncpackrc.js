// @ts-check

// Has to be `export default` (module) not `module.exports` (commonjs), which seems given wrong in the docs:
// [Syncpack > Config > .syncpackrc](https://jamiemason.github.io/syncpack/config/syncpackrc/)

/** @type {import("syncpack").RcFile} */
export default {
  // Sorting `scripts` (the actual list, right), how crazy?! 🙀 😹💦
  // sortAz: ['bin', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions', 'scripts'],
  // See: https://jamiemason.github.io/syncpack/config/syncpackrc/
  sortAz: ['bin', 'contributors', 'dependencies', 'devDependencies', 'keywords', 'peerDependencies', 'resolutions'],
  // `scripts` "first" please, at least before dependencies, and `dependencies` before everything else.
  // Beside this, these settings also follow what we've with ESLint settings.
  sortFirst: ['name', 'type', 'version', 'private', 'packageManager', 'description', 'author', 'engines', 'scripts', 'dependencies', 'devDependencies'],
  // Docu says this would be the default, but not with `workspaces` within `package.json`, so if we set this here, this would override these!
  // source: ['package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Use workspace protocol when developing local packages',
      dependencies: ['$LOCAL'],
      // Important to set `dependencyTypes`, else it also applies to `name` attribute of `package.json` and sets it to given `pinVersion`
      dependencyTypes: ['prod', 'dev'],
      // DODO (2024-02-23 07:47): Change this to allow `^` values like `^0.0.1` that're satisfied by the local package.
      //                          That way we're already complying to releases!
      pinVersion: '*',
    },
  ],
  semverGroups: [
    {
      label: 'Use exact version numbers',
      packages: ['**'],
      dependencies: ['**'],
      range: '',
    },
  ],
}
