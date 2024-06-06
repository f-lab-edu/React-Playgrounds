/**
 * keyof any: string | number | symbol
 */
type RecordType<K extends keyof any, T> = {
  [P in K]: T;
};

/**
 * Example
 * GA Tag
 */
type WindowWithDataLayer = Window & {
  dataLayer: RecordType<string, any>[];
};

declare const window: WindowWithDataLayer;
