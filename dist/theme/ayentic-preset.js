/**
 * PrimeNG theme preset for Ayentic.
 * Material base, brand primary tokens, neutral secondaries, no green.
 */
import Material from "@primeuix/themes/material";
import { definePreset } from "@primeuix/themes";
const brandToken = (shade) => `var(--ay-color-brand-${shade})`;
const brandMix = (shade, opacity) => `rgb(var(--ay-color-brand-${shade}-rgb) / ${opacity})`;
export const AyenticPreset = definePreset(Material, {
    semantic: {
        primary: {
            50: brandToken(50),
            100: brandToken(100),
            200: brandToken(200),
            300: brandToken(300),
            400: brandToken(400),
            500: brandToken(500),
            600: brandToken(600),
            700: brandToken(700),
            800: brandToken(800),
            900: brandToken(900),
            950: brandToken(900),
        },
        focusRing: {
            width: "2px",
            style: "solid",
            color: brandToken(500),
            offset: "2px",
            shadow: "var(--ay-focus-ring-shadow)",
        },
        colorScheme: {
            light: {
                primary: {
                    color: "{primary.500}",
                    contrastColor: "#ffffff",
                    hoverColor: "{primary.600}",
                    activeColor: "{primary.700}",
                },
                surface: {
                    0: "#ffffff",
                    50: "{slate.50}",
                    100: "{slate.100}",
                    200: "{slate.200}",
                    300: "{slate.300}",
                    400: "{slate.400}",
                    500: "{slate.500}",
                    600: "{slate.600}",
                    700: "{slate.700}",
                    800: "{slate.800}",
                    900: "{slate.900}",
                    950: "{slate.950}",
                },
            },
            dark: {
                primary: {
                    color: "{primary.400}",
                    contrastColor: "#ffffff",
                    hoverColor: "{primary.300}",
                    activeColor: "{primary.500}",
                },
                surface: {
                    0: "#ffffff",
                    50: "{slate.50}",
                    100: "{slate.100}",
                    200: "{slate.200}",
                    300: "{slate.300}",
                    400: "{slate.400}",
                    500: "{slate.500}",
                    600: "{slate.600}",
                    700: "{slate.700}",
                    800: "{slate.800}",
                    900: "{slate.900}",
                    950: "{slate.950}",
                },
            },
        },
    },
    components: {
        button: {
            colorScheme: {
                light: {
                    root: {
                        secondary: {
                            color: "{slate.600}",
                            borderColor: "{slate.300}",
                            background: "transparent",
                            hoverBackground: "{slate.100}",
                            activeBackground: "{slate.200}",
                            hoverBorderColor: "{slate.400}",
                            activeBorderColor: "{slate.500}",
                            focusRing: {
                                color: "transparent",
                                shadow: "0 0 0 0.2rem rgba(71, 85, 105, 0.25)",
                            },
                        },
                    },
                    outlined: {
                        primary: {
                            color: "{primary.500}",
                            borderColor: "{primary.500}",
                            hoverBackground: brandMix(500, 0.08),
                            activeBackground: brandMix(500, 0.16),
                        },
                        secondary: {
                            color: "{slate.600}",
                            borderColor: "{slate.300}",
                            hoverBackground: "{slate.100}",
                            activeBackground: "{slate.200}",
                        },
                    },
                    text: {
                        secondary: {
                            color: "{slate.600}",
                            hoverBackground: "{slate.100}",
                            activeBackground: "{slate.200}",
                        },
                    },
                },
                dark: {
                    root: {
                        secondary: {
                            color: "{slate.400}",
                            borderColor: "{slate.600}",
                            background: "transparent",
                            hoverBackground: "rgba(255,255,255,0.06)",
                            activeBackground: "rgba(255,255,255,0.12)",
                            hoverBorderColor: "{slate.500}",
                        },
                    },
                    outlined: {
                        primary: {
                            color: "{primary.400}",
                            borderColor: "{primary.400}",
                            hoverBackground: brandMix(500, 0.2),
                            activeBackground: brandMix(500, 0.3),
                        },
                        secondary: {
                            color: "{slate.400}",
                            borderColor: "{slate.600}",
                            hoverBackground: "rgba(255,255,255,0.06)",
                            activeBackground: "rgba(255,255,255,0.12)",
                        },
                    },
                    text: {
                        secondary: {
                            color: "{slate.400}",
                            hoverBackground: "rgba(255,255,255,0.06)",
                            activeBackground: "rgba(255,255,255,0.12)",
                        },
                    },
                },
            },
        },
    },
});
