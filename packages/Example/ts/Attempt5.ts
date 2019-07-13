interface IColor {
  r: number;
  g: number;
  b: number;
}

type Items<T, TItem> = { [K in keyof T]: TItem | keyof T };

type Theme<T, TItemOut> = { [K in keyof T]: TItemOut };

const theme = <T extends Items<T, TItem>, TItem, TItemOut>(
  self: T,
  buildItem: (item: TItem) => TItemOut,
): Theme<T, TItemOut> => {
  const result = {} as { [k: string]: TItemOut };
  const entries = Object.entries(self) as [string, TItem][];

  let entry = entries.shift();
  while (entry !== undefined) {
    const [key, value] = entry;
    result[key] = typeof value === "string" ? result[key] : buildItem(value);
    if (result[key] === undefined) entries.push([key, value]);
    entry = entries.shift();
  }

  return result as Theme<T, TItemOut>;
};

const colorTheme = theme(
  {
    red: { r: 255, g: 0, b: 0 },
    green: { r: 0, g: 255, b: 0 },
    blue: { r: 0, g: 0, b: 255 },

    primaryForeground: "red",
    primaryBackground: "blue",
  },
  (item: IColor) => `rgb(${item.r}, ${item.g}, ${item.b})`,
);
