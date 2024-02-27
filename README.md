---
title: 'MBR-Demo'
title-stylized: 'MBR|DEMO'
title-stylized-heavy: 'MBR | D E M O'
description: 'Monorepo root (/) - mostly DevOps, centralized and shared.'
package: '@mbr/root-demo'
path: '/'
---

<!-- (2024-02-29 10:59): zLabs | Black | DODO: Fancy Logo/Hero as SVG with dark/light detection and fancør SVG greatness! 😻 -->

<div align="center">
  <img alt="MBR|Nuxonic - Screenshot" src="apps/nuxt-ionic/assets/icon-only.png" width="33%">
</div>


# MBR | D E M O

**`Monorepo`** root (`/`) - mostly DevOps, centralized and shared by `apps/` and `packages/`.
  
For a "real product" and its features, you might want to check [MBR-Nuxonic](apps/nuxt-ionic).


## Features

  - Strongly opinionated conventions over configurations - *we're not building some geek-framework but set base for (maybe not only) pro-level Typescript development*.

  - Jumping the bandwagon and universe of [Effect](#effect-ts) - *for not only the mandatory mentioned fully typed errors and a hint of functional programming paradigms* - leveraging its rapidly growing eco-system of exceptional tooling like [Effect-DocGen][effect-ts:docgen] and support for our preferred framework(s) with [Effect-Vue][effect-ts-app:vue].

  - Next Level CLI via [Effect-CLI][@effect/cli:git] and [Effect's Terminal Pretty Printer][@effect/printer-ansi:git > examples/main].

  - [Changesets] with [Changeset-Conventional-Commits] to also cover and include the already common [Conventional Commits: A Better Way].
  
  - [Commitlint] ([Git][Commitlint-Git]) and [Commitizen] ([Git][Commitizen-Git]) for Conventional Commits - with combined [Config-Conventional]/[Config-PNPM-Scopes] and added type for `devops` and scope for `root` (`/` of monorepo).

  - [AntFu-ESLint-Config] plus [ESLint-Plugin-SonarJS] - *for even more rulez*.

    > Still considering switching to [Sheriff-ESLint-Config].

  - [Syncpack] ([Git][Syncpack-Git]) to keep packages within the monorepo in sync.
  
  - [NCU - NPM-Check-Updates] to check for and update packages within the monorepo.

  - [Hygen] code and configuration generator.
    
    > [...] ***hygen is contextual*** [...] ***it will automatically understand where it is in your code base and what generators are relevant for each part (think about monorepos)*** [...]."
    > 
    > [Hygen > Docs > FAQ > What's the difference from generator X/Y/Z?](https://www.hygen.io/docs/faq/#whats-the-difference-from-generator-xyz)

  - [PNPM] and [Bun] support - *with preference and focus for Bun*.

  - [Turborepo] for further growth - *great in productions with big monorepos*.

  - Mirroring to GitHub with option to pull in MRs (PRs in GitHub verbiage) from GitHub.

  - Dual project and issue management via [GitLab][mbr-demo-gitlab] and [GitHub][mbr-demo-github] - *GitLab with internal and GitHub with public focus*.

  - `.env` (Dotenv) driven global environment variables to make deployment hosts, IPs, devices, etc. configurable in one root config for all apps/packages within the monorepo.
    E.g. in case there're x capacitor based apps, they'll all be run on the developer's devices and emulators with the same commands and configs, instead of configuring each, and other such overhead.

    ```sh
    ANDROID_DEVICE = LGH83125ba2507
    ANDROID_VIRTUAL = Pixel_7_API_34
    IOS_DEVICE = 00042620-000441F34CC2791D
    IOS_VIRTUAL = 9C28C3C-E9DB-4548-929B-9B0869661DEF
    BASE_PORT = 7777
    ```

  - General heavy use of convenient package scripts by stacking.
    
    E.g. excerpt of `apps/nuxt-ionic/package.json`:
    ```json
    "scripts": {
      ...
      "ca": "dotenv -- cap run --no-sync android",
      "ci": "dotenv -- cap run --no-sync ios",
      "cae": "npm run ca -- --target $ANDROID_VIRTUAL",
      "cad": "npm run ca -- --target $ANDROID_DEVICE",
      "cie": "npm run ci -- --target $IOS_VIRTUAL",
      "cid": "npm run ci -- --target $IOS_DEVICE",
      "cael": "npm run cae -- -l --port $BASE_PORT",
      "cadl": "npm run cad -- -l --port $BASE_PORT",
      "ciel": "npm run cie -- -l --port $BASE_PORT",
      "cidl": "npm run cid -- -l --port $BASE_PORT",
      ...
    }
    ```

  - More to come with [Ansible], [Docker]/[Podman] for dev environments, [Tilt] for transitional/staging dev, [K8s]/[K3s] for production on [FreeBSD] clusters using [Jails][freebsd-jails] and jailed [ContainerD] - *beside native Jails as "containers"*.

## Apps

### [MBR-Nuxonic](apps/nuxt-ionic/)

Mobile, PWA and Web using Nuxt and Vue with Ionic.



## Packages

### [MBR-Tooling](packages/tooling/)

Tooling(s) for packages - [Ansible](packages/tooling/ansible/), [Git](packages/tooling/git/), [Hygen](packages/tooling/hygen/), ...


### [MBR-SurrealDB](packages/surrealdb/)

Wrapper for [SurrealDB]-[WASM][surrealdb-wasm] ([WebAssembly]).


### [MBR-Utils](packages/utils/)

Utils for Nuxt, Vue, Ionic, TS, ...



<!-- 
### [MBR-SurrealDB-JSONAPI](packages/surrealdb-jsonapi)

[JSONAPI](https://jsonapi.org) layer within SurrealDB implemented in SurrealQL.
 -->


## Effect-TS

  - [Effect][effect-ts] already features a showcase of [Nuxt with Effect](https://github.com/effect-ts-app/boilerplate/tree/main/frontend/).

  According to a [recent Reddit](https://www.reddit.com/r/typescript/comments/16w3iwn/comment/k36ddgj/), `Effect` obsoletes a myriad of packages, not limited to:
  - lodash/ramda/remeda/fp-ts/similar
  - express/koa/h3/other servers
  - react-query
  - redux/xstate/jotai/zustand/other state management
  - rxjs
  - purify-ts
  - date-fns and similar
  - inversify
  - zod/typebox/yup/joi/and so on
  - all stream related libs
  - axios/got/ky/superagent/similar


### Next Level CLI via Effect and Effect-CLI

  The now quite ready for prime-time [Effect-CLI][@effect/cli:git] looks promising:
  
  - The "(in)famous" in general "clean everything" of Effect,
  - part of an already whole universe of niceties,
  - replacing an otherwise hunch-load of partly even more or less rather legacy packages.

  Checking the [Example of ANSI Terminal Pretty Printer for Effect-TS][@effect/printer-ansi:git > examples/main], I'm already curious how well this [Pretty Printer for Effect-TS][@effect/printer:git] works for our output - as in CLI output, but looking at it, yeah, maybe it's also an option for more - eying on the actual `changeset`/`changelog` generation.



## FAQ/Explainers

  - Frontmatter, the leading "stuff" in between `---`

    Mostly just for the sake of it - to use it all the way along - seeing it more as a convention than an options.


  - Heavy use of comments within code

    Only for "core-dev" (still've to find a better wording) for easy, quick and definite comprehension of pitfalls, what changed and what's happening in general.

  
  - Mojis in comments - "Really, isn't that highly unprofessional?!"

    Back in the 00s and in final releases I would agree, but mostly same as with comments - just in "core-dev".


## Usage/Commands

### Setup

  - Install
    ```sh
    > bun install
    ```

### Management

  - Syncpack: Lint
    ```sh
    > bun run spl
    ```

  - Syncpack: Format and Fix
    ```sh
    > bun run spf
    ```

  - NCU (NPM Check Updates): Check for Updates
    ```sh
    > bun run ncu
    ```

  - NCU (NPM Check Updates): Update Packages
    ```sh
    > bun run ncuu
    ```

  - Commit: Using Commitizen and Commitlint
    ```sh
    > bun run commit
    ```

  - Changeset: Add Changeset
    ```sh
    > bun run cs
    ```

  - Changeset: Status
    ```sh
    > bun run css
    ```


<!-- urls -->
[MBR-Demo-GitLab]: https://gitlab.com/mblackrittr/mbr-demo/
[MBR-Demo-GitHub]: https://github.com/mblackrittr/mbr-demo/
[MBR-Nuxonic-GitLab]: https://gitlab.com/mblackrittr/mbr-demo/tree/master/apps/nuxt-ionic/
[MBR-Nuxonic-GitHub]: https://github.com/mblackrittr/mbr-demo/tree/master/apps/nuxt-ionic/

[Nuxonic-Demo]: https://nuxonic.netlify.app/

[AntFu-ESLint-Config]: https://github.com/antfu/eslint-config
[Changesets]: https://github.com/changesets/changesets/
[Changeset-Conventional-Commits]: https://github.com/iamchathu/changeset-conventional-commits/
[Commitlint]: https://commitlint.js.org/
[Commitlint-Git]: https://github.com/conventional-changelog/commitlint/
[Commitizen]: https://commitizen-tools.github.io/commitizen/
[Commitizen-Git]: https://github.com/commitizen/cz-cli
[Config-Conventional]: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional/
[Config-PNPM-Scopes]: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-pnpm-scopes/
[Conventional Commits: A Better Way]: https://medium.com/neudesic-innovation/conventional-commits-a-better-way-78d6785c2e08

[Effect-TS]: https://www.effect.website/
[Effect-TS-Git]: https://github.com/Effect-TS/effect-ts/
[Effect-TS:DocGen]: https://github.com/Effect-TS/docgen/
[Effect-TS-App:Boilerplate]: https://github.com/effect-ts-app/boilerplate/
[Effect-TS-App:Vue]: https://github.com/effect-ts-app/libs/tree/main/packages/vue/
[@effect]: https://effect.website/
[@effect:git]: https://github.com/Effect-TS/effect/
[@effect/cli:git]: https://github.com/Effect-TS/effect/tree/main/packages/cli/
[@effect/printer:git]: https://github.com/Effect-TS/effect/tree/main/packages/printer/
[@effect/printer-ansi:git > examples/main]: https://github.com/Effect-TS/effect/blob/main/packages/printer-ansi/examples/main.ts

[Hygen]: https://www.hygen.io
[NCU - NPM-Check-Updates]: https://github.com/raineorshine/npm-check-updates/
[Nuxt]: https://nuxtjs.org/
[Sonar]: https://www.sonarsource.com/
[ESLint-Plugin-SonarJS]: https://github.com/SonarSource/eslint-plugin-sonarjs/
[Sheriff-ESLint-Config]: https://eslint-config-sheriff.dev
[SurrealDB]: https://surrealdb.com
[SurrealDB-WASM]: https://github.com/surrealdb/surrealdb.wasm/
[Syncpack]: https://jamiemason.github.io/syncpack/
[Syncpack-Git]: https://github.com/JamieMason/syncpack/
[Turborepo]: https://turbo.build/

[Bun]: https://bun.sh/
[PNPM]: https://pnpm.io/

[Ansible]: https://ansible.com/
[Docker]: https://docker.com/
[Podman]: https://podman.io/
[Tilt]: https://tilt.dev/
[K3s]: https://k3s.io/
[K3s-K8s-Explained]: https://traefik.io/glossary/k3s-explained/
[K8s]: https://kubernetes.io/
[Kubernetes]: https://kubernetes.io/
[Pulumi]: https://www.pulumi.com/
[FreeBSD]: https://freebsd.org/
[FreeBSD-Jails]: https://wiki.freebsd.org/Jails/
[ContainerD]: https://containerd.io/

[WebAssembly]: https://webassembly.org
