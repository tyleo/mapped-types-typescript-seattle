interface IColor {
  r: number;
  g: number;
  b: number;
}

interface IRawColors {
  red: IColor;
  green: IColor;
  blue: IColor;
}

interface IColors {
  primaryForeground: keyof IRawColors;
  primaryBackground: keyof IRawColors;
}

export const RawColors: IRawColors = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
};

export const Colors: IColors = {
  primaryForeground: "red",
  primaryBackground: "blue",
};
