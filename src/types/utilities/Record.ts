/**
 * keyof any: string | number | symbol
 */
type RecordType<K extends keyof any, T> = {
  [P in K]: T;
};
