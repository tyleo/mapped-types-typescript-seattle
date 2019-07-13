import * as setl from "setl";

export interface IKey<T> {
  readonly key: keyof T;
}

const buildColorMapping = <TColors extends { [k: string]: string }>(
  colors: TColors,
) => (item: IKey<TColors>) => colors[item.key];

export const colorMappings = <
  TItems extends setl.Items<TItems, IKey<TColors>>,
  TColors extends { [k: string]: string }
>(
  self: TItems,
  colors: TColors,
) => setl.theme(self, buildColorMapping(colors), () => "rgb(0, 0, 0)");
