interface IColor {
  r: number;
  g: number;
  b: number;
}

interface IColors {
  red: IColor;
  green: IColor;
  blue: IColor;

  primaryForeground: string;
  primaryBackground: string;
}

export const colorTheme: IColors = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
};
