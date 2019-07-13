import * as App from "App";

export const [RawLightColors, RawLightColor] = App.colors({
  ...App.RawColorInput,
  grey: { r: 255, g: 255, b: 255 },
});
export type RawLightColor = keyof typeof RawLightColor;

export const [LightColors, LightColor] = App.colorMappings(
  {
    ...App.ColorInput,
    inputBackground: { key: "blue" },
  },
  RawLightColors,
);
