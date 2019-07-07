import * as setl from "setl";

import * as App from "App";

// Color
export const [Colors, Color] = App.colors({
  // Raw Colors
  red: { r: 100, g: 0, b: 0 },
  darkred: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  // Color Mappings
  primaryForeground: setl.ref("darkred"),
  primaryBackground: setl.ref("blue"),
  secondaryForeground: setl.ref("red"),
});
export type Color = keyof typeof Color;

// Font
export const [Fonts, Font] = App.fonts({
  base: { fontFamily: "consolas" },
  normal: { basedOn: "base", fontSize: "16px" },
});
export type Font = keyof typeof Font;

// Number
export const [StyleNumbers, StyleNumber] = App.numbers({
  // Raw Numbers
  smallPadding: 5,
  bigPadding: 10,

  // Number Mappings
  paddingToButtonEdge: setl.ref("smallPadding"),
  paddingToPageEdge: setl.ref("bigPadding"),
});
export type StyleNumber = keyof typeof StyleNumber;

// Theme
export const Theme = {
  Colors,
  Fonts,
  StyleNumbers,
} as const;
export type Theme = typeof Theme;
