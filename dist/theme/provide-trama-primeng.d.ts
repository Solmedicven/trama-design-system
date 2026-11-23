export type TramaPrimeNGOptions = {
    /** Override cssLayer order if the host app uses a different Tailwind setup. */
    cssLayerOrder?: string;
};
/**
 * Shared PrimeNG provider contract for hub + marketing site.
 * Keeps cssLayer order and zIndex map aligned across consumers.
 * Return type is inferred so consumers do not pull a second @angular/core types tree.
 */
export declare function provideTramaPrimeNG(options?: TramaPrimeNGOptions): import("@angular/core").EnvironmentProviders;
