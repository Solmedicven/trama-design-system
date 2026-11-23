/**
 * Tailwind CSS v3 theme.extend fragment for the hub.
 * Usage in tailwind.config.js:
 *   const { tramaBrandExtend } = require('@trama/design-system/src/theme/tailwind-v3-extend.cjs');
 *   theme: { extend: { ...tramaBrandExtend, ...local } }
 */
const brand = (shade) =>
  `rgb(var(--ay-color-brand-${shade}-rgb) / <alpha-value>)`;

const tramaBrandExtend = {
  colors: {
    brand: {
      DEFAULT: brand(500),
      50: brand(50),
      100: brand(100),
      200: brand(200),
      300: brand(300),
      400: brand(400),
      500: brand(500),
      600: brand(600),
      700: brand(700),
      800: brand(800),
      900: brand(900),
    },
  },
  fontFamily: {
    sans: ["var(--ay-font-sans)"],
  },
  boxShadow: {
    "brand-sm": "var(--ay-shadow-brand-sm)",
    brand: "var(--ay-shadow-brand)",
    "brand-md": "var(--ay-shadow-brand-md)",
    "brand-lg": "var(--ay-shadow-brand-lg)",
    "brand-xl": "var(--ay-shadow-brand-xl)",
    "elevated-bottom": "var(--ay-shadow-elevated-bottom)",
    "elevated-top": "var(--ay-shadow-elevated-top)",
  },
};

module.exports = { tramaBrandExtend, brand };
