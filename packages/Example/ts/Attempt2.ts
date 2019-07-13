interface IColor {
  r: number;
  g: number;
  b: number;
}

interface IColors {
  [k: string]: IColor | string;
}

export const colorTheme: IColors = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  // Error: These don't have to be keys
  primaryForeground: "red",
  primaryBackground: "blue",
};
