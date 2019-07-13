import * as setl from "setl";

const buildSimple = <T>(item: T) => item;

export const simpleTheme = <TItems extends { [k: string]: T }, T>(
  self: TItems,
  err: T,
) => setl.theme<TItems, T, T>(self, buildSimple, () => err);
