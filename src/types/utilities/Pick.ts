/**
 *  T 타입에서 K 타입 속성만 추출한다.
 */
type PickType<T, K extends keyof T> = {
  [P in K]: T[P];
};
