# trama-design-system

Shared brand tokens, PrimeNG theme, and assets for:

- [Solmedicven/trama](https://github.com/Solmedicven/trama) (hub)
- [Solmedicven/trama-web](https://github.com/Solmedicven/trama-web) (marketing)

Package name: `@trama/design-system`.

Hub: [wiki index](https://github.com/Solmedicven/trama/blob/docs/wiki-sibling-links/docs/wiki/README.md) · this repo [modules.md](https://github.com/Solmedicven/trama/blob/docs/wiki-sibling-links/docs/wiki/modules.md) · board fields [issues.md](https://github.com/Solmedicven/trama/blob/docs/wiki-sibling-links/docs/wiki/issues.md#campos-del-tablero). Doc-layer P0–P3 are not board Priority.

## Install (local workspace)

```json
{
  "dependencies": {
    "@trama/design-system": "file:../trama-design-system"
  }
}
```

## Exports

| Import | Purpose |
|--------|---------|
| `@trama/design-system/tokens.css` | CSS custom properties (`--ay-*`) |
| `@trama/design-system/tailwind-theme.css` | Tailwind v4 `@theme` bridge |
| `@trama/design-system/theme` | `TramaPreset`, `provideTramaPrimeNG()` |
| `@trama/design-system/assets/*` | Brand SVGs |

## Hub (Tailwind 3)

```scss
@import "@trama/design-system/tokens.css";
```

```js
const { tramaBrandExtend } = require("@trama/design-system/tailwind-v3-extend.cjs");
```

```ts
import { provideTramaPrimeNG } from "@trama/design-system/theme";
// providers: [provideTramaPrimeNG()]
```

## Marketing (Tailwind 4)

```css
@import "@trama/design-system/tokens.css";
@import "@trama/design-system/tailwind-theme.css";
@import "tailwindcss";
```

## Scope

**In:** tokens, PrimeNG preset, brand assets, presentational brand components (incremental).

**Out:** chat, left sidebar, dashboard cards, forms engine (hub domain).
