import * as setl from "setl";

const buildSimple = <T>(item: T) => item;

export const simpleItems = <TItems extends { [k: string]: T }, T>(
  self: TItems,
  err: T,
) => setl.items<TItems, T, T>(self, buildSimple, () => err);
