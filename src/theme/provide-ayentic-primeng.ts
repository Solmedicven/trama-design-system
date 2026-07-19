import { providePrimeNG } from "primeng/config";
import { AyenticPreset } from "./ayentic-preset";

export type AyenticPrimeNGOptions = {
  /** Override cssLayer order if the host app uses a different Tailwind setup. */
  cssLayerOrder?: string;
};

/**
 * Shared PrimeNG provider contract for hub + marketing site.
 * Keeps cssLayer order and zIndex map aligned across consumers.
 * Return type is inferred so consumers do not pull a second @angular/core types tree.
 */
export function provideAyenticPrimeNG(options: AyenticPrimeNGOptions = {}) {
  return providePrimeNG({
    theme: {
      preset: AyenticPreset,
      options: {
        darkModeSelector: false,
        cssLayer: {
          name: "primeng",
          order:
            options.cssLayerOrder ??
            "tailwind-base, primeng, tailwind-utilities",
        },
      },
    },
    zIndex: {
      modal: 13500,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    },
  });
}
