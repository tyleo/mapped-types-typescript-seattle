interface IColor {
  r: number;
  g: number;
  b: number;
}

type Colors<T> = {
  [K in keyof T]: IColor | keyof T;
};

const colors = <T extends Colors<T>>(self: T) => self;

export const colorTheme = colors({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
});
