import * as setl from "setl";

const buildNumber = (item: number) => item;

export const numbers = <TItems extends setl.Items<TItems, number>>(
  self: TItems,
) => setl.theme(self, buildNumber, () => 0);
