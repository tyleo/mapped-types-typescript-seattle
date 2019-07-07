export interface IRef<T> {
  readonly _TYPE_: "IRef";
  readonly value: keyof T;
}

export const ref = <T>(value: keyof T): IRef<T> => ({ _TYPE_: "IRef", value });

const isRef = <TItems>(v: unknown): v is IRef<TItems> =>
  typeof v === "object" &&
  v !== null &&
  "_TYPE_" in v &&
  (v as any)._TYPE_ === "IRef";

export type Items<TItem, TItems> = {
  readonly [K in keyof TItems]: TItem | IRef<TItems>;
};

type Theme<T, TItemOut> = { readonly [K in keyof T]: TItemOut };

type ThemeKeys<T> = { readonly [K in keyof T]: K };

const intoKeys = <T>(v: T): ThemeKeys<T> =>
  Object.keys(v).reduce(
    (prev, curr) => {
      prev[curr] = curr;
      return prev;
    },
    {} as { [k: string]: string },
  ) as ThemeKeys<T>;

export const theme = <T extends Items<TItem, T>, TItem, TItemOut>(
  self: T,
  buildItem: (item: TItem, getItem: (ref: keyof T) => TItemOut) => TItemOut,
  err: (ref: keyof T) => TItemOut,
): [Theme<T, TItemOut>, ThemeKeys<T>] => {
  const result = {} as { [k in keyof T]: TItemOut };
  const activeSet = new Set<keyof T>();

  const getItem = (ref: keyof T): TItemOut => {
    if (result[ref] !== undefined) return result[ref];
    if (activeSet.has(ref)) return err(ref);

    activeSet.add(ref);

    const item = self[ref] as TItem | IRef<T>;
    result[ref] = isRef<T>(item)
      ? getItem(item.value)
      : buildItem(item, getItem);

    activeSet.delete(ref);

    return result[ref];
  };

  Object.keys(self).forEach(k => getItem(k as keyof T));
  return [result as Theme<T, TItemOut>, intoKeys(result)];
};
