import * as setl from "setl";

interface IColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a?: number;
}

const buildColor = (item: IColor) =>
  item.a === undefined
    ? `rgb(${item.r}, ${item.g}, ${item.b})`
    : `rgba(${item.r}, ${item.g}, ${item.b}, ${item.a})`;

export const colors = <TItems extends setl.Items<IColor, TItems>>(
  self: TItems,
) => setl.theme(self, buildColor, () => `rgb(0, 0, 0)`);
