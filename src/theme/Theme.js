import { lighten, darken } from "polished";

export const fonts = {
    body: '"Helvetica Neue", Roboto, sans-serif',
    heading: '"Roboto", sans-serif',
    monospace: "Menlo, monospace",
};

export const fontSizes = [
    "0.625rem",
    "0.75rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem",
    ];

export const fontWeights = {
    regular: 400,
    medium: 500,
    bold: 700,
};

export const lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
};

export const letterSpacings = {
    default: "normal",
    tracked: "0.04em",
};

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];

export const breakpoints = ["40em", "52em", "64em"];

export default {
    space,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    radii: [0, 2, 4, 16, 9999, "100%"],
    colors: {
        brand: {
            primary: "#012E86",
            secondary: "#0064D9",
            accent: "#DB7C00",
            muted: "#C6DAF7",
        },
        ui: {
            primary: "#262626",
            secondary: "#757575",
            tertiary: "#F1F1F1",
            quaternary: "#FFFFFF",
            disabled: "#DEDEDE",
            error: "#D0421B",
            success: "#138000",
        },
        bg: {
            primary: "#FFFFFF",
            secondary: "#F1F1F1",
        },
        text: {
            primary: "#262626",
            secondary: "#757575",
            disabled: "#9C9C9C",
            inverse: "#FFFFFF",
            error: "#D0421B",
            success: "#138000",
        },
        highlights: {
            primaryHighlight: darken(0.1, "#012E86"),
            primaryExtraHighlight: darken(0.2, "#012E86"),
            bgHighlight: darken(0.1, "#FFFFFF"),
        },
    },
};
