import * as App from "App";

// Color
export const [RawColors, RawColor, RawColorInput] = App.colors({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
  white: { r: 255, g: 255, b: 255 },
});
export type RawColor = keyof typeof RawColor;

// Color Mapping
export const [Colors, Color, ColorInput] = App.colorMappings(
  {
    primaryForeground: { key: "white" },
    primaryBackground: { key: "red" },
    secondaryBackground: { key: "blue" },

    buttonBackground: "primaryBackground",
    inputBackground: { key: "green" },
  },
  RawColors,
);

// Font
export const [Fonts, Font] = App.fonts({
  base: { fontFamily: "consolas" },

  normal: { basedOn: "base", fontSize: "16px" },
  heading: { basedOn: "normal", fontSize: "32px", fontStyle: "bold" },
});
export type Font = keyof typeof Font;

// Number
export const [Numbers, Number] = App.numbers({
  // Raw Numbers
  smallPadding: 7.5,
  bigPadding: 10,
  borderRadius: 10,

  // Number Mappings
  paddingToButtonEdge: "smallPadding",
  marginBetweenItems: "smallPadding",
  paddingToPageEdge: "bigPadding",
  marginToHeading: "bigPadding",
});
export type Number = keyof typeof Number;

// Theme
export const Theme = {
  Colors,
  Fonts,
  Numbers,
} as const;
export type Theme = typeof Theme;
