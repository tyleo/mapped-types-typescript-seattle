import * as App from "App";

const buildNumber = (item: number) => item;

export const numbers = <TItems extends App.Items<number, TItems>>(
  self: TItems,
) => App.theme(self, buildNumber, () => 0);
