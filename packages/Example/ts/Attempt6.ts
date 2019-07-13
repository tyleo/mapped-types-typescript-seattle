interface IColor {
  r: number;
  g: number;
  b: number;
}

type RawColors<T> = { [k in keyof T]: IColor };
const rawColors = <T extends RawColors<T>>(self: T) => self;

type Colors<T, TRawColors> = { [k in keyof T]: keyof TRawColors };

const colors = <
  T extends Colors<T, TRawColors>,
  TRawColors extends RawColors<TRawColors>
>(
  self: T,
  rawColors: TRawColors,
) => {
  const result = {} as { [k in keyof T]: string };

  for (const [key, value] of Object.entries(self)) {
    const rawColor = rawColors[value as keyof TRawColors];
    result[
      key as keyof T
    ] = `rgb(r: ${rawColor.r}, g: ${rawColor.g}, b: ${rawColor.b})`;
  }

  return result;
};

export const RawColors = rawColors({
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
});

export const Colors = colors(
  {
    primaryForeground: "red",
    primaryBackground: "blue",
  },
  RawColors,
);
