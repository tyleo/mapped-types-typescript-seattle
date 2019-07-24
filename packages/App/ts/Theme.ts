import * as setl from "setl";

import * as App from "App";

// Color
const RawColors = App.colors({
  // Space
  buttonGrey: { r: 45, g: 50, b: 56 },
  inputGrey: { r: 54, g: 54, b: 55 },
  darkestGrey: { r: 32, g: 33, b: 35 },
  grey: { r: 39, g: 40, b: 43 },
  lightestGrey: { r: 172, g: 177, b: 176 },

  // Unicorn
  buttonRed: { r: 233, g: 30, b: 99 },
  inputPink: { r: 216, g: 178, b: 205 },
  lightestPink: { r: 244, g: 213, b: 237 },
  pink: { r: 227, g: 127, b: 202 },
  lightGreyOverPink: { r: 242, g: 242, b: 242 },
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
    switchThemeButton: "Switch Theme",

    // Space Camp
    spaceCampSignUp: "Space Camp Sign Up",
    favoritePlanet: "Favorite Planet",
    launchButton: "Launch",
    returnButton: "Return to Earth",

    // Unicorn Camp
    unicornCampSignUp: "Unicorn Camp Sign Up",
    favoriteColor: "Favorite Color",
    rideButton: "Ride",
    dismountButton: "Dismount",
  },
  "ERROR",
);

export const [Strings, String] = setl.theme(
  {
    title: "spaceCampSignUp",
    question: "favoritePlanet",
    okButton: "launchButton",
    exitButton: "returnButton",
    switchThemeButton: "switchThemeButton",
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

// Unicorn Theme

// Color
export const UnicornColors = setl.themeBasedOn(
  {
    primaryForeground: "lightGreyOverPink",
    primaryBackground: "lightestPink",
    secondaryBackground: "pink",

    buttonBackground: "buttonRed",
    inputBackground: "inputPink",
  },
  Colors,
  RawColors,
  () => "ERROR",
);

// String
export const UnicornStrings = setl.themeBasedOn(
  {
    title: "unicornCampSignUp",
    question: "favoriteColor",
    okButton: "rideButton",
    exitButton: "dismountButton",
  },
  Strings,
  RawStrings,
  () => "ERROR",
);

export const UnicornTheme = {
  ...Theme,
  Colors: UnicornColors,
  Strings: UnicornStrings,
} as Theme;
