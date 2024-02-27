module.exports = {
  // NOTE (2024-03-05 10:49): We also set these within `package.json` > `{ "scripts": { "ncu": "ncu --workspaces --root" } }`
  workspaces: true,
  root: true,

  cache: true,
  cacheExpiration: 720,

  // zLabs | Black | Probably a task of SyncPack, yes, yes, no, no!? 😻
  // NCU only removes this from packages it acutally updates, so, yeah, SyncPack to the rescue!
  // removeRange: true
}
