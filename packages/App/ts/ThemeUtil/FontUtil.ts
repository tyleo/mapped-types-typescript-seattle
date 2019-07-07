import * as App from "App";

export interface IFont<TKey extends string | number | symbol = string> {
  basedOn?: TKey;
  readonly fontStyle?: string;
  readonly fontVariant?: string;
  readonly fontWeight?: string;
  readonly fontStretch?: string;
  readonly fontSize?: string;
  readonly lineHeight?: string;
  readonly fontFamily?: string;
}

const buildFont = <TFontKey extends string | number | symbol>() => (
  item: IFont<TFontKey>,
  getFont: (key: TFontKey) => [IFont<TFontKey>, string],
): [IFont<TFontKey>, string] => {
  const result = {
    ...(item.basedOn === undefined ? {} : getFont(item.basedOn)),
    ...item,
    basedOn: undefined,
  };
  const pad = (object?: any) => (object === undefined ? "" : `${object} `);
  return [
    result,
    `${pad(item.fontStyle)}${pad(item.fontVariant)}${pad(item.fontWeight)}${pad(
      item.fontSize,
    )}${item.lineHeight === undefined ? "" : `/${item.lineHeight}`}${
      item.fontFamily
    }`,
  ];
};

export const fonts = <TItems extends App.Items<IFont<keyof TItems>, TItems>>(
  self: TItems,
) =>
  App.theme(self, buildFont<keyof TItems>(), (): [
    IFont<keyof TItems>,
    string,
  ] => [{}, "comic sans"]);
