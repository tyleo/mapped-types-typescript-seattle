// 0

const colorTheme0 = {
  red: "rgb(255, 0, 0)",
  green: "rgb(255, 0, 0)",
  blue: "rgb(255, 0, 0)",

  primaryForeground: "red",
  primaryBackground: "blue",
} as const;

// 1

interface IColor1 {
  r: number;
  g: number;
  b: number;
}

interface IColors1 {
  red: IColor1;
  green: IColor1;
  blue: IColor1;

  primaryForeground: string;
  primaryBackground: string;
}

const colorTheme1: IColors1 = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
} as const;

// 2

interface IColor2 {
  r: number;
  g: number;
  b: number;
}

interface IColors2 {
  [k: string]: IColor2 | string;
}

const colorTheme2: IColors2 = {
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
};

// 3

interface IColor3 {
  r: number;
  g: number;
  b: number;
}

type Colors3<T> = {
  [K in keyof T]: IColor3 | keyof T;
};

// TODO: Explain why needed
const colors3 = <T extends Colors3<T>>(self: T) => self;

const colorTheme3 = colors3({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
});

// 4 - TODO: Explain error

type Theme4<T, TItem> = {
  [K in keyof T]: TItem | keyof T;
};

const theme4 = <T extends Theme4<T, TItem>, TItem>(self: T) => self;

interface IColor4 {
  r: number;
  g: number;
  b: number;
}

const colorTheme4 = theme4({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },

  primaryForeground: "red",
  primaryBackground: "blue",
});

// 5

type ThemeIn5<T, TItem> = {
  [K in keyof T]: TItem | keyof T;
};

type Theme5<T, TItemOut> = {
  [K in keyof T]: TItemOut;
};

const theme5 = <T extends Theme4<T, TItem>, TItem, TItemOut>(
  self: T,
  buildItem: (item: TItem) => TItemOut,
): Theme5<T, TItemOut> => {
  const result = {} as { [k: string]: TItemOut };
  const entries = Object.entries(self) as [string, TItem][];

  let entry = entries.shift();
  while (entry !== undefined) {
    const [key, value] = entry;
    result[key] = typeof value === "string" ? result[key] : buildItem(value);
    if (result[key] === undefined) entries.push([key, value]);
    entry = entries.shift();
  }

  return result as Theme5<T, TItemOut>;
};

interface IColor5 {
  r: number;
  g: number;
  b: number;
}

const colorTheme5 = theme5(
  {
    red: { r: 255, g: 0, b: 0 },
    green: { r: 0, g: 255, b: 0 },
    blue: { r: 0, g: 0, b: 255 },

    primaryForeground: "red",
    primaryBackground: "blue",
  },
  (item: IColor4) => `rgb(${item.r}, ${item.g}, ${item.b})`,
);
