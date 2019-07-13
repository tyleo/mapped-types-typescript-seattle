// Slide 2

interface ISizes {
  small: number;
  medium: number;
  large: number;
}

interface IStringSizes {
  small: string;
  medium: string;
  large: string;
}

type PropsToString<T> = {
  [k in keyof T]: string;
};

type StringSizes = PropsToString<ISizes>;

declare let iStringSizes: IStringSizes;
declare let stringSizes: StringSizes;
stringSizes = iStringSizes;
iStringSizes = stringSizes;

iStringSizes = 0 as any;
stringSizes = 0 as any;
