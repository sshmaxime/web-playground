# @Web-Playground

![React] ![TypeScript] ![Next.js] ![Vercel] ![Three.js] ![ReactQuery]

This monorepo is a playground for all of my `React`, `Next.js` & `Typescript` projects.

I’ve spent considerable time developing apps and dApps, both for personal side projects and companies I've worked with. Along the way, I realized the need for a simple, fully-configured, and customizable monorepo that would allow me to quickly iterate on new projects.

---

## Architecture

This monorepo is organized into three main workspaces: `apps`, `packages`, and `configs`. Each workspace serves a distinct purpose, making the overall structure intuitive and easy to navigate.

- The `apps` workspace contains a collection of projects built with `React`, `Next.js`, and `TypeScript`, ranging from blockchain explorers to static websites.

- The pack`ages workspace houses reusable libraries, providing essential UI components, cryptographic utilities, and TypeScript helpers.

- The `configs` workspace offers base configurations for TypeScript projects, ensuring consistent setups and best practices across all applications.

This architecture is designed to promote modularity, reuse, and ease of development, enabling efficient project iteration and scalability.

---

## Apps

Within the `apps` workspace, you'll find a curated collection of apps I've developed over the years in `React`, `Next.js` & `Typescript`. While not exhaustive, this list covers a variety of topics, including `blockchain`, `3D`, `ai` projects, and basic `static` applications, to name just a few.

### [Dusk-Explorer](https://web-playground-dusk-explorer.vercel.app/) ![React] ![TypeScript] ![Next.js]

![ReactQuery]

> Blockchain Explorer for the `Dusk` ecosystem.

<h1></h1>

### [Omniscient](https://web-playground-omniscient.vercel.app/) ![React] ![TypeScript] ![Next.js]

![Wagmi] ![Viem] ![ReactQuery]

> Statistics Explorer for the `Omni` ecosystem.

<h1></h1>

### [Deblock-Swap](https://web-playground-deblock-swap.vercel.app/) ![React] ![TypeScript] ![Next.js]

![Wagmi] ![Viem] ![ReactQuery]

> Simple Swap component for `Deblock-Hq`.

<h1></h1>

### [Sshmaxime](https://web-playground-sshmaxime.vercel.app/) ![React] ![TypeScript] ![Next.js]

> A website talking a little bit about me.

<h1></h1>

### [Boilerplate](https://web-playground-boilerplate.vercel.app/) ![React] ![TypeScript] ![Next.js]

> A basic boilerplate to quickly bootstrap a new app.

---

## Packages

The `packages` workspace contains a set of reusable `libraries` that provide core functionality across all apps within the monorepo. These packages include `@web-playground/ui` for building consistent user interfaces,` @web-playground/crypto` for handling cryptographic operations, and `@web-playground/utils`, which offers a collection of utility functions and types for efficient TypeScript development.

### @web-playground/ui

![React] ![TypeScript] ![Next.js]

![Shadcn]

This package is primarily built on top of the `shadcn` framework, with several additional utilities that I have incorporated based on their frequent use in various projects. It is intended to function as a `foundational ui` package for the `app` workspace, offering essential `components` and tools to streamline the development process. By integrating these commonly used utilities, the package ensures `consistency` and `efficiency`, providing a reliable `base` for building user interfaces across different applications within the monorepo.

<h1></h1>

### @web-playground/crypto

![TypeScript]

This package contains a collection of essential `functions` and `type` utilities specifically designed for use in `cryptographic` software development. These utilities play a critical role in simplifying various `cryptographic` operations and ensuring the secure implementation of `algorithms` and data `transformation`. By providing reusable components, this package enhances the `efficiency` and reliability of `crypto-related` projects, allowing developers to focus on building secure applications without having to recreate `foundational` tools from scratch.

<h1></h1>

### @web-playground/utils

![TypeScript]

This package contains a variety of utility `functions` and `types` that are useful for anything related to `TypeScript` development. It offers a little bit of everything, making it a versatile resource for handling different tasks and challenges commonly encountered when working with TypeScript. Whether looking for helpful functions or reusable types, this package serves as a handy `toolkit` to simplify and streamline the development process.

---

## Configs

The `packages` workspace contains a set of reusable `configs` that provide core functionality across all apps within the monorepo.

### Typescript

![Json]

This package provides a comprehensive set of `base configurations` essential for developing a `TypeScript` application. It includes general `settings`, `tools` and `file configuration` to streamline the setup process, ensuring a solid and similar foundation to build upon. By offering pre-configured options tailored to common development needs, this package simplifies project initialization and promotes best practices, allowing focusing on the core functionality of an app.

<!-- Badges -->
[ReactQuery]: https://img.shields.io/badge/React%20Query-black?logo=reactquery&logoColor=fff
[React]: https://img.shields.io/badge/React-black.svg?logo=react&logoColor=fff
[TypeScript]: https://img.shields.io/badge/TypeScript-black?logo=typescript&logoColor=fff
[Next.js]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[Vercel]: https://img.shields.io/badge/Vercel-black.svg?logo=vercel&logoColor=white
[Three.js]: https://img.shields.io/badge/Three.js-black?logo=threedotjs&logoColor=white
[Shadcn]: https://img.shields.io/badge/shadcn%2Fui-black?logo=shadcnui&logoColor=white
[Json]: https://img.shields.io/badge/JSON-black?logo=json&logoColor=white
[Viem]: https://custom-icon-badges.demolab.com/badge/Viem-black?logo=viem&logoColor=white
[Wagmi]: https://img.shields.io/badge/Wagmi-black?logo=wagmi&logoColor=white
