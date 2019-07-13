export type Items<T, TItem> = {
  readonly [K in keyof T]: TItem | keyof T;
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

export const theme = <T extends Items<T, TItem>, TItem, TItemOut>(
  self: T,
  buildItem: (item: TItem, getItem: (ref: keyof T) => TItemOut) => TItemOut,
  err: (ref: keyof T) => TItemOut,
): [Theme<T, TItemOut>, ThemeKeys<T>, T] => {
  type Key = keyof T;
  const isKey = (v: Key | TItem): v is Key => typeof v === "string";

  const result = {} as { [K in Key]: TItemOut };
  const activeSet = new Set<Key>();

  const getItem = (ref: Key): TItemOut => {
    if (result[ref] !== undefined) return result[ref];
    if (activeSet.has(ref)) return err(ref);

    activeSet.add(ref);

    const item = self[ref] as Key | TItem;
    result[ref] = isKey(item) ? getItem(item) : buildItem(item, getItem);

    activeSet.delete(ref);

    return result[ref];
  };

  Object.keys(self).forEach(k => getItem(k as Key));
  return [result as Theme<T, TItemOut>, intoKeys(result), self];
};
