type Items<T, TItemOut> = { readonly [K in keyof T]: TItemOut };

export const items = <T extends { [k: string]: TItem }, TItem, TItemOut>(
  self: T,
  buildItem: (item: TItem, getItem: (ref: keyof T) => TItemOut) => TItemOut,
  err: (ref: keyof T) => TItemOut,
): Items<T, TItemOut> => {
  const result = {} as { [K in keyof T]: TItemOut };
  const activeSet = new Set<keyof T>();

  const getItem = (ref: keyof T): TItemOut => {
    if (result[ref] !== undefined) return result[ref];
    if (activeSet.has(ref)) return err(ref);

    activeSet.add(ref);

    result[ref] = buildItem(self[ref], getItem);

    activeSet.delete(ref);

    return result[ref];
  };

  Object.keys(self).forEach(k => getItem(k));
  return result as Items<T, TItemOut>;
};

// Mappings
type Keys<T> = { readonly [K in keyof T]: K };

const intoKeys = <T>(v: T): Keys<T> =>
  Object.keys(v).reduce(
    (prev, curr) => {
      prev[curr] = curr;
      return prev;
    },
    {} as { [k: string]: string },
  ) as Keys<T>;

const buildMapping = <TTheme extends { [k: string]: TItemOut }, TItemOut>(
  builtTheme: TTheme,
) => (item: keyof TTheme): TItemOut => builtTheme[item];

export const theme = <
  T extends { [k: string]: keyof TTheme },
  TTheme extends { [k: string]: TItemOut },
  TItemOut
>(
  self: T,
  builtTheme: TTheme,
  err: (ref: keyof T) => TItemOut,
): [Items<T, TItemOut>, Keys<Items<T, TItemOut>>] => {
  const result = items(self, buildMapping<TTheme, TItemOut>(builtTheme), err);
  return [result, intoKeys(result)];
};

// Remap
export const themeBasedOn = <
  T extends { [k in keyof TBasedOn]?: keyof TTheme },
  TBasedOn extends { [k: string]: keyof TTheme },
  TTheme extends { [k: string]: TItemOut },
  TItemOut
>(
  self: T,
  basedOn: Items<TBasedOn, TItemOut>,
  builtTheme: TTheme,
  err: (ref: keyof T) => TItemOut,
): Items<TBasedOn, TItemOut> => {
  for (const [key, value] of Object.entries(self)) {
    if (value === undefined) delete self[key];
  }
  const result = items(
    self as { [k in keyof TBasedOn]: keyof TTheme },
    buildMapping<TTheme, TItemOut>(builtTheme),
    err,
  );
  return { ...basedOn, ...result };
};
