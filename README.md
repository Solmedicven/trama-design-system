# @ayentic/design-system

Shared Ayentic brand tokens, PrimeNG theme, and assets for:

- **ayentic** (hub product)
- **ayentic-web** (marketing / SEO site)

## Install (local workspace)

```json
{
  "dependencies": {
    "@ayentic/design-system": "file:../ayentic-design-system"
  }
}
```

## Exports

| Import | Purpose |
|--------|---------|
| `@ayentic/design-system/tokens.css` | CSS custom properties (`--ay-*`) |
| `@ayentic/design-system/tailwind-theme.css` | Tailwind v4 `@theme` bridge |
| `@ayentic/design-system/theme` | `AyenticPreset`, `provideAyenticPrimeNG()` |
| `@ayentic/design-system/assets/*` | Brand SVGs |

## Hub (Tailwind 3)

```scss
@import "@ayentic/design-system/tokens.css";
```

```js
const { ayenticBrandExtend } = require("@ayentic/design-system/tailwind-v3-extend.cjs");
```

```ts
import { provideAyenticPrimeNG } from "@ayentic/design-system/theme";
// providers: [provideAyenticPrimeNG()]
```

## Marketing (Tailwind 4)

```css
@import "@ayentic/design-system/tokens.css";
@import "@ayentic/design-system/tailwind-theme.css";
@import "tailwindcss";
```

## Scope

**In:** tokens, PrimeNG preset, brand assets, presentational brand components (incremental).

**Out:** chat, left-sidebar, dashboard cards, forms engine (hub domain).
