interface IColor {
  r: number;
  g: number;
  b: number;
}

// Go back to attempt 1 before showing this
type RawColors<T> = { [k in keyof T]: IColor };
const rawColors = <T extends RawColors<T>>(self: T) => self;

interface IColors {
  primaryForeground: string;
  primaryBackground: string;
}

export const RawColors = rawColors({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
});

export const Colors: IColors = {
  primaryForeground: "red",
  primaryBackground: "blue",
};
