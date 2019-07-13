type Items<T, TItem> = {
  [K in keyof T]: TItem | keyof T;
};

const theme = <T extends Items<T, TItem>, TItem>(self: T) => self;

export const colorTheme = theme({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",

  // Error: properties can be anything
  // anything: 5,
});
