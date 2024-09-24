# `@web-playground/ui`

This package is home of all the ui features used throughout our `React` stack.

## Getting started

1. Add this package to your repo:

```
yarn add @web-playground/ui
```

2. Import the css file (ideally in your `layout.tsx`):
> It is exported by this package.

```typescript
import "@web-playground/ui/globals.css";
```


3. Extends or use the `tailwind.config.ts` in your own `tailwind.config.ts` file.
> It is exported by this package.

```typescript
export * from "@web-playground/ui/tailwind.config";
```

4. Import any components in your `app`:

```typescript
import { Button } from "@web-playground/ui/components/button";
```
