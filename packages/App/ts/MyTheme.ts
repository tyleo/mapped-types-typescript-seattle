import * as Theme from "App";

// Color
export const [Colors, Color] = Theme.colors({
  // Raw Colors
  red: { r: 100, g: 0, b: 0 },
  darkred: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  // Color Mappings
  primaryForeground: Theme.ref("darkred"),
  primaryBackground: Theme.ref("blue"),
  secondaryForeground: Theme.ref("red"),
});
export type Color = keyof typeof Color;

// Font
export const [Fonts, Font] = Theme.fonts({
  base: { fontFamily: "consolas" },
  normal: { basedOn: "base", fontSize: "16px" },
});
export type Font = keyof typeof Font;

// Number
export const [StyleNumbers, StyleNumber] = Theme.numbers({
  // Raw Numbers
  smallPadding: 5,
  bigPadding: 10,

  // Number Mappings
  paddingToButtonEdge: Theme.ref("smallPadding"),
  paddingToPageEdge: Theme.ref("bigPadding"),
});
export type StyleNumber = keyof typeof StyleNumber;

// Theme
export const MyTheme = {
  Colors,
  Fonts,
  StyleNumbers,
} as const;
export type MyTheme = typeof MyTheme;

//

const button = (theme: MyTheme, color: Color = Color.primaryForeground) => {
  return `background: ${theme.Colors[color]};`;
};
