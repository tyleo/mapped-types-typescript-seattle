import * as setl from "setl";

import * as App from "App";

// Color
const RawColors = App.colors({
  buttonGrey: { r: 45, g: 50, b: 56 },
  inputGrey: { r: 54, g: 54, b: 55 },
  darkestGrey: { r: 32, g: 33, b: 35 },
  grey: { r: 39, g: 40, b: 43 },
  lightestGrey: { r: 172, g: 177, b: 176 },
});

// Color Mapping
export const [Colors, Color] = setl.theme(
  {
    primaryForeground: "lightestGrey",
    primaryBackground: "darkestGrey",
    secondaryBackground: "grey",

    buttonBackground: "buttonGrey",
    inputBackground: "inputGrey",
  },
  RawColors,
  () => "rgb(0, 0, 0)",
);
export type Color = keyof typeof Color;

// Font
const RawFonts = App.fonts({
  base: { fontFamily: "consolas" },

  normal: { basedOn: "base", fontSize: "16px" },
  heading: { basedOn: "normal", fontSize: "32px", fontStyle: "bold" },
});

export const [Fonts, Font] = setl.theme(
  {
    normal: "normal",
    heading: "heading",
  },
  RawFonts,
  (): [App.IFont<keyof typeof RawFonts>, string] => [{}, "comic sans"],
);
export type Font = keyof typeof Font;

// Number
const RawNumbers = App.simpleItems(
  {
    smallerPadding: 5,
    smallPadding: 7.5,
    bigPadding: 10,
    borderRadius: 10,
  },
  0,
);

export const [Numbers, Number] = setl.theme(
  {
    paddingToButtonEdge: "smallPadding",
    paddingToInputEdge: "smallerPadding",
    marginBetweenItems: "smallPadding",
    paddingToPageEdge: "bigPadding",
    marginToHeading: "bigPadding",
    borderRadius: "borderRadius",
  },
  RawNumbers,
  () => 0,
);
export type Number = keyof typeof Number;

// String
const RawStrings = App.simpleItems(
  {
    title: "Space Camp Sign Up",
    question: "Favorite Planet",
    okButton: "Launch",
    exitButton: "Return to Earth",
  },
  "ERROR",
);

export const [Strings, String] = setl.theme(
  {
    title: "title",
    question: "question",
    okButton: "okButton",
    exitButton: "exitButton",
  },
  RawStrings,
  () => "ERROR",
);
export type String = keyof typeof String;

// Theme
export const Theme = {
  Colors,
  Fonts,
  Numbers,
  Strings,
} as const;
export type Theme = typeof Theme;
